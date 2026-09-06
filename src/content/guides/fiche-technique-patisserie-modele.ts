import type { Guide } from "./types";

const howToSteps = [
  {
    name: "Nommez et identifiez le produit",
    text: "Nom commercial, famille, référence interne si vous en avez une. C'est ce qui permettra de retrouver la fiche dans six mois et de la relier à une production, pas un détail administratif.",
  },
  {
    name: "Posez le rendement de base",
    text: "Une fiche technique décrit une quantité précise : 40 pièces, 6 cadres de 40 × 60, 12 kg d'appareil. Sans rendement, aucun coût unitaire n'est calculable et la fiche n'est qu'une recette.",
  },
  {
    name: "Listez les composants dans l'unité d'achat",
    text: "Chaque ligne porte un composant, une quantité et l'unité dans laquelle vous l'achetez. Une sous-recette (crème pâtissière, praliné, biscuit) est une ligne comme une autre, valorisée à son coût au kilo et non redétaillée.",
  },
  {
    name: "Renseignez les pertes",
    text: "Perte à la cuisson, au parage, au dressage. Une fiche sans taux de perte produit un coût toujours sous-évalué. Mesurez-le une fois en pesant l'engagé et le vendable, il bouge peu ensuite.",
  },
  {
    name: "Décrivez le procédé en étapes datées",
    text: "Températures, temps, ordre des opérations, points de contrôle. C'est la partie qui rend la fiche utilisable par quelqu'un d'autre que vous, et donc la partie qui a de la valeur le jour où vous recrutez ou vous absentez.",
  },
  {
    name: "Ajoutez le bloc économique",
    text: "Coût matière total, coût unitaire, prix de vente HT, marge brute, taux de marque. C'est le bloc qui transforme un document de production en outil de décision.",
  },
];

