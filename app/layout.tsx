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
    "Gramme est le logiciel de gestion et de production pour boulangeries, pâtisseries, chocolateries et glaceries : digitalisation des recettes, fiches techniques, calculatrice de coût de revient, scan de factures, mercuriale et alertes de prix, gestion de stocks, planning de production et marges en temps réel. Tout est connecté : pilotez votre rentabilité au gramme près.",
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
  // Pas de `languages` ici : dans l'App Router, une page qui redéfinit
  // `canonical` REMPLACE tout le bloc `alternates`, donc le `hreflang` posé
  // dans le gabarit ne sortait que sur les pages qui n'en avaient pas — soit
  // aucune, mesuré le 03/09/2026 sur les 45 pages du sitemap. Un site
  // monolingue n'en a pas besoin ; un hreflang présent sur deux pages sur
  // quarante-cinq est pire qu'aucun.
  alternates: {
    canonical: "https://gramme.app",
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
        url: "/images/hero_gramme_atelier_phone.png",
        // Les dimensions RÉELLES du fichier, pas celles qu'on aimerait :
        // Facebook et LinkedIn recadrent d'après le ratio DÉCLARÉ. Annoncé
        // 1200 × 630, l'aperçu sortait rogné. (Le visuel a changé le
        // 06/09/2026 : 2752 × 1536, et ce 16/9 tombe bien plus près du
        // 1,91:1 qu'attendent les réseaux que le 4/3 d'avant.)
        width: 2752,
        height: 1536,
        alt: "Gramme, logiciel de gestion pour boulangers, pâtissiers, chocolatiers et glaciers",
      },
    ],
  },
  // Ni titre ni description ici : un bloc `twitter` du gabarit est hérité EN
  // ENTIER par toute page qui n'en déclare pas, et la plupart n'en déclarent
  // pas. Résultat mesuré : « Gramme | Logiciel gestion boulangerie » comme
  // titre de partage sur la page des tarifs, sur chaque page de fonctionnalité
  // et sur les trois comparatifs. Sans titre ici, Next reprend le titre et la
  // description de la page. L'image, elle, est reprise de `openGraph` quand
  // une page en déclare une.
  twitter: {
    card: "summary_large_image",
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
