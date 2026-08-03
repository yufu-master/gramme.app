export const SITE_URL = "https://gramme.app";

export const faqItems = [
  {
    q: "Gramme est-il adapté aux petites structures ?",
    a: "Oui, Gramme est pensé pour les équipes terrain et les dirigeants de boulangerie artisanale.",
  },
  {
    q: "Dois-je tout changer dans mon organisation ?",
    a: "Non. Vous pouvez démarrer progressivement : recettes, puis factures, puis production.",
  },
  {
    q: "Puis-je l’utiliser sur mobile ?",
    a: "Oui, l’interface est optimisée atelier et déplacement avec des actions simples et lisibles.",
  },
] as const;

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Gramme",
      url: SITE_URL,
      logo: `${SITE_URL}/logos/gramme-icon.svg`,
      description:
        "Application de gestion dédiée aux artisans boulangers, pâtissiers et chocolatiers pour piloter recettes, coûts, production, stock et marges.",
      email: "contact@gramme.app",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Gramme",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Gramme",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Logiciel de gestion pour boulangeries et pâtisseries : fiches techniques, scan de factures, mercuriale, stock, production et suivi des marges.",
      url: SITE_URL,
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "39",
          priceCurrency: "EUR",
          description: "50 recettes, scan de 30 factures/mois, suivi marge en temps réel",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "79",
          priceCurrency: "EUR",
          description: "Recettes illimitées, scan de 150 factures/mois, stocks et alertes avancées",
        },
      ],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
