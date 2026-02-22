import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://gramme.app"),
  title: "Logiciel gestion boulangerie | Gramme",
  description:
    "Gramme aide les boulangers-pâtissiers à piloter recettes, coûts matière, production, stock et marges en temps réel.",
  keywords: [
    "logiciel gestion boulangerie",
    "calcul coût recette pâtisserie",
    "logiciel pâtissier artisan",
  ],
  openGraph: {
    title: "Gramme | Pilotez votre boulangerie au gramme près",
    description:
      "Centralisez recettes, factures fournisseurs, stock et production pour sécuriser votre rentabilité.",
    url: "https://gramme.app",
    siteName: "Gramme",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gramme | Logiciel gestion boulangerie",
    description:
      "Recettes, factures, stock et marges réunis dans un outil simple pour boulangers-pâtissiers.",
  },
  icons: {
    icon: "/logos/gramme-icon.svg",
  },
};

export const viewport: Viewport = { themeColor: "#a8cf8c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
