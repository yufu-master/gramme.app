import type { Guide } from "@/content/guides/types";

const howToSteps = [
  {
    name: "Partez du prix de vente hors taxes",
    text: "Une marge ne se calcule jamais sur un prix affiché en vitrine. Divisez le prix TTC par 1,055 pour la vente à emporter, par 1,10 pour la consommation sur place. Un flan à 3,20 € la part n'entre dans le calcul qu'à 3,03 €.",
  },
  {
    name: "Calculez le coût matière réel, sous-recettes comprises",
    text: "Chaque préparation intermédiaire (pâte, appareil, crème, croustillant) se calcule d'abord seule, avec son propre taux de perte, et entre dans le produit fini à son coût au kilo réellement utilisable. Jamais à la somme de ses ingrédients recopiée.",
  },
  {
    name: "Ajoutez la main-d'œuvre au coût horaire chargé",
    text: "Pas le taux du bulletin de paie : le coût employeur annuel divisé par les heures réellement productives. L'écart entre les deux est de l'ordre du simple au double, et c'est lui qui fait basculer un produit d'une catégorie de marge à l'autre.",
  },
  {
    name: "Ajoutez l'emballage et les consommables",
    text: "Boîte, semelle, caissette, sachet, étiquette, ruban, papier de comptoir. Trois centimes par unité passent inaperçus à la pièce et pèsent 3 % du prix de vente à l'échelle d'une gamme.",
  },
  {
    name: "Répartissez les charges d'atelier à l'heure",
    text: "Additionnez le loyer du laboratoire, l'énergie de production, l'amortissement du matériel, la maintenance et les assurances, puis divisez par le nombre d'heures d'atelier réellement travaillées dans l'année. Vous obtenez le coût d'une heure de laboratoire, à appliquer au temps de chaque production.",
  },
  {
    name: "Ramenez le résultat à l'heure de production",
    text: "La marge par pièce ne dit pas quel produit fait vivre la maison. La contribution rapportée au temps de laboratoire, si. C'est le seul chiffre qui permette de comparer un flan, une pétrissée de baguettes et un entremets.",
  },
];

