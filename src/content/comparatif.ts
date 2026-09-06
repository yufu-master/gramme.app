/**
 * Comparatif des logiciels de gestion pour boulangerie et pâtisserie.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ AVERTISSEMENT — À LIRE AVANT TOUTE MODIFICATION                          │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * La publicité comparative est LICITE en France, et strictement encadrée
 * (articles L122-1 à L122-7 du code de la consommation). Elle doit porter sur
 * des caractéristiques essentielles, pertinentes, VÉRIFIABLES et
 * représentatives, ne pas induire en erreur, et ne pas dénigrer.
 *
 * Trois règles de tenue en découlent, et elles ne sont pas négociables :
 *
 * 1. **Chaque affirmation vient d'une page publique de l'éditeur**, relevée à
 *    la date indiquée par `RELEVE_LE`. Pas de « on m'a dit », pas de captures
 *    de démonstration commerciale, pas de déduction.
 * 2. **Un tarif non affiché se dit « non communiqué »**, jamais estimé.
 *    Inventer un prix pour un concurrent est le moyen le plus rapide de rendre
 *    la page attaquable — et faux.
 * 3. **Les colonnes où le concurrent fait mieux sont dans le tableau**, au même
 *    endroit que les autres. Un comparatif où l'auteur gagne partout ne
 *    convainc personne, ne se fait citer nulle part, et se plaide mal.
 *
 * Les tarifs bougent. Reprendre le relevé à chaque révision et mettre
 * `RELEVE_LE` à jour — une page datée d'il y a deux ans est un mensonge lent.
 */

export const RELEVE_LE = "31 août 2026";

export type Concurrent = {
  id: string;
  nom: string;
  site: string;
  /** L'accroche que l'éditeur emploie lui-même. */
  positionnement: string;
  cible: string;
  tarif: string;
  /**
   * Le tarif en trois mots, visible sur la fiche repliée.
   *
   * Une fiche fermée qui ne dit qu'un nom n'aide personne à décider s'il faut
   * l'ouvrir. Le prix d'entrée est le chiffre que tout le monde cherche en
   * premier : il reste donc dehors, et le détail — offres, options, variable de
   * facturation — attend derrière.
   */
  tarifCourt: string;
  /** Ce que l'éditeur fait particulièrement bien. Honnête, pas concédé du bout des lèvres. */
  force: string;
  /** Ce qui, pour un artisan boulanger-pâtissier, peut coincer. Factuel. */
  reserve: string;
  /**
   * Le tableau du pilier rend UNE COLONNE PAR CONCURRENT. À quatre, il se lit ;
   * à vingt-cinq, il fait vingt-six colonnes et ne se lit plus du tout. C'est
   * le point qui casse en premier quand on couvre tout le secteur.
   *
   * Seuls les `principal` entrent dans le tableau. Les `secondaire` gardent
   * leur page dédiée et son tableau à deux colonnes, qui lui ne souffre pas du
   * nombre, et sont listés sous le tableau du pilier.
   */
  rang: "principal" | "secondaire";
};

export const concurrents: Concurrent[] = [
  {
    id: "gramme",
    nom: "Gramme",
    site: "gramme.app",
    rang: "principal",
    positionnement:
      "Le logiciel de gestion et de production des artisans boulangers et pâtissiers, conçu par un chef pâtissier en exercice.",
    cible: "Boulangerie, pâtisserie, chocolaterie artisanales, de l'artisan seul à l'équipe d'une quinzaine.",
    tarif:
      "49 € HT/mois (490 €/an) en Starter, 89 € HT/mois (890 €/an) en Pro. Installation accompagnée à partir de 300 € HT, une seule fois.",
    tarifCourt: "49 à 89 € HT/mois",
    force:
      "Le pourcentage de perte et les rendements traités comme des données de premier plan, les sous-recettes en cascade sur plusieurs niveaux, le volume de factures inclus sans surcoût, la reprise complète des données faite par l'éditeur avant le premier jour. L'offre Pro comprend, sans option ni supplément, le planning de production, l'étiquetage allergènes et nutritionnel, et l'hygiène : relevés de températures, plan de nettoyage, étiquettes de lot et registres imprimables.",
    reserve:
      "La connexion aux caisses et à la comptabilité reste en cours de développement, annoncée d'ici fin 2026 : nous ne la comptons pas comme acquise dans les tableaux ci-dessous. L'offre Pro est plafonnée à cinq utilisateurs, là où Otami et ChefsTouch en autorisent davantage. Et nous ne proposons pas d'essai gratuit en libre-service : nous faisons une démonstration sur vos propres fiches.",
  },
  {
    id: "otami",
    nom: "Otami",
    site: "otami.fr",
    rang: "principal",
    positionnement:
      "« La solution pour simplifier vos achats, vos marges et votre production. » Le concurrent le plus proche de Gramme sur le métier.",
    cible: "Boulangerie, pâtisserie et restauration, du commerce isolé au multi-site.",
    tarif:
      "Trois offres, à deux prix chacune selon l'engagement. Avec engagement annuel : Access 59 € HT/mois (5 documents importés par mois), Essentiel 99 € (20 documents), Intégrale 159 € (40 documents), plus un mois offert. Sans engagement : 69 €, 119 € et 179 € pour les mêmes périmètres. Deux modules se facturent en plus de l'abonnement, 49 € HT/mois chacun : Comptable (extraction de TVA, journal d'achats, ventilation analytique) et Planning de production. Devis sur mesure pour un besoin spécifique.",
    tarifCourt: "59 à 179 € HT/mois, options à 49 €",
    force:
      "Le réseau d'intégrations, de loin le plus fourni du marché : caisses (Zelty, CarrePOS, Cashpad, Connectill, Addictill), comptabilité (Pennylane, Synapsy, Evoliz), facturation (Libeo, Abill, Cashmag, Menlog). Utilisateurs et écrans illimités sur toutes les offres, gestion multi-site native, et un module comptable qui va jusqu'à l'extraction de TVA et au journal d'achats, ce que nous ne faisons pas. Le dépôt de devis alerte automatiquement quand un tarif négocié n'est pas respecté sur une facture. Plus de 4 000 professionnels des métiers de bouche revendiqués, et une note publique de 4,9 sur les avis vérifiés.",
    reserve:
      "Le nombre de documents importés par mois est la variable de facturation : 5 en Access, 20 en Essentiel, 40 en Intégrale. Une boulangerie qui reçoit une trentaine de factures par mois est donc sur l'offre à 159 €. Le planning de production n'entre dans aucune des trois offres : c'est un module à 49 € HT/mois, comme le module comptable. Et les pages produit ne documentent ni la gestion des pertes, ni les rendements.",
  },
  {
    id: "chefstouch",
    nom: "ChefsTouch",
    site: "chefstouch.fr",
    rang: "principal",
    positionnement:
      "Une plateforme de fiches techniques collaborative pour tous les métiers de bouche, avec une offre gratuite.",
    cible:
      "Chefs, restaurateurs, boulangers, pâtissiers, chocolatiers, traiteurs, glaciers, mais aussi collectivités, écoles, hôpitaux et marques agroalimentaires.",
    tarif:
      "Starter gratuit (100 fiches), Essentiel 1,99 € HT/mois, Booster 4,90 €, Pro 9,90 €, Business+ 19,90 € par administrateur et par site, Business Pro 39,90 € par administrateur et par site. Offres organisation à 120 € et 240 € HT/mois.",
    tarifCourt: "Gratuit à 39,90 €/admin/site",
    force:
      "Le ticket d'entrée le plus bas du marché, et une offre gratuite réellement utilisable pour créer ses premières fiches. Étiquetage INCO, valeurs nutritionnelles, allergènes, AW et PAC, traduction, et un fonds de recettes partagées par la communauté.",
    reserve:
      "L'intégration automatique des prix depuis les factures et le planning de production n'arrivent qu'à l'offre Business Pro, facturée par administrateur et par site. Sur les offres basses, le suivi de marge est limité à un seul fournisseur. La cible très large fait que la mécanique proprement boulangère n'est pas au centre du produit.",
  },
  {
    id: "melba",
    nom: "Melba",
    site: "melba.io",
    rang: "principal",
    positionnement:
      "« L'ERP design et connecté des professionnels de la restauration. » Une logique d'ERP modulaire.",
    cible:
      "Chaînes et groupes, cuisines centrales, dark kitchens, traiteurs, hôtels-restaurants, et boulangers-pâtissiers parmi d'autres métiers.",
    tarif:
      "Trois modules métier, chacun en Simple à 49 € HT/mois ou Premium à 99 € : Recettes & Ventes, Stocks & Commandes, Traçabilité. Deux compléments : Core à 49 € (5 à 10 utilisateurs par site, puis 15 € par utilisateur) et API à 49 € ou 99 €. Chaque module porte ses crédits IA, 20 en Simple et 40 en Premium. Facturation annuelle : 120 € de moins par an et par module. Essai gratuit sans carte bancaire, aucun frais d'installation.",
    tarifCourt: "49 ou 99 € HT/mois par module",
    force:
      "La profondeur fonctionnelle d'un ERP : analyse des marges, anomalies de livraison, gestion des pertes, traçabilité complète avec relevés de températures et étiquetage INCO, pilotage multisite centralisé, et plus de cent outils pilotables par IA.",
    reserve:
      "La facturation au module : le tarif d'entrée ne couvre qu'un module, et le périmètre d'une boulangerie en demande plusieurs. Recettes et traçabilité font déjà 98 € HT/mois en Simple, 147 € avec les stocks, et le planning de production suppose le Premium du module Recettes. L'outil est par ailleurs dimensionné pour des groupes multi-sites : sa richesse est un coût d'apprentissage pour un artisan seul.",
  },
];

