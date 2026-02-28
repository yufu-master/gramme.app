import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de Gramme",
  description: "Découvrez l'histoire de Gramme et notre vision pour accompagner les artisans boulangers et pâtissiers.",
};

const sections = [
  {
    title: "Gramme — Né du terrain, conçu pour vous.",
    content:
      "Gramme est né de la rencontre entre un chef pâtissier, profondément ancré dans les réalités du métier, et un développeur passionné par l'innovation. Ensemble, nous avons conçu un outil qui répond concrètement aux contraintes que vous vivez au quotidien : la gestion des recettes, le suivi des coûts et la protection de vos marges. Une application pensée par des gens du terrain, pour des artisans exigeants.",
  },
  {
    title: "Vos recettes, enfin organisées.",
    content:
      "Nous le savons tous : saisir, modifier et faire évoluer ses recettes prend un temps considérable. Sans organisation claire, les fiches techniques s'accumulent, se perdent, et chaque mise à jour devient une corvée. Avec Gramme, centralisez l'ensemble de vos recettes dans un format identique et structuré, modifiez-les en quelques clics et partagez-les instantanément avec vos collaborateurs. Fini les fichiers éparpillés! Votre savoir-faire mérite un outil à sa hauteur.",
  },
  {
    title: "Vos marges, toujours sous contrôle.",
    content:
      "En 2026, la rentabilité n'est plus une option : c'est une nécessité. Pourtant, pour les petites structures, suivre l'évolution des prix des matières premières relève souvent du casse-tête. Gramme vous permet de répertorier l'ensemble de vos factures, de gérer votre carnet de fournisseurs et de maintenir vos tarifs d'achat à jour en temps réel. Mieux encore : dès qu'un prix évolue, Gramme recalcule automatiquement le prix de revient de toutes les recettes concernées. Un avantage décisif pour protéger vos marges sans y passer des heures.",
  },
  {
    title: "Une structure qui grandit avec vous.",
    content:
      "Comme vous, Gramme évolue en permanence. Nous sommes convaincus que les meilleurs outils sont ceux qui s'adaptent aux réalités du terrain; et c'est précisément ce que nous nous engageons à vous offrir, aujourd'hui et demain.",
  },
];

export default function AProposDeGrammePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6fbf2,_#ffffff_50%)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-wide">
            <Image src="/logos/gramme-icon.svg" alt="Logo Gramme" width={31} height={31} />
            <span>GRAMME</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
            <Link href="/comment-ca-marche" className="whitespace-nowrap">Comment ça marche</Link>
            <Link href="/demo" className="whitespace-nowrap">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-14 md:pt-20">
        <section className="rounded-3xl border border-[#dcead2] bg-white/90 p-8 shadow-[0_20px_70px_rgba(58,92,39,0.08)] md:p-12">
          <p className="mb-4 inline-flex rounded-full border border-[#a8cf8c]/60 bg-[#a8cf8c]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#3e6134]">
            Notre vision
          </p>
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">À propos de Gramme</h1>
          <p className="mt-5 max-w-3xl text-base text-[#4d6952] md:text-lg">
            Un outil pensé pour simplifier votre quotidien, fiabiliser vos chiffres et vous permettre de vous concentrer sur l&apos;essentiel : votre savoir-faire.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:mt-14">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-[#dcead2] bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-2xl font-bold text-[#2f4f26]">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-[#4d6952] md:text-lg">{section.content}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
