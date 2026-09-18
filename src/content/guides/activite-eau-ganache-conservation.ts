import type { Guide } from "./types";

export const guideActiviteEau: Guide = {
  slug: "activite-eau-ganache-conservation",
  title: "Activité de l'eau d'une ganache et durée de conservation",
  description:
    "Ce que mesure l'activité de l'eau, les seuils qui comptent en chocolaterie, comment l'estimer avant de produire, et ce qu'elle ne permet pas d'écrire sur une étiquette.",
  keywords: [
    "activité de l'eau ganache",
    "aw ganache chocolat",
    "conservation ganache",
    "durée de vie bonbon chocolat",
    "sucre inverti sorbitol ganache",
  ],
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  ogImage: "/images/app/equilibrage-ganache.png",
  summary:
    "La durée de conservation d'une ganache dépend de son activité de l'eau, c'est-à-dire de la part d'eau restée libre pour les micro-organismes, bien plus que de sa quantité d'eau totale. Sous 0,85, les bactéries pathogènes ne se développent plus, et on la fait baisser surtout par les sucres (inverti, sorbitol), mais la durée de vie annoncée reste sous la responsabilité de l'atelier, validée par un test microbiologique.",
  intro:
    "Deux ganaches contenant exactement la même quantité d'eau peuvent tenir trois semaines ou trois mois. Ce qui les sépare n'est pas la quantité d'eau, c'est la part d'eau restée LIBRE, disponible pour les micro-organismes. Cette part se mesure, et elle porte un nom : l'activité de l'eau.",
  draft: false,
  liens: [
    { href: "/fonctionnalites/equilibrage-recette", label: "L'équilibrage dans Gramme" },
    { href: "/logiciel-chocolaterie", label: "Le logiciel pensé pour une chocolaterie" },
  ],
  relatedSlug: "equilibrage-recette-comment-calculer",
  relatedLabel: "Équilibrage de recette : comment le calculer",
  blocks: [
    { type: "h2", id: "definition", text: "Eau totale, eau libre : qu'est-ce que l'activité de l'eau ?" },
    {
      type: "p",
      text: "L'activité de l'eau, notée Aw, est un rapport compris entre 0 et 1. Elle vaut 1 pour de l'eau pure et diminue à mesure que des molécules dissoutes retiennent cette eau. Ce sont les sucres, principalement, qui la font baisser : chaque molécule dissoute mobilise de l'eau qui n'est plus disponible.",
    },
    {
      type: "p",
      text: "C'est pourquoi le nombre de molécules compte plus que le poids. À poids égal, le sucre inverti et le sorbitol abaissent l'activité de l'eau nettement plus que le saccharose, parce qu'ils se décomposent en molécules plus petites et donc plus nombreuses. Un chocolatier qui remplace vingt grammes de sucre par vingt grammes d'inverti ne change presque rien au goût et gagne plusieurs semaines de conservation.",
    },
    { type: "h2", id: "seuils", text: "Quels seuils d'activité de l'eau viser ?" },
    {
      type: "table",
      caption: "Activité de l'eau et conservation indicative d'une ganache",
      headers: ["Activité de l'eau", "Conservation indicative", "Ce qui se passe"],
      rows: [
        ["Au-dessus de 0,90", "Moins de deux semaines", "Presque tous les micro-organismes se développent"],
        ["0,85 à 0,90", "Deux à quatre semaines", "Zone à risque : les bactéries pathogènes s'y développent encore"],
        ["0,80 à 0,85", "Six à neuf semaines", "Sous 0,85, les bactéries pathogènes ne se développent plus"],
        ["0,75 à 0,80", "Dix à seize semaines", "Les levures ralentissent nettement"],
        ["0,70 à 0,75", "Quatre à six mois", "Les moisissures sont freinées"],
        ["Sous 0,70", "Plus de six mois", "Domaine des intérieurs secs et des pralinés"],
      ],
    },
    {
      type: "p",
      text: "Le seuil de 0,85 est le seul qui ne se négocie pas : c'est celui en dessous duquel les bactéries pathogènes cessent de se multiplier. Une ganache destinée à la vente doit passer sous cette valeur, et une ganache de vitrine gagne à viser 0,80 pour se donner de la marge.",
    },
    { type: "h2", id: "leviers", text: "Comment faire baisser l'activité de l'eau ?" },
    {
      type: "p",
      text: "Faire baisser l'activité de l'eau ne veut pas dire assécher la ganache. Cinq leviers existent, et ils ne coûtent pas la même chose en texture.",
    },
    {
      type: "table",
      caption: "Ce qui abaisse l'activité de l'eau, et à quel prix",
      headers: ["Levier", "Effet", "Ce que cela coûte"],
      rows: [
        ["Remplacer du saccharose par du sucre inverti", "Fort", "Sucre un peu plus. Sans effet sur la texture"],
        ["Ajouter du sorbitol", "Fort", "Sucre peu. Effet laxatif au-delà d'une trentaine de grammes par jour"],
        ["Réduire la crème au profit du chocolat", "Fort", "Ganache plus ferme, moins fondante"],
        ["Ajouter de l'alcool", "Moyen", "Change le goût. À déclarer sur l'étiquette"],
        ["Remplacer la crème par du beurre", "Moyen", "Moins d'eau apportée. Texture plus courte"],
      ],
    },
    {
      type: "p",
      text: "Le levier le plus mal employé est le dernier de la liste des tentations : allonger la cuisson pour évaporer l'eau. Il fonctionne, mais il déstabilise l'émulsion et donne des ganaches qui tranchent. Mieux vaut jouer sur les sucres, en suivant [l'équilibrage de la recette](/guides/equilibrage-recette-comment-calculer).",
    },
    { type: "h2", id: "estimer", text: "Estimer avant de produire" },
    {
      type: "p",
      text: "Un mesureur d'activité de l'eau coûte quelques milliers d'euros et donne une mesure sur un produit déjà fabriqué. L'estimation, elle, se calcule sur la recette, avant de couler (c'est ce que fait [le module d'équilibrage de Gramme](/fonctionnalites/equilibrage-recette)) : elle part du rapport entre les solutés et l'eau du mix, en pondérant chaque sucre selon sa capacité à retenir l'eau.",
    },
    {
      type: "p",
      text: "Cette estimation n'a pas la précision d'une mesure, et elle ne voit ni le pH, ni l'alcool, ni le conditionnement. Elle sert à une chose, et elle la fait bien : dire, avant de lancer une production, si une recette a une chance de tenir le temps annoncé. Quand une mesure existe, c'est elle qui fait foi, et l'estimation s'efface.",
    },
    { type: "h2", id: "etiquette", text: "Ce qui ne s'écrit pas sur une étiquette" },
    {
      type: "p",
      text: "Une conservation estimée d'après l'activité de l'eau n'est pas une date limite. Elle suppose une hygiène de fabrication maîtrisée, un stockage entre 16 et 18 °C, et un conditionnement qui protège de l'humidité ambiante. Aucun calcul ne remplace une analyse microbiologique.",
    },
    {
      type: "p",
      text: "La durée de vie d'un produit reste sous la responsabilité de l'atelier qui le fabrique. Un logiciel peut vous aider à la préparer et à documenter votre raisonnement ; c'est le test en laboratoire qui la valide, et c'est votre [plan de maîtrise sanitaire](/guides/logiciel-haccp-boulangerie) qui l'engage.",
    },
  ],
  faqs: [
    {
      q: "Qu'est-ce que l'activité de l'eau d'une ganache ?",
      a: "C'est la part d'eau restée libre, disponible pour les micro-organismes, exprimée par un nombre entre 0 et 1. Elle diminue quand des sucres sont dissous dans l'eau, parce que ces molécules la retiennent. Deux ganaches contenant la même quantité d'eau peuvent avoir des activités de l'eau très différentes.",
    },
    {
      q: "Quel seuil viser pour une ganache de vente ?",
      a: "Il faut passer sous 0,85, seuil en dessous duquel les bactéries pathogènes ne se développent plus. Viser 0,80 donne de la marge et place la conservation indicative autour de six à neuf semaines. Pour un intérieur de bonbon, on descend plutôt vers 0,75 pour freiner aussi les moisissures.",
    },
    {
      q: "Comment faire baisser l'activité de l'eau sans changer le goût ?",
      a: "Le levier le plus efficace à goût quasi constant est de remplacer une part du saccharose par du sucre inverti ou du sorbitol : à poids égal, ils libèrent plus de molécules et retiennent donc plus d'eau. Réduire la crème au profit du chocolat fonctionne aussi, mais raffermit la ganache.",
    },
    {
      q: "L'activité de l'eau calculée remplace-t-elle un appareil de mesure ?",
      a: "Non. L'estimation sert à situer une recette avant de la produire. Si vous mesurez à l'appareil, c'est votre mesure qui fait foi. Et dans tous les cas, la durée de vie d'un produit reste sous la responsabilité de l'atelier, validée par un test microbiologique.",
    },
  ],
};