export const articleMarge: Guide = {
  slug: "calculer-sa-marge-boulangerie-patisserie",
  title: "Comment calculer sa marge en boulangerie-pâtisserie",
  description:
    "Marge brute, marge nette, ratio matière : les trois chiffres à ne pas confondre, avec deux exemples chiffrés de A à Z.",
  keywords: [
    "calculer sa marge boulangerie",
    "calcul marge pâtisserie",
    "marge brute boulangerie pâtisserie",
    "taux de marge boulangerie",
    "coût horaire chargé boulangerie",
    "charges laboratoire pâtisserie",
    "marge nette boulangerie",
    "rentabilité produit pâtisserie",
  ],
  publishedAt: "2026-08-27",
  updatedAt: "2026-08-27",
  ogImage: "/images/feature-prix.png",
  summary:
    "La marge d'un produit ne se lit pas sur une seule ligne. Cinq étages de calcul, appliqués à une part de flan pâtissier : sous-recettes, pertes, main-d'œuvre au coût réel, charges d'atelier, et ce que l'impôt en laisse.",
  intro:
    "Calculer sa marge en boulangerie-pâtisserie, c'est retirer du prix de vente hors taxes tout ce que le produit a coûté : la matière avec ses pertes, la main-d'œuvre au coût chargé réel, l'emballage et une part des charges d'atelier. La plupart des artisans s'arrêtent à la première soustraction, celle du coût matière, et appellent ça la marge. Ce n'est pas faux, c'est incomplet : cette marge-là ne paie ni le tourier, ni le four, ni le loyer, ni le Trésor public. Voici les cinq étages du calcul, chiffrés sur un produit que tout le monde vend.",
  draft: false,
  relatedSlug: "pourcentage-perte-marge-boulangerie",
  relatedLabel: "Le pourcentage de perte, l'erreur qui embellit toutes vos marges",
  howTo: {
    name: "Calculer la marge d'un produit de boulangerie-pâtisserie",
    description:
      "Six étapes : prix de vente hors taxes, coût matière avec sous-recettes et pertes, main-d'œuvre au coût horaire chargé, emballage, charges d'atelier réparties à l'heure, marge ramenée au temps de production.",
    steps: howToSteps,
  },
  blocks: [
    {
      type: "h2",
      id: "cinq-etages",
      text: "« Ma marge » ne veut rien dire tant qu'on n'a pas dit laquelle",
    },
    {
      type: "p",
      text: "Demandez à dix artisans la marge de leur meilleure vente : neuf donneront le prix de vente moins le coût des ingrédients. C'est la marge sur matière. Elle est utile, elle est facile à tenir, et elle est la seule des cinq à ne rien payer du tout.",
    },
    {
      type: "table",
      caption: "Les cinq étages de la marge, et ce que chacun sert à décider",
      headers: ["Étage", "Ce qu'on retire en plus", "À quoi il sert"],
      rows: [
        [
          "Marge sur matière",
          "Coût matière, pertes comprises",
          "Comparer deux recettes, repérer une hausse fournisseur, arbitrer un grammage",
        ],
        [
          "Marge sur coût de production",
          "Main-d'œuvre de fabrication",
          "Savoir ce que la fabrication coûte vraiment en atelier",
        ],
        [
          "Marge sur coût de revient",
          "Emballage, consommables, charges d'atelier",
          "Fixer un prix de vente, décider ce qui reste à la carte et ce qui sort",
        ],
        [
          "Marge nette",
          "Vente, administration, invendus et offerts",
          "Vérifier que le calcul produit par produit colle au résultat comptable",
        ],
        [
          "Ce qui reste après impôt",
          "Impôt sur les bénéfices, fiscalité de la distribution",
          "Savoir ce qui arrive réellement dans la poche, et ce qui reste pour investir",
        ],
      ],
    },
    {
      type: "p",
      text: "Le piège n'est pas de se tromper d'étage, c'est de ne pas savoir sur lequel on se trouve. **Une marge de 85 % et une marge de 9 % peuvent décrire exactement le même produit, vendu au même prix, le même jour.** Vous allez le voir ligne par ligne.",
    },
    {
      type: "h2",
      id: "produit-exemple",
      text: "Le produit qu'on va suivre : une part de flan pâtissier",
    },
    {
      type: "p",
      text: "Un flan Ø 20 cm, coupé en 8 parts, vendues 3,20 € pièce à emporter. C'est un produit choisi exprès : il tourne toute l'année, il se vend en volume, il n'a que deux composants, et pourtant son calcul contient à peu près tous les pièges du métier.",
    },
    {
      type: "p",
      text: "Les prix d'achat retenus ci-dessous sont des prix professionnels constatés à l'été 2026, hors taxes, livrés : farine T55 autour de 0,90 € le kilo, beurre 82 % autour de 8,40 € le kilo, crème 35 % autour de 3,00 € le litre, ovoproduit entier liquide autour de 4,20 € le kilo. Ce sont des ordres de grandeur de marché, pas vos prix : **le seul chiffre juste est celui de votre dernière facture**, et c'est là que se joue la fiabilité de tout ce qui suit.",
    },
    {
      type: "p",
      text: "Première correction, avant même de commencer : **3,20 € n'est pas le prix qui entre dans le calcul.** La vente à emporter relève de la TVA à 5,5 %. Le prix de vente hors taxes est de 3,20 ÷ 1,055 = 3,03 €. Les 17 centimes de différence n'ont jamais été à vous. Comparer un coût hors taxes à un prix TTC gonfle la marge de plus de cinq points, et c'est l'erreur la plus rapide à commettre.",
    },
    {
      type: "h2",
      id: "sous-recettes",
      text: "Étage 1 : le coût matière, et pourquoi il passe par les sous-recettes",
    },
    {
      type: "p",
      text: "Un flan, ce n'est pas une liste de onze ingrédients. C'est une pâte et un appareil, deux préparations qui ont chacune leur rendement, leurs pertes et leur coût au kilo. Les calculer séparément n'est pas une coquetterie de comptable : c'est la seule façon d'obtenir un coût juste, et la seule façon de ne pas refaire le calcul quatorze fois le jour où le beurre augmente.",
    },
    {
      type: "table",
      caption: "Sous-recette 1 · la pâte, au kilo réellement utilisable",
      headers: ["Ingrédient", "Quantité", "Prix d'achat", "Coût"],
      rows: [
        ["Farine T55", "500 g", "0,92 € / kg", "0,46 €"],
        ["Beurre 82 %", "250 g", "8,40 € / kg", "2,10 €"],
        ["Sucre glace", "150 g", "2,00 € / kg", "0,30 €"],
        ["Œufs entiers liquides", "100 g", "4,20 € / kg", "0,42 €"],
        ["Sel fin", "8 g", "0,90 € / kg", "0,01 €"],
        ["Total pétrissée", "1 008 g", "—", "3,29 €"],
        ["Coût au kilo brut", "—", "—", "3,26 €"],
        ["**Après 12 % de chutes au fonçage**", "—", "—", "**3,71 € / kg utilisable**"],
      ],
    },
    {
      type: "p",
      text: "Quarante-cinq centimes d'écart au kilo entre le coût brut et le coût utilisable, uniquement à cause des chutes de fonçage. Un artisan qui valorise sa pâte à 3,26 € le kilo se trompe de 14 % sur le premier composant de son produit, avant même d'avoir touché à l'appareil.",
    },
    {
      type: "table",
      caption: "Sous-recette 2 · l'appareil, au kilo réellement coulé",
      headers: ["Ingrédient", "Quantité", "Prix d'achat", "Coût"],
      rows: [
        ["Lait entier", "1 500 g", "1,00 € / L", "1,50 €"],
        ["Crème 35 %", "500 g", "3,00 € / L", "1,50 €"],
        ["Sucre semoule", "300 g", "1,25 € / kg", "0,38 €"],
        ["Œufs entiers liquides", "250 g", "4,20 € / kg", "1,05 €"],
        ["Poudre à crème", "160 g", "3,40 € / kg", "0,54 €"],
        ["Extrait de vanille", "10 g", "50,00 € / kg", "0,50 €"],
        ["Total appareil", "2 720 g", "—", "5,47 €"],
        ["Coût au kilo brut", "—", "—", "2,01 €"],
        ["**Après 6 % de fond de casserole et de transfert**", "—", "—", "**2,14 € / kg coulé**"],
      ],
    },
    {
      type: "table",
      caption: "Le flan reconstitué à partir de ses deux bases",
      headers: ["Composant", "Quantité", "Coût au kilo réel", "Coût"],
      rows: [
        ["Pâte (sous-recette)", "320 g", "3,71 € / kg", "1,19 €"],
        ["Appareil (sous-recette)", "1 150 g", "2,14 € / kg", "2,46 €"],
        ["Coût matière du flan entier", "—", "—", "3,65 €"],
        ["**Coût matière par part (8 parts)**", "—", "—", "**0,46 €**"],
      ],
    },
    {
      type: "p",
      text: "Marge sur matière : 3,03 − 0,46 = **2,57 € par part, soit 84,8 % du prix de vente hors taxes.** C'est le chiffre que la plupart des tableurs affichent, et c'est celui qui fait dire qu'un flan est une machine à cash. Gardez-le en tête, on va le voir fondre.",
    },
    {
      type: "p",
      text: "Une remarque au passage sur la perte à la cuisson, qui revient toujours dans cette discussion. Le flan perd de l'eau au four, mais il est vendu à la part, pas au poids : cette perte-là ne change pas le coût de la part. Les pertes qui comptent ici sont celles qui font disparaître de la matière payée avant le découpage : les chutes de fonçage et le fond de casserole. La règle générale : **une perte n'affecte le coût que si elle réduit le nombre d'unités vendables ou la quantité de matière qui y entre.**",
    },
    {
      type: "h2",
      id: "taux-de-marge",
      text: "Taux de marge, taux de marque, coefficient : trois chiffres pour la même réalité",
    },
    {
      type: "p",
      text: "Autant régler cette confusion tout de suite, parce qu'elle circule beaucoup et qu'elle fausse les comparaisons entre confrères. Les trois indicateurs décrivent la même marge de 2,57 €, mais rapportée à des bases différentes.",
    },
    {
      type: "table",
      caption: "Les trois façons d'exprimer la même marge sur matière",
      headers: ["Indicateur", "Formule", "Sur la part de flan"],
      rows: [
        ["Marge en euros", "PV HT − coût", "2,57 €"],
        ["**Taux de marque**", "(PV HT − coût) ÷ PV HT", "**84,8 %**"],
        ["Taux de marge", "(PV HT − coût) ÷ coût", "559 %"],
        ["Coefficient multiplicateur", "PV HT ÷ coût", "6,6"],
      ],
    },
    {
      type: "p",
      text: "Dans le commerce alimentaire, la référence utile est le taux de marque, parce qu'il se rapporte au chiffre d'affaires et se compare donc directement à un compte de résultat. Le taux de marge, rapporté au coût, donne des nombres spectaculaires et incomparables. Quand un confrère annonce « 300 % de marge », il parle en taux de marge : cela correspond à 75 % de taux de marque. Et quand un fournisseur vous parle de coefficient, il parle encore d'autre chose.",
    },
    {
      type: "h2",
      id: "main-d-oeuvre",
      text: "Étage 2 : la main-d'œuvre, et le taux horaire que personne n'utilise",
    },
    {
      type: "p",
      text: "C'est ici que le calcul devient sérieux, et c'est ici que la plupart des tableurs s'arrêtent. Un pâtissier payé 2 100 € brut par mois, c'est un taux horaire de 13,85 € sur le bulletin de paie. Ce n'est pas ce que l'heure vous coûte. Ce n'est même pas proche.",
    },
    {
      type: "table",
      caption: "Du salaire brut au coût d'une heure réellement produite",
      headers: ["Ligne", "Valeur"],
      rows: [
        ["Salaire brut annuel (2 100 € × 12)", "25 200 €"],
        ["Charges patronales (28 %)", "7 056 €"],
        ["Coût employeur annuel", "32 256 €"],
        ["Heures payées (35 h × 52 semaines)", "1 820 h"],
        ["− congés payés (5 semaines)", "− 175 h"],
        ["− jours fériés (11 jours)", "− 77 h"],
        ["− absences, formation, visite médicale", "− 40 h"],
        ["Heures de présence", "1 528 h"],
        ["− nettoyage, réception marchandise, rangement (12 %)", "− 183 h"],
        ["Heures réellement productives", "1 345 h"],
        ["Coût horaire apparent (sur heures payées)", "17,72 €"],
        ["**Coût horaire réel (sur heures productives)**", "**23,98 €**"],
      ],
    },
    {
      type: "p",
      text: "13,85 € sur le bulletin, 23,98 € dans la réalité. **Presque le double.** Et ce n'est pas une subtilité comptable : c'est la différence entre un produit qu'on croit rentable et un produit qui l'est vraiment.",
    },
    {
      type: "p",
      text: "Reste à mesurer le temps. Sur une fournée de 6 flans : 15 minutes de pâte, 18 minutes de fonçage, 12 minutes d'appareil, 8 minutes de coulage et d'enfournement, 19 minutes de décerclage, nappage, découpe et mise en vitrine. Soit 72 minutes pour 6 flans, **12 minutes par flan**, cuisson non comprise puisqu'elle ne mobilise personne. À 23,98 € de l'heure : 4,80 € par flan, soit 0,60 € par part.",
    },
    {
      type: "p",
      text: "0,60 € de main-d'œuvre contre 0,46 € de matière. Sur ce produit, comme sur la grande majorité des produits de pâtisserie, **le travail coûte plus cher que les ingrédients.** C'est la raison pour laquelle un calcul arrêté au coût matière ne dit presque rien de la rentabilité. Marge sur coût de production : **1,97 € par part, soit 65,0 %.**",
    },
    {
      type: "h2",
      id: "charges",
      text: "Étage 3 : l'emballage, et combien coûte une heure de laboratoire",
    },
    {
      type: "p",
      text: "L'emballage d'abord, parce qu'il se règle en une ligne : sachet ou boîte à part, semelle, papier de comptoir, soit 0,09 € par part. Un montant qu'on ne pense jamais à compter et qui pèse tout de même 3 % du prix de vente.",
    },
    {
      type: "p",
      text: "Les charges ensuite. C'est la partie que presque personne ne fait, parce qu'elle a mauvaise réputation : on la croit réservée aux comptables et aux grosses structures. Elle tient pourtant en une division, et elle donne l'un des chiffres les plus utiles que puisse avoir un patron de fournil.",
    },
    {
      type: "p",
      text: "Le principe : les charges qui font tourner le laboratoire existent que vous produisiez ou non. Le four consomme, le loyer court, le pétrin s'amortit. Elles ne se rattachent à aucune recette en particulier, mais elles se rattachent parfaitement au **temps**, donc on les ramène à l'heure d'atelier.",
    },
    {
      type: "table",
      caption: "Charges annuelles du laboratoire et coût horaire de structure",
      headers: ["Poste", "Montant annuel"],
      rows: [
        ["Loyer et charges locatives de la partie laboratoire", "11 000 €"],
        ["Énergie de production (four, froid, pétrin, eau chaude)", "12 000 €"],
        ["Amortissement et maintenance du matériel", "9 800 €"],
        ["Assurances et contrôles réglementaires", "2 400 €"],
        ["Petit matériel, nettoyage, blanchisserie", "3 300 €"],
        ["Total des charges d'atelier", "38 500 €"],
        ["Heures d'atelier productives dans l'année (2 postes)", "2 700 h"],
        ["**Coût horaire de structure**", "**14,26 €**"],
      ],
    },
    {
      type: "p",
      text: "Additionné au coût horaire de main-d'œuvre, cela donne le chiffre à retenir : **une heure de laboratoire coûte 38,24 €** avant d'avoir vendu quoi que ce soit. Douze minutes de flan, c'est donc 0,36 € de charges d'atelier par part. Coût de revient complet : 1,51 €. Marge sur coût de revient : **1,52 € par part, soit 50,2 %.**",
    },
    {
      type: "p",
      text: "Une limite honnête de cette méthode, qu'il faut connaître : elle répartit les charges au temps de main-d'œuvre, alors que certaines ressources se consomment sans personne devant. Le flan occupe le four 45 minutes pendant lesquelles le tourier travaille sur autre chose. Tant que le four n'est pas saturé, ce n'est pas un problème. Le jour où il l'est (un 24 décembre, une veille de fête des Mères) la ressource rare n'est plus l'heure de main-d'œuvre mais l'heure de four, et la répartition doit suivre.",
    },
    {
      type: "h2",
      id: "recapitulatif",
      text: "Étage 4 : la marge nette, et la cascade complète",
    },
    {
      type: "p",
      text: "Restent les charges qui ne se rattachent pas au laboratoire : le personnel de vente, le loyer de la boutique, l'administratif, la comptabilité, les frais bancaires, les assurances générales. Les répartir produit par produit n'aurait pas de sens, elles ne dépendent pas de la recette. La méthode admise consiste à les exprimer en pourcentage du chiffre d'affaires hors taxes (dans une boulangerie-pâtisserie artisanale, l'ordre de grandeur tourne autour de 30 %) et à vérifier que chaque produit dégage assez pour les couvrir.",
    },
    {
      type: "p",
      text: "Dernière ligne, la plus désagréable : les invendus et les offerts. Ce n'est pas une perte technique, c'est une perte commerciale, et elle se traite à part, mais elle se traite. Six pour cent de la production qui ne trouve pas preneur, ce sont six pour cent de recette en moins sur tout ce qui a été fabriqué.",
    },
    {
      type: "table",
      caption: "La cascade complète, sur une part de flan vendue 3,20 € TTC",
      headers: ["Ligne", "Montant", "% du prix de vente HT"],
      rows: [
        ["Prix de vente TTC", "3,20 €", "—"],
        ["Prix de vente HT (TVA 5,5 %)", "3,03 €", "100 %"],
        ["− Coût matière, pertes comprises", "0,46 €", "15,2 %"],
        ["**= Marge sur matière**", "**2,57 €**", "**84,8 %**"],
        ["− Main-d'œuvre de production (12 min à 23,98 € / h)", "0,60 €", "19,8 %"],
        ["**= Marge sur coût de production**", "**1,97 €**", "**65,0 %**"],
        ["− Emballage et consommables", "0,09 €", "3,0 %"],
        ["− Charges d'atelier (12 min à 14,26 € / h)", "0,36 €", "11,9 %"],
        ["**= Marge sur coût de revient**", "**1,52 €**", "**50,2 %**"],
        ["− Quote-part vente, structure et administration", "0,91 €", "30,0 %"],
        ["− Invendus et offerts (6 % de la production)", "0,18 €", "6,0 %"],
        ["**= Marge nette avant impôt**", "**0,43 €**", "**14,2 %**"],
      ],
    },
    {
      type: "p",
      text: "**84,8 % au premier étage, 14,2 % au quatrième.** Le produit n'a pas changé, le prix non plus. Seule la question posée a changé, et c'est précisément pour cela qu'il faut savoir de quelle marge on parle avant de décider quoi que ce soit.",
    },
    {
      type: "p",
      text: "Notez que 14,2 % de marge nette sur un produit, c'est bon, très au-dessus de ce que dégage une boulangerie-pâtisserie dans son ensemble. Le flan est un produit qui tire la maison vers le haut. La moyenne est ramenée plus bas par le pain, vendu à un prix que le marché fixe, par le snacking, dont le ratio matière est le plus mauvais de la boutique, et par les références à faible rotation qui immobilisent du temps pour peu de volume. C'est exactement l'information qu'on cherche : non pas un chiffre global, mais **quels produits portent les autres.**",
    },
    {
      type: "h2",
      id: "impots",
      text: "Étage 5 : et l'impôt passe en dernier",
    },
    {
      type: "p",
      text: "Beaucoup d'artisans s'arrêtent à la marge nette et considèrent que l'affaire est faite. Elle ne l'est pas : sur ces 0,43 €, une partie est déjà promise. L'impôt sur les bénéfices se sert avant vous, et la fiscalité de la distribution se sert encore après lui.",
    },
    {
      type: "table",
      caption: "Ce que l'impôt laisse sur la part de flan (société soumise à l'IS)",
      headers: ["Ligne", "Montant", "% du prix de vente HT"],
      rows: [
        ["Marge nette avant impôt", "0,43 €", "14,2 %"],
        ["− Impôt sur les sociétés (taux réduit 15 % jusqu'à 42 500 € de bénéfice)", "0,06 €", "2,0 %"],
        ["**= Résultat après impôt**", "**0,37 €**", "**12,2 %**"],
        ["− Prélèvement forfaitaire unique sur les dividendes (30 %)", "0,11 €", "3,6 %"],
        ["**= Ce qui arrive réellement dans la poche**", "**0,26 €**", "**8,6 %**"],
      ],
    },
    {
      type: "p",
      text: "Vous avez encaissé 3,20 €. **Il vous en reste 26 centimes.** Huit pour cent du ticket, sur un produit qui affichait 85 % de marge trois tableaux plus haut, et qui fait partie des meilleurs de la vitrine.",
    },
    {
      type: "p",
      text: "Et cette version est optimiste, pour trois raisons. Le taux réduit d'impôt sur les sociétés ne vaut que jusqu'à 42 500 € de bénéfice : au-delà, c'est 25 %, et les 0,26 € tombent à 0,23 €. En entreprise individuelle, la logique change mais l'ordre de grandeur reste le même : cotisations sociales de travailleur non salarié d'environ 45 % du résultat, puis impôt sur le revenu au barème. Enfin, la cotisation foncière des entreprises, la taxe d'apprentissage et la contribution à la formation professionnelle ne sont pas dans ce tableau : elles sont plus haut, dans les charges de structure, et elles y sont rarement complètes.",
    },
    {
      type: "p",
      text: "Ce n'est pas un article contre l'impôt, c'est un article sur les ordres de grandeur. La conclusion pratique tient en une phrase : **avec 8 % qui arrivent au bout de la chaîne, une erreur de 5 centimes sur le coût d'une part ne coûte pas 5 centimes de marge, elle en coûte près d'un cinquième.** Et il faut encore financer le prochain four sur ce qui reste.",
    },
    {
      type: "h2",
      id: "marge-par-heure",
      text: "L'indicateur que presque personne ne calcule : la marge par heure",
    },
    {
      type: "p",
      text: "Une marge par pièce ne se compare pas d'un produit à l'autre. 2,48 € sur une part de flan et 14,45 € sur un entremets entier : lequel fait vivre la maison ? La question n'a pas de réponse tant qu'on n'a pas divisé par le temps que chacun consomme.",
    },
    {
      type: "p",
      text: "L'indicateur qui tranche est la contribution horaire : ce que rapporte le produit après matière et emballage, rapporté au temps de laboratoire qu'il mobilise. Sur les trois familles de la maison, cela donne ceci.",
    },
    {
      type: "table",
      caption: "Ce que rapporte une heure de laboratoire, par famille de produits",
      headers: ["Production", "Contribution", "Temps de labo", "Contribution par heure"],
      rows: [
        ["1 flan de 8 parts", "19,84 €", "12 min", "**99 €**"],
        ["1 pétrissée de 44 baguettes", "43,30 €", "55 min", "**47 €**"],
        ["1 entremets 6 parts (série de 8)", "14,45 €", "41 min", "**21 €**"],
      ],
    },
    {
      type: "p",
      text: "Le résultat surprend rarement les chefs quand on le leur montre, mais il est presque toujours contre-intuitif à froid : **l'entremets, le produit dont on est le plus fier et celui qui affiche la plus grosse marge en euros, est le moins rentable à l'heure.** Cela ne veut pas dire qu'il faut le retirer : il fait la réputation de la vitrine et il amène les clients qui achètent le reste. Cela veut dire qu'il ne faut pas construire sa gamme dessus, et qu'une heure d'entremets à 21 € ne remplace pas une heure de flan à 99 €.",
    },
    {
      type: "p",
      text: "Cet indicateur change aussi la façon de traiter les périodes de pointe. En décembre, le laboratoire ne manque pas de commandes, il manque d'heures. Chaque heure de labo devient une ressource qu'on arbitre, et les produits se classent par ce qu'ils en tirent. C'est la seule méthode qui permette de décider rationnellement quelles bûches produire et lesquelles décliner.",
    },
    {
      type: "h2",
      id: "grosses-productions",
      text: "Sur les grosses productions, le calcul se complique encore",
    },
    {
      type: "p",
      text: "Tout ce qui précède suppose une chose simple : un prix d'achat par matière première. Dès que les volumes montent, cette hypothèse tombe, et trois difficultés apparaissent qu'aucune fiche technique figée ne sait traiter.",
    },
    {
      type: "p",
      text: "**Le même produit a deux prix en même temps.** Il vous reste 180 kg de farine achetée 0,89 € le kilo, le camion en livre 500 kg à 0,96 €. Quel prix retenir pour la production de lundi ? Ni l'un ni l'autre : le coût moyen pondéré, soit (180 × 0,89 + 500 × 0,96) ÷ 680 = **0,94 € le kilo**. Prendre l'ancien prix embellit la marge ; prendre le nouveau la noircit. Et le calcul est à refaire à chaque livraison, pour chaque matière première.",
    },
    {
      type: "p",
      text: "**La consommation théorique n'est pas la consommation réelle.** À la fin du mois, deux chiffres existent. Le théorique : la somme de ce que les recettes produites auraient dû consommer. Le réel : stock de début, plus achats, moins stock de fin. Sur un mois, un atelier trouve 612 kg de beurre en théorique et 658 kg en réel : 46 kg d'écart, 7,5 %, **386 € qui ont disparu** entre le grammage annoncé et le grammage pratiqué, la casse, les essais et les retours. Cet écart est la seule mesure fiable de la fidélité entre les fiches et l'atelier, et il ne s'obtient qu'en tenant un inventaire.",
    },
    {
      type: "p",
      text: "**En pic de production, le coût de l'heure change.** Les heures supplémentaires sont majorées de 25 %, l'intérim coûte davantage qu'un salarié, la casse augmente avec la cadence, le four tourne à saturation. Une bûche calculée au coût horaire annuel de 23,98 € est sous-évaluée : sur la part de production réalisée en heures majorées, l'heure est à 30 €. Un produit strictement saisonnier doit être calculé au coût de sa saison, pas au coût moyen de l'année.",
    },
    {
      type: "h2",
      id: "recapitulatif-methode",
      text: "La méthode, en six étapes, à appliquer à n'importe quel produit",
    },
    {
      type: "howto-steps",
      id: "methode",
      name: "Calculer la marge d'un produit de boulangerie-pâtisserie",
      steps: howToSteps,
    },
    {
      type: "h2",
      id: "pourquoi-ca-ne-tient-pas",
      text: "Pourquoi ce calcul, une fois fait, ne tient pas six mois",
    },
    {
      type: "p",
      text: "Le calcul ci-dessus prend une bonne heure sur un produit à deux composants. Il est juste le jour où on le fait. Le problème n'est pas le calcul : c'est sa durée de vie.",
    },
    {
      type: "p",
      text: "Regardez la mécanique. Le prix du beurre bouge sur une facture. Il touche la pâte du flan, la pâte feuilletée, la crème au beurre, la brioche, les croissants, le sablé breton. Chacune de ces bases entre dans plusieurs produits finis. Un atelier avec 120 matières premières, 35 sous-recettes et 180 fiches produit fonctionne comme un réseau : **une seule ligne de facture peut modifier la marge de soixante produits**, et rien ne le signale.",
    },
    {
      type: "p",
      text: "Ajoutez le volume d'entrée. Quatre fournisseurs, trois livraisons par semaine, vingt-cinq lignes par bon : trois cents prix d'achat à vérifier chaque semaine. Personne ne les ressaisit. Alors on met à jour la farine parce qu'on a vu passer la hausse, on oublie les treize autres, et six mois plus tard le tableur décrit un atelier qui n'existe plus. Ce n'est pas de la négligence : c'est arithmétiquement intenable à la main.",
    },
    {
      type: "p",
      text: "C'est ce qui explique une scène qu'on voit dans presque tous les ateliers : le fichier de coûts de revient est excellent, très bien construit, souvent par quelqu'un de rigoureux, et il date de deux ans. Il n'a pas été abandonné parce qu'il était mauvais. Il a été abandonné parce que le tenir à jour était devenu un deuxième métier.",
    },
    {
      type: "h2",
      id: "gramme",
      text: "Ce que ça donne quand la chaîne est automatisée",
    },
    {
      type: "p",
      text: "C'est exactement le problème que Gramme prend en charge. Vous photographiez la facture fournisseur ; les prix d'achat se mettent à jour ; les sous-recettes qui contiennent ces matières se recalculent ; les produits finis qui contiennent ces sous-recettes se recalculent à leur tour, y compris ceux auxquels vous n'auriez pas pensé ; et les fiches dont la marge s'est dégradée remontent. Le geste quotidien tient en une photo.",
    },
    {
      type: "p",
      text: "Le reste suit la même logique. Les taux de perte sont portés par la fiche et s'appliquent à tous les redimensionnements. Le temps de production et le taux horaire entrent dans le coût de revient, au même titre que les charges fixes de l'atelier : la marge affichée est celle qui reste une fois le tourier et le loyer payés, pas celle qui fait plaisir. Prix de vente hors taxes, ratio matière, marge et coefficient se lisent sur la même page que la recette, au moment où l'on décide de changer un grammage ou un prix.",
    },
    {
      type: "p",
      text: "L'objectif n'est pas de vous apprendre à calculer une marge, vous savez le faire, cet article vient de le montrer. Il est de faire en sorte que le calcul soit encore juste dans six mois, sur deux cents références, sans y passer vos dimanches.",
    },
  ],
  faqs: [
    {
      q: "Quelle marge faut-il viser en boulangerie-pâtisserie ?",
      a: "Il n'y a pas de chiffre unique, parce que la réponse dépend de l'étage de marge dont on parle. En ordre de grandeur : un taux de marque sur matière de 70 à 85 % sur la pâtisserie et la viennoiserie, de 75 à 85 % sur le pain, nettement moins sur le snacking. Après main-d'œuvre, emballage et charges d'atelier, un bon produit se situe entre 40 et 55 %. Et au niveau de l'entreprise, une boulangerie-pâtisserie artisanale bien tenue dégage un résultat net de 5 à 9 % du chiffre d'affaires. Ces repères servent à situer une gamme, pas à fixer un objectif.",
    },
    {
      q: "Quelle différence entre taux de marge et taux de marque ?",
      a: "Le taux de marque rapporte la marge au prix de vente hors taxes : (PV HT − coût) ÷ PV HT. Le taux de marge la rapporte au coût : (PV HT − coût) ÷ coût. Le même produit peut afficher 84,8 % de taux de marque et 559 % de taux de marge. Dans l'alimentaire, on raisonne en taux de marque, parce qu'il se compare directement à un compte de résultat exprimé en pourcentage du chiffre d'affaires.",
    },
    {
      q: "Faut-il inclure la main-d'œuvre dans le calcul de la marge d'un produit ?",
      a: "Oui dès qu'il s'agit de décider si un produit reste à la carte. En pâtisserie, la main-d'œuvre dépasse souvent le coût matière : sur la part de flan de cet article, 0,60 € contre 0,46 €. Une gamme arbitrée sur le seul coût matière conserve mécaniquement les produits les plus longs à fabriquer. En revanche, pour surveiller au quotidien l'effet d'une hausse fournisseur, la marge sur matière suffit et se tient plus facilement à jour.",
    },
    {
      q: "Comment répartir les charges fixes sur les produits ?",
      a: "En deux temps. Les charges du laboratoire (loyer de la partie production, énergie, amortissement du matériel, maintenance, assurances) se divisent par le nombre d'heures d'atelier réellement travaillées dans l'année : vous obtenez un coût horaire de structure à appliquer au temps de chaque production. Les charges de vente et d'administration, elles, ne dépendent pas de la recette : on les exprime en pourcentage du chiffre d'affaires hors taxes et on vérifie que chaque produit dégage assez pour les couvrir.",
    },
    {
      q: "Comment l'impôt entre-t-il dans le calcul de la marge ?",
      a: "Il n'entre pas dans le coût de revient : il se prélève sur le bénéfice, donc après la marge nette. Pour une société à l'impôt sur les sociétés, c'est 15 % jusqu'à 42 500 € de bénéfice puis 25 %, et 30 % de plus sur la part distribuée en dividendes. Sur la part de flan de cet article, les 0,43 € de marge nette deviennent 0,26 € dans la poche : 8,6 % du prix de vente hors taxes. En entreprise individuelle, la logique diffère (cotisations sociales d'environ 45 % du résultat puis impôt sur le revenu) mais l'ordre de grandeur est comparable.",
    },
    {
      q: "Pourquoi ma marge théorique ne correspond-elle pas à mon résultat comptable ?",
      a: "Parce que les deux ne mesurent pas la même chose. La marge théorique porte sur ce qui a été vendu selon les fiches ; le résultat comptable porte sur tout ce qui a été acheté, y compris ce qui a été jeté, offert, cassé ou consommé en essais. Les causes habituelles de l'écart, dans l'ordre de fréquence : des taux de perte absents des fiches, des prix d'achat périmés, des grammages réels supérieurs aux fiches, et les invendus. Un écart de 3 à 5 points est normal ; au-delà de 8, il y a un poste à identifier.",
    },
    {
      q: "À quelle fréquence faut-il recalculer ses marges ?",
      a: "Le calcul ne se refait pas : ce sont les prix d'achat qui bougent. La bonne fréquence est donc celle de vos livraisons, pas celle du calendrier. Chaque facture qui modifie un prix devrait mettre à jour toutes les recettes concernées, sous-recettes comprises. À la main, c'est tenable sur une vingtaine de références ; au-delà, il faut que la mise à jour se propage toute seule.",
    },
    {
      q: "Peut-on calculer sa marge sur Excel ?",
      a: "Oui, et pour vingt recettes sans sous-recettes c'est même la bonne solution. Le tableur atteint ses limites sur trois points précis : les sous-recettes en cascade, où une base entre dans plusieurs produits et doit se propager ; la mise à jour des prix d'achat, qui représente plusieurs centaines de lignes par semaine ; et le suivi de l'écart entre consommation théorique et consommation réelle, qui suppose un inventaire. Ce n'est pas la capacité de calcul qui manque, c'est la capacité à rester à jour.",
    },
  ],
};
