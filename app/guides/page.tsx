import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { publishedGuides } from "@/content/guides";
import { formatGuideDate } from "@/lib/guides";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Guides boulangerie & pâtisserie",
  description:
    "Guides pratiques Gramme pour artisans : logiciel conçu par un chef pâtissier, numérisation de fiches techniques, coûts de revient et marges.",
  alternates: { canonical: "https://gramme.app/guides" },
  openGraph: {
    title: "Guides Gramme | Boulangerie & pâtisserie",
    description: "Articles pratiques pour piloter recettes, coûts et marges en laboratoire.",
    url: "https://gramme.app/guides",
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Guides Gramme",
            description: "Guides pratiques pour artisans boulangers et pâtissiers.",
            path: "/guides",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
        ]}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Guides" />
        <section className="mt-8 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-black text-[#27421f] md:text-4xl">Guides pour le laboratoire</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#4d6952]">
            Des articles concrets sur les fiches techniques, le coût de revient et l&apos;organisation d&apos;atelier —
            écrits pour les artisans boulangers et pâtissiers.
          </p>
        </section>

        {publishedGuides.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-6 text-[#4d6952]">
            Les premiers guides sont en préparation. En attendant, découvrez{" "}
            <Link href="/comment-ca-marche" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              comment marche le logiciel
            </Link>{" "}
            ou{" "}
            <Link href="/contact" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              demandez une démonstration
            </Link>
            .
          </p>
        ) : (
          <ul className="mt-10 grid gap-5">
            {publishedGuides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="block rounded-3xl border border-[#dcead2] bg-white p-6 transition hover:bg-[#f6fbf2] sm:p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6e9f55]">
                    {formatGuideDate(guide.publishedAt)}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-[#27421f] sm:text-2xl">{guide.title}</h2>
                  <p className="mt-3 max-w-[42rem] text-[#4d6952]">{guide.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#355329]">Lire l&apos;article →</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <RelatedLinks
          links={[
            { href: "/#fonctionnalites", label: "Fonctionnalités logiciel boulangerie" },
            { href: "/tarifs", label: "Tarifs Gramme" },
            { href: "/contact", label: "Demander une démonstration" },
          ]}
        />
      </main>
    </>
  );
}