export type Valeur = "oui" | "non" | "partiel" | "option" | "prevu";

/**
 * Échéance annoncée pour les fonctions en cours de développement.
 *
 * « Prévu » n'est PAS « oui », et la distinction n'est pas cosmétique : compter
 * une fonction non livrée comme livrée est précisément la publicité trompeuse
 * que la loi interdit, et c'est aussi la promesse qui se retourne le jour où le
 * client la cherche dans l'application. La case porte donc sa date, et le
 * lecteur juge.
 */
export const ECHEANCE_ROADMAP = "d'ici fin 2026";

export type LigneComparatif = {
  critere: string;
  /** Pourquoi ce critère compte concrètement dans un laboratoire. */
  pourquoi: string;
  valeurs: Record<string, { v: Valeur; note?: string }>;
};

export type BlocComparatif = {
  id: string;
  titre: string;
  lignes: LigneComparatif[];
};

export const blocsComparatif: BlocComparatif[] = [
  {
    id: "metier",
    titre: "Le cœur du métier",
    lignes: [
      {
        critere: "Fiches techniques et recettes",
        pourquoi: "La base de tout : sans fiches structurées, aucun coût n'est calculable.",
        valeurs: {
          gramme: { v: "oui" },
          otami: { v: "oui" },
          chefstouch: { v: "oui" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Sous-recettes en cascade sur plusieurs niveaux",
        pourquoi:
          "Une crème dans un flan dans un plateau. Sans elle, le coût de revient d'un produit travaillé est faux.",
        valeurs: {
          gramme: { v: "oui", note: "Plusieurs niveaux, avec rendement réel de chaque sous-recette" },
          otami: { v: "oui" },
          chefstouch: { v: "oui" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Import de fiches manuscrites en photo",
        pourquoi: "Le vrai point de départ : vos recettes sont sur un cahier, pas dans un fichier.",
        valeurs: {
          gramme: { v: "oui", note: "Fiches farinées, tachées ou anciennes comprises" },
          otami: { v: "partiel", note: "La lecture automatique porte sur les documents fournisseurs" },
          chefstouch: { v: "partiel", note: "Base de recettes partagées à dupliquer et adapter" },
          melba: { v: "partiel" },
        },
      },
      {
        critere: "Pourcentage de perte documenté et intégré au coût",
        pourquoi:
          "Une pâte qui perd 12 % à la cuisson, un fruit qui perd 30 % au parage : sans ce taux, le coût est calculé sur une matière qui n'arrive jamais en vitrine. C'est l'écart le plus fréquent entre un coût de revient théorique et le vrai.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "Poids brut, poids net et taux de perte sur chaque fiche ; le coût est rapporté au produit vendable",
          },
          otami: { v: "partiel", note: "Non documenté sur les pages produit au moment du relevé" },
          chefstouch: { v: "partiel", note: "Approche restauration : coûts, ratios et portions" },
          melba: { v: "option", note: "Module Recettes & Ventes, à partir de 49 € HT/mois" },
        },
      },
      {
        critere: "Pertes de cuisson et de parage, rendement en pièces",
        pourquoi:
          "Le coût doit porter sur le produit vendable, pas sur ce qui sort du pétrin. C'est un réflexe de boulanger, pas de restaurateur.",
        valeurs: {
          gramme: { v: "oui" },
          otami: { v: "oui" },
          chefstouch: { v: "partiel", note: "Coûts, ratios et portions ; approche restauration" },
          melba: { v: "oui" },
        },
      },
    ],
  },
  {
    id: "achats",
    titre: "Factures, mercuriale et marges",
    lignes: [
      {
        critere: "Lecture automatique des factures fournisseurs",
        pourquoi: "C'est ce qui remplace la saisie des prix d'achat, donc ce qui fait tenir la mercuriale.",
        valeurs: {
          gramme: { v: "oui" },
          otami: { v: "oui", note: "Factures, devis et avoirs" },
          chefstouch: { v: "option", note: "À partir de l'offre Business Pro (39,90 €/admin/site)" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Volume de documents inclus par mois",
        pourquoi:
          "Le point qui décide de la facture réelle. Une boulangerie reçoit couramment vingt à quarante factures par mois.",
        valeurs: {
          gramme: { v: "oui", note: "30/mois en Starter, 150/mois en Pro" },
          otami: { v: "partiel", note: "5 en Access, 20 en Essentiel, 40 en Intégrale" },
          chefstouch: { v: "partiel", note: "Non communiqué" },
          melba: { v: "partiel", note: "Non communiqué" },
        },
      },
      {
        critere: "Alerte automatique quand un prix d'achat bouge",
        pourquoi: "Une hausse non vue est une marge perdue pendant des mois.",
        valeurs: {
          gramme: { v: "oui", note: "Notification téléphone et courriel, plage horaire réglable" },
          otami: { v: "oui" },
          chefstouch: { v: "partiel" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Recalcul du coût de revient de toutes les recettes touchées",
        pourquoi: "L'automatisme qui distingue un logiciel d'un tableur.",
        valeurs: {
          gramme: { v: "oui" },
          otami: { v: "oui" },
          chefstouch: { v: "option", note: "Offre Business Pro" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Comparaison de deux fournisseurs sur une même matière",
        pourquoi: "Souvent le gain le plus rapide, et le plus facile à négocier.",
        valeurs: {
          gramme: { v: "oui" },
          otami: { v: "oui", note: "Analyse d'achats par famille" },
          chefstouch: { v: "partiel", note: "Un seul fournisseur sur les offres basses" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Charges fixes intégrées au coût de revient",
        pourquoi:
          "Loyer, énergie, assurances ramenés à la pièce : sans eux, la marge affichée est une marge sur matières, pas un résultat.",
        valeurs: {
          gramme: { v: "oui", note: "Optionnel : si vous ne renseignez rien, le calcul reste sur les matières" },
          otami: { v: "partiel", note: "Non documenté publiquement" },
          chefstouch: { v: "non" },
          melba: { v: "partiel", note: "Non documenté publiquement" },
        },
      },
    ],
  },
  {
    id: "production",
    titre: "Production et stock",
    lignes: [
      {
        critere: "Planning de production",
        pourquoi: "Les quantités du jour, les besoins matières consolidés, le coût de la fournée.",
        valeurs: {
          gramme: { v: "oui", note: "Compris dans l'offre Pro à 89 € HT/mois, sans supplément" },
          otami: { v: "option", note: "Module facturé 49 € HT/mois en plus de l'abonnement, quelle que soit l'offre" },
          chefstouch: { v: "option", note: "À partir de Business Pro (39,90 €/admin/site)" },
          melba: { v: "option", note: "Module Recettes & Ventes Premium, 99 € HT/mois" },
        },
      },
      {
        critere: "Gestion de stock et inventaire valorisé",
        pourquoi: "Savoir ce qu'il reste, et ce que ça vaut.",
        valeurs: {
          gramme: { v: "oui", note: "Offre Pro" },
          otami: { v: "oui" },
          chefstouch: { v: "option", note: "À partir de Business+" },
          melba: { v: "option", note: "Module Stocks & Commandes, à partir de 49 € HT/mois" },
        },
      },
      {
        critere: "Traçabilité de l'origine d'un mouvement de stock",
        pourquoi: "Un écart d'inventaire qu'on ne peut pas expliquer ne sert à rien.",
        valeurs: {
          gramme: { v: "oui", note: "Chaque mouvement porte sa cause" },
          otami: { v: "oui" },
          chefstouch: { v: "partiel" },
          melba: { v: "oui" },
        },
      },
    ],
  },
  {
    id: "reglementaire",
    titre: "Réglementaire & Intégrations",
    lignes: [
      {
        critere: "Relevés de températures des enceintes",
        pourquoi:
          "Le geste d'hygiène le plus quotidien, et le premier qu'un contrôle demande à voir. Il se fait à la main sur un cahier dans la plupart des laboratoires, donc il se rattrape le dimanche soir, de mémoire.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "Vos enceintes, vos bornes, vos horaires de relevé. Un écart appelle son action corrective avant d'être enregistré, la courbe couvre quatre-vingt-dix jours, et le registre s'imprime. Compris dans l'offre Pro",
          },
          otami: { v: "partiel", note: "Non documenté sur les pages publiques au moment du relevé" },
          chefstouch: { v: "non" },
          melba: { v: "option", note: "Module Traçabilité, facturé à partir de 49 € HT/mois" },
        },
      },
      {
        critere: "Plan de nettoyage et pointage",
        pourquoi:
          "Ce qui se nettoie, à quelle fréquence, par qui. Sans trace nominative et datée, le plan de maîtrise sanitaire n'est qu'une intention.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "Plan par zone et par fréquence, pointage d'un geste depuis le téléphone, retards remontés en tête, registre imprimable. Compris dans l'offre Pro",
          },
          otami: { v: "partiel", note: "Non documenté sur les pages publiques au moment du relevé" },
          chefstouch: { v: "non" },
          melba: { v: "option", note: "Module Traçabilité" },
        },
      },
      {
        critere: "Étiquettes de lot, DLC et contrôle à réception",
        pourquoi:
          "Une préparation qui sort du froid sans numéro de lot ni date limite n'est pas traçable. Et la marchandise se contrôle au moment où elle arrive, pas après.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "Numéro de lot, date limite et prénom remplis seuls ; formats 57 × 40, 100 × 50 et planche A4 ; contrôle à réception repris de la facture déjà scannée. Le registre ne se réécrit pas, y compris par un administrateur",
          },
          otami: { v: "partiel", note: "Non documenté sur les pages publiques au moment du relevé" },
          chefstouch: { v: "partiel", note: "Étiquetage INCO" },
          melba: { v: "option", note: "Module Traçabilité" },
        },
      },
      {
        critere: "Étiquetage allergènes réglementaire",
        pourquoi: "Obligatoire en vente non préemballée depuis le décret n° 2015-447.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "Les 14 allergènes de l'annexe II du règlement (UE) 1169/2011, propagés des matières aux sous-recettes puis aux produits finis. Affiche de vitrine et étiquette produit, avec archivage de chaque version imprimée",
          },
          otami: {
            v: "partiel",
            note: "Une rubrique « allergènes / composition » apparaît dans les avis clients publiés par l'éditeur ; les pages produit ne la décrivent pas au moment du relevé",
          },
          chefstouch: { v: "oui" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Valeurs nutritionnelles",
        pourquoi: "Nécessaire pour la vente préemballée et la fourniture à des collectivités.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "Calcul pondéré depuis les fiches, table Ciqual de l'ANSES intégrée (3 484 aliments), ordre et arrondis du règlement (UE) 1169/2011",
          },
          otami: { v: "partiel", note: "Non documenté sur les pages publiques au moment du relevé" },
          chefstouch: { v: "oui", note: "Activité de l'eau et pouvoir anticryoscopique compris, comme chez nous" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Connexion aux caisses et à la comptabilité",
        pourquoi: "Évite la double saisie entre le point de vente, la gestion et l'expert-comptable.",
        valeurs: {
          gramme: {
            v: "prevu",
            note: "En développement, annoncé d'ici fin 2026, tant que ce n'est pas livré, nous ne le comptons pas comme acquis",
          },
          otami: {
            v: "oui",
            note: "Le réseau le plus fourni du marché. Le module comptable (extraction de TVA, journal d'achats, ventilation analytique) est facturé 49 € HT/mois en plus de l'abonnement",
          },
          chefstouch: { v: "partiel" },
          melba: { v: "oui" },
        },
      },
    ],
  },
  {
    id: "usage",
    titre: "Au quotidien",
    lignes: [
      {
        critere: "Utilisable sur téléphone dans le laboratoire",
        pourquoi:
          "C'est le point de bascule. Un boulanger n'est pas devant un ordinateur : il est devant un four à quatre heures du matin, et le seul écran à portée est celui de sa poche. Un outil qui suppose un poste de bureau ne sera ouvert qu'une fois par semaine, donc jamais tenu à jour.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "L'application s'ajoute à l'écran d'accueil de votre téléphone, sans passer par l'App Store et sans mise à jour à lancer. Elle s'ouvre comme n'importe quelle application, notifications comprises",
          },
          otami: { v: "oui", note: "Appareils illimités" },
          chefstouch: { v: "oui" },
          melba: { v: "oui", note: "100 % cloud" },
        },
      },
      {
        critere: "Utilisateurs inclus dans l'abonnement",
        pourquoi:
          "Un tourier, un pâtissier, un apprenti et le patron : à quatre, une facturation par personne change tout. C'est la ligne où nous sommes le moins généreux du comparatif, et elle est ici pour cette raison.",
        valeurs: {
          gramme: { v: "partiel", note: "1 utilisateur en Starter, jusqu'à 5 en Pro" },
          otami: { v: "oui", note: "Utilisateurs et écrans illimités sur les trois offres" },
          chefstouch: { v: "partiel", note: "Facturation par administrateur et par site" },
          melba: { v: "partiel", note: "Non communiqué" },
        },
      },
      {
        critere: "Interface pensée pour être utilisée en production",
        pourquoi:
          "Des écrans lisibles à bout de bras, peu de champs, pas de vocabulaire de logiciel, parce qu'on s'en sert les mains farineuses, debout, entre deux fournées.",
        valeurs: {
          gramme: { v: "oui", note: "Chaque écran est validé en laboratoire avant d'exister" },
          otami: { v: "oui", note: "« Interface accessible sans technicité requise »" },
          chefstouch: { v: "partiel" },
          melba: { v: "partiel", note: "Profondeur d'un ERP : richesse fonctionnelle, donc apprentissage" },
        },
      },
      {
        critere: "Reprise de vos données faite par l'éditeur",
        pourquoi:
          "Ce qui décide si l'outil est adopté ou abandonné. Un compte rempli à moitié n'est jamais rattrapé.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "Plusieurs jours de travail : profils, fournisseurs, mercuriale complète, fiches, factures",
          },
          otami: { v: "partiel", note: "Intégration des anciens documents sur 1 à 2 mois selon l'offre" },
          chefstouch: { v: "non", note: "Prise en main en autonomie" },
          melba: { v: "partiel", note: "« 0 installation requise »" },
        },
      },
      {
        critere: "Essai gratuit",
        pourquoi: "Se faire une idée sans engager un euro.",
        valeurs: {
          gramme: {
            v: "non",
            note: "Démonstration d'une heure sur vos propres fiches, et 30 jours satisfait ou remboursé sur l'annuel",
          },
          otami: { v: "partiel", note: "Non communiqué" },
          chefstouch: { v: "oui", note: "Offre gratuite jusqu'à 100 fiches" },
          melba: { v: "oui", note: "Essai gratuit annoncé sans carte bancaire" },
        },
      },
      {
        critere: "Tarif public affiché",
        pourquoi: "Un prix qu'il faut demander est rarement un prix bas.",
        valeurs: {
          gramme: { v: "oui" },
          otami: { v: "oui" },
          chefstouch: { v: "oui" },
          melba: { v: "partiel", note: "« À partir de » par module" },
        },
      },
      {
        critere: "Multi-établissement",
        pourquoi: "Indispensable dès qu'il y a deux laboratoires ou plusieurs points de vente.",
        valeurs: {
          gramme: { v: "oui", note: "Forfait multi-établissement dédié, bascule entre les ateliers depuis le même compte" },
          otami: { v: "oui", note: "Partage de recettes et suivi par magasin" },
          chefstouch: { v: "oui", note: "Facturation par administrateur et par site" },
          melba: { v: "partiel", note: "Le module Core compte de 5 à 10 utilisateurs par site ; aucun tarif multi-établissement n'est affiché" },
        },
      },
    ],
  },
];

