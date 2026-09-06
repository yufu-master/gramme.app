/**
 * Les pages « quel logiciel pour… ».
 *
 * POURQUOI ELLES EXISTENT. La sonde de visibilité IA a mesuré, le 31/08/2026,
 * que Gramme est cité sur 3 questions de marque sur 3 et sur 1 seule question
 * de catégorie sur 6. Le mécanisme est mécanique et vérifiable : le moteur cite
 * Gramme EXACTEMENT quand `gramme.app` figure dans les sources qu'il a
 * récupérées, jamais autrement. Ce n'est pas un défaut de notoriété, c'est un
 * défaut de RÉCUPÉRATION : sur « quel logiciel pour calculer un coût de
 * revient », aucune de nos pages ne remonte, donc nous n'existons pas.
 *
 * LA PREUVE VIENT DE NOS PROPRES DONNÉES. La seule question de catégorie qu'on
 * gagne est celle des allergènes, et c'est la seule intention couverte par DEUX
 * pages : la page module et un guide. Là où il n'y en a qu'une, on perd. Là où
 * il n'y en a aucune, on n'apparaît pas. `/logiciel-patisserie` existait,
 * `/logiciel-boulangerie` n'existait pas.
 *
 * UNE SEULE IMPLÉMENTATION. Cinq pages écrites à la main auraient divergé au
 * premier ajustement, comme les quatre copies du coût de recette avant qu'on
 * les réunisse. Le contenu vit ici, le rendu dans `PageLogiciel`, et chaque
 * route ne fait que désigner son entrée. Les adresses restent plates
 * (`/logiciel-boulangerie` et non `/logiciel/boulangerie`) : c'est la forme que
 * les concurrents qui gagnent utilisent, et elle se lit mieux dans un résultat.
 *
 * CE QU'ON N'ÉCRIT PAS. Aucune de ces pages ne dit « conforme », « certifié »
 * ni « validé » : trois tests balaient ce vocabulaire dans les documents que le
 * produit fabrique, et une page de vente ne peut pas promettre ce que l'outil
 * refuse d'écrire. Le tiret cadratin est proscrit dans la prose publiée.
 */

export type PageLogiciel = {
  /** Adresse plate, sans segment dynamique. */
  path: string;
  /** Libellé court : fil d'Ariane, navigation, liens connexes. */
  nom: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  /** Deux paragraphes d'ouverture : le problème, puis notre réponse. */
  intro: string[];
  /**
   * Une VRAIE capture du produit, prise dans `/images/app/`, et jamais un
   * rendu générique : la 22ᵉ session a retiré du site une image générée dont
   * le texte disait « Scanner une fecture » et « Dormière mies à jour », en
   * pleine largeur sur la seule section qui montrait le produit.
   *
   * Ces captures font toutes 1920 × 1200, ce que `imageSociale` déclare. Les
   * dimensions annoncées ne sont pas décoratives : Facebook et LinkedIn
   * recadrent d'après le RATIO DÉCLARÉ, pas d'après le fichier. Utiliser ici
   * une image d'un autre format sans corriger la déclaration produirait une
   * vignette rognée de travers, et personne ne s'en apercevrait avant de voir
   * un partage.
   */
  image: { src: string; alt: string };
  /** Ce qui casse chez le lecteur avant qu'il ne cherche un outil. */
  problemes: { titre: string; texte: string }[];
  /** Ce que l'outil fait, précisément, pour chacun de ces problèmes. */
  reponses: { titre: string; texte: string }[];
  /**
   * Un exemple CHIFFRÉ, que le lecteur peut refaire à la calculatrice.
   *
   * C'est ce qui fait la force de `/logiciel-patisserie` depuis toujours : son
   * entremets à quatre niveaux. Le gabarit ne savait pas le porter, et le
   * commentaire de `PageLogiciel.tsx` en concluait qu'il fallait laisser cette
   * page à part. Il vaut mieux que le gabarit apprenne : une page métier sans
   * chiffre qu'on peut vérifier reste une brochure, et un lecteur qui pose sa
   * calculatrice est exactement le client qu'on cherche.
   *
   * Facultatif : une page d'intention (« logiciel scan factures ») n'en a pas
   * besoin.
   */
  exemple?: {
    titre: string;
    intro: string;
    entetes: string[];
    lignes: string[][];
    /** Ce que le tableau ne dit pas, et qu'il faut dire. */
    note: string;
  };
  /** Modules à mettre en avant (slugs de `features`). */
  modules: string[];
  /** La FAQ alimente aussi le schéma FAQPage, très corrélé aux citations IA. */
  faq: { q: string; a: string }[];
  /** Guides et articles à relier : le maillage interne fait remonter les deux. */
  liens: { href: string; label: string }[];
};

