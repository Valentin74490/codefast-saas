"use client";
import Link from "next/link";
import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";
import ListItems from "@/components/listItems";
import FAQListItem from "@/components/FAQListItem";
import pagespeed from "@/app/pagespeed.png";

export default function Home() {
  const isLoggedIn = true;
  const name = "Val";
  const greeting1 = `Hello ${isLoggedIn ? name : "there"}`;

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="flex flew-row justify-between items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="font-bold">VertiWebP</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#price">Tarif</a>
            <a className="link link-hover" href="#FAQ">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="p-8 py-32 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start ">
        <Image src={pagespeed} alt="pagespeed" className="rounded-sm w-96 h-80" />
        <div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Intégrez ici l'ensemble de vos images pour les convertir en webP
        </h1>
        <div className="opacity-90 mb-10">
          Transformez vos images aux critères Google
        </div >
        <ButtonLogin isLoggedIn={isLoggedIn} name={name}  />
        </div>

      </section>

      {/* PRICING */}
      <section className="bg-base-200" id="price">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-secondary">
            Pricing
          </p>
          <h2 className="mb-12 text-3xl lg:text-4xl font-extrabold text-center">
            Tous les prix
          </h2>
          <div className="p-8 bg-base-100 w-96 rounded-2xl mx-auto">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-extrabold">20€</div>
              <div className="uppercase text-sm font-medium opacity-50">/mois</div>
            </div>
            <ul className="space-y-2">
              <ListItems text="Optimisez 10 images en webP" />
              <ListItems text="Intégrez une description optimisée SEO grâce à l'IA" />
            </ul>
            <div className="mt-4">
              <ButtonLogin
                className="mt-8"
                isLoggedIn={isLoggedIn}
                name={name}
                extraStyle="w-full"
              />
            </div>
          </div>

          {/* FAQ */}
          <section id="FAQ" className="bg-base-200">
            <div className="py-32 px-8 max-w-3xl mx-auto">
              <p className="text-sm uppercase font-medium text-center">FAQ</p>
              <h2 className="text-3xl lg-text-4xl font-extrabold mb-12 text-center">
                Question Fréquentes
              </h2>
              <ul>
                {[
                  {
                    question: "Pourquoi mettre ses images en webP",
                    answer:
                      "Vous allez alléger considérablement le poids de l'image, cela va donc améliorer le score de vitesse de votre page web",
                  },
                  {
                    question: "Pourquoi intégrer une description sur l'image ?",
                    answer:
                      "Pour donner un sens à votre image, Google n'interprète pas une image mais sa description",
                  },
                ].map((qa) => (
                  <FAQListItem key={qa.question} qa={qa} />
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
