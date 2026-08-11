import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatEuro, pricingFaq, pricingPlans } from "@/lib/pricing";
import { SITE_URL, breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tarifs logiciel boulangerie",
  description:
    "Tarifs Gramme : Starter 49 € HT/mois ou 490 €/an, Pro 89 € HT/mois ou 890 €/an. Sans engagement en mensuel, installation accompagnée, données exportables.",
  alternates: { canonical: "https://gramme.app/tarifs" },
  openGraph: {
    title: "Tarifs Gramme | Logiciel boulangerie & pâtisserie",
    description:
      "Un prix clair, sans engagement, et vos données qui restent les vôtres. Starter et Pro, mensuel ou annuel.",
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
    price: String(plan.installPrice),
    priceCurrency: "EUR",
    description: `Prestation unique d'installation accompagnée pour ${plan.name}, ${formatEuro(plan.installPrice)} HT, payable en trois fois sans supplément.`,
    url: `${SITE_URL}/tarifs`,
    availability: "https://schema.org/InStock",
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Gramme — logiciel de gestion boulangerie & pâtisserie",
    description:
      "Abonnements Starter et Pro, mensuel ou annuel, avec installation accompagnée.",
    brand: { "@type": "Brand", name: "Gramme" },
    offers: [...subscriptionOffers, ...installOffers],
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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e9f55]">Tarifs</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-[#27421f] md:text-4xl">
            Un prix clair, sans engagement, et vos données qui restent les vôtres.
          </h1>
        </header>
        <PricingPageContent />
        <RelatedLinks
          links={[
            { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
            { href: "/contact", label: "Demander une démonstration" },
            { href: "/securite", label: "Confidentialité des recettes" },
          ]}
        />
      </main>
    </>
  );
}
