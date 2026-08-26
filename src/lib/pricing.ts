/** Source unique des tarifs publics Gramme (HT). Tarif fondateur : jamais affiché ici. */

export type BillingPeriod = "monthly" | "yearly";

export type PlanId = "starter" | "pro";

export type PlanFeature = {
  label: string;
  /** Ligne mise en avant visuellement dans la carte d'offre */
  emphasis?: boolean;
};

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  highlight?: boolean;
  features: PlanFeature[];
  monthlyPrice: number;
  yearlyPrice: number;
  /** Prix mensuel équivalent affiché en mode annuel */
  yearlyMonthlyEquivalent: number;
  yearlySavings: number;
  installPrice: number;
  installInstallments: number;
  installInstallmentAmount: number;
};

export const pricingPlans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Pour les artisans qui veulent aller à l’essentiel.",
    features: [
      { label: "1 utilisateur (vous)" },
      // « 50 fiches techniques », pas « illimitées » : le serveur plafonne
      // réellement l'offre Starter à 50 recettes (maxRecipes dans
      // _shared/plan-limits.ts). Une carte d'offre qui promet l'illimité se
      // heurte au refus à la 51ᵉ fiche, et c'est le client qui l'apprend.
      { label: "50 fiches techniques" },
      { label: "Scan de 30 factures/mois" },
      { label: "200 Mo de photos recettes" },
      { label: "Coût de revient et marge en temps réel" },
    ],
    monthlyPrice: 49,
    yearlyPrice: 490,
    yearlyMonthlyEquivalent: 40.83,
    yearlySavings: 98,
    installPrice: 300,
    installInstallments: 3,
    installInstallmentAmount: 100,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Pour les équipes qui pilotent leurs marges, leurs stocks et leur production.",
    highlight: true,
    features: [
      { label: "Calcul des marges et pilotage de la rentabilité en temps réel", emphasis: true },
      { label: "Gestion des stocks et inventaires valorisés", emphasis: true },
      { label: "Jusqu’à 5 utilisateurs" },
      { label: "Recettes et fiches techniques illimitées" },
      { label: "Historique de production" },
      { label: "Alertes de prix fournisseurs avancées" },
      { label: "Scan de 150 factures/mois" },
      { label: "2 Go de photos recettes" },
      { label: "Support prioritaire" },
    ],
    monthlyPrice: 89,
    yearlyPrice: 890,
    yearlyMonthlyEquivalent: 74.17,
    yearlySavings: 178,
    installPrice: 500,
    installInstallments: 3,
    installInstallmentAmount: 167,
  },
];

export const pricingFaq = [
  {
    q: "Pourquoi l’installation est-elle payante ?",
    a: "Parce qu’elle représente une demi-journée de travail chez vous, à reprendre vos recettes et vos factures pour que l’application soit utilisable dès le premier jour. Beaucoup d’outils vous laissent tout saisir vous-même, et c’est la raison pour laquelle ils finissent inutilisés.",
  },
  {
    q: "Puis-je m’en passer et tout saisir moi-même ?",
    a: "C’est possible, mais nous ne le recommandons pas. L’expérience montre qu’un compte rempli à moitié n’est jamais rattrapé. Si vous y tenez, dites-le-nous et nous en parlons.",
  },
  {
    q: "Puis-je la payer en plusieurs fois ?",
    a: "Oui, en trois mensualités, sans supplément.",
  },
  {
    q: "Que se passe-t-il si j’arrête ?",
    a: "En mensuel, vous résiliez à tout moment. En annuel, vous disposez de trente jours pour être remboursé intégralement ; au-delà, l’abonnement court jusqu’à son terme. Vos données restent exportables et sont conservées douze mois si vous partez.",
  },
  {
    q: "Mes données m’appartiennent-elles ?",
    a: "Oui. Vos recettes vous appartiennent, elles sont exportables à tout moment, et si vous arrêtez, elles restent conservées douze mois au cas où vous reveniez.",
  },
  {
    q: "Puis-je changer d’offre en cours d’année ?",
    a: "Oui. Contactez-nous : on ajuste l’offre et on régularise le prorata selon votre périodicité.",
  },
  {
    q: "Y a-t-il un essai gratuit ?",
    a: "Nous préférons une démonstration sur votre activité, puis une installation accompagnée pour que le compte soit utilisable dès le premier jour. Sur l’annuel, vous avez trente jours satisfait ou remboursé.",
  },
] as const;

/** Format FR : 40,83 € avec espace insécable avant € */
export function formatEuro(amount: number, fractionDigits?: number): string {
  const digits =
    fractionDigits ?? (Number.isInteger(amount) ? 0 : 2);
  const formatted = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount);
  return `${formatted}\u00a0€`;
}

/**
 * Mise en service : un plancher, pas un prix.
 *
 * Le montant dépend de ce qu'il y a à reprendre — un cahier de recettes et
 * trois mois de factures ne demandent pas le même travail qu'un tableur de
 * huit cents lignes. Afficher « 300 € » sec engageait sur un forfait qui ne
 * tenait pas, et il fallait ensuite expliquer un dépassement : « à partir de »
 * dit la vérité dès la page Tarifs.
 *
 * L'entreprise EN CRÉATION est le seul cas à prix ferme : il n'y a précisément
 * rien à reprendre — ni historique de factures, ni mercuriale, ni fiches — donc
 * la charge est connue d'avance et le plancher devient le prix.
 */
export const MISE_EN_SERVICE_EN_CREATION = 300;

/** « à partir de 300 € HT » — la formule tenue en un seul endroit. */
export function formatInstallation(plan: Plan): string {
  return `à partir de ${formatEuro(plan.installPrice)} HT`;
}

export function getPlan(id: PlanId): Plan {
  const plan = pricingPlans.find((p) => p.id === id);
  if (!plan) throw new Error(`Plan inconnu: ${id}`);
  return plan;
}
