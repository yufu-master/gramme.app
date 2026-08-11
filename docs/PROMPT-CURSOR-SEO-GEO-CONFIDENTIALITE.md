# SEO, GEO et confidentialité du site gramme.app

Document de travail et prompts à copier dans Cursor. Le site est un projet Next.js 16 distinct de l'application, situé dans `DEV/gramme-website`.

---

# 0. État des lieux, constaté dans le code

Le socle est déjà bon, ce qui change la nature du travail : il ne s'agit pas de tout construire, mais de combler des trous précis.

## Ce qui est déjà en place

| Élément | État |
|---|---|
| Métadonnées globales, titre, description, Open Graph, Twitter | Complet dans `app/layout.tsx` |
| Données structurées | Graphe riche dans `src/lib/seo.ts` : Organization, WebSite, SoftwareApplication avec trois offres, Person, FAQPage, BreadcrumbList |
| `robots.ts` et `sitemap.ts` | Présents |
| `llms.txt` | Présent, avec une section dédiée aux moteurs génératifs |
| Liste de mots clés | Une quarantaine dans `primaryKeywords` |
| Pages | Dix pages : accueil, fonctionnalités, tarifs, comment ça marche, à propos, ressources, contact, démo, mentions légales, CGV |

## Les cinq trous à combler, par ordre de gravité

1. **Le plan du site est incomplet.** `app/sitemap.ts` ne déclare que cinq URL, dont `llms.txt`, alors que le site compte dix pages réelles. Les pages fonctionnalités, tarifs, démo et ressources ne sont pas déclarées. C'est le défaut le plus grave et le plus rapide à corriger.
2. **Il n'existe aucune politique de confidentialité.** Le site a des mentions légales et des CGV, mais pas la page qui est obligatoire dès qu'un formulaire de contact collecte une adresse électronique. C'est à la fois un manquement réglementaire et le point 18 de votre liste.
3. **Aucune mesure d'audience.** Rien n'est installé, donc vous ne saurez pas d'où viennent vos visiteurs ni ce qui convertit. Vous travaillez à l'aveugle.
4. **Aucun contenu éditorial.** Dix pages de présentation, zéro article. Or c'est le contenu qui capte la recherche longue traîne et c'est lui que les assistants d'intelligence artificielle citent. Sans contenu, votre plafond de trafic est atteint dès le premier mois.
5. **Aucune page de comparaison ni page locale.** Ce sont les deux familles de pages qui convertissent le mieux dans votre situation.

---

# 1. Analyse de la liste des vingt points

Votre liste est bonne mais elle est générique. Voici ce qu'elle donne appliquée à votre cas.

