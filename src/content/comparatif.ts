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

export const RELEVE_LE = "26 août 2026";

export type Concurrent = {
  id: string;
  nom: string;
  site: string;
  /** L'accroche que l'éditeur emploie lui-même. */
  positionnement: string;
  cible: string;
  tarif: string;
  /** Ce que l'éditeur fait particulièrement bien. Honnête, pas concédé du bout des lèvres. */
  force: string;
  /** Ce qui, pour un artisan boulanger-pâtissier, peut coincer. Factuel. */
  reserve: string;
};

export const concurrents: Concurrent[] = [
  {
    id: "gramme",
    nom: "Gramme",
    site: "gramme.app",
    positionnement:
      "Le logiciel de gestion et de production des artisans boulangers et pâtissiers, conçu par un chef pâtissier en exercice.",
    cible: "Boulangerie, pâtisserie, chocolaterie artisanales — de l'artisan seul à l'équipe d'une quinzaine.",
    tarif:
      "49 € HT/mois (490 €/an) en Starter, 89 € HT/mois (890 €/an) en Pro. Installation accompagnée à partir de 300 € HT, une seule fois.",
    force:
      "Le pourcentage de perte et les rendements traités comme des données de premier plan, les sous-recettes en cascade sur plusieurs niveaux, le volume de factures inclus sans surcoût, la reprise complète des données faite par l'éditeur avant le premier jour, et le planning de production compris dans l'offre Pro.",
    reserve:
      "HACCP, étiquetage allergènes, valeurs nutritionnelles et connexion aux caisses et à la comptabilité sont en cours de développement, annoncés d'ici fin 2026 : nous ne les comptons donc pas encore comme acquis dans les tableaux ci-dessous.",
  },
  {
    id: "otami",
    nom: "Otami",
    site: "otami.fr",
    positionnement:
      "« La solution pour simplifier vos achats, vos marges et votre production. » Le concurrent le plus proche de Gramme sur le métier.",
    cible: "Boulangerie, pâtisserie et restauration, du commerce isolé au multi-site.",
    tarif:
      "Avec engagement annuel : 59 € HT/mois (Access), 70 € (Essentiel, au lieu de 99 €), 100 € (Intégrale, au lieu de 159 €). Sans engagement : 69 €, 119 €, 179 €. Planning de production en option à 49 € HT/mois, module comptable à 49 € HT/mois.",
    force:
      "Le réseau d'intégrations, de loin le plus fourni du marché : caisses (Zelty, CarrePOS, Cashpad, Connectill, Addictill), comptabilité (Pennylane, Synapsy, Evoliz), facturation (Libeo, Abill, Cashmag, Menlog). Utilisateurs et appareils illimités sur toutes les offres, et gestion multi-site native.",
    reserve:
      "Le nombre de documents traités par mois est la variable de facturation : 5 en Access, 20 en Essentiel, 40 en Intégrale. Une boulangerie qui reçoit une trentaine de factures par mois sort de l'offre d'entrée. Le planning de production se paie en plus, et les pages produit ne documentent pas la gestion des pertes ni des rendements.",
  },
  {
    id: "logibake",
    nom: "LogiBake",
    site: "logibake.com",
    positionnement:
      "« La logique au service de votre boulangerie-pâtisserie. » Une couverture métier très large, HACCP et étiquetage compris.",
    cible: "Fabrication à domicile, petits laboratoires, boulangeries en croissance, laboratoires centralisés.",
    tarif:
      "Offre unique « Tout inclus » à 399 € HT par an, soit 33,25 € HT par mois, avec deux mois offerts. Sans engagement. Essai gratuit de 14 jours sans carte bancaire.",
    force:
      "Le tarif le plus bas du marché sur un périmètre complet — 399 € HT par an, tout inclus — et la couverture réglementaire que peu proposent : traçabilité HACCP, gestion des DLC, étiquettes allergènes, valeurs nutritionnelles. Le compte démarre pré-rempli avec 200 recettes professionnelles et 300 ingrédients déjà chiffrés, et un assistant IA (« Pastel ») interroge vos données.",
    reserve:
      "Application de bureau macOS et Windows ; les versions iOS, iPadOS et Android sont annoncées comme « bientôt » disponibles. Les pages produit ne documentent ni le pourcentage de perte, ni les rendements, ni les sous-recettes — trois mécaniques déterminantes pour un coût de revient juste en boulangerie.",
  },
  {
    id: "chefstouch",
    nom: "ChefsTouch",
    site: "chefstouch.fr",
    positionnement:
      "Une plateforme de fiches techniques collaborative pour tous les métiers de bouche, avec une offre gratuite.",
    cible:
      "Chefs, restaurateurs, boulangers, pâtissiers, chocolatiers, traiteurs, glaciers, mais aussi collectivités, écoles, hôpitaux et marques agroalimentaires.",
    tarif:
      "Starter gratuit (100 fiches), Essentiel 1,99 € HT/mois, Booster 4,90 €, Pro 9,90 €, Business+ 19,90 € par administrateur et par site, Business Pro 39,90 € par administrateur et par site. Offres organisation à 120 € et 240 € HT/mois.",
    force:
      "Le ticket d'entrée le plus bas du marché, et une offre gratuite réellement utilisable pour créer ses premières fiches. Étiquetage INCO, valeurs nutritionnelles, allergènes, AW et PAC, traduction, et un fonds de recettes partagées par la communauté.",
    reserve:
      "L'intégration automatique des prix depuis les factures et le planning de production n'arrivent qu'à l'offre Business Pro, facturée par administrateur et par site. Sur les offres basses, le suivi de marge est limité à un seul fournisseur. La cible très large fait que la mécanique proprement boulangère n'est pas au centre du produit.",
  },
  {
    id: "melba",
    nom: "Melba",
    site: "melba.io",
    positionnement:
      "« L'ERP design et connecté des professionnels de la restauration. » Une logique d'ERP modulaire.",
    cible:
      "Chaînes et groupes, cuisines centrales, dark kitchens, traiteurs, hôtels-restaurants, et boulangers-pâtissiers parmi d'autres métiers.",
    tarif:
      "À partir de 49 € HT/mois et par module, sur cinq modules (Analyses, Opérations, Traçabilité, Multisite, IA). Crédits IA facturés à part. Aucun frais d'installation : « 0 installation requise — 100 % cloud ».",
    force:
      "La profondeur fonctionnelle d'un ERP : analyse des marges, anomalies de livraison, gestion des pertes, traçabilité complète avec relevés de température et étiquetage INCO, pilotage multisite centralisé, et plus de cent outils pilotables par IA.",
    reserve:
      "La facturation au module : le tarif d'entrée ne couvre qu'un module, et une couverture complète suppose de les additionner. L'outil est dimensionné pour des groupes multi-sites — sa richesse est un coût d'apprentissage pour un artisan seul.",
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
          logibake: { v: "oui" },
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
          logibake: { v: "oui" },
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
          logibake: { v: "partiel", note: "Compte pré-rempli de 200 recettes et 300 ingrédients" },
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
          logibake: { v: "partiel", note: "Non documenté sur les pages Recettes et Production au moment du relevé" },
          chefstouch: { v: "partiel", note: "Approche restauration : coûts, ratios et portions" },
          melba: { v: "oui", note: "Gestion des pertes annoncée dans le module Analyses" },
        },
      },
      {
        critere: "Pertes de cuisson et de parage, rendement en pièces",
        pourquoi:
          "Le coût doit porter sur le produit vendable, pas sur ce qui sort du pétrin. C'est un réflexe de boulanger, pas de restaurateur.",
        valeurs: {
          gramme: { v: "oui" },
          otami: { v: "oui" },
          logibake: { v: "oui" },
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
          logibake: { v: "oui" },
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
          logibake: { v: "partiel", note: "Non plafonné en documents ; 30 000 crédits IA par mois" },
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
          logibake: { v: "oui" },
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
          logibake: { v: "oui" },
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
          logibake: { v: "oui" },
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
          logibake: { v: "partiel", note: "Non documenté publiquement" },
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
          gramme: { v: "oui", note: "Inclus dans l'offre Pro, sans supplément" },
          otami: { v: "option", note: "Option à 49 € HT/mois en plus de l'abonnement" },
          logibake: { v: "oui" },
          chefstouch: { v: "option", note: "À partir de Business Pro (39,90 €/admin/site)" },
          melba: { v: "oui", note: "Module Opérations" },
        },
      },
      {
        critere: "Gestion de stock et inventaire valorisé",
        pourquoi: "Savoir ce qu'il reste, et ce que ça vaut.",
        valeurs: {
          gramme: { v: "oui", note: "Offre Pro" },
          otami: { v: "oui" },
          logibake: { v: "oui" },
          chefstouch: { v: "option", note: "À partir de Business+" },
          melba: { v: "oui", note: "Module Opérations" },
        },
      },
      {
        critere: "Traçabilité de l'origine d'un mouvement de stock",
        pourquoi: "Un écart d'inventaire qu'on ne peut pas expliquer ne sert à rien.",
        valeurs: {
          gramme: { v: "oui", note: "Chaque mouvement porte sa cause" },
          otami: { v: "oui" },
          logibake: { v: "oui" },
          chefstouch: { v: "partiel" },
          melba: { v: "oui" },
        },
      },
    ],
  },
  {
    id: "reglementaire",
    titre: "Réglementaire — ce que nous n'avons pas encore",
    lignes: [
      {
        critere: "Traçabilité HACCP, relevés, DLC",
        pourquoi: "Obligatoire en production alimentaire, et opposable en cas de contrôle.",
        valeurs: {
          gramme: { v: "prevu", note: "En développement, annoncé d'ici fin 2026. En attendant, Gramme s'utilise en complément d'un outil HACCP" },
          otami: { v: "non" },
          logibake: { v: "oui", note: "Traçabilité HACCP et gestion des DLC" },
          chefstouch: { v: "partiel", note: "Étiquetage INCO" },
          melba: { v: "oui", note: "Module Traçabilité, relevés de température compris" },
        },
      },
      {
        critere: "Étiquetage allergènes réglementaire",
        pourquoi: "Obligatoire en vente non préemballée depuis le décret n° 2015-447.",
        valeurs: {
          gramme: { v: "prevu", note: "En développement, annoncé d'ici fin 2026. Le répertoire de recettes en constitue déjà la source fiable" },
          otami: { v: "non" },
          logibake: { v: "oui" },
          chefstouch: { v: "oui" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Valeurs nutritionnelles",
        pourquoi: "Nécessaire pour la vente préemballée et la fourniture à des collectivités.",
        valeurs: {
          gramme: { v: "prevu", note: "En développement, annoncé d'ici fin 2026" },
          otami: { v: "non" },
          logibake: { v: "oui" },
          chefstouch: { v: "oui", note: "AW et PAC compris" },
          melba: { v: "oui" },
        },
      },
      {
        critere: "Connexion aux caisses et à la comptabilité",
        pourquoi: "Évite la double saisie entre le point de vente, la gestion et l'expert-comptable.",
        valeurs: {
          gramme: { v: "prevu", note: "En développement, annoncé d'ici fin 2026 — tant que ce n'est pas livré, nous ne le comptons pas comme acquis" },
          otami: { v: "oui", note: "Le réseau le plus fourni du marché" },
          logibake: { v: "partiel", note: "Non documenté publiquement" },
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
          "C'est le point de bascule. Un boulanger n'est pas devant un ordinateur : il est devant un four à quatre heures du matin, et le seul écran à portée est celui de sa poche. Un outil qui suppose un poste de bureau ne sera ouvert qu'une fois par semaine — donc jamais tenu à jour.",
        valeurs: {
          gramme: {
            v: "oui",
            note: "Application web installable (PWA) : elle s'ajoute à l'écran d'accueil et se comporte comme une application native, notifications comprises",
          },
          otami: { v: "oui", note: "Appareils illimités" },
          logibake: {
            v: "non",
            note: "Application de bureau macOS et Windows ; iOS, iPadOS et Android annoncés « bientôt »",
          },
          chefstouch: { v: "oui" },
          melba: { v: "oui", note: "100 % cloud" },
        },
      },
      {
        critere: "Rien à installer, aucune mise à jour à lancer",
        pourquoi:
          "Un logiciel de bureau, ce sont des installations poste par poste, des versions qui divergent entre l'ordinateur du bureau et celui du labo, et un informaticien à appeler. Une application web s'ouvre, et elle est déjà à jour.",
        valeurs: {
          gramme: { v: "oui", note: "Le même compte, la même version, sur ordinateur, tablette et téléphone" },
          otami: { v: "oui" },
          logibake: { v: "non", note: "Installation sur chaque poste macOS ou Windows" },
          chefstouch: { v: "oui" },
          melba: { v: "oui", note: "« 0 installation requise — 100 % cloud »" },
        },
      },
      {
        critere: "Interface pensée pour être utilisée en production",
        pourquoi:
          "Des écrans lisibles à bout de bras, peu de champs, pas de vocabulaire de logiciel — parce qu'on s'en sert les mains farineuses, debout, entre deux fournées.",
        valeurs: {
          gramme: { v: "oui", note: "Chaque écran est validé en laboratoire avant d'exister" },
          otami: { v: "oui", note: "« Interface accessible sans technicité requise »" },
          logibake: { v: "partiel", note: "Ergonomie de bureau, tant que les versions mobiles ne sont pas sorties" },
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
          logibake: { v: "partiel", note: "Compte pré-rempli d'un fonds générique, pas de vos données" },
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
          logibake: { v: "oui", note: "14 jours, sans carte bancaire" },
          chefstouch: { v: "oui", note: "Offre gratuite jusqu'à 100 fiches" },
          melba: { v: "partiel", note: "Non communiqué" },
        },
      },
      {
        critere: "Tarif public affiché",
        pourquoi: "Un prix qu'il faut demander est rarement un prix bas.",
        valeurs: {
          gramme: { v: "oui" },
          otami: { v: "oui" },
          logibake: { v: "oui", note: "399 € HT/an, tout inclus" },
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
          logibake: { v: "oui", note: "Laboratoires centralisés multi-points de vente" },
          chefstouch: { v: "oui", note: "Facturation par administrateur et par site" },
          melba: { v: "oui", note: "Module Multisite" },
        },
      },
    ],
  },
];

/** Les cas d'usage, pour dire franchement quand un autre outil convient mieux. */
export const cheminsDeChoix = [
  {
    profil: "Vous êtes boulanger ou pâtissier artisan, seul ou avec une petite équipe",
    conseil:
      "C'est exactement le cas pour lequel Gramme a été fait. Vous cherchez à savoir ce que chaque produit vous coûte et vous rapporte, sans devenir gestionnaire. Le volume de factures inclus et la reprise complète de vos données au démarrage sont les deux points qui feront la différence à l'usage.",
    verdict: "gramme" as const,
  },
  {
    profil: "Votre priorité absolue est la conformité sanitaire et l'étiquetage",
    conseil:
      "Tout dépend de votre calendrier. HACCP, DLC, allergènes et valeurs nutritionnelles sont aujourd'hui des fonctions livrées chez LogiBake et Melba, alors qu'elles sont en cours de développement chez nous, annoncées d'ici fin 2026. S'il vous les faut ce trimestre, prenez l'un d'eux. Si votre échéance est plus lointaine, parlons-en : nous vous dirons où nous en sommes précisément, sans arrondir.",
    verdict: "nuance" as const,
  },
  {
    profil: "Vous voulez surtout supprimer la double saisie entre caisse, gestion et comptabilité",
    conseil:
      "Otami a aujourd'hui le réseau d'intégrations le plus fourni du secteur, et c'est un vrai avantage si votre caisse ou votre logiciel comptable y figure. Nos connexions sont en développement, annoncées d'ici fin 2026 : tant qu'elles ne sont pas livrées, nous ne les comptons pas comme acquises — regardez la date à laquelle vous en avez besoin.",
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
      "L'offre gratuite de ChefsTouch permet de commencer sans rien engager. Vous y viendrez à la limite le jour où vous voudrez que vos factures mettent vos prix à jour toutes seules — c'est le moment où Gramme prend le relais, et où le forfait de mise en service à 300 € pour une entreprise en création prend son sens.",
    verdict: "nuance" as const,
  },
  {
    profil: "Vous travaillez au four, pas au bureau",
    conseil:
      "C'est la question qui décide de tout le reste, et elle est rarement posée. Gramme est une application web installable : elle s'ajoute à l'écran d'accueil du téléphone et s'ouvre comme une application, sans rien installer et sans mise à jour à lancer. Le même compte, la même version, sur le téléphone posé près du pétrin, sur la tablette du labo et sur l'ordinateur du bureau. LogiBake, à l'inverse, est aujourd'hui une application de bureau macOS et Windows — ses versions mobiles sont annoncées comme « bientôt » disponibles.",
    verdict: "gramme" as const,
  },
  {
    profil: "Vos coûts de revient vous paraissent trop beaux pour être vrais",
    conseil:
      "Regardez d'abord si votre outil actuel tient le pourcentage de perte. Une pâte qui perd 12 % à la cuisson, un fruit qui perd 30 % au parage : sans ce taux, le coût est calculé sur une matière qui n'arrive jamais en vitrine, et la marge affichée est systématiquement flatteuse. C'est le premier calcul que Gramme pose sur chaque fiche — poids brut, poids net, taux de perte — et c'est aussi ce que les pages produit d'Otami et de LogiBake ne documentent pas.",
    verdict: "gramme" as const,
  },
  {
    profil: "Vous êtes noyé dans un tableur que plus personne ne tient",
    conseil:
      "C'est la situation la plus fréquente, et c'est celle où le gain est le plus net, quel que soit l'outil que vous choisirez. Prenez au moins une démonstration : une heure sur vos vraies fiches vous dira en une fois ce que six mois de comparaison de sites ne vous diront pas.",
    verdict: "gramme" as const,
  },
];
