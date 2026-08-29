/**
 * FAQ complète du site — source unique.
 *
 * Elle sert deux publics à la fois, et c'est voulu : l'artisan qui cherche une
 * réponse précise avant de décider, et le moteur génératif qui cherche un
 * passage citable. D'où la forme des réponses : une phrase qui répond
 * franchement, puis ce qui la justifie. Une réponse qui commence par « cela
 * dépend » ne se fait citer nulle part et ne rassure personne.
 *
 * Règle de tenue : **aucune réponse ne doit promettre plus que ce que le
 * produit fait**. Le fichier `llms.txt` a affirmé pendant des semaines que le
 * nombre de recettes était illimité dans les deux offres alors que Starter
 * plafonne à 50 — une erreur reprise mot pour mot par les moteurs, découverte
 * par le client à la 51ᵉ fiche. Ce qui est écrit ici doit être vérifiable dans
 * le produit.
 */

export type FaqEntry = {
  q: string;
  a: string;
};

export type FaqSection = {
  /** Ancre d'URL et cible du sommaire. */
  id: string;
  titre: string;
  /** Une ligne qui dit à qui cette section s'adresse. */
  chapeau: string;
  entrees: FaqEntry[];
};

export const faqSections: FaqSection[] = [
  {
    id: "comprendre",
    titre: "Comprendre Gramme",
    chapeau: "Ce que fait l'outil, pour qui il est fait, et ce qu'il ne fait pas.",
    entrees: [
      {
        q: "Qu'est-ce que Gramme, en une phrase ?",
        a: "Gramme est un logiciel de gestion et de production pour les boulangeries, pâtisseries et chocolateries artisanales : il digitalise vos recettes et vos fiches techniques, tient votre mercuriale à jour à partir de vos factures fournisseurs, et recalcule automatiquement le coût de revient et la marge de chaque produit dès qu'un prix bouge.",
      },
      {
        q: "À quel type d'établissement Gramme s'adresse-t-il ?",
        a: "Aux structures artisanales : boulangerie de quartier, pâtisserie de centre-ville, laboratoire qui livre des points de vente, chocolaterie, snacking. Cela va de l'artisan seul à l'équipe d'une quinzaine de personnes. Gramme n'est pas un ERP industriel multi-usines et n'essaie pas de l'être.",
      },
      {
        q: "Qu'est-ce que Gramme ne fait pas ?",
        a: "Gramme n'est ni une caisse enregistreuse, ni un logiciel de comptabilité, ni un outil de e-commerce ou de livraison, ni un logiciel HACCP. Il ne génère pas non plus vos recettes : il structure et valorise celles que vous avez déjà. Ces limites sont assumées — un outil qui prétend tout faire ne fait rien correctement.",
      },
      {
        q: "En quoi Gramme est-il différent d'un tableur Excel ?",
        a: "Un tableur ne se met pas à jour tout seul. Dans Gramme, une facture scannée met à jour le prix d'achat de la matière première, ce qui met à jour le coût de revient de toutes les recettes qui l'utilisent, y compris à travers les sous-recettes, ce qui met à jour la marge et le coefficient. La chaîne est automatique. Dans Excel, chaque maillon est une saisie manuelle que personne ne tient plus au bout de six mois.",
      },
      {
        q: "Qui a créé Gramme ?",
        a: "Gramme est né de la rencontre entre Jeremy, chef pâtissier formé aux exigences des grandes maisons et aujourd'hui responsable de la recherche et développement d'une entreprise du secteur, et Clermont Fu, entrepreneur ayant créé plusieurs sociétés et accompagné de nombreuses entreprises sur leur stratégie, leur marketing et leur chiffre d'affaires. Le premier décide de ce que fait le logiciel, le second de ce qu'il doit produire comme résultat.",
      },
      {
        q: "Gramme est-il un logiciel français ?",
        a: "Oui. Il est édité par YUFU CAPITAL, société immatriculée au RCS de Paris, l'interface et le support sont en français, et les données applicatives sont hébergées en Union européenne.",
      },
      {
        q: "Faut-il être à l'aise avec l'informatique pour utiliser Gramme ?",
        a: "Non. L'interface a été dessinée pour être utilisée avec les mains dans la farine : des écrans lisibles, peu de champs, pas de vocabulaire de logiciel. Et surtout, vous ne démarrez pas devant un outil vide — l'installation accompagnée remplit votre compte avant que vous l'ouvriez.",
      },
      {
        q: "Sur quels appareils Gramme fonctionne-t-il ?",
        a: "Sur ordinateur, tablette et téléphone, depuis un navigateur, sans rien installer. Gramme est une application web installable (PWA) : sur téléphone, elle s'ajoute à l'écran d'accueil et s'ouvre comme une application, notifications comprises. Le même compte et la même version partout, sans installation poste par poste ni mise à jour à lancer.",
      },
      {
        q: "Faut-il un ordinateur pour utiliser Gramme ?",
        a: "Non, et c'est un parti pris. Un boulanger n'est pas devant un ordinateur : il est devant un four à quatre heures du matin, et le seul écran à portée est celui de sa poche. Tout se fait depuis le téléphone — photographier une fiche ou une facture, consulter un coût, vérifier une marge, lancer une production. Plusieurs logiciels du secteur restent des applications de bureau à installer, et c'est la raison la plus fréquente pour laquelle un outil n'est ouvert qu'une fois par semaine, donc jamais tenu à jour.",
      },
      {
        q: "Faut-il une connexion internet dans le laboratoire ?",
        a: "Oui, Gramme fonctionne en ligne. La consultation reste possible sur une connexion faible, mais un laboratoire en sous-sol sans réseau demande un point d'accès — c'est à vérifier avant la mise en service.",
      },
    ],
  },
  {
    id: "recettes",
    titre: "Recettes et fiches techniques",
    chapeau: "Comment vos recettes entrent dans l'outil et ce qu'elles deviennent.",
    entrees: [
      {
        q: "Puis-je importer mes recettes en photo ?",
        a: "Oui, c'est la voie principale. Vous photographiez vos fiches manuscrites depuis le téléphone — anciennes, jaunies, farinées ou tachées de graisse — et Gramme reconstruit la fiche technique : ingrédients, quantités, unités, rendement, sous-recettes rattachées, pourcentage de perte, coût matière et marge.",
      },
      {
        q: "Mes fiches doivent-elles être propres pour être lues ?",
        a: "Non. La lecture est faite pour des documents d'atelier, pas pour des scans de bureau. Une photo prise de travers, sur un plan de travail, avec une tache, passe. Ce qui bloque vraiment, c'est une écriture illisible même pour un humain — dans ce cas la ligne vous est signalée pour arbitrage plutôt que devinée.",
      },
      {
        q: "Et si une quantité est mal lue ?",
        a: "Vous la corrigez avant validation : rien n'est enregistré sans votre accord. Les lignes douteuses sont signalées plutôt que silencieusement acceptées, précisément parce qu'une quantité fausse enregistrée se propage ensuite dans tous les coûts.",
      },
      {
        q: "Puis-je importer un gros fichier Excel de recettes ?",
        a: "Oui. Les tableaux de plusieurs centaines de lignes, avec leurs colonnes ajoutées au fil des années, sont repris en une fois : les colonnes sont identifiées, les doublons regroupés, les sous-recettes séparées des recettes finales et les matières premières rattachées à votre mercuriale. Ce travail est fait avec vous pendant l'installation accompagnée.",
      },
      {
        q: "Gramme gère-t-il les sous-recettes ?",
        a: "Oui, et sur plusieurs niveaux. Une crème pâtissière entre dans un flan qui entre dans un plateau : le coût remonte toute la chaîne. C'est le point déterminant en pâtisserie — sans sous-recettes en cascade, les coûts de revient sont faux, et ils le sont d'autant plus que la recette est élaborée.",
      },
      {
        q: "Comment sont gérés les pertes et les rendements ?",
        a: "Chaque fiche porte son poids brut, son poids net et son pourcentage de perte, qu'il s'agisse de perte à la cuisson, de parage ou de découpe. Le coût est rapporté au produit vendable, pas au produit sorti du pétrin — c'est la seule façon d'obtenir un coût de revient qui corresponde à ce que vous vendez.",
      },
      {
        q: "Pourquoi le pourcentage de perte change-t-il tout ?",
        a: "Parce qu'il porte sur de la matière que vous avez payée et que vous ne vendrez jamais. Une pâte perd couramment 12 % à la cuisson, un fruit 30 % au parage. Un coût calculé sans ce taux porte sur le poids sorti du pétrin, pas sur ce qui arrive en vitrine : la marge affichée est donc systématiquement plus belle que la vraie, et l'écart grandit avec le nombre d'étapes. C'est le premier écart que nous trouvons en reprenant un tableur, et le plus coûteux.",
      },
      {
        q: "Puis-je redimensionner une recette ?",
        a: "Oui. Vous changez le rendement et toutes les quantités suivent, y compris celles exprimées en pièces. Les décimales nécessaires sont conservées : un colorant à 0,4 g dans une recette de 200 g ne devient pas zéro quand on divise.",
      },
      {
        q: "Combien de fiches techniques puis-je créer ?",
        a: "Cinquante en offre Starter, sans limite en offre Pro. C'est une limite réelle, appliquée par le serveur : si vous avez plus de cinquante références, l'offre Pro est celle qu'il vous faut.",
      },
      {
        q: "Puis-je imprimer mes fiches pour l'atelier ?",
        a: "Oui, dans un format pensé pour être affiché et suivi en production, pas pour être classé dans un dossier.",
      },
      {
        q: "Mes recettes sont-elles modifiables par toute l'équipe ?",
        a: "Cela dépend des droits que vous attribuez. Chaque membre a un rôle, et les rôles décident de ce qui est consultable et de ce qui est modifiable. Un apprenti peut lire une fiche sans pouvoir en changer les quantités.",
      },
    ],
  },
  {
    id: "couts",
    titre: "Coûts de revient, marges et prix de vente",
    chapeau: "Le cœur du sujet : savoir ce que chaque produit vous coûte et vous rapporte.",
    entrees: [
      {
        q: "Comment calcule-t-on un coût de revient en boulangerie ?",
        a: "On additionne le coût de chaque composant à son prix d'achat réel, on applique le taux de perte, puis on divise par le nombre de pièces vendables. À cela s'ajoutent l'emballage, la main d'œuvre — temps de préparation multiplié par votre taux horaire — et, si vous les renseignez, vos charges fixes ramenées à la pièce. Gramme fait ce calcul et le refait à chaque changement de prix.",
      },
      {
        q: "Gramme prend-il en compte mes charges fixes ?",
        a: "Oui, si vous les renseignez. Vous saisissez vos charges — loyer, énergie, assurances, abonnements — avec leur périodicité, ainsi que les quantités vendues sur la période. Gramme en déduit la part de charges fixes imputable à une pièce et l'intègre au coût de revient, donc à la marge et au coefficient. Si vous ne renseignez rien, les calculs restent sur les matières, l'emballage et la main d'œuvre.",
      },
      {
        q: "Quelle est la différence entre ratio matière et marge ?",
        a: "Le ratio matière ne compte que les matières premières, rapportées au prix de vente hors taxes : c'est le chiffre qui se compare aux repères du métier. La marge, elle, porte sur le coût de revient complet — matières, emballage, main d'œuvre et charges fixes. Confondre les deux fait croire à une rentabilité qui n'existe pas.",
      },
      {
        q: "Quel pourcentage de coût matière faut-il viser ?",
        a: "Les repères usuels : 15 à 25 % pour le pain courant, 25 à 35 % pour la viennoiserie pur beurre, 20 à 30 % pour la pâtisserie individuelle, 30 à 40 % pour le snacking, en pourcentage du prix de vente hors taxes. Un ratio global unique n'a aucun sens sans le détail par famille : c'est la moyenne qui masque le produit qui perd de l'argent.",
      },
      {
        q: "Sur quel prix se calcule la marge, HT ou TTC ?",
        a: "Hors taxes, toujours. Un coût de revient est hors taxes, il ne peut se comparer qu'à un prix hors taxes. Calculer une marge sur le prix TTC gonfle artificiellement le résultat — en pain et viennoiserie à emporter, à 5,5 % de TVA, l'écart n'est pas anodin.",
      },
      {
        q: "Gramme me dit-il à quel prix vendre ?",
        a: "Il vous donne le coût de revient, la marge, le coefficient et le ratio matière à partir du prix que vous envisagez, et vous signale les recettes dont la marge se dégrade. La décision du prix reste la vôtre : elle dépend de votre marché, de votre positionnement et de votre clientèle, pas d'une formule.",
      },
      {
        q: "À quelle fréquence les marges sont-elles mises à jour ?",
        a: "À chaque fois qu'un prix d'achat change. Une facture scannée le matin se répercute immédiatement sur toutes les recettes concernées, y compris à travers les sous-recettes.",
      },
      {
        q: "Puis-je voir l'historique du coût d'une recette ?",
        a: "Oui. Chaque fiche conserve l'évolution de son coût de revient, ce qui permet de voir en un coup d'œil quel produit s'est dégradé sur six mois — et donc lequel mérite une révision de prix ou de recette.",
      },
      {
        q: "Faut-il un comptable pour exploiter ces chiffres ?",
        a: "Non. Les chiffres sont faits pour être lus par un artisan et servir à décider : augmenter un prix, changer un fournisseur, arrêter un produit. Ils ne remplacent ni votre comptabilité, ni votre expert-comptable, et ne prétendent pas être des documents fiscaux.",
      },
    ],
  },
  {
    id: "factures",
    titre: "Factures, fournisseurs et mercuriale",
    chapeau: "Comment vos prix d'achat restent à jour sans que vous les saisissiez.",
    entrees: [
      {
        q: "Qu'est-ce qu'une mercuriale ?",
        a: "C'est le relevé de vos prix d'achat matière par matière et fournisseur par fournisseur. En boulangerie, c'est le document qui décide de tout : sans mercuriale à jour, aucun coût de revient n'est fiable, et donc aucune marge.",
      },
      {
        q: "Comment Gramme met-il ma mercuriale à jour ?",
        a: "Vous photographiez ou déposez votre facture fournisseur. Les lignes sont extraites, rapprochées de vos matières premières existantes, et les prix d'achat mis à jour. Les recettes touchées par un changement de prix vous sont signalées.",
      },
      {
        q: "Combien de factures puis-je scanner par mois ?",
        a: "Trente en offre Starter, cent cinquante en offre Pro. Les scans réalisés par notre équipe pendant votre mise en service ne sont pas décomptés de ce quota.",
      },
      {
        q: "Que se passe-t-il si une matière première n'existe pas encore ?",
        a: "Elle vous est proposée à la création, avec son unité et son conditionnement lus sur la facture. Une fois l'association faite, elle est mémorisée : la même ligne d'un même fournisseur ne vous sera plus jamais redemandée.",
      },
      {
        q: "Suis-je prévenu quand un prix augmente ?",
        a: "Oui. Une hausse déclenche une alerte, sur le téléphone si vous les avez activées et par courriel. Vous choisissez ce que vous recevez et à quelles heures — une notification à trois heures du matin fait couper les notifications pour toujours.",
      },
      {
        q: "Puis-je comparer deux fournisseurs sur une même matière ?",
        a: "Oui. Vous voyez, pour une même matière première, les prix pratiqués par chacun de vos fournisseurs et l'écart entre eux. C'est souvent là que se trouve le gain le plus rapide.",
      },
      {
        q: "Gramme passe-t-il mes commandes fournisseurs ?",
        a: "Non. Gramme tient votre carnet de fournisseurs, vos prix et vos volumes d'achat estimés, mais la commande reste chez vous, par vos canaux habituels.",
      },
      {
        q: "Que faire des factures papier des années passées ?",
        a: "Nous reprenons vos factures des derniers mois pendant la mise en service, ce qui suffit à obtenir des prix justes et un début d'historique. Remonter plus loin est possible mais rarement utile : un prix de beurre d'il y a trois ans ne dit rien de celui d'aujourd'hui.",
      },
    ],
  },
  {
    id: "production",
    titre: "Production et stock",
    chapeau: "Ce que vous fabriquez, ce qu'il vous faut, ce qu'il vous reste.",
    entrees: [
      {
        q: "Comment fonctionne le planning de production ?",
        a: "Vous indiquez les recettes et les quantités du jour. Gramme consolide les besoins en matières premières, calcule le coût de fabrication de la fournée et met le stock à jour une fois la production faite.",
      },
      {
        q: "Le planning est-il utilisable dans le laboratoire ?",
        a: "Oui, il est lisible sur tablette et sur téléphone, avec des écrans faits pour être consultés debout, pas assis.",
      },
      {
        q: "Dois-je planifier chaque jour pour que ça serve ?",
        a: "Non. Même utilisé une fois par semaine sur les grosses productions, le planning donne les besoins matières consolidés et le coût de la fournée. L'usage quotidien apporte plus, mais il n'est pas la condition pour que l'outil serve.",
      },
      {
        q: "La gestion de stock est-elle incluse dans toutes les offres ?",
        a: "Non, elle fait partie de l'offre Pro, avec les inventaires valorisés et le pilotage des marges en temps réel. L'offre Starter couvre les recettes, les factures, les coûts et les marges.",
      },
      {
        q: "Faut-il un inventaire complet pour démarrer ?",
        a: "Non. Vous pouvez commencer avec les matières que vous suivez vraiment et compléter au fil des semaines. Attendre l'inventaire parfait est la meilleure façon de ne jamais commencer.",
      },
      {
        q: "Sait-on d'où vient un mouvement de stock ?",
        a: "Oui. Chaque mouvement porte sa cause — une production, une facture appliquée, une correction manuelle — de sorte que l'historique reste lisible et qu'un écart puisse s'expliquer.",
      },
    ],
  },
  {
    id: "mise-en-service",
    titre: "Mise en service et reprise de données",
    chapeau: "Ce qui se passe entre votre décision et votre premier jour d'utilisation.",
    entrees: [
      {
        q: "En quoi consiste l'installation accompagnée ?",
        a: "Nous montons votre compte de bout en bout : votre établissement, les profils de votre équipe avec leurs droits, votre carnet de fournisseurs, votre mercuriale complète — chaque matière première, son unité, son conditionnement, son prix d'achat réel —, la reprise de vos fiches recettes et de vos sous-recettes, le traitement de vos factures des derniers mois, puis les contrôles et la formation.",
      },
      {
        q: "Combien de temps cela représente-t-il ?",
        a: "Plusieurs jours de travail de notre côté. C'est ce qui explique que la prestation soit facturée : le premier jour, vous n'ouvrez pas un logiciel vide, vous ouvrez vos produits, vos prix et vos marges.",
      },
      {
        q: "Pourquoi l'installation est-elle payante ?",
        a: "Parce que c'est le travail qui décide de tout le reste. Les outils qui vous laissent tout saisir vous-même sont gratuits à l'installation, et c'est exactement pour cela qu'ils finissent inutilisés : un compte rempli à moitié n'est jamais rattrapé.",
      },
      {
        q: "Combien coûte la mise en service ?",
        a: "À partir de 300 € HT en Starter et de 500 € HT en Pro, payable en trois fois sans supplément. Le montant final dépend du volume à reprendre — un cahier de recettes et trois mois de factures ne demandent pas le même travail qu'un tableur de huit cents lignes. Il vous est communiqué par écrit avant toute exécution et ne peut plus être révisé ensuite.",
      },
      {
        q: "Et si mon entreprise est en cours de création ?",
        a: "C'est un forfait ferme de 300 € HT, quelle que soit l'offre. Il n'y a ni historique de factures, ni mercuriale, ni fiches à reprendre : la charge est connue d'avance. Nous partons de vos recettes et nous montons votre mercuriale avec vous.",
      },
      {
        q: "Puis-je m'en passer et tout saisir moi-même ?",
        a: "C'est possible, mais nous ne le recommandons pas, et l'expérience est constante sur ce point. Si vous y tenez, dites-le-nous et nous en parlons.",
      },
      {
        q: "Combien de temps avant de pouvoir utiliser Gramme ?",
        a: "Comptez quelques jours entre la transmission de vos documents et l'ouverture du compte. Le délai exact vous est annoncé pendant la démonstration, en fonction de ce qu'il y a à reprendre.",
      },
      {
        q: "Que dois-je préparer de mon côté ?",
        a: "Vos fiches recettes sous n'importe quelle forme — cahier, classeur, tableur —, vos factures fournisseurs des derniers mois, la liste des personnes qui auront un accès, et vos prix de vente actuels. Rien de plus.",
      },
    ],
  },
  {
    id: "tarifs",
    titre: "Tarifs, abonnement et engagement",
    chapeau: "Combien ça coûte, et ce qui se passe si vous arrêtez.",
    entrees: [
      {
        q: "Combien coûte Gramme ?",
        a: "L'offre Starter est à 49 € HT par mois ou 490 € HT par an. L'offre Pro est à 89 € HT par mois ou 890 € HT par an. S'ajoute l'installation accompagnée, facturée une seule fois. Les prix sont hors taxes et la TVA est récupérable.",
      },
      {
        q: "Quelle est la différence entre Starter et Pro ?",
        a: "Starter couvre un utilisateur, cinquante fiches techniques, trente factures scannées par mois, et le coût de revient et la marge en temps réel. Pro ajoute le calcul des marges et le pilotage de la rentabilité, la gestion des stocks et les inventaires valorisés, jusqu'à cinq utilisateurs, les recettes illimitées, l'historique de production, les alertes de prix avancées, cent cinquante factures par mois et le support prioritaire.",
      },
      {
        q: "Y a-t-il un engagement de durée ?",
        a: "Pas en mensuel : vous résiliez à tout moment, par un simple courriel, et la résiliation prend effet à la fin du mois en cours. L'annuel court douze mois, avec deux mois offerts par rapport au mensuel.",
      },
      {
        q: "Y a-t-il un essai gratuit ?",
        a: "Nous préférons une démonstration d'une heure sur vos propres fiches, ce qui est plus parlant qu'un compte de démonstration vide. Et sur l'abonnement annuel, vous disposez de trente jours satisfait ou remboursé.",
      },
      {
        q: "Que se passe-t-il si j'arrête ?",
        a: "Vos données restent exportables à tout moment, et elles sont conservées douze mois après votre départ — le temps de les récupérer, ou de revenir sans rien avoir perdu. Passé ce délai elles sont supprimées, et vous pouvez demander leur suppression plus tôt si vous le souhaitez.",
      },
      {
        q: "Puis-je changer d'offre en cours d'année ?",
        a: "Oui. Contactez-nous, l'offre est ajustée et le prorata régularisé selon votre périodicité.",
      },
      {
        q: "Y a-t-il des frais cachés ?",
        a: "Non. Pas de commission sur votre chiffre d'affaires, pas de coût par utilisateur supplémentaire dans la limite de l'offre, pas de frais de sortie. Les deux seules lignes sont l'abonnement et l'installation.",
      },
      {
        q: "Les prix peuvent-ils augmenter ?",
        a: "Une révision tarifaire ne s'applique qu'à l'échéance suivante et après un préavis de soixante jours, période pendant laquelle vous pouvez résilier sans frais.",
      },
    ],
  },
  {
    id: "equipe",
    titre: "Équipe, accès et support",
    chapeau: "Qui voit quoi, et à qui parler quand ça coince.",
    entrees: [
      {
        q: "Combien de personnes peuvent utiliser Gramme ?",
        a: "Une en offre Starter, jusqu'à cinq en offre Pro. Chaque personne a son accès et son rôle.",
      },
      {
        q: "Puis-je limiter ce que voit mon équipe ?",
        a: "Oui. Les droits se règlent par rôle : on peut donner accès aux fiches de production sans donner accès aux prix d'achat, aux marges ou aux données commerciales.",
      },
      {
        q: "Puis-je gérer plusieurs établissements ?",
        a: "Oui, avec un forfait multi-établissement dédié. Chaque atelier reste un espace de données distinct et cloisonné, et vous basculez de l'un à l'autre depuis le même compte. Décrivez-nous votre organisation — nombre de laboratoires, points de vente, qui doit voir quoi — et nous vous établissons la proposition correspondante.",
      },
      {
        q: "Comment joindre le support ?",
        a: "Par courriel à support@gramme.app, du lundi au vendredi. Les demandes commerciales passent par bonjour@gramme.app, avec une réponse sous quatre heures ouvrées. L'offre Pro bénéficie d'un traitement prioritaire.",
      },
      {
        q: "Le logiciel évolue-t-il ?",
        a: "En permanence, et c'est assumé. Les retours d'atelier passent directement dans la version suivante, et il en sort une régulièrement. Les nouveautés arrivent sans surcoût : pas de version 2 à racheter, pas de module à débloquer. L'étiquetage allergènes et les valeurs nutritionnelles sont arrivés le 30 août 2026. Les chantiers encore en cours — traçabilité HACCP, connexion aux caisses et à la comptabilité — sont annoncés d'ici fin 2026.",
      },
      {
        q: "Puis-je demander une fonctionnalité ?",
        a: "Oui, et c'est de là que viennent la plupart. Écrivez-nous : si le besoin est partagé par d'autres ateliers, il monte dans la file.",
      },
    ],
  },
  {
    id: "donnees",
    titre: "Données, sécurité et confidentialité",
    chapeau: "Vos recettes sont votre patrimoine. Ce que nous en faisons — et ne faisons pas.",
    entrees: [
      {
        q: "Mes recettes m'appartiennent-elles ?",
        a: "Oui, pleinement et exclusivement. Vos recettes, fiches techniques, factures, prix d'achat et marges restent votre propriété. Nous ne les revendons pas, ne les partageons pas avec d'autres établissements et n'y accédons que pour le support ou la mise en service, à votre demande.",
      },
      {
        q: "Un autre boulanger peut-il voir mes recettes ?",
        a: "Non. Les données sont cloisonnées par établissement, techniquement, au niveau de la base : un compte ne peut pas lire les données d'un autre, même par erreur de manipulation.",
      },
      {
        q: "Où sont hébergées mes données ?",
        a: "En Union européenne, dans un cadre conforme au RGPD. Le site lui-même est diffusé par un réseau dont les points de présence européens servent les visiteurs français.",
      },
      {
        q: "Puis-je récupérer mes données ?",
        a: "Oui, à tout moment et dans un format exploitable, sans avoir à le justifier. C'est la contrepartie normale d'un outil où l'on dépose son savoir-faire.",
      },
      {
        q: "Y a-t-il des sauvegardes ?",
        a: "Oui, régulières, avec une copie conservée à froid indépendamment de l'infrastructure principale.",
      },
      {
        q: "Le site utilise-t-il des cookies publicitaires ?",
        a: "Non. La mesure d'audience du site, lorsqu'elle est activée, se fait sans cookie et sans profilage. Vous ne trouverez pas de bandeau de consentement à rallonge sur gramme.app.",
      },
    ],
  },
  {
    id: "reglementation",
    titre: "Réglementation : HACCP et allergènes",
    chapeau: "Là où passe la frontière — et pourquoi nous la disons franchement.",
    entrees: [
      {
        q: "Gramme fait-il l'HACCP ?",
        a: "Pas encore, et il est important de le dire clairement : aujourd'hui, pas de relevés de températures, pas de plan de nettoyage, pas de traçabilité de lots, pas d'étiquetage de DLC, aucun document opposable lors d'un contrôle sanitaire. Ce chantier est en cours de développement et annoncé d'ici fin 2026. En attendant, Gramme s'utilise en complément d'un outil HACCP dédié, jamais à sa place. Si la conformité sanitaire est votre priorité ce trimestre, dites-le-nous : nous vous dirons franchement où nous en sommes.",
      },
      {
        q: "Gramme gère-t-il l'affichage réglementaire des allergènes ?",
        a: "Oui, depuis le 30 août 2026. Vous renseignez les allergènes une fois par matière première — ou vous photographiez l'étiquette de votre fournisseur — et ils remontent tout seuls aux sous-recettes puis aux produits finis. Gramme édite l'affiche à poser en vitrine et l'étiquette des produits emballés, avec les valeurs nutritionnelles si vous en avez besoin. Une précision qui compte : nous vous aidons à rassembler et à rédiger cette information, nous ne certifions pas sa conformité. Vous restez l'exploitant responsable de ce que vous diffusez, et rien ne s'imprime sans que vous ayez validé.",
      },
      {
        q: "Quels sont les quatorze allergènes à déclaration obligatoire ?",
        a: "Céréales contenant du gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, graines de sésame, anhydride sulfureux et sulfites au-delà de 10 mg/kg, lupin et mollusques — annexe II du règlement UE 1169/2011.",
      },
      {
        q: "Une boulangerie doit-elle afficher les allergènes en vente à la coupe ?",
        a: "Oui. Depuis le décret n° 2015-447 du 17 avril 2015, l'information doit être écrite, lisible et accessible sans que le client ait à la demander. Une réponse orale seule ne suffit pas.",
      },
      {
        q: "Quel taux de TVA s'applique en boulangerie ?",
        a: "5,5 % sur le pain et la viennoiserie à emporter, 10 % sur la consommation sur place et certains produits de restauration. C'est le taux qui détermine votre prix hors taxes, donc votre marge réelle : se tromper de taux fausse tout le calcul.",
      },
    ],
  },
];

/** Toutes les questions à plat — pour le balisage FAQPage et les recherches. */
export const toutesLesQuestions: FaqEntry[] = faqSections.flatMap((s) => s.entrees);
