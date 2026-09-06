export const SITE_URL = "https://gramme.app";
export const SITE_NAME = "Gramme";
export const SITE_EMAIL = "bonjour@gramme.app";
export const SUPPORT_EMAIL = "support@gramme.app";

/**
 * Identité légale de l'éditeur.
 *
 * Elle sert deux fois : les mentions légales, obligatoires, et le balisage
 * `Organization`. Un moteur génératif qui doit décider si « Gramme » est une
 * entreprise réelle cherche un SIREN, une adresse et un dirigeant — un site
 * sans identité vérifiable se fait citer beaucoup moins qu'un site qui la
 * publie. Le nom commercial et la raison sociale diffèrent : les tenir au même
 * endroit évite qu'ils divergent d'une page à l'autre.
 */
export const EDITEUR = {
  raisonSociale: "YUFU CAPITAL",
  formeJuridique: "SASU · société par actions simplifiée unipersonnelle",
  capital: "123 219,00 €",
  adresse: "172 avenue de Choisy, 75013 Paris, France",
  rue: "172 avenue de Choisy",
  codePostal: "75013",
  ville: "Paris",
  pays: "FR",
  siren: "824 411 375",
  siret: "824 411 375 00010",
  rcs: "824 411 375 R.C.S. Paris : greffe de Paris, inscrit le 20 décembre 2016",
  tva: "FR14824411375",
  ape: "70.10Z : Activités des sièges sociaux",
  directeurPublication: "Clermont Fu, président",
} as const;

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
  "logiciel HACCP boulangerie",
  "relevé de température boulangerie",
  "plan de nettoyage boulangerie",
  "registre HACCP numérique",
  "étiquette DLC boulangerie",
  "traçabilité des lots pâtisserie",
  "logiciel allergènes boulangerie",
  "valeurs nutritionnelles recette",
] as const;

/**
 * L'image sociale par défaut d'une page.
 *
 * Onze pages déclaraient un bloc `openGraph` SANS image. Or dans l'App Router
 * un objet imbriqué de l'enfant REMPLACE celui du parent : ces pages n'avaient
 * donc aucune image sociale du tout, pas même celle du gabarit — partagées sur
 * LinkedIn ou WhatsApp, elles sortaient sans vignette. Parmi elles, les trois
 * plus commerciales du site : les tarifs, le comparatif et la démonstration.
 *
 * `metadataBase` étant posé (`app/layout.tsx`), un chemin relatif suffit : il
 * se résout en URL absolue sur notre domaine.
 *
 * Les dimensions annoncées ne sont pas décoratives. Facebook et LinkedIn
 * recadrent d'après le RATIO déclaré : `hero-lifestyle.jpg` était annoncé
 * 1200×630 alors qu'il fait 2400×1792, et l'aperçu sortait rogné.
 */
export function imageSociale(
  src = "/images/app/mercuriale.png",
  alt = "La mercuriale de Gramme : chaque matière première avec son prix de référence, son fournisseur et sa tendance",
) {
  const { width, height } = DIMENSIONS_IMAGES[src] ?? { width: 1920, height: 1200 };
  return [{ url: src, width, height, alt }];
}

/**
 * Les dimensions réelles des images qui ne font pas 1920 × 1200.
 *
 * Les captures de `public/images/app/` sont toutes au même format ; les
 * autres non, et c'est exactement pour elles que le ratio déclaré comptait.
 * Une image absente d'ici est supposée 1920 × 1200 : ajouter ici toute
 * nouvelle image sociale d'un autre format.
 */
const DIMENSIONS_IMAGES: Record<string, { width: number; height: number }> = {
  "/images/hero-lifestyle.jpg": { width: 2400, height: 1792 },
  "/images/feature-recette-detail.png": { width: 2880, height: 1620 },
  "/images/feature-prix.png": { width: 2880, height: 1620 },
  "/images/feature-stock.png": { width: 2880, height: 1620 },
  "/images/feature-recettes-list.png": { width: 2880, height: 1620 },
  "/images/import-recettes-photo.jpg": { width: 2000, height: 1493 },
};

