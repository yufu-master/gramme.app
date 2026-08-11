# Lot 1 de contenu éditorial : deux articles prêts à publier

Version 2, corrigée. Contenu rédigé pour gramme.app, avec le prompt d'intégration Cursor en fin de document.

---

# À LIRE AVANT DE PUBLIER

## 1. Les affirmations d'antériorité sont volontairement absentes

Aucun article ne dit première application, seul logiciel ni numéro un. En France, une allégation de supériorité ou d'antériorité dans une communication commerciale doit pouvoir être prouvée, faute de quoi elle relève de la pratique commerciale trompeuse. Vous ne pouvez démontrer qu'aucune application au monde n'a jamais été conçue par un pâtissier ni n'a jamais lu une recette en photo.

Le risque commercial est plus concret encore que le risque juridique. Vos prospects se parlent, et certains connaissent Otami ou Koust. Un seul « mais votre concurrent existe depuis trois ans » suffit à défaire la crédibilité que Jeremy met des mois à construire.

Les formulations retenues sont vraies, vérifiables et plus fortes : conçu par un chef pâtissier en exercice, modèle de données bâti sur les sous recettes et le montage, chaîne complète de la facture à la marge.

## 2. Trois chiffres doivent être remplacés avant publication

Les articles contiennent des emplacements marqués `⟨…⟩`. **Tant qu'ils ne sont pas remplacés par des valeurs mesurées, l'article ne doit pas être mis en ligne.**

| Emplacement | Ce qu'il faut y mettre | Où le trouver |
|---|---|---|
| `⟨tableau de coût entremets⟩` | Les vrais composants et coûts d'un entremets de Jeremy | Fiche technique réelle, calculée dans l'application |
| `⟨variation de prix constatée⟩` | Une hausse réellement observée sur une facture, avec le mois | Historique de prix d'un client ou de Jeremy |
| `⟨durée de reprise⟩` | Le temps réellement chronométré pendant la mise en service de MOME | À mesurer le jour J |

Les valeurs que contenait la version précédente venaient du jeu de données de démonstration, donc d'un exemple inventé. Publiées telles quelles comme exemples réels, elles auraient été fausses.

## 3. Ce que ces articles ne disent pas, et ne doivent jamais dire

Rien sur ce qui arrive. L'anticipation des étapes, la journée de l'artisan, le rappel du soir : ces fonctionnalités ne sont mentionnées nulle part et ne doivent pas l'être avant d'être livrées et utilisées par un client. Un concurrent qui l'apprend six mois plus tard aura six mois de retard.

Rien sur le fonctionnement interne. Les articles décrivent ce que l'artisan obtient, jamais l'architecture ni le détail des cas limites de traitement. Ce niveau de détail n'intéresse que des concurrents.

---

# ARTICLE 1

## Métadonnées

| Champ | Valeur |
|---|---|
| Adresse | `/guides/logiciel-concu-par-un-chef-patissier` |
| Titre | Un logiciel de gestion conçu par un chef pâtissier, pour les artisans |
| Description | Pourquoi une application pensée dans un laboratoire ne ressemble pas à un outil venu de la restauration. Sous recettes, montage, coût de revient réel. |
| Mots clés | logiciel conçu par un pâtissier, logiciel gestion pâtisserie, fiche technique pâtisserie, coût de revient pâtisserie |
| Balisage | Article, auteur de type Person renvoyant vers Jeremy, FAQPage |

## Texte de l'article

# Un logiciel de gestion conçu par un chef pâtissier, pour les artisans

La plupart des logiciels de gestion utilisés en pâtisserie viennent de la restauration. Ils savent additionner des ingrédients et calculer un coût matière. Ils ne savent pas ce qu'est une crème pâtissière qui sert dans quatre produits différents, ni une perte de cuisson qui change le poids net d'une pâte. Gramme a été conçu par un chef pâtissier en exercice, à partir de ces problèmes là.

## Ce qui change quand celui qui conçoit l'outil a travaillé au fournil

Un développeur qui n'a jamais monté un entremets modélise une recette comme une liste de lignes : un nom, une quantité, un prix. C'est logique, c'est propre, et c'est faux.

Dans un laboratoire, une recette est un assemblage. Un entremets, ce n'est pas quarante ingrédients à plat. C'est un biscuit, un croustillant, une mousse, une ganache et un glaçage. Chacun de ces éléments est lui même une recette, avec ses ingrédients, son rendement et son coût au kilo. Et la même mousse sert peut être dans trois autres produits de la vitrine.

