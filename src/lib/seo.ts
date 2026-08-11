export const SITE_URL = "https://gramme.app";
export const SITE_NAME = "Gramme";
export const SITE_EMAIL = "bonjour@gramme.app";
export const SUPPORT_EMAIL = "support@gramme.app";

/** Mots-clés cibles SEO / GEO — logiciels boulangerie & pâtisserie */
export const primaryKeywords = [
  "logiciel gestion boulangerie",
  "logiciel boulangerie",
  "logiciel pâtisserie",
  "logiciel gestion pâtisserie",
  "ERP boulangerie",
  "logiciel boulangerie artisanale",
  "application boulanger",
  "logiciel atelier pâtisserie",
  "fiche technique boulangerie",
  "fiche technique pâtisserie",
  "calcul coût recette pâtisserie",
  "prix de revient boulangerie",
  "calcul marge boulangerie",
  "marge boulangerie",
  "coût matière première boulangerie",
  "mercuriale fournisseurs",
  "mercuriale boulangerie",
  "scan facture IA",
  "scan facture fournisseur",
  "gestion stock boulangerie",
  "gestion stock pâtisserie",
  "production boulangerie",
  "planning production boulangerie",
  "logiciel rentabilité boulangerie",
  "suivi marge boulangerie",
  "logiciel pâtissier artisan",
  "gestion fournisseurs boulangerie",
  "logiciel laboratoire pâtisserie",
  "digitalisation boulangerie",
  "outil gestion artisan boulanger",
] as const;

export const faqItems = [
  {
    q: "Quel est le meilleur logiciel de gestion pour une boulangerie artisanale ?",
    a: "Gramme est un logiciel de gestion conçu pour les boulangeries et pâtisseries artisanales : fiches techniques, scan de factures, mercuriale, stock, production et suivi des marges en temps réel.",
  },
  {
    q: "Gramme est-il adapté aux petites structures ?",
    a: "Oui. Gramme est pensé pour les équipes terrain et les dirigeants de boulangerie ou pâtisserie artisanale, sans complexité inutile.",
  },
  {
    q: "Comment calculer le coût de revient d'une recette de pâtisserie ?",
    a: "Avec Gramme, vous saisissez vos fiches techniques et vos prix d'achat. Dès qu'une facture fournisseur change, le coût de revient et la marge de chaque recette se mettent à jour automatiquement.",
  },
  {
    q: "Gramme remplace-t-il Excel pour la mercuriale et les stocks ?",
    a: "Oui. Gramme centralise mercuriale fournisseurs, stock, production et marges dans une seule application, accessible sur ordinateur, tablette et mobile.",
  },
  {
    q: "Dois-je tout changer dans mon organisation ?",
    a: "Non. Vous pouvez démarrer progressivement : recettes, puis factures, puis production et stock.",
  },
  {
    q: "Puis-je utiliser Gramme sur mobile dans l'atelier ?",
    a: "Oui. L'interface est optimisée pour l'atelier et les déplacements, avec des actions simples et lisibles sur téléphone et tablette.",
  },
  {
    q: "Combien coûte le logiciel Gramme pour une boulangerie ?",
    a: "L'offre Starter est à 39€/mois, l'offre Pro à 79€/mois. Une offre Enterprise est disponible sur devis pour les structures multi-sites.",
  },
] as const;

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Gramme",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/gramme-icon.svg`,
      },
      image: `${SITE_URL}/images/hero-lifestyle.jpg`,
      description:
        "Logiciel de gestion pour boulangeries, pâtisseries et chocolateries artisanales. Pilotez recettes, coûts matière, production, stock, mercuriale et marges.",
      email: SITE_EMAIL,
      foundingDate: "2025",
      sameAs: ["https://www.instagram.com/gramme.app/"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_EMAIL,
        availableLanguage: ["French"],
        areaServed: "FR",
      },
      knowsAbout: [
        "gestion boulangerie",
        "fiche technique pâtisserie",
        "mercuriale fournisseurs",
        "coût de revient",
        "marge boulangerie",
        "production atelier",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["Gramme.app", "Logiciel Gramme"],
      inLanguage: "fr-FR",
      description:
        "Logiciel gestion boulangerie et pâtisserie : recettes, factures, stock, production et marges au gramme près.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/contact?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Gramme",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Bakery management software",
      operatingSystem: "Web, iOS, Android",
      inLanguage: "fr-FR",
      description:
        "Logiciel de gestion pour boulangeries et pâtisseries : fiches techniques, scan de factures IA, mercuriale, stock, production et suivi des marges en temps réel.",
      url: SITE_URL,
      image: `${SITE_URL}/images/multi-device.png`,
      featureList: [
        "Fiches techniques et coûts de revient",
        "Scan de factures fournisseurs",
        "Mercuriale et suivi des prix",
        "Gestion de stock",
        "Planning de production",
        "Suivi des marges en temps réel",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "39",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "50 recettes, scan de 30 factures/mois, suivi marge en temps réel",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "79",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "Recettes illimitées, scan de 150 factures/mois, stocks et alertes avancées",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "Multi-sites, déploiement accompagné, intégrations avancées",
        },
      ],
      publisher: { "@id": `${SITE_URL}/#organization` },
      audience: {
        "@type": "Audience",
        audienceType: "Artisans boulangers, pâtissiers et chocolatiers",
      },
      keywords: primaryKeywords.slice(0, 15).join(", "),
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#jeremy`,
      name: "Jeremy",
      jobTitle: "Chef pâtissier & Co-fondateur",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      description:
        "Chef pâtissier et co-fondateur de Gramme. Apporte l'expertise terrain pour concevoir un logiciel de gestion adapté aux laboratoires artisanaux.",
      image: `${SITE_URL}/images/jeremy-chef-rd.jpg`,
      url: `${SITE_URL}/a-propos-de-gramme`,
    },
  ],
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function webPageSchema({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: title,
    description,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#app` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
