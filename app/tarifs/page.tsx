import type { Metadata } from "next";
import Link from "next/link";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { MISE_EN_SERVICE_EN_CREATION, formatEuro, formatInstallation, pricingFaq, pricingPlans } from "@/lib/pricing";
import { SITE_URL, breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Prix d'un logiciel de gestion boulangerie",
  description:
    "Combien coûte un logiciel de gestion pour boulangerie ? Gramme : 49 € HT/mois (490 €/an) en Starter, 89 € HT/mois (890 €/an) en Pro avec calcul des marges et gestion des stocks. 50 fiches techniques en Starter, recettes illimitées en Pro, installation accompagnée en une fois à partir de 300 € HT (forfait ferme de 300 € pour une entreprise en création), sans engagement en mensuel.",
  keywords: [
    "logiciel gestion boulangerie prix",
    "prix logiciel boulangerie",
    "combien coûte un logiciel de boulangerie",
    "tarif logiciel pâtisserie",
    "abonnement logiciel boulangerie",
    "logiciel gestion de production prix",
    "logiciel calcul des marges",
    "logiciel gestion de stocks boulangerie",
  ],
  alternates: { canonical: "https://gramme.app/tarifs" },
  openGraph: {
    title: "Prix d'un logiciel de gestion boulangerie | Gramme",
    description:
      "Starter 49 € HT/mois, Pro 89 € HT/mois. Sans engagement en mensuel, deux mois offerts en annuel. Installation accompagnée facturée une seule fois : à partir de 300 € HT en Starter, 500 € HT en Pro, forfait ferme de 300 € HT pour une entreprise en cours de création.",
    url: "https://gramme.app/tarifs",
  },
};

function pricingOffersSchema() {
  const subscriptionOffers = pricingPlans.flatMap((plan) => [
    {
      "@type": "Offer",
      name: `${plan.name} — mensuel`,
      price: String(plan.monthlyPrice),
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.monthlyPrice),
        priceCurrency: "EUR",
        billingDuration: "P1M",
        unitText: "MONTH",
      },
      description: `${plan.name} sans engagement, ${formatEuro(plan.monthlyPrice)} HT / mois`,
      url: `${SITE_URL}/tarifs`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: `${plan.name} — annuel`,
      price: String(plan.yearlyPrice),
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.yearlyPrice),
        priceCurrency: "EUR",
        billingDuration: "P1Y",
        unitText: "YEAR",
      },
      description: `${plan.name} annuel, ${formatEuro(plan.yearlyPrice)} HT / an (soit ${formatEuro(plan.yearlyMonthlyEquivalent, 2)} HT / mois)`,
      url: `${SITE_URL}/tarifs`,
      availability: "https://schema.org/InStock",
    },
  ]);

  const installOffers = pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: `Installation accompagnée — ${plan.name}`,
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: plan.installPrice,
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
    },
    priceCurrency: "EUR",
    description: `Prestation unique d'installation accompagnée pour ${plan.name}, ${formatInstallation(plan)}, payable en trois fois sans supplément. Forfait ferme de ${formatEuro(MISE_EN_SERVICE_EN_CREATION)} HT pour une entreprise en cours de création.`,
    url: `${SITE_URL}/tarifs`,
    availability: "https://schema.org/InStock",
  }));

  const installCreation = {
    "@type": "Offer",
    name: "Installation accompagnée — entreprise en cours de création",
    price: String(MISE_EN_SERVICE_EN_CREATION),
    priceCurrency: "EUR",
    description: `Forfait ferme de ${formatEuro(MISE_EN_SERVICE_EN_CREATION)} HT pour une entreprise en cours de création, quelle que soit l'offre : sans historique de factures ni fiches à reprendre, la charge d'installation est connue d'avance.`,
    url: `${SITE_URL}/tarifs`,
    availability: "https://schema.org/InStock",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Gramme — logiciel de gestion boulangerie & pâtisserie",
    description:
      "Abonnements Starter et Pro, mensuel ou annuel, avec installation accompagnée.",
    brand: { "@type": "Brand", name: "Gramme" },
    offers: [...subscriptionOffers, ...installOffers, installCreation],
  };
}

function pricingFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function TarifsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Tarifs Gramme",
            description: "Grille tarifaire Starter et Pro, mensuel ou annuel.",
            path: "/tarifs",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Tarifs", path: "/tarifs" },
          ]),
          pricingOffersSchema(),
          pricingFaqSchema(),
        ]}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Tarifs" />
        <header className="mt-8 max-w-3xl">
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-4xl">
            Combien coûte un logiciel de gestion pour une boulangerie ?
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#4d6952] md:text-lg">
            Deux offres, {formatEuro(pricingPlans[0].monthlyPrice)} et {formatEuro(pricingPlans[1].monthlyPrice)} HT
            par mois, sans engagement. En annuel, deux mois sont offerts. À cela s&apos;ajoute une installation
            accompagnée, facturée une seule fois à la mise en service : nous reprenons vos recettes et vos factures
            pour que le compte soit utilisable dès le premier jour. Pas de commission, pas de coût par utilisateur
            caché, pas de frais de sortie.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4d6952] md:text-lg">
            {/* Starter est bien plafonnée à 50 fiches côté serveur
                (maxRecipes dans _shared/plan-limits.ts de l'application) :
                annoncer l'illimité sur les deux offres se heurtait au refus à
                la 51ᵉ fiche, et c'est le client qui l'apprenait. */}
            L&apos;offre Pro ne limite pas le nombre de recettes : vous digitalisez tout votre cahier, fiches
            techniques et sous-recettes comprises. Elle ajoute le calcul des marges et le pilotage de la
            rentabilité en temps réel, ainsi que la gestion des stocks et des inventaires valorisés. Starter
            couvre 50 fiches techniques, de quoi démarrer sur une carte complète.
          </p>
        </header>
        <PricingPageContent />

        <section className="mt-12 md:mt-16" aria-labelledby="budget-title">
          <h2 id="budget-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Ce que ce budget représente
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952]">
            Un abonnement Starter revient à {formatEuro(pricingPlans[0].yearlyMonthlyEquivalent, 2)} hors taxes par
            mois en annuel. À titre de repère, c&apos;est l&apos;ordre de grandeur de ce que coûte une hausse de
            quelques centimes sur une matière première utilisée dans toute votre gamme, passée inaperçue pendant un
            trimestre. C&apos;est précisément ce type d&apos;écart que l&apos;outil sert à détecter.{" "}
            <Link href="/guides/calcul-cout-de-revient-boulangerie" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              Voir comment se calcule un coût de revient
            </Link>
            .
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952]">
            Les prix affichés sont hors taxes et la TVA est récupérable. L&apos;abonnement mensuel est résiliable à
            tout moment ; l&apos;annuel bénéficie de trente jours satisfait ou remboursé. Dans tous les cas, vos
            données restent exportables et sont conservées douze mois si vous partez.
          </p>
        </section>

        <RelatedLinks
          links={[
            { href: "/fonctionnalites", label: "Ce que contient chaque offre" },
            { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
            { href: "/contact", label: "Demander une démonstration" },
          ]}
        />
      </main>
    </>
  );
}
