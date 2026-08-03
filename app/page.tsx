import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Logiciel gestion boulangerie | Gramme",
  },
  description:
    "Gramme aide les boulangers-pâtissiers à piloter recettes, coûts matière, production, stock et marges en temps réel.",
  alternates: {
    canonical: "https://gramme.app/",
  },
  openGraph: {
    title: "Gramme | Pilotez votre boulangerie au gramme près",
    description:
      "Centralisez recettes, factures fournisseurs, stock et production pour sécuriser votre rentabilité.",
    url: "https://gramme.app/",
    images: [
      {
        url: "/images/hero-affiche.jpg",
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
      <JsonLd data={faqPageSchema} />
      <HomePage />
    </>
  );
}
