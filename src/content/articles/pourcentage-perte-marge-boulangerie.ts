import type { Guide } from "@/content/guides/types";

export const articlePerte: Guide = {
  slug: "pourcentage-perte-marge-boulangerie",
  title: "Le pourcentage de perte qui ronge votre marge",
  description:
    "Cuisson, parage, invendus : où part la matière que vous avez payée, et comment la compter dans un coût de revient juste.",
  keywords: [
    "pourcentage de perte boulangerie",
    "perte à la cuisson pâte",
    "freinte boulangerie",
    "poids brut poids net recette",
    "coût de revient réel boulangerie",
    "erreur calcul marge boulangerie",
  ],
  publishedAt: "2026-08-26",
  updatedAt: "2026-08-26",
  ogImage: "/images/app/recette-couts.png",
  summary:
    "Le taux de perte est le paramètre le plus souvent absent des calculs de coût de revient, et celui qui les fausse le plus. Explication chiffrée, et méthode pour le mesurer sans matériel.",
  intro:
    "C'est le premier écart que nous trouvons en reprenant le tableur d'un atelier, et de loin le plus coûteux. Pas une erreur de saisie, pas un prix oublié : un paramètre entier qui manque, et qui rend toutes les marges plus belles qu'elles ne sont. Il porte plusieurs noms selon les métiers (perte, freinte, rendement, taux de parage) et il désigne toujours la même chose : de la matière que vous avez payée et que vous ne vendrez jamais.",
  blocks: [
    {
      type: "h2",
      id: "ce-que-c-est",
      text: "De la matière payée qui n'arrive pas en vitrine",
    },
    {
      type: "p",
      text: "Vous enfournez 1 000 g de pâte. Vous sortez 880 g de pain. Les 120 g manquants ne se sont pas volatilisés dans une erreur de pesée : c'est de l'eau partie à la cuisson. Vous les avez pourtant achetés : la farine, l'eau, le sel, la levure de ces 120 g figurent bien sur votre facture fournisseur.",
    },
    {
      type: "p",
      text: "Même chose au parage. Un kilo de fruits entiers donne 700 g de chair utilisable : les 300 g de peaux, de noyaux et de queues sont payés au prix du kilo entier. Même chose à la découpe d'un biscuit, aux chutes de pâte feuilletée, au fond de cuve qu'on ne récupère jamais entièrement.",
    },
    {
      type: "p",
      text: "**Le coût de revient doit porter sur le produit vendable, pas sur ce qui entre dans le pétrin.** C'est toute la question, et elle se résume à une division qu'on oublie de faire.",
    },
    {
      type: "h2",
      id: "combien-ca-coute",
      text: "Ce que ça change, en euros",
    },
    {
      type: "p",
      text: "Prenons une pâte à pain dont les matières coûtent 0,72 € pour 1 000 g, avec 12 % de perte à la cuisson, découpée en pièces de 220 g vendues 1,30 € hors taxes.",
    },
    {
      type: "table",
      caption: "Le même pain, calculé avec et sans le taux de perte",
      headers: ["", "Sans le taux de perte", "Avec 12 % de perte"],
      rows: [
        ["Poids retenu pour le calcul", "1 000 g de pâte", "880 g de pain"],
        ["Nombre de pièces de 220 g", "4,55 pièces", "4 pièces"],
        ["Coût matière par pièce", "0,158 €", "0,180 €"],
        ["Marge sur matières (PV 1,30 € HT)", "1,142 €", "1,120 €"],
        ["Ratio matière", "12,2 %", "13,8 %"],
      ],
    },
    {
      type: "p",
      text: "Deux centimes par pièce, 1,6 point de ratio. Sur un produit isolé, c'est anecdotique. Sur mille pièces par semaine, c'est **plus de mille euros par an** : sur une seule référence, et sur le produit le plus simple de la carte.",
    },
    {
      type: "p",
      text: "Et l'écart grandit avec le nombre d'étapes. Un entremets fait de trois sous-recettes qui perdent chacune à leur niveau accumule les erreurs en cascade : un biscuit qui perd 10 % à la cuisson, une crème qui perd 5 % au transfert, un montage qui perd 8 % à la découpe. Trois oublis de 5 à 10 % ne s'additionnent pas, ils se multiplient, et le coût réel peut dépasser de 20 à 25 % le coût affiché.",
    },
    {
      type: "h2",
      id: "pourquoi-personne-le-fait",
      text: "Pourquoi ce paramètre disparaît des calculs",
    },
    {
      type: "p",
      text: "Trois raisons, et aucune n'est de la négligence.",
    },
    {
      type: "p",
      text: "**Le tableur ne le réclame pas.** Un fichier Excel a des colonnes « ingrédient », « quantité », « prix ». Personne n'ajoute spontanément une colonne « ce que je perds » : elle ne vient à l'esprit qu'une fois qu'on a compris pourquoi elle manque.",
    },
    {
      type: "p",
      text: "**Beaucoup d'outils de gestion ne le documentent pas.** En comparant les principaux logiciels du secteur, nous avons relevé que plusieurs éditeurs annoncent le calcul du coût matière et de la marge sans mentionner nulle part le taux de perte, le rendement ou la distinction entre poids brut et poids net. Cela ne veut pas dire que la fonction est absente de leur produit : seulement qu'elle n'est pas mise en avant, ce qui en dit long sur l'importance qu'on lui accorde.",
    },
    {
      type: "p",
      text: "**L'erreur va dans le sens agréable.** Un coût sous-estimé donne une marge flatteuse. Rien n'alerte, aucun chiffre ne paraît suspect, et l'écart ne se voit qu'en fin d'exercice, dans le décalage entre le ratio matière théorique et le ratio comptable réel. À ce moment-là, on l'attribue au vol, à la casse ou aux invendus : rarement au calcul.",
    },
    {
      type: "h2",
      id: "comment-mesurer",
      text: "Comment mesurer vos taux, avec une balance et rien d'autre",
    },
    {
      type: "howto-steps",
      id: "methode",
      name: "Mesurer un taux de perte en production",
      steps: [
        {
          name: "Pesez ce qui entre",
          text: "Notez le poids total de pâte, d'appareil ou de matière première AVANT l'étape. Pour une pâte, c'est le poids sortie de cuve. Pour un fruit, c'est le poids brut à réception.",
        },
        {
          name: "Pesez ce qui sort, une fois refroidi",
          text: "Le poids se mesure au même stade que la vente. Un pain pesé chaud à la sortie du four continue de perdre en refroidissant : attendez, sinon vous sous-estimez la perte.",
        },
        {
          name: "Faites la division",
          text: "Taux de perte = (poids entrant − poids sortant) ÷ poids entrant × 100. Un pain qui passe de 1 000 g à 880 g perd 12 %.",
        },
        {
          name: "Recommencez trois fois",
          text: "Une seule mesure ne vaut rien : le four, l'hygrométrie et la taille de la fournée font varier le résultat. Faites-le sur trois productions et retenez la moyenne.",
        },
        {
          name: "Commencez par vos dix plus gros volumes",
          text: "Pas par vos deux cents références. Dix produits mesurés correctement corrigent 80 % de l'écart, et cela se fait en une semaine sans changer une seule habitude de production.",
        },
      ],
    },
    {
      type: "h2",
      id: "reperes",
      text: "Des ordres de grandeur pour vous situer",
    },
    {
      type: "p",
      text: "Ces fourchettes ne remplacent pas vos mesures, elles servent à repérer une valeur aberrante dans vos fiches actuelles. Si votre fiche indique 2 % de perte sur un pain de campagne, il y a un problème.",
    },
    {
      type: "table",
      caption: "Ordres de grandeur usuels · à confirmer par vos propres pesées",
      headers: ["Étape", "Fourchette courante"],
      rows: [
        ["Cuisson d'un pain (perte en eau)", "10 à 20 % selon le format et la durée"],
        ["Cuisson d'une viennoiserie", "8 à 15 %"],
        ["Parage de fruits frais", "20 à 40 % selon le fruit"],
        ["Découpe d'un biscuit en plaque", "5 à 15 % selon le calibrage"],
        ["Chutes de pâte feuilletée", "10 à 25 % selon le réemploi"],
      ],
    },
    {
      type: "h2",
      id: "et-apres",
      text: "Ce que vous voyez une fois le taux posé",
    },
    {
      type: "p",
      text: "L'expérience est presque toujours la même : deux ou trois produits que l'on croyait rentables passent sous la barre, et un produit que l'on soupçonnait de tirer la marge vers le bas se révèle correct. Les décisions qui suivent (une hausse de prix ciblée, un fournisseur à renégocier, une recette à retravailler) portent enfin sur les bons produits.",
    },
    {
      type: "p",
      text: "C'est aussi le moment où le ratio matière théorique se met à ressembler au ratio comptable de fin d'exercice. L'écart qui restait inexpliqué se réduit, et ce qui reste devient analysable : là, ce sont vraiment les invendus, la casse et les offerts.",
    },
    {
      type: "p",
      text: "Dans Gramme, chaque fiche porte son poids brut, son poids net et son taux de perte, et le coût est rapporté au produit vendable, y compris à travers les sous-recettes, où l'effet cumulé se produit. Le taux se saisit une fois et suit la fiche pour toujours, quels que soient les redimensionnements.",
    },
  ],
  faqs: [
    {
      q: "Perte, freinte, rendement : est-ce la même chose ?",
      a: "Les trois mots désignent le même phénomène vu sous des angles différents. La perte et la freinte expriment ce qui disparaît (12 % de perte), le rendement ce qui reste (88 % de rendement). L'important est de savoir lequel votre outil attend : saisir 88 dans un champ « perte » divise votre coût par huit.",
    },
    {
      q: "Faut-il compter les invendus dans le taux de perte ?",
      a: "Non, et les confondre brouille tout. Le taux de perte est technique : il porte sur la transformation, il est stable et prévisible. Les invendus sont commerciaux : ils dépendent de vos prévisions de vente et se pilotent autrement, par la production. Mélangés, ni l'un ni l'autre ne se corrige.",
    },
    {
      q: "Mon four change, mes taux changent-ils ?",
      a: "Oui, et c'est une raison de refaire les mesures après un changement d'équipement, de format ou de process de cuisson. Un four ventilé et un four à sole ne dessèchent pas de la même façon. Une révision annuelle des taux sur vos dix plus gros volumes suffit dans la plupart des ateliers.",
    },
    {
      q: "Comment savoir si mon logiciel actuel prend la perte en compte ?",
      a: "Ouvrez une fiche et cherchez trois champs : poids brut, poids net et un pourcentage. S'ils n'y sont pas, ou si le coût par pièce se calcule directement en divisant le coût total par le nombre de pièces annoncé, la perte n'est pas dans le calcul : même si le résultat paraît crédible.",
    },
  ],
  draft: false,
  howTo: {
    name: "Mesurer le taux de perte d'une recette de boulangerie",
    description:
      "Méthode en cinq étapes pour mesurer un taux de perte en production, avec une simple balance, et corriger un coût de revient sous-estimé.",
    steps: [
      { name: "Pesez ce qui entre", text: "Poids total de pâte ou de matière première avant l'étape." },
      { name: "Pesez ce qui sort", text: "Une fois refroidi, au stade où le produit est vendu." },
      { name: "Faites la division", text: "(poids entrant − poids sortant) ÷ poids entrant × 100." },
      { name: "Recommencez trois fois", text: "Retenez la moyenne : four et hygrométrie font varier le résultat." },
      { name: "Commencez par vos dix plus gros volumes", text: "Ils corrigent l'essentiel de l'écart en une semaine." },
    ],
  },
  liens: [
    { href: "/logiciel-cout-de-revient", label: "Le coût de revient, calculé une fois pour toutes" },
    { href: "/logiciel-patisserie", label: "Le logiciel qui sait ce qu'est une sous-recette" },
  ],
  relatedSlug: "logiciel-boulangerie-sur-telephone",
  relatedLabel: "Faut-il un ordinateur pour gérer sa boulangerie ?",
};
