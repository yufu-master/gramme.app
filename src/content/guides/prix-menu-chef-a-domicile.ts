import type { Guide } from "./types";

// Guide publié avant le produit (Gramme Chef, janvier 2027) : il enseigne une
// méthode qui se fait à la calculatrice, et ne décrit aucun écran qui n'existe
// pas encore. Aucun taux réglementaire n'y est affirmé : le taux de
// cotisations est un taux d'EXEMPLE, et le texte renvoie le lecteur au sien.

const howToSteps = [
  {
    name: "Chiffrez chaque recette au prix de vos dernières factures",
    text: "Pas au prix du souvenir : au prix payé la dernière fois, ramené au kilo, au litre ou à la pièce. Un beurre acheté 8,70 € la plaquette d'un kilo vaut 0,0087 € le gramme, et c'est ce chiffre qui entre dans la recette. Les préparations de base (fond, sauce, pâte) se chiffrent une fois, puis entrent dans le plat à leur coût.",
  },
  {
    name: "Ramenez chaque plat à un convive",
    text: "Le coût d'un plat se divise par le nombre de portions qu'il donne vraiment, après parage et cuisson, pas par le nombre théorique de la recette. C'est ce coût par convive qui s'additionne d'un plat à l'autre pour donner le coût matière du menu.",
  },
  {
    name: "Ajoutez ce que coûte la prestation elle-même",
    text: "Le déplacement, les consommables (papier cuisson, film, sacs), la location éventuelle de vaisselle, les produits d'entretien. Ces frais ne dépendent pas toujours du nombre d'invités : ils pèsent plus lourd sur un dîner pour quatre que sur un repas pour vingt.",
  },
  {
    name: "Comptez toutes vos heures, et donnez-leur un prix",
    text: "Les courses, la préparation, le trajet, le service, le nettoyage, et le temps passé à répondre au client avant la prestation. Multipliez ce total par le revenu horaire que vous visez : c'est votre rémunération, et elle se chiffre avant de fixer un prix, pas après.",
  },
  {
    name: "Couvrez vos cotisations, puis divisez par le nombre de convives",
    text: "Divisez le total précédent par (1 moins votre taux de cotisations sociales), pour que ce qui vous reste après cotisations corresponde à ce que vous visiez. Divisez enfin par le nombre de convives, et arrondissez vers le haut : c'est votre prix plancher par personne.",
  },
];

