import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";


const getBoard = async (boardId) => {

  await connectMongo();
  const board = await Board.findById(boardId);

  if (!board) {
    redirect ("/");
  }
  return Board;
}



export default async function PublicFeedbackBoard({ params }) {

  const { boardId }  = params;
  const board = await getBoard(boardId);

  return <main> { boardId.name } (public) </main>;
}
