import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, webPageSchema, ogPage } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Logiciel gestion boulangerie & pâtisserie | Gramme",
  },
  description:
    "Recettes, coût de revient, factures, stock, production, hygiène, étiquetage et équilibrage des ganaches et des glaces (Aw, extrait sec) dans une seule application.",
  keywords: [
    "logiciel gestion boulangerie",
    "équilibrage de recette",
    "équilibrage ganache",
    "activité de l'eau ganache",
    "logiciel chocolaterie",
    "logiciel pâtisserie",
    "logiciel gestion de production",
    "ERP boulangerie",
    "fiche technique boulangerie",
    "digitalisation des recettes",
    "importer recettes photo",
    "numériser fiches techniques",
    "import Excel recettes",
    "calcul marge boulangerie",
    "marges en temps réel",
    "pilotage de la rentabilité",
    "alertes de prix",
    "calculatrice coût de revient",
    "planning de production",
    "gestion de stocks",
    "mercuriale fournisseurs",
    "gestion stock pâtisserie",
  ],
  alternates: {
    canonical: "https://gramme.app/",
  },
  openGraph: ogPage({
    title: "Gramme | Logiciel gestion boulangerie & pâtisserie",
    description:
      "Recettes digitalisées, fiches techniques, alertes de prix, gestion de stocks, planning de production et marges en temps réel : tout est connecté pour sécuriser votre rentabilité.",
    url: "https://gramme.app/",
    images: [
      {
        url: "/images/og-gramme.jpg",
        width: 1200,
        height: 630,
        alt: "Le logiciel Gramme ouvert sur un téléphone, au-dessus d'un plan de travail de fournil",
      },
    ],
  }),
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
              "Application de gestion et de production pour artisans boulangers et pâtissiers : recettes digitalisées, fiches techniques, coûts, alertes de prix, stocks, planning de production et marges en temps réel.",
            path: "/",
          }),
        ]}
      />
      <HomePage />
    </>
  );
}