export const guidePrixMenuChefADomicile: Guide = {
  slug: "prix-menu-chef-a-domicile",
  title: "Calculer le prix d'un menu de chef à domicile",
  description:
    "La méthode pour fixer un prix par convive qui couvre les matières, la prestation, vos heures et vos cotisations, avec un dîner pour huit chiffré.",
  keywords: [
    "prix menu chef à domicile",
    "tarif chef à domicile par personne",
    "calculer prix prestation chef à domicile",
    "coût de revient menu",
    "chef privé tarif",
    "devis chef à domicile",
  ],
  publishedAt: "2026-09-24",
  updatedAt: "2026-09-24",
  ogImage: "/images/app/gramme-chef-menu.png",
  summary:
    "Le prix d'un menu de chef à domicile se construit en cinq temps : le coût matière de chaque plat au prix des dernières factures, ramené à un convive ; les frais propres à la prestation (déplacement, consommables) ; toutes les heures travaillées, multipliées par le revenu horaire visé ; une division par (1 moins le taux de cotisations) ; puis une division par le nombre de convives. Pour un dîner de huit convives à 61,60 € de matières, 28 € de frais et 8 h 30 de travail valorisées à 35 € de l'heure, avec un taux de cotisations d'exemple de 22 %, le prix plancher ressort à 62,04 € par convive.",
  intro:
    "Un chef à domicile fixe son prix par convive au moment du devis, souvent en reprenant celui du dernier dîner. C'est rapide, et c'est la façon la plus sûre de travailler une soirée entière pour presque rien sans s'en rendre compte. Voici la méthode complète pour construire un prix qui couvre vraiment ce que coûte une prestation, heures comprises.",
  draft: false,
  liens: [
    { href: "/logiciel-chef-a-domicile", label: "Le logiciel du chef à domicile" },
    { href: "/gramme-chef", label: "Gramme Chef : liste d'attente et bêta" },
    { href: "/calculateur-prix-menu-chef-a-domicile", label: "Le calculateur gratuit du prix d'un menu" },
  ],
  relatedSlug: "calcul-cout-de-revient-boulangerie",
  relatedLabel: "La méthode du coût de revient, appliquée à la boulangerie",
  howTo: {
    name: "Calculer le prix par convive d'un menu de chef à domicile",
    description:
      "Cinq étapes : coût des recettes au prix des factures, coût par convive, frais de prestation, heures valorisées, cotisations et division par le nombre de convives.",
    steps: howToSteps,
  },
  blocks: [
    {
      type: "h2",
      id: "pourquoi",
      text: "Pourquoi le prix par convive se trompe-t-il si souvent ?",
    },
    {
      type: "p",
      text: "Parce qu'il est fixé à l'envers. On part d'un prix qui paraît acceptable pour le client, et on espère que les matières et le temps passé tiendront dedans. Or les deux bougent : le prix de la crème ou du poisson change d'une semaine à l'autre, et le temps réellement passé sur une prestation, courses et trajets compris, est presque toujours plus long que celui qu'on imagine.",
    },
    {
      type: "p",
      text: "La méthode ci-dessous part dans l'autre sens, celle du [coût de revient](/guides/calcul-cout-de-revient-boulangerie) des artisans : elle additionne ce que la prestation coûte, y compris votre rémunération, et en déduit le prix plancher en dessous duquel vous travaillez à perte. Le prix que vous affichez peut ensuite être plus haut, selon votre clientèle et votre notoriété, mais jamais plus bas sans le savoir. Pour le faire sans calculatrice, [le calculateur gratuit](/calculateur-prix-menu-chef-a-domicile) applique cette méthode à votre prestation.",
    },
    {
      type: "howto-steps",
      id: "methode",
      name: "La méthode en cinq étapes",
      steps: howToSteps,
    },
    {
      type: "h2",
      id: "exemple",
      text: "Exemple chiffré : un dîner pour huit convives",
    },
    {
      type: "p",
      text: "Un menu en trois temps, pain et mignardises compris, chaque plat étant tenu comme [une fiche technique](/guides/fiche-technique-patisserie-modele) avec ses quantités pour une portion. Les prix d'achat sont des prix d'exemple : remplacez-les par ceux de vos dernières factures, c'est tout l'intérêt de la méthode.",
    },
    {
      type: "table",
      caption: "Coût matière du menu, pour huit convives",
      headers: ["Plat", "Coût par convive", "Coût pour 8"],
      rows: [
        ["Velouté de potimarron et noisettes", "1,10 €", "8,80 €"],
        ["Suprême de volaille, purée, jus", "4,60 €", "36,80 €"],
        ["Tarte fine aux pommes", "1,40 €", "11,20 €"],
        ["Pain et mignardises", "0,60 €", "4,80 €"],
        ["Total des matières", "7,70 €", "61,60 €"],
      ],
    },
    {
      type: "table",
      caption: "Du coût de la prestation au prix plancher par convive",
      headers: ["Ligne", "Calcul", "Montant"],
      rows: [
        ["Matières", "tableau précédent", "61,60 €"],
        ["Déplacement", "aller-retour", "20,00 €"],
        ["Consommables", "papier, film, sacs", "8,00 €"],
        ["Heures travaillées", "8 h 30 × 35 €", "297,50 €"],
        ["Total à couvrir", "", "387,10 €"],
        ["Avec les cotisations", "387,10 ÷ (1 − 0,22)", "496,28 €"],
        ["Prix plancher par convive", "496,28 ÷ 8", "62,04 €"],
      ],
    },
    {
      type: "p",
      text: "Le taux de 22 % est un taux d'exemple. Le vôtre dépend de votre statut et de la nature de votre activité : il se lit sur votre espace de déclaration, et c'est lui qu'il faut utiliser. De même, si vous êtes redevable de la TVA, elle s'ajoute au prix plancher : le calcul ci-dessus se fait hors taxes.",
    },
    {
      type: "p",
      text: "Dans cet exemple, un prix de 65 € par convive laisse une petite marge au-dessus du plancher. À 55 €, le chef travaillerait sa soirée à moins de 35 € de l'heure sans s'en apercevoir, parce que les matières, elles, seraient bien payées. C'est tout le piège : la perte ne se voit pas sur le ticket de caisse, elle se voit sur le revenu de l'année.",
    },
    {
      type: "h2",
      id: "invites",
      text: "Que faire quand le nombre d'invités change ?",
    },
    {
      type: "p",
      text: "Le coût matière suit le nombre de convives, mais pas les frais de prestation ni une bonne partie des heures : le trajet et la mise en place ne changent pas entre huit et douze invités. C'est pourquoi un prix par convive calculé pour huit personnes rapporte davantage à douze, et moins à quatre. Beaucoup de chefs fixent un minimum de facturation, ou un prix par convive plus élevé en dessous d'un certain nombre d'invités, pour cette raison.",
    },
    {
      type: "h2",
      id: "suivi",
      text: "Comment garder ce calcul à jour ?",
    },
    {
      type: "p",
      text: "En recalculant le coût des plats à chaque changement de prix d'achat, ce qu'un tableur ne fait que si quelqu'un le met à jour. C'est ce que fait [le logiciel du chef à domicile](/logiciel-chef-a-domicile) que nous préparons : les prix se mettent à jour à partir de vos factures, et le coût par convive de chaque menu suit tout seul, pour le nombre d'invités que vous indiquez. Il ouvre en janvier 2027, et [la bêta de Gramme Chef](/gramme-chef) accueille quelques chefs avant cette date.",
    },
  ],
  faqs: [
    {
      q: "Quel prix par personne pour un chef à domicile ?",
      a: "Il n'y a pas de bon prix universel : il dépend du menu, du nombre d'invités, du temps passé et de vos cotisations. La méthode de ce guide donne un prix plancher, en dessous duquel vous travaillez à perte. Au-dessus, c'est votre positionnement qui décide.",
    },
    {
      q: "Faut-il facturer le temps passé à faire les courses ?",
      a: "Oui. Les courses, le trajet, la préparation et le nettoyage font partie de la prestation, même si le client ne les voit pas. Ne pas les compter revient à les offrir, et c'est souvent là que se perd la rentabilité d'une soirée.",
    },
    {
      q: "Comment facturer un dîner pour quatre personnes ?",
      a: "Les frais fixes (trajet, mise en place, une partie des heures) pèsent davantage sur un petit nombre d'invités. Un minimum de facturation ou un prix par convive plus élevé pour les petites tablées permet de couvrir ces frais sans pénaliser les grands repas.",
    },
    {
      q: "Le prix des matières est-il le poste le plus important ?",
      a: "Rarement. Dans l'exemple de ce guide, les matières représentent moins de 13 % du prix final, et les heures travaillées plus de la moitié. C'est pourquoi un chef qui ne chiffre que ses courses sous-estime presque toujours son prix.",
    },
  ],
};