/**
 * Ce qu'une même boulangerie paie réellement, chez chacun.
 *
 * Une grille d'abonnements ne se compare pas : elle se calcule. Le tarif
 * d'entrée d'un éditeur ne dit rien tant qu'on ne sait pas combien de factures
 * il accepte et ce qu'il facture en plus — et c'est exactement là que deux
 * offres affichées 59 € et 89 € finissent à 208 € et 89 €.
 *
 * TENUE OBLIGATOIRE, au même titre que le reste du fichier :
 *
 * - Le scénario est UNIQUE, explicite, et le même pour tout le monde. Choisir
 *   un cas taillé pour nous serait une comparaison truquée.
 * - Chaque total est une ADDITION de prix publics affichés. Aucun devis, aucune
 *   remise négociée, aucune estimation.
 * - **Le moins cher n'est pas nous, et c'est écrit.** ChefsTouch sort devant sur
 *   ce scénario. Un tableau de prix où l'auteur gagne ne se fait citer nulle
 *   part — et le lecteur qui vérifie le premier chiffre ne lit pas le second.
 */
export const SCENARIO_PANIER =
  "Une boulangerie-pâtisserie artisanale, un laboratoire, trois personnes qui se connectent, une trentaine de factures fournisseurs par mois, et le planning de production utilisé toutes les semaines.";