| # | Point | Verdict pour gramme.app |
|---|---|---|
| 1 | Page 404 personnalisée | À faire. Manquante. Avec les trois liens utiles et un bouton de contact. |
| 2 | Appel à l'action au dessus de la ligne de flottaison | Déjà là, mais à durcir : un seul appel principal, `Demander une démonstration`, et pas `Voir les offres` qui est plus faible. |
| 3 | Liens internes | À renforcer. Aujourd'hui les pages se lient peu entre elles, c'est un frein direct au référencement. |
| 4 | Page de remerciement | À faire. Indispensable pour mesurer les conversions et pour enchaîner sur la prise de rendez vous. |
| 5 | Fil d'Ariane | Le balisage existe déjà dans le graphe, mais il n'est pas affiché à l'écran. À afficher sur les pages profondes. |
| 6 | Études de cas | À faire, mais **seulement après le témoignage de MOME**. Une étude de cas inventée se repère et vous coûterait plus qu'elle ne rapporte. |
| 7 | Cinq questions fréquentes | À faire. Le balisage FAQ existe, il faut la vraie section visible, avec des questions de boulanger. |
| 8 | Promesse de délai de réponse | À faire. Vous avez déjà l'engagement de quatre heures ouvrées dans le contrat, affichez le. |
| 9 | Bouton d'appel fixe sur mobile | À faire. C'est le point qui augmente le plus les demandes de démonstration. |
| 10 | `robots.txt` | Déjà là via `robots.ts`. À vérifier seulement. |
| 11 | Titres de page uniques | À vérifier page par page. Le modèle est en place. |
| 12 | Méta descriptions | Idem, à vérifier et à réécrire avec un bénéfice chiffré. |
| 13 | Image de partage social | Déjà là. À décliner par page pour les pages importantes. |
| 14 | Carte et itinéraire | **Inutile pour vous.** Vous n'avez pas de boutique où l'on se déplace. Ne perdez pas de temps là dessus. |
| 15 | Vrais avis | Essentiel, mais après MOME. En attendant, remplacez par la preuve de sérieux : conçu avec un chef pâtissier, données hébergées en Europe, réversibilité. |
| 16 | Texte alternatif des images | À faire, en décrivant l'usage métier et pas la couleur du pantalon. |
| 17 | Balisage local | **À adapter.** Le balisage d'entreprise locale ne vous convient pas, vous n'êtes pas un commerce de proximité. En revanche le balisage `SoftwareApplication` que vous avez déjà est le bon, et il faut y ajouter la zone desservie. |
| 18 | Politique de confidentialité | **Manquante et obligatoire.** Traitée dans la partie 6. |
| 19 | Mesure d'audience | À faire, mais pas avec l'outil que tout le monde installe par réflexe. Voir la partie 6. |
| 20 | Photo d'équipe | À faire, et c'est plus important qu'il n'y paraît : sur ce marché, on achète à des gens, et Jeremy chef pâtissier est votre meilleur argument de crédibilité. |

**Ce que la liste oublie et qui compte davantage pour vous** : les pages de comparaison face aux concurrents, les outils gratuits qui attirent les artisans, le contenu qui répond à leurs vraies questions de calcul, et l'optimisation pour les assistants d'intelligence artificielle, qui est aujourd'hui un canal de découverte réel pour un logiciel métier.

---

# 2. La liste de mots clés

Aucun volume de recherche n'est indiqué ici, parce qu'une estimation inventée serait pire qu'une absence d'estimation. La priorité tient compte de l'intention d'achat et de la difficulté réaliste pour un site jeune.

## 2.1 Requêtes de tête, intention d'achat directe

Difficiles, occupées par vos concurrents établis. Votre objectif est d'y figurer dans six à douze mois, pas la semaine prochaine.

| Mot clé | Page cible | Priorité |
|---|---|---|
| logiciel gestion boulangerie | Accueil | Haute |
| logiciel boulangerie pâtisserie | Accueil | Haute |
| logiciel pâtisserie | Page dédiée pâtisserie | Haute |
| logiciel gestion pâtisserie | Page dédiée pâtisserie | Haute |
| logiciel fiche technique pâtisserie | Page fonctionnalité fiches techniques | Haute |
| logiciel coût de revient boulangerie | Page fonctionnalité coûts et marges | Haute |
| logiciel food cost boulangerie | Page fonctionnalité coûts et marges | Moyenne |
| ERP boulangerie | Accueil | Moyenne |
| application boulangerie tablette | Page fonctionnalités | Moyenne |
| logiciel gestion laboratoire pâtisserie | Page dédiée pâtisserie | Moyenne |
| logiciel mercuriale fournisseurs | Page fonctionnalité mercuriale | Moyenne |
| scan facture fournisseur automatique | Page fonctionnalité scan | Haute |

## 2.2 Requêtes de problème, votre meilleur terrain

C'est là que vous pouvez gagner vite, parce que vos concurrents écrivent peu et mal sur ces sujets. Chaque ligne est un article.

