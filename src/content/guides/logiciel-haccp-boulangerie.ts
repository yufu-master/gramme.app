import type { Guide } from "./types";

export const guideHaccp: Guide = {
  slug: "logiciel-haccp-boulangerie",
  title: "Logiciel HACCP en boulangerie : ce qu'il fait vraiment",
  description:
    "À quoi sert un logiciel HACCP en boulangerie-pâtisserie, ce qu'impose réellement le plan de maîtrise sanitaire, et comment il se distingue d'un logiciel de gestion des recettes et des coûts.",
  keywords: [
    "logiciel HACCP boulangerie",
    "plan de maîtrise sanitaire boulangerie",
    "HACCP pâtisserie",
    "traçabilité boulangerie",
    "relevé température boulangerie",
  ],
  publishedAt: "2026-08-13",
  updatedAt: "2026-08-13",
  ogImage: "/images/feature-stock.png",
  summary:
    "Ce que recouvre réellement l'HACCP en boulangerie, ce qu'un logiciel dédié automatise, et pourquoi il ne faut pas le confondre avec un logiciel de gestion des recettes et des marges.",
  intro:
    "« Logiciel HACCP » est une expression qui recouvre deux choses très différentes : des outils de relevés sanitaires, et des logiciels de gestion qu'on vend parfois sous cette étiquette parce qu'elle rassure. Autant le dire tout de suite : Gramme n'est pas un logiciel HACCP. Cet article explique ce que l'HACCP demande, ce qu'un outil dédié fait à votre place, et où se situe la frontière.",
  draft: false,
  relatedSlug: "etiquette-allergene-boulangerie-obligation",
  relatedLabel: "Allergènes en boulangerie : ce que la réglementation impose",
  blocks: [
    {
      type: "h2",
      id: "definition",
      text: "L'HACCP n'est pas un logiciel, c'est une méthode",
    },
    {
      type: "p",
      text: "HACCP signifie Hazard Analysis Critical Control Point : analyse des dangers et points critiques pour leur maîtrise. C'est une démarche en sept principes — identifier les dangers, déterminer les points critiques, fixer des limites, les surveiller, corriger, vérifier, documenter. Le règlement (CE) n° 852/2004 impose aux exploitants du secteur alimentaire de mettre en place des procédures fondées sur ces principes.",
    },
    {
      type: "p",
      text: "En France, cette obligation se matérialise par le plan de maîtrise sanitaire, qui réunit trois volets : les bonnes pratiques d'hygiène, les procédures fondées sur l'HACCP, et la traçabilité avec la gestion des produits non conformes. Pour une boulangerie-pâtisserie artisanale, le guide de bonnes pratiques d'hygiène de la profession, validé par l'administration, permet de s'appuyer sur un cadre existant plutôt que de reconstruire une analyse des dangers de zéro.",
    },
    {
      type: "h2",
      id: "ce-que-fait",
      text: "Ce qu'un logiciel HACCP automatise réellement",
    },
    {
      type: "p",
      text: "Un outil HACCP dédié travaille sur des enregistrements sanitaires. Son intérêt n'est pas de penser à votre place, c'est de rendre la preuve disponible le jour du contrôle et d'éviter les classeurs remplis la veille.",
    },
    {
      type: "table",
      caption: "Périmètre habituel d'un logiciel HACCP",
      headers: ["Fonction", "Ce qu'elle remplace"],
      rows: [
        ["Relevés de températures (chambres, vitrines, cuisson, refroidissement)", "Les feuilles de relevés papier"],
        ["Plans de nettoyage et de désinfection avec validation", "Le planning affiché au mur"],
        ["Traçabilité amont et aval, gestion des lots", "Le classeur de bons de livraison"],
        ["Étiquetage des DLC et des produits ouverts", "Les étiquettes manuscrites"],
        ["Enregistrement des non-conformités et actions correctives", "Le cahier de liaison"],
        ["Archivage horodaté et export pour le contrôle", "La recherche dans les classeurs"],
      ],
    },
    {
      type: "h2",
      id: "frontiere",
      text: "Où s'arrête un logiciel de gestion comme Gramme",
    },
    {
      type: "p",
      text: "Gramme est un logiciel de gestion économique : recettes et fiches techniques, coûts de revient, mercuriale et prix d'achat, stock, production et marges. Il ne gère ni relevés de température, ni plan de nettoyage, ni traçabilité de lots, ni étiquetage de DLC. Il ne produit aucun document opposable en cas de contrôle sanitaire, et nous ne le présentons pas comme tel.",
    },
    {
      type: "p",
      text: "Il existe malgré tout un point de contact réel, et un seul : le répertoire de recettes. Un plan de maîtrise sanitaire correctement tenu suppose de savoir précisément ce qu'il y a dans chaque produit, sous-recettes et améliorants compris — c'est la même donnée que celle qui sert à construire l'information sur les allergènes. Un répertoire de recettes à jour est donc un préalable utile à ce travail, sans en être l'outil.",
    },
    {
      type: "table",
      caption: "Deux outils, deux périmètres",
      headers: ["Besoin", "Logiciel HACCP", "Gramme"],
      rows: [
        ["Relevés de températures et archivage", "Oui", "Non"],
        ["Plan de nettoyage, traçabilité des lots, DLC", "Oui", "Non"],
        ["Preuve documentaire pour un contrôle sanitaire", "Oui", "Non"],
        ["Répertoire de recettes et de sous-recettes à jour", "Rarement", "Oui"],
        ["Coût de revient, mercuriale, marges", "Non", "Oui"],
        ["Stock, production, fournisseurs", "Partiellement", "Oui"],
      ],
    },
    {
      type: "h2",
      id: "choisir",
      text: "Faut-il un logiciel HACCP quand on est une petite boulangerie",
    },
    {
      type: "p",
      text: "L'obligation porte sur la démarche et sur la capacité à en apporter la preuve, pas sur l'outil. Une structure de deux ou trois personnes peut parfaitement tenir son plan de maîtrise sanitaire sur support papier, à condition que les relevés soient réellement faits, datés et conservés. Le logiciel devient intéressant quand le volume d'enregistrements rend le papier ingérable, quand plusieurs personnes saisissent, ou quand vous avez plusieurs points de vente.",
    },
    {
      type: "p",
      text: "Le mauvais réflexe consiste à chercher un outil unique qui ferait la conformité sanitaire et la gestion économique. Ce sont deux métiers différents, avec deux fréquences d'usage différentes : l'un se remplit plusieurs fois par jour au laboratoire, l'autre se consulte quand une facture arrive ou qu'un prix bouge. Les outils qui prétendent couvrir les deux font généralement l'un des deux correctement.",
    },
    {
      type: "p",
      text: "Cet article résume l'état des textes à sa date de mise à jour et ne constitue pas un conseil juridique ni un audit de conformité. Pour votre situation, référez-vous aux textes officiels, au guide de bonnes pratiques d'hygiène de la boulangerie-pâtisserie, ou rapprochez-vous de votre chambre de métiers et de l'artisanat.",
    },
  ],
  faqs: [
    {
      q: "Gramme est-il un logiciel HACCP ?",
      a: "Non. Gramme est un logiciel de gestion économique pour boulangeries et pâtisseries : fiches techniques, coûts de revient, mercuriale, stock, production et marges. Il ne gère ni relevés de températures, ni plans de nettoyage, ni traçabilité de lots, ni étiquetage de DLC, et ne produit aucun document opposable lors d'un contrôle sanitaire.",
    },
    {
      q: "Un logiciel HACCP est-il obligatoire en boulangerie ?",
      a: "Non. Ce qui est obligatoire, c'est de mettre en place des procédures fondées sur les principes HACCP et de pouvoir en apporter la preuve. Le support peut rester le papier, à condition que les enregistrements soient réellement effectués, datés et conservés.",
    },
    {
      q: "Que contient un plan de maîtrise sanitaire ?",
      a: "Trois volets : les bonnes pratiques d'hygiène (personnel, locaux, matériel, matières premières), les procédures fondées sur les principes HACCP, et la traçabilité assortie de la gestion des produits non conformes.",
    },
    {
      q: "Peut-on utiliser Gramme en complément d'un logiciel HACCP ?",
      a: "Oui, et c'est la configuration la plus courante : l'outil HACCP couvre les enregistrements sanitaires du laboratoire, Gramme couvre les recettes, les coûts d'achat, le stock et les marges. Le répertoire de recettes tenu à jour dans Gramme sert par ailleurs de base fiable pour construire l'information sur les allergènes.",
    },
  ],
};
