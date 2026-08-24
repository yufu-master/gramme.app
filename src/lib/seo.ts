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
  "logiciel gestion de production",
  "logiciel gestion de production boulangerie",
  "logiciel fiches techniques",
  "logiciel recettes professionnel",
  "ERP boulangerie",
  "logiciel boulangerie artisanale",
  "application boulanger",
  "logiciel atelier pâtisserie",
  "fiche technique boulangerie",
  "fiche technique pâtisserie",
  "digitalisation des recettes",
  "numérisation fiches techniques",
  "calcul coût recette pâtisserie",
  "calculatrice coût de revient",
  "calculatrice de production",
  "prix de revient boulangerie",
  "calcul marge boulangerie",
  "marge boulangerie",
  "marges en temps réel",
  "pilotage de la rentabilité",
  "pilotage des marges en temps réel",
  "coût matière première boulangerie",
  "mercuriale fournisseurs",
  "mercuriale boulangerie",
  "alertes de prix",
  "alerte hausse prix fournisseur",
  "scan facture IA",
  "scan facture fournisseur",
  "gestion de stocks",
  "gestion stock boulangerie",
  "gestion stock pâtisserie",
  "production boulangerie",
  "planning de production",
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
    a: "Gramme est un logiciel de gestion et de production conçu pour les boulangeries et pâtisseries artisanales : digitalisation des recettes et des fiches techniques, calcul du coût de revient, scan de factures, mercuriale et alertes de prix, gestion de stocks, planning de production et pilotage des marges en temps réel. Tout est connecté : un prix qui bouge se répercute jusqu'à la marge.",
  },
  {
    q: "Gramme est-il adapté aux petites structures ?",
    a: "Oui. Gramme est pensé pour les équipes terrain et les dirigeants de boulangerie ou pâtisserie artisanale, sans complexité inutile.",
  },
  {
    q: "Peut-on importer ses recettes en photo dans Gramme ?",
    a: "Oui. Vous photographiez vos fiches recettes manuscrites depuis le téléphone, même anciennes, jaunies, couvertes de farine ou tachées de graisse, et Gramme reconstruit automatiquement la fiche technique : ingrédients, quantités, rendements, sous-recettes rattachées, coût matière, pourcentage de perte et marge.",
  },
  {
    q: "Comment importer un gros fichier Excel de recettes ou de matières premières ?",
    a: "Vos tableaux Excel, même longs et bricolés depuis des années, sont importés en une fois : les colonnes sont identifiées, les doublons regroupés, les sous-recettes séparées des recettes finales et les matières premières rattachées à votre mercuriale. La reprise de l'historique est faite avec vous lors de l'installation accompagnée.",
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
    a: "L'offre Starter est à 49 € HT/mois (ou 490 € HT/an), l'offre Pro à 89 € HT/mois (ou 890 € HT/an). L'installation accompagnée est facturée une seule fois (300 € HT en Starter, 500 € HT en Pro), payable en trois fois sans supplément.",
  },
  {
    q: "Mes recettes et factures sont-elles confidentielles ?",
    a: "Oui. Vos recettes, factures, prix fournisseurs et marges restent votre propriété exclusive. Gramme ne les revend pas, ne les partage pas avec d'autres établissements et n'y accède que pour le support ou la mise en service. Les données sont cloisonnées par structure, avec un hébergement orienté Europe et un cadre RGPD.",
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
        "Logiciel de gestion et de production pour boulangeries, pâtisseries et chocolateries artisanales. Digitalisation des recettes et fiches techniques, coûts matière, planning de production, gestion de stocks, mercuriale, alertes de prix et pilotage des marges en temps réel. Tout est connecté.",
      email: SITE_EMAIL,
      foundingDate: "2025",
      sameAs: ["https://www.instagram.com/gramme.app/"],
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_EMAIL,
        availableLanguage: ["French"],
        areaServed: "FR",
      },
      knowsAbout: [
        "gestion boulangerie",
        "gestion de production",
        "fiche technique pâtisserie",
        "digitalisation des recettes",
        "mercuriale fournisseurs",
        "alertes de prix",
        "coût de revient",
        "marge boulangerie",
        "pilotage de la rentabilité",
        "gestion de stocks",
        "planning de production",
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
        "Logiciel de gestion et de production boulangerie et pâtisserie : digitalisation des recettes, fiches techniques, factures, gestion de stocks, planning de production, alertes de prix et marges en temps réel, au gramme près.",
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
        "Logiciel de gestion et de production pour boulangeries et pâtisseries : digitalisation des recettes, fiches techniques, calculatrice de coût de revient, scan de factures IA, mercuriale et alertes de prix, gestion de stocks, planning de production et pilotage des marges en temps réel.",
      url: SITE_URL,
      image: `${SITE_URL}/images/multi-device.png`,
      featureList: [
        "Digitalisation des recettes et fiches techniques",
        "Calculatrice de coût de revient et de marge",
        "Scan de factures fournisseurs",
        "Mercuriale et alertes de prix",
        "Gestion de stocks et inventaires valorisés",
        "Gestion et planning de production",
        "Pilotage de la rentabilité et des marges en temps réel",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Starter mensuel",
          price: "49",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "Sans engagement, 49 € HT / mois",
        },
        {
          "@type": "Offer",
          name: "Starter annuel",
          price: "490",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "490 € HT / an, soit 40,83 € HT / mois",
        },
        {
          "@type": "Offer",
          name: "Pro mensuel",
          price: "89",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "Sans engagement, 89 € HT / mois",
        },
        {
          "@type": "Offer",
          name: "Pro annuel",
          price: "890",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "890 € HT / an, soit 74,17 € HT / mois",
        },
        {
          "@type": "Offer",
          name: "Installation accompagnée Starter",
          price: "300",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "Prestation unique, 300 € HT, payable en trois fois",
        },
        {
          "@type": "Offer",
          name: "Installation accompagnée Pro",
          price: "500",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "Prestation unique, 500 € HT, payable en trois fois",
        },
      ],
      publisher: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "France",
      },
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
