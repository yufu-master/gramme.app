import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "Cette page n’existe pas ou a été déplacée. Retrouvez Gramme, le logiciel de gestion pour boulangeries et pâtisseries.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
      <Breadcrumbs currentLabel="Page introuvable" />
      <section className="mt-10 rounded-3xl border border-[#dcead2] bg-white p-8 shadow-sm sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e9f55]">Erreur 404</p>
        <h1 className="mt-3 text-3xl font-black text-[#27421f] md:text-4xl">Cette page n&apos;est pas là.</h1>
        <p className="mt-4 max-w-2xl text-[#4d6952]">
          Le lien est peut-être ancien, ou la page a bougé. Revenez à l&apos;accueil ou contactez-nous : on vous oriente en quelques minutes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
            Retour à l&apos;accueil
          </Link>
          <Link href="/comment-ca-marche" className="rounded-xl border border-[#d8e6cf] px-5 py-3 font-semibold text-[#355329]">
            Comment ça marche
          </Link>
          <Link href="/contact" className="rounded-xl border border-[#d8e6cf] px-5 py-3 font-semibold text-[#355329]">
            Contact
          </Link>
        </div>
      </section>
      <RelatedLinks
        links={[
          { href: "/tarifs", label: "Tarifs logiciel boulangerie" },
          { href: "/a-propos-de-gramme", label: "À propos de Gramme" },
          { href: "/contact", label: "Demander une démonstration" },
        ]}
      />
    </main>
  );
}
