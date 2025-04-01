import { NextResponse } from 'next/server';
import connectMongo from '@/libs/mongoose';
import Post from '@/models/Post';

export async function POST(req) {
  const body = await req.json(); // ✅ récupérer postId depuis le body
  const postId = body.postId;

  try {
    await connectMongo();
    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    post.votesCounter += 1;
    await post.save();

    return NextResponse.json({ votesCounter: post.votesCounter }); // tu peux retourner le compteur si tu veux
  } catch (e) {
    console.error(e); // ✅ correction ici
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  const body = await req.json(); // même correction ici
  const postId = body.postId;

  try {
    await connectMongo();
    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    post.votesCounter -= 1;
    await post.save();

    return NextResponse.json({ votesCounter: post.votesCounter }); // pareil ici si besoin
  } catch (e) {
    console.error(e); // ✅
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