export const pagesLogiciel: PageLogiciel[] = [
  // ===========================================================================
  {
    path: "/logiciel-chocolaterie",
    nom: "Logiciel chocolaterie",
    metaTitle: "Logiciel chocolaterie · coûts, Aw et étiquettes",
    metaDescription:
      "Logiciel pour chocolaterie artisanale : coût de revient au bonbon, activité de l'eau d'une ganache, allergènes propagés et étiquettes à la taille de la boîte.",
    keywords: [
      "logiciel chocolaterie",
      "logiciel gestion chocolaterie",
      "logiciel chocolatier",
      "coût de revient bonbon chocolat",
      "activité de l'eau ganache",
      "étiquette chocolat allergènes",
      "gestion chocolaterie artisanale",
    ],
    h1: "Le logiciel qui compte au bonbon, pas à la plaque",
    intro: [
      "Une chocolaterie fabrique peu de masse et beaucoup de références. Une plaque de soixante-dix bonbons part en trois recettes de ganache, deux couvertures et un praliné maison, et le prix de la boîte de seize se décide au ressenti. Le beurre de cacao a doublé en deux ans, la boîte et le ruban coûtent parfois plus que ce qu'ils contiennent, et personne n'a le temps de refaire le calcul par pièce.",
      "Gramme descend jusqu'à la pièce. Chaque sous-recette garde son rendement réel, chaque emballage entre dans le coût, et l'étiquette de la boîte sort avec la composition et les allergènes tels qu'ils remontent des matières.",
    ],
    image: {
      src: "/images/app/recette-etiquetage.png",
      alt: "Allergènes et valeurs nutritionnelles d'une recette dans le logiciel de chocolaterie Gramme",
    },
    problemes: [
      {
        titre: "Le coût d'un bonbon se perd entre la masse et la pièce",
        texte:
          "La ganache se pèse au kilo, la couverture au kilo, et le bonbon se vend à l'unité. Entre les deux il y a un rendement de moulage, des chutes, et une caissette. Sans ce chemin complet, le prix de la boîte de seize repose sur une intuition, et l'intuition ne suit pas la hausse du beurre de cacao.",
      },
      {
        titre: "La conservation se décide au doigt mouillé",
        texte:
          "Une ganache à forte teneur en eau ne tient pas ce que tient un praliné. La question se joue sur l'activité de l'eau, que peu d'ateliers mesurent, et la durée annoncée sur l'étiquette finit par être celle du voisin.",
      },
      {
        titre: "Les allergènes se recopient de boîte en boîte",
        texte:
          "Un praliné maison entre dans quatre ganaches, qui entrent dans huit boîtes. Quand la pâte de noisette change de fournisseur, il faut retrouver toutes les étiquettes concernées, et personne ne sait dire lesquelles sans rouvrir chaque fiche.",
      },
      {
        titre: "Les étiquettes de boîte ne sont jamais à la bonne taille",
        texte:
          "Une boîte de huit, une boîte de seize, un ballotin, une tablette : quatre formats, quatre gabarits refaits à la main dans un traitement de texte, et vingt impressions séparées pour vingt références.",
      },
    ],
    reponses: [
      {
        titre: "Le coût descend jusqu'à la pièce, emballage compris",
        texte:
          "Les sous-recettes s'emboîtent sur plusieurs niveaux et chacune garde son rendement réel : la ganache dans le bonbon, le praliné dans la ganache. L'emballage entre dans le coût de revient au même titre que la matière, et le prix de vente se lit en marge et en coefficient, pas seulement en euros.",
      },
      {
        titre: "L'activité de l'eau, estimée depuis la composition",
        texte:
          "L'onglet Équilibrage calcule l'eau, l'extrait sec, la matière grasse dont le beurre de cacao, les sucres, et l'activité de l'eau par la formule de Grover. Il annonce son incertitude et il s'efface devant une mesure faite à l'appareil, qui se saisit et qui prime. La durée de conservation qui en découle est une estimation d'atelier, jamais une mention d'étiquette.",
      },
      {
        titre: "Un allergène remonte tout seul, et il bloque quand il manque",
        texte:
          "Les allergènes se propagent à travers les sous-recettes jusqu'au produit fini. Une matière dont personne n'a renseigné les allergènes n'est pas traitée comme une matière sans allergène : elle est nommée, et elle bloque l'étiquette tant que la question n'est pas tranchée.",
      },
      {
        titre: "Les étiquettes de la gamme, à la taille de la boîte",
        texte:
          "Les dimensions se donnent au millimètre, la planche se compose sur une feuille A4, et toute une gamme s'imprime en une seule fois avec le nombre d'exemplaires voulu par référence. Ce qui manque à une étiquette est signalé avant l'impression, pas après.",
      },
    ],
    exemple: {
      titre: "Une boîte de seize, du praliné au ruban",
      intro:
        "Les chiffres ci-dessous sont un exemple de lecture, pas une mesure prise chez quelqu'un. Ils montrent le chemin que suit un coût quand la fiche est complète : chaque ligne se déduit de la précédente, et vous pouvez la refaire à la calculatrice.",
      entetes: ["Étage", "Base", "Coût", "Ce que Gramme en fait"],
      lignes: [
        ["Praliné noisette", "1 kg produit", "18,40 €", "sous-recette, rendement réel après torréfaction"],
        ["Ganache praliné", "1 kg, dont 220 g de praliné", "14,90 €", "le praliné entre à son coût, pas à son prix d'achat"],
        ["Bonbon moulé", "12 g de ganache, 6 g de couverture", "0,29 €", "coût matière à la pièce"],
        ["Boîte de 16", "16 bonbons", "4,64 €", "matière seule"],
        ["Emballage", "boîte, cavité, ruban", "1,35 €", "l'emballage compte dans le coût de revient"],
        ["Coût de revient", "matière et emballage", "5,99 €", "hors main d'œuvre"],
        ["Prix de vente", "22,00 € TTC, TVA 5,5 %", "20,85 € HT", "marge 14,86 €, coefficient 3,48"],
      ],
      note: "Ce que ce tableau ne dit pas : la main d'œuvre, que vous renseignez par un temps de préparation et un coût horaire chargé, et qui s'ajoute alors au coût de revient. Le ratio matière, lui, ne compte que les matières : c'est ce qui le rend comparable au repère du métier.",
    },
    modules: ["fiches-techniques", "allergenes-etiquetage", "marges-et-decisions", "scan-factures-mercuriale"],
    faq: [
      {
        q: "Gramme gère-t-il le tempérage du chocolat ?",
        a: "Non, et c'est délibéré. Il n'y a ni courbe de cristallisation, ni calcul d'ensemencement, ni rendement de moule. Le tempérage se joue à la tempéreuse et à la main, et un logiciel qui prétendrait le piloter depuis un tableau de bord se tromperait de métier. Gramme s'occupe de ce qui se compte : le coût, la composition, l'étiquette et la traçabilité.",
      },
      {
        q: "L'activité de l'eau calculée peut-elle servir à fixer une DLC ?",
        a: "Non. C'est une estimation à partir de la composition, avec une incertitude annoncée, et elle ne voit ni le pH, ni l'alcool, ni le conditionnement. Elle sert à comparer deux formulations et à savoir dans quelle direction pousser une recette. La durée de vie reste sous votre responsabilité, et un test microbiologique fait foi.",
      },
      {
        q: "Peut-on imprimer une étiquette pour un ballotin de 250 g ?",
        a: "Oui. Les dimensions se donnent au millimètre, entre 15 et 297, et la planche se compose ensuite sur une feuille A4 avec le décalage voulu. Une gamme entière s'imprime en une fois, avec le nombre d'exemplaires par référence.",
      },
      {
        q: "Que se passe-t-il si les allergènes d'une matière ne sont pas renseignés ?",
        a: "L'étiquette est bloquée et la matière est nommée. Une matière dont personne n'a renseigné les allergènes n'est pas une matière sans allergène : elle est inconnue. Le scan d'une étiquette fournisseur propose les allergènes qu'il a lus, mais il n'en coche aucun d'avance.",
      },
      {
        q: "L'équilibrage est-il compris dans le premier forfait ?",
        a: "Non, il fait partie de l'offre Pro, et il s'active ensuite dans vos réglages. Un boulanger qui ne coule ni glace ni bonbon n'a aucune raison de voir un onglet d'équilibrage sur chacune de ses fiches : c'est vous qui décidez de l'allumer.",
      },
    ],
    liens: [
      { href: "/logiciel-cout-de-revient", label: "Le coût de revient, calculé une fois pour toutes" },
      { href: "/logiciel-patisserie", label: "Le logiciel pensé pour un laboratoire de pâtisserie" },
      { href: "/tarifs", label: "Les tarifs et ce que chaque offre ouvre" },
    ],
  },

  // ===========================================================================
  {
    path: "/logiciel-glacerie",
    nom: "Logiciel glacerie",
    metaTitle: "Logiciel glacerie · PAC, POD et dénominations",
    metaDescription:
      "Logiciel pour glacier artisan : équilibrage des mix, pouvoir sucrant et anticryoscopique, courbe de congélation et température de service de vos glaces.",
    keywords: [
      "logiciel glacerie",
      "logiciel glacier artisan",
      "équilibrage glace",
      "calcul PAC POD glace",
      "température de service glace",
      "dénomination légale sorbet",
      "logiciel gestion glacier",
    ],
    h1: "Le logiciel qui sait pourquoi votre glace sort dure",
    intro: [
      "Un mix se règle sur cinq chiffres qui se contredisent : plus de sucre adoucit et ramollit, plus de matière grasse enrobe et masque, plus d'extrait sec dégraissé du lait donne du corps et sable au-delà d'un seuil. La plupart des ateliers les tiennent sur un tableur hérité d'un stage, recopié d'année en année, dont plus personne ne sait d'où viennent les coefficients.",
      "Gramme calcule ces chiffres depuis vos matières, trace la courbe de congélation du mix, et dit à quelle température il redevient boulable. Il dit aussi quelle dénomination la recette peut porter, et ce qui lui manque quand elle ne le peut pas.",
    ],
    image: {
      src: "/images/app/production.png",
      alt: "Planning de production et feuille d'atelier dans le logiciel de glacerie Gramme",
    },
    problemes: [
      {
        titre: "La glace sort dure, et on ne sait pas quoi changer",
        texte:
          "On ajoute du sucre inverti sans savoir combien, on retire du saccharose au jugé, et le résultat se juge trois heures plus tard, à la sortie de la vitrine. Entre deux essais il s'est écoulé une demi-journée et douze litres de mix.",
      },
      {
        titre: "Les coefficients du tableur ne sont sourcés nulle part",
        texte:
          "Le pouvoir sucrant du sirop de glucose DE 40, l'anticryoscopique de la maltodextrine : les valeurs circulent de fichier en fichier, parfois fausses d'un facteur deux, et rien n'indique d'où elles viennent ni quand elles ont été relues.",
      },
      {
        titre: "La dénomination se choisit d'après l'habitude",
        texte:
          "Crème glacée, glace au lait, glace aux fruits, sorbet, sorbet plein fruit : chacune a des seuils précis, et les manquer d'un demi-point change le nom qu'on a le droit d'écrire sur le bac. Personne ne rouvre le code des pratiques loyales à chaque recette.",
      },
      {
        titre: "Le coût se calcule au litre, la vente se fait à la boule",
        texte:
          "Un mix se pèse au kilo, foisonne de trente à quarante pour cent selon la turbine, et se vend à la boule. Sans ce chemin, la marge de la boule est un chiffre qu'on répète sans l'avoir vérifié.",
      },
    ],
    reponses: [
      {
        titre: "Les indicateurs du mix, calculés depuis vos matières",
        texte:
          "Eau, extrait sec total, matières grasses dont laitières, extrait sec dégraissé du lait, sucres, pouvoir sucrant et pouvoir anticryoscopique : tout se calcule pour cent grammes de produit fini, avec les fourchettes de métier en regard. La part de la recette dont la composition est connue s'affiche : une matière non renseignée n'est jamais comptée comme un zéro, elle est nommée.",
      },
      {
        titre: "La courbe de congélation, et la température de service",
        texte:
          "Le point de premiers cristaux, la part d'eau gelée à la température de vitrine et à celle de conservation, et la température à laquelle la glace redevient boulable. Le calcul part de la loi de Raoult, et il se recoupe avec la règle publiée de Corvitto : les deux méthodes s'accordent à moins d'un demi-degré, et c'est cet accord qui les rend croyables.",
      },
      {
        titre: "Chaque coefficient porte sa source",
        texte:
          "Les profils de composition sont des données, pas une boîte noire : chaque ligne dit d'où sa valeur vient, y compris quand elle s'écarte volontairement d'une table de référence. Une composition renseignée sur votre matière prime toujours sur le profil.",
      },
      {
        titre: "Les dix dénominations, et ce qui manque à chacune",
        texte:
          "Le code des pratiques loyales des glaces alimentaires est appliqué recette par recette : matières grasses laitières, extrait sec, part de fruits, poids minimal au litre selon votre foisonnement. Gramme écrit « peut porter » et « il manque », jamais « conforme » : la désignation est réservée, et c'est vous qui la décidez.",
      },
    ],
    exemple: {
      titre: "Une vanille, lue chiffre par chiffre",
      intro:
        "Un exemple de lecture, pas une mesure prise chez quelqu'un. Il montre comment les indicateurs se lisent ensemble : un chiffre seul ne dit rien, c'est leur position dans les fourchettes qui indique dans quel sens pousser la recette.",
      entetes: ["Indicateur", "Ce mix", "Repère du métier", "Ce que cela veut dire"],
      lignes: [
        ["Extrait sec total", "38,4 %", "36 à 42", "dans la fourchette, le mix a du corps"],
        ["Matières grasses", "8,1 %", "6 à 12", "correct pour une crème glacée"],
        ["Extrait sec dégraissé du lait", "10,2 %", "8 à 12", "sous le seuil de sablage au lactose"],
        ["Sucres", "18,6 %", "16 à 22", "dans la fourchette"],
        ["Pouvoir sucrant", "17,1", "14 à 20", "douceur maîtrisée"],
        ["Pouvoir anticryoscopique", "26,3", "24 à 30", "légèrement bas"],
        ["Température de service", "−12,4 °C", "autour de −11", "elle sortira un peu ferme de la vitrine"],
      ],
      note: "La lecture se termine sur la dernière ligne : un anticryoscopique bas donne une glace plus ferme. On le remonte en remplaçant une part de saccharose par du sucre inverti, à sucres constants pour ne pas changer la douceur, et l'écran montre la nouvelle courbe avant qu'on ait pesé quoi que ce soit. Le comportement réel dépend aussi de votre turbine et de votre vitrine.",
    },
    modules: ["fiches-techniques", "marges-et-decisions", "allergenes-etiquetage", "planning-production"],
    faq: [
      {
        q: "Gramme calcule-t-il un barème de pasteurisation ?",
        a: "Non. Il n'y a ni couple temps-température, ni suivi de cycle, ni gestion de la maturation. Ce sont des points de conduite d'atelier que Gramme n'aborde pas. Il tient en revanche les relevés de température des enceintes, avec leurs bornes et le rappel des relevés manquants.",
      },
      {
        q: "D'où viennent les coefficients de pouvoir sucrant et anticryoscopique ?",
        a: "D'une table de profils tenue comme une donnée et non comme une constante : chaque ligne porte sa source, et plusieurs ont été corrigées après relecture, notamment quatre sirops de glucose et la maltodextrine qui étaient environ deux fois trop bas. Le fil qui permet de les vérifier est simple : le pouvoir anticryoscopique d'un soluté vaut 342,3 divisé par sa masse molaire.",
      },
      {
        q: "La température de service annoncée est-elle fiable ?",
        a: "C'est une estimation d'atelier, et l'écran le dit. Elle suppose un comportement idéal de la solution, et le résultat réel dépend de votre turbine, de votre foisonnement et de votre vitrine. Sa valeur est surtout comparative : elle vous dit si une recette sortira plus ferme ou plus souple qu'une autre, et de combien.",
      },
      {
        q: "Peut-on savoir si une recette a droit au nom de sorbet plein fruit ?",
        a: "Oui, et surtout ce qui lui manque quand elle n'y a pas droit. Les dix dénominations du code des pratiques loyales sont vérifiées avec leurs seuils réels. Gramme n'écrit jamais qu'une recette est conforme : il indique la désignation qu'elle peut porter, et c'est vous qui décidez de l'employer.",
      },
      {
        q: "Faut-il renseigner toutes les matières pour que cela fonctionne ?",
        a: "Non, mais l'écran vous dit ce qui manque. La part de la recette dont la composition est connue s'affiche, et les matières non renseignées sont nommées avec leur masse. À couverture nulle, aucun chiffre n'est affiché : une estimation sur des données absentes vaudrait moins que rien.",
      },
    ],
    liens: [
      { href: "/logiciel-cout-de-revient", label: "Le coût de revient, calculé une fois pour toutes" },
      { href: "/logiciel-fiches-techniques", label: "Vos fiches techniques, sans les retaper" },
      { href: "/tarifs", label: "Les tarifs et ce que chaque offre ouvre" },
    ],
  },

  // ===========================================================================
  {
    path: "/logiciel-boulangerie",
    nom: "Logiciel boulangerie",
    metaTitle: "Logiciel boulangerie · coûts, marges et production",
    metaDescription:
      "Logiciel de gestion pour boulangerie artisanale : coût de revient de chaque pain, prix d'achat tenus à jour par le scan des factures, production et marges.",
    keywords: [
      "logiciel boulangerie",
      "logiciel gestion boulangerie",
      "meilleur logiciel boulangerie artisanale",
      "logiciel boulangerie artisanale",
      "logiciel coût de revient boulangerie",
      "logiciel fournil",
      "gestion boulangerie artisanale",
    ],
    h1: "Le logiciel de gestion pensé pour un fournil",
    intro: [
      "Une boulangerie vend peu de références et en fabrique beaucoup. La baguette part à un prix que la rue fixe, la farine augmente sans prévenir, et l'écart entre les deux se voit six mois plus tard, au bilan. Entre les deux, il y a un classeur de recettes, une pile de factures et un tableur que personne n'a le temps de tenir.",
      "Gramme relie ces trois choses. Chaque facture scannée met à jour le prix d'achat, chaque prix d'achat recalcule le coût de chaque pain, et chaque coût dit ce que la fournée de demain vaut vraiment.",
    ],
    image: {
      src: "/images/app/mercuriale.png",
      alt: "Mercuriale et prix des matières premières dans le logiciel de boulangerie Gramme",
    },
    problemes: [
      {
        titre: "Le prix de la farine bouge, le prix de la baguette non",
        texte:
          "Une hausse de quinze pour cent sur la farine ne se voit sur aucune fiche tant que personne ne recopie le nouveau tarif dans le tableur. Pendant ce temps, la marge de la référence la plus vendue se réduit sans qu'aucun chiffre ne le dise.",
      },
      {
        titre: "Une recette au poids ne se compare pas à un prix à la pièce",
        texte:
          "Une pâte annoncée en kilos face à un prix de vente à la baguette compare la fournée entière à une pièce. Le ratio matière affiché devient absurde, et on finit par ne plus le regarder du tout.",
      },
      {
        titre: "La production de demain se décide de tête",
        texte:
          "Le nombre de pains à pousser se décide la veille au soir, souvent de mémoire. Ce qui manque part en achat d'urgence, ce qui reste part en perte, et ni l'un ni l'autre n'entre dans le calcul de marge.",
      },
      {
        titre: "Les registres sanitaires se tiennent sur un cahier",
        texte:
          "Relevés de températures, nettoyage, réception des marchandises : trois cahiers, trois écritures, et rien qui se retrouve le jour d'un contrôle sans y passer une matinée.",
      },
    ],
    reponses: [
      {
        titre: "La mercuriale se tient toute seule",
        texte:
          "Vous photographiez une facture fournisseur, elle est lue, rapprochée de vos matières existantes, et les prix d'achat se mettent à jour. L'historique de chaque prix reste consultable, daté par la facture qui l'a produit, et toutes les recettes qui contiennent la matière se recalculent, sous-recettes comprises.",
      },
      {
        titre: "Le coût de revient est complet, et il le dit",
        texte:
          "Le coût matière est distingué du coût de revient. Le premier se compare au repère du métier, rester sous trente-cinq pour cent ; le second ajoute l'emballage et le temps de main d'œuvre, et sert à fixer un prix. Les deux sont affichés côte à côte plutôt que mélangés dans un chiffre unique qui ne se compare à rien.",
      },
      {
        titre: "Une fournée validée déduit le stock",
        texte:
          "Le plan de production part des recettes réelles. Une fournée validée sort les matières du stock, écrit son mouvement avec sa cause, et alimente l'historique. Le stock bas remonte de lui-même, avant la rupture.",
      },
      {
        titre: "Les registres sanitaires s'écrivent en passant",
        texte:
          "Les relevés de température, le nettoyage et le contrôle à réception se saisissent depuis un téléphone, à côté de l'enceinte. Chaque écriture porte un chiffre, une heure et un nom, et ne se réécrit plus : une erreur se corrige par une contre-passation motivée, et les deux lignes restent visibles.",
      },
    ],
    modules: ["scan-factures-mercuriale", "marges-et-decisions", "planning-production", "hygiene-haccp"],
    faq: [
      {
        q: "Quel est le meilleur logiciel de gestion pour une boulangerie artisanale ?",
        a: "Cela dépend de ce que vous cherchez à piloter. Pour la caisse et l'encaissement, il faut un logiciel de point de vente. Pour savoir ce que coûte réellement chaque pain et comment la hausse des matières premières entame vos marges, il faut un logiciel de gestion de production : recettes et sous-recettes, mercuriale alimentée par vos factures, coût de revient à jour, planning et stock. C'est ce que fait Gramme, sur ordinateur, tablette et téléphone.",
      },
      {
        q: "Comment calculer le coût de revient d'une baguette ?",
        a: "En partant du coût des matières au kilo, appliqué aux quantités de la recette, divisé par le nombre de pièces réellement obtenues et non par le poids de la pâte. On ajoute ensuite l'emballage et le temps de main d'œuvre pour obtenir le coût de revient complet. La différence entre les deux calculs est ce qui sépare un ratio matière comparable au métier d'un prix de vente défendable.",
      },
      {
        q: "Faut-il ressaisir ses recettes pour démarrer ?",
        a: "Non. Les fiches manuscrites, même anciennes ou farinées, se photographient depuis l'application et sont reconstruites, sous-recettes séparées des recettes finales. Les fichiers Excel sont repris lors de l'installation accompagnée : vous les envoyez, votre compte arrive rempli.",
      },
      {
        q: "Gramme remplace-t-il ma caisse ?",
        a: "Non, et c'est délibéré. Gramme travaille en amont de la vente : recettes, achats, coûts, production et marges. Votre logiciel de caisse reste en place.",
      },
      {
        q: "Est-ce que ça marche sur un téléphone, dans le fournil ?",
        a: "Oui. L'application est faite pour être utilisée debout, les mains occupées : les relevés, la validation d'une fournée et le scan d'une facture se font au téléphone. Le travail d'analyse se fait mieux sur un écran plus large.",
      },
    ],
    liens: [
      { href: "/guides/calcul-cout-de-revient-boulangerie", label: "Calculer son coût de revient en boulangerie" },
      { href: "/guides/coefficient-cout-matiere-boulangerie", label: "Le coefficient et le coût matière" },
      { href: "/logiciel-patisserie", label: "Le même outil, côté pâtisserie" },
    ],
  },

  // ===========================================================================
  {
    path: "/logiciel-cout-de-revient",
    nom: "Logiciel coût de revient",
    metaTitle: "Logiciel de calcul du coût de revient",
    metaDescription:
      "Calculer le coût de revient d'une recette de boulangerie ou de pâtisserie : sous-recettes en cascade, rendement réel, pertes, prix tenus par vos factures.",
    keywords: [
      "logiciel coût de revient",
      "logiciel calcul coût de revient recette",
      "logiciel prix de revient pâtisserie",
      "calcul coût de revient recette",
      "logiciel coût matière restauration",
      "calculer le prix de revient d'une recette",
    ],
    h1: "Le coût de revient d'une recette, calculé une fois pour toutes",
    intro: [
      "Un coût de revient se calcule très bien dans un tableur. Il se maintient très mal. Chaque nouvelle facture demande une ressaisie, chaque sous-recette recopiée dans trois fiches se met à jour dans aucune, et le jour où le chiffre compte vraiment, personne ne sait plus de quand il date.",
      "Gramme part de l'autre bout : les prix viennent de vos factures, les recettes se relient entre elles, et le coût se recalcule tout seul quand quelque chose bouge en amont.",
    ],
    image: {
      src: "/images/app/recette-couts.png",
      alt: "Coût de revient d'une recette, détaillé par matière, dans le logiciel Gramme",
    },
    problemes: [
      {
        titre: "Une sous-recette recopiée n'est mise à jour nulle part",
        texte:
          "Un praliné, une ganache, une pâte à bombe entrent dans plusieurs fiches. Recopiés ligne à ligne, ils vivent en cinq exemplaires qui divergent au premier changement de prix.",
      },
      {
        titre: "Le rendement réel n'est presque jamais dans le calcul",
        texte:
          "Une pâte perd à la cuisson, un entremets perd à la découpe, une ganache perd au dressage. Diviser par le poids théorique au lieu du rendement réel donne un coût flatteur, et une marge qui n'existe pas.",
      },
      {
        titre: "Les prix d'achat vieillissent en silence",
        texte:
          "Un tableur ne dit jamais que sa donnée a six mois. Le coût affiché reste net, précis, et faux, parce que rien dans l'écran ne signale qu'il repose sur un tarif périmé.",
      },
      {
        titre: "Deux ratios circulent et ne veulent pas dire la même chose",
        texte:
          "Le ratio matière et le coût de revient complet sont souvent confondus. Le premier se compare au repère du métier, le second sert à fixer un prix. Les mélanger fait bondir un indicateur sans qu'aucune matière n'ait bougé.",
      },
    ],
    reponses: [
      {
        titre: "Une sous-recette est un objet unique",
        texte:
          "Elle est valorisée à son coût au kilo, reliée à toutes les recettes qui l'emploient, sur autant de niveaux que votre production l'exige. Une sous-recette peut elle-même en contenir d'autres : un changement de prix traverse toute la chaîne jusqu'à la fiche finale.",
      },
      {
        titre: "Le rendement est celui que vous constatez",
        texte:
          "Chaque recette porte son rendement réel et ses pertes, étape par étape. Une recette de vente se compte en pièces, une base se compte au poids, et le calcul ne confond jamais les deux : c'est ce qui sépare le coût d'une pièce du coût d'un gramme.",
      },
      {
        titre: "Aucune quantité n'est arrondie à zéro",
        texte:
          "Une recette de deux cents grammes demande parfois quatre dixièmes de gramme de colorant. Arrondie à une décimale, la ligne vaudrait zéro, et multiplier la recette par dix laisserait zéro. Les quantités gardent les décimales dont elles ont besoin.",
      },
      {
        titre: "Le chiffre dit sur quoi il repose",
        texte:
          "Chaque coût affiché nomme ce qui lui manque : une matière sans prix, une sous-recette sans rendement, une facture jamais rapprochée. Un coût incomplet est signalé comme tel plutôt que présenté comme un résultat.",
      },
    ],
    modules: ["fiches-techniques", "marges-et-decisions", "scan-factures-mercuriale", "gestion-stock"],
    faq: [
      {
        q: "Quel logiciel pour calculer le coût de revient d'une recette de pâtisserie ?",
        a: "Il lui faut trois capacités, faute de quoi le résultat est faux dès la troisième fiche : gérer les sous-recettes sur plusieurs niveaux, appliquer le rendement réel et les pertes plutôt que le poids théorique, et tenir les prix d'achat à jour sans ressaisie. Gramme fait les trois, en lisant vos factures fournisseurs pour alimenter les prix.",
      },
      {
        q: "Quelle différence entre coût matière et coût de revient ?",
        a: "Le coût matière ne compte que les matières premières : c'est lui qui se compare au repère du métier, rester sous trente-cinq pour cent du prix de vente hors taxes. Le coût de revient ajoute l'emballage et le temps de main d'œuvre : c'est lui qui sert à fixer un prix. Les deux sont affichés séparément, parce que les confondre fait bondir un ratio sans qu'aucune matière n'ait changé.",
      },
      {
        q: "Comment le prix des matières premières est-il tenu à jour ?",
        a: "Par vos factures. Vous les photographiez, elles sont lues et rapprochées de vos matières, et les prix d'achat se mettent à jour à la date de la facture. L'historique reste consultable, ce qui permet de voir la pente d'un prix sur plusieurs mois plutôt qu'un instantané.",
      },
      {
        q: "Peut-on reprendre un tableur existant ?",
        a: "Oui, lors de l'installation accompagnée : vous envoyez vos fichiers, même volumineux, et votre compte arrive rempli. Les fiches papier, elles, se photographient directement depuis l'application.",
      },
      {
        q: "Le calcul tient-il compte des pertes ?",
        a: "Oui. Les pertes se saisissent étape par étape et entrent dans chaque calcul de coût et de marge. C'est précisément ce qui fait l'écart entre un coût théorique et ce que dit la caisse en fin de mois.",
      },
    ],
    liens: [
      { href: "/guides/calcul-cout-de-revient-boulangerie", label: "Calculer son coût de revient, pas à pas" },
      { href: "/articles/calculer-sa-marge-boulangerie-patisserie", label: "Calculer sa marge" },
      { href: "/articles/pourcentage-perte-marge-boulangerie", label: "Ce que les pertes coûtent vraiment" },
    ],
  },

  // ===========================================================================
  {
    path: "/logiciel-fiches-techniques",
    nom: "Logiciel fiches techniques",
    metaTitle: "Logiciel de fiches techniques pour pâtissier",
    metaDescription:
      "Créer et tenir ses fiches techniques de pâtisserie : reprise des fiches papier par photo, sous-recettes, étapes, allergènes et nutrition au même endroit.",
    keywords: [
      "logiciel fiche technique pâtisserie",
      "logiciel fiches techniques cuisine",
      "fiche technique pâtisserie logiciel",
      "créer une fiche technique de pâtisserie",
      "logiciel recettes professionnelles",
      "fiche technique boulangerie",
    ],
    h1: "Vos fiches techniques, sans les retaper",
    intro: [
      "Une fiche technique sert trois usages qui ne se parlent jamais : produire, chiffrer, et déclarer. Sur le papier, elle sert au premier. Dans un tableur, elle sert au deuxième. Et le troisième, les allergènes et les valeurs nutritionnelles, se refait à la main chaque fois qu'on en a besoin.",
      "Ici la fiche est unique et porte les trois. Elle se remplit en photographiant ce que vous avez déjà.",
    ],
    image: {
      src: "/images/app/recette-fiche.png",
      alt: "Fiche technique de pâtisserie avec ses étapes et son coût dans le logiciel Gramme",
    },
    problemes: [
      {
        titre: "Le classeur est la seule copie",
        texte:
          "Des années de fiches manuscrites, parfois farinées, souvent annotées, tenues par une seule personne. Les ressaisir demande des semaines, et c'est la raison pour laquelle presque personne ne franchit le pas.",
      },
      {
        titre: "La fiche de production et la fiche de coût sont deux documents",
        texte:
          "L'une vit au fournil, l'autre dans un tableur. Elles ne portent ni les mêmes quantités ni les mêmes noms, et personne ne sait laquelle fait foi.",
      },
      {
        titre: "Les allergènes se refont à chaque fois",
        texte:
          "Ils se déduisent des matières, donc ils changent dès qu'une matière change. Recalculés à la main, ils sont justes le jour où on les écrit et incertains le lendemain.",
      },
      {
        titre: "Une recette change et personne ne sait quand",
        texte:
          "Un dosage ajusté, une matière remplacée, une étape ajoutée : sans historique, on ne sait plus quelle version a été produite le mois dernier ni pourquoi le coût a bougé.",
      },
    ],
    reponses: [
      {
        titre: "La photo suffit",
        texte:
          "Une fiche manuscrite se photographie et se reconstruit : ingrédients, quantités, unités, étapes, et surtout les sous-recettes séparées des recettes finales. Ce qui est douteux est proposé, jamais coché d'avance, et vous arbitrez avant d'enregistrer.",
      },
      {
        titre: "Une seule fiche pour tout",
        texte:
          "La même fiche porte les étapes de production, le coût de revient, les allergènes et les valeurs nutritionnelles. Elle s'imprime pour le fournil et s'ouvre en onglets à l'écran, sans jamais devenir deux documents qui se contredisent.",
      },
      {
        titre: "Les allergènes se déduisent, et ce qui manque est nommé",
        texte:
          "Ils remontent des matières et se recalculent quand une matière change. Une matière dont personne n'a renseigné les allergènes n'est pas traitée comme une matière sans allergène : elle est nommée, et elle bloque l'étiquette tant que le doute n'est pas levé.",
      },
      {
        titre: "Le coût suit la fiche",
        texte:
          "Chaque modification de la fiche déplace son coût, et l'historique garde la trace du mouvement. On sait quel changement a coûté combien, ce qu'aucun classeur ne dira jamais.",
      },
    ],
    modules: ["import-recettes-photo", "fiches-techniques", "allergenes-etiquetage", "marges-et-decisions"],
    faq: [
      {
        q: "Quel logiciel de fiches techniques pour un pâtissier ?",
        a: "Un logiciel de fiches techniques utile en pâtisserie doit gérer les sous-recettes sur plusieurs niveaux, porter les étapes de production autant que le calcul de coût, et déduire les allergènes des matières plutôt que de les faire ressaisir. Gramme fait les trois, et reprend les fiches existantes par photo plutôt que par ressaisie.",
      },
      {
        q: "Comment reprendre des fiches papier sans tout retaper ?",
        a: "En les photographiant depuis l'application. Les fiches manuscrites, même anciennes ou tachées, sont lues et reconstruites, avec les sous-recettes détectées séparément. Vous relisez et corrigez avant d'enregistrer : rien n'est écrit sans votre accord.",
      },
      {
        q: "La fiche technique peut-elle servir à l'étiquetage ?",
        a: "Elle porte les allergènes et les valeurs nutritionnelles calculées à partir des matières, et sert de base aux étiquettes de vente. L'outil n'écrit nulle part qu'une étiquette est conforme : il enregistre, calcule, et nomme ce qui manque. La responsabilité de la déclaration reste la vôtre.",
      },
      {
        q: "Peut-on imprimer une fiche pour le fournil ?",
        a: "Oui, avec les quantités de la fournée voulue. La même fiche sert à l'écran, à l'impression et au calcul, ce qui évite les deux documents qui divergent.",
      },
      {
        q: "Que se passe-t-il quand on modifie une recette ?",
        a: "Le coût se recalcule immédiatement et le mouvement est conservé dans l'historique de la fiche. On peut donc rattacher une variation de marge à la modification qui l'a produite.",
      },
    ],
    liens: [
      { href: "/guides/fiche-technique-patisserie-modele", label: "Un modèle de fiche technique" },
      { href: "/guides/scanner-fiches-techniques-patisserie", label: "Scanner ses fiches existantes" },
      { href: "/fonctionnalites/allergenes-etiquetage", label: "Allergènes et étiquetage" },
    ],
  },

  // ===========================================================================
  {
    path: "/logiciel-releves-temperature",
    nom: "Relevés de température",
    metaTitle: "Application de relevés de température HACCP",
    metaDescription:
      "Tenir ses relevés de température au téléphone : une saisie par enceinte et par horaire, un registre qui ne se réécrit pas, un historique prêt à imprimer.",
    keywords: [
      "application relevé température haccp",
      "logiciel relevé de température",
      "relevé température chambre froide",
      "registre température boulangerie",
      "application haccp boulangerie",
      "suivi température frigo professionnel",
    ],
    h1: "Les relevés de température, faits au téléphone et gardés pour de bon",
    intro: [
      "Le cahier de températures a deux défauts. Il se remplit rarement à l'heure dite, et il se remplit parfois de mémoire, en fin de service, pour la semaine entière. Le jour d'un contrôle, ce qu'il montre n'est pas ce qui s'est passé.",
      "Un registre qui vaut quelque chose est un registre qu'on ne peut pas réécrire. C'est le point de départ de celui-ci.",
    ],
    image: {
      src: "/images/app/haccp-temperatures.png",
      alt: "Relevés de température et courbes par enceinte dans l'application Gramme",
    },
    problemes: [
      {
        titre: "Le relevé se fait quand on y pense",
        texte:
          "Une chambre froide se relève le matin et le soir, une vitrine à d'autres heures. Sans rappel qui nomme ce qui manque et à quelle heure, la moitié des cases se remplissent après coup.",
      },
      {
        titre: "Un cahier se corrige à la gomme",
        texte:
          "Une valeur raturée ou réécrite n'a plus de valeur de preuve. Et un registre qu'on peut réécrire ne prouve rien, même quand personne ne l'a réécrit.",
      },
      {
        titre: "Un écart sans suite ne sert à rien",
        texte:
          "Relever moins quatorze degrés dans une enceinte réglée à moins dix-huit n'a d'intérêt que si quelque chose est fait, et écrit. Sinon le cahier documente le problème sans documenter la réponse.",
      },
      {
        titre: "Retrouver trois mois d'historique prend une matinée",
        texte:
          "Feuilleter, recopier, compter les écarts à la main. Et une moyenne calculée sur les pages qu'on a eu le temps de lire n'est pas une moyenne.",
      },
    ],
    reponses: [
      {
        titre: "Chaque enceinte a ses horaires",
        texte:
          "Les heures de relevé se règlent enceinte par enceinte. Le rappel nomme ce qui manque et à quelle heure, et ne réclame jamais le relevé du soir le matin. Le compte de ce qui reste à faire s'affiche en pastille sur le menu.",
      },
      {
        titre: "Le registre ne se réécrit pas",
        texte:
          "Une ligne écrite ne peut être ni modifiée ni supprimée, y compris par l'administrateur de l'atelier. Une erreur se corrige par une contre-passation motivée, et les deux lignes restent visibles, à l'écran comme à l'impression.",
      },
      {
        titre: "Le dépassement est figé avec ses bornes",
        texte:
          "Un relevé hors limites est marqué au moment de l'écriture, avec les bornes qui l'ont produit. Remonter un plafond demain ne repeint pas l'historique d'hier. Et un écart ne s'enregistre pas sans action corrective.",
      },
      {
        titre: "Les chiffres se comptent sur tout, pas sur un extrait",
        texte:
          "Moyennes, nombre d'écarts et jours sans écart se calculent sur la totalité des relevés de la période, jamais sur les premières lignes chargées. La liste, elle, se feuillette et annonce combien elle contient.",
      },
    ],
    modules: ["hygiene-haccp", "allergenes-etiquetage", "fournisseurs"],
    faq: [
      {
        q: "Quelle application pour les relevés de température en boulangerie ?",
        a: "Une application utile ici doit faire trois choses : réclamer le relevé aux heures propres à chaque enceinte, empêcher qu'une ligne écrite soit réécrite, et exiger une action corrective quand une valeur sort des bornes. Gramme fait les trois, avec la saisie au téléphone à côté de l'enceinte et un registre imprimable sur la période voulue.",
      },
      {
        q: "Est-ce que ce logiciel me rend conforme ?",
        a: "Non, et aucun logiciel ne le peut. Analyser vos dangers, fixer vos limites et répondre d'un contrôle restent votre travail. Ce qu'un outil fait, c'est enregistrer à votre place, à l'heure, sans possibilité de réécriture, et vous rendre l'historique en quelques secondes. Le guide sur le sujet développe la question sans rien vous vendre.",
      },
      {
        q: "Faut-il des sondes connectées ?",
        a: "Non. Les relevés se saisissent à la main depuis un téléphone, avec le thermomètre que vous utilisez déjà. C'est ce qui permet de démarrer le jour même, sans matériel ni installation.",
      },
      {
        q: "Que se passe-t-il si on se trompe de valeur ?",
        a: "La ligne fautive reste, et une contre-passation motivée vient à côté. Les deux sont visibles. Un registre dont on peut faire disparaître une ligne ne prouve rien, y compris les lignes qu'on n'a pas touchées.",
      },
      {
        q: "Peut-on imprimer le registre pour un contrôle ?",
        a: "Oui, sur la période de votre choix, avec les écarts et leurs actions correctives. L'impression reprend exactement ce qui est filtré à l'écran.",
      },
    ],
    liens: [
      { href: "/guides/logiciel-haccp-boulangerie", label: "Ce qu'un logiciel HACCP fait, et ne fait pas" },
      { href: "/fonctionnalites/hygiene-haccp", label: "Le module hygiène" },
      { href: "/logiciel-boulangerie", label: "Le reste de l'outil, côté boulangerie" },
    ],
  },

  // ===========================================================================
  {
    path: "/logiciel-scan-factures",
    nom: "Scan des factures",
    metaTitle: "Scanner ses factures fournisseurs",
    metaDescription:
      "Photographier une facture fournisseur pour mettre à jour ses prix d'achat : lecture des lignes, rapprochement avec vos matières, historique daté.",
    keywords: [
      "scanner factures fournisseurs",
      "logiciel scan facture fournisseur",
      "mise à jour automatique prix d'achat",
      "logiciel mercuriale",
      "suivi prix matières premières",
      "alerte hausse prix fournisseur",
    ],
    h1: "Une facture photographiée, des prix à jour partout",
    intro: [
      "La hausse d'un prix ne se remarque pas sur une facture. Elle se remarque trois mois plus tard, quand la marge a fondu et qu'on ne sait plus quelle ligne l'a mangée. Entre les deux, il aurait fallu ressaisir chaque tarif, à chaque livraison, dans un tableur.",
      "Photographier la facture suffit. Le reste se propage tout seul jusqu'aux recettes.",
    ],
    image: {
      src: "/images/app/factures.png",
      alt: "Factures fournisseurs scannées et prix mis à jour dans le logiciel Gramme",
    },
    problemes: [
      {
        titre: "La ressaisie ne se fait jamais",
        texte:
          "Recopier trente lignes de facture, plusieurs fois par semaine, n'entre dans la journée de personne. Les prix du tableur datent donc de la dernière fois où quelqu'un a eu le temps.",
      },
      {
        titre: "Le fournisseur n'écrit pas comme vous",
        texte:
          "Une même farine s'appelle autrement d'un fournisseur à l'autre, et parfois d'une facture à l'autre chez le même. Rapprocher à la main, c'est se tromper une fois sur dix.",
      },
      {
        titre: "Une hausse passe inaperçue",
        texte:
          "Douze pour cent sur le beurre ne saute pas aux yeux au milieu de vingt lignes. Ce qui se voit, c'est le total en bas de page, qui augmente pour des raisons qu'on n'analyse pas.",
      },
      {
        titre: "On ne sait plus quel prix a servi au calcul",
        texte:
          "Un coût de revient sans date d'origine ne se défend pas. On ne sait ni de quand il vient ni s'il tient encore.",
      },
    ],
    reponses: [
      {
        titre: "La facture est lue, vous arbitrez",
        texte:
          "Fournisseur, date, lignes, quantités, unités et prix sont extraits. Ce qui ressemble à une matière connue est présélectionné, ce qui est nouveau est proposé à la création, et rien n'est enregistré avant votre accord.",
      },
      {
        titre: "L'outil retient vos arbitrages",
        texte:
          "Une fois que vous avez dit qu'une désignation de fournisseur correspond à l'une de vos matières, elle est reconnue les fois suivantes. La boîte de dialogue ne revient pas vous reposer la même question à chaque livraison.",
      },
      {
        titre: "Le prix est daté par sa facture",
        texte:
          "L'historique retient le prix, et la date de la facture qui l'a produit, pas la date de la saisie. Une facture scannée avec trois semaines de retard se range à sa vraie place dans la courbe.",
      },
      {
        titre: "La hausse remonte jusqu'aux recettes",
        texte:
          "Un prix qui change recalcule toutes les recettes qui contiennent la matière, sous-recettes comprises, et fait remonter celles dont la marge se dégrade. On voit la conséquence, pas seulement la cause.",
      },
    ],
    modules: ["scan-factures-mercuriale", "fournisseurs", "gestion-stock", "marges-et-decisions"],
    faq: [
      {
        q: "Comment mettre à jour ses prix d'achat sans tout ressaisir ?",
        a: "En photographiant la facture fournisseur. Les lignes sont lues, rapprochées de vos matières existantes, et les prix d'achat se mettent à jour à la date de la facture. Les recettes qui contiennent ces matières se recalculent, y compris à travers les sous-recettes.",
      },
      {
        q: "Que se passe-t-il si le fournisseur nomme les produits autrement ?",
        a: "L'outil présélectionne ce qui ressemble à une de vos matières et vous laisse trancher. Votre arbitrage est mémorisé : la même désignation sera reconnue aux livraisons suivantes, sans reposer la question.",
      },
      {
        q: "Les factures papier fonctionnent-elles ?",
        a: "Oui. Une photo prise au téléphone suffit, y compris sur un ticket froissé ou une facture pliée. Les PDF envoyés par le fournisseur fonctionnent également.",
      },
      {
        q: "Peut-on suivre l'évolution d'un prix dans le temps ?",
        a: "Oui. Chaque matière garde l'historique de ses prix, daté par les factures, ce qui montre une pente plutôt qu'un instantané. C'est ce qui permet de discuter un tarif avec un fournisseur en s'appuyant sur des chiffres.",
      },
      {
        q: "Le scan consomme-t-il quelque chose ?",
        a: "Les scans sont compris dans l'abonnement, dans une limite mensuelle qui dépend de la formule. La reprise de vos anciennes factures faite à l'installation n'entre pas dans ce compte.",
      },
    ],
    liens: [
      { href: "/fonctionnalites/scan-factures-mercuriale", label: "Le module scan et mercuriale" },
      { href: "/logiciel-cout-de-revient", label: "Ce que la mercuriale change au coût de revient" },
      { href: "/articles/pourcentage-perte-marge-boulangerie", label: "Ce que les hausses coûtent" },
    ],
  },
];

