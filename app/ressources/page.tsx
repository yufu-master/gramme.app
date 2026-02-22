import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gramme | Ressources",
  description: "Ressources Gramme pour piloter votre boulangerie.",
};

export default function Page() {
  return <Simple title="Ressources" />;
}

function Simple({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-3 text-[var(--muted-foreground)]">Page prête pour enrichissement SEO et conversion.</p>
      <Link href="/" className="mt-6 inline-block rounded-xl bg-[#a8cf8c] px-4 py-3 font-semibold text-[#264021]">Retour à l’accueil</Link>
    </main>
  );
}
