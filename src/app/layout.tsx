import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Gramme | Le Copilote de Rentabilité pour Boulangers & Pâtissiers",
  description:
    "Automatisez vos calculs de coûts, marges et mercuriales. L'ERP nouvelle génération pour l'artisanat français.",
  openGraph: {
    title: "Gramme | Le Copilote de Rentabilité pour Boulangers & Pâtissiers",
    description:
      "Automatisez vos calculs de coûts, marges et mercuriales. L'ERP nouvelle génération pour l'artisanat français.",
    type: "website",
    locale: "fr_FR",
    siteName: "Gramme",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
