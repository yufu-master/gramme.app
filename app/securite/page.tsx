import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sécurité & confidentialité des recettes",
  description:
    "Vos recettes, factures et marges restent les vôtres : pas de revente, pas de partage entre établissements, hébergement Europe, RGPD et accès strictement limités.",
  alternates: { canonical: "https://gramme.app/securite" },
};

const points = [
  {
    title: "Vos recettes restent les vôtres",
    text: "Fiches techniques, dosages, prix d'achat, factures fournisseurs et marges sont la propriété exclusive de votre établissement. Gramme ne revend pas ces données et ne les utilise pas pour un autre client.",
  },
  {
    title: "Aucun partage entre ateliers",
    text: "Chaque structure est cloisonnée. Les recettes et factures d'une boulangerie ne sont jamais visibles d'un autre établissement. Pas de « base commune » de recettes clients.",
  },
  {
    title: "Pas de revente à des tiers",
    text: "Nous nous interdisons de céder, louer ou monétiser vos données métier auprès de fournisseurs, concurrents ou partenaires commerciaux. Votre savoir-faire n'est pas un produit.",
  },
  {
    title: "Hébergement en Europe",
    text: "Les infrastructures de l'application et des données métier sont choisies pour rester dans l'Union européenne ou offrir des garanties équivalentes, dans une logique RGPD.",
  },
  {
    title: "Échanges chiffrés",
    text: "Les connexions au site et à l'application transitent en HTTPS (TLS). Les mots de passe ne sont jamais stockés en clair.",
  },
  {
    title: "Accès strictement limités",
    text: "L'équipe Gramme n'accède à vos données que pour le support ou la mise en service, dans un cadre contrôlé. Pas d'usage commercial interne de vos recettes.",
  },
  {
    title: "Sauvegardes",
    text: "Des sauvegardes régulières limitent l'impact d'un incident technique. Fréquence et rétention adaptées à un usage professionnel quotidien.",
  },
  {
    title: "Réversibilité",
    text: "Vos données vous appartiennent. En cas de départ, des mécanismes d'export permettent de récupérer l'essentiel de votre patrimoine (recettes, historiques utiles) selon le contrat.",
  },
];

export default function SecuritePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Sécurité et confidentialité Gramme",
          description:
            "Confidentialité des recettes et factures : propriété du client, pas de revente, cloisonnement, hébergement Europe, RGPD.",
          path: "/securite",
        })}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Sécurité" />
        <section className="mt-8 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e9f55]">Confiance</p>
          <h1 className="mt-3 text-3xl font-black text-[#27421f] md:text-4xl">
            Vos recettes et factures restent confidentielles
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#4d6952]">
            En confiant votre laboratoire à Gramme, vous nous confiez votre savoir-faire. Notre engagement est simple :
            <strong className="text-[#355329]"> pas de partage, pas de revente, pas d&apos;usage hors de votre compte</strong>
            — avec un cadre RGPD et des accès limités au strict nécessaire.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Propriété exclusive du client",
              "Cloisonnement entre établissements",
              "Aucune revente de données",
              "Hébergement orienté Europe / RGPD",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-[#dcead2] bg-[#f6fbf2] px-4 py-3 text-sm font-semibold text-[#355329]"
              >
                <span aria-hidden className="text-[#6e9f55]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {points.map((point) => (
              <article key={point.title} className="rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-5">
                <h2 className="text-lg font-bold text-[#355329]">{point.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{point.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#4d6952]">
            Pour le traitement des données du site vitrine, consultez la{" "}
            <Link href="/politique-de-confidentialite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              politique de confidentialité
            </Link>
            . Les détails contractuels pour les comptes clients figurent dans votre contrat d&apos;abonnement.
          </p>
        </section>
        <RelatedLinks
          links={[
            { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
            { href: "/contact", label: "Demander une démonstration" },
            { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
          ]}
        />
      </main>
    </>
  );
}
