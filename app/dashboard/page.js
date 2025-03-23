import Link from "next/link";
import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";
import ButtonCheckout from "@/components/ButtonCheckout";
import ButtonPortal from "@/components/ButtonPortal";


async function getUser() {
  const session = await auth();
  await connectMongo();
  return await User.findById(session.user.id).populate("boards");
}

export default async function Dasboard() {
  const user = await getUser();

  return (
    <main className="bg-base-200 min-screen">
      {/* HEADER */}
      <section className="bg-base-100">
        <div className="mx-auto max-w-5xl px-5 py-3 flex justify-between">
          {user.hasAccess ? <ButtonPortal /> : <ButtonCheckout />}
          <ButtonLogout />
        </div>
      </section>
      <section className="px-5 py-12 mx-auto max-w-5xl space-y-12">
        {/* Autres contenus si nécessaire */}
      </section>
      <section className="max-x-5xl mx-auto px-5 py-12">
        <FormNewBoard />
        <div>
          <div>
            <h1 className="font-extrabold text-xl mb-4">
              {user.boards.length} projets
            </h1>
            <ul className="space-y-4">
              {user.boards.map((board) => {
                return (
                  <li key={board._id}>
                    <Link
                    href={`/dashboard/b/${board._id}`}
                    className="bg-base-100 p-6 rounded-3xl block hover:bg-secondary hover:text-neutral-content duration-500"
                    >
                      {board.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
