import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { publishedGuides } from "@/content/guides";
import { formatGuideDate } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Ressources boulangerie",
  description:
    "Guides et ressources Gramme pour artisans boulangers-pâtissiers : coûts, marges, fiches techniques et organisation du laboratoire.",
  alternates: { canonical: "https://gramme.app/ressources" },
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
      <Breadcrumbs currentLabel="Ressources" />
      <section className="mt-8 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e9f55]">Ressources</p>
        <h1 className="mt-3 text-3xl font-black text-[#27421f] md:text-4xl">Ressources pour artisans</h1>
        <p className="mt-4 max-w-2xl text-lg text-[#4d6952]">
          La rubrique guides est sur{" "}
          <Link href="/guides" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            /guides
          </Link>
          .
        </p>
      </section>
      {publishedGuides.length > 0 ? (
        <ul className="mt-8 grid gap-4">
          {publishedGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block rounded-2xl border border-[#dcead2] bg-white p-5 hover:bg-[#f6fbf2]"
              >
                <p className="text-xs text-[#6e9f55]">{formatGuideDate(guide.publishedAt)}</p>
                <p className="mt-1 font-bold text-[#27421f]">{guide.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-[#4d6952]">Les guides publiés apparaîtront ici dès leur mise en ligne.</p>
      )}
      <RelatedLinks
        links={[
          { href: "/guides", label: "Tous les guides Gramme" },
          { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
          { href: "/contact", label: "Demander une démonstration" },
        ]}
      />
    </main>
  );
}
