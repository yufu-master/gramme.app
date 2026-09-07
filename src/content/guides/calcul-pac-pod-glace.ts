import type { Guide } from "./types";

export const guidePacPod: Guide = {
  slug: "calcul-pac-pod-glace",
  title: "Calculer le PAC et le POD d'une glace",
  description:
    "Le pouvoir anticongelant et le pouvoir sucrant, leur table de coefficients, le calcul détaillé sur un mix, et la conversion du PAC en température de service.",
  keywords: [
    "calcul PAC glace",
    "pouvoir anticongelant glace",
    "POD pouvoir sucrant glacerie",
    "table coefficients sucres glace",
    "température de service glace",
  ],
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  ogImage: "/images/app/equilibrage.png",
  summary:
    "Deux nombres décident de la tenue d'une glace en vitrine et de son goût sucré. Voici leurs coefficients par sucre, le calcul pas à pas, et comment lire un PAC en degrés.",
  intro:
    "Le pouvoir anticongelant et le pouvoir sucrant sont les deux indicateurs les plus mal compris de la glacerie, parce qu'ils portent tous les deux sur le sucre et qu'ils ne disent pas la même chose. L'un décide de la dureté, l'autre du goût. Les confondre, c'est corriger une glace trop dure en la rendant écœurante.",
  draft: false,
  liens: [
    { href: "/fonctionnalites/equilibrage-recette", label: "L'équilibrage dans Gramme" },
    { href: "/logiciel-glacerie", label: "Le logiciel pensé pour une glacerie" },
  ],
  relatedSlug: "equilibrage-recette-comment-calculer",
  relatedLabel: "Équilibrage de recette : comment le calculer",
  blocks: [
    { type: "h2", id: "definitions", text: "Deux nombres, deux questions différentes" },
    {
      type: "p",
      text: "Le POD, pour pouvoir sucrant, répond à la question « à quel point cela sucre ». Le PAC, pour pouvoir anticongelant, répond à « à quelle température cela gèle ». Les deux sont exprimés en équivalents saccharose : le sucre de table vaut 100 sur les deux échelles, par convention.",
    },
    {
      type: "p",
      text: "Cette convention est ce qui rend le calcul utile. Le dextrose vaut 70 en POD et 190 en PAC : à poids égal, il sucre trente pour cent de moins que le sucre et abaisse le point de congélation presque deux fois plus. C'est le levier classique pour assouplir une glace sans la sucrer davantage.",
    },
    { type: "h2", id: "table", text: "La table des coefficients" },
    {
      type: "p",
      text: "Voici les valeurs de référence, pour la part de sucres de chaque produit. Un sirop de glucose à 80 % de matière sèche apporte donc 80 g de sucres pour 100 g de sirop, et ce sont ces 80 g qui portent les coefficients.",
    },
    {
      type: "table",
      caption: "Pouvoir sucrant et pouvoir anticongelant, saccharose = 100",
      headers: ["Sucre", "POD", "PAC", "À quoi il sert"],
      rows: [
        ["Sucre (saccharose)", "100", "100", "La référence. Structure et goût"],
        ["Dextrose", "70", "190", "Assouplir sans trop sucrer"],
        ["Sucre inverti (trimoline)", "130", "190", "Assouplir en sucrant plus. Aussi humectant"],
        ["Miel", "130", "190", "Même profil que l'inverti, avec un goût"],
        ["Fructose", "170", "190", "Sucre beaucoup, gèle peu. À doser avec prudence"],
        ["Sorbitol", "60", "190", "Assouplit sans sucrer. Effet laxatif au-delà d'un seuil"],
        ["Sirop de glucose DE 60", "60", "119", "Compromis entre corps et souplesse"],
        ["Sirop de glucose DE 38 à 44", "50", "81", "Donne du corps, retient la cristallisation"],
        ["Glucose atomisé DE 33", "30", "67", "Extrait sec sans sucrer ni assouplir"],
        ["Maltodextrine DE 18", "21", "34", "Extrait sec presque neutre"],
        ["Lactose", "16", "100", "Apporté par le lait, souvent oublié du calcul"],
        ["Tréhalose", "45", "100", "Structure, peu sucrant"],
        ["Inuline", "10", "0", "Fibre : extrait sec sans effet sur le froid"],
      ],
    },
    {
      type: "p",
      text: "Le lactose mérite une mention à part. Il n'est jamais ajouté volontairement, mais il arrive par le lait, la crème et surtout le lait écrémé en poudre. Sur une crème glacée classique, il représente facilement quatre à cinq points de sucres, et il compte dans le PAC comme du saccharose. L'oublier fausse le calcul de plusieurs degrés.",
    },
    { type: "h2", id: "calcul", text: "Le calcul, ligne à ligne" },
    {
      type: "p",
      text: "La formule est la même pour les deux indicateurs. Pour chaque ingrédient : poids de l'ingrédient, multiplié par sa part de sucres, multiplié par le coefficient, divisé par 100. On additionne, puis on rapporte au poids total du mix et on multiplie par 100 pour obtenir la valeur pour 100 g.",
    },
    {
      type: "table",
      caption: "PAC d'un mix de 2 000 g de crème glacée vanille",
      headers: ["Ingrédient", "Poids", "Sucres apportés", "Coefficient PAC", "Contribution"],
      rows: [
        ["Sucre semoule", "200 g", "200 g de saccharose", "100", "200"],
        ["Dextrose", "120 g", "120 g de dextrose", "190", "228"],
        ["Lait entier", "1 000 g", "48 g de lactose", "100", "48"],
        ["Crème 35 %", "480 g", "14 g de lactose", "100", "14"],
        ["Lait écrémé en poudre", "90 g", "46 g de lactose", "100", "46"],
        ["Total", "2 000 g", "428 g", "", "536"],
      ],
    },
    {
      type: "p",
      text: "Le PAC pour 100 g vaut donc 536 divisé par 2 000, multiplié par 100, soit 26,8. Il est dans la fourchette de 24 à 30 d'une crème glacée. Le même tableau, avec les coefficients POD, donnerait environ 14,7 : la glace gèle bas sans être perçue très sucrée, ce qui est précisément l'effet recherché du dextrose.",
    },
    { type: "h2", id: "temperature", text: "Du PAC à une température" },
    {
      type: "p",
      text: "Un PAC ne se lit pas en degrés directement, mais il s'y convertit. La référence de la profession, celle d'Angelo Corvitto, place 27,8 de PAC pour 100 g à une température de service de −11 °C, et retient qu'environ deux points de PAC valent un degré.",
    },
    {
      type: "table",
      caption: "Correspondance approchée entre PAC et température de service",
      headers: ["PAC pour 100 g", "Température de service"],
      rows: [
        ["20", "−7 °C"],
        ["24", "−9 °C"],
        ["26", "−10 °C"],
        ["27,8", "−11 °C"],
        ["30", "−12 °C"],
        ["34", "−14 °C"],
        ["40", "−17 °C"],
      ],
    },
    {
      type: "p",
      text: "Cette table est une approximation utile, pas une loi physique : elle ignore la part d'eau du mix, qui décide de la quantité réellement gelable. Un calcul plus fin part de l'eau et des solutés, et donne la fraction d'eau gelée à chaque température. La différence entre les deux approches reste inférieure à un degré sur la plage qui nous intéresse.",
    },
    { type: "h2", id: "erreurs", text: "Les trois erreurs qui reviennent" },
    {
      type: "p",
      text: "La première est d'oublier le lactose. La deuxième est de compter le poids d'un sirop plutôt que sa part de sucres : un sirop de glucose à 80 % de matière sèche apporte 80 g de sucres pour 100 g, pas 100. La troisième est de croire qu'un même poids de sucre donne toujours le même résultat, et de remplacer un sucre par un autre sans refaire le calcul.",
    },
    {
      type: "p",
      text: "Toutes les trois viennent du même endroit : le calcul se fait à la main, sur un carnet, à partir de valeurs qu'on retient de mémoire. Le remède n'est pas de mieux retenir, c'est de faire porter la composition par la matière première elle-même, une fois pour toutes.",
    },
  ],
  faqs: [
    {
      q: "Comment calculer le PAC d'une glace ?",
      a: "Pour chaque ingrédient, on multiplie son poids par sa part de sucres et par le coefficient PAC du sucre concerné, divisé par 100. On additionne toutes les contributions, on divise par le poids total du mix et on multiplie par 100. Le résultat s'exprime en équivalents saccharose pour 100 g.",
    },
    {
      q: "Quelle différence entre le PAC et le POD ?",
      a: "Le PAC mesure l'abaissement du point de congélation, donc la dureté de la glace en vitrine. Le POD mesure la perception du sucré. Le dextrose illustre l'écart : 190 de PAC pour seulement 70 de POD, c'est-à-dire beaucoup d'effet sur le froid et peu sur le goût.",
    },
    {
      q: "Quel PAC viser pour une glace et pour un sorbet ?",
      a: "Une crème glacée se tient entre 24 et 30 de PAC, un sorbet entre 28 et 33. Le sorbet a besoin d'un PAC plus élevé parce qu'il contient beaucoup plus d'eau et n'a pas de matière grasse pour lui donner de la souplesse.",
    },
    {
      q: "Le lactose du lait compte-t-il dans le calcul ?",
      a: "Oui, et c'est l'oubli le plus fréquent. Sur une crème glacée classique, le lactose du lait, de la crème et de la poudre représente couramment quatre à cinq points de sucres, avec un coefficient PAC de 100. L'ignorer sous-estime le PAC de plusieurs points, soit un ou deux degrés.",
    },
  ],
};
