import type { Metadata, Viewport } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { JsonLd } from "@/components/seo/JsonLd";
import { primaryKeywords, siteGraph } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gramme.app"),
  title: {
    default: "Logiciel gestion boulangerie & pâtisserie | Gramme",
    template: "%s | Gramme",
  },
  description:
    "Gramme est le logiciel de gestion pour boulangeries et pâtisseries : fiches techniques, scan de factures, mercuriale, stock, production et marges en temps réel. Pilotez votre rentabilité au gramme près.",
  keywords: [...primaryKeywords],
  authors: [{ name: "Gramme", url: "https://gramme.app" }],
  creator: "Gramme",
  publisher: "Gramme",
  category: "business software",
  applicationName: "Gramme",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://gramme.app",
    languages: {
      fr: "https://gramme.app",
      "x-default": "https://gramme.app",
    },
  },
  openGraph: {
    title: "Gramme | Logiciel gestion boulangerie & pâtisserie",
    description:
      "Centralisez recettes, factures fournisseurs, stock, production et marges. Le logiciel pensé pour les artisans boulangers-pâtissiers.",
    url: "https://gramme.app",
    siteName: "Gramme",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-lifestyle.jpg",
        width: 1200,
        height: 630,
        alt: "Gramme — logiciel de gestion pour boulangers et pâtissiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gramme | Logiciel gestion boulangerie",
    description:
      "Recettes, factures, stock, production et marges réunis dans un outil simple pour boulangers-pâtissiers.",
    images: ["/images/hero-lifestyle.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logos/gramme-icon.svg",
    apple: "/logos/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "FR",
    "geo.placename": "France",
    language: "French",
    "ai-content-declaration": "human-created",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#a8cf8c" },
    { media: "(prefers-color-scheme: dark)", color: "#264021" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM context for Gramme" />
      </head>
      <body className="antialiased">
        <JsonLd data={siteGraph} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
