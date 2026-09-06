import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "@/components/features/FeatureIcon";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { features, featurePath, nombreModules } from "@/content/features";
import { SITE_URL, webPageSchema, imageSociale } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fonctionnalités du logiciel de gestion boulangerie",
  description:
    `Les ${nombreModules} modules de Gramme : recettes, fiches techniques, coût de revient, factures, mercuriale, production, équilibrage, vitrine, stock, comptabilité, hygiène HACCP et étiquetage.`,
  keywords: [
    "fonctionnalités logiciel boulangerie",
    "logiciel gestion pâtisserie",
    "logiciel gestion de production",
    "fiche technique boulangerie",
    "digitalisation des recettes",
    "calculatrice coût de revient",
    "alertes de prix",
    "planning de production",
    "gestion de stocks",
    "marges en temps réel",
    "mercuriale fournisseurs",
    "gestion stock pâtisserie",
  ],
  alternates: { canonical: `${SITE_URL}/fonctionnalites` },
  openGraph: {
    images: imageSociale("/images/app/recette-fiche.png", "Une fiche technique dans Gramme : ingrédients, quantités et rendement"),
    title: "Fonctionnalités | Gramme",
    description:
      `Recettes, fiches techniques, factures, mercuriale, production, prévisionnel, vitrine, stock, comptabilité, hygiène et étiquetage : ${nombreModules} modules reliés entre eux.`,
    url: `${SITE_URL}/fonctionnalites`,
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fonctionnalités du logiciel Gramme",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: features.length,
  itemListElement: features.map((feature, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: feature.name,
    description: feature.summary,
    url: `${SITE_URL}${featurePath(feature.slug)}`,
  })),
};

export default function FonctionnalitesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Fonctionnalités du logiciel de gestion boulangerie | Gramme",
            description:
              `Les ${nombreModules} modules de Gramme pour les boulangeries, pâtisseries, chocolateries et glaceries artisanales : recettes, fiches techniques et coûts, achats et alertes de prix, équilibrage, production et prévisionnel, vitrine, stock, comptabilité, fournisseurs, hygiène HACCP et étiquetage.`,
            path: "/fonctionnalites",
          }),
          itemListSchema,
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Fonctionnalités" />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">
            {nombreModules.charAt(0).toUpperCase() + nombreModules.slice(1)} modules, une seule application
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[#4d6952] md:text-lg">
            Gramme relie ce qui est habituellement éclaté entre un classeur de recettes, une pile de factures, un
            tableur de stock et un tableau de bord annuel. Chaque module fonctionne seul, mais c&apos;est leur
            enchaînement qui protège votre marge : un prix d&apos;achat qui bouge traverse la mercuriale, les
            sous-recettes, les fiches techniques et remonte en alerte.
          </p>
        </section>

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative aspect-[16/10] w-full bg-[#f6fbf2]">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 460px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="flex items-center gap-2 text-xl font-bold text-[#27421f]">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#a8cf8c]/25 text-[#355329]">
                      <FeatureIcon name={feature.icon} className="size-4" />
                    </span>
                    {feature.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4d6952]">{feature.summary}</p>
                  <Link
                    href={featurePath(feature.slug)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#355329] underline-offset-2 hover:underline"
                  >
                    Voir le détail
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <section className="mt-12 rounded-3xl bg-[#264021] p-6 text-white sm:p-8 md:mt-16 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">On installe tout avec vous</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Reprise de vos recettes et de vos factures des trois derniers mois, création des comptes de l&apos;équipe,
            formation : le compte est utilisable dès le premier jour.
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
            { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
            { href: "/guides", label: "Guides fiches techniques & coûts" },
            { href: "/securite", label: "Sécurité & confidentialité" },
          ]}
        />
      </main>
    </>
  );
}
