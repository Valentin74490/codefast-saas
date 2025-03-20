"use client"
import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";

export default function Dasboard() {
  return (
    <main className="bg-base-200 min-screen">
      {/* HEADER */}
      <section className="bg-base-100">
        <div className="mx-auto maw-w-5xl  px-5 py-3 flex justify-end">
        <ButtonLogout />

        </div>
      </section>
      <section className="px-5 py-12 mx-auto maw-w-5xl">

      </section>
      <FormNewBoard />
      <div>
      </div>
  </main>
  );
}
