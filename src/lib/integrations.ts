export type IntegrationCategory = "encaissement" | "comptabilite" | "facturation";

export type Integration = {
  id: string;
  name: string;
  category: IntegrationCategory;
  blurb: string;
  initial: string;
  /** Chemin local du logo (public/). */
  logo: string;
};

export const INTEGRATION_CATEGORIES: {
  id: IntegrationCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "encaissement",
    label: "Encaissement",
    description:
      "Connecter votre caisse pour croiser ventes et coûts — et mieux piloter vos marges produit.",
  },
  {
    id: "comptabilite",
    label: "Comptabilité",
    description:
      "Faciliter les échanges avec votre expert-comptable grâce à des exports et synchronisations adaptées.",
  },
  {
    id: "facturation",
    label: "Facturation",
    description:
      "Fluidifier le dépôt et le traitement des documents fournisseurs au-delà du scan déjà prévu dans Gramme.",
  },
];

/** Intégrations à venir — priorisées pour boulangerie / pâtisserie / métiers de bouche. */
export const INTEGRATIONS: Integration[] = [
  {
    id: "popina",
    name: "Popina",
    category: "encaissement",
    blurb: "Caisse sur tablette pour les pros du CHR et des métiers de bouche.",
    initial: "P",
    logo: "/images/integrations/popina.png",
  },
  {
    id: "zettle",
    name: "Zettle",
    category: "encaissement",
    blurb: "Encaissement mobile et paiements pour commerces de proximité.",
    initial: "Z",
    logo: "/images/integrations/zettle.png",
  },
  {
    id: "crisalid",
    name: "Crisalid",
    category: "encaissement",
    blurb: "Caisse certifiée NF525 conçue pour les métiers de bouche.",
    initial: "C",
    logo: "/images/integrations/crisalid.png",
  },
  {
    id: "toporder",
    name: "Toporder",
    category: "encaissement",
    blurb: "Caisse iPad certifiée NF525 pour commerces de proximité.",
    initial: "T",
    logo: "/images/integrations/toporder.svg",
  },
  {
    id: "cashpad",
    name: "Cashpad",
    category: "encaissement",
    blurb: "Solution d'encaissement moderne pour la restauration.",
    initial: "Ca",
    logo: "/images/integrations/cashpad.png",
  },
  {
    id: "zelty",
    name: "Zelty",
    category: "encaissement",
    blurb: "Plateforme d'encaissement et de commandes pour la restauration.",
    initial: "Ze",
    logo: "/images/integrations/zelty.png",
  },
  {
    id: "pennylane",
    name: "Pennylane",
    category: "comptabilite",
    blurb: "Plateforme de gestion financière et comptable en temps réel.",
    initial: "Pe",
    logo: "/images/integrations/pennylane.png",
  },
  {
    id: "evoliz",
    name: "Evoliz",
    category: "comptabilite",
    blurb: "Outil de facturation et de suivi financier pour TPE / PME.",
    initial: "E",
    logo: "/images/integrations/evoliz.svg",
  },
  {
    id: "libeo",
    name: "Libeo",
    category: "facturation",
    blurb: "Centralisation et paiement des factures fournisseurs.",
    initial: "L",
    logo: "/images/integrations/libeo.png",
  },
  {
    id: "zeendoc",
    name: "Zeendoc",
    category: "facturation",
    blurb: "GED pour centraliser et automatiser vos documents.",
    initial: "Zd",
    logo: "/images/integrations/zeendoc.png",
  },
];

export const HOME_INTEGRATION_PREVIEWS = ["popina", "pennylane", "zettle", "crisalid", "libeo"] as const;