export const cheminsLogiciel = pagesLogiciel.map((p) => p.path);

export function pageLogicielParChemin(path: string): PageLogiciel | undefined {
  return pagesLogiciel.find((p) => p.path === path);
}

/**
 * Garde-fous exécutés à L'IMPORT, donc au build, sur le modèle de
 * `assertPublishedGuidesHaveNoEmDash` : les règles que l'audit SEO applique en
 * production sont vérifiées ici avant même le déploiement. Une page publiée
 * avec un titre à quatre-vingts caractères ne doit pas attendre le lundi
 * suivant pour se voir.
 */
function assertPagesLogicielValides(pages: PageLogiciel[]): void {
  const titres = new Map<string, string>();
  const descriptions = new Map<string, string>();

  for (const p of pages) {
    // Le gabarit ajoute « | Gramme », soit neuf caractères de plus.
    const titreRendu = `${p.metaTitle} | Gramme`;
    if (titreRendu.length > 60) {
      throw new Error(`[logiciels] ${p.path} : titre rendu à ${titreRendu.length} caractères, Google coupe au-delà de 60`);
    }
    if (p.metaDescription.length < 120 || p.metaDescription.length > 160) {
      throw new Error(
        `[logiciels] ${p.path} : description à ${p.metaDescription.length} caractères, hors de la fourchette 120-160`,
      );
    }
    const dejaTitre = titres.get(p.metaTitle);
    if (dejaTitre) throw new Error(`[logiciels] titre partagé par ${dejaTitre} et ${p.path}`);
    titres.set(p.metaTitle, p.path);

    const dejaDescription = descriptions.get(p.metaDescription);
    if (dejaDescription) throw new Error(`[logiciels] description partagée par ${dejaDescription} et ${p.path}`);
    descriptions.set(p.metaDescription, p.path);

    // Le schéma FAQPage est le type de données structurées le plus corrélé aux
    // citations par les moteurs génératifs : une page sans FAQ se prive du
    // format que ces moteurs reprennent le plus volontiers.
    if (p.faq.length < 4) {
      throw new Error(`[logiciels] ${p.path} : ${p.faq.length} question(s), il en faut au moins quatre`);
    }

    // Le produit n'écrit nulle part qu'il rend conforme, certifie ou valide.
    // Une page de vente ne peut pas promettre ce que l'outil refuse d'écrire.
    const prose = [p.h1, ...p.intro, ...p.problemes.map((x) => x.texte), ...p.reponses.map((x) => x.texte)].join(" ");
    const interdits = prose.match(/\b(vous rend conforme|rend conforme|certifi[ée]|garantit la conformité)\b/i);
    if (interdits) {
      throw new Error(`[logiciels] ${p.path} : « ${interdits[0]} » promet une conformité que l'outil n'écrit jamais`);
    }
    if (prose.includes("—")) {
      throw new Error(`[logiciels] ${p.path} : tiret cadratin dans la prose publiée`);
    }
  }
}

assertPagesLogicielValides(pagesLogiciel);