export type LignePanier = {
  id: string;
  offre: string;
  /** Le détail de l'addition, en clair. */
  detail: string;
  /** Total mensuel HT, hors frais d'installation. `null` = non calculable publiquement. */
  totalMensuelHt: number | null;
  /** Ce que le total ne dit pas — dans les deux sens. */
  nuance: string;
};

export const panierCompare: LignePanier[] = [
  {
    id: "chefstouch",
    offre: "ChefsTouch · offre Business Pro",
    detail:
      "39,90 € HT par administrateur et par site. La lecture des factures et le planning de production n'arrivent qu'à cette offre.",
    totalMensuelHt: 39.9,
    nuance:
      "Le total dépend du nombre d'administrateurs et de sites, pas du nombre d'utilisateurs : sur un site avec un seul administrateur, c'est le prix le plus bas de ce comparatif. Il monte en revanche à chaque site et à chaque administrateur ajouté, et le volume de documents inclus n'est pas communiqué.",
  },
  {
    id: "gramme",
    offre: "Gramme · offre Pro",
    detail:
      "89 € HT/mois. 150 factures par mois, planning de production, stocks, allergènes, nutrition et hygiène compris. Jusqu'à cinq utilisateurs.",
    totalMensuelHt: 89,
    nuance:
      "Aucun module à ajouter sur ce scénario. En face : l'installation accompagnée est facturée une seule fois, à partir de 500 € HT en Pro, et il n'y a pas d'essai gratuit en libre-service.",
  },
  {
    id: "otami",
    offre: "Otami · offre Intégrale + module Planning de production",
    detail:
      "159 € HT/mois pour 40 documents importés par mois, plus 49 € HT/mois pour le planning de production, soit 208 € HT/mois. Un mois offert en facturation annuelle.",
    totalMensuelHt: 208,
    nuance:
      "L'offre Essentiel à 99 € s'arrête à 20 documents par mois : à trente factures, le scénario impose l'Intégrale. En face, ce total achète des utilisateurs et des écrans illimités, la gestion multi-site, et le réseau d'intégrations caisse et comptabilité le plus fourni du marché : trois choses qui peuvent valoir l'écart si vous en avez besoin. Le module comptable, à 49 € HT/mois de plus, va jusqu'à l'extraction de TVA et au journal d'achats : nous ne proposons pas d'équivalent.",
  },
  {
    id: "melba",
    offre: "Melba · modules Recettes & Ventes Premium, Stocks & Commandes et Traçabilité",
    detail:
      "99 € HT/mois pour Recettes & Ventes Premium, seul niveau qui porte le planning de production, plus 49 € pour Stocks & Commandes et 49 € pour Traçabilité, soit 197 € HT/mois. Facturation annuelle : 120 € de moins par an et par module.",
    totalMensuelHt: 197,
    nuance:
      "Le panier est écrit pour être contestable : trois modules, dont un en Premium parce que le planning de production du scénario n'existe pas en Simple. Sans le planning, les trois passent à 147 €, et recettes plus traçabilité seules à 98 €. Le module Core, à 49 € de plus, n'est PAS compté ici : l'éditeur le range dans « pour aller plus loin » et ne le présente pas comme obligatoire. Il devient nécessaire au-delà de cinq utilisateurs par site, et se facture ensuite 15 € par utilisateur.",
  },
];

/**
 * Les questions qu'on tape avant d'acheter.
 *
 * Elles ne sont pas là pour le balisage : quelqu'un qui cherche « avis Otami »
 * ou « alternative à Otami » se pose une vraie question, et la seule façon
 * d'être utile — donc cité — est d'y répondre franchement, y compris quand la
 * réponse envoie ailleurs. Une page qui répond « nous, évidemment » à chaque
 * question ne rend service à personne et ne se classe pas longtemps.
 */
export const questionsComparatif = [
  {
    q: "Quelle alternative à Otami pour une boulangerie ou une pâtisserie ?",
    a: "Cela dépend de ce qui vous manque aujourd'hui. Si c'est le volume de factures : Otami facture au nombre de documents importés (5, 20 ou 40 par mois selon l'offre), là où Gramme inclut 30 factures en Starter et 150 en Pro. Si c'est le planning de production, facturé 49 € HT/mois en option chez Otami, il est compris dans notre offre Pro. Si c'est l'hygiène : relevés de températures, plan de nettoyage, étiquettes de lot), Gramme la comprend dans son offre Pro et Melba la propose dans son module Traçabilité, facturé à part. En revanche, si ce que vous cherchez est la connexion à votre caisse ou à votre expert-comptable, Otami reste devant : son réseau d'intégrations est le plus fourni du marché et le nôtre est encore en développement.",
  },
  {
    q: "Combien coûte Otami par mois ?",
    a: "Trois offres publiques au 30 août 2026 : Access à 59 € HT/mois pour 5 documents importés par mois, Essentiel à 99 € pour 20 documents, Intégrale à 159 € pour 40 documents, avec un mois offert en facturation annuelle. Deux modules se facturent en plus de l'abonnement, 49 € HT/mois chacun : le module Comptable et le module Planning de production. Une boulangerie qui reçoit une trentaine de factures par mois et qui veut le planning de production est donc à 208 € HT/mois. Vérifiez ces montants sur otami.fr avant de décider : les grilles bougent.",
  },
  {
    q: "Otami ou Gramme : lequel choisir ?",
    a: "Otami si votre priorité est de supprimer la double saisie avec la caisse et la comptabilité, si vous pilotez plusieurs points de vente, ou s'il vous faut un nombre illimité d'utilisateurs, trois points sur lesquels il est aujourd'hui devant nous. Gramme si votre priorité est le coût de revient au plus juste (pourcentage de perte, rendements, sous-recettes en cascade), le volume de factures sans surcoût, l'hygiène et l'étiquetage compris dans l'abonnement, et une reprise complète de vos données faite avant votre premier jour. Le vrai départage se fait sur vos propres fiches, en une heure, pas sur une grille.",
  },
  {
    q: "Quel logiciel de gestion fait aussi le HACCP en boulangerie ?",
    a: "Gramme le fait : relevés de températures avec vos bornes et vos horaires, plan de nettoyage pointé depuis le téléphone, étiquettes de lot et DLC, contrôle à réception, registres imprimables, le tout compris dans l'offre Pro à 89 € HT/mois. Chez les autres, sur les pages publiques relevées le 30 août 2026, seul Melba couvre ce terrain, dans un module Traçabilité facturé à partir de 49 € HT/mois en plus des autres modules. Une précision qui compte : aucun logiciel ne rend une exploitation conforme. Il enregistre vos relevés, les horodate et les rend imprimables ; la maîtrise sanitaire reste la vôtre.",
  },
  {
    q: "Un logiciel de gestion peut-il remplacer mon cahier de relevés de températures ?",
    a: "Oui, à condition qu'il enregistre la même chose qu'un cahier bien tenu : la valeur, l'heure, l'enceinte concernée et la personne qui a relevé. Dans Gramme, chaque relevé porte ces quatre informations, un écart hors des bornes que vous avez fixées ne s'enregistre pas sans l'action corrective qui va avec, et une erreur ne s'efface pas : elle s'annule avec un motif, les deux lignes restant visibles. C'est précisément ce qu'un registre papier ne permet pas de garantir, et c'est ce qui le rend opposable.",
  },
  {
    q: "Faut-il un logiciel séparé pour l'étiquetage des allergènes ?",
    a: "Ce n'est plus nécessaire si votre logiciel de recettes fait remonter les allergènes tout seuls. C'est le cas de Gramme, ChefsTouch et Melba : les 14 allergènes de l'annexe II du règlement (UE) 1169/2011 se propagent des matières aux sous-recettes puis aux produits finis. La question à poser à un éditeur est plutôt celle-ci : que se passe-t-il quand une matière n'a pas ses allergènes renseignés ? Chez nous, l'étiquette est bloquée et les matières manquantes sont nommées, une matière inconnue n'est pas une matière sans allergène.",
  },
  {
    q: "Quel est le logiciel de gestion boulangerie le moins cher ?",
    a: "Sur les tarifs publics relevés le 30 août 2026, c'est ChefsTouch : une offre gratuite jusqu'à 100 fiches, puis 1,99 € HT/mois, et 39,90 € HT par administrateur et par site pour l'offre Business Pro, la première qui lise vos factures et tienne un planning de production. Nous ne sommes pas les moins chers et nous ne cherchons pas à l'être. La question utile n'est pas le prix affiché mais ce qu'il faut ajouter pour couvrir votre besoin réel : un volume de factures suffisant, le planning de production, l'hygiène. C'est l'objet du tableau de facture réelle plus haut.",
  },
] as const;

