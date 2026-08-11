import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Découvrez en quelques étapes comment Gramme aide les boulangers et pâtissiers à organiser recettes, achats, production et marges — simplement, au quotidien.",
  alternates: {
    canonical: "https://gramme.app/comment-ca-marche",
  },
  openGraph: {
    title: "Comment ça marche | Gramme",
    description:
      "Un parcours clair : recettes, factures, production, stock et marges — sans complexité inutile.",
    url: "https://gramme.app/comment-ca-marche",
  },
};

const steps = [
  {
    n: "01",
    title: "Centralisez vos recettes",
    text: "Rassemblez vos fiches techniques dans un format clair et homogène. Saisie assistée ou reprise de vos documents existants : vos recettes restent organisées, partageables avec l’équipe, prêtes pour l’atelier.",
  },
  {
    n: "02",
    title: "Mettez vos prix à jour sans ressaisie",
    text: "Photographiez ou importez vos factures fournisseurs. Les prix d’achat alimentent votre mercuriale et se répercutent sur les recettes concernées — vous voyez l’impact avant qu’il n’érode vos marges.",
  },
  {
    n: "03",
    title: "Planifiez la production du jour",
    text: "Choisissez les recettes et quantités du jour. Gramme consolide les besoins en matières, vous aide à organiser la journée et suit le coût de fabrication sans tableur parallèle.",
  },
  {
    n: "04",
    title: "Gardez le stock vivant",
    text: "Le stock évolue avec vos productions et vos achats. Vue par catégories, valeur du stock, inventaires rapides : moins de ruptures, moins de gaspillage, plus de clarté en laboratoire.",
  },
  {
    n: "05",
    title: "Pilotez vos marges au quotidien",
    text: "Alertes sur les recettes sensibles, vision des marges et priorisation des actions. Vous ne découvrez plus vos chiffres en fin de mois : vous les anticipez entre deux fournées.",
  },
];

const pillars = [
  {
    title: "Pensé pour le laboratoire",
    text: "Interface lisible sur téléphone et tablette, adaptée au rythme de l’atelier — pas un logiciel de bureau lourd.",
  },
  {
    title: "La précision avant la complexité",
    text: "Six modules reliés (recettes, achats, production, stock, fournisseurs, décisions) sans ERP industriel.",
  },
  {
    title: "Accompagnement à la mise en service",
    text: "On vous aide à démarrer proprement : structuration des recettes, mercuriale de base, prise en main de l’équipe.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Comment ça marche — Gramme",
            description:
              "Parcours en étapes pour comprendre comment Gramme pilote recettes, achats, production et marges en boulangerie-pâtisserie.",
            path: "/comment-ca-marche",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Comment ça marche", path: "/comment-ca-marche" },
          ]),
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Comment ça marche" />
        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <p className="mb-4 inline-flex rounded-full border border-[#a8cf8c]/60 bg-[#a8cf8c]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#3e6134]">
            Parcours
          </p>
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">Comment ça marche</h1>
          <p className="mt-5 max-w-2xl text-base text-[#4d6952] md:text-lg">
            Gramme ne remplace ni le geste ni l’intuition. Il les prolonge : un compagnon de laboratoire pour protéger vos marges — au gramme près.
          </p>
        </section>

        <ol className="mt-10 space-y-5 md:mt-14">
          {steps.map((step) => (
            <li key={step.n}>
              <article className="grid gap-4 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-8 md:p-9">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#264021] text-sm font-black text-[#a8cf8c]">
                  {step.n}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-[#2f4f26] md:text-2xl">{step.title}</h2>
                  <p className="mt-3 leading-relaxed text-[#4d6952] md:text-lg">{step.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <section className="mt-12 md:mt-16" aria-labelledby="pillars-title">
          <h2 id="pillars-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Ce qui change vraiment
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-5">
                <h3 className="text-lg font-bold text-[#355329]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-[#264021] p-6 text-white sm:p-8 md:mt-16 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">Prêt à voir Gramme sur votre activité ?</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            On échange sur votre laboratoire, vos recettes et vos priorités — sans engagement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
              Demander une démonstration
            </Link>
            <Link href="/tarifs" className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white">
              Voir les tarifs
            </Link>
          </div>
        </section>
        <RelatedLinks
          links={[
            { href: "/a-propos-de-gramme", label: "À propos de Gramme" },
            { href: "/tarifs", label: "Tarifs logiciel boulangerie" },
            { href: "/contact", label: "Demander une démonstration" },
          ]}
        />
      </main>
    </>
  );
}
