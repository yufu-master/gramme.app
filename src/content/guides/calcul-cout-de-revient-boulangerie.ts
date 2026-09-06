import type { Guide } from "./types";

const howToSteps = [
  {
    name: "Relevez le prix d'achat réel de chaque matière première",
    text: "Pas le prix du catalogue, pas celui de l'an dernier : celui de la dernière facture, port et remises compris, ramené à l'unité de travail (le kilo, le litre, la pièce). Une farine achetée 21,60 € le sac de 25 kg vaut 0,864 € le kilo. C'est ce chiffre-là qui entre dans la recette.",
  },
  {
    name: "Pesez la recette en unités réelles, sous-recettes comprises",
    text: "Chaque composant est exprimé dans la même unité que son prix d'achat. Une préparation intermédiaire (détrempe, crème pâtissière, praliné) se calcule d'abord seule, puis entre dans la recette finale à son coût au kilo, pas à son prix d'ingrédients recopié.",
  },
  {
    name: "Appliquez les pertes",
    text: "Parage, cuisson, évaporation, chutes de découpe, ratés : entre ce que vous engagez et ce que vous vendez, il y a un écart. Un appareil qui perd 12 % à la cuisson coûte 100 / 88 = 1,136 fois son coût brut par kilo vendu. Sauter cette étape est l'erreur la plus fréquente, et elle sous-estime toujours le coût.",
  },
  {
    name: "Divisez par le rendement réel",
    text: "Le coût total de la recette, pertes incluses, divisé par le nombre de pièces effectivement vendables. Pas le nombre théorique du livre : celui que vous sortez vraiment du four.",
  },
  {
    name: "Comparez au prix de vente hors taxes",
    text: "La marge brute est le prix de vente HT moins le coût matière. Le taux de marque est cette marge rapportée au prix de vente HT. C'est ce ratio, et non la marge en euros, qui se compare d'une gamme à l'autre.",
  },
];