export const guideFicheTechniqueModele: Guide = {
  slug: "fiche-technique-patisserie-modele",
  title: "Modèle de fiche technique de pâtisserie à copier",
  description:
    "Un modèle de fiche technique de pâtisserie prêt à copier : rendement, composants, sous-recettes, pertes, procédé et bloc économique, avec un exemple chiffré.",
  keywords: [
    "fiche technique pâtisserie modèle",
    "modèle fiche technique cuisine",
    "exemple fiche technique pâtisserie",
    "gabarit fiche technique boulangerie",
    "fiche technique vierge pâtisserie",
  ],
  publishedAt: "2026-08-13",
  updatedAt: "2026-08-13",
  ogImage: "/images/feature-recette-detail.png",
  summary:
    "La structure d'une fiche technique de pâtisserie qui sert vraiment en production, avec un gabarit vierge à recopier et un exemple complet de tarte au citron meringuée chiffrée.",
  intro:
    "Une fiche technique n'est pas une recette mise au propre. C'est le document qui permet à quelqu'un d'autre de produire à l'identique, et qui vous dit ce que le produit vous coûte. Beaucoup de modèles qui circulent font l'un sans l'autre. Voici la structure complète, un gabarit à recopier, et un exemple chiffré de bout en bout.",
  draft: false,
  relatedSlug: "calcul-cout-de-revient-boulangerie",
  relatedLabel: "Calculer le coût de revient d'un produit de boulangerie",
  howTo: {
    name: "Construire une fiche technique de pâtisserie",
    description:
      "Six blocs : identification, rendement, composants, pertes, procédé, économie.",
    steps: howToSteps,
  },
  blocks: [
    {
      type: "h2",
      id: "structure",
      text: "Les six blocs d'une fiche technique utilisable",
    },
    {
      type: "p",
      text: "Une fiche technique remplit deux fonctions qui n'ont rien à voir : reproduire et chiffrer. Les modèles trouvés en ligne privilégient presque toujours la première et traitent la seconde en ajoutant une colonne « prix » sans gestion des pertes ni des sous-recettes. C'est précisément là que le document cesse d'être fiable.",
    },
    {
      type: "table",
      caption: "Structure d'une fiche technique de pâtisserie",
      headers: ["Bloc", "Contenu", "À quoi il sert"],
      rows: [
        ["Identification", "Nom, famille, référence, auteur, date de mise à jour", "Retrouver et versionner la fiche"],
        ["Rendement", "Quantité produite : pièces, poids, format de cadre", "Rendre tout coût unitaire calculable"],
        ["Composants", "Ligne par ligne : ingrédient ou sous-recette, quantité, unité", "Produire et valoriser"],
        ["Pertes", "Taux par étape : cuisson, parage, dressage", "Passer du coût théorique au coût réel"],
        ["Procédé", "Étapes ordonnées, températures, temps, points de contrôle", "Reproduire sans vous"],
        ["Économie", "Coût matière, coût unitaire, PV HT, marge, taux de marque", "Décider"],
      ],
    },
    {
      type: "howto-steps",
      id: "construire",
      name: "Remplir chaque bloc",
      steps: howToSteps,
    },
    {
      type: "h2",
      id: "gabarit",
      text: "Le gabarit vierge, à recopier tel quel",
    },
    {
      type: "p",
      text: "Voici le gabarit à reproduire dans un tableur ou sur papier. Les colonnes sont dans l'ordre où on les remplit en production. La colonne « coût unitaire » contient le prix d'achat ramené à l'unité de travail, relevé sur votre dernière facture : c'est la seule donnée qui demande un vrai travail de tenue à jour.",
    },
    {
      type: "table",
      caption: "Gabarit de fiche technique : bloc composants",
      headers: ["Composant", "Quantité", "Unité", "Coût unitaire", "Coût ligne"],
      rows: [
        ["Sous-recette ou ingrédient", "0,000", "kg / L / pièce", "0,00 € / unité", "0,00 €"],
        ["…", "…", "…", "…", "…"],
        ["Total matière brut", "", "", "", "0,00 €"],
        ["Perte appliquée", "", "%", "", "0,00 €"],
        ["Total matière réel", "", "", "", "0,00 €"],
        ["Coût unitaire (÷ rendement)", "", "", "", "0,00 €"],
      ],
    },
    {
      type: "h2",
      id: "exemple",
      text: "Exemple complet : tarte au citron meringuée, 8 pièces",
    },
    {
      type: "p",
      text: "Cet exemple montre le point qui manque à la plupart des modèles : deux des composants sont des sous-recettes, valorisées à leur coût au kilo et non redétaillées. La pâte sucrée et la crème citron ont chacune leur propre fiche, avec leur propre rendement et leurs propres pertes.",
    },
    {
      type: "table",
      caption: "Tarte au citron meringuée, 8 tartes de 20 cm",
      headers: ["Composant", "Quantité", "Coût unitaire", "Coût ligne"],
      rows: [
        ["Pâte sucrée (sous-recette)", "1,760 kg", "4,85 € / kg", "8,54 €"],
        ["Crème citron (sous-recette)", "2,400 kg", "6,20 € / kg", "14,88 €"],
        ["Blancs d'œufs", "0,360 kg", "4,10 € / kg", "1,48 €"],
        ["Sucre semoule", "0,720 kg", "1,05 € / kg", "0,76 €"],
        ["Zestes et décor", "8 pièces", "0,14 € / pièce", "1,12 €"],
        ["Total matière brut", "—", "—", "26,78 €"],
        ["Perte 6 % (parage, dressage)", "—", "—", "1,71 €"],
        ["Total matière réel", "—", "—", "28,49 €"],
        ["Coût matière par tarte", "÷ 8", "—", "3,56 €"],
      ],
    },
    {
      type: "table",
      caption: "Bloc économique de la fiche",
      headers: ["Ligne", "Valeur"],
      rows: [
        ["Coût matière unitaire", "3,56 €"],
        ["Prix de vente TTC", "24,00 €"],
        ["Prix de vente HT (TVA 5,5 %)", "22,75 €"],
        ["Marge brute unitaire", "19,19 €"],
        ["Taux de marque", "84,3 %"],
      ],
    },
    {
      type: "h2",
      id: "papier-ou-logiciel",
      text: "Papier, tableur ou logiciel : ce qui change vraiment",
    },
    {
      type: "p",
      text: "Sur papier, une fiche technique est excellente pour produire et inutilisable pour chiffrer : le jour où le beurre augmente, personne ne reprend cent fiches à la main. Sur tableur, le calcul fonctionne tant qu'il n'y a ni sous-recette en cascade ni changement de prix fréquent : deux conditions rarement réunies en pâtisserie.",
    },
    {
      type: "p",
      text: "La différence n'est donc pas dans le modèle de fiche, qui est le même partout, mais dans sa mise à jour. C'est ce que fait Gramme : chaque ligne de composant est rattachée à une matière première dont le prix vient de vos factures scannées, les sous-recettes sont des objets réutilisables, et le bloc économique se recalcule tout seul. Vous pouvez d'ailleurs partir de vos fiches existantes en les photographiant, sans les ressaisir.",
    },
  ],
  faqs: [
    {
      q: "Que doit contenir une fiche technique de pâtisserie ?",
      a: "Six blocs : identification du produit, rendement de base, liste des composants avec quantités et unités, taux de pertes, procédé détaillé avec températures et temps, et bloc économique (coût matière, coût unitaire, prix de vente HT, marge, taux de marque).",
    },
    {
      q: "Quelle différence entre une recette et une fiche technique ?",
      a: "Une recette décrit comment faire. Une fiche technique ajoute le rendement, les pertes, les unités d'achat et le chiffrage, ce qui la rend à la fois reproductible par un tiers et exploitable pour décider d'un prix de vente.",
    },
    {
      q: "Comment gérer les sous-recettes dans une fiche technique ?",
      a: "Une sous-recette a sa propre fiche, avec son rendement et ses pertes, et entre dans la recette finale comme une ligne unique valorisée à son coût au kilo. La redétailler dans chaque recette finale garantit qu'elle ne sera jamais mise à jour partout.",
    },
    {
      q: "La fiche technique est-elle obligatoire en boulangerie-pâtisserie ?",
      a: "Aucun texte n'impose la fiche technique de production elle-même. En revanche, l'information sur les allergènes est obligatoire, et une fiche technique tenue à jour en est la source la plus fiable puisqu'elle liste les composants réellement utilisés.",
    },
    {
      q: "Peut-on récupérer ses anciennes fiches sans tout ressaisir ?",
      a: "Oui. Des fiches manuscrites, même anciennes ou tachées, se photographient et sont reconstruites automatiquement, sous-recettes séparées des recettes finales. Les gros fichiers Excel s'importent également en une fois.",
    },
  ],
};
