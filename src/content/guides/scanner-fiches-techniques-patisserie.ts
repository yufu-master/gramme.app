import type { Guide } from "./types";

const howToSteps = [
  {
    name: "Vous photographiez",
    text: "Une page à la fois, posée à plat, dans un endroit éclairé. Une recette qui court sur deux pages se photographie en deux fois. Les cahiers, les classeurs, les fiches imprimées et les fichiers PDF fonctionnent de la même manière.",
  },
  {
    name: "Vous vérifiez",
    text: "L'application vous présente ce qu'elle a compris : le nom du produit, le rendement, les composants avec leurs quantités, le procédé. Vous corrigez ce qui doit l'être. Rien n'est enregistré sans votre accord, et ce qui est incertain vous est signalé comme tel plutôt que deviné en silence.",
  },
  {
    name: "C'est tout",
    text: "Le rattachement aux matières premières que vous avez déjà, la liaison aux sous-recettes existantes et le calcul des coûts se font ensuite, sans intervention.",
  },
];

export const guideScannerFiches: Guide = {
  slug: "scanner-fiches-techniques-patisserie",
  title: "Scanner ses fiches techniques de pâtisserie",
  description:
    "Comment numériser un cahier de recettes en photo, avec les sous-recettes reliées, les matières premières identifiées et les coûts calculés.",
  keywords: [
    "scanner fiche technique",
    "numériser cahier de recettes",
    "fiche technique pâtisserie",
    "sous recette",
    "coût de revient recette",
  ],
  publishedAt: "2026-08-11",
  updatedAt: "2026-08-11",
  // Pas `boulangere_gramme_use.png` : 6,4 Mo, au-dessus de ce que LinkedIn
  // accepte pour une vignette, qui sortait donc sans image.
  ogImage: "/images/feature-recettes-list.png",
  summary:
    "Méthode pour photographier un cahier de recettes et obtenir des fiches techniques classées, avec sous-recettes et coûts calculés.",
  intro:
    "Un cahier de recettes se photographie en quelques minutes. Le transformer en fiches techniques exploitables, avec les sous-recettes reliées, les matières identifiées et les coûts calculés, c'est un autre travail. Voici comment il se fait, et ce qu'il demande de votre part.",
  draft: false,
  relatedSlug: "logiciel-concu-par-un-chef-patissier",
  relatedLabel: "Un logiciel conçu par un chef pâtissier",
  howTo: {
    name: "Numériser des fiches techniques de pâtisserie en photo",
    description:
      "Photographier, vérifier, puis laisser rattacher matières, sous-recettes et coûts.",
    steps: howToSteps,
  },
  blocks: [
    {
      type: "h2",
      id: "vrai-probleme",
      text: "Le vrai problème n'est pas de lire l'écriture",
    },
    {
      type: "p",
      text: "On croit que la difficulté est de déchiffrer une page manuscrite tachée de gras. C'est la partie facile.",
    },
    {
      type: "p",
      text: "La difficulté est ailleurs. Dans un cahier de chef, une recette dit crème pâtissière 400 g sans préciser laquelle, ni ce qu'elle contient, ni combien elle coûte. Elle dit farine sans dire T45 ou T65. Elle dit pour 6 sans dire six quoi. Et elle suppose vingt ans de métier chez celui qui la lit.",
    },
    {
      type: "p",
      text: "Numériser une recette, ce n'est donc pas transformer une image en texte. C'est reconstituer une structure que le papier n'a jamais eue.",
    },
    {
      type: "h2",
      id: "comment-ca-se-passe",
      text: "Comment ça se passe, de votre côté",
    },
    {
      type: "howto-steps",
      id: "etapes",
      name: "Comment ça se passe",
      steps: howToSteps,
    },
    {
      type: "h2",
      id: "sous-recettes",
      text: "Pourquoi les sous-recettes changent tout",
    },
    {
      type: "p",
      text: "C'est le point que les outils venus de la restauration traitent mal, et c'est celui qui compte le plus en pâtisserie.",
    },
    {
      type: "p",
      text: "Imaginons que vous numérisiez quinze recettes utilisant toutes la même crème pâtissière. Un outil qui traite les recettes à plat va créer quinze fois du lait, quinze fois des jaunes, quinze fois du sucre. Votre catalogue devient illisible, et le jour où le prix des œufs bouge, quinze recettes sont fausses.",
    },
    {
      type: "p",
      text: "Avec des sous-recettes, la crème pâtissière existe une seule fois. Elle a son rendement, son coût au kilo et son procédé. Les quinze produits qui l'utilisent la référencent. Une hausse du prix des œufs traverse la crème, puis les quinze produits, sans intervention.",
    },
    {
      type: "p",
      text: "C'est la même logique pour un entremets, à un niveau de plus : le produit fini appelle des sous-recettes, qui appellent elles-mêmes des matières premières. Deux niveaux d'imbrication, ce que le papier fait naturellement et que la plupart des logiciels ne représentent pas.",
    },
    {
      type: "h2",
      id: "matieres-premieres",
      text: "Les matières premières, là où se cache la vérité du coût",
    },
    {
      type: "p",
      text: "Une recette exacte avec des prix faux ne sert à rien.",
    },
    {
      type: "p",
      text: "C'est pourquoi la numérisation des recettes ne va jamais seule. Les prix viennent de vos factures fournisseurs, photographiées elles aussi. Un sac de farine de 25 kilos facturé 22,40 euros donne un prix de référence de 0,896 euro le kilo, et c'est ce prix, pas celui du sac, qui sert à calculer vos recettes.",
    },
    {
      type: "p",
      text: "Cette conversion paraît évidente. Elle est pourtant la source d'erreur la plus fréquente dans les fiches techniques faites au tableur, parce que personne ne la refait à chaque changement de tarif.",
    },
    {
      type: "h2",
      id: "oeil",
      text: "Ce qui demande encore votre œil",
    },
    {
      type: "p",
      text: "Une écriture très abrégée reste ambiguë pour tout le monde, y compris pour un pâtissier qui n'a pas écrit la fiche. Elle vous est présentée pour arbitrage plutôt qu'interprétée au hasard.",
    },
    {
      type: "p",
      text: "Une recette sans rendement indiqué ne permet pas de calculer un coût à la part. Il faudra dire combien de pièces elle donne.",
    },
    {
      type: "p",
      text: "Et une photo floue prise dans un couloir sombre donnera un résultat médiocre, quelle que soit la technologie. Poser la page à plat, sous une lumière correcte, reste le geste qui améliore le plus le résultat.",
    },
    {
      type: "h2",
      id: "temps",
      text: "Combien de temps pour un cahier entier",
    },
    {
      type: "p",
      text: "Sur une reprise d'un cahier lisible d'environ cinquante recettes, comptez de l'ordre de deux minutes par recette, vérification comprise, soit moins de deux heures. À affiner dès qu'une mise en service aura été chronométrée de bout en bout.",
    },
    {
      type: "p",
      text: "À titre de comparaison, saisir une fiche technique complète au clavier, avec ses composants et ses quantités, prend rarement moins de dix minutes.",
    },
    {
      type: "h2",
      id: "resume",
      text: "En résumé",
    },
    {
      type: "table",
      headers: ["Étape", "Ce que vous faites", "Ce que vous obtenez"],
      rows: [
        ["1", "Photographier la page", "La recette lue et structurée"],
        ["2", "Vérifier et corriger", "Une fiche technique conforme à la vôtre"],
        ["3", "Rien", "Les matières et sous-recettes reliées, le coût et la marge calculés"],
      ],
    },
  ],
  faqs: [
    {
      q: "Est-ce que ça marche sur une écriture manuscrite ?",
      a: "Oui, sur une écriture lisible et une photo correcte. Les abréviations personnelles vous sont présentées pour arbitrage.",
    },
    {
      q: "Et si j'ai déjà mes fiches sur tableur ?",
      a: "Elles sont reprises telles quelles, sans repasser par la photo.",
    },
    {
      q: "Est-ce que mes recettes servent à autre chose ?",
      a: "Non. Elles ne sont ni partagées, ni réutilisées pour constituer une bibliothèque, ni utilisées pour entraîner un modèle. C'est écrit dans le contrat signé avec chaque client.",
    },
    {
      q: "Que se passe-t-il si je me trompe en validant ?",
      a: "Tout se corrige, et l'historique conserve la trace des modifications.",
    },
  ],
};