Quand le prix d'une matière première augmente, ce n'est donc pas une ligne qu'il faut corriger. C'est une base qui alimente plusieurs produits finis, et plusieurs marges qui bougent en même temps. Un outil qui traite les recettes à plat vous oblige à corriger partout, à la main, en espérant n'en oublier aucune.

## Trois choses qu'un pâtissier exige et qu'on trouve rarement

**Les sous recettes qui se propagent.** Vous créez votre crème pâtissière une fois, avec son rendement et son coût réel. Chaque produit qui l'utilise en hérite. Le jour où le prix des œufs monte, tous les produits concernés se recalculent seuls, y compris ceux auxquels vous n'aviez pas pensé.

**Le montage plutôt que la liste.** Un produit composé s'assemble à partir de ses bases, avec la quantité de chacune, exactement comme sur la fiche technique manuscrite du chef. La liste à plat convient aux produits simples, elle ne devrait jamais être imposée pour un entremets.

**Le poids réel plutôt que le poids théorique.** Une pâte qui perd du poids à la cuisson ne coûte pas le même prix au kilo à la sortie qu'à l'entrée. Sans la perte de cuisson, un coût de revient est systématiquement sous estimé, et la marge affichée est fausse dans le sens qui rassure et qui ruine.

## Le coût de revient, calculé comme un artisan le calculerait

⟨tableau de coût entremets⟩

> Remplacer par un vrai produit de Jeremy, avec ses composants, ses quantités, son coût matière total, son prix de vente et sa marge. Un exemple réel vaut dix exemples inventés, et c'est exactement ce que les lecteurs et les moteurs retiennent.

Chacune de ces lignes est une sous recette dont le coût vient lui même de ses propres ingrédients, au prix réel de la dernière facture. Le jour où votre crémier change son tarif, les bases concernées bougent, et la marge du produit fini descend sans que personne n'ait rien saisi.

C'est ce cheminement, du sac de farine à la part vendue, qu'un chef pâtissier a en tête et qu'un tableur ne tient pas.

## Ce que Gramme ne fait pas

Par honnêteté, et parce que vous le découvririez de toute façon. Gramme n'est pas un logiciel de caisse et ne remplace pas votre encaissement. Il ne gère pas la traçabilité sanitaire ni les relevés de température. Il ne fait pas votre comptabilité. Et il a besoin d'une connexion pour analyser vos documents.

Ce qu'il fait, il le fait pour un métier précis : celui des artisans boulangers et pâtissiers qui veulent savoir, chaque matin, ce que leur coûte réellement ce qu'ils vendent.

## Questions fréquentes

**Faut il être à l'aise avec l'informatique ?** Si vous savez prendre une photo avec votre téléphone, vous savez utiliser l'essentiel. C'est le seul geste quotidien réellement nécessaire.

**Combien de temps pour reprendre mes recettes ?** L'installation est faite avec vous, à partir de votre cahier ou de votre classeur. Vos produits principaux sont saisis ensemble, le reste vient au fil des semaines.

**Mes recettes restent elles confidentielles ?** Elles vous appartiennent, elles sont cloisonnées par établissement, et elles ne sont montrées à personne. C'est écrit dans le contrat.

---

# ARTICLE 2

## Métadonnées

| Champ | Valeur |
|---|---|
| Adresse | `/guides/scanner-fiches-techniques-patisserie` |
| Titre | Photographier ses fiches techniques et les retrouver classées |
| Description | Comment numériser un cahier de recettes en photo, avec les sous recettes reliées, les matières premières identifiées et les coûts calculés. |
| Mots clés | scanner fiche technique, numériser cahier de recettes, fiche technique pâtisserie, sous recette, coût de revient recette |
| Balisage | Article, HowTo, FAQPage |

## Texte de l'article

# Photographier ses fiches techniques et les retrouver classées, avec les coûts calculés

Un cahier de recettes se photographie en quelques minutes. Le transformer en fiches techniques exploitables, avec les sous recettes reliées, les matières identifiées et les coûts calculés, c'est un autre travail. Voici comment il se fait, et ce qu'il demande de votre part.

## Le vrai problème n'est pas de lire l'écriture

On croit que la difficulté est de déchiffrer une page manuscrite tachée de gras. C'est la partie facile.

La difficulté est ailleurs. Dans un cahier de chef, une recette dit crème pâtissière 400 g sans préciser laquelle, ni ce qu'elle contient, ni combien elle coûte. Elle dit farine sans dire T45 ou T65. Elle dit pour 6 sans dire six quoi. Et elle suppose vingt ans de métier chez celui qui la lit.

