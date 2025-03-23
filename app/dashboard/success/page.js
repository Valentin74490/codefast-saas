
import Link from "next/link";

export default async function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-9">
      <h1>Merci pour votre achat ❤️</h1>
      <Link href="/dashboard" className="btn btn-secondary">
        Go optimiser mes images maintenant 🚀
      </Link>
    </main>
  );
}