| Mot clé | Article à écrire | Priorité |
|---|---|---|
| calculer le coût de revient d'une recette | Guide complet avec exemple chiffré | Très haute |
| comment calculer le prix de vente d'un gâteau | Guide avec méthode et tableau | Très haute |
| coefficient multiplicateur pâtisserie | Article court et précis | Très haute |
| taux de marque boulangerie | Article avec les repères du métier | Haute |
| marge boulangerie pourcentage | Article avec fourchettes réelles | Haute |
| comment faire une fiche technique en pâtisserie | Guide avec modèle téléchargeable | Très haute |
| perte de cuisson pain pourcentage | Article court, très recherché en atelier | Haute |
| prix au kilo à partir d'un sac de 25 kg | Article et calculateur | Haute |
| comment gérer le stock en boulangerie | Guide | Moyenne |
| coût matière première boulangerie 2026 | Article mis à jour chaque trimestre | Haute |
| hausse du prix du beurre boulangerie | Article d'actualité, à réactualiser | Haute |
| calcul quantité pâte par pièce | Article technique | Moyenne |
| rentabilité boulangerie ratios | Guide des ratios du métier | Haute |

## 2.3 Requêtes de comparaison, les plus rentables

Les personnes qui tapent ces requêtes sont à quelques jours de la décision.

| Mot clé | Page à créer | Priorité |
|---|---|---|
| comparatif logiciel boulangerie | Page comparative honnête, tableau à cinq colonnes | Très haute |
| alternative à Otami | Page de comparaison | Très haute |
| avis Otami | Page de comparaison, ton factuel | Haute |
| alternative à Koust | Page de comparaison | Haute |
| logiciel gestion boulangerie gratuit | Article expliquant ce que gratuit veut dire, et vers quoi cela mène | Haute |
| Excel fiche technique pâtisserie | Article et modèle gratuit, c'est votre plus gros gisement | Très haute |
| logiciel food cost restaurant ou boulangerie | Article de distinction des besoins | Moyenne |

Une règle absolue sur ces pages : soyez factuel et loyal. Citer les tarifs publics d'un concurrent et dire honnêtement ce qu'il fait mieux que vous est autorisé, crédible et efficace. Le dénigrement est interdit et se retourne toujours contre son auteur.

## 2.4 Outils gratuits, les aimants

Ce sont des pages qui attirent, se partagent entre confrères et se lient naturellement.

| Outil | Requête visée | Priorité |
|---|---|---|
| Calculateur de coût de revient d'une recette | calculateur coût de revient recette | Très haute |
| Calculateur de prix de vente à partir d'une marge visée | calcul prix de vente pâtisserie | Très haute |
| Convertisseur prix au kilo depuis un conditionnement | prix au kilo sac 25 kg | Haute |
| Modèle de fiche technique à télécharger | modèle fiche technique pâtisserie gratuit | Très haute |
| Calculateur de perte de cuisson | calcul perte cuisson | Moyenne |

Chaque outil est une page publique, utilisable sans compte, qui se termine par une invitation à faire la même chose automatiquement avec Gramme.

## 2.5 Requêtes locales

Faible volume, mais utiles pour la crédibilité et pour appuyer votre prospection de terrain.

`logiciel boulangerie Bordeaux`, `logiciel boulangerie Paris`, `logiciel pâtisserie Gironde`, `logiciel boulangerie Nouvelle-Aquitaine`, `logiciel boulangerie Île-de-France`.

Une page par zone, avec un contenu réellement différent : les fournisseurs locaux, la réalité du marché local, et à terme le témoignage d'un client de la zone. Une page locale sans contenu propre est une page vide qui dessert votre site.

## 2.6 Requêtes réglementaires et d'actualité

| Mot clé | Angle | Priorité |
|---|---|---|
| facturation électronique boulangerie 2026 | Guide de ce qui change au 1er septembre 2026 pour un artisan | Très haute |
| allergènes fiche technique obligation | Guide pratique | Moyenne |
| traçabilité HACCP boulangerie outils | Guide, en assumant que vous ne faites pas de HACCP | Moyenne |

La première est une occasion rare : le sujet inquiète, il est daté, personne n'écrit pour les artisans, et il vous positionne comme celui qui comprend leurs obligations.

