

import { NextResponse } from "next/server";
import { Filter} from "bad-words";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import { auth } from "@/auth";

export async function POST(req) {
  try {

    const body = await req.json();
    const { title, description } = body;

    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    const badWordsFilter = new Filter();
    const sanitizedTitle = badWordsFilter.clean(title);
    const sanitizedDescription = badWordsFilter.clean(description);

    if (!sanitizedTitle) {
      return NextResponse.json(
        { error: "Le titre est requis" },
        { status: 400 }
      );
    }

    const session = await auth();

    await connectMongo();

    const post = await Post.create({
      title: sanitizedTitle,
      description: sanitizedDescription,
      boardId,
      userId: session?.user?.id,
    });

    return NextResponse.json({ post });
  }
  catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const session = await auth();
    await connectMongo();

    const user = await User.findById(session.user.id); // ✅ on récupère sans supprimer !

    if (!user?.hasAccess) { // ✅ vérifie bien que user existe
      return NextResponse.json(
        { error: "Il faut s'inscrire" },
        { status: 403 }
      );
    }

    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    if (!user.boards.includes(post.boardId.toString())) {
      return NextResponse.json(
        { error: "You are not allowed to delete this post" },
        { status: 401 }
      );
    }

    await Post.deleteOne({ _id: postId });
    return NextResponse.json({ message: "Post deleted" });

  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
