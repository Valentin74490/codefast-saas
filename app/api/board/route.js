import { NextResponse } from "next/server";
import { auth } from "@/auth"
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name) {
      return NextResponse.json(
        { error: "Nom du projet à rajouter avant l'import des photos 🦄"},
        { status: 400}
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { error: "Not authorized"},
        { status: 401}
      );
    }
    await connectMongo();

    const user = await User.findById(session.user.id);

    const board = await Board.create({
      userId: user._id,
      name: body.name,
    });

    user.boards.push(board._id);
    await user.save();

    return NextResponse.json({board})

  } catch (e) {
    console.error("Erreur complète :", e);
    return NextResponse.json({ error: e.message }, {status: 500});
  }
}
