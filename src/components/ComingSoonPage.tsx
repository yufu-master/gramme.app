import Image from "next/image";
import Link from "next/link";

export function ComingSoonPage({ title }: { title: string }) {
  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center px-5 py-16">
      <section className="w-full max-w-xl rounded-3xl border border-[#dcead2] bg-white p-10 text-center shadow-[0_20px_70px_rgba(58,92,39,0.08)]">
        <Image src="/logos/gramme-icon.svg" alt="Logo Gramme" width={82} height={82} className="mx-auto" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#6e9f55]">{title}</p>
        <h1 className="mt-3 text-3xl font-black text-[#27421f] md:text-4xl">BIENTÔT DISPONIBLE</h1>
        <p className="mt-4 text-[#4d6952]">Cette page est en préparation. Revenez très bientôt pour la découvrir.</p>
        <Link href="/" className="mt-8 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
          Retour à l&apos;accueil
        </Link>
      </section>
    </main>
  );
}
