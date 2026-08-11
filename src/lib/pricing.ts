/** Source unique des tarifs publics Gramme (HT). Tarif fondateur : jamais affiché ici. */

export type BillingPeriod = "monthly" | "yearly";

export type PlanId = "starter" | "pro";

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  highlight?: boolean;
  features: string[];
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
      "1 utilisateur (vous)",
      "50 recettes",
      "Scan de 30 factures/mois",
      "200 Mo de photos recettes",
      "Suivi marge en temps réel",
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
    tagline: "Pour les équipes qui pilotent production + achats.",
    highlight: true,
    features: [
      "Jusqu’à 5 utilisateurs",
      "Recettes illimitées",
      "Scan de 150 factures/mois",
      "2 Go de photos recettes",
      "Stocks, fournisseurs et alertes avancées",
      "Support prioritaire",
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

export function getPlan(id: PlanId): Plan {
  const plan = pricingPlans.find((p) => p.id === id);
  if (!plan) throw new Error(`Plan inconnu: ${id}`);
  return plan;
}
