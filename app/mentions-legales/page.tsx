import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_EMAIL, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site gramme.app : éditeur, hébergeur, contact et informations d'identification de Gramme.",
  alternates: { canonical: "https://gramme.app/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Mentions légales",
          description: "Mentions légales du site gramme.app",
          path: "/mentions-legales",
        })}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Mentions légales" />
        <article className="mt-8 space-y-8 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <div>
            <h1 className="text-3xl font-black text-[#27421f] md:text-4xl">Mentions légales</h1>
            <p className="mt-3 text-[#4d6952]">Informations légales relatives au site gramme.app.</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[#2f4f26]">Éditeur du site</h2>
            <ul className="mt-3 space-y-1 text-[#4d6952]">
              <li>Nom commercial : Gramme</li>
              <li>Site : https://gramme.app</li>
              <li>
                Contact :{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>Directeur de la publication : à compléter</li>
              <li>Forme juridique / raison sociale : à compléter</li>
              <li>SIREN / SIRET : à compléter</li>
              <li>Siège social : à compléter</li>
            </ul>
            <p className="mt-3 text-sm text-[#6e9f55]">
              Les champs « à compléter » seront renseignés dès validation des informations d&apos;immatriculation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2f4f26]">Hébergement</h2>
            <p className="mt-3 text-[#4d6952]">
              Le site est hébergé par Vercel Inc. Pour les données applicatives et le CRM, des prestataires européens
              (notamment Supabase) sont utilisés. Détails : page{" "}
              <Link href="/securite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                Sécurité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2f4f26]">Propriété intellectuelle</h2>
            <p className="mt-3 text-[#4d6952]">
              L&apos;ensemble des contenus du site (textes, visuels, marques, logos) est protégé. Toute reproduction non
              autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2f4f26]">Données personnelles</h2>
            <p className="mt-3 text-[#4d6952]">
              Voir la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-semibold text-[#355329] underline-offset-2 hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>
        </article>
        <RelatedLinks
          links={[
            { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
            { href: "/cgv", label: "Conditions générales" },
            { href: "/contact", label: "Nous contacter" },
          ]}
        />
      </main>
    </>
  );
}
