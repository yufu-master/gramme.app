import type { Guide } from "./types";

export const guideAllergenes: Guide = {
  slug: "etiquette-allergene-boulangerie-obligation",
  title: "Allergènes en boulangerie : vos obligations",
  description:
    "Obligation d'information sur les allergènes en boulangerie-pâtisserie : les 14 allergènes du règlement INCO, les règles pour les produits vendus non préemballés, et comment construire l'information.",
  keywords: [
    "étiquette allergène boulangerie obligation",
    "allergènes boulangerie réglementation",
    "affichage allergènes boulangerie",
    "14 allergènes INCO",
    "information allergène produit non préemballé",
  ],
  publishedAt: "2026-08-13",
  updatedAt: "2026-08-13",
  ogImage: "/images/feature-recettes-list.png",
  summary:
    "Ce que le règlement INCO et le décret français de 2015 imposent aux boulangeries en matière d'information sur les allergènes, pour les produits préemballés comme pour la vente à la coupe.",
  intro:
    "L'information sur les allergènes est l'une des rares obligations réglementaires qui touche directement le comptoir d'une boulangerie, et l'une des plus mal comprises. Beaucoup d'artisans pensent qu'elle ne concerne que les produits emballés. C'est l'inverse : c'est précisément la vente en vrac qui pose le plus de questions.",
  draft: false,
  relatedSlug: "fiche-technique-patisserie-modele",
  relatedLabel: "Modèle de fiche technique de pâtisserie",
  blocks: [
    {
      type: "h2",
      id: "textes",
      text: "Les deux textes qui s'appliquent",
    },
    {
      type: "p",
      text: "Le premier est européen : le règlement (UE) n° 1169/2011, dit règlement INCO, applicable depuis le 13 décembre 2014. Son annexe II fixe la liste des quatorze substances ou produits provoquant allergies ou intolérances dont la présence doit être signalée. Cette liste est la même dans toute l'Union.",
    },
    {
      type: "p",
      text: "Le second est français : le décret n° 2015-447 du 17 avril 2015, applicable depuis le 1er juillet 2015. Il précise, pour les denrées vendues non préemballées — ce qui est le cas de l'essentiel de la production d'une boulangerie —, comment cette information doit être portée à la connaissance du consommateur. C'est ce décret qui concerne le plus directement le comptoir.",
    },
    {
      type: "h2",
      id: "liste",
      text: "Les quatorze allergènes à déclaration obligatoire",
    },
    {
      type: "table",
      caption: "Annexe II du règlement (UE) n° 1169/2011",
      headers: ["Allergène", "Précisions utiles en boulangerie"],
      rows: [
        ["Céréales contenant du gluten", "Blé, seigle, orge, avoine, épeautre, kamut et leurs souches hybridées"],
        ["Crustacés", "Rare en boulangerie, présent en snacking"],
        ["Œufs", "Dorure comprise : une dorure au jaune d'œuf est à déclarer"],
        ["Poissons", "Snacking, feuilletés"],
        ["Arachides", "Distinctes des fruits à coque, à déclarer séparément"],
        ["Soja", "Lécithine de soja fréquente dans les couvertures et améliorants"],
        ["Lait", "Y compris le lactose ; beurre, crème, poudre de lait"],
        ["Fruits à coque", "Amandes, noisettes, noix, cajou, pécan, du Brésil, pistaches, macadamia"],
        ["Céleri", "Snacking, bouillons"],
        ["Moutarde", "Snacking, sauces"],
        ["Graines de sésame", "Pains spéciaux, buns"],
        ["Anhydride sulfureux et sulfites", "À déclarer au-delà de 10 mg/kg ou 10 mg/L ; fruits secs, certains vins de cuisine"],
        ["Lupin", "Farine de lupin, présente dans certains pains et améliorants"],
        ["Mollusques", "Snacking"],
      ],
    },
    {
      type: "p",
      text: "Deux pièges reviennent constamment en boulangerie. Le premier : la dorure. Un pain brioché doré au jaune d'œuf contient de l'œuf, même si l'œuf n'apparaît pas dans la pâte. Le second : les auxiliaires et améliorants. Une lécithine de soja ou une farine de lupin entrant dans un mélange acheté prêt à l'emploi doit être signalée comme si vous l'aviez ajoutée vous-même — c'est la fiche technique du fournisseur qui vous l'apprend.",
    },
    {
      type: "h2",
      id: "preemballe",
      text: "Produits préemballés : mise en évidence dans la liste d'ingrédients",
    },
    {
      type: "p",
      text: "Pour une denrée préemballée — un pain de mie sous sachet, une boîte de macarons fermée avant la commande du client —, l'allergène doit apparaître dans la liste des ingrédients et être mis en évidence par rapport au reste de la liste. La mise en évidence se fait par une différence de typographie : caractères gras, majuscules, italique, soulignement ou couleur de fond. Écrire l'ingrédient sans le distinguer ne suffit pas.",
    },
    {
      type: "h2",
      id: "vrac",
      text: "Vente à la coupe et en vrac : le cas de la boulangerie",
    },
    {
      type: "p",
      text: "C'est la situation courante : baguettes, viennoiseries, pâtisseries individuelles vendues à l'unité, sandwichs préparés sur place. Le décret de 2015 impose que l'information sur les allergènes soit portée à la connaissance du consommateur sans qu'il ait à la demander, sous forme écrite, et de manière lisible et visible depuis l'endroit où il choisit le produit.",
    },
    {
      type: "p",
      text: "Concrètement, cela exclut la réponse orale seule : dire au client qui interroge la vendeuse ne suffit pas à satisfaire l'obligation. Les formes admises sont l'affichage à proximité des produits, l'indication sur une étiquette de rayon, ou la mise à disposition d'un support consultable librement — un classeur posé sur le comptoir, un écran, une ardoise. Ce qui compte est que le support existe, soit tenu à jour et soit accessible sans démarche particulière du client.",
    },
    {
      type: "table",
      caption: "Ce qui est admis et ce qui ne l'est pas",
      headers: ["Situation", "Conforme ?"],
      rows: [
        ["Classeur allergènes consultable librement, signalé au comptoir", "Oui"],
        ["Étiquettes de rayon mentionnant les allergènes par produit", "Oui"],
        ["Affiche listant les allergènes par famille de produits", "Oui"],
        ["La vendeuse répond quand le client pose la question", "Non, l'information doit exister par écrit"],
        ["Classeur existant mais rangé en réserve", "Non, il doit être accessible sans démarche"],
        ["Mention « peut contenir des traces de… » seule", "Non, elle ne remplace pas la déclaration des allergènes réellement présents"],
      ],
    },
    {
      type: "h2",
      id: "traces",
      text: "Le cas des traces et de la contamination croisée",
    },
    {
      type: "p",
      text: "La mention volontaire du type « peut contenir des traces de fruits à coque » relève d'une démarche distincte de l'obligation réglementaire. Elle informe d'un risque de contamination croisée en laboratoire ; elle ne dispense en aucun cas de déclarer les allergènes effectivement présents dans la recette. Utilisée pour se couvrir sur l'ensemble de la gamme, elle perd toute valeur informative pour le consommateur allergique et n'apporte aucune protection.",
    },
    {
      type: "h2",
      id: "construire",
      text: "Construire l'information sans y passer ses dimanches",
    },
    {
      type: "p",
      text: "L'information allergènes n'est pas un document à créer : c'est une lecture de vos recettes. Si vos fiches techniques listent réellement les composants utilisés, sous-recettes comprises, la liste des allergènes s'en déduit produit par produit. Si vos recettes sont dans un cahier ou dans la tête du chef, le travail est à refaire entièrement à chaque changement de gamme ou de fournisseur.",
    },
    {
      type: "p",
      text: "C'est le lien direct entre cette obligation et la tenue de vos fiches techniques. Depuis le 30 août 2026, Gramme produit l'affiche d'allergènes de votre vitrine et l'étiquette de vos produits emballés : vous renseignez chaque matière première une fois, et l'information remonte d'elle-même aux sous-recettes puis aux produits finis. Une limite que nous préférons dire clairement : Gramme n'est pas un outil de certification. Il rassemble et met en forme l'information à partir de ce que vous avez saisi, il ne garantit pas votre conformité — celle-ci dépend aussi de votre situation, et vous en restez l'exploitant responsable.",
    },
    {
      type: "p",
      text: "Cet article résume l'état des textes à sa date de mise à jour et ne constitue pas un conseil juridique. Pour une situation particulière, référez-vous aux textes officiels sur Légifrance, aux fiches pratiques de la DGCCRF, ou rapprochez-vous de votre chambre de métiers et de l'artisanat ou de votre organisation professionnelle.",
    },
  ],
  faqs: [
    {
      q: "Quels sont les 14 allergènes à déclaration obligatoire ?",
      a: "Céréales contenant du gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, graines de sésame, anhydride sulfureux et sulfites au-delà de 10 mg/kg ou 10 mg/L, lupin et mollusques. Cette liste figure à l'annexe II du règlement (UE) n° 1169/2011.",
    },
    {
      q: "Une boulangerie doit-elle afficher les allergènes de ses produits vendus en vrac ?",
      a: "Oui. Depuis le décret n° 2015-447 du 17 avril 2015, applicable au 1er juillet 2015, l'information sur les allergènes des denrées non préemballées doit être portée à la connaissance du consommateur sous forme écrite, lisible et visible, sans qu'il ait à la demander.",
    },
    {
      q: "Suffit-il que la vendeuse réponde aux questions sur les allergènes ?",
      a: "Non. La réponse orale seule ne satisfait pas l'obligation : l'information doit exister sous forme écrite et être accessible au consommateur sans démarche particulière de sa part, par affichage, étiquetage de rayon ou support consultable librement.",
    },
    {
      q: "La dorure au jaune d'œuf doit-elle être déclarée ?",
      a: "Oui. L'œuf utilisé en dorure est présent dans le produit fini et entre dans la déclaration, même s'il ne figure pas dans la pâte. Le même raisonnement vaut pour les auxiliaires et améliorants achetés, dont la fiche technique fournisseur doit être consultée.",
    },
    {
      q: "La mention « peut contenir des traces de » est-elle obligatoire ?",
      a: "Non, c'est une mention volontaire relative au risque de contamination croisée. Elle ne remplace jamais la déclaration des allergènes réellement présents dans la recette, et appliquée systématiquement à toute une gamme, elle perd sa valeur informative.",
    },
  ],
};