## 2.7 Marque

`gramme app`, `gramme logiciel boulangerie`, `gramme.app`. À surveiller, sans effort particulier, mais vérifiez que vous êtes premier sur votre propre nom.

---

# 3. Prompt à copier dans Cursor, technique et structure

```
Tu travailles sur le site vitrine gramme.app, projet Next.js 16 situé dans DEV/gramme-website. Le socle de référencement existe déjà : métadonnées dans app/layout.tsx, graphe de données structurées dans src/lib/seo.ts, robots.ts, sitemap.ts et public/llms.txt. Ta mission est de combler les manques, sans casser l'existant et sans changer le design.

1. Corrige app/sitemap.ts : il ne déclare que cinq URL alors que le site compte dix pages. Déclare toutes les pages réelles avec des priorités cohérentes, retire llms.txt du plan du site, et rends la génération automatique à partir de la liste des routes pour qu'une nouvelle page ne soit plus jamais oubliée.

2. Vérifie que chaque page possède son propre export de métadonnées avec un titre unique de moins de 60 caractères et une description unique de 150 à 160 caractères contenant un bénéfice concret et un mot clé principal. Corrige celles qui héritent du modèle par défaut.

3. Ajoute une page 404 personnalisée : message en français qui ne culpabilise pas le visiteur, trois liens vers les pages principales, et un lien de contact.

4. Ajoute une page de remerciement après l'envoi du formulaire de contact, avec un titre clair, le rappel du délai de réponse de quatre heures ouvrées, et une proposition d'action suivante. Elle doit être indexable à false et servir de page de conversion mesurable.

5. Affiche un fil d'Ariane visible sur toutes les pages autres que l'accueil, cohérent avec le BreadcrumbList déjà présent dans les données structurées.

6. Renforce le maillage interne : depuis l'accueil vers chaque page de fonctionnalité, depuis chaque page de fonctionnalité vers les tarifs et la démonstration, et un bloc de trois liens contextuels en bas de chaque page. Les libellés de liens doivent contenir les mots clés visés et non des formules du type en savoir plus.

7. Ajoute un appel à l'action fixe en bas d'écran sur mobile uniquement, avec deux boutons, demander une démonstration et appeler. Il ne doit pas masquer le contenu ni apparaître avant le premier défilement.

8. Ajoute un texte alternatif à toutes les images, décrivant l'usage métier montré, jamais le mot image ni le nom du fichier.

9. Vérifie les performances : images en format moderne avec dimensions explicites, polices chargées localement, aucune police bloquante, et un score Lighthouse supérieur à 90 sur les quatre axes en mobile.

10. Ajoute les balises canoniques manquantes sur chaque page et vérifie qu'aucune page ne se retrouve en double entre www et sans www.

Contraintes : ne modifie pas la charte graphique, ne change aucune couleur, n'ajoute aucune dépendance lourde, et vérifie que le site compile avant de terminer.
```

---

# 4. Prompt à copier dans Cursor, contenu et pages à créer

