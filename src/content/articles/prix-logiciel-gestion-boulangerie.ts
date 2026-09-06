import type { Guide } from "@/content/guides/types";

export const articlePrix: Guide = {
  slug: "prix-logiciel-gestion-boulangerie",
  // Pas « Prix d'un logiciel de gestion boulangerie » : c'est le titre de
  // /tarifs, et deux pages au même titre se disputent la même requête. La
  // question, elle, est celle que tape quelqu'un qui compare avant d'acheter.
  title: "Combien coûte un logiciel de gestion boulangerie ?",
  description:
    "Les tarifs publics du marché, et les quatre lignes qui déplacent vraiment l'addition : documents inclus, modules, utilisateurs, installation.",
  keywords: [
    "prix logiciel gestion boulangerie",
    "tarif logiciel pâtisserie",
    "combien coûte logiciel boulangerie",
    "abonnement logiciel boulangerie",
    "coût logiciel gestion artisan",
  ],
  publishedAt: "2026-08-26",
  updatedAt: "2026-08-26",
  ogImage: "/images/app/accueil-tableau-bord.png",
  summary:
    "Entre 33 € et plus de 240 € HT par mois selon les éditeurs, mais le prix affiché est rarement le prix payé. Les quatre variables qui décident de la facture réelle.",
  intro:
    "La question arrive toujours en premier, et la réponse honnête tient en une phrase : le prix affiché sur une page de tarifs ne dit presque rien de ce que vous paierez. Non pas parce que les éditeurs cacheraient quelque chose, mais parce que la variable de facturation est rarement le nombre d'utilisateurs. Voici les tarifs publics du marché, relevés en août 2026, et les quatre lignes qui déplacent réellement l'addition.",
  blocks: [
    {
      type: "h2",
      id: "les-tarifs",
      text: "Ce qu'affichent les éditeurs",
    },
    {
      type: "p",
      text: "Relevé sur les pages publiques des éditeurs le 30 août 2026. Ces montants changent : vérifiez-les avant de décider.",
    },
    {
      type: "table",
      caption: "Tarifs publics des principaux logiciels de gestion pour boulangerie et pâtisserie, août 2026",
      headers: ["Éditeur", "Tarif d'entrée", "Haut de gamme", "Variable de facturation"],
      rows: [
        [
          "Gramme",
          "49 € HT/mois (490 €/an)",
          "89 € HT/mois (890 €/an)",
          "Utilisateurs, fiches et factures scannées",
        ],
        [
          "Otami",
          "59 € HT/mois (5 documents/mois)",
          "159 € HT/mois + options à 49 €",
          "Nombre de documents importés par mois",
        ],
        [
          "ChefsTouch",
          "Gratuit jusqu'à 100 fiches, puis 1,99 €/mois",
          "39,90 € HT/mois par administrateur et par site",
          "Fonctions, puis administrateurs × sites",
        ],
        [
          "Melba",
          "49 € HT/mois par module",
          "Cinq modules à additionner",
          "Nombre de modules activés",
        ],
      ],
    },
    {
      type: "p",
      text: "Premier constat : **l'écart entre le tarif d'entrée le plus bas et une couverture complète chez le plus cher dépasse un facteur cent.** Second constat, plus utile : ces éditeurs ne facturent pas la même chose. Comparer les prix d'entrée revient donc à comparer des choses différentes.",
    },
    {
      type: "h2",
      id: "documents",
      text: "Ligne n° 1 · le nombre de documents traités",
    },
    {
      type: "p",
      text: "C'est la variable la plus souvent sous-estimée, et la plus coûteuse. Plusieurs éditeurs facturent au volume de factures fournisseurs lues automatiquement chaque mois.",
    },
    {
      type: "p",
      text: "Or une boulangerie de quartier reçoit couramment **vingt à quarante factures par mois** : farine, beurre, œufs, chocolat, fruits, emballages, produits d'entretien, boissons, sans compter les livraisons fractionnées d'un même fournisseur. Une offre à cinq documents par mois ne couvre donc pas un atelier réel : elle couvre un atelier qui n'utiliserait la lecture automatique que pour ses trois plus gros fournisseurs.",
    },
    {
      type: "p",
      text: "**Comptez vos factures d'un mois réel avant de choisir une offre.** Prenez le mois de décembre plutôt que celui d'août : c'est le pic qui décide, pas la moyenne. Chez Gramme, le volume inclus est de 30 factures par mois en Starter et 150 en Pro, ce qui couvre la quasi-totalité des ateliers artisanaux sans changer d'offre.",
    },
    {
      type: "h2",
      id: "modules",
      text: "Ligne n° 2 · les modules en option",
    },
    {
      type: "p",
      text: "Le planning de production est l'exemple type. Il figure dans la présentation de presque tous les éditeurs, mais pas toujours dans le prix affiché : chez l'un il est proposé en option à 49 € HT par mois, chez un autre il n'arrive qu'à une offre facturée par administrateur et par site, chez un troisième il constitue un module à part entière de la logique modulaire.",
    },
    {
      type: "p",
      text: "Le réflexe utile : **faire la liste des trois ou quatre fonctions dont vous êtes certain d'avoir besoin, puis reconstituer le prix pour chaque éditeur.** Le classement change presque toujours entre le tarif d'entrée et le tarif réellement applicable à votre besoin.",
    },
    {
      type: "h2",
      id: "sites",
      text: "Ligne n° 3 · la facturation par site ou par administrateur",
    },
    {
      type: "p",
      text: "Un tarif à 19,90 € par administrateur et par site paraît très bas. Avec deux laboratoires et deux responsables par site, il devient 79,60 € par mois, et il grandit avec l'équipe, ce que ne fait pas un abonnement forfaitaire.",
    },
    {
      type: "p",
      text: "Ce mode de facturation n'est pas déloyal : il est simplement adapté aux structures qui grandissent par duplication de sites, et défavorable à un atelier unique avec plusieurs personnes. Vérifiez lequel des deux vous êtes.",
    },
    {
      type: "h2",
      id: "reprise",
      text: "Ligne n° 4 · la reprise de vos données, la seule qui ne se voit pas",
    },
    {
      type: "p",
      text: "C'est la ligne dont on parle le moins, et celle qui décide si l'outil sera utilisé. Deux modèles coexistent.",
    },
    {
      type: "p",
      text: "**Le modèle autonome** : essai gratuit, vous saisissez vos données vous-même. Coût affiché nul. Coût réel : plusieurs dizaines d'heures de votre temps, ou (beaucoup plus souvent) un compte rempli à moitié qui n'est jamais rattrapé, et un abonnement résilié au bout de trois mois. Le vrai coût, dans ce cas, est celui de l'échec.",
    },
    {
      type: "p",
      text: "**Le modèle accompagné** : l'éditeur monte votre compte. Coût affiché non nul, plusieurs centaines d'euros une seule fois. Coût réel : cette somme, et un outil utilisable au premier jour. Chez Gramme, l'installation accompagnée démarre à 300 € HT et couvre plusieurs jours de travail : profils et droits de l'équipe, carnet de fournisseurs, mercuriale complète avec unités, conditionnements et prix d'achat réels, reprise des fiches et des sous-recettes, traitement des factures des derniers mois, contrôles et formation. Pour une entreprise en cours de création, c'est un forfait ferme de 300 € HT : il n'y a rien à reprendre, la charge est connue d'avance.",
    },
    {
      type: "h2",
      id: "combien-ca-rapporte",
      text: "L'autre moitié de la question",
    },
    {
      type: "p",
      text: "Un abonnement à 89 € HT par mois représente environ 1 070 € par an. Rapporté à un atelier qui fait 300 000 € de chiffre d'affaires, c'est 0,36 % : soit à peu près ce que coûte une hausse du beurre de quelques centimes non répercutée pendant un trimestre.",
    },
    {
      type: "p",
      text: "La question utile n'est donc pas « combien ça coûte » mais **« à partir de quel gain c'est remboursé »**. Un point de ratio matière récupéré sur 300 000 € de chiffre d'affaires, c'est 3 000 €. Une hausse de prix fournisseur repérée le jour même plutôt qu'au bilan, c'est souvent davantage. Le calcul se fait vite, et il se fait sur vos chiffres : pas sur une moyenne du secteur.",
    },
    {
      type: "p",
      text: "C'est aussi pour cela qu'une démonstration sur vos propres fiches vaut mieux qu'une comparaison de grilles tarifaires : elle vous donne le seul chiffre qui compte, celui de votre atelier.",
    },
  ],
  faqs: [
    {
      q: "Un logiciel gratuit peut-il suffire ?",
      a: "Pour créer et stocker des fiches techniques, oui, certaines offres gratuites le permettent honorablement. Ce qui n'est jamais gratuit, c'est la remontée automatique des prix depuis vos factures : c'est la fonction qui demande le plus de traitement, et c'est aussi celle qui fait la différence entre un répertoire de recettes et un outil de pilotage.",
    },
    {
      q: "Mensuel ou annuel ?",
      a: "L'annuel coûte généralement deux mois de moins, mais engage. La règle simple : prenez du mensuel si vous n'avez pas encore vu l'outil tourner sur vos données ; passez à l'annuel une fois le compte monté et l'usage installé. Vérifiez au passage s'il existe une garantie de remboursement sur l'annuel : chez Gramme, elle est de trente jours.",
    },
    {
      q: "La TVA est-elle récupérable sur un abonnement logiciel ?",
      a: "Oui, dans les conditions générales de récupération applicables à votre activité. C'est pourquoi les tarifs du secteur s'annoncent hors taxes : le montant qui pèse réellement sur votre exploitation est le montant HT. Voyez votre expert-comptable pour votre situation précise.",
    },
    {
      q: "Y a-t-il des frais pour récupérer ses données si on part ?",
      a: "Il ne devrait pas y en avoir, et c'est une question à poser avant de signer. Demandez systématiquement dans quel format l'export est fourni, en combien de temps, et pendant combien de temps les données sont conservées après résiliation. Chez Gramme, l'export est disponible à tout moment et les données sont conservées douze mois après le départ.",
    },
  ],
  draft: false,
  liens: [
    { href: "/tarifs", label: "Les tarifs, et ce que chaque offre ouvre" },
    { href: "/comparatif", label: "Gramme face aux autres logiciels du métier" },
  ],
  relatedSlug: "pourcentage-perte-marge-boulangerie",
  relatedLabel: "Le pourcentage de perte, l'erreur qui embellit toutes vos marges",
};
