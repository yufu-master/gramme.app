import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { SITE_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Merci pour votre message",
  description: "Votre demande de contact Gramme a bien été reçue. Nous vous répondons sous 4 heures ouvrées.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://gramme.app/merci" },
};

export default function MerciPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
      <Breadcrumbs currentLabel="Merci" />
      <section className="mt-8 rounded-3xl border border-[#dcead2] bg-white p-8 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e9f55]">Message reçu</p>
        <h1 className="mt-3 text-3xl font-black text-[#27421f] md:text-4xl">Merci, c&apos;est bien envoyé.</h1>
        <p className="mt-5 max-w-2xl text-lg text-[#4d6952]">
          Nous revenons vers vous sous <strong className="text-[#355329]">4 heures ouvrées</strong>.
          En attendant, vous pouvez préparer vos questions sur recettes, coûts matière ou organisation d&apos;atelier.
        </p>
        <p className="mt-4 max-w-2xl text-[#4d6952]">
          Un doute ? Écrivez-nous à{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/comment-ca-marche" className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
            Voir comment ça marche
          </Link>
          <Link href="/" className="rounded-xl border border-[#d8e6cf] px-5 py-3 font-semibold text-[#355329]">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
      <RelatedLinks
        links={[
          { href: "/tarifs", label: "Tarifs logiciel boulangerie" },
          { href: "/securite", label: "Sécurité et hébergement Europe" },
          { href: "/a-propos-de-gramme", label: "À propos de Gramme" },
        ]}
      />
    </main>
  );
}