```
Tu travailles sur le site vitrine gramme.app en Next.js 16. Tu dois créer la structure éditoriale qui manque. Les pages existent aujourd'hui uniquement en présentation, il n'y a aucun contenu de fond, ce qui plafonne le référencement.

Crée les rubriques et pages suivantes, avec leurs métadonnées propres, leurs données structurées et leur maillage interne.

1. Une rubrique de guides, à l'adresse /guides, avec une page d'index et un modèle d'article. Chaque article porte un titre en question, une réponse en deux phrases dès l'introduction, un sommaire, des sous titres structurés, un exemple chiffré réel du métier, et un encadré de synthèse en fin d'article. Balisage Article et FAQPage quand l'article contient des questions.

2. Les cinq premiers articles, en français, écrits pour un artisan et non pour un lecteur de blog technique :
   - Calculer le coût de revient d'une recette, méthode complète et exemple sur un entremets
   - Comment fixer le prix de vente d'un gâteau sans travailler à perte
   - Le coefficient multiplicateur en pâtisserie, ce qu'il vaut vraiment aujourd'hui
   - Comment faire une fiche technique en pâtisserie, avec un modèle à télécharger
   - Facturation électronique au 1er septembre 2026, ce qui change concrètement pour une boulangerie

3. Une rubrique d'outils gratuits, à l'adresse /outils, sans création de compte :
   - Calculateur de coût de revient d'une recette
   - Calculateur de prix de vente à partir d'une marge visée
   - Convertisseur de prix au kilo depuis un conditionnement, par exemple un sac de 25 kg à 22,40 euros
   Chaque outil est utilisable immédiatement, fonctionne sans connexion réseau une fois chargé, et se termine par une invitation à automatiser la même chose avec Gramme.

4. Une page de comparaison à l'adresse /comparatif, factuelle et loyale, présentant Gramme face aux solutions du marché et face au tableur, avec un tableau de critères, les tarifs publics connus, et une section honnête sur les cas où Gramme n'est pas le bon choix. Ne dénigre aucun concurrent et n'invente aucun tarif : si une information n'est pas publique, écris qu'elle ne l'est pas.

5. Une page dédiée à la pâtisserie, distincte de l'accueil, parce que les requêtes de pâtissiers sont différentes de celles des boulangers : sous recettes, montage d'entremets, inserts, coût d'un gâteau à la part.

6. Une section de questions fréquentes visible sur l'accueil, avec au minimum sept questions réellement posées par les artisans, reliée au balisage FAQPage déjà présent.

7. Une page de témoignages, laissée vide et non publiée tant qu'aucun client réel n'a fourni de témoignage. N'invente aucun avis, aucun nom d'établissement, aucune note.

8. Une photo d'équipe sur la page à propos, avec le rôle de chacun, en mettant en avant la qualité de chef pâtissier du cofondateur.

Règles d'écriture : phrases courtes, vocabulaire du métier, aucun anglicisme inutile, aucun superlatif creux, un exemple chiffré par section. Le mot clé principal apparaît dans le titre, dans le premier paragraphe et dans un sous titre, jamais répété artificiellement.
```

---

# 5. Prompt à copier dans Cursor, optimisation pour les moteurs génératifs

Le sigle GEO recouvre deux choses différentes qu'il ne faut pas confondre. La première est le référencement local, c'est à dire apparaître sur des requêtes géographiques. La seconde est l'optimisation pour les moteurs génératifs, c'est à dire être cité par les assistants d'intelligence artificielle quand un artisan leur demande quel logiciel choisir. Pour un logiciel vendu à distance, la seconde compte davantage que la première.