Numériser une recette, ce n'est donc pas transformer une image en texte. C'est reconstituer une structure que le papier n'a jamais eue.

## Comment ça se passe, de votre côté

**Vous photographiez.** Une page à la fois, posée à plat, dans un endroit éclairé. Une recette qui court sur deux pages se photographie en deux fois. Les cahiers, les classeurs, les fiches imprimées et les fichiers PDF fonctionnent de la même manière.

**Vous vérifiez.** L'application vous présente ce qu'elle a compris : le nom du produit, le rendement, les composants avec leurs quantités, le procédé. Vous corrigez ce qui doit l'être. Rien n'est enregistré sans votre accord, et ce qui est incertain vous est signalé comme tel plutôt que deviné en silence.

**C'est tout.** Le rattachement aux matières premières que vous avez déjà, la liaison aux sous recettes existantes et le calcul des coûts se font ensuite, sans intervention.

## Pourquoi les sous recettes changent tout

C'est le point que les outils venus de la restauration traitent mal, et c'est celui qui compte le plus en pâtisserie.

Imaginons que vous numérisiez quinze recettes utilisant toutes la même crème pâtissière. Un outil qui traite les recettes à plat va créer quinze fois du lait, quinze fois des jaunes, quinze fois du sucre. Votre catalogue devient illisible, et le jour où le prix des œufs bouge, quinze recettes sont fausses.

Avec des sous recettes, la crème pâtissière existe une seule fois. Elle a son rendement, son coût au kilo et son procédé. Les quinze produits qui l'utilisent la référencent. Une hausse du prix des œufs traverse la crème, puis les quinze produits, sans intervention.

C'est la même logique pour un entremets, à un niveau de plus : le produit fini appelle des sous recettes, qui appellent elles mêmes des matières premières. Deux niveaux d'imbrication, ce que le papier fait naturellement et que la plupart des logiciels ne représentent pas.

## Les matières premières, là où se cache la vérité du coût

Une recette exacte avec des prix faux ne sert à rien.

C'est pourquoi la numérisation des recettes ne va jamais seule. Les prix viennent de vos factures fournisseurs, photographiées elles aussi. Un sac de farine de 25 kilos facturé 22,40 euros donne un prix de référence de 0,896 euro le kilo, et c'est ce prix, pas celui du sac, qui sert à calculer vos recettes.

Cette conversion paraît évidente. Elle est pourtant la source d'erreur la plus fréquente dans les fiches techniques faites au tableur, parce que personne ne la refait à chaque changement de tarif.

## Ce qui demande encore votre œil

Une écriture très abrégée reste ambiguë pour tout le monde, y compris pour un pâtissier qui n'a pas écrit la fiche. Elle vous est présentée pour arbitrage plutôt qu'interprétée au hasard.

Une recette sans rendement indiqué ne permet pas de calculer un coût à la part. Il faudra dire combien de pièces elle donne.

Et une photo floue prise dans un couloir sombre donnera un résultat médiocre, quelle que soit la technologie. Poser la page à plat, sous une lumière correcte, reste le geste qui améliore le plus le résultat.

## Combien de temps pour un cahier entier

⟨durée de reprise⟩

> Remplacer par le temps réellement chronométré lors d'une reprise, par exemple : sur la reprise d'un cahier de N recettes, comptez environ X minutes par recette, vérification comprise. Ne rien écrire tant que la mesure n'a pas été faite.

À titre de comparaison, saisir une fiche technique complète au clavier, avec ses composants et ses quantités, prend rarement moins de dix minutes.

## En résumé

| Étape | Ce que vous faites | Ce que vous obtenez |
|---|---|---|
| 1 | Photographier la page | La recette lue et structurée |
| 2 | Vérifier et corriger | Une fiche technique conforme à la vôtre |
| 3 | Rien | Les matières et sous recettes reliées, le coût et la marge calculés |

## Questions fréquentes

**Est ce que ça marche sur une écriture manuscrite ?** Oui, sur une écriture lisible et une photo correcte. Les abréviations personnelles vous sont présentées pour arbitrage.

**Et si j'ai déjà mes fiches sur tableur ?** Elles sont reprises telles quelles, sans repasser par la photo.

**Est ce que mes recettes servent à autre chose ?** Non. Elles ne sont ni partagées, ni réutilisées pour constituer une bibliothèque, ni utilisées pour entraîner un modèle. C'est écrit dans le contrat signé avec chaque client.