/** Les cas d'usage, pour dire franchement quand un autre outil convient mieux. */
export const cheminsDeChoix = [
  {
    profil: "Vous êtes boulanger ou pâtissier artisan, seul ou avec une petite équipe",
    conseil:
      "C'est exactement le cas pour lequel Gramme a été fait. Vous cherchez à savoir ce que chaque produit vous coûte et vous rapporte, sans devenir gestionnaire. Le volume de factures inclus et la reprise complète de vos données au démarrage sont les deux points qui feront la différence à l'usage.",
    verdict: "gramme" as const,
  },
  {
    profil: "Votre priorité absolue est l'hygiène et l'étiquetage",
    conseil:
      "C'est un de nos points forts. Gramme prend les relevés de températures avec vos enceintes, vos bornes et vos horaires, tient le plan de nettoyage, sort les étiquettes de lot et de DLC, enregistre les contrôles à réception, et imprime les registres. Les allergènes et les valeurs nutritionnelles remontent seuls des matières jusqu'aux produits finis. Le tout est compris dans l'offre Pro, sans module à ajouter, et ce que nous livrons ensuite y entre sans surcoût : le produit avance, votre abonnement ne bouge pas. Melba couvre aussi ce terrain, dans un module facturé à part : comparez sur le reste, pas sur cette ligne.",
    verdict: "gramme" as const,
  },
  {
    profil: "Vous hésitez entre deux abonnements et vous voulez savoir ce que vous paierez vraiment",
    conseil:
      "Additionnez avant de comparer. Le nombre de factures acceptées par mois et les modules facturés en plus font plus d'écart que le prix affiché : sur une boulangerie qui reçoit une trentaine de factures et se sert du planning de production, les tarifs publics vont de 39,90 € à 208 € HT par mois selon l'éditeur. Le tableau de facture réelle plus haut fait l'addition pour chacun, avec le détail, et ce n'est pas nous qui sortons le moins cher.",
    verdict: "nuance" as const,
  },
  {
    profil: "Vous voulez surtout supprimer la double saisie entre caisse, gestion et comptabilité",
    conseil:
      "Otami a aujourd'hui le réseau d'intégrations le plus fourni du secteur, et c'est un vrai avantage si votre caisse ou votre logiciel comptable y figure. Son module comptable va jusqu'à l'extraction de TVA et au journal d'achats, pour 49 € HT/mois en plus de l'abonnement ; nous ne proposons pas d'équivalent. Nos connexions sont en développement, annoncées d'ici fin 2026 : tant qu'elles ne sont pas livrées, nous ne les comptons pas comme acquises, regardez la date à laquelle vous en avez besoin.",
    verdict: "nuance" as const,
  },
  {
    profil: "Vous pilotez plusieurs sites ou une cuisine centrale",
    conseil:
      "Gramme a un forfait multi-établissement dédié : chaque atelier garde ses données cloisonnées et vous basculez de l'un à l'autre depuis le même compte. Melba et Otami sont également armés pour ça, avec une profondeur d'ERP chez le premier. Écrivez-nous votre organisation, nous vous dirons franchement lequel des trois vous convient.",
    verdict: "nuance" as const,
  },
  {
    profil: "Vous démarrez et vous cherchez d'abord à structurer vos fiches",
    conseil:
      "L'offre gratuite de ChefsTouch permet de commencer sans rien engager. Vous y viendrez à la limite le jour où vous voudrez que vos factures mettent vos prix à jour toutes seules, c'est le moment où Gramme prend le relais, et où le forfait de mise en service à 300 € pour une entreprise en création prend son sens.",
    verdict: "nuance" as const,
  },
  {
    profil: "Vous travaillez au four, pas au bureau",
    conseil:
      "C'est la question qui décide de tout le reste, et elle est rarement posée. Gramme s'ajoute à l'écran d'accueil de votre téléphone et s'ouvre comme n'importe quelle application, sans passer par l'App Store, sans rien installer, et sans mise à jour à lancer. Le même compte, la même version, sur le téléphone posé près du pétrin, sur la tablette du labo et sur l'ordinateur du bureau. C'est la question à poser à tout éditeur avant de signer : demandez à voir l'écran de saisie sur un téléphone, pas sur une capture d'ordinateur.",
    verdict: "gramme" as const,
  },
  {
    profil: "Vos coûts de revient vous paraissent trop beaux pour être vrais",
    conseil:
      "Regardez d'abord si votre outil actuel tient le pourcentage de perte. Une pâte qui perd 12 % à la cuisson, un fruit qui perd 30 % au parage : sans ce taux, le coût est calculé sur une matière qui n'arrive jamais en vitrine, et la marge affichée est systématiquement flatteuse. C'est le premier calcul que Gramme pose sur chaque fiche (poids brut, poids net, taux de perte) et c'est aussi ce que les pages produit d'Otami ne documentent pas.",
    verdict: "gramme" as const,
  },
  {
    profil: "Vous êtes noyé dans un tableur que plus personne ne tient",
    conseil:
      "C'est la situation la plus fréquente, et c'est celle où le gain est le plus net, quel que soit l'outil que vous choisirez. Prenez au moins une démonstration : une heure sur vos vraies fiches vous dira en une fois ce que six mois de comparaison de sites ne vous diront pas.",
    verdict: "gramme" as const,
  },
];

/**
 * Les pages dédiées à un concurrent.
 *
 * Pourquoi elles existent : `/comparatif` répond à « quel logiciel choisir »,
 * une intention large et disputée. Mais la requête qui convertit vraiment porte
 * un NOM — « avis Otami », « Otami tarif », « alternative à Otami ». Celui qui
 * la tape a déjà un outil en tête : il ne se documente plus, il vérifie. Une
 * page par concurrent capte cette intention-là sans diluer la page pilier, et
 * l'éditeur concerné ne se compare jamais lui-même : la place est libre.
 *
 * Ce fichier ne redit RIEN de ce qu'il sait déjà. La page se construit à partir
 * de `concurrents`, de `blocsComparatif` filtré sur l'identifiant, et de
 * `panierCompare` — un tableau qui recopierait ces données finirait par les
 * contredire, et c'est exactement le défaut qu'on vient de corriger ailleurs.
 *
 * La tenue de `comparatif.ts` s'applique intégralement, et une de plus qui lui
 * est propre : **une page « alternative à X » qui démolit X ne se fait citer
 * nulle part.** Elle se lit comme un argumentaire, elle se partage comme un
 * tract, et le lecteur qui connaît X y voit tout de suite ce qui manque. Le
 * bloc `mieuxQueNous` n'est donc pas une concession polie — c'est ce qui rend
 * le reste croyable.
 */
export type PageConcurrent = {
  /** L'identifiant d'une entrée de `concurrents`. */
  id: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  /** Deux phrases sous le titre. */
  chapeau: string;
  /**
   * Ce que cet éditeur fait mieux que nous, nommé sans détour.
   * EXACTEMENT trois : le gabarit écrit « Trois points » en toutes lettres.
   */
  mieuxQueNous: { titre: string; texte: string }[];
  /**
   * La phrase qui introduit les deux captures d'hygiène, et l'alt de l'image
   * sociale.
   *
   * Elles étaient écrites en dur dans le gabarit sous la forme « ce que
   * {concurrent} ne documente pas ». C'est vrai d'Otami, dont les pages
   * publiques n'en parlent pas ; c'est FAUX de Melba, qui documente la
   * traçabilité dans un module facturé à part. Une phrase de gabarit qui
   * affirme quelque chose sur un tiers doit venir de la fiche de ce tiers,
   * sinon elle devient fausse au deuxième concurrent, et personne ne s'en
   * aperçoit avant que l'intéressé ne le fasse remarquer.
   */
  hygiene: { intro: string; altSociale: string };
  /** Quand le choisir plutôt que nous, et quand c'est l'inverse. */
  quandLuiQuandNous: { profil: string; verdict: "lui" | "nous"; texte: string }[];
  faq: { q: string; a: string }[];
};

