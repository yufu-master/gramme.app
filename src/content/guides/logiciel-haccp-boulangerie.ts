import type { Guide } from "./types";

export const guideHaccp: Guide = {
  slug: "logiciel-haccp-boulangerie",
  title: "Logiciel HACCP en boulangerie : ce qu'il fait",
  description:
    "Ce que la réglementation demande, ce qu'un outil enregistre à votre place, et la ligne qu'aucun éditeur ne peut franchir.",
  keywords: [
    "logiciel HACCP boulangerie",
    "plan de maîtrise sanitaire boulangerie",
    "HACCP pâtisserie",
    "traçabilité boulangerie",
    "relevé température boulangerie",
  ],
  publishedAt: "2026-08-13",
  updatedAt: "2026-08-30",
  ogImage: "/images/feature-stock.png",
  summary:
    "Ce que recouvre réellement l'HACCP en boulangerie, ce qu'un logiciel enregistre à votre place, et la ligne que la loi ne laisse déplacer à aucun éditeur : la maîtrise sanitaire reste celle de l'exploitant.",
  intro:
    "« Logiciel HACCP » est une expression commode, et trompeuse : aucun logiciel ne rend une boulangerie conforme. Ce qu'un outil peut faire, c'est enregistrer vos relevés, les horodater, les rendre imprimables, et rendre impossible de les réécrire après coup. C'est déjà beaucoup, parce que c'est exactement ce qu'un cahier accroché au mur ne garantit pas. Cet article explique ce que la réglementation demande, ce qu'un outil enregistre à votre place, et où s'arrête sa responsabilité.",
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
      text: "HACCP signifie Hazard Analysis Critical Control Point : analyse des dangers et points critiques pour leur maîtrise. C'est une démarche en sept principes : identifier les dangers, déterminer les points critiques, fixer des limites, les surveiller, corriger, vérifier, documenter. Le règlement (CE) n° 852/2004 impose aux exploitants du secteur alimentaire de mettre en place des procédures fondées sur ces principes.",
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
      text: "Où s'arrête un logiciel, et où commence l'exploitant",
    },
    {
      type: "p",
      text: "Gramme tient les enregistrements du tableau ci-dessus : relevés de températures avec les bornes et les horaires que vous fixez, plan de nettoyage pointé par zone et par fréquence, étiquettes de lot et dates limites, contrôles à réception repris de la facture déjà scannée, et registres imprimables sur la période de votre choix. Une chose ne change pas pour autant, et elle est plus importante que la liste : cela ne vous rend pas conforme. L'analyse des dangers de votre atelier, vos bonnes pratiques d'hygiène, le choix de vos points critiques et de vos limites, la formation de votre équipe : rien de tout cela ne s'automatise. Un logiciel enregistre la preuve que la démarche est tenue ; il ne tient pas la démarche.",
    },
    {
      type: "p",
      text: "Deux garde-fous méritent d'être vérifiés chez n'importe quel éditeur, y compris chez nous. Le premier : une ligne enregistrée peut-elle être modifiée ensuite ? Chez nous, non, pas même par un administrateur du compte. Une erreur se corrige par une annulation motivée, et les deux lignes restent visibles. Un journal qu'on peut réécrire ne prouve rien. Le second : les bornes appliquées sont-elles figées avec le relevé ? Sinon, remonter un plafond de température demain repeindrait l'historique d'hier, et vos écarts passés disparaîtraient d'eux-mêmes.",
    },
    {
      type: "table",
      caption: "Ce qu'un logiciel enregistre, ce qu'il n'enregistrera jamais",
      headers: ["Ce dont vous avez besoin", "Un logiciel peut-il le faire ?"],
      rows: [
        ["Prendre et horodater les relevés de températures", "Oui, et le rendre impossible à réécrire"],
        ["Rappeler le relevé de dix-sept heures qui manque", "Oui, à condition qu'il connaisse vos horaires"],
        ["Garder la trace de l'action corrective après un écart", "Oui, en refusant d'enregistrer l'écart sans elle"],
        ["Sortir le registre le jour du contrôle", "Oui, sur la période demandée"],
        ["Analyser les dangers propres à votre atelier", "Non · c'est votre travail, ou celui de votre conseil"],
        ["Fixer vos points critiques et vos limites", "Non · il applique celles que vous entrez"],
        ["Attester que votre exploitation est conforme", "Non, et méfiez-vous de celui qui l'écrit"],
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
      text: "Si vous regardez un outil qui couvre à la fois l'hygiène et la gestion économique, la question à poser n'est pas « fait-il les deux ? » mais « à quel rythme chacun s'utilise-t-il ? ». Les relevés se prennent plusieurs fois par jour, debout, les mains occupées ; les coûts se consultent quand une facture arrive. Un outil qui traite l'hygiène comme un écran de bureau de plus sera rempli le dimanche soir, de mémoire, et il ne vaudra pas mieux que le cahier qu'il remplace. Demandez donc à voir l'écran de saisie sur un téléphone, et comptez les gestes qu'il faut pour noter une température. C'est ce chiffre-là qui dira si l'outil sera tenu.",
    },
    {
      type: "p",
      text: "Cet article résume l'état des textes à sa date de mise à jour et ne constitue pas un conseil juridique ni un audit de conformité. Pour votre situation, référez-vous aux textes officiels, au guide de bonnes pratiques d'hygiène de la boulangerie-pâtisserie, ou rapprochez-vous de votre chambre de métiers et de l'artisanat.",
    },
  ],
  faqs: [
    {
      q: "Gramme fait-il les relevés de températures et le plan de nettoyage ?",
      a: "Oui, et c'est compris dans l'offre Pro sans module en supplément. Vous déclarez vos enceintes, les bornes que vous fixez et vos heures de relevé ; le relevé se prend en quelques secondes depuis le téléphone du laboratoire, et un écart hors de vos bornes ne s'enregistre pas sans l'action corrective qui l'accompagne. Le plan de nettoyage se pointe de la même façon, par zone et par fréquence. Les registres s'impriment sur la période de votre choix. En revanche, Gramme ne rédige pas votre plan de maîtrise sanitaire et n'atteste d'aucune conformité : il enregistre, il n'analyse pas à votre place.",
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
      q: "Un registre numérique vaut-il un cahier papier lors d'un contrôle ?",
      a: "Ce qui compte n'est pas le support mais la preuve : des enregistrements réellement faits, datés, nominatifs et conservés. Un registre numérique a un avantage que le papier n'a pas : il ne se réécrit pas après coup. Chez nous, une ligne enregistrée ne peut être modifiée par personne, pas même par un administrateur du compte : une erreur s'annule avec un motif et les deux lignes restent visibles. Beaucoup d'artisans gardent le papier quelques semaines en parallèle, le temps de vérifier que l'habitude a pris. C'est une prudence raisonnable.",
    },
  ],
};
