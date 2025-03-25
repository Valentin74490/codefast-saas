

import { NextResponse } from "next/server";
import { Filter} from "bad-words";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
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
