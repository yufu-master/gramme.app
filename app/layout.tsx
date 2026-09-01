import type { Metadata, Viewport } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { MesureAudience } from "@/components/analytics/MesureAudience";
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
    "Gramme est le logiciel de gestion et de production pour boulangeries et pâtisseries : digitalisation des recettes, fiches techniques, calculatrice de coût de revient, scan de factures, mercuriale et alertes de prix, gestion de stocks, planning de production et marges en temps réel. Tout est connecté : pilotez votre rentabilité au gramme près.",
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
      "Digitalisez vos recettes et fiches techniques, centralisez factures, mercuriale, stocks et planning de production, pilotez vos marges en temps réel. Tout est connecté.",
    url: "https://gramme.app",
    siteName: "Gramme",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-lifestyle.jpg",
        width: 1200,
        height: 630,
        alt: "Gramme, logiciel de gestion pour boulangers et pâtissiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gramme | Logiciel gestion boulangerie",
    description:
      "Recettes digitalisées, fiches techniques, alertes de prix, stocks, planning de production et marges en temps réel, réunis dans un seul outil.",
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
    icon: [
      { url: "/logos/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/logos/gramme-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logos/favicon.ico",
    apple: [{ url: "/logos/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
        <MesureAudience />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
