import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import FormAddPost from "@/components/FormAddPost";


const getBoard = async (boardId) => {

  await connectMongo();
  const board = await Board.findById(boardId);

  if (!board) {
    redirect ("/");
  }
  return board;
}



export default async function PublicFeedbackBoard({ params }) {


  const { boardId }  = params;
  const board = await getBoard(boardId);

  return (
  <main className="min-h-screen bg-base-200">
    { boardId.name } (public)
    <FormAddPost boardId={boardId} />
   </main>);
}
