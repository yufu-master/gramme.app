import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Gramme | Le Copilote de Rentabilité pour Boulangers & Pâtissiers",
  description:
    "Automatisez vos calculs de coûts, marges et mercuriales. L'ERP nouvelle génération pour l'artisanat français.",
  icons: {
    icon: "/logos/gramme-icon.svg",
    shortcut: "/logos/gramme-icon.svg",
    apple: "/logos/gramme-icon.svg",
  },
  openGraph: {
    title: "Gramme | Le Copilote de Rentabilité pour Boulangers & Pâtissiers",
    description:
      "Automatisez vos calculs de coûts, marges et mercuriales. L'ERP nouvelle génération pour l'artisanat français.",
    type: "website",
    locale: "fr_FR",
    siteName: "Gramme",
  },
};

export const viewport: Viewport = {
  themeColor: "#a8cf8c",
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
