/**
 * Questionnaire de qualification (Phase 0 du playbook superviseur).
 * Source unique : les clés `name` sont celles stockées dans
 * onboarding_questionnaires.reponses et lues par l'edge function
 * onboarding-questionnaire pour calculer le dimensionnement.
 */

export type Choice = { value: string; label: string };

export type Field =
  | { kind: "text"; name: string; label: string; placeholder?: string; required?: boolean; hint?: string }
  | { kind: "textarea"; name: string; label: string; placeholder?: string; required?: boolean; hint?: string }
  | { kind: "number"; name: string; label: string; hint?: string; required?: boolean; min?: number }
  | { kind: "tel"; name: string; label: string; required?: boolean }
  | { kind: "radio"; name: string; label: string; choices: Choice[]; required?: boolean; hint?: string; otherFor?: string }
  /** Choix multiple : plusieurs réponses cochables, stockées en tableau. */
  | { kind: "checkbox"; name: string; label: string; choices: Choice[]; required?: boolean; hint?: string; otherFor?: string }
  | { kind: "users"; name: string; label: string; hint?: string }
  | { kind: "files"; name: string; label: string; categorie: FileCategory; hint?: string; accept?: string };

/**
 * Jumelle de `src/lib/onboarding-categories.ts` dans le dépôt de l'application
 * (`DEV/gramme`), et de la liste blanche de l'Edge Function
 * `onboarding-questionnaire`. Les trois doivent rester d'accord : une catégorie
 * ajoutée d'un seul côté produit un dépôt refusé par le serveur, ou un fichier
 * qui arrive sans libellé dans la console du superviseur.
 */
export type FileCategory =
  | "recettes"
  | "factures"
  | "mercuriale"
  | "produits_prix"
  | "ventes"
  | "logo"
  | "autre";

export type Step = {
  id: string;
  title: string;
  intro?: string;
  fields: Field[];
};

