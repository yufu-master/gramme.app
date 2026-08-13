import type { Guide } from "./types";

export const guideCoefficientCoutMatiere: Guide = {
  slug: "coefficient-cout-matiere-boulangerie",
  title: "Quel pourcentage de coût matière viser en boulangerie",
  description:
    "Le coût matière en pourcentage du chiffre d'affaires en boulangerie et pâtisserie : ordres de grandeur par famille de produits, coefficient multiplicateur et méthode pour situer sa propre gamme.",
  keywords: [
    "coût matière boulangerie pourcentage",
    "ratio coût matière boulangerie",
    "coefficient multiplicateur boulangerie",
    "pourcentage matière première pâtisserie",
    "ratio matière première boulangerie",
  ],
  publishedAt: "2026-08-13",
  updatedAt: "2026-08-13",
  ogImage: "/images/feature-prix.png",
  summary:
    "Comment situer son ratio de coût matière en boulangerie-pâtisserie, par famille de produits, et pourquoi un ratio global ne dit presque rien sans le détail par gamme.",
  intro:
    "« On doit être autour de 25 % de matière. » C'est la réponse la plus fréquente quand on demande à un artisan son ratio de coût matière, et c'est presque toujours une moyenne héritée d'une formation, pas une mesure. Voici ce que ce pourcentage veut dire, comment il se calcule, et pourquoi le regarder globalement masque l'essentiel.",
  draft: false,
  relatedSlug: "calcul-cout-de-revient-boulangerie",
  relatedLabel: "Calculer le coût de revient d'un produit de boulangerie",
  blocks: [
    {
      type: "h2",
      id: "definition",
      text: "Ce que mesure le ratio de coût matière",
    },
    {
      type: "p",
      text: "Le ratio de coût matière est la part des matières premières dans le chiffre d'affaires hors taxes. Il se calcule soit globalement, sur un exercice — achats consommés divisés par le chiffre d'affaires HT — soit produit par produit, en rapportant le coût matière unitaire au prix de vente HT. Les deux chiffres ne se ressemblent pas, et c'est normal : le premier inclut ce que vous avez jeté, le second non.",
    },
    {
      type: "p",
      text: "Cet écart est d'ailleurs l'information la plus utile du calcul. Si votre ratio théorique, recette par recette, est à 26 % et que votre ratio comptable de fin d'exercice est à 33 %, les sept points de différence ne sont pas une erreur de calcul : ce sont des invendus, des pertes non comptées, du vol, ou des recettes qui ne sont pas produites comme elles sont écrites.",
    },
    {
      type: "h2",
      id: "ordres-de-grandeur",
      text: "Des ordres de grandeur par famille",
    },
    {
      type: "p",
      text: "Un ratio unique pour toute une boulangerie n'a pas de sens : les familles de produits n'ont ni la même structure de coût ni le même rôle commercial. Le tableau ci-dessous donne des fourchettes usuelles observées en boulangerie-pâtisserie artisanale française. Ce sont des repères pour situer votre gamme, pas des normes.",
    },
    {
      type: "table",
      caption: "Fourchettes usuelles de coût matière rapporté au prix de vente HT",
      headers: ["Famille", "Coût matière", "Coefficient multiplicateur", "Ce qui fait varier"],
      rows: [
        ["Pain courant et tradition", "15 – 25 %", "4 à 6,5", "Prix de la farine, taux de perte, prix de vente local"],
        ["Viennoiserie pur beurre", "25 – 35 %", "3 à 4", "Cours du beurre, tourage maison ou surgelé"],
        ["Pâtisserie individuelle", "20 – 30 %", "3,5 à 5", "Fruits, chocolat de couverture, parage"],
        ["Entremets et pièces de fête", "25 – 35 %", "3 à 4", "Couverture, fruits hors saison, décor"],
        ["Snacking et sandwicherie", "30 – 40 %", "2,5 à 3,5", "Charcuterie, crudités, invendus du jour"],
        ["Chocolat et confiserie", "30 – 40 %", "2,5 à 3,5", "Cours du cacao, emballage"],
      ],
    },
    {
      type: "p",
      text: "Le coefficient multiplicateur est simplement l'inverse du ratio : un coût matière de 25 % correspond à un coefficient de 4. Beaucoup d'artisans raisonnent en coefficient parce qu'il se manipule mentalement — « je multiplie par 4 » — mais il a un défaut : appliqué mécaniquement, il transforme chaque hausse de matière première en hausse de prix de vente, y compris quand le marché ne le supporte pas.",
    },
    {
      type: "h2",
      id: "snacking",
      text: "Pourquoi le snacking casse la moyenne",
    },
    {
      type: "p",
      text: "Le snacking affiche le plus mauvais ratio matière de la boutique, souvent au-delà de 35 %. C'est une raison fréquente de vouloir l'abandonner, et c'est généralement une mauvaise décision. Un sandwich à 5,50 € avec 35 % de matière dégage 3,25 € de marge brute ; une baguette à 1,30 € avec 20 % de matière en dégage 0,99 €. Le ratio est mauvais, la contribution en euros est trois fois supérieure.",
    },
    {
      type: "p",
      text: "C'est la limite du raisonnement en pourcentage seul. Le ratio sert à comparer des produits comparables et à détecter les dérives ; la marge en euros multipliée par le volume sert à décider ce qui reste dans la gamme. Il faut les deux, et c'est précisément pour cela qu'un ratio global unique ne permet aucune décision.",
    },
    {
      type: "h2",
      id: "situer",
      text: "Comment situer sa propre gamme, concrètement",
    },
    {
      type: "p",
      text: "Commencez par vos dix produits les plus vendus, pas par les deux cents références du catalogue. Pour chacun, calculez le coût matière réel à partir de vos dernières factures, appliquez vos pertes, rapportez-le au prix de vente hors taxes. Vous obtiendrez en une demi-journée une image beaucoup plus utile que n'importe quelle moyenne de la profession.",
    },
    {
      type: "p",
      text: "Ce que vous cherchez n'est pas un produit hors norme, c'est un écart qui bouge. Une viennoiserie stable à 32 % depuis deux ans n'est pas un problème. La même viennoiserie passée de 27 % à 32 % en six mois, parce que le beurre a monté sans que le prix de vente suive, en est un — et c'est le genre de dérive qui ne se voit jamais dans un ratio global de fin d'exercice.",
    },
    {
      type: "p",
      text: "C'est le suivi de cet écart que Gramme automatise : chaque facture fournisseur scannée met à jour les prix d'achat, les coûts et les ratios des recettes concernées se recalculent, et les fiches dont la marge se dégrade sont signalées avant la fin du mois plutôt qu'au bilan.",
    },
  ],
  faqs: [
    {
      q: "Quel pourcentage de coût matière est normal en boulangerie ?",
      a: "Il n'existe pas de norme unique. En pain courant, on observe couramment 15 à 25 % du prix de vente hors taxes ; en viennoiserie pur beurre 25 à 35 % ; en snacking 30 à 40 %. Un ratio global de boulangerie ne veut presque rien dire sans le détail par famille de produits.",
    },
    {
      q: "Comment calculer son ratio de coût matière global ?",
      a: "Achats de matières premières consommés sur la période, divisés par le chiffre d'affaires hors taxes de la même période. Attention aux variations de stock : il faut retirer le stock final et ajouter le stock initial pour obtenir les achats réellement consommés.",
    },
    {
      q: "Pourquoi mon ratio théorique est-il meilleur que mon ratio comptable ?",
      a: "Parce que le ratio théorique est calculé sur ce que vous vendez, et le ratio comptable sur ce que vous achetez. L'écart correspond aux invendus, aux pertes non comptabilisées, aux écarts entre la recette écrite et la recette réellement produite, et parfois à des erreurs de stock. C'est cet écart qu'il faut analyser, plus que le ratio lui-même.",
    },
    {
      q: "Quel coefficient multiplicateur appliquer en pâtisserie ?",
      a: "Un coefficient de 3 à 5 est courant selon la famille, mais l'appliquer mécaniquement est risqué : il suppose que le marché accepte toute hausse répercutée. Mieux vaut partir du prix que la clientèle accepte et vérifier que la marge brute résultante est tenable, plutôt que l'inverse.",
    },
  ],
};
