import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { publishedArticles } from "@/content/articles";
import { formatGuideDate } from "@/lib/guides";
import { breadcrumbSchema, SITE_URL, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Articles — gestion, coûts et marges en boulangerie",
  description:
    "Ce qu'on apprend en reprenant les chiffres de vrais ateliers : le pourcentage de perte qui fausse les marges, le prix réel d'un logiciel de gestion, et pourquoi un outil de bureau finit par ne plus être ouvert.",
  keywords: [
    "articles gestion boulangerie",
    "blog boulangerie pâtisserie gestion",
    "rentabilité boulangerie artisanale",
    "marges pâtisserie conseils",
  ],
  alternates: { canonical: `${SITE_URL}/articles` },
  openGraph: {
    title: "Articles — gestion, coûts et marges en boulangerie",
    description: "Ce qu'on apprend en reprenant les chiffres de vrais ateliers.",
    url: `${SITE_URL}/articles`,
  },
};

export default function ArticlesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Articles Gramme",
            description: "Analyses et points de vue sur la gestion d'un atelier de boulangerie-pâtisserie.",
            path: "/articles",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Articles", path: "/articles" },
          ]),
        ]}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Articles" />
        <section className="mt-8 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-black text-[#27421f] md:text-4xl">
            Ce qu&apos;on apprend en reprenant de vrais chiffres
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#4d6952]">
            Nous montons les comptes d&apos;ateliers artisanaux : leurs fiches, leurs factures, leurs marges. Ces
            articles racontent ce qu&apos;on y trouve — les erreurs qui reviennent, les chiffres qui surprennent, et
            ce qui distingue un outil qu&apos;on garde d&apos;un outil qu&apos;on abandonne.
          </p>
          <p className="mt-3 text-sm text-[#6e9f55]">
            Vous cherchez plutôt une méthode pas à pas ?{" "}
            <Link href="/guides" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              Les guides
            </Link>{" "}
            sont là pour ça.
          </p>
        </section>

        <ul className="mt-8 grid gap-4">
          {publishedArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="block rounded-2xl border border-[#dcead2] bg-white p-6 shadow-sm transition-colors hover:border-[#a8cf8c] hover:bg-[#f6fbf2]"
              >
                <p className="text-xs font-semibold text-[#6e9f55]">
                  <time dateTime={article.publishedAt}>{formatGuideDate(article.publishedAt)}</time>
                </p>
                <h2 className="mt-1.5 text-xl font-bold leading-snug text-[#27421f]">{article.title}</h2>
                <p className="mt-2 leading-relaxed text-[#4d6952]">{article.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#355329]">
                  Lire l&apos;article <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <RelatedLinks
          links={[
            { href: "/guides", label: "Les guides pratiques" },
            { href: "/comparatif", label: "Le comparatif des logiciels" },
            { href: "/faq", label: "Les questions fréquentes" },
          ]}
        />
      </main>
    </>
  );
}
