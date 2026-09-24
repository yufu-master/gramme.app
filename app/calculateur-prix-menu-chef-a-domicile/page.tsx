import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { CalculateurPrixMenu } from "@/components/chef/CalculateurPrixMenu";
import { breadcrumbSchema, SITE_URL, webPageSchema, imageSociale, ogPage } from "@/lib/seo";

/**
 * Le calculateur gratuit, sans compte : le « gratuit » de Gramme Chef depuis
 * que l'offre gratuite à vie a été retirée (24/09/2026). Il répond aux
 * recherches « calcul prix chef à domicile », ne coûte aucun support, et
 * mène à la page Gramme Chef.
 */

const TITRE = "Calculateur prix menu chef à domicile";
const DESCRIPTION =
  "Calculez gratuitement le prix plancher par convive de votre menu : matières, frais, heures et cotisations. Et ce qui vous reste par heure au prix annoncé.";

export const metadata: Metadata = {
  title: TITRE,
  description: DESCRIPTION,
  keywords: [
    "calculateur prix chef à domicile",
    "calcul prix menu chef à domicile",
    "tarif chef à domicile par personne",
    "prix par convive",
    "calculer prix prestation chef privé",
    "calculateur gratuit chef",
  ],
  alternates: { canonical: `${SITE_URL}/calculateur-prix-menu-chef-a-domicile` },
  openGraph: ogPage({
    images: imageSociale(
      "/images/app/gramme-chef-menu.png",
      "Le prix d'un dîner pour huit convives chiffré plat par plat dans Gramme Chef",
    ),
    title: "Calculateur gratuit du prix d'un menu de chef à domicile",
    description: DESCRIPTION,
    url: `${SITE_URL}/calculateur-prix-menu-chef-a-domicile`,
  }),
};

const faq = [
  {
    q: "Comment calculer le prix d'un menu de chef à domicile ?",
    a: "Additionnez le coût des matières pour tous les convives, les frais de la prestation (déplacement, consommables) et vos heures multipliées par le revenu horaire que vous visez. Divisez ce total par (1 moins votre taux de cotisations), puis par le nombre de convives : c'est votre prix plancher par personne.",
  },
  {
    q: "Qu'est-ce que le prix plancher ?",
    a: "Le prix par convive en dessous duquel vous travaillez à perte, une fois vos matières, vos frais, vos heures et vos cotisations payés. Le prix que vous annoncez peut être plus haut, selon votre clientèle et votre notoriété, mais jamais plus bas sans le savoir.",
  },
  {
    q: "Quel taux de cotisations utiliser ?",
    a: "Le vôtre : il dépend de votre statut et de la nature de votre activité, et se lit sur votre espace de déclaration. Le calculateur propose 22 % comme exemple, à remplacer par votre taux réel.",
  },
  {
    q: "Le calcul tient-il compte de la TVA ?",
    a: "Non, il se fait hors taxes. Si vous êtes en franchise de TVA, le prix affiché est celui que paie le client. Si vous facturez la TVA, ajoutez-la au prix plancher.",
  },
  {
    q: "Le calculateur est-il gratuit ?",
    a: "Oui, sans inscription et sans limite. Gramme Chef fait le même calcul pour chacun de vos menus avec vos vrais prix d'achat, lus sur vos tickets de caisse, et le reporte dans le devis.",
  },
];

export default function CalculateurPrixMenuPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Calculateur du prix d'un menu de chef à domicile",
            description: DESCRIPTION,
            path: "/calculateur-prix-menu-chef-a-domicile",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Gramme Chef", path: "/gramme-chef" },
            { name: "Calculateur de prix", path: "/calculateur-prix-menu-chef-a-domicile" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Calculateur du prix d'un menu de chef à domicile",
            url: `${SITE_URL}/calculateur-prix-menu-chef-a-domicile`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            publisher: { "@type": "Organization", name: "Gramme", url: SITE_URL },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Calculateur de prix" />

        <header className="mt-6 max-w-3xl">
          <p className="inline-flex rounded-full bg-[#f3f9ee] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#6e9f55]">
            Gratuit · sans inscription
          </p>
          <h1 className="mt-4 text-3xl font-black leading-tight text-[#27421f] md:text-5xl">
            Calculateur du prix d&apos;un menu de chef à domicile
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#4d6952] md:text-lg">
            Entrez votre prestation : le calculateur donne le prix par convive en dessous duquel vous travaillez à
            perte, et ce qu&apos;il vous reste par heure au prix que vous comptez annoncer. Les valeurs de départ
            reprennent l&apos;exemple de{" "}
            <Link href="/guides/prix-menu-chef-a-domicile" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              notre guide du prix d&apos;un menu
            </Link>
            .
          </p>
        </header>

        <section className="mt-8" aria-label="Calculateur">
          <CalculateurPrixMenu />
        </section>

        <section className="mt-12 rounded-3xl bg-[#44624b] p-6 text-white sm:p-8 md:mt-16 md:p-10" aria-labelledby="suite">
          <h2 id="suite" className="text-2xl font-bold md:text-3xl">
            Ce calcul, pour chaque menu, avec vos vrais prix
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#e3efdb] md:text-lg">
            Gramme Chef chiffre chaque plat au prix de vos dernières courses, lu sur vos tickets de caisse, recalcule
            quand huit convives deviennent douze, et reporte le prix dans un devis que le client signe et règle en ligne.
            Deux mois d&apos;essai complet, sans carte bancaire.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/gramme-chef"
              className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-[#2f4a2c] transition-colors hover:bg-[#eef6e9]"
            >
              Découvrir Gramme Chef
            </Link>
            <Link
              href="/gramme-chef#inscription"
              className="inline-flex rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Devenir chef bêta-testeur
            </Link>
          </div>
        </section>

        <section className="mt-12 md:mt-16" aria-labelledby="questions">
          <h2 id="questions" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Questions fréquentes
          </h2>
          <dl className="mt-6 grid gap-4">
            {faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm sm:p-6">
                <dt className="font-bold text-[#27421f]">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-[#4d6952]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <RelatedLinks
          links={[
            { href: "/guides/prix-menu-chef-a-domicile", label: "Calculer le prix d'un menu de chef à domicile" },
            { href: "/logiciel-chef-a-domicile", label: "Le logiciel du chef à domicile" },
            { href: "/gramme-chef", label: "Gramme Chef : offres et bêta" },
          ]}
        />
      </main>
    </>
  );
}
