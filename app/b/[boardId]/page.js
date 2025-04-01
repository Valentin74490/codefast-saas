import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import Post from "@/models/Post";
import FormAddPost from "@/components/FormAddPost";
import CardPost from "@/components/CardPost";

const getData = async (boardId) => {
  await connectMongo();
  const board = await Board.findById(boardId);
  const posts = await Post.find({ boardId }).sort({ createdAt: -1 });

  if (!board) {
    redirect("/");
  }

  return {
    board,
    posts,
  };
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;
  const { board, posts } = await getData(boardId);

  return (
    <main className="bg-base-200 min-h-screen">
      {/* HEADER */}
      <section className="bg-base-100">
        <div className="mx-auto max-w-5xl px-5 py-3">
          <h1 className="font-extrabold text-xl">{board.name}</h1>
        </div>
      </section>

      {/* CONTENU */}
      <section className="max-w-5xl mx-auto px-5 py-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Colonne gauche */}
        <div className="space-y-8">
          <FormAddPost boardId={boardId} />
        </div>

        {/* Colonne droite */}
        <ul className="space-y-4 flex-grow">
          {posts.map((post) => (
            <CardPost key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}
