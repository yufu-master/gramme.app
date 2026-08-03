import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteGraph } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gramme.app"),
  title: {
    default: "Logiciel gestion boulangerie | Gramme",
    template: "%s | Gramme",
  },
  description:
    "Gramme aide les boulangers-pâtissiers à piloter recettes, coûts matière, production, stock et marges en temps réel.",
  keywords: [
    "logiciel gestion boulangerie",
    "calcul coût recette pâtisserie",
    "logiciel pâtissier artisan",
    "fiche technique boulangerie",
    "mercuriale fournisseurs",
    "scan facture IA",
    "marge boulangerie",
    "gestion stock pâtisserie",
    "production boulangerie",
  ],
  alternates: {
    languages: {
      fr: "https://gramme.app",
      "x-default": "https://gramme.app",
    },
  },
  openGraph: {
    title: "Gramme | Pilotez votre boulangerie au gramme près",
    description:
      "Centralisez recettes, factures fournisseurs, stock et production pour sécuriser votre rentabilité.",
    url: "https://gramme.app",
    siteName: "Gramme",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-affiche.jpg",
        width: 1200,
        height: 630,
        alt: "Gramme — application de gestion pour boulangers et pâtissiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gramme | Logiciel gestion boulangerie",
    description:
      "Recettes, factures, stock et marges réunis dans un outil simple pour boulangers-pâtissiers.",
    images: ["/images/hero-affiche.jpg"],
  },
  icons: {
    icon: "/logos/gramme-icon.svg",
    apple: "/logos/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: "#a8cf8c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <JsonLd data={siteGraph} />
        {children}
      </body>
    </html>
  );
}
