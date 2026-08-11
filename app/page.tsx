import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Logiciel gestion boulangerie & pâtisserie | Gramme",
  },
  description:
    "Gramme, logiciel de gestion pour boulangeries et pâtisseries : fiches techniques, scan de factures, mercuriale, stock, production et marges en temps réel. Essayez le pilotage au gramme près.",
  keywords: [
    "logiciel gestion boulangerie",
    "logiciel pâtisserie",
    "ERP boulangerie",
    "fiche technique boulangerie",
    "calcul marge boulangerie",
    "mercuriale fournisseurs",
    "gestion stock pâtisserie",
  ],
  alternates: {
    canonical: "https://gramme.app/",
  },
  openGraph: {
    title: "Gramme | Logiciel gestion boulangerie & pâtisserie",
    description:
      "Centralisez recettes, factures fournisseurs, stock et production pour sécuriser votre rentabilité.",
    url: "https://gramme.app/",
    images: [
      {
        url: "/images/hero-lifestyle.jpg",
        width: 1200,
        height: 630,
        alt: "Gramme — application de gestion pour boulangers et pâtissiers",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema,
          webPageSchema({
            title: "Logiciel gestion boulangerie & pâtisserie | Gramme",
            description:
              "Application de gestion pour artisans boulangers et pâtissiers : recettes, coûts, stock, production et marges.",
            path: "/",
          }),
        ]}
      />
      <HomePage />
    </>
  );
}