export const pagesConcurrent: PageConcurrent[] = [
  {
    id: "otami",
    metaTitle: "Otami : avis, tarifs et alternative | Gramme",
    metaDescription:
      "Les trois offres d'Otami, le plafond de documents qui décide de la facture, les deux modules à 49 €, et ce que la même boulangerie paie chez nous.",
    keywords: [
      "avis Otami",
      "Otami tarif",
      "Otami prix",
      "Otami avis boulangerie",
      "alternative Otami",
      "logiciel comme Otami",
      "Otami ou Gramme",
      "Otami boulangerie pâtisserie",
      "concurrent Otami",
    ],
    h1: "Otami : ce qu'il fait bien, ce qu'il coûte vraiment, et quand nous sommes le meilleur choix",
    chapeau:
      "Otami est le logiciel dont les artisans nous parlent le plus, et le plus proche du nôtre sur le métier. Voici son tarif public, la variable qui fait vraiment monter la facture, et les trois points sur lesquels il nous dépasse.",
    hygiene: {
      intro:
        "Les deux écrans qu'Otami ne documente pas sur ses pages publiques, et qui sont compris dans notre offre Pro : le relevé de températures et le plan de nettoyage, pris depuis le téléphone du laboratoire.",
      altSociale: "Les relevés de températures dans Gramme, ce qu'Otami ne documente pas",
    },
    mieuxQueNous: [
      {
        titre: "Le réseau d'intégrations, et il n'y a pas photo",
        texte:
          "Caisses (Zelty, CarrePOS, Cashpad, Connectill, Addictill), comptabilité (Pennylane, Synapsy, Evoliz), facturation (Libeo, Abill, Cashmag, Menlog). Si votre caisse ou votre expert-comptable figure dans cette liste, c'est un argument que nous ne pouvons pas contrer aujourd'hui : nos connexions sont en développement, annoncées d'ici fin 2026, et tant qu'elles ne sont pas livrées nous ne les comptons pas.",
      },
      {
        titre: "Utilisateurs et écrans illimités",
        texte:
          "Sur les trois offres, sans supplément. Notre offre Pro s'arrête à cinq utilisateurs. Pour une équipe de dix personnes qui doivent toutes se connecter, l'écart de prix se referme vite, et c'est la ligne où nous sommes les moins généreux de tout notre comparatif.",
      },
      {
        titre: "Un vrai module comptable",
        texte:
          "Extraction de TVA sur les factures de matières premières, journal d'achats prêt à envoyer, ventilation par familles et codes analytiques. Facturé 49 € HT/mois en plus de l'abonnement. Nous ne proposons aucun équivalent : si votre besoin numéro un est de soulager votre comptable, regardez sérieusement de ce côté.",
      },
    ],
    quandLuiQuandNous: [
      {
        profil: "Votre caisse ou votre comptabilité doit être connectée",
        verdict: "lui",
        texte:
          "C'est le cas le plus net. Vérifiez d'abord que votre logiciel figure dans leur liste d'intégrations, puis prenez Otami. Nous vous ferons perdre du temps sur ce point précis.",
      },
      {
        profil: "Vous avez plus de cinq personnes qui se connectent",
        verdict: "lui",
        texte:
          "Utilisateurs illimités contre cinq chez nous : à dix comptes, la comparaison de prix change de sens. Écrivez-nous quand même votre organisation, il arrive que seules trois personnes aient réellement besoin d'un accès en écriture.",
      },
      {
        profil: "Vous recevez plus de vingt factures par mois",
        verdict: "nous",
        texte:
          "C'est la variable qui décide de la facture. L'offre Essentiel à 99 € s'arrête à 20 documents importés par mois ; au-delà, c'est l'Intégrale à 159 €. Nous incluons 30 factures en Starter et 150 en Pro, et une facture de plus ne change pas votre abonnement.",
      },
      {
        profil: "Vous voulez le planning de production et les registres d'hygiène",
        verdict: "nous",
        texte:
          "Chez Otami, le planning de production est un module à 49 € HT/mois, et le suivi sanitaire n'est pas documenté sur les pages publiques. Chez nous, planning, relevés de températures, plan de nettoyage, étiquettes de lot et registres imprimables sont dans l'offre Pro, sans module à ajouter.",
      },
      {
        profil: "Vos coûts de revient vous paraissent trop beaux",
        verdict: "nous",
        texte:
          "Regardez si votre outil tient le pourcentage de perte. Une pâte qui perd 12 % à la cuisson, un fruit qui perd 30 % au parage : sans ce taux, le coût porte sur une matière qui n'arrive jamais en vitrine, et la marge affichée est systématiquement flatteuse. C'est le premier calcul que nous posons sur chaque fiche, et les pages produit d'Otami ne le documentent pas.",
      },
      {
        profil: "Vous démarrez et vos données sont éparpillées",
        verdict: "nous",
        texte:
          "Otami reprend vos anciens documents sur un à deux mois selon l'offre. Nous montons le compte de bout en bout avant votre premier jour : profils, fournisseurs, mercuriale complète, fiches, factures. C'est facturé une seule fois, et c'est ce qui décide si un outil est adopté ou abandonné.",
      },
    ],
    faq: [
      {
        q: "Otami, c'est bien pour une boulangerie ?",
        a: "Oui, et c'est un outil sérieux : plus de 4 000 professionnels des métiers de bouche revendiqués, une note publique de 4,9 sur les avis vérifiés, et des retours clients qui citent le suivi des marges, l'inventaire et la réactivité du service client. Sa force la plus rare sur le marché est son réseau d'intégrations avec les caisses et les logiciels comptables. Ses limites, pour un artisan : le nombre de documents importés par mois est la variable de facturation, le planning de production est un module payant, et les pages produit ne documentent ni la gestion des pertes ni les rendements, trois mécaniques qui décident de la justesse d'un coût de revient en boulangerie.",
      },
      {
        q: "Combien coûte Otami exactement ?",
        a: "Trois offres publiques : Access à 59 € HT/mois pour 5 documents importés par mois, Essentiel à 99 € pour 20 documents, Intégrale à 159 € pour 40 documents, avec un mois offert en facturation annuelle. Deux modules se facturent en plus de l'abonnement, 49 € HT/mois chacun : Comptable et Planning de production. Une boulangerie qui reçoit une trentaine de factures par mois et veut le planning de production est donc à 208 € HT/mois. Vérifiez ces montants sur otami.fr avant de décider : les grilles bougent, et nous republions les nôtres avec la date du relevé.",
      },
      {
        q: "Qu'est-ce qui compte dans « 5, 20 ou 40 documents par mois » ?",
        a: "Les documents que vous importez pour être lus automatiquement, factures, devis et avoirs fournisseurs. C'est le chiffre à confronter à votre réalité avant toute comparaison de prix : une boulangerie de quartier qui travaille avec un meunier, un crémier, un chocolatier, un fruitier et deux grossistes dépasse couramment vingt documents par mois sans s'en rendre compte. C'est ce seuil, et non le tarif affiché, qui détermine l'offre dont vous relèverez.",
      },
      {
        q: "Peut-on passer d'Otami à Gramme sans tout ressaisir ?",
        a: "Oui. Vous exportez ce que vous pouvez de votre outil actuel, et nous reprenons le reste : fiches techniques, sous-recettes, mercuriale, fournisseurs, et vos factures des derniers mois pour que l'historique de prix existe dès le premier jour. C'est notre installation accompagnée, facturée une seule fois. Nous n'avons pas de connecteur automatique depuis Otami : ce serait vous mentir que de le prétendre.",
      },
      {
        q: "Otami fait-il l'HACCP et les relevés de températures ?",
        a: "Ce n'est pas documenté sur leurs pages publiques au moment de notre relevé, et nous ne comptons jamais une fonction que l'éditeur n'annonce pas, dans un sens comme dans l'autre. Posez-leur directement la question si c'est un critère pour vous. De notre côté, les relevés de températures, le plan de nettoyage, les étiquettes de lot et les registres imprimables sont dans l'offre Pro, sans module en supplément.",
      },
      {
        q: "Otami gère-t-il les allergènes ?",
        a: "Une rubrique « allergènes / composition » est évoquée dans les avis clients publiés par l'éditeur, mais les pages produit ne la décrivent pas au moment de notre relevé, nous la notons donc « partiel » plutôt que de trancher à leur place. Chez nous, les 14 allergènes de l'annexe II du règlement (UE) 1169/2011 se renseignent une fois par matière et remontent seuls aux sous-recettes puis aux produits finis, avec l'affiche de vitrine et l'étiquette produit qui vont avec.",
      },
    ],
  },
  {
    id: "melba",
    metaTitle: "Melba : avis, tarifs et alternative | Gramme",
    metaDescription:
      "Le prix réel de Melba quand on additionne les modules dont une boulangerie a besoin, ce que l'ERP fait mieux que nous, et quand chacun est le bon choix.",
    keywords: [
      "avis Melba",
      "Melba tarif",
      "Melba prix",
      "melba.io avis",
      "alternative Melba",
      "logiciel comme Melba",
      "Melba ou Gramme",
      "Melba boulangerie pâtisserie",
    ],
    h1: "Melba : ce qu'il fait mieux que nous, ce que coûtent ses modules, et quand nous sommes le bon choix",
    chapeau:
      "Melba est l'ERP le plus complet de ce comparatif, et fonctionnellement le plus proche de nous. Toute la question est le prix : il facture par module, et le périmètre d'une boulangerie en demande plusieurs.",
    hygiene: {
      intro:
        "Melba couvre ce terrain, dans son module Traçabilité facturé à partir de 49 € HT/mois. Voici les mêmes écrans chez nous, compris dans l'offre Pro sans rien ajouter : le relevé de températures et le plan de nettoyage, pris depuis le téléphone du laboratoire.",
      altSociale:
        "Les relevés de températures dans Gramme, compris dans l'offre Pro là où Melba les facture en module",
    },
    mieuxQueNous: [
      {
        titre: "La profondeur d'un ERP, et le pilotage multi-sites",
        texte:
          "Anomalies de livraison, réclamations fournisseurs, tâches programmées, traçabilité intermédiaire, personnalisation illimitée des droits utilisateurs. Si vous pilotez plusieurs sites de production ou une cuisine centrale, cette profondeur est un vrai avantage, et nous ne l'avons pas à ce niveau.",
      },
      {
        titre: "Les connexions à la caisse et à la comptabilité",
        texte:
          "Melba annonce ses intégrations et une API ouverte, facturée 49 € ou 99 € HT/mois selon le volume d'appels. Chez nous, les connexions sont en développement et annoncées d'ici fin 2026 : tant qu'elles ne sont pas livrées, nous ne les comptons pas. Sur ce point précis, ils sont devant.",
      },
      {
        titre: "L'essai gratuit, que nous n'offrons pas du tout",
        texte:
          "Un essai gratuit sans carte bancaire, et aucun frais d'installation. Nous faisons l'inverse : pas d'essai en libre-service, une démonstration d'une heure sur vos propres fiches, et une installation accompagnée facturée une fois. C'est un choix, mais si vous voulez tester seul un dimanche soir, allez chez eux.",
      },
    ],
    quandLuiQuandNous: [
      {
        profil: "Vous pilotez plusieurs sites ou une cuisine centrale",
        verdict: "lui",
        texte:
          "C'est le cas le plus net. La profondeur d'ERP et la gestion fine des droits sont faites pour ça, et la facturation au module devient logique quand chaque site a des besoins différents. Nous avons un forfait multi-établissement, mais pas cette granularité.",
      },
      {
        profil: "Vous voulez essayer avant de payer",
        verdict: "lui",
        texte:
          "Essai gratuit sans carte chez eux, rien de tel chez nous. Nous ne proposons qu'une démonstration d'une heure, en direct, sur vos fiches. Si l'idée même d'un rendez-vous vous rebute, la question est réglée.",
      },
      {
        profil: "Vous êtes un artisan, seul ou avec une petite équipe",
        verdict: "nous",
        texte:
          "C'est là que l'addition des modules se retourne. Recettes et traçabilité font 98 € HT/mois en Simple ; avec les stocks, 147 € ; et le planning de production impose le Premium du module Recettes, ce qui porte l'ensemble à 197 €. Chez nous il y a deux tarifs, 49 € et 89 €, et tout est dans le second.",
      },
      {
        profil: "Vous voulez que l'hygiène soit comprise, pas facturée à part",
        verdict: "nous",
        texte:
          "Relevés de températures, plan de nettoyage, étiquettes de lot et contrôle à réception vivent chez eux dans le module Traçabilité, à partir de 49 € HT/mois. Chez nous ils sont dans l'offre Pro, sans supplément, et ce que nous livrons ensuite y entre sans que votre abonnement bouge.",
      },
      {
        profil: "Vos fiches sont sur papier, dans un classeur",
        verdict: "nous",
        texte:
          "C'est le seul point du tableau où nous sommes seuls à répondre oui. Une fiche manuscrite, même ancienne ou farinée, se photographie et se reconstruit, sous-recettes séparées des recettes finales. Chez Melba, la reprise n'est pas documentée au-delà du « 0 installation requise ».",
      },
      {
        profil: "Vous voulez savoir ce que vous paierez avant d'appeler",
        verdict: "nous",
        texte:
          "Melba affiche un prix par module, pas le prix d'une combinaison : le total de votre périmètre demande un échange commercial. Nos deux tarifs sont publics, et ce que chacun contient l'est aussi. Cela dit, prenez le temps de faire l'addition dans les deux sens : sur un périmètre restreint à un seul module, ils sont moins chers que nous.",
      },
    ],
    faq: [
      {
        q: "Combien coûte Melba pour une boulangerie ?",
        a: "Cela dépend des modules retenus, et c'est tout l'enjeu. Au relevé du 31 août 2026, les trois modules métier sont à 49 € HT/mois en Simple et 99 € en Premium : Recettes & Ventes, Stocks & Commandes, Traçabilité. Un périmètre de boulangerie réaliste en demande au moins deux, soit 98 € ; avec les stocks, 147 € ; et le planning de production n'existe qu'au Premium du module Recettes, ce qui porte l'ensemble à 197 € HT/mois. Le module Core, à 49 € de plus, n'est pas présenté comme obligatoire mais devient nécessaire au-delà de cinq utilisateurs par site. Vérifiez ces montants sur melba.io avant de décider : les grilles bougent, et nous republions les nôtres avec la date du relevé.",
      },
      {
        q: "Melba ou Gramme : lequel choisir ?",
        a: "Melba si vous pilotez plusieurs sites, si vous avez besoin de la profondeur d'un ERP, si les connexions à votre caisse et à votre comptable sont votre priorité, ou si vous voulez essayer seul avant de payer. Gramme si vous êtes un artisan boulanger ou pâtissier, si vos fiches sont sur papier, si vous voulez que l'hygiène et le planning soient compris plutôt que facturés en modules, et si vous préférez deux tarifs publics à une addition. Fonctionnellement nous sommes très proches : c'est le mode de facturation et la reprise de vos données qui départagent.",
      },
      {
        q: "Melba fait-il le HACCP et les relevés de températures ?",
        a: "Oui, dans son module Traçabilité, facturé à partir de 49 € HT/mois : étiquettes digitalisées, relevés de températures et plan de maîtrise sanitaire, avec la traçabilité intermédiaire et les tâches programmées au niveau Premium. C'est le seul concurrent de notre comparatif à couvrir sérieusement ce terrain, et il faut le dire. La différence n'est pas la fonction, c'est qu'elle se paie en plus chez eux et qu'elle est dans l'offre Pro chez nous.",
      },
      {
        q: "Peut-on passer de Melba à Gramme sans tout ressaisir ?",
        a: "Oui. Vous exportez ce que vous pouvez de votre outil actuel, et nous reprenons le reste pendant l'installation accompagnée : fiches techniques, sous-recettes, mercuriale, fournisseurs, et vos factures des derniers mois pour que l'historique de prix existe dès le premier jour. Nous n'avons pas de connecteur automatique depuis Melba, et prétendre le contraire serait vous mentir.",
      },
      {
        q: "Melba est-il fait pour la boulangerie ou pour la restauration ?",
        a: "Melba se présente comme l'outil des professionnels de la restauration et sert des chaînes, des cuisines centrales, des traiteurs et des hôtels autant que des boulangers. C'est une force pour un groupe, et une nuance pour un artisan : l'outil est dimensionné pour des organisations, et sa richesse fonctionnelle est un coût d'apprentissage quand on est seul au fournil. Gramme ne fait qu'un métier, celui de la boulangerie et de la pâtisserie, et a été conçu avec un chef pâtissier en exercice.",
      },
      {
        q: "Qu'est-ce que le module Core de Melba ?",
        a: "Un complément à 49 € HT/mois qui couvre de cinq à dix utilisateurs par site, cinquante modèles et la personnalisation illimitée des droits, puis 15 € par utilisateur supplémentaire. L'éditeur le range dans une section « pour aller plus loin » et ne le présente pas comme obligatoire : nous ne le comptons donc pas dans le prix plancher, alors que l'y ajouter gonflerait notre comparaison de moitié. Il devient nécessaire dès que l'équipe dépasse le nombre d'accès inclus.",
      },
    ],
  },
  {
    id: "chefstouch",
    metaTitle: "ChefsTouch : avis, tarifs et alternative | Gramme",
    metaDescription:
      "L'offre gratuite de ChefsTouch, ce qu'elle contient vraiment, à partir de quelle offre le scan des factures arrive, et quand chacun est le bon choix.",
    keywords: [
      "avis ChefsTouch",
      "ChefsTouch tarif",
      "ChefsTouch prix",
      "ChefsTouch gratuit",
      "alternative ChefsTouch",
      "logiciel comme ChefsTouch",
      "ChefsTouch ou Gramme",
      "ChefsTouch boulangerie pâtisserie",
    ],
    h1: "ChefsTouch : l'offre gratuite, ce qu'elle couvre, et à partir de quand il faut payer",
    chapeau:
      "ChefsTouch a le ticket d'entrée le plus bas du marché et une offre gratuite réellement utilisable. La question n'est pas son prix, c'est le moment où votre besoin sort de ce que le prix bas contient.",
    hygiene: {
      intro:
        "Les deux écrans que ChefsTouch ne documente pas sur ses pages publiques, et qui sont compris dans notre offre Pro : le relevé de températures et le plan de nettoyage, pris depuis le téléphone du laboratoire.",
      altSociale: "Les relevés de températures dans Gramme, ce que ChefsTouch ne documente pas",
    },
    mieuxQueNous: [
      {
        titre: "Une offre gratuite qui sert vraiment à quelque chose",
        texte:
          "Jusqu'à cent fiches recettes, impression standard, calculs nutritionnels, sans limite de durée. Nous n'avons rien de gratuit, et pas même un essai en libre-service. Pour quelqu'un qui veut sortir ses recettes du papier ce soir sans parler à personne, c'est imbattable, et nous ne prétendrons pas le contraire.",
      },
      {
        titre: "Le prix d'entrée le plus bas, de très loin",
        texte:
          "1,99 € HT/mois pour les fiches illimitées, 4,90 € avec le coût de revient sur un fournisseur, 9,90 € avec les fournisseurs illimités et l'étiquetage INCO. Notre premier tarif est à 49 €. Sur un besoin qui s'arrête aux fiches et aux allergènes, la comparaison n'est même pas discutable.",
      },
      {
        titre: "Un fonds de recettes partagées, et la traduction",
        texte:
          "Une communauté qui publie ses fiches, consultables et reprenables, et la traduction assistée par intelligence artificielle pour travailler à plusieurs langues. Nous n'avons ni l'un ni l'autre, et nous n'en avons pas le projet : nos fiches restent celles de votre maison, et elles ne sortent pas de chez vous.",
      },
    ],
    quandLuiQuandNous: [
      {
        profil: "Vous voulez simplement numériser vos fiches, sans rien payer",
        verdict: "lui",
        texte:
          "Cent fiches gratuites, sans durée limite. C'est le meilleur point de départ du marché pour ça, et nous n'avons aucune raison de vous en détourner. Revenez nous voir le jour où vous voudrez que vos prix se mettent à jour tout seuls.",
      },
      {
        profil: "Votre budget logiciel est de quelques euros par mois",
        verdict: "lui",
        texte:
          "À 4,90 € ou 9,90 € HT/mois, ChefsTouch fait des choses que personne d'autre ne fait à ce prix. Notre Starter est à 49 €. Si le budget est la contrainte première, la question est tranchée avant même de comparer les fonctions.",
      },
      {
        profil: "Vous voulez que vos factures mettent vos prix à jour",
        verdict: "nous",
        texte:
          "C'est le basculement. L'intégration automatique des prix depuis les factures n'arrive qu'à l'offre Business Pro, à 39,90 € HT/mois par administrateur et par site. À un administrateur sur un site, c'est moins cher que nous ; à deux administrateurs, l'écart se referme. Et le volume de documents accepté n'est pas communiqué, là où nous incluons 30 factures en Starter et 150 en Pro.",
      },
      {
        profil: "Vous voulez le planning de production",
        verdict: "nous",
        texte:
          "Même offre, même bascule : le planning de production arrive avec Business Pro. Chez nous il est dans l'offre Pro, avec le stock, l'hygiène et l'étiquetage, sans module à ajouter.",
      },
      {
        profil: "Vous tenez des registres sanitaires",
        verdict: "nous",
        texte:
          "Les relevés de températures et le plan de nettoyage ne sont pas documentés sur leurs pages publiques au moment de notre relevé, et nous ne comptons jamais une fonction qu'un éditeur n'annonce pas. Posez-leur la question si c'est un critère. Chez nous, registres, étiquettes de lot et contrôle à réception sont dans l'offre Pro.",
      },
      {
        profil: "Vous voulez qu'on installe l'outil à votre place",
        verdict: "nous",
        texte:
          "ChefsTouch est un outil en libre-service : vous montez votre base vous-même. Nous montons le compte de bout en bout avant votre premier jour, profils, fournisseurs, mercuriale, fiches et factures comprises. C'est facturé une fois, et c'est ce qui décide si un outil est adopté ou abandonné.",
      },
    ],
    faq: [
      {
        q: "ChefsTouch est-il vraiment gratuit ?",
        a: "Oui, dans une offre Starter sans limite de durée : jusqu'à cent fiches recettes, impression standard, messagerie et calculs nutritionnels. Ce qui n'y est pas : la marge et le coût de revient, qui commencent à l'offre Booster à 4,90 € HT/mois avec un seul fournisseur, puis les fournisseurs illimités à 9,90 €. C'est une offre gratuite honnête, pas une démonstration déguisée, et c'est assez rare pour être dit.",
      },
      {
        q: "Combien coûte ChefsTouch exactement ?",
        a: "Au relevé du 31 août 2026 : Starter gratuit, Essentiel 1,99 € HT/mois, Booster 4,90 €, Pro 9,90 €, puis deux offres facturées par administrateur et par établissement, Business+ à 19,90 € et Business Pro à 39,90 €. Des offres organisation existent à 120 € et 240 € HT/mois. La variable qui compte n'est pas le nombre d'utilisateurs mais le nombre d'administrateurs et de sites : sur un site avec un seul administrateur, c'est le prix le plus bas de notre comparatif.",
      },
      {
        q: "À partir de quelle offre ChefsTouch lit-il les factures fournisseurs ?",
        a: "L'intégration automatique des prix par photo ou par scan est annoncée à l'offre Business Pro, 39,90 € HT/mois par administrateur et par site. Le planning de production et les statistiques avancées arrivent au même palier. Le volume de documents accepté par mois n'est pas communiqué, et c'est le chiffre à leur demander avant de comparer : chez nous, 30 factures par mois en Starter et 150 en Pro, et une facture de plus ne change pas l'abonnement.",
      },
      {
        q: "ChefsTouch ou Gramme : lequel choisir ?",
        a: "ChefsTouch si votre besoin s'arrête aux fiches techniques, aux allergènes et aux valeurs nutritionnelles, si le budget est la contrainte première, ou si vous exercez plusieurs métiers de bouche. Gramme si vous voulez que vos factures mettent vos prix à jour toutes seules, que le planning et les registres sanitaires soient compris, et qu'on reprenne vos données à votre place. Beaucoup d'artisans commencent chez eux et viennent chez nous quand la mercuriale devient le sujet.",
      },
      {
        q: "ChefsTouch gère-t-il les relevés de températures ?",
        a: "Ce n'est pas documenté sur leurs pages publiques au moment de notre relevé, et nous ne comptons jamais une fonction qu'un éditeur n'annonce pas, dans un sens comme dans l'autre. L'étiquetage INCO, les allergènes et les valeurs nutritionnelles, eux, sont bien là et à un prix très bas. Chez nous, relevés de températures, plan de nettoyage, étiquettes de lot et registres imprimables sont dans l'offre Pro.",
      },
    ],
  },
];

export function pageConcurrent(id: string): PageConcurrent | undefined {
  return pagesConcurrent.find((p) => p.id === id);
}
