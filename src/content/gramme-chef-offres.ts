/**
 * Les offres de Gramme Chef, décidées le 24/09/2026 face à MyChef (gratuit,
 * 12 €, 29 €) et Planoya (69 € TTC) : une seule source pour la page Gramme
 * Chef, la page tarifs, les données structurées et `llms.txt`.
 *
 * L'offre Chef s'affiche TTC : la plupart des chefs à domicile sont en
 * franchise de TVA et ne la récupèrent pas, c'est donc le prix qu'ils paient
 * vraiment et celui qu'ils comparent. Chef Pro vise les chefs sortis de la
 * franchise et les traiteurs, qui raisonnent hors taxes.
 */

export type OffreChef = {
  id: "carnet" | "chef" | "chef-pro";
  nom: string;
  pour: string;
  prix: string;
  unite: string;
  detail: string;
  /** Pour les données structurées : montant mensuel et TVA comprise ou non. */
  montant: number;
  tvaComprise: boolean;
  recommandee?: boolean;
  contenu: string[];
};

export const OFFRES_CHEF: OffreChef[] = [
  {
    id: "carnet",
    nom: "Carnet",
    pour: "Pour chiffrer vos menus et voir ce que ça change.",
    prix: "0 €",
    unite: "pour toujours",
    detail: "Sans carte bancaire, sans limite de durée.",
    montant: 0,
    tvaComprise: true,
    contenu: [
      "Recettes et coût matière illimités, prix saisis à la main",
      "Menus et mise à l'échelle au nombre de convives",
      "Liste de courses tirée du menu",
      "Allergènes des convives sur chaque plat",
      "Votre page de réservation et votre agenda",
      "3 devis par mois",
    ],
  },
  {
    id: "chef",
    nom: "Chef",
    pour: "Pour le chef qui fait des prestations chaque mois.",
    prix: "19 €",
    unite: "TTC par mois",
    detail: "Soit 15,83 € HT. Ou 190 € TTC par an, deux mois offerts.",
    montant: 19,
    tvaComprise: true,
    recommandee: true,
    contenu: [
      "Tout le Carnet, sans limite",
      "Réservations depuis votre site et votre Instagram : un module à coller en une ligne",
      "Agenda synchronisé avec Google Agenda et le calendrier de l'iPhone",
      "Questionnaire envoyé automatiquement aux convives : allergies, goûts, cuisine sur place",
      "Menus proposés au client, qui choisit en ligne",
      "Devis signés en ligne, acompte et solde payés en ligne par carte, Apple Pay ou virement, sans commission Gramme",
      "Factures, relances automatiques et espace client",
      "Vos prix lus sur vos tickets et vos factures, mémorisés magasin par magasin (40 photos par mois)",
      "Livre des recettes et suivi du plafond de la micro-entreprise",
      "Tableau de bord, et ce qui vous reste par heure travaillée",
    ],
  },
  {
    id: "chef-pro",
    nom: "Chef Pro",
    pour: "Pour le chef sorti de la franchise de TVA, et le traiteur.",
    prix: "29 €",
    unite: "HT par mois",
    detail: "Soit 34,80 € TTC. Ou 290 € HT par an, deux mois offerts.",
    montant: 29,
    tvaComprise: false,
    contenu: [
      "Tout Chef, avec 150 photos de tickets et factures par mois",
      "API et notifications : vos réservations reliées à votre propre site ou application",
      "Page de réservation sur votre nom de domaine",
      "TVA sur les factures : 5,5 %, 10 % ou 20 %, taux par ligne",
      "Export comptable des factures et des encaissements",
      "Facturation électronique incluse, et Peppol pour la Belgique",
      "Plusieurs cuisiniers sur le même compte",
    ],
  },
];

export const ESSAI_CHEF =
  "Deux mois de l'offre Chef complète à l'inscription, sans carte bancaire. Sans abonnement ensuite, le compte passe au Carnet gratuit : rien n'est supprimé.";

export const PRIX_FONDATEUR = {
  prix: "12 € TTC par mois",
  pour: "les chefs de la bêta et les 100 premiers abonnés inscrits avant le 31 mars 2027",
  texte:
    "L'offre Chef à 12 € TTC par mois, garantie à vie tant que l'abonnement n'est pas interrompu, pour les chefs de la bêta et les 100 premiers abonnés inscrits avant le 31 mars 2027.",
};

/** Les offres au format schema.org : pas encore en vente, donc PreOrder. */
export function offresChefSchema() {
  return OFFRES_CHEF.map((o) => ({
    "@type": "Offer",
    name: `Gramme Chef ${o.nom}`,
    price: String(o.montant),
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(o.montant),
      priceCurrency: "EUR",
      unitCode: "MON",
      valueAddedTaxIncluded: o.tvaComprise,
    },
    availability: "https://schema.org/PreOrder",
    availabilityStarts: "2027-01-01",
    description: `${o.pour} ${o.prix} ${o.unite}, lancement en janvier 2027`,
  }));
}
