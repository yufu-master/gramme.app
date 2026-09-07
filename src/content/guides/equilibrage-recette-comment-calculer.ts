import type { Guide } from "./types";

export const guideEquilibrage: Guide = {
  slug: "equilibrage-recette-comment-calculer",
  title: "Équilibrage de recette : comment le calculer",
  description:
    "Ce qu'est l'équilibrage d'une glace, d'un sorbet ou d'une ganache, les indicateurs à calculer, leurs fourchettes, et la méthode pas à pas sur un exemple chiffré.",
  keywords: [
    "équilibrage de recette",
    "comment calculer l'équilibrage d'une glace",
    "équilibrage glace sorbet",
    "équilibrage ganache chocolat",
    "calcul extrait sec glace",
  ],
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  ogImage: "/images/app/equilibrage.png",
  summary:
    "L'équilibrage est le calcul qui dit si une recette tiendra avant de la couler. Voici les indicateurs, ce qu'un écart provoque en bouche et en vitrine, et la méthode complète sur une crème glacée vanille.",
  intro:
    "Une glace dure comme du bois, une ganache qui tranche au deuxième jour, un sorbet plein de cristaux : ces défauts ne se voient sur aucune fiche technique. Ils se lisent dans les rapports entre le sucre, l'eau et la matière grasse, et ces rapports se calculent. C'est ce calcul qu'on appelle l'équilibrage, et les glaciers le font depuis toujours sur un carnet.",
  draft: false,
  liens: [
    { href: "/fonctionnalites/equilibrage-recette", label: "L'équilibrage dans Gramme" },
    { href: "/logiciel-glacerie", label: "Le logiciel pensé pour une glacerie" },
    { href: "/logiciel-chocolaterie", label: "Le logiciel pensé pour une chocolaterie" },
  ],
  relatedSlug: "calcul-pac-pod-glace",
  relatedLabel: "Calculer le PAC et le POD d'une glace",
  howTo: {
    name: "Équilibrer une recette de glacerie",
    description:
      "Calculer les indicateurs d'équilibrage d'un mix à partir de la composition des matières premières, et corriger la recette.",
    steps: [
      {
        name: "Renseigner la composition de chaque matière",
        text: "Pour chaque ingrédient, il faut sa part d'eau, de sucres (et de quels sucres), de matières grasses, de protéines et d'extrait sec. Ces valeurs se lisent sur la fiche technique du fournisseur ou dans une table de composition.",
      },
      {
        name: "Additionner chaque famille sur le mix entier",
        text: "On multiplie chaque quantité par la part de la famille concernée, on additionne, puis on rapporte au poids total du mix. Le résultat est un pourcentage pour 100 g.",
      },
      {
        name: "Pondérer les sucres par leur pouvoir sucrant et anticongelant",
        text: "Tous les sucres ne sucrent pas pareil et ne gèlent pas pareil. Chaque sucre porte deux coefficients, POD et PAC, exprimés en équivalents saccharose. On pondère, on additionne, on rapporte aux 100 g.",
      },
      {
        name: "Comparer aux fourchettes du type de produit",
        text: "Une crème glacée, un sorbet, une ganache et un bonbon n'ont ni les mêmes indicateurs ni les mêmes fourchettes. On situe chaque valeur, et on lit ce qu'un écart provoque.",
      },
      {
        name: "Corriger sur un brouillon, pas sur la fiche",
        text: "On déplace des grammes et on regarde les indicateurs bouger, sans toucher à la recette de production. On applique quand le réglage convient.",
      },
    ],
  },
  blocks: [
    { type: "h2", id: "definition", text: "Ce que l'équilibrage mesure vraiment" },
    {
      type: "p",
      text: "Équilibrer, c'est vérifier que les grandes familles d'un mix sont dans des proportions qui donneront la texture attendue à la température de service. Le calcul ne regarde ni le goût ni la qualité des produits : il regarde des rapports. Une glace à la vanille et une glace au café peuvent avoir exactement le même équilibrage.",
    },
    {
      type: "p",
      text: "Ce qui rend le calcul indispensable, c'est qu'aucun de ces rapports ne se devine à la lecture d'une recette. Remplacer 100 g de saccharose par 100 g de dextrose ne change ni le poids du mix, ni son extrait sec, ni presque son coût. Cela change le pouvoir anticongelant de près de moitié, et la glace passe de dure à impossible à tenir en vitrine.",
    },
    { type: "h2", id: "indicateurs-glace", text: "Les indicateurs d'une crème glacée" },
    {
      type: "p",
      text: "Voici les fourchettes usuelles de la glacerie artisanale, pour 100 g de mix. Ce sont des repères de métier, pas des normes : un atelier ajuste les siennes selon sa turbine, sa vitrine et sa clientèle.",
    },
    {
      type: "table",
      caption: "Repères d'une crème glacée, pour 100 g de mix",
      headers: ["Indicateur", "Fourchette", "Ce qu'un écart provoque"],
      rows: [
        ["Sucres", "16 à 22 %", "Trop bas : glace dure et fade. Trop haut : molle et écœurante"],
        ["Matières grasses", "6 à 12 %", "Onctuosité et longueur en bouche"],
        ["Extrait sec dégraissé du lait", "8 à 12 %", "Corps et foisonnement. Trop haut : sablage par cristallisation du lactose"],
        ["Extrait sec total", "36 à 42 %", "Trop bas : glace aqueuse et cristaux. Trop haut : lourde"],
        ["Pouvoir sucrant (POD)", "14 à 20", "Perception du sucré, indépendante du poids de sucre"],
        ["Pouvoir anticongelant (PAC)", "24 à 30", "Trop bas : dure en vitrine. Trop haut : ne tient pas"],
      ],
    },
    {
      type: "p",
      text: "Deux indicateurs méritent qu'on s'y arrête, parce qu'ils se confondent souvent. Le POD dit à quel point le mix sera perçu sucré ; le PAC dit à quelle température il gèlera. Un même poids de sucre peut donner un POD faible et un PAC fort, ou l'inverse : c'est précisément ce qui permet de rendre une glace plus souple sans la rendre plus sucrée.",
    },
    { type: "h2", id: "indicateurs-sorbet", text: "Les indicateurs d'un sorbet" },
    {
      type: "p",
      text: "Un sorbet n'a pas de matière grasse ajoutée, et les sucres du fruit comptent dans le total. Ses fourchettes sont donc décalées vers le haut sur les sucres, et vers le bas sur l'extrait sec.",
    },
    {
      type: "table",
      caption: "Repères d'un sorbet, pour 100 g de mix",
      headers: ["Indicateur", "Fourchette", "Ce qu'un écart provoque"],
      rows: [
        ["Sucres", "26 à 32 %", "Texture et tenue. Les sucres du fruit comptent"],
        ["Extrait sec total", "30 à 36 %", "Trop bas : cristaux. Trop haut : pâteux"],
        ["Pouvoir sucrant (POD)", "20 à 28", "Perception du sucré"],
        ["Pouvoir anticongelant (PAC)", "28 à 33", "Tenue en vitrine"],
        ["Matières grasses", "au plus 0,5 %", "Un sorbet n'en a pas d'ajoutée"],
      ],
    },
    { type: "h2", id: "indicateurs-ganache", text: "Les indicateurs d'une ganache et d'un bonbon" },
    {
      type: "p",
      text: "En chocolaterie, l'enjeu n'est plus la texture au froid mais la conservation. C'est l'eau libre qui décide, et elle se lit par l'activité de l'eau. Une ganache sous 0,85 d'activité de l'eau bloque le développement des bactéries pathogènes.",
    },
    {
      type: "table",
      caption: "Repères d'une ganache et d'un intérieur de bonbon, pour 100 g",
      headers: ["Indicateur", "Ganache", "Bonbon", "Ce qu'il gouverne"],
      rows: [
        ["Eau", "14 à 24 %", "8 à 18 %", "Moins d'eau, plus de tenue et de conservation"],
        ["Sucres", "20 à 38 %", "30 à 60 %", "Les sucres lient l'eau. L'inverti et le sorbitol plus que le saccharose"],
        ["Matières grasses", "25 à 40 %", "—", "Fondant et brillance"],
        ["Activité de l'eau", "au plus 0,85", "au plus 0,75", "Sous 0,85, plus de bactéries pathogènes. Sous 0,75, les moisissures sont freinées"],
      ],
    },
    { type: "h2", id: "methode", text: "La méthode, sur une crème glacée vanille" },
    {
      type: "p",
      text: "Prenons un mix de 2 000 g : 1 000 g de lait entier, 480 g de crème 35 %, 200 g de sucre semoule, 120 g de dextrose, 90 g de jaunes d'œufs, 90 g de lait écrémé en poudre, 10 g de stabilisant, 2 gousses de vanille. Le calcul se fait en quatre temps.",
    },
    {
      type: "howto-steps",
      id: "etapes",
      name: "Calculer l'équilibrage d'un mix",
      steps: [
        {
          name: "Réunir la composition de chaque matière",
          text: "Le lait entier, c'est environ 87,5 % d'eau, 3,6 % de matières grasses, 4,8 % de lactose et 3,2 % de protéines. La crème 35 %, c'est 35 % de matières grasses. Le lait écrémé en poudre, c'est environ 96 % d'extrait sec dont 51 % de lactose. Ces valeurs viennent des fiches techniques des fournisseurs.",
        },
        {
          name: "Additionner famille par famille",
          text: "Les sucres du mix ne sont pas seulement le sucre semoule et le dextrose : le lactose du lait et de la poudre en fait partie. On additionne tout, on divise par 2 000 g, et on obtient le pourcentage de sucres pour 100 g de mix.",
        },
        {
          name: "Pondérer les sucres pour le POD et le PAC",
          text: "Le saccharose vaut 100 en pouvoir sucrant et 100 en pouvoir anticongelant, par convention. Le dextrose vaut 70 en POD et 190 en PAC : il sucre moins et gèle beaucoup moins. Le lactose vaut 16 en POD et 100 en PAC. On multiplie chaque poids de sucre par son coefficient, on additionne, on rapporte aux 100 g.",
        },
        {
          name: "Lire les écarts, pas seulement les valeurs",
          text: "Un indicateur hors fourchette n'est pas une faute : c'est une information. Un extrait sec à 34 % annonce des cristaux, un PAC à 33 annonce une glace qui coule en vitrine. On corrige celui qui gêne, en sachant que déplacer un sucre en déplace toujours deux.",
        },
      ],
    },
    {
      type: "p",
      text: "Sur ce mix, les indicateurs tombent à 21,1 % de sucres, 10,1 % de matières grasses, 10,3 % d'extrait sec dégraissé du lait, 37,4 % d'extrait sec total, 14,7 de POD et 26,0 de PAC. Tout est dans les fourchettes, et le PAC de 26 place la température de service autour de −10 °C.",
    },
    { type: "h2", id: "correction", text: "Corriger sans tout casser" },
    {
      type: "p",
      text: "La difficulté de l'équilibrage n'est pas de calculer, c'est de corriger. Chaque ingrédient porte plusieurs familles à la fois : ajouter du lait en poudre monte l'extrait sec, mais aussi le lactose, donc le risque de sablage. Ajouter du dextrose fait tomber le point de congélation sans sucrer davantage, mais monte l'extrait sec.",
    },
    {
      type: "p",
      text: "La règle pratique est de ne changer qu'une chose à la fois, et de regarder les six indicateurs après chaque changement. C'est fastidieux à la main, et c'est exactement ce qu'un outil doit faire à votre place : dans Gramme, un brouillon recalcule tout pendant que vous déplacez des grammes, sans rien enregistrer tant que le réglage ne vous convient pas.",
    },
    { type: "h2", id: "limites", text: "Ce que l'équilibrage ne dit pas" },
    {
      type: "p",
      text: "Un mix parfaitement équilibré peut donner une mauvaise glace. Le calcul ne voit ni la maturation, ni le foisonnement réel de votre turbine, ni la température de votre vitrine, ni la qualité de vos fruits. Il élimine une catégorie de défauts, celle qui vient des proportions, et laisse entière la part du métier.",
    },
    {
      type: "p",
      text: "Il ne remplace pas non plus un mesureur d'activité de l'eau en chocolaterie. L'activité de l'eau calculée est une estimation à partir des sucres dissous et de l'eau ; si vous mesurez à l'appareil, c'est votre mesure qui fait foi, et la durée de vie d'un produit reste sous la responsabilité de l'atelier.",
    },
  ],
  faqs: [
    {
      q: "Qu'est-ce que l'équilibrage d'une recette ?",
      a: "C'est le calcul qui vérifie que les grandes familles d'un mix (sucres, matières grasses, extrait sec, eau) sont dans des proportions qui donneront la texture attendue. En glacerie, il détermine si la glace sera dure ou coulante à la température de service ; en chocolaterie, il détermine la tenue et la conservation d'une ganache.",
    },
    {
      q: "Comment calculer l'équilibrage d'une glace ?",
      a: "On part de la composition de chaque matière première (eau, sucres, matières grasses, protéines, extrait sec), on additionne famille par famille sur le mix entier, on rapporte à 100 g, puis on pondère les sucres par leur pouvoir sucrant et leur pouvoir anticongelant. On compare enfin chaque valeur aux fourchettes de la glacerie.",
    },
    {
      q: "Quelles sont les bonnes valeurs pour une crème glacée ?",
      a: "Les repères usuels sont 16 à 22 % de sucres, 6 à 12 % de matières grasses, 8 à 12 % d'extrait sec dégraissé du lait, 36 à 42 % d'extrait sec total, un POD de 14 à 20 et un PAC de 24 à 30. Un atelier ajuste ces fourchettes selon sa turbine et sa vitrine.",
    },
    {
      q: "Peut-on équilibrer une recette dans un tableur ?",
      a: "Oui, et beaucoup d'ateliers le font. La difficulté n'est pas la formule mais l'entretien : chaque nouvelle matière première demande de saisir sa composition, et chaque changement de fournisseur invalide silencieusement les résultats. Un outil relié au fichier des matières évite cette dérive.",
    },
    {
      q: "L'équilibrage sert-il en boulangerie ou en pâtisserie ?",
      a: "Pas sous cette forme. Les indicateurs de la glacerie et de la chocolaterie n'ont pas d'équivalent pour un pain ou un entremets, où l'hydratation et le taux de levain jouent d'autres rôles. C'est pourquoi la fonction s'active atelier par atelier plutôt que d'encombrer tout le monde.",
    },
  ],
};
