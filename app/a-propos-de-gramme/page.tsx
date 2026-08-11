import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "À propos — Chef pâtissier & logiciel boulangerie",
  description:
    "Découvrez Gramme, logiciel de gestion pour boulangeries et pâtisseries, co-fondé par Jeremy, chef pâtissier. Une vision terrain pour recettes, coûts matière et marges.",
  keywords: [
    "à propos Gramme",
    "chef pâtissier logiciel",
    "logiciel boulangerie artisan",
    "co-fondateur Gramme",
    "outil gestion pâtisserie",
  ],
  alternates: {
    canonical: "https://gramme.app/a-propos-de-gramme",
  },
  openGraph: {
    title: "À propos de Gramme | Logiciel gestion boulangerie",
    description:
      "Né du terrain avec un chef pâtissier : Gramme accompagne les artisans pour organiser recettes, coûts et marges.",
    url: "https://gramme.app/a-propos-de-gramme",
    images: [
      {
        url: "/images/jeremy-chef-rd.jpg",
        width: 800,
        height: 1000,
        alt: "Jeremy, Chef pâtissier & Co-fondateur de Gramme",
      },
    ],
  },
};

const sections = [
  {
    title: "Gramme — Né du terrain, conçu pour vous.",
    content:
      "Gramme est né de la rencontre entre Jeremy, Chef pâtissier & Co-fondateur, profondément ancré dans les réalités du métier, et un développeur passionné par l'innovation. Ensemble, ils ont conçu un outil qui répond concrètement aux contraintes du quotidien : la gestion des recettes, le suivi des coûts et la protection des marges. Une application pensée par des gens du terrain, pour des artisans exigeants.",
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
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "À propos de Gramme",
            description:
              "Histoire et vision de Gramme, logiciel de gestion pour boulangeries et pâtisseries co-fondé par un chef pâtissier.",
            path: "/a-propos-de-gramme",
            type: "AboutPage",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "À propos de Gramme", path: "/a-propos-de-gramme" },
          ]),
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="À propos de Gramme" />
        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <p className="mb-4 inline-flex rounded-full border border-[#a8cf8c]/60 bg-[#a8cf8c]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#3e6134]">
            Notre vision
          </p>
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">À propos de Gramme</h1>
          <p className="mt-5 max-w-3xl text-base text-[#4d6952] md:text-lg">
            Un logiciel de gestion boulangerie &amp; pâtisserie pensé pour simplifier votre quotidien, fiabiliser vos chiffres et vous concentrer sur l&apos;essentiel : votre savoir-faire.
          </p>
        </section>

        <section className="mt-10 overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-sm md:mt-14" aria-labelledby="jeremy-title">
          <div className="grid items-stretch md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-full">
              <Image
                src="/images/jeremy-chef-rd.jpg"
                alt="Jeremy, Chef pâtissier et Co-fondateur de Gramme"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-7 md:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e9f55]">L&apos;équipe</p>
              <h2 id="jeremy-title" className="mt-3 text-2xl font-bold text-[#2f4f26] md:text-3xl">Jeremy</h2>
              <p className="mt-2 text-sm font-semibold text-[#355329]">
                Chef pâtissier &amp; Co-fondateur de Gramme
              </p>
              <p className="mt-5 leading-relaxed text-[#4d6952] md:text-lg">
                Issu du terrain et formé aux exigences des grandes structures, Jeremy dirige la R&amp;D d&apos;une grande
                entreprise du secteur. Chaque jour, il confronte innovation, coûts matière et réalités de production.
                C&apos;est cette expérience — entre laboratoire d&apos;excellence et contraintes économiques — qui a
                inspiré Gramme : un outil simple, précis, pensé pour les artisans qui veulent protéger leurs marges
                sans sacrifier leur savoir-faire.
              </p>
              <p className="mt-4 leading-relaxed text-[#4d6952] md:text-lg">
                Avec Gramme, il transpose les méthodes de recherche et de développement des grandes structures
                aux boulangeries et pâtisseries indépendantes : recettes structurées, prix à jour, décisions rapides — au gramme près.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:mt-14">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-7 md:p-9">
              <h2 className="text-2xl font-bold text-[#2f4f26]">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-[#4d6952] md:text-lg">{section.content}</p>
            </article>
          ))}
        </section>
        <RelatedLinks
          links={[
            { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
            { href: "/securite", label: "Sécurité des données" },
            { href: "/contact", label: "Demander une démonstration" },
          ]}
        />
      </main>
    </>
  );
}
