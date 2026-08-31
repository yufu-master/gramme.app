import type { Guide } from "./types";

export const guideLogicielChef: Guide = {
  slug: "logiciel-concu-par-un-chef-patissier",
  title: "Un logiciel conçu par un chef pâtissier",
  description:
    "Pourquoi une application pensée dans un laboratoire ne ressemble pas à un outil venu de la restauration. Sous recettes, montage, coût de revient réel.",
  keywords: [
    "logiciel conçu par un pâtissier",
    "logiciel gestion pâtisserie",
    "fiche technique pâtisserie",
    "coût de revient pâtisserie",
  ],
  publishedAt: "2026-08-11",
  updatedAt: "2026-08-11",
  ogImage: "/images/jeremy-chef-rd.jpg",
  summary:
    "Gramme a été conçu par un chef pâtissier en exercice : sous-recettes, montage et coût de revient réel pour les artisans.",
  intro:
    "La plupart des logiciels de gestion utilisés en pâtisserie viennent de la restauration. Ils savent additionner des ingrédients et calculer un coût matière. Ils ne savent pas ce qu'est une crème pâtissière qui sert dans quatre produits différents, ni une perte de cuisson qui change le poids net d'une pâte. Gramme a été conçu par un chef pâtissier en exercice, à partir de ces problèmes-là.",
  draft: false,
  relatedSlug: "scanner-fiches-techniques-patisserie",
  relatedLabel: "Photographier ses fiches techniques et les classer",
  blocks: [
    {
      type: "h2",
      id: "ce-qui-change",
      text: "Ce qui change quand celui qui conçoit l'outil a travaillé au fournil",
    },
    {
      type: "p",
      text: "Un développeur qui n'a jamais monté un entremets modélise une recette comme une liste de lignes : un nom, une quantité, un prix. C'est logique, c'est propre, et c'est faux.",
    },
    {
      type: "p",
      text: "Dans un laboratoire, une recette est un assemblage. Un entremets, ce n'est pas quarante ingrédients à plat. C'est un biscuit, un croustillant, une mousse, une ganache et un glaçage. Chacun de ces éléments est lui-même une recette, avec ses ingrédients, son rendement et son coût au kilo. Et la même mousse sert peut-être dans trois autres produits de la vitrine.",
    },
    {
      type: "p",
      text: "Quand le prix d'une matière première augmente, ce n'est donc pas une ligne qu'il faut corriger. C'est une base qui alimente plusieurs produits finis, et plusieurs marges qui bougent en même temps. Un outil qui traite les recettes à plat vous oblige à corriger partout, à la main, en espérant n'en oublier aucune.",
    },
    {
      type: "h2",
      id: "trois-exigences",
      text: "Trois choses qu'un pâtissier exige et qu'on trouve rarement",
    },
    {
      type: "p",
      text: "**Les sous-recettes qui se propagent.** Vous créez votre crème pâtissière une fois, avec son rendement et son coût réel. Chaque produit qui l'utilise en hérite. Le jour où le prix des œufs monte, tous les produits concernés se recalculent seuls, y compris ceux auxquels vous n'aviez pas pensé.",
    },
    {
      type: "p",
      text: "**Le montage plutôt que la liste.** Un produit composé s'assemble à partir de ses bases, avec la quantité de chacune, exactement comme sur la fiche technique manuscrite du chef. La liste à plat convient aux produits simples, elle ne devrait jamais être imposée pour un entremets.",
    },
    {
      type: "p",
      text: "**Le poids réel plutôt que le poids théorique.** Une pâte qui perd du poids à la cuisson ne coûte pas le même prix au kilo à la sortie qu'à l'entrée. Sans la perte de cuisson, un coût de revient est systématiquement sous-estimé, et la marge affichée est fausse dans le sens qui rassure et qui ruine.",
    },
    {
      type: "h2",
      id: "cout-de-revient",
      text: "Le coût de revient, calculé comme un artisan le calculerait",
    },
    {
      type: "p",
      text: "Prenons l'exemple d'un entremets chocolat-praliné de huit parts, vendu 34 €. Les coûts ci-dessous s'appuient sur des ordres de grandeur d'achat pro relevés en France en 2026 (beurre autour de 11–13 €/kg en GMS, chocolat de couverture courant autour de 15–25 €/kg chez les fournisseurs pâtisserie) : à affiner avec vos propres factures.",
    },
    {
      type: "table",
      headers: ["Composant", "Quantité", "Coût"],
      rows: [
        ["Biscuit joconde", "180 g", "1,48 €"],
        ["Croustillant praliné", "150 g", "2,25 €"],
        ["Mousse chocolat au lait", "450 g", "3,90 €"],
        ["Ganache montée", "200 g", "2,05 €"],
        ["Glaçage miroir", "140 g", "1,55 €"],
        ["**Coût matière total**", "", "**11,23 €**"],
        ["**Marge brute (prix 34 €)**", "", "**67 %**"],
      ],
    },
    {
      type: "p",
      text: "Chacune de ces lignes est une sous-recette dont le coût vient lui-même de ses propres ingrédients, au prix réel de la dernière facture. Le jour où votre crémier change son tarif, les bases concernées bougent, et la marge du produit fini descend sans que personne n'ait rien saisi.",
    },
    {
      type: "p",
      text: "C'est ce cheminement, du sac de farine à la part vendue, qu'un chef pâtissier a en tête et qu'un tableur ne tient pas.",
    },
    {
      type: "h2",
      id: "ce-que-gramme-ne-fait-pas",
      text: "Ce que Gramme ne fait pas",
    },
    {
      type: "p",
      text: "Par honnêteté, et parce que vous le découvririez de toute façon. Gramme n'est pas un logiciel de caisse et ne remplace pas votre encaissement. Il tient vos registres d'hygiène (relevés de températures, nettoyage, lots) mais il ne rédige pas votre plan de maîtrise sanitaire et n'atteste d'aucune conformité. Il ne fait pas votre comptabilité. Et il a besoin d'une connexion pour analyser vos documents.",
    },
    {
      type: "p",
      text: "Ce qu'il fait, il le fait pour un métier précis : celui des artisans boulangers et pâtissiers qui veulent savoir, chaque matin, ce que leur coûte réellement ce qu'ils vendent.",
    },
  ],
  faqs: [
    {
      q: "Faut-il être à l'aise avec l'informatique ?",
      a: "Si vous savez prendre une photo avec votre téléphone, vous savez utiliser l'essentiel. C'est le seul geste quotidien réellement nécessaire.",
    },
    {
      q: "Combien de temps pour reprendre mes recettes ?",
      a: "L'installation est faite avec vous, à partir de votre cahier ou de votre classeur. Vos produits principaux sont saisis ensemble, le reste vient au fil des semaines.",
    },
    {
      q: "Mes recettes restent-elles confidentielles ?",
      a: "Elles vous appartiennent, elles sont cloisonnées par établissement, et elles ne sont montrées à personne. C'est écrit dans le contrat.",
    },
  ],
};