export const guideCoutDeRevient: Guide = {
  slug: "calcul-cout-de-revient-boulangerie",
  title: "Calculer son coût de revient en boulangerie",
  description:
    "La méthode complète : matières, pertes, main-d'œuvre et charges, avec un exemple chiffré de la farine au pain vendu.",
  keywords: [
    "calcul coût de revient boulangerie",
    "coût de revient pain",
    "prix de revient boulangerie",
    "calcul coût matière boulangerie",
    "marge brute boulangerie",
    "taux de marque boulangerie",
  ],
  publishedAt: "2026-08-13",
  updatedAt: "2026-08-13",
  ogImage: "/images/app/recette-couts.png",
  summary:
    "Méthode complète pour calculer le coût de revient d'un produit de boulangerie : prix d'achat réels, sous-recettes, pertes, rendement et marge, avec un exemple chiffré de baguette tradition.",
  intro:
    "Le coût de revient est le seul chiffre qui dit si un produit vous fait gagner ou perdre de l'argent. La plupart des artisans en ont une idée approximative, héritée d'un calcul fait une fois, il y a trois ans, avec des prix qui ont bougé depuis. Voici la méthode complète, avec ce qui est habituellement oublié.",
  draft: false,
  liens: [
    { href: "/logiciel-cout-de-revient", label: "Le coût de revient, calculé une fois pour toutes" },
    { href: "/logiciel-boulangerie", label: "Le logiciel pensé pour un fournil" },
  ],
  relatedSlug: "coefficient-cout-matiere-boulangerie",
  relatedLabel: "Quel pourcentage de coût matière viser en boulangerie",
  howTo: {
    name: "Calculer le coût de revient d'une recette de boulangerie",
    description:
      "Cinq étapes : prix d'achat réels, pesée en unités réelles, application des pertes, division par le rendement, comparaison au prix de vente.",
    steps: howToSteps,
  },
  blocks: [
    {
      type: "h2",
      id: "definition",
      text: "Coût matière, coût de revient, marge : de quoi parle-t-on",
    },
    {
      type: "p",
      text: "Trois notions sont couramment confondues, et cette confusion coûte cher. Le coût matière est la somme des matières premières entrant dans un produit, pertes comprises. Le coût de revient complet y ajoute la main-d'œuvre, l'énergie, l'emballage et une quote-part de charges fixes. La marge brute est la différence entre le prix de vente hors taxes et le coût matière.",
    },
    {
      type: "p",
      text: "En boulangerie artisanale, la décision quotidienne (quel produit garder, lequel réajuster, lequel retirer de la gamme) se prend sur le coût matière et la marge brute. Le coût de revient complet sert à valider une gamme ou à préparer un plan de financement, pas à arbitrer entre deux viennoiseries un mardi matin. C'est pourquoi cet article part du coût matière, celui que vous pouvez tenir à jour sans comptable.",
    },
    {
      type: "howto-steps",
      id: "methode",
      name: "La méthode en cinq étapes",
      steps: howToSteps,
    },
    {
      type: "h2",
      id: "exemple",
      text: "Exemple chiffré : une baguette tradition",
    },
    {
      type: "p",
      text: "Prenons une pétrissée de 10 kg de farine, qui donne 44 baguettes de 280 g cuites. Les prix ci-dessous sont des prix d'achat d'exemple : remplacez-les par ceux de vos dernières factures, c'est tout l'intérêt de la méthode.",
    },
    {
      type: "table",
      caption: "Coût matière d'une pétrissée de 10 kg de farine",
      headers: ["Composant", "Quantité", "Prix d'achat", "Coût"],
      rows: [
        ["Farine tradition T65", "10 kg", "0,864 € / kg", "8,64 €"],
        ["Eau", "6,8 L", "0,004 € / L", "0,03 €"],
        ["Sel de mer", "180 g", "0,95 € / kg", "0,17 €"],
        ["Levure fraîche", "80 g", "3,20 € / kg", "0,26 €"],
        ["Levain naturel (sous-recette)", "1,5 kg", "0,71 € / kg", "1,07 €"],
        ["Total matière brut", "—", "—", "10,17 €"],
      ],
    },
    {
      type: "p",
      text: "Le total brut est de 10,17 €. Il n'est pas encore utilisable. Sur cette pétrissée, comptons 3 % de perte entre le pesage, les chutes de façonnage et les pièces non vendables : le coût réel devient 10,17 / 0,97 = 10,48 €. Divisé par 44 baguettes, cela donne un coût matière de 0,238 € par baguette.",
    },
    {
      type: "table",
      caption: "Du coût matière à la marge, par baguette",
      headers: ["Ligne", "Valeur"],
      rows: [
        ["Coût matière unitaire", "0,238 €"],
        ["Prix de vente TTC", "1,30 €"],
        ["Prix de vente HT (TVA 5,5 %)", "1,232 €"],
        ["Marge brute unitaire", "0,994 €"],
        ["Taux de marque", "80,7 %"],
        ["Coefficient multiplicateur", "5,2"],
      ],
    },
    {
      type: "p",
      text: "Un détail qui piège beaucoup de monde : le prix de vente doit être ramené hors taxes avant toute comparaison. En France, le pain et la viennoiserie vendus à emporter relèvent du taux réduit de 5,5 %. Comparer un coût matière hors taxes à un prix de vente TTC gonfle artificiellement la marge de plus de cinq points.",
    },
    {
      type: "h2",
      id: "erreurs",
      text: "Les quatre erreurs qui faussent tous les calculs",
    },
    {
      type: "p",
      text: "Première erreur : ignorer les pertes. C'est la plus répandue et la plus coûteuse. Un coût matière calculé sans perte est systématiquement sous-évalué, de 3 % sur une pétrissée bien tenue à plus de 15 % sur un entremets avec parage.",
    },
    {
      type: "p",
      text: "Deuxième erreur : recopier les ingrédients d'une sous-recette dans la recette finale au lieu de la valoriser à son coût au kilo. Une crème pâtissière qui entre dans six produits doit être calculée une fois. Recopiée six fois, elle sera mise à jour zéro fois.",
    },
    {
      type: "p",
      text: "Troisième erreur : travailler avec des prix figés. Une farine, un beurre ou un chocolat de couverture peuvent bouger de 20 % en une saison. Un coût de revient calculé une fois par an décrit une réalité qui n'existe plus au bout de trois mois.",
    },
    {
      type: "p",
      text: "Quatrième erreur : raisonner en marge unitaire au lieu du taux de marque. Un entremets qui dégage 8 € de marge sur un prix de vente de 32 € est moins rentable, en proportion, qu'une baguette à 0,99 € de marge sur 1,23 €. Le taux de marque permet la comparaison ; l'euro de marge ne le permet pas.",
    },
    {
      type: "h2",
      id: "frequence",
      text: "À quelle fréquence refaire le calcul",
    },
    {
      type: "p",
      text: "Le calcul lui-même n'a pas besoin d'être refait : ce sont les prix d'achat qui bougent. La bonne fréquence est donc celle de vos livraisons. Chaque facture qui modifie un prix devrait mettre à jour toutes les recettes qui contiennent cette matière première, sous-recettes comprises. À la main, c'est un travail impossible à tenir au-delà d'une vingtaine de références. C'est exactement ce que Gramme automatise : vous photographiez la facture, les coûts et les marges des recettes concernées se recalculent, et les fiches dont la marge se dégrade remontent.",
    },
  ],
  faqs: [
    {
      q: "Quelle est la formule du coût de revient en boulangerie ?",
      a: "Coût matière = (somme des composants au prix d'achat réel) ÷ (1 − taux de perte), le tout divisé par le nombre de pièces vendables. Le coût de revient complet ajoute ensuite main-d'œuvre, énergie, emballage et quote-part de charges fixes.",
    },
    {
      q: "Comment calculer le taux de marque d'un produit de boulangerie ?",
      a: "Taux de marque = (prix de vente HT − coût matière) ÷ prix de vente HT, exprimé en pourcentage. Il se calcule toujours hors taxes : en France, le pain et la viennoiserie à emporter relèvent du taux de TVA réduit à 5,5 %.",
    },
    {
      q: "Faut-il inclure la main-d'œuvre dans le coût de revient ?",
      a: "Pour arbitrer au quotidien entre deux produits, non : le coût matière et la marge brute suffisent et se tiennent à jour facilement. Pour valider une gamme, fixer une politique de prix ou monter un dossier de financement, oui : il faut alors le coût de revient complet, main-d'œuvre et charges fixes comprises.",
    },
    {
      q: "Comment tenir compte des pertes de cuisson dans le calcul ?",
      a: "En divisant le coût brut par (1 − taux de perte). Une perte de 12 % donne un coefficient de 1 ÷ 0,88 = 1,136. Le taux de perte se mesure en pesant l'engagé et le vendable sur quelques productions, pas en le devinant.",
    },
    {
      q: "Un logiciel est-il nécessaire pour calculer son coût de revient ?",
      a: "Non pour une recette isolée : un tableur suffit. Oui dès qu'il y a des sous-recettes en cascade et des prix d'achat qui bougent, parce que le travail n'est pas le calcul mais sa mise à jour. C'est le rôle d'un logiciel comme Gramme : rattacher chaque ingrédient à un prix d'achat réel et propager automatiquement chaque changement.",
    },
  ],
};