```
Tu travailles sur le site vitrine gramme.app en Next.js 16. Le fichier public/llms.txt existe déjà. Tu dois maintenant rendre le site réellement citable par les assistants d'intelligence artificielle et présent sur les requêtes géographiques utiles.

Partie A, moteurs génératifs.

1. Enrichis public/llms.txt : description factuelle du produit, liste des fonctionnalités avec une phrase chacune, tarifs publics, ce que le produit ne fait pas, public visé, pays et langue, adresse de contact, et lien vers les pages principales. Ajoute une section de questions et réponses courtes reprenant les questions les plus posées. Aucune formule promotionnelle, uniquement des faits vérifiables.

2. Ajoute un fichier public/llms-full.txt contenant une version longue et structurée de la documentation du produit, destinée à être lue en entier.

3. Sur chaque page importante, place une réponse directe et autonome dans les cent premiers mots, de sorte qu'un extrait isolé de la page reste compréhensible et attribuable. Les assistants citent des paragraphes autonomes, pas des pages entières.

4. Ajoute des données structurées manquantes : Article sur chaque guide, HowTo sur les guides de méthode, FAQPage sur les pages qui contiennent des questions, Product ou Offer sur la page tarifs avec les prix publics et la devise, et areaServed France sur l'organisation.

5. Sur les pages de guides, affiche une date de publication et une date de mise à jour visibles et balisées. La fraîcheur est un critère de citation.

6. Ajoute une page /a-propos avec les informations d'entreprise vérifiables, numéro d'immatriculation, fondateurs, année de création, localisation. Les assistants privilégient les éditeurs identifiables.

7. Vérifie que rien d'essentiel ne dépend de JavaScript : le contenu doit être présent dans le HTML rendu côté serveur, sinon la plupart des robots ne le verront pas.

8. Autorise explicitement dans robots.ts les robots des principaux assistants, et documente ce choix en commentaire pour qu'il soit conscient et réversible.

Partie B, requêtes géographiques.

9. Crée un modèle de page locale à l'adresse /logiciel-boulangerie/[ville] et génère les pages pour Bordeaux, Paris, Lyon, Toulouse et Nantes. Chaque page doit contenir au moins soixante pour cent de contenu unique : réalité du marché local, fournisseurs de la région, mention d'un client local dès qu'il en existe un. Ne publie pas une page locale sans contenu propre, cela nuirait au site entier.

10. N'utilise pas le balisage LocalBusiness, qui décrit un commerce recevant du public. Utilise SoftwareApplication avec areaServed, ce qui correspond à la réalité.

Interdits : aucune page générée automatiquement à partir d'une simple substitution de nom de ville, aucun contenu dupliqué entre les pages locales, aucune affirmation invérifiable sur le nombre de clients.
```

---

# 6. Prompt à copier dans Cursor, confidentialité, cookies et mesure

Deux constats préalables. La page de politique de confidentialité n'existe pas alors qu'un formulaire de contact collecte des adresses électroniques, ce qui est un manquement. Et aucune mesure d'audience n'est installée, donc vous n'avez aujourd'hui aucune idée de ce qui fonctionne.

Un point de méthode qui vous fera gagner du temps et de la conversion : si vous choisissez un outil de mesure sans cookie et sans donnée personnelle, vous n'avez pas besoin de bandeau de consentement. Vous mesurez tout, vous n'affichez aucune fenêtre qui fait fuir un visiteur sur cinq, et votre conformité est simple à défendre. C'est le choix que je recommande, et l'outil des grandes régies n'est pas compatible avec cette approche.

```
Tu travailles sur le site vitrine gramme.app en Next.js 16. Tu dois mettre en conformité le site et installer une mesure d'audience respectueuse de la vie privée.

1. Crée la page /politique-de-confidentialite, manquante aujourd'hui, avec les rubriques suivantes, rédigées en français clair et non en jargon : identité et coordonnées du responsable de traitement, données collectées et leur origine, finalités de chaque traitement, base légale de chacun, destinataires et sous traitants nommés, hébergement et localisation des données, durées de conservation chiffrées, droits des personnes et modalités d'exercice, existence ou absence de cookies, et coordonnées de réclamation auprès de l'autorité de contrôle.

2. Distingue clairement deux traitements : les visiteurs du site vitrine d'une part, et les utilisateurs de l'application d'autre part, ces derniers relevant du contrat signé avec leur établissement. Renvoie vers la politique applicable à l'application pour ces derniers.

3. Installe une mesure d'audience sans cookie, sans identifiant persistant et sans donnée personnelle, hébergée dans l'Union européenne, de sorte qu'aucun bandeau de consentement ne soit nécessaire. Documente ce choix dans la politique de confidentialité en expliquant pourquoi aucun consentement n'est demandé.

4. N'installe aucun outil publicitaire, aucun pixel de réseau social et aucun outil de suivi comportemental tant que ce choix n'a pas été explicitement validé. Si un tel outil devait être ajouté un jour, il exigerait alors un vrai bandeau de consentement, avec refus aussi simple que l'acceptation, et aucun dépôt avant choix.

5. Configure les événements de conversion à suivre : envoi du formulaire de contact, clic sur demander une démonstration, clic sur un numéro de téléphone, téléchargement d'un modèle, utilisation d'un calculateur, et arrivée sur la page de remerciement.

6. Vérifie le formulaire de contact : mention d'information sur le traitement des données au moment de la collecte, case de consentement uniquement si une communication commerciale ultérieure est prévue, absence de champ inutile, et protection contre les envois automatisés sans recourir à un service qui dépose des cookies.

7. Ajoute une page /securite décrivant en langage clair l'hébergement en Europe, le cloisonnement des données entre établissements, le chiffrement des échanges, les sauvegardes et la réversibilité. Cette page rassure les prospects et sert aussi le référencement.

8. Mets à jour les mentions légales avec l'identité exacte de l'éditeur, le numéro d'immatriculation, le directeur de la publication et l'hébergeur.

9. Ajoute les en têtes de sécurité au niveau du site : politique de sécurité de contenu, protection contre le typage automatique, référent restreint, et transport strictement sécurisé.

10. Vérifie qu'aucune clé d'interface de programmation, aucun identifiant technique et aucune adresse électronique personnelle n'apparaît dans le code livré au navigateur.

Contrainte : aucune fenêtre modale de consentement ne doit apparaître tant que le site n'utilise que la mesure d'audience sans cookie décrite au point 3.
```

