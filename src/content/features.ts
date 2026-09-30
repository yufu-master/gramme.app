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
  | "thermo"
  | "spark"
  | "flask"
  | "calendar"
  | "store"
  | "euro";

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

/**
 * Le nombre de modules, écrit en toutes lettres.
 *
 * Il était en dur — « Neuf modules » — dans un titre, deux descriptions et un
 * schéma JSON-LD. Ajouter un module rendait donc quatre phrases fausses, sans
 * qu'aucun contrôle ne bronche. Il se calcule maintenant, et un test refuse
 * qu'on dépasse la table.
 */
const NOMBRES_EN_LETTRES = [
  "zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix",
  "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt",
];

export function nombreEnLettres(n: number): string {
  const mot = NOMBRES_EN_LETTRES[n];
  if (!mot) throw new Error(`nombreEnLettres : ${n} dépasse la table. L'allonger avant d'ajouter un module.`);
  return mot;
}

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
    metaTitle: "Numériser ses recettes en photo | Gramme",
    metaDescription:
      "Photographiez vos fiches manuscrites ou déposez vos tableaux Excel : Gramme reconstruit la fiche technique, ingrédients et rendements compris.",
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
      src: "/images/app/recette-fiche.png",
      alt: "Fiche technique d'un entremets dans Gramme : ingrédients, quantités et rendement",
    },
    h1: "Fiches techniques et coût de revient",
    metaTitle: "Fiche technique et coût de revient | Gramme",
    metaDescription:
      "Créez vos fiches techniques de boulangerie et pâtisserie : coût de revient, gestion des pertes, marges par recette et impression pour le laboratoire.",
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
      src: "/images/app/recette-etiquetage.png",
      alt: "Onglet Étiquetage d'une recette dans Gramme, avec les allergènes remontés depuis les matières premières",
    },
    h1: "Allergènes et étiquetage : la même magie que les prix",
    metaTitle: "Allergènes et étiquetage réglementaire | Gramme",
    metaDescription:
      "Renseignez les allergènes une fois par matière : Gramme les propage à toutes vos recettes, édite l'affiche de vitrine et l'étiquette produit.",
    keywords: [
      "logiciel allergènes boulangerie",
      "étiquetage INCO pâtisserie",
      "affichage allergènes vitrine",
      "valeurs nutritionnelles recette",
      "table Ciqual logiciel",
      "règlement 1169/2011 artisan",
    ],
    intro:
      "Recopier les allergènes de chaque produit à la main, c'est une soirée de travail, et la certitude d'en oublier un le jour où l'on change de fournisseur de praliné. Gramme applique aux allergènes exactement ce qu'il fait déjà aux prix : vous renseignez la matière première une fois, et tout ce qui l'emploie se met à jour tout seul.",
    sections: [
      {
        title: "Renseigné une fois, propagé partout",
        text: "Vous cochez les allergènes sur la fiche d'une matière première, ou vous photographiez l'étiquette de votre fournisseur et Gramme vous les propose, en vous montrant l'extrait qui les justifie. Ensuite, tout remonte : la sous-recette hérite de ses composants, le produit fini hérite de ses sous-recettes. Le jour où votre nouveau praliné contient des traces de fruits à coque, tous les entremets concernés le disent, sans que vous ayez à y penser. Et chaque recette affiche quel ingrédient apporte quel allergène : vous voyez d'où vient l'information, vous ne la croyez pas sur parole.",
      },
      {
        title: "Ce que la loi demande vraiment à votre vitrine",
        text: "Pour un produit vendu à la coupe ou en vitrine, l'information sur les allergènes doit être écrite et visible près des denrées. Gramme édite l'affiche correspondante pour tout votre catalogue, en une page. Pour un produit emballé, l'étiquette complète se construit à partir de la fiche : liste d'ingrédients dans l'ordre décroissant de poids, allergènes mis en évidence, quantité nette, conservation. Un questionnaire de trois questions vous dit quelles mentions vous concernent, sans jamais décider à votre place.",
      },
      {
        title: "Les valeurs nutritionnelles, calculées et sourcées",
        text: "Le règlement européen autorise à calculer la déclaration nutritionnelle à partir des ingrédients plutôt que de payer une analyse en laboratoire par recette. Gramme le fait : les valeurs de chaque matière se combinent au prorata des quantités, l'énergie se déduit des coefficients officiels, et le tableau sort dans l'ordre et avec les arrondis imposés. Vous n'avez pas les valeurs d'une matière ? La table Ciqual de l'ANSES (3 484 aliments) vous les propose, et vous confirmez.",
      },
      {
        title: "Rien ne s'imprime sans vous",
        text: "Un allergène ne se devine jamais. Tant qu'une seule matière de la recette n'a pas été renseignée, aucune étiquette ne sort, et l'écran vous dit laquelle. Avant chaque impression, vous cochez que vous avez vérifié les informations. Chaque version imprimée est ensuite archivée telle quelle, avec sa date et votre nom : en cas de contrôle ou de rappel, vous savez exactement ce qui a été apposé, et quand. Gramme aide à rassembler ces informations ; vous restez responsable de ce que vous diffusez.",
      },
    ],
    faq: [
      {
        q: "Dois-je vraiment tout renseigner avant de pouvoir imprimer ?",
        a: "Oui, et c'est volontaire. Une étiquette qui tait un allergène parce qu'il n'était pas renseigné se lit comme une information : elle est plus dangereuse qu'une absence d'étiquette. Gramme vous nomme les matières qui manquent, et un écran de reprise permet de traiter tout un catalogue rapidement : la majorité des matières n'ont aucun allergène, et se déclarent en un clic.",
      },
      {
        q: "L'étiquette produite est-elle conforme ?",
        a: "Gramme construit l'étiquette à partir du règlement (UE) 1169/2011 : les 14 allergènes de l'annexe II, l'ordre décroissant des ingrédients de l'article 18, la mise en évidence de l'article 21, l'ordre et les unités du tableau nutritionnel de l'annexe XV. Mais la conformité dépend aussi de votre situation, et nous ne la certifions pas : c'est vous l'exploitant, et l'application vous aide à rédiger, elle n'atteste de rien. Chaque information réglementaire affichée porte sa source et sa date.",
      },
      {
        q: "Suis-je obligé de faire la déclaration nutritionnelle ?",
        a: "Pas forcément. Le règlement prévoit des exemptions, notamment pour les denrées de fabrication artisanale fournies en faibles quantités directement au consommateur final. Beaucoup d'artisans en relèvent, c'est pourquoi ce bloc est désactivé par défaut chez nous. Le questionnaire enregistre ce que vous déclarez, daté ; nous ne qualifions jamais votre situation à votre place.",
      },
      {
        q: "D'où viennent les valeurs nutritionnelles ?",
        a: "De vos propres matières en priorité : celles que vous avez saisies ou lues sur l'étiquette de votre fournisseur. À défaut, Gramme vous propose celles de la table Ciqual de l'ANSES, une base publique de 3 484 aliments. Une valeur venue de Ciqual reste marquée « à vérifier » tant que vous ne l'avez pas confirmée : un praliné maison n'est pas le praliné moyen d'une table statistique.",
      },
    ],
  },
  {
    slug: "hygiene-haccp",
    name: "Hygiène & HACCP",
    icon: "thermo",
    summary:
      "Vos relevés de températures, votre plan de nettoyage et vos étiquettes de lot, pris depuis le téléphone et imprimables en registre.",
    bullets: [
      "Relevés de températures avec vos enceintes, vos bornes et vos heures de relevé",
      "Un écart ne s'enregistre pas sans l'action corrective qui va avec",
      "Plan de nettoyage par zone et par fréquence, pointé d'un geste",
      "Étiquettes de lot et dates limites, contrôle à réception depuis la facture scannée",
      "Registres imprimables sur la période de votre choix, et impossibles à réécrire",
    ],
    image: {
      src: "/images/app/haccp-temperatures.png",
      alt: "Écran des relevés de températures dans Gramme : les enceintes, leurs bornes et la courbe sur trente jours",
    },
    h1: "Hygiène et HACCP : le cahier de relevés qui ne se perd pas",
    metaTitle: "Logiciel HACCP boulangerie : relevés et nettoyage | Gramme",
    metaDescription:
      "Relevés de températures, plan de nettoyage, étiquettes de lot et contrôles à réception, pris depuis le téléphone et imprimables en registre.",
    keywords: [
      "logiciel HACCP boulangerie",
      "relevé de température boulangerie",
      "application relevé température chambre froide",
      "plan de nettoyage boulangerie",
      "registre HACCP numérique",
      "traçabilité lot pâtisserie",
      "étiquette DLC boulangerie",
      "contrôle à réception marchandise",
    ],
    intro:
      "Le cahier de relevés est le document le plus demandé lors d'un contrôle, et le plus mal tenu de tous : non par négligence, mais parce qu'il est accroché à un mur, loin des mains et des fours. On le remplit le dimanche soir, de mémoire, et tout le monde le sait. Gramme le déplace là où vous êtes déjà : sur le téléphone dans votre poche.",
    sections: [
      {
        title: "Vos enceintes, vos bornes, vos horaires",
        text: "Vous déclarez une fois chaque chambre froide, congélateur, vitrine ou friteuse, avec le minimum et le maximum que VOUS fixez, l'application ne vous impose aucune valeur, elle compare vos relevés aux vôtres. Vous indiquez aussi les heures auxquelles le relevé se prend, sept heures et dix-sept heures par exemple. C'est ce détail qui change tout : au lieu d'un vague « trois relevés en retard », l'écran dit que le relevé de dix-sept heures manque sur la chambre froide pâtisserie. Le premier se néglige, le second se traite.",
      },
      {
        title: "Un écart appelle son action corrective",
        text: "Quand la valeur saisie sort de vos bornes, le relevé ne part pas seul : l'écran demande ce que vous avez fait (denrées transférées, groupe froid relancé, technicien appelé) et n'enregistre rien tant que la réponse est vide. C'est exactement ce qu'un contrôleur cherche : non pas l'absence d'écart, qui n'existe dans aucun laboratoire, mais la preuve que l'écart a été vu et traité. Les bornes appliquées sont figées avec le relevé : remonter un plafond demain ne repeint pas l'historique d'hier.",
      },
      {
        title: "Le plan de nettoyage se pointe, il ne se recopie pas",
        text: "Vous listez ce qui se nettoie, dans quelle zone, à quelle fréquence et avec quel produit. Ensuite, chaque tâche se pointe d'un geste, et ce qui est en retard remonte en tête de liste. Chaque pointage garde le nom de la personne et la date, et retirer une tâche du plan n'efface aucun pointage passé : l'historique garde son libellé.",
      },
      {
        title: "Les lots, les dates limites et les réceptions",
        text: "Une préparation qui sort du froid sans numéro de lot n'est pas traçable. Depuis une fiche, depuis une fournée que vous venez de valider ou depuis la liste de vos préparations, l'étiquette sort avec son numéro de lot, sa date limite et votre prénom déjà remplis, aux dimensions de vos rouleaux : 57 × 40, 100 × 50, ou en planche A4. Côté entrées, le contrôle à réception part de la facture que vous avez déjà scannée : le fournisseur et la date sont repris, il ne reste qu'une température et deux cases.",
      },
      {
        title: "Un registre qui ne se réécrit pas",
        text: "Températures, nettoyages, lots, impressions et réceptions s'impriment en registre, sur la période de votre choix, avec la recherche et les totaux. Et rien ne s'y efface : une erreur de saisie ne se supprime pas, elle s'annule avec un motif, et les deux lignes restent visibles. Même un administrateur du compte ne peut pas réécrire une ligne passée. C'est cette impossibilité qui fait la valeur d'un registre : un journal qu'on peut corriger après coup ne prouve rien.",
      },
    ],
    faq: [
      {
        q: "Gramme rend-il ma boulangerie conforme ?",
        a: "Non, et personne ne le peut à votre place. Un logiciel enregistre vos relevés, les horodate, les nomme et les rend imprimables ; il ne rédige pas votre plan de maîtrise sanitaire et n'atteste d'aucune conformité. Vous restez l'exploitant responsable. Ce que Gramme garantit, c'est que ce qui a été saisi ne peut plus être modifié, et c'est précisément ce qu'un cahier papier ne garantit pas.",
      },
      {
        q: "Puis-je remplacer mon cahier de relevés papier ?",
        a: "Oui, à condition d'y retrouver la même chose qu'un cahier bien tenu : la valeur, l'heure, l'enceinte et la personne. Chaque relevé porte ces quatre informations, et le registre s'imprime quand on vous le demande. Beaucoup d'artisans gardent le papier quelques semaines en parallèle, le temps de vérifier que l'habitude a pris, c'est une prudence raisonnable, et nous ne la déconseillons pas.",
      },
      {
        q: "Est-ce compris dans l'abonnement ou facturé en plus ?",
        a: "C'est compris dans l'offre Pro à 89 € HT par mois, avec le reste. Il n'y a ni module à activer, ni option à 49 €, ni supplément par enceinte ou par utilisateur. Ce que nous livrons ensuite entre dans votre offre de la même façon : le produit avance, votre abonnement ne bouge pas.",
      },
      {
        q: "Un apprenti peut-il prendre les relevés ?",
        a: "Oui, et c'est prévu ainsi. Relever une température ou pointer un nettoyage est le geste d'un salarié : le rôle Opérateur y donne accès. En revanche, fixer les bornes d'une enceinte ou composer le plan de nettoyage est une décision : cela reste réservé à un administrateur ou à un gestionnaire. Chaque relevé garde le nom de qui l'a pris.",
      },
      {
        q: "Que se passe-t-il si je retire une chambre froide ?",
        a: "Son historique reste entier et continue de la nommer. Toutes les lignes de registre figent le nom de ce qu'elles décrivent au moment du geste, pas seulement une référence : retirer une enceinte, une tâche de nettoyage ou une fiche recette ne rend jamais l'historique anonyme.",
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
      src: "/images/app/mercuriale.png",
      alt: "La mercuriale dans Gramme : prix de référence, fournisseur et tendance de chaque matière première",
    },
    h1: "Scan de factures et mercuriale fournisseurs",
    metaTitle: "Scan de factures et mercuriale | Gramme",
    metaDescription:
      "Photographiez une facture fournisseur : les prix entrent seuls dans votre mercuriale et remontent jusqu'au coût de chaque recette.",
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
      src: "/images/app/production.png",
      alt: "Planning de production dans Gramme, avec la fournée du jour et le calendrier du mois",
    },
    h1: "Planning de production pour boulangerie et pâtisserie",
    metaTitle: "Planning de production boulangerie | Gramme",
    metaDescription:
      "Les quantités du jour, les besoins matières consolidés, la feuille d'atelier et le coût de la fournée, au même endroit.",
    keywords: [
      "planning production boulangerie",
      "logiciel production pâtisserie",
      "coût de production",
      "organisation laboratoire boulangerie",
    ],
    intro:
      "Décider ce qu'on produit demain se fait souvent de tête, ou sur un carnet. Cela fonctionne : jusqu'au jour où il manque une matière première à cinq heures du matin, ou jusqu'à ce qu'on s'aperçoive qu'une gamme entière tourne à perte.",
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
    slug: "equilibrage-recette",
    name: "Équilibrage de recette",
    icon: "flask",
    summary:
      "Glaces, sorbets, ganaches et bonbons : Gramme lit la composition de vos matières et vous dit si la recette tient, avant de la couler.",
    bullets: [
      "Sucres, matières grasses, extrait sec, POD et PAC calculés depuis vos matières premières",
      "Une fourchette par indicateur, avec ce qu'un écart provoque en bouche ou en vitrine",
      "Température de service et courbe de congélation estimées pour les glaces et les sorbets",
      "Activité de l'eau et conservation indicative pour les ganaches et les bonbons",
      "Un brouillon « et si » : on change une quantité, tout se recalcule sans toucher à la fiche",
    ],
    image: {
      src: "/images/app/equilibrage.png",
      alt: "Équilibrage d'une crème glacée dans Gramme : sucres, extrait sec, pouvoir sucrant, pouvoir anticongelant et courbe de congélation",
    },
    h1: "Équilibrage de recette pour la glacerie et la chocolaterie",
    metaTitle: "Équilibrage de recette : glaces, sorbets, ganaches | Gramme",
    metaDescription:
      "Équilibrez vos glaces, sorbets, ganaches et bonbons : POD, PAC, extrait sec, activité de l'eau et courbe de congélation calculés à partir de vos matières premières.",
    keywords: [
      "équilibrage recette glace",
      "calcul PAC POD glace",
      "équilibrage ganache chocolat",
      "activité de l'eau ganache",
      "logiciel équilibrage glacier",
    ],
    intro:
      "Une glace trop dure, une ganache qui tranche, un sorbet qui cristallise : ces défauts ne se voient pas sur une fiche technique, ils se lisent dans les rapports entre le sucre, l'eau et la matière grasse. L'équilibrage est le calcul que les glaciers et les chocolatiers font depuis toujours sur un carnet. Gramme le fait à partir de la composition réelle de vos matières, et le refait à chaque fois que vous changez une quantité.",
    sections: [
      {
        title: "Les indicateurs de votre métier, pas des moyennes",
        text: "Le type de produit change tout : une crème glacée se juge sur ses sucres, son extrait sec dégraissé du lait, son pouvoir sucrant et son pouvoir anticongelant ; une ganache se juge sur son eau, ses matières grasses et son activité de l'eau. Gramme propose le bon jeu de repères d'après la catégorie de la fiche, et affiche pour chacun la fourchette du métier et ce qu'un écart donne concrètement : « trop bas : glace dure et fade », « trop haut : molle et écœurante ».",
      },
      {
        title: "Calculé depuis vos matières, pas depuis une table générique",
        text: "Chaque matière première porte sa composition : sucres, dont saccharose, dextrose, glucose et inverti, matières grasses, dont beurre de cacao, protéines, extrait sec. Le calcul part de là. Changer de couverture ou passer d'un sucre à un autre déplace les indicateurs immédiatement, parce que c'est votre fiche qui a changé, pas une hypothèse. La part de couverture des matières renseignées est affichée : vous savez sur quoi le calcul s'appuie.",
      },
      {
        title: "La tenue en vitrine se prévoit",
        text: "Pour une glace ou un sorbet, Gramme estime la température de service, la part d'eau gelée à -11 °C et à -18 °C, et trace la courbe de congélation. Vous voyez tout de suite si le mix tiendra dans votre bac ou s'il sera dur à la sortie. Pour une ganache ou un bonbon, l'activité de l'eau estimée donne une conservation indicative, que vous pouvez corriger avec la mesure de votre appareil, si vous en avez un.",
      },
      {
        title: "Essayer sans rien casser",
        text: "Le brouillon « et si » recalcule tous les indicateurs pendant que vous déplacez des grammes, sans rien enregistrer. C'est la manière d'apprendre son mix : ajouter trente grammes de dextrose et voir le PAC monter dit plus qu'un tableau. Quand le réglage vous convient, vous l'appliquez à la fiche ; sinon vous fermez, et rien n'a bougé.",
      },
    ],
    faq: [
      {
        q: "Comment calculer le PAC et le POD d'une glace ?",
        a: "Le pouvoir anticongelant (PAC) et le pouvoir sucrant (POD) s'obtiennent en pondérant chaque sucre de la recette par son coefficient propre : le dextrose abaisse davantage le point de congélation que le saccharose, le glucose sucre moins. Gramme fait ce calcul à partir de la composition de vos matières premières et le compare aux repères de la profession, sans que vous ayez à tenir la table.",
      },
      {
        q: "Gramme remplace-t-il un mesureur d'activité de l'eau ?",
        a: "Non, et il ne le prétend pas. L'activité de l'eau affichée est une estimation calculée d'après les sucres dissous et l'eau de la recette : elle sert à situer une ganache avant de la produire. Si vous mesurez à l'appareil, vous enregistrez la valeur mesurée et c'est elle qui fait foi. La durée de vie d'un produit reste sous la responsabilité de l'atelier, et un test microbiologique tranche.",
      },
      {
        q: "L'équilibrage est-il disponible pour tous les ateliers ?",
        a: "C'est une fonction que l'on active quand elle sert : un boulanger n'a rien à faire d'une courbe de congélation. Elle s'allume dans les réglages de l'atelier, et l'onglet Équilibrage apparaît alors sur les fiches concernées.",
      },
    ],
  },
  {
    slug: "previsionnel-production",
    name: "Prévisionnel de production",
    icon: "calendar",
    summary:
      "Gramme reconstitue ce que vous avez réellement vendu jour par jour, et propose les quantités de la semaine à venir.",
    bullets: [
      "La demande reconstituée à partir des ventes, des pertes et des invendus",
      "Comparaison à jour de semaine égale, jours fériés et vacances repérés",
      "Une rupture avant la fermeture ne compte pas comme une petite journée",
      "Arrondi à votre unité de fabrication : plaques, bacs, moules",
      "La semaine se prépare en un geste, et reste modifiable ligne par ligne",
    ],
    image: {
      src: "/images/app/previsions.png",
      alt: "Prévisions de production sur sept jours dans Gramme, produit par produit, avec l'explication de chaque quantité proposée",
    },
    h1: "Prévisionnel de production pour boulangerie et pâtisserie",
    metaTitle: "Prévisionnel de production : quantités à produire | Gramme",
    metaDescription:
      "Prévoyez les quantités à produire jour par jour à partir de vos ventes réelles : jours comparables, fériés, ruptures et arrondi à votre unité de fabrication.",
    keywords: [
      "prévisionnel de production boulangerie",
      "prévoir les quantités à produire",
      "logiciel gestion de production boulangerie",
      "réduire les invendus boulangerie",
      "planification production pâtisserie",
    ],
    intro:
      "Combien de baguettes demain ? La réponse se trouve dans ce que vous avez vendu, à condition de savoir la lire. Gramme reconstitue la demande réelle de chaque produit, jour par jour, et propose une quantité pour chacun des sept jours qui viennent, avec la phrase qui explique d'où elle sort.",
    sections: [
      {
        title: "La demande, pas les ventes",
        text: "Vendre douze pièces ne veut pas dire qu'on en demandait douze. Si le produit était épuisé à onze heures, la demande était plus haute et personne ne le sait. Gramme distingue ce qui a été vendu, ce qui a été perdu, ce qui est revenu et ce qui est resté invendu, et note l'heure d'épuisement quand il y en a une. Une journée écourtée par une rupture n'est plus comptée comme une petite journée : elle est signalée comme incomplète.",
      },
      {
        title: "Un mardi se compare à des mardis",
        text: "La proposition part des mêmes jours de semaine, sur les semaines précédentes, en écartant les valeurs extrêmes. Les jours fériés sont calculés, pas saisis : le lundi de Pâques, l'Ascension et le 15 août ne se comparent pas à un lundi ordinaire, et la veille d'un jour férié non plus. Les jours de fermeture de votre atelier sont retirés du calcul.",
      },
      {
        title: "Arrondi à ce que vous fabriquez vraiment",
        text: "On ne coule pas quarante-sept entremets : on remplit trois cadres de vingt. Chaque fiche peut déclarer son unité de fabrication (plaque, bac, moule, cadre), son pas, et une marge de sécurité. La proposition est alors exprimée dans cette unité, avec le détail du calcul en clair : « un besoin de 47 pièces deviendrait 60 (marge de 8, arrondi à 3 bacs de 20) ».",
      },
      {
        title: "Une proposition, pas une décision",
        text: "Rien n'est envoyé en production sans vous. « Préparer la semaine » crée des fournées prévisionnelles, reconnaissables et modifiables, que vous validez ou corrigez ligne par ligne. Reproposer la semaine ne touche jamais à ce que vous avez déjà planifié à la main : seules les fournées prévisionnelles sont remplacées.",
      },
    ],
    faq: [
      {
        q: "Combien de temps faut-il avant que les prévisions soient utiles ?",
        a: "Il faut de l'historique : quelques semaines de sorties de vitrine suffisent à comparer des jours semblables. Tant qu'un produit n'a pas assez de jours comparables, Gramme le dit au lieu d'inventer un chiffre : un produit sans historique n'a pas de proposition, il a une case vide.",
      },
      {
        q: "Les jours fériés et les vacances sont-ils pris en compte ?",
        a: "Les jours fériés français sont calculés, y compris ceux qui dépendent de Pâques, et signalés dans la proposition. Les jours d'ouverture de l'atelier sont paramétrables, et les journées de fermeture sont exclues des comparaisons au lieu d'être lues comme des ventes nulles.",
      },
      {
        q: "Est-ce que cela réduit vraiment les invendus ?",
        a: "Cela rend les invendus visibles et chiffrés, ce qui est la condition pour les réduire. Vous voyez ce qu'un produit a coûté en matière sans être vendu, et vous ajustez la quantité proposée. Gramme ne décide pas à votre place : il vous donne la mesure que le carnet ne donnait pas.",
      },
    ],
  },
  {
    slug: "vitrine-ventes-produits",
    name: "Vitrine & résultat par produit",
    icon: "store",
    summary:
      "Ce que vous avez fabriqué, ce que vous en avez fait, ce que ça a rapporté : le chaînon entre la production et la caisse.",
    bullets: [
      "Sorties de vitrine : vendu, perdu, offert, retourné, invendu",
      "Le stock de produits finis se tient tout seul, lot par lot",
      "Marge réelle par produit, pas seulement par recette",
      "Bilan de fin de journée, avec l'heure d'épuisement quand il y a rupture",
      "Écart avec la caisse signalé, jamais corrigé en silence",
    ],
    image: {
      src: "/images/app/vitrine.png",
      alt: "Écran Vitrine de Gramme : les produits finis en vitrine, lot par lot, avec les sorties de la journée",
    },
    h1: "Vitrine, stock de produits finis et résultat par produit",
    metaTitle: "Vitrine et marge réelle par produit | Gramme",
    metaDescription:
      "Suivez ce qui sort de votre vitrine (vendu, perdu, invendu), tenez le stock de produits finis et lisez la marge réellement dégagée par chaque produit.",
    keywords: [
      "suivi des ventes boulangerie",
      "stock produits finis pâtisserie",
      "marge réelle par produit",
      "gestion des invendus boulangerie",
      "logiciel rentabilité boulangerie",
    ],
    intro:
      "Un logiciel qui sait ce que vous fabriquez et ce que vous encaissez, mais rien entre les deux, laisse passer l'essentiel : on peut vendre un produit à perte pendant six mois sans qu'aucun écran ne le dise. La vitrine est ce chaînon manquant.",
    sections: [
      {
        title: "Ce qui sort, et pourquoi",
        text: "Chaque sortie porte son motif : vendu, offert, perdu, retourné, invendu en fin de journée. Un produit cassé et un produit vendu ne racontent pas la même chose, et les mélanger fausse tout le reste. La saisie se fait sur le téléphone ou la tablette, au comptoir, en quelques touches.",
      },
      {
        title: "Le stock de produits finis, sans inventaire du soir",
        text: "Une fournée validée entre en vitrine, une sortie l'en retire : le stock de produits finis se tient de lui-même, lot par lot, avec sa date de fabrication. Vous savez ce qu'il reste, de quand cela date, et ce que cela représente en valeur.",
      },
      {
        title: "La marge réelle, celle qui inclut ce qui n'a pas été vendu",
        text: "La marge théorique d'une fiche suppose que tout part. Le résultat par produit, lui, rapporte ce qui a été encaissé au coût de tout ce qui a été fabriqué, pertes et invendus compris. C'est ce chiffre-là qui dit si un produit mérite sa place en vitrine.",
      },
      {
        title: "L'écart avec la caisse se dit",
        text: "Quand le total des sorties ne correspond pas à ce que la caisse a enregistré, Gramme l'affiche au lieu de choisir un chiffre. Un écart est une information : il vient d'une saisie oubliée, d'un produit non référencé ou d'une erreur de caisse, et c'est à vous de trancher.",
      },
    ],
    faq: [
      {
        q: "Faut-il saisir chaque vente une par une ?",
        a: "Non. La vitrine se tient par produit et par lot : on saisit ce qui sort, quand cela sort, en quelques touches, et le bilan de fin de journée solde le reste en invendus. Là où une caisse est connectée, les ventes remontent directement et la saisie ne sert plus qu'aux pertes et aux offerts.",
      },
      {
        q: "Que devient un invendu dans les calculs ?",
        a: "Il est compté comme fabriqué et non vendu : sa matière pèse sur le résultat du produit, et l'information nourrit le prévisionnel du même jour de la semaine suivante. Un invendu n'est jamais silencieux.",
      },
    ],
  },
  {
    slug: "comptabilite-charges",
    name: "Comptabilité & charges",
    icon: "euro",
    summary:
      "Le journal d'achats, le journal de ventes, la TVA et les charges fixes, dans le format que votre comptable attend.",
    bullets: [
      "Journaux d'achats et de ventes par mois, pièces jointes comprises",
      "Récapitulatif de TVA par taux",
      "Charges fixes suivies (loyer, énergie, assurance) et reprises dans le coût de revient",
      "Contrôles avant envoi : ce qui manque est listé, pas deviné",
      "Le dossier du mois s'exporte d'un bloc",
    ],
    image: {
      src: "/images/app/comptabilite.png",
      alt: "Écran Comptabilité de Gramme : contrôles du mois, journaux d'achats et de ventes, charges fixes",
    },
    h1: "Comptabilité d'une boulangerie : journaux, TVA et charges",
    metaTitle: "Comptabilité boulangerie : journaux, TVA, charges | Gramme",
    metaDescription:
      "Préparez le dossier de votre comptable : journal d'achats, journal de ventes, récapitulatif de TVA, charges fixes et contrôles de ce qui manque.",
    keywords: [
      "comptabilité boulangerie",
      "journal des achats boulangerie",
      "TVA boulangerie pâtisserie",
      "charges fixes boulangerie",
      "dossier comptable artisan",
    ],
    intro:
      "Vos factures sont déjà dans Gramme : elles ont servi à mettre à jour vos prix. Les reprendre une seconde fois pour le comptable est un travail que personne ne devrait refaire. Le mois se ferme donc à partir de ce qui est déjà là.",
    sections: [
      {
        title: "Les journaux se remplissent tout seuls",
        text: "Chaque facture scannée alimente le journal d'achats du mois, avec son fournisseur, son montant, sa TVA et sa pièce. Les ventes remontent de la même façon. Le récapitulatif de TVA se ventile par taux, sans ressaisie.",
      },
      {
        title: "Les charges fixes ne sont pas un réglage",
        text: "Le loyer, l'électricité, l'assurance : ce sont des dépenses, elles se lisent à côté des factures qui les justifient, et elles entrent dans le coût de revient de chacune de vos fiches. Elles se saisissent ici, et la quittance se scanne au même endroit.",
      },
      {
        title: "Ce qui manque est dit avant l'envoi",
        text: "Une facture sans pièce jointe, un mois sans ventes, un fournisseur non rattaché : les contrôles listent ce qui manque avant que le dossier parte. C'est l'aller-retour avec le cabinet qu'on évite, pas la comptabilité qu'on remplace.",
      },
    ],
    faq: [
      {
        q: "Gramme remplace-t-il mon logiciel de comptabilité ?",
        a: "Non. Gramme prépare le dossier : journaux, ventilation de TVA, pièces justificatives et contrôles. Votre comptable garde son outil, et reçoit un mois complet au lieu d'une boîte à chaussures. Des exports vers les outils courants existent.",
      },
      {
        q: "Les charges fixes changent-elles mes coûts de revient ?",
        a: "Oui, si vous le voulez. Les charges saisies peuvent être réparties sur la production pour donner un coût de revient qui ne s'arrête pas à la matière. Sans elles, le calcul reste celui de la matière et de la main-d'œuvre.",
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
      src: "/images/app/stock.png",
      alt: "Gestion du stock dans Gramme : articles suivis et valeur totale du stock",
    },
    h1: "Gestion de stock pour laboratoire artisanal",
    metaTitle: "Gestion de stock et inventaire | Gramme",
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
      src: "/images/app/fournisseurs.png",
      alt: "Carnet fournisseurs dans Gramme, avec les coordonnées et les matières livrées",
    },
    h1: "Carnet fournisseurs pour boulangerie et pâtisserie",
    metaTitle: "Gestion des fournisseurs boulangerie | Gramme",
    metaDescription:
      "Centralisez vos fournisseurs : coordonnées, produits affiliés, volume d'achat estimé et lien direct avec la mercuriale et les factures scannées.",
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
      {
        q: "Faut-il ressaisir mes fournisseurs un par un ?",
        a: "Non. Un fournisseur se crée tout seul à la première facture scannée : son nom, ses coordonnées et ses références sont repris de la pièce. Vous corrigez une fiche si elle est incomplète, vous ne la construisez pas.",
      },
      {
        q: "Puis-je voir ce que je dépense chez chacun ?",
        a: "Oui. Chaque fournisseur porte le détail de ce que vous lui achetez : montant par mois, matières concernées et évolution de ses prix. C'est la base d'une négociation, et de la décision de faire jouer la concurrence sur une matière précise.",
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
      src: "/images/app/statistiques.png",
      alt: "Statistiques d'achats dans Gramme : dépense par mois et répartition par fournisseur",
    },
    h1: "Suivi des marges en temps réel",
    metaTitle: "Calcul et suivi des marges | Gramme",
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

/** Le nombre de modules, en toutes lettres, pour les phrases qui l'annoncent. */
export const nombreModules = nombreEnLettres(features.length);