export const ONBOARDING_STEPS: Step[] = [
  {
    id: "etablissement",
    title: "Votre établissement",
    fields: [
      { kind: "text", name: "etablissement", label: "Nom de l'établissement", required: true },
      { kind: "text", name: "ville", label: "Ville", required: true },
      { kind: "tel", name: "telephone", label: "Téléphone" },
      {
        kind: "text",
        name: "siret",
        label: "SIRET",
        hint: "Facultatif, utile pour préparer le contrat.",
      },
      {
        // Choix multiple (#109) : un artisan est rarement d'une seule
        // spécialité — boulangerie ET pâtisserie ET chocolaterie est le cas
        // ordinaire. « Activité principale » obligeait à en renier deux, et le
        // dimensionnement de la reprise partait de là.
        kind: "checkbox",
        name: "activite",
        label: "Activités",
        hint: "Plusieurs réponses possibles.",
        required: true,
        otherFor: "activite_autre",
        // Ordre des quatre métiers du site, puis les activités voisines. La
        // GLACERIE manquait alors qu'elle a sa page et que l'équilibrage la
        // sert en premier ; le TRAITEUR est ajouté pour savoir combien ils
        // sont avant de leur construire quoi que ce soit.
        choices: [
          { value: "boulangerie", label: "Boulangerie" },
          { value: "patisserie", label: "Pâtisserie" },
          { value: "chocolaterie", label: "Chocolaterie" },
          { value: "glacerie", label: "Glacerie" },
          { value: "traiteur", label: "Traiteur / chef à domicile" },
          { value: "restaurant_hotel", label: "Restaurant / Hôtel" },
          { value: "autre", label: "Autre" },
        ],
      },
      { kind: "number", name: "nb_sites_production", label: "Nombre de sites de production", min: 1, required: true },
      { kind: "number", name: "nb_points_vente", label: "Nombre de points de vente", min: 0 },
      { kind: "number", name: "effectif_production", label: "Effectif en production", min: 0 },
    ],
  },
  {
    id: "organisation",
    title: "Votre organisation actuelle",
    intro: "Il n'y a pas de mauvaise réponse. Ces trois questions servent à dimensionner le travail de reprise, pas à vous juger.",
    fields: [
      {
        // Choix multiple (#63) : en pratique c'est presque toujours « Excel ET
        // le cahier du chef ». Forcer une réponse unique donnait un
        // dimensionnement faux dès la première question.
        kind: "checkbox",
        name: "gestion_fiches",
        label: "Comment gérez-vous vos fiches techniques aujourd'hui ?",
        hint: "Plusieurs réponses possibles.",
        required: true,
        otherFor: "gestion_fiches_logiciel",
        choices: [
          { value: "excel", label: "Excel / Google Sheets" },
          { value: "papier", label: "Papier / classeur" },
          { value: "logiciel", label: "Logiciel métier" },
          { value: "rien", label: "Rien de formalisé" },
          { value: "autre", label: "Autre" },
        ],
      },
      {
        kind: "radio",
        name: "connaissance_cout",
        label: "Connaissez-vous le coût matière de vos produits ?",
        required: true,
        choices: [
          { value: "oui_a_jour", label: "Oui, à jour" },
          { value: "oui_ancien", label: "Oui, mais ancien" },
          { value: "approximatif", label: "Approximativement" },
          { value: "non", label: "Non" },
        ],
      },
      {
        kind: "radio",
        name: "frequence_maj_prix",
        label: "À quelle fréquence mettez-vous vos prix d'achat à jour ?",
        required: true,
        choices: [
          { value: "chaque_facture", label: "À chaque facture" },
          { value: "mensuel", label: "Mensuel" },
          { value: "annuel", label: "Annuel" },
          { value: "jamais", label: "Jamais" },
        ],
      },
    ],
  },
  {
    id: "volumes",
    title: "Volumes à reprendre",
    intro: "Des ordres de grandeur suffisent. C'est ce qui détermine la durée de la mise en service et le niveau d'accompagnement.",
    fields: [
      {
        kind: "number",
        name: "volume_sous_recettes",
        label: "Sous-recettes",
        hint: "Crèmes, pâtes, ganaches, appareils…",
        min: 0,
        required: true,
      },
      { kind: "number", name: "volume_recettes_composees", label: "Fiches techniques", hint: "Royal chocolat, religieuse vanille, flan pistache…", min: 0, required: true },
      { kind: "number", name: "volume_produits_finis", label: "Produits finis référencés à la vente", min: 0 },
      { kind: "number", name: "nb_fournisseurs", label: "Fournisseurs actifs", min: 0 },
      { kind: "number", name: "nb_references", label: "Références achetées (matières premières, environ)", min: 0 },
      { kind: "number", name: "factures_par_mois", label: "Factures fournisseurs reçues par mois", min: 0 },
    ],
  },
  {
    id: "utilisateurs",
    title: "Utilisateurs",
    intro: "Qui utilisera Gramme au quotidien ? C'est le point le plus déterminant pour que le compte vive après la mise en service.",
    fields: [
      { kind: "users", name: "utilisateurs", label: "Personnes à créer" },
      {
        kind: "text",
        name: "utilisateur_principal",
        label: "Qui sera l'utilisateur principal au quotidien ?",
        required: true,
        hint: "Une seule personne, nommée. C'est elle qui fera vivre le compte.",
      },
    ],
  },
  {
    id: "technique",
    title: "Contexte technique",
    fields: [
      {
        kind: "checkbox",
        name: "materiel",
        label: "Matériel disponible en production",
        hint: "Plusieurs réponses possibles.",
        required: true,
        otherFor: "materiel_autre",
        choices: [
          { value: "ordinateur", label: "Ordinateur" },
          { value: "tablette", label: "Tablette" },
          { value: "smartphone", label: "Smartphone" },
          { value: "autre", label: "Autre" },
        ],
      },
      {
        kind: "radio",
        name: "connexion_labo",
        label: "Connexion internet au laboratoire",
        required: true,
        choices: [
          { value: "oui", label: "Oui" },
          { value: "faible", label: "Faible / instable" },
          { value: "non", label: "Non" },
        ],
      },
      {
        kind: "radio",
        name: "factures_numeriques",
        label: "Recevez-vous vos factures fournisseurs au format numérique (PDF) ?",
        required: true,
        choices: [
          { value: "oui", label: "Oui, toutes" },
          { value: "partiel", label: "En partie" },
          { value: "non", label: "Non, papier" },
        ],
      },
    ],
  },
  {
    id: "attentes",
    title: "Vos attentes",
    fields: [
      {
        kind: "textarea",
        name: "probleme_principal",
        label: "Quel est le problème n°1 que vous voulez régler avec Gramme ?",
        required: true,
        placeholder: "Ex. je ne sais pas ce que me coûtent réellement mes entremets depuis que le chocolat a augmenté.",
      },
      {
        kind: "textarea",
        name: "echeance",
        label: "Y a-t-il une échéance à respecter ?",
        placeholder: "Ouverture, saison, changement de carte, audit…",
      },
    ],
  },
  {
    id: "fichiers",
    title: "Vos documents",
    intro:
      "Facultatif, mais c'est ce qui change tout : si nous recevons vos documents avant le rendez-vous, votre compte sera déjà préparé quand nous arriverons. Vous pourrez aussi nous les remettre sur place. Et si quelque chose ne rentre dans aucune case, la dernière est faite pour ça : nous préférons trop d'informations que pas assez.",
    fields: [
      {
        kind: "files",
        name: "f_recettes",
        label: "Fiches techniques et recettes",
        categorie: "recettes",
        hint: "Tout format, y compris des photos de votre classeur ou de votre cahier.",
      },
      {
        kind: "files",
        name: "f_factures",
        label: "Factures fournisseurs des 3 derniers mois",
        categorie: "factures",
        hint: "PDF ou scans. C'est ce qui permet d'avoir vos prix d'achat justes dès le premier jour.",
      },
      {
        kind: "files",
        name: "f_mercuriale",
        label: "Mercuriale / tarifs fournisseurs négociés",
        categorie: "mercuriale",
        hint: "Idéalement les références réellement commandées sur l'année écoulée, ou sur le plus de mois possible. C'est ce qui donne un historique de prix dès le premier jour.",
      },
      {
        kind: "files",
        name: "f_ventes",
        label: "Tickets Z de caisse du dernier mois",
        categorie: "ventes",
        hint: "Les clôtures de caisse, en photo ou en PDF. Elles servent à préparer votre premier dossier comptable : sans elles, le journal des ventes part vide chez votre comptable. Un export de votre caisse en tableur convient aussi.",
      },
      {
        kind: "files",
        name: "f_produits_prix",
        label: "Liste des produits finis avec prix de vente",
        categorie: "produits_prix",
      },
      { kind: "files", name: "f_logo", label: "Logo et éléments d'identité visuelle", categorie: "logo" },
      {
        // Le fourre-tout, et il est volontaire. Les six cases au-dessus
        // couvrent ce qu'on sait demander ; un atelier a toujours autre chose
        // qui compte, et qui se perdait faute d'endroit où le mettre : un plan
        // de nettoyage, un tableau de production, un contrat fournisseur, une
        // liste d'allergènes tenue à la main. La catégorie `autre` existait
        // déjà en base, dans l'Edge Function et dans la console du
        // superviseur : seul le formulaire ne l'offrait pas.
        kind: "files",
        name: "f_autres",
        label: "Tout le reste",
        categorie: "autre",
        hint: "Ce qui ne rentre dans aucune case au-dessus et qui compte quand même : plan de nettoyage, tableau de production, contrat fournisseur, liste d'allergènes, étiquettes actuelles, organigramme du laboratoire. Mieux vaut nous l'envoyer que de nous le décrire.",
      },
    ],
  },
];

export const ACCEPTED_MIME = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/heic",
  "image/webp",
  "text/csv",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.oasis.opendocument.spreadsheet",
];

export const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;

export type UserRow = {
  nom: string;
  fonction: string;
  email: string;
  usage: string;
  /** Rôle Gramme à attribuer à la création du compte (#63). */
  role: string;
};

/** Miroir de public.roles_permissions — voir docs/ACCES-PAR-ROLE.md côté app. */
export const USER_ROLES: Choice[] = [
  { value: "admin", label: "Admin : tout, équipe comprise" },
  { value: "gestionnaire", label: "Gestionnaire : tout le métier, sans l'équipe" },
  { value: "operateur", label: "Opérateur : atelier, recettes, stock, scans" },
  { value: "lecture_seule", label: "Lecture seule : consultation" },
];

export const USER_USAGES: Choice[] = [
  { value: "consultation", label: "Consultation" },
  { value: "recettes", label: "Création de recettes" },
  { value: "couts", label: "Gestion des coûts" },
];

/** Champs obligatoires d'une étape, pour la validation avant passage à la suivante. */
export function requiredFieldsOf(step: Step): string[] {
  return step.fields.filter((f) => "required" in f && f.required).map((f) => f.name);
}