---

# 7. Ce qu'il faut mesurer, et à quoi le comparer

Installez et vérifiez chaque semaine, dans un tableau unique :

| Indicateur | Source | Repère à trois mois |
|---|---|---|
| Visiteurs uniques mensuels | Mesure d'audience | 300 à 800 pour un site jeune bien travaillé |
| Requêtes qui affichent le site | Console de recherche | 200 requêtes distinctes |
| Position moyenne sur les requêtes de tête | Console de recherche | Entrée dans les cinquante premières |
| Demandes de démonstration | Page de remerciement | 5 à 15 par mois |
| Taux de conversion visiteur vers demande | Calcul | 1 à 3 pour cent |
| Pages les plus vues | Mesure d'audience | Les guides doivent dépasser les pages produit |
| Citations par les assistants | Test manuel mensuel | Poser dix questions types et noter si Gramme est cité |

Ce dernier point mérite un rituel : chaque mois, posez les mêmes dix questions à deux ou trois assistants, du type quel logiciel pour calculer le coût de revient en pâtisserie, et notez si vous êtes cité et comment vous êtes décrit. C'est la seule façon aujourd'hui de piloter cette visibilité.

---

# 8. Ordre de travail

| Étape | Contenu | Charge | Effet attendu |
|---|---|---|---|
| 1 | Correction du plan du site, métadonnées par page, page 404, page de remerciement, maillage interne, appel à l'action mobile | 1 jour | Base saine, indexation complète |
| 2 | Politique de confidentialité, mesure d'audience sans cookie, page sécurité, en têtes | 1 jour | Conformité et mesure |
| 3 | Rubrique guides et cinq premiers articles | 3 jours | Premier trafic de longue traîne |
| 4 | Outils gratuits et modèle de fiche technique | 2 jours | Aimant à visiteurs et à liens |
| 5 | Page de comparaison et page pâtisserie | 1 jour | Trafic à forte intention d'achat |
| 6 | Renforcement du fichier destiné aux assistants et données structurées complémentaires | 1 jour | Citations par les assistants |
| 7 | Pages locales, uniquement avec du contenu réellement propre | 1 jour | Appui de la prospection terrain |

Les étapes 1 et 2 sont à faire avant toute communication publique. Les étapes 3 et 4 sont celles qui rapportent le plus, et ce sont aussi celles que personne ne fait, parce qu'elles demandent d'écrire.

Un dernier conseil, qui vaut plus que la moitié de ce document : un seul article vraiment utile, écrit par Jeremy avec son vocabulaire de chef pâtissier et un exemple chiffré tiré de son expérience, vaut mieux que dix articles génériques rédigés par une machine. C'est aussi ce que les assistants citent en priorité, parce que c'est ce qu'ils ne savent pas produire.