export const faqItems = [
  {
    q: "Quel est le meilleur logiciel de gestion pour une boulangerie artisanale ?",
    a: "Gramme est un logiciel de gestion et de production conçu pour les boulangeries, pâtisseries, chocolateries et glaceries artisanales : digitalisation des recettes et des fiches techniques, calcul du coût de revient, scan de factures, mercuriale et alertes de prix, gestion de stocks, planning de production et pilotage des marges en temps réel. Tout est connecté : un prix qui bouge se répercute jusqu'à la marge.",
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
    q: "Gramme fait-il les relevés de températures et le plan de nettoyage ?",
    a: "Oui, et c'est compris dans l'offre Pro sans module en supplément. Vous déclarez vos enceintes, les bornes que vous fixez et vos heures de relevé ; le relevé se prend en quelques secondes depuis le téléphone du laboratoire, et un écart hors bornes ne s'enregistre pas sans l'action corrective qui l'accompagne. Le plan de nettoyage se pointe par zone et par fréquence, les préparations sortent avec leur numéro de lot et leur date limite, et les registres s'impriment sur la période demandée. Gramme enregistre et horodate ; il ne rédige pas votre plan de maîtrise sanitaire et n'atteste d'aucune conformité.",
  },
  {
    q: "Combien coûte le logiciel Gramme pour une boulangerie ?",
    a: "L'offre Starter est à 49 € HT/mois (ou 490 € HT/an), l'offre Pro à 89 € HT/mois (ou 890 € HT/an). L'installation accompagnée est facturée une seule fois : à partir de 300 € HT en Starter et de 500 € HT en Pro, payable en trois fois sans supplément. Pour une entreprise en cours de création, c'est un forfait ferme de 300 € HT quelle que soit l'offre : il n'y a ni historique de factures ni fiches à reprendre.",
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
      legalName: EDITEUR.raisonSociale,
      alternateName: "Gramme.app",
      url: SITE_URL,
      // Identifiants vérifiables : c'est ce qui distingue une entreprise réelle
      // d'un nom de domaine, pour un moteur comme pour un lecteur.
      vatID: EDITEUR.tva,
      taxID: EDITEUR.siren,
      identifier: [
        { "@type": "PropertyValue", propertyID: "SIREN", value: EDITEUR.siren },
        { "@type": "PropertyValue", propertyID: "SIRET", value: EDITEUR.siret },
        { "@type": "PropertyValue", propertyID: "VAT", value: EDITEUR.tva },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: EDITEUR.rue,
        postalCode: EDITEUR.codePostal,
        addressLocality: EDITEUR.ville,
        addressCountry: EDITEUR.pays,
      },
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/gramme-icon.svg`,
      },
      image: `${SITE_URL}/images/hero-lifestyle.jpg`,
      description:
        "Logiciel de gestion et de production pour boulangeries, pâtisseries, chocolateries et glaceries artisanales. Digitalisation des recettes et fiches techniques, coûts matière, planning de production, gestion de stocks, mercuriale, alertes de prix et pilotage des marges en temps réel. Registres d'hygiène (relevés de températures, plan de nettoyage, traçabilité des lots) et étiquetage des allergènes compris. Tout est connecté.",
      email: SITE_EMAIL,
      foundingDate: "2025",
      sameAs: ["https://www.instagram.com/gramme.app/"],
      founder: [{ "@id": `${SITE_URL}/#jeremy` }, { "@id": `${SITE_URL}/#clermont-fu` }],
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
        "HACCP boulangerie",
        "relevé de température",
        "plan de nettoyage",
        "traçabilité des lots",
        "étiquetage des allergènes",
        "valeurs nutritionnelles",
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
      // Pas de `SearchAction` : le site n'a pas de recherche. Il en déclarait
      // une qui menait au formulaire de contact avec le terme cherché en
      // paramètre — Google teste ces cibles, et une action qui ne fait pas ce
      // qu'elle annonce est le genre de balisage qui fait douter du reste.
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
        "Logiciel de gestion et de production pour boulangeries, pâtisseries, chocolateries et glaceries : digitalisation des recettes, fiches techniques, calculatrice de coût de revient, scan de factures IA, mercuriale et alertes de prix, gestion de stocks, planning de production et pilotage des marges en temps réel.",
      url: SITE_URL,
      // Une vraie capture, pas le rendu multi-appareils : son interface était
      // du faux texte, et c'était l'image que les moteurs associaient au produit.
      image: `${SITE_URL}/images/app/mercuriale.png`,
      featureList: [
        "Digitalisation des recettes et fiches techniques",
        "Calculatrice de coût de revient et de marge",
        "Scan de factures fournisseurs",
        "Mercuriale et alertes de prix",
        "Gestion de stocks et inventaires valorisés",
        "Gestion et planning de production",
        "Pilotage de la rentabilité et des marges en temps réel",
        "Registres d'hygiène : relevés de températures, plan de nettoyage, traçabilité des lots",
        "Étiquetage des allergènes et valeurs nutritionnelles",
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
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 300,
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "Prestation unique, à partir de 300 € HT, payable en trois fois",
        },
        {
          "@type": "Offer",
          name: "Installation accompagnée Pro",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 500,
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: "Prestation unique, à partir de 500 € HT, payable en trois fois",
        },
        {
          "@type": "Offer",
          name: "Installation accompagnée · entreprise en cours de création",
          price: "300",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description:
            "Forfait ferme de 300 € HT quelle que soit l'offre, pour une entreprise en cours de création",
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
      jobTitle: "Chef pâtissier, responsable R&D, co-fondateur de Gramme",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      description:
        "Chef pâtissier formé aux exigences des grandes maisons et responsable de la recherche et développement d'une entreprise du secteur. Co-fondateur de Gramme, il apporte l'expertise de laboratoire : fiches techniques, rendements, coût matière et contraintes réelles de production.",
      knowsAbout: [
        "pâtisserie",
        "fiche technique pâtisserie",
        "recherche et développement produit",
        "coût matière",
        "production en laboratoire",
      ],
      image: `${SITE_URL}/images/jeremy-chef-rd.jpg`,
      url: `${SITE_URL}/a-propos-de-gramme`,
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#clermont-fu`,
      name: "Clermont Fu",
      jobTitle: "Entrepreneur · co-fondateur de Gramme",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      description:
        "Entrepreneur, fondateur de plusieurs entreprises et président de YUFU CAPITAL. Il accompagne des sociétés dans le développement de leur chiffre d'affaires, leur stratégie commerciale, leur marketing et l'outillage de leur gestion. Co-fondateur de Gramme, il porte le volet rentabilité et pilotage.",
      knowsAbout: [
        "stratégie d'entreprise",
        "développement commercial",
        "marketing",
        "pilotage de la rentabilité",
        "création d'entreprise",
      ],
      image: `${SITE_URL}/images/clermontfu_gramme.png`,
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