**Que se passe t il si je me trompe en validant ?** Tout se corrige, et l'historique conserve la trace des modifications.

---

# PROMPT À COPIER DANS CURSOR

```
Tu travailles sur le site vitrine gramme.app, projet Next.js 16 dans DEV/gramme-website. Tu dois créer la rubrique de guides et préparer les deux premiers articles, dont les textes complets se trouvent dans docs/ARTICLES-SEO-LOT1.md.

RÈGLE BLOQUANTE : les textes contiennent trois emplacements marqués ⟨…⟩. Un article contenant encore un emplacement non renseigné ne doit pas être publié. Mets ces articles en brouillon, non indexés et absents du plan du site, tant que les emplacements ne sont pas remplis. Prévois un indicateur de brouillon dans les données de l'article et un contrôle automatique qui échoue à la compilation si un ⟨ subsiste dans un article publié.

1. Crée la route /guides avec une page d'index listant les articles publiés uniquement, et un modèle d'article réutilisable. Le contenu vit dans des fichiers de données ou du MDX, jamais en dur dans un composant, afin que le troisième article ne demande qu'un fichier de plus.

2. Le modèle d'article comporte : un titre principal unique, une introduction qui répond dès les cent premiers mots, un sommaire cliquable généré depuis les sous titres, un contenu structuré, une section de questions fréquentes, une date de publication et une date de mise à jour visibles, un bloc auteur mentionnant Jeremy chef pâtissier et cofondateur, et un appel à l'action de fin vers la démonstration.

3. Prépare les deux articles fournis, à ces adresses exactes :
   /guides/logiciel-concu-par-un-chef-patissier
   /guides/scanner-fiches-techniques-patisserie
   Reprends les textes sans les réécrire, sans les raccourcir et sans y ajouter d'exemples chiffrés de ton invention.

4. Métadonnées par article : titre et description repris du document, adresse canonique, image de partage social dédiée, données structurées Article avec auteur de type Person, datePublished et dateModified. FAQPage sur les questions fréquentes des deux articles, HowTo sur la section des étapes du second.

5. Maillage interne : depuis chaque article vers la page fonctionnalités et vers la page tarifs, depuis l'accueil vers la rubrique guides, et entre les deux articles. Les libellés de liens contiennent les mots clés visés, jamais la formule en savoir plus.

6. Ajoute les articles publiés et la page d'index au plan du site, et rends la génération du plan automatique afin qu'un futur article n'y soit plus jamais oublié. Les brouillons sont exclus du plan et portent une balise de non indexation.

7. Mets à jour public/llms.txt en ajoutant une section listant les guides publiés, avec pour chacun son adresse et une phrase de résumé factuelle.

8. Respecte la charte existante : palette matcha et forêt, typographie Inter, aucune couleur nouvelle, aucune bibliothèque supplémentaire. Lecture confortable sur téléphone, corps de texte à seize pixels minimum, largeur de ligne limitée à environ soixante quinze caractères.

9. Vérifie avant de terminer : le site compile, les pages sont rendues côté serveur, les données structurées passent la validation, aucune page ne dépasse deux secondes de chargement en mobile.

INTERDITS, sans exception :
   Aucune affirmation de supériorité ou d'antériorité, du type première application, seul logiciel, numéro un, leader, révolutionnaire.
   Aucun chiffre inventé, estimé ou illustratif présenté comme une mesure réelle.
   Aucune mention de fonctionnalité non encore livrée, en particulier l'anticipation des étapes de production, la journée de l'artisan et le rappel du soir.
   Aucune description de l'architecture interne, du traitement des documents ou des cas limites au delà de ce que contient le texte fourni.
```

---

# Les trois articles suivants, quand vous voudrez

1. Calculer le coût de revient d'une recette, avec l'exemple chiffré complet d'un produit de Jeremy. C'est la requête la plus recherchée de votre univers.
2. Facturation électronique au 1er septembre 2026, ce qui change pour une boulangerie. Sujet daté, personne n'écrit dessus pour les artisans.
3. Le coefficient multiplicateur en pâtisserie, ce qu'il vaut encore aujourd'hui. Article court, très partagé entre confrères.

Un conseil pour la suite : faites relire chaque article par Jeremy et laissez le remplacer trois phrases par les siennes. Ce sont ces trois phrases qui feront la différence, pour les lecteurs comme pour les assistants qui citent les sources qui sonnent vrai.
