"use client";
import Link from "next/link";
import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Val";

  return (
    <main>
      <section className="bg-base-200">
        <div className=" flex flew-row justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">VertiWebP</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link">Tarif</a>
            <a className="link">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="p-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Intégrez ici l'ensemble de vos images pour les convertir en webP
        </h1>
        <div className="opacity-90 mb-10">
          Transformez vos images aux critères Google
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
