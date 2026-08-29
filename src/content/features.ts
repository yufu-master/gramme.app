/**
 * Source unique des fonctionnalités Gramme.
 * Alimente : l'accordéon de la page d'accueil, le hub /fonctionnalites,
 * les pages dédiées /fonctionnalites/<slug>, le sitemap et les schémas JSON-LD.
 */

export type FeatureIcon =
  | "camera"
  | "book"
  | "scan"
  | "layers"
  | "box"
  | "users"
  | "tag"
  | "spark";

export type Feature = {
  slug: string;
  /** Libellé court : accordéon, hub, navigation */
  name: string;
  icon: FeatureIcon;
  /** Une phrase, toujours visible sur la page d'accueil */
  summary: string;
  /** 3 à 5 points, dépliés dans l'accordéon */
  bullets: string[];
  image: { src: string; alt: string };
  /** Page dédiée */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  sections: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const features: Feature[] = [
  {
    slug: "import-recettes-photo",
    name: "Import de recettes en photo",
    icon: "camera",
    summary:
      "Photographiez vos fiches manuscrites ou déposez vos tableaux Excel : la fiche technique est reconstruite automatiquement.",
    bullets: [
      "Photo, PDF, scan ou fichier Excel",
      "Lecture de l'écriture manuscrite et des abréviations de métier",
      "Sous-recettes détectées et rattachées aux recettes qui les utilisent",
      "Coût matière, pourcentage de perte et marge calculés dès l'import",
    ],
    image: {
      src: "/images/import-recettes-photo.jpg",
      alt: "Boulanger photographiant ses fiches recettes manuscrites pour les importer dans le logiciel Gramme",
    },
    h1: "Importer ses recettes d'une simple photo",
    metaTitle: "Importer ses recettes en photo — fiches techniques automatiques",
    metaDescription:
      "Photographiez vos fiches recettes manuscrites ou importez vos tableaux Excel : Gramme reconstruit la fiche technique, sépare les sous-recettes et calcule coût matière, perte et marge.",
    keywords: [
      "importer recettes photo",
      "numériser fiches techniques",
      "scanner recette manuscrite",
      "import Excel recettes boulangerie",
      "reconnaissance recette manuscrite",
    ],
    intro:
      "Un cahier jauni, une fiche couverte de farine, une page tachée de graisse, ou l'immense tableau Excel bricolé depuis dix ans : la reprise de l'historique est ce qui décourage la plupart des artisans au moment de changer d'outil. Chez Gramme, c'est la première chose que la machine fait à votre place.",
    sections: [
      {
        title: "Recettes et sous-recettes séparées automatiquement",
        text: "Un croissant contient une détrempe, une tarte une crème pâtissière, une entremets plusieurs bases. Gramme reconnaît ces préparations intermédiaires, les crée une seule fois et les relie à toutes les recettes qui les utilisent. Le jour où le prix du beurre bouge, toutes les recettes qui contiennent la détrempe bougent avec, sans que vous ayez à y penser.",
      },
      {
        title: "Le pourcentage de perte est repris, pas oublié",
        text: "Parage, cuisson, évaporation, chutes de découpe : ce sont ces pertes qui font qu'un coût de revient théorique ne ressemble jamais au coût réel. Elles sont reprises recette par recette au moment de l'import, puis appliquées à chaque calcul de coût et de marge.",
      },
      {
        title: "Les calculs complexes ne sont plus votre problème",
        text: "Conversions d'unités, ratios de pâte, coefficients de rendement, recettes en cascade sur plusieurs niveaux : ce sont exactement les opérations qui prennent des heures dans un tableur et qui produisent des erreurs invisibles. Elles sont faites à chaque affichage, à partir de vos prix d'achat réels.",
      },
      {
        title: "Vos gros fichiers Excel aussi",
        text: "Les tableaux de plusieurs centaines de lignes, avec leurs colonnes ajoutées au fil des années, sont importés en une fois : colonnes identifiées, doublons regroupés, matières premières rattachées à votre mercuriale. Ce travail est fait avec vous lors de l'installation accompagnée, pour démarrer avec un répertoire déjà complet.",
      },
    ],
    faq: [
      {
        q: "Faut-il que mes fiches soient propres pour être importées ?",
        a: "Non. Les fiches anciennes, jaunies, couvertes de farine, tachées de graisse ou raturées sont le cas normal, pas l'exception. La lecture s'adapte à votre façon de noter : abréviations de métier, quantités en marge, colonnes en désordre.",
      },
      {
        q: "Que se passe-t-il si une quantité est mal lue ?",
        a: "Chaque fiche importée reste modifiable ligne par ligne avant validation. Vous corrigez ce qui doit l'être, et la correction se répercute sur le coût de revient et la marge immédiatement.",
      },
      {
        q: "Puis-je importer mes recettes moi-même après la mise en service ?",
        a: "Oui. L'import photo reste disponible en permanence depuis le téléphone ou la tablette : c'est aussi la façon la plus rapide d'ajouter une nouvelle création notée à la volée dans le laboratoire.",
      },
    ],
  },
  {
    slug: "fiches-techniques",
    name: "Fiches techniques & coût de revient",
    icon: "book",
    summary:
      "Un répertoire de recettes clair, avec le coût matière et la marge recalculés à chaque changement de prix.",
    bullets: [
      "Répertoire de recettes et de sous-recettes",
      "Coût de revient à jour en permanence",
      "Gestion des pertes et des rendements",
      "Impression de fiches techniques pour le laboratoire",
    ],
    image: {
      src: "/images/feature-recette-detail.png",
      alt: "Fiche technique détaillée dans le logiciel Gramme avec coût matière et marge",
    },
    h1: "Fiches techniques et coût de revient",
    metaTitle: "Fiche technique boulangerie & coût de revient recette",
    metaDescription:
      "Créez vos fiches techniques de boulangerie et pâtisserie dans Gramme : coût de revient, gestion des pertes, marges par recette et impression pour le laboratoire.",
    keywords: [
      "fiche technique boulangerie",
      "fiche technique pâtisserie",
      "coût de revient recette",
      "calcul marge recette",
      "logiciel fiches techniques",
    ],
    intro:
      "La fiche technique est le document qui décide de votre rentabilité, et c'est presque toujours celui qui est le moins tenu à jour. Dans Gramme, elle n'est pas un document figé : c'est un calcul vivant, branché sur vos prix d'achat réels.",
    sections: [
      {
        title: "Un répertoire lisible, pas un classeur",
        text: "Recherche, catégories et filtres : vous retrouvez une recette en quelques secondes, depuis le téléphone posé sur le plan de travail. Les sous-recettes sont créées une fois et réutilisées partout, ce qui évite les dix versions légèrement différentes d'une même crème pâtissière.",
      },
      {
        title: "Le coût de revient se recalcule seul",
        text: "Chaque ingrédient est rattaché à une matière première de votre mercuriale. Quand une facture fournisseur fait monter le prix de cette matière, le coût de revient de toutes les recettes concernées suit immédiatement, pertes comprises. Vous ne découvrez plus l'érosion de vos marges au moment du bilan.",
      },
      {
        title: "Prêt pour le laboratoire",
        text: "Les fiches s'impriment pour être affichées au poste, et restent consultables sur mobile et tablette pendant le service. Le même document sert à produire et à calculer : il n'y a plus une version pour l'équipe et une version pour le comptable.",
      },
    ],
    faq: [
      {
        q: "Comment calculer le coût de revient d'une recette de pâtisserie ?",
        a: "Il faut additionner le coût de chaque ingrédient au prix d'achat réel, appliquer les pertes de production, puis rapporter le total au nombre de pièces obtenues. Gramme fait ce calcul en continu à partir de vos factures fournisseurs, pour chaque recette et chaque sous-recette.",
      },
      {
        q: "Puis-je gérer des recettes qui en contiennent d'autres ?",
        a: "Oui. Les sous-recettes sont un objet à part entière : une base est saisie une seule fois puis rattachée à toutes les recettes qui l'utilisent, sur autant de niveaux que nécessaire.",
      },
    ],
  },
  {
    slug: "allergenes-etiquetage",
    name: "Allergènes & étiquetage",
    icon: "tag",
    summary:
      "Les allergènes remontent tout seuls de vos matières premières jusqu'au produit fini, et l'étiquette s'écrit à partir de vos fiches.",
    bullets: [
      "Les 14 allergènes du règlement européen, renseignés une fois par matière",
      "Propagation automatique aux sous-recettes puis aux produits finis",
      "Affiche de vitrine et étiquette produit, aux formats de vos rouleaux",
      "Valeurs nutritionnelles calculées, table Ciqual de l'ANSES intégrée",
      "Chaque étiquette imprimée est archivée : qui l'a validée, quand, et ce qu'elle disait",
    ],
    image: {
      src: "/images/fiches-techniques.jpg",
      alt: "Étiquette produit avec liste d'ingrédients et allergènes mis en évidence, générée par le logiciel Gramme",
    },
    h1: "Allergènes et étiquetage : la même magie que les prix",
    metaTitle: "Allergènes & étiquetage — logiciel boulangerie pâtisserie",
    metaDescription:
      "Renseignez les allergènes une fois par matière première : Gramme les propage à toutes vos recettes, produit l'affiche de vitrine et l'étiquette produit, et calcule les valeurs nutritionnelles depuis la table Ciqual de l'ANSES.",
    keywords: [
      "logiciel allergènes boulangerie",
      "étiquetage INCO pâtisserie",
      "affichage allergènes vitrine",
      "valeurs nutritionnelles recette",
      "table Ciqual logiciel",
      "règlement 1169/2011 artisan",
    ],
    intro:
      "Recopier les allergènes de chaque produit à la main, c'est une soirée de travail — et la certitude d'en oublier un le jour où l'on change de fournisseur de praliné. Gramme applique aux allergènes exactement ce qu'il fait déjà aux prix : vous renseignez la matière première une fois, et tout ce qui l'emploie se met à jour tout seul.",
    sections: [
      {
        title: "Renseigné une fois, propagé partout",
        text: "Vous cochez les allergènes sur la fiche d'une matière première — ou vous photographiez l'étiquette de votre fournisseur et Gramme vous les propose, en vous montrant l'extrait qui les justifie. Ensuite, tout remonte : la sous-recette hérite de ses composants, le produit fini hérite de ses sous-recettes. Le jour où votre nouveau praliné contient des traces de fruits à coque, tous les entremets concernés le disent, sans que vous ayez à y penser. Et chaque recette affiche quel ingrédient apporte quel allergène : vous voyez d'où vient l'information, vous ne la croyez pas sur parole.",
      },
      {
        title: "Ce que la loi demande vraiment à votre vitrine",
        text: "Pour un produit vendu à la coupe ou en vitrine, l'information sur les allergènes doit être écrite et visible près des denrées. Gramme édite l'affiche correspondante pour tout votre catalogue, en une page. Pour un produit emballé, l'étiquette complète se construit à partir de la fiche : liste d'ingrédients dans l'ordre décroissant de poids, allergènes mis en évidence, quantité nette, conservation. Un questionnaire de trois questions vous dit quelles mentions vous concernent — sans jamais décider à votre place.",
      },
      {
        title: "Les valeurs nutritionnelles, calculées et sourcées",
        text: "Le règlement européen autorise à calculer la déclaration nutritionnelle à partir des ingrédients plutôt que de payer une analyse en laboratoire par recette. Gramme le fait : les valeurs de chaque matière se combinent au prorata des quantités, l'énergie se déduit des coefficients officiels, et le tableau sort dans l'ordre et avec les arrondis imposés. Vous n'avez pas les valeurs d'une matière ? La table Ciqual de l'ANSES — 3 484 aliments — vous les propose, et vous confirmez.",
      },
      {
        title: "Rien ne s'imprime sans vous",
        text: "Un allergène ne se devine jamais. Tant qu'une seule matière de la recette n'a pas été renseignée, aucune étiquette ne sort — et l'écran vous dit laquelle. Avant chaque impression, vous cochez que vous avez vérifié les informations. Chaque version imprimée est ensuite archivée telle quelle, avec sa date et votre nom : en cas de contrôle ou de rappel, vous savez exactement ce qui a été apposé, et quand. Gramme aide à rassembler ces informations ; vous restez responsable de ce que vous diffusez.",
      },
    ],
    faq: [
      {
        q: "Dois-je vraiment tout renseigner avant de pouvoir imprimer ?",
        a: "Oui, et c'est volontaire. Une étiquette qui tait un allergène parce qu'il n'était pas renseigné se lit comme une information — elle est plus dangereuse qu'une absence d'étiquette. Gramme vous nomme les matières qui manquent, et un écran de reprise permet de traiter tout un catalogue rapidement : la majorité des matières n'ont aucun allergène, et se déclarent en un clic.",
      },
      {
        q: "L'étiquette produite est-elle conforme ?",
        a: "Gramme construit l'étiquette à partir du règlement (UE) 1169/2011 : les 14 allergènes de l'annexe II, l'ordre décroissant des ingrédients de l'article 18, la mise en évidence de l'article 21, l'ordre et les unités du tableau nutritionnel de l'annexe XV. Mais la conformité dépend aussi de votre situation, et nous ne la certifions pas : c'est vous l'exploitant, et l'application vous aide à rédiger, elle n'atteste de rien. Chaque information réglementaire affichée porte sa source et sa date.",
      },
      {
        q: "Suis-je obligé de faire la déclaration nutritionnelle ?",
        a: "Pas forcément. Le règlement prévoit des exemptions, notamment pour les denrées de fabrication artisanale fournies en faibles quantités directement au consommateur final. Beaucoup d'artisans en relèvent — c'est pourquoi ce bloc est désactivé par défaut chez nous. Le questionnaire enregistre ce que vous déclarez, daté ; nous ne qualifions jamais votre situation à votre place.",
      },
      {
        q: "D'où viennent les valeurs nutritionnelles ?",
        a: "De vos propres matières en priorité : celles que vous avez saisies ou lues sur l'étiquette de votre fournisseur. À défaut, Gramme vous propose celles de la table Ciqual de l'ANSES, une base publique de 3 484 aliments. Une valeur venue de Ciqual reste marquée « à vérifier » tant que vous ne l'avez pas confirmée : un praliné maison n'est pas le praliné moyen d'une table statistique.",
      },
    ],
  },
  {
    slug: "scan-factures-mercuriale",
    name: "Scan de factures & mercuriale",
    icon: "scan",
    summary:
      "Photographiez une facture fournisseur : les prix entrent seuls et remontent dans les recettes concernées.",
    bullets: [
      "Scan automatique des factures fournisseurs",
      "Historique et détail de chaque facture",
      "Suivi réel de l'évolution des prix des matières premières",
      "Recettes impactées signalées en temps réel",
    ],
    image: {
      src: "/images/feature-scan-ia.png",
      alt: "Scan automatique d'une facture fournisseur dans le logiciel Gramme",
    },
    h1: "Scan de factures et mercuriale fournisseurs",
    metaTitle: "Scan de factures fournisseurs & mercuriale boulangerie",
    metaDescription:
      "Scannez vos factures fournisseurs et laissez Gramme tenir votre mercuriale : prix d'achat à jour, historique des hausses et recettes impactées signalées en temps réel.",
    keywords: [
      "scan facture fournisseur",
      "mercuriale fournisseurs",
      "suivi prix matières premières",
      "logiciel mercuriale boulangerie",
      "évolution prix matières premières",
    ],
    intro:
      "Entre le moment où un fournisseur augmente ses prix et le moment où l'artisan s'en aperçoit, il se passe souvent plusieurs mois. C'est le trou le plus coûteux de la gestion d'un laboratoire, et c'est celui que la mercuriale de Gramme ferme.",
    sections: [
      {
        title: "La saisie de factures disparaît",
        text: "Vous photographiez la facture à la réception de la marchandise. Les lignes, les quantités et les prix d'achat sont extraits, puis rattachés aux matières premières correspondantes de votre mercuriale. Il n'y a plus de pile de factures à ressaisir le dimanche soir.",
      },
      {
        title: "Une mercuriale qui dit la vérité",
        text: "Chaque matière première porte son prix d'achat réel, son historique et l'écart avec les livraisons précédentes. Vous voyez les hausses au moment où elles arrivent, fournisseur par fournisseur, au lieu de les subir en fin d'exercice.",
      },
      {
        title: "L'impact remonte jusqu'à la recette",
        text: "Un prix qui bouge ne reste pas dans un tableau d'achats : il traverse les sous-recettes et les recettes finales, et les fiches dont la marge se dégrade sont signalées. Vous savez quelles références renégocier, quelles recettes réajuster et lesquelles laisser tranquilles.",
      },
    ],
    faq: [
      {
        q: "Combien de factures puis-je scanner par mois ?",
        a: "Trente factures par mois avec l'offre Starter, cent cinquante avec l'offre Pro. Chaque facture reste consultable dans son détail, avec l'historique des prix ligne par ligne.",
      },
      {
        q: "Qu'est-ce qu'une mercuriale en boulangerie ?",
        a: "C'est le relevé des prix d'achat de vos matières premières, fournisseur par fournisseur et dans le temps. Tenue à jour, elle permet de calculer un coût de revient juste et de repérer les hausses avant qu'elles n'érodent la marge.",
      },
    ],
  },
  {
    slug: "planning-production",
    name: "Planning de production",
    icon: "layers",
    summary:
      "La production du jour, les besoins en matières consolidés et le coût de fabrication au même endroit.",
    bullets: [
      "Planning de production jour par jour",
      "Liste des matières premières et des recettes utilisées",
      "Coût de production calculé",
      "Mise à jour automatique du stock",
    ],
    image: {
      src: "/images/feature-production.png",
      alt: "Planning de production quotidien dans le logiciel Gramme",
    },
    h1: "Planning de production pour boulangerie et pâtisserie",
    metaTitle: "Planning de production boulangerie & coût de fabrication",
    metaDescription:
      "Planifiez la production du jour dans Gramme : recettes et quantités, besoins en matières premières consolidés, coût de fabrication et mise à jour automatique du stock.",
    keywords: [
      "planning production boulangerie",
      "logiciel production pâtisserie",
      "coût de production",
      "organisation laboratoire boulangerie",
    ],
    intro:
      "Décider ce qu'on produit demain se fait souvent de tête, ou sur un carnet. Cela fonctionne — jusqu'au jour où il manque une matière première à cinq heures du matin, ou jusqu'à ce qu'on s'aperçoive qu'une gamme entière tourne à perte.",
    sections: [
      {
        title: "Le jour est posé avant d'entrer au fournil",
        text: "Vous choisissez les recettes et les quantités de la journée. Gramme consolide les besoins en matières premières correspondants et affiche la liste des recettes et sous-recettes à préparer, dans un format lisible sur téléphone ou tablette au poste de travail.",
      },
      {
        title: "Le coût de la journée est connu",
        text: "Le coût de fabrication est calculé à partir des recettes planifiées et de vos prix d'achat réels. Ce n'est plus un ordre de grandeur estimé après coup dans un tableur parallèle, c'est un chiffre disponible avant de lancer la production.",
      },
      {
        title: "Le stock se met à jour tout seul",
        text: "Ce qui est produit sort du stock de matières premières sans double saisie. Le stock reste donc cohérent avec la réalité de l'atelier, ce qui rend les inventaires plus rapides et les ruptures plus rares.",
      },
    ],
    faq: [
      {
        q: "Le planning est-il utilisable dans le laboratoire ?",
        a: "Oui. L'interface est pensée pour l'atelier : lisible sur téléphone et tablette, avec des actions simples, à un moment de la journée où personne n'a le temps de naviguer dans un logiciel de bureau.",
      },
      {
        q: "Dois-je planifier chaque jour pour que ça serve ?",
        a: "Non. Vous pouvez commencer par les journées les plus chargées ou par une seule gamme, puis étendre. Gramme se déploie progressivement : recettes d'abord, puis factures, puis production et stock.",
      },
    ],
  },
  {
    slug: "gestion-stock",
    name: "Stock & inventaire",
    icon: "box",
    summary:
      "Un stock qui vit avec vos achats et vos fournées, valorisé en un coup d'œil.",
    bullets: [
      "Recherche, filtres et catégories",
      "Édition rapide des prix, des quantités et des fournisseurs",
      "Valeur du stock en temps réel",
      "Moins de ruptures, moins de gaspillage",
    ],
    image: {
      src: "/images/feature-stock.png",
      alt: "Gestion du stock de matières premières dans le logiciel Gramme",
    },
    h1: "Gestion de stock pour laboratoire artisanal",
    metaTitle: "Gestion de stock boulangerie & pâtisserie — logiciel Gramme",
    metaDescription:
      "Suivez votre stock de matières premières dans Gramme : catégories, édition rapide, valeur du stock en temps réel et mise à jour automatique par la production.",
    keywords: [
      "gestion stock boulangerie",
      "gestion stock pâtisserie",
      "inventaire matières premières",
      "valeur du stock laboratoire",
    ],
    intro:
      "Un stock tenu dans un tableur est faux au bout de trois semaines. Un stock qui se met à jour à partir de ce que vous achetez et de ce que vous produisez reste utilisable toute l'année.",
    sections: [
      {
        title: "Retrouver une référence en quelques secondes",
        text: "Recherche, filtres et catégories : farines, beurres, fruits, emballages. Les prix, les quantités et les fournisseurs se modifient directement depuis la liste, sans ouvrir cinq écrans.",
      },
      {
        title: "La valeur du stock, tout de suite",
        text: "Le stock est valorisé à partir de vos prix d'achat réels. C'est un chiffre utile pour la trésorerie, pour l'inventaire de fin d'exercice et pour repérer les références sur lesquelles vous immobilisez trop d'argent.",
      },
      {
        title: "Alimenté par vos achats et vos productions",
        text: "Les factures scannées font entrer la marchandise, la production la fait sortir. Le stock cesse d'être un document à tenir à part : il devient la conséquence de ce que vous faites déjà.",
      },
    ],
    faq: [
      {
        q: "Faut-il faire un inventaire complet pour démarrer ?",
        a: "Non, mais un point de départ propre aide. Lors de l'installation accompagnée, nous reprenons votre fichier matières et vos factures des trois derniers mois pour que les prix et les références soient justes dès le premier jour.",
      },
      {
        q: "Gramme remplace-t-il Excel pour la mercuriale et les stocks ?",
        a: "Oui. Mercuriale, stock, production et marges sont réunis dans une seule application, accessible sur ordinateur, tablette et mobile, sans tableur parallèle à maintenir.",
      },
    ],
  },
  {
    slug: "fournisseurs",
    name: "Fournisseurs",
    icon: "users",
    summary:
      "Le carnet fournisseurs de l'atelier : contacts, produits affiliés et volume d'achat estimé.",
    bullets: [
      "Carnet fournisseurs centralisé",
      "Coordonnées, contact par e-mail ou appel",
      "Produits affiliés à chaque fournisseur",
      "Volume d'achat estimé",
    ],
    image: {
      src: "/images/feature-fournisseurs-list.png",
      alt: "Carnet fournisseurs centralisé dans le logiciel Gramme",
    },
    h1: "Carnet fournisseurs pour boulangerie et pâtisserie",
    metaTitle: "Gestion des fournisseurs — logiciel boulangerie Gramme",
    metaDescription:
      "Centralisez vos fournisseurs dans Gramme : coordonnées, produits affiliés, volume d'achat estimé et lien direct avec la mercuriale et les factures scannées.",
    keywords: [
      "gestion fournisseurs boulangerie",
      "carnet fournisseurs",
      "achats boulangerie",
      "négociation fournisseur boulangerie",
    ],
    intro:
      "Savoir combien vous achetez réellement chez un fournisseur change la conversation au moment de négocier. Encore faut-il que l'information existe ailleurs que dans une pile de bons de livraison.",
    sections: [
      {
        title: "Tous les contacts au même endroit",
        text: "Coordonnées, interlocuteur, e-mail et téléphone : le carnet est accessible depuis le laboratoire, et vous appelez ou écrivez en un geste depuis la fiche du fournisseur.",
      },
      {
        title: "Ce que vous leur achetez, vraiment",
        text: "Chaque fournisseur porte la liste des produits qui lui sont rattachés et un volume d'achat estimé, construit à partir des factures scannées. C'est la base d'une renégociation argumentée plutôt qu'au ressenti.",
      },
      {
        title: "Relié à la mercuriale",
        text: "Les prix vus sur les factures d'un fournisseur alimentent directement la mercuriale et, de proche en proche, le coût de vos recettes. Comparer deux fournisseurs sur une même matière première devient immédiat.",
      },
    ],
    faq: [
      {
        q: "Puis-je comparer deux fournisseurs sur une même matière première ?",
        a: "Oui. Comme chaque prix d'achat scanné est rattaché à une matière première et à un fournisseur, l'écart et son évolution dans le temps sont visibles depuis la mercuriale.",
      },
    ],
  },
  {
    slug: "marges-et-decisions",
    name: "Marges & décisions",
    icon: "spark",
    summary:
      "Les recettes qui coûtent trop cher remontent d'elles-mêmes, avant la fin du mois.",
    bullets: [
      "Alertes sur vos recettes sensibles",
      "Vision claire des marges nettes",
      "Priorisation des actions rentables",
      "Impact d'une hausse de prix visible immédiatement",
    ],
    image: {
      src: "/images/feature-prix.png",
      alt: "Suivi des marges et de l'évolution des prix dans le logiciel Gramme",
    },
    h1: "Suivi des marges en temps réel",
    metaTitle: "Calcul et suivi des marges — logiciel boulangerie Gramme",
    metaDescription:
      "Suivez vos marges en temps réel avec Gramme : alertes sur les recettes sensibles, impact immédiat des hausses de prix et priorisation des actions rentables.",
    keywords: [
      "calcul marge boulangerie",
      "suivi marge pâtisserie",
      "rentabilité boulangerie",
      "marge nette recette",
    ],
    intro:
      "La plupart des artisans découvrent leurs chiffres une fois par an, quand il est trop tard pour agir dessus. L'intérêt d'un coût de revient calculé en continu, c'est justement de rendre la décision possible pendant l'année.",
    sections: [
      {
        title: "Les recettes sensibles se signalent",
        text: "Quand une hausse de prix dégrade la marge d'une recette au-delà d'un seuil, la fiche remonte. Vous traitez cinq références qui comptent au lieu de relire deux cents fiches techniques.",
      },
      {
        title: "Des marges nettes, pas des impressions",
        text: "Le calcul part de vos prix d'achat réels et tient compte des pertes de production. C'est ce qui distingue une marge affichée d'une marge que l'on peut opposer à son banquier ou à son expert-comptable.",
      },
      {
        title: "Décider quoi faire, dans l'ordre",
        text: "Renégocier une matière première, ajuster un prix de vente, revoir un grammage, retirer une recette de la gamme : les actions sont hiérarchisées par ce qu'elles rapportent réellement, pas par ce qui est le plus visible.",
      },
    ],
    faq: [
      {
        q: "À quelle fréquence les marges sont-elles mises à jour ?",
        a: "En continu. Dès qu'une facture scannée modifie le prix d'une matière première, les coûts de revient et les marges des recettes concernées sont recalculés, sous-recettes comprises.",
      },
      {
        q: "Faut-il un comptable pour exploiter ces chiffres ?",
        a: "Non. Les indicateurs sont pensés pour un artisan qui pilote son atelier, pas pour un contrôleur de gestion. Vos données restent exportables à tout moment si votre comptable veut les reprendre.",
      },
    ],
  },
];

export function getFeature(slug: string): Feature | undefined {
  return features.find((feature) => feature.slug === slug);
}

export function featurePath(slug: string): string {
  return `/fonctionnalites/${slug}`;
}
