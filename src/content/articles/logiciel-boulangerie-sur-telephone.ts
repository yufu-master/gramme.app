import type { Guide } from "@/content/guides/types";

export const articleTelephone: Guide = {
  slug: "logiciel-boulangerie-sur-telephone",
  title: "Faut-il un ordinateur pour gérer sa boulangerie ?",
  description:
    "Pourquoi un outil de gestion qui suppose un poste de bureau finit inutilisé, et ce qu'il faut vérifier avant de signer.",
  keywords: [
    "logiciel boulangerie mobile",
    "application boulangerie téléphone",
    "logiciel gestion boulangerie tablette",
    "PWA boulangerie",
    "logiciel boulangerie sans installation",
  ],
  publishedAt: "2026-08-26",
  updatedAt: "2026-08-26",
  ogImage: "/images/multi-device.png",
  summary:
    "La question de l'appareil paraît secondaire. C'est en réalité celle qui décide si un outil de gestion est adopté ou abandonné dans les trois mois.",
  intro:
    "Quand on compare des logiciels de gestion, on regarde les fonctions, les tarifs, les intégrations. Presque jamais l'appareil sur lequel on va s'en servir. C'est pourtant la question qui décide de tout le reste, parce qu'un outil qu'on n'ouvre pas ne sert à rien, quelles que soient ses fonctions.",
  blocks: [
    {
      type: "h2",
      id: "ou-est-le-boulanger",
      text: "Où se trouve un boulanger à quatre heures du matin",
    },
    {
      type: "p",
      text: "Pas devant un ordinateur. Il est devant un four, les mains dans la farine, avec une fournée en cours et une autre qui attend. S'il reçoit une livraison, il signe le bon debout dans la réserve. S'il veut vérifier si une recette est rentable, c'est entre deux enfournements. Le seul écran à portée de main est celui de sa poche.",
    },
    {
      type: "p",
      text: "L'ordinateur du bureau, quand il existe, sert le dimanche soir ou le mardi matin, au moment de la compta, des commandes, du planning. **Un outil de gestion qui ne vit que là devient un rendez-vous hebdomadaire.** Et une mercuriale mise à jour une fois par semaine est une mercuriale fausse six jours sur sept.",
    },
    {
      type: "h2",
      id: "ce-qui-se-passe",
      text: "Le mécanisme d'abandon, étape par étape",
    },
    {
      type: "p",
      text: "Il est régulier, et il ne tient pas à la qualité du logiciel.",
    },
    {
      type: "table",
      caption: "Comment un outil de gestion cesse d'être utilisé",
      headers: ["Moment", "Ce qui se passe"],
      rows: [
        ["Semaine 1", "Le compte est monté, tout est à jour, l'enthousiasme est réel."],
        ["Semaine 3", "Trois factures attendent sur le coin du bureau. Il faudra les saisir « quand j'aurai un moment »."],
        ["Semaine 6", "La pile fait quinze factures. La saisir demande maintenant une soirée entière."],
        ["Semaine 10", "Les prix affichés dans l'outil ne correspondent plus à rien. On ne s'y fie plus."],
        ["Mois 4", "L'abonnement est résilié. « Ça ne collait pas à notre organisation. »"],
      ],
    },
    {
      type: "p",
      text: "Rien dans cette suite ne vient d'une fonction manquante. Tout vient d'un décalage de quelques secondes : le geste de traiter une facture doit coûter moins cher que celui de la poser sur une pile. Photographier un document en sortant de la réserve prend dix secondes. Le rapporter au bureau, l'empiler, y revenir, allumer un poste et saisir les lignes en prend dix minutes, et surtout demande un moment qui n'existe pas.",
    },
    {
      type: "h2",
      id: "web-vs-bureau",
      text: "Application de bureau, site web, application installable",
    },
    {
      type: "p",
      text: "Trois formes coexistent sur le marché, et elles n'engagent pas du tout au même usage.",
    },
    {
      type: "table",
      caption: "Les trois formes de logiciel de gestion, et ce qu'elles impliquent",
      headers: ["Forme", "Ce que ça implique au quotidien"],
      rows: [
        [
          "Application de bureau (Windows, macOS)",
          "Installation sur chaque poste, mises à jour à lancer, versions qui divergent entre le bureau et le labo. Inutilisable depuis le téléphone tant qu'une version mobile n'existe pas.",
        ],
        [
          "Site web classique",
          "Accessible partout depuis un navigateur, mais il faut retrouver l'adresse, se reconnecter, et l'ergonomie reste souvent celle d'un écran large.",
        ],
        [
          "Application web installable (PWA)",
          "S'ajoute à l'écran d'accueil du téléphone et s'ouvre comme une application, avec les notifications. Rien à installer, aucune mise à jour à lancer : le même compte et la même version sur téléphone, tablette et ordinateur.",
        ],
      ],
    },
    {
      type: "p",
      text: "Cette troisième forme est celle de Gramme, et c'est un choix, pas une contrainte technique. Elle supprime la question de l'appareil : vous photographiez une facture depuis la réserve, vous vérifiez une marge entre deux fournées, vous imprimez la fiche de production depuis l'ordinateur du bureau, c'est le même compte, à jour en permanence.",
    },
    {
      type: "p",
      text: "Il faut le dire honnêtement : plusieurs logiciels du secteur restent aujourd'hui des applications de bureau. Ce n'est pas un défaut de conception en soi, c'est un héritage, et leurs versions mobiles sont pour certaines annoncées. Mais tant qu'elles ne sont pas sorties, cela reste un facteur d'abandon qu'aucune fonction ne compense.",
    },
    {
      type: "h2",
      id: "ce-quon-fait-vraiment",
      text: "Ce qu'on fait vraiment depuis un téléphone",
    },
    {
      type: "p",
      text: "La crainte habituelle est qu'un petit écran limite à de la consultation. Dans un atelier, c'est l'inverse : les gestes les plus fréquents sont justement ceux qui se font debout.",
    },
    {
      type: "p",
      text: "**Photographier une facture** dès sa réception, avant qu'elle rejoigne une pile. **Photographier une fiche manuscrite** trouvée dans un classeur. **Vérifier une marge** avant de répondre à un client qui demande un prix pour vingt pièces. **Consulter une fiche technique** pendant la production, sans sortir un classeur plastifié. **Recevoir une alerte** quand le beurre augmente, au moment où elle est utile plutôt que le dimanche suivant.",
    },
    {
      type: "p",
      text: "Ce qui reste plus confortable sur grand écran : monter une fiche complexe à dix ingrédients, faire un inventaire complet, éplucher les tableaux de bord. Personne ne prétend le contraire : l'intérêt est de ne pas avoir à choisir.",
    },
    {
      type: "h2",
      id: "questions-a-poser",
      text: "Trois questions à poser avant de choisir",
    },
    {
      type: "p",
      text: "**« Puis-je photographier une facture depuis mon téléphone, sans passer par un ordinateur ? »** C'est le geste le plus fréquent de tous. S'il demande un poste fixe, la pile se reconstituera.",
    },
    {
      type: "p",
      text: "**« Y a-t-il quelque chose à installer ou à mettre à jour ? »** Chaque installation est un poste à configurer, une version qui peut diverger, et un jour où l'outil ne s'ouvre pas parce que la mise à jour a échoué.",
    },
    {
      type: "p",
      text: "**« Combien de secondes entre le moment où je sors mon téléphone et celui où la facture est envoyée ? »** Demandez qu'on vous le montre en direct pendant la démonstration, chronomètre en main. C'est le seul test qui prédit vraiment si l'outil sera encore utilisé dans six mois.",
    },
  ],
  faqs: [
    {
      q: "Qu'est-ce qu'une application web installable (PWA) ?",
      a: "C'est un site web qui peut s'ajouter à l'écran d'accueil du téléphone et s'ouvrir comme une application : son icône, son plein écran, ses notifications. Techniquement, elle reste servie par le web : d'où l'absence d'installation, de mise à jour et de passage par un magasin d'applications. Pour l'utilisateur, la différence avec une application classique ne se voit pas.",
    },
    {
      q: "Faut-il du réseau dans le laboratoire ?",
      a: "Oui, pour l'essentiel des usages. La plupart des ateliers sont couverts par la 4G, mais un laboratoire en sous-sol demande un point d'accès Wi-Fi. C'est à vérifier avant de vous décider, pas après.",
    },
    {
      q: "Mon équipe peut-elle y accéder sans que je partage mon compte ?",
      a: "Oui, et il ne faut jamais partager un compte. Chaque personne a le sien, avec un rôle qui décide de ce qu'elle voit : on peut donner accès aux fiches de production sans donner accès aux prix d'achat ni aux marges.",
    },
    {
      q: "Est-ce que ça marche sur une vieille tablette de labo ?",
      a: "Sur un navigateur récent, oui. Une tablette dont le système n'est plus mis à jour depuis des années peut poser problème : dites-le-nous pendant la démonstration, nous testerons sur l'appareil réel plutôt que de vous laisser le découvrir après.",
    },
  ],
  draft: false,
  relatedSlug: "prix-logiciel-gestion-boulangerie",
  relatedLabel: "Combien coûte vraiment un logiciel de gestion en boulangerie ?",
};
