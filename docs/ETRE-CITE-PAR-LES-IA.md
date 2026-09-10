# Pourquoi les IA ne citent pas Gramme, et ce qui le changera

Demande de Clermont, 10/09/2026, après une recherche « logiciel pour pâtissier »
dans le mode IA de Google qui cite ProCake, ChefsTouch, Otami et Quantara, et
pas Gramme : « analyse notre site et améliore-moi ça, faut qu'on soit dans le
top 3 ».

**Le site n'est pas le problème. La mesure le dit, et elle est sans appel.**

---

## Ce que la sonde mesure depuis le 31/08/2026

`geo_sondages`, 35 sondages, quatre familles de questions :

| Famille de question | Sondages | Gramme cité | `gramme.app` dans les sources |
|---|---|---|---|
| **marque** (« Gramme, c'est quoi ? ») | 6 | **6** | 5 |
| **catégorie** (« quel logiciel pour… ») | 16 | **4** | **4** |
| **concurrent** (« Melba ou Otami ? ») | 4 | **0** | 1 |
| **problème** (« comment calculer ma marge ? ») | 9 | **0** | **0** |

**Regardez les deux colonnes de droite : ce sont les mêmes chiffres.** Quatre
citations en catégorie, quatre présences dans les sources. Zéro et zéro sur les
questions de problème.

**Une IA ne cite Gramme que si une de nos pages est dans les sources qu'elle
vient de récupérer.** Jamais autrement, pas une seule fois sur 35 sondages.

Et quand nous sommes récupérés, nous gagnons : sur l'ensemble des marques
relevées, Gramme est **premier en nombre de citations (11) et premier en rang
moyen (2,5)**, devant Otami (3,4), ChefsTouch (4,1) et Melba (4,2).

**Ce n'est donc pas un problème de notoriété, ni de qualité de page, ni de
positionnement. C'est un problème de RÉCUPÉRATION.**

## Ce que le site fait déjà bien, et qu'il ne sert à rien de refaire

Vérifié dans le dépôt le 10/09/2026 :

- Les guides émettent `Article`, `FAQPage` et `HowTo` en JSON-LD
  (`app/guides/[slug]/page.tsx`, `src/lib/guides.ts`).
- Les pages d'intention existent déjà : `/logiciel-patisserie`,
  `/logiciel-boulangerie`, `/logiciel-cout-de-revient`,
  `/logiciel-fiches-techniques`, `/logiciel-chocolaterie`, `/logiciel-glacerie`,
  `/logiciel-scan-factures`, `/logiciel-releves-temperature`.
- Le sitemap se dérive des catalogues, et quatre tests font échouer le build si
  une page n'y entre pas (`docs/REGLE-PUBLICATION.md`).
- Les guides sont sourcés, chiffrés, avec des étapes réelles.

**Ajouter une dixième page d'intention ne changera rien.** Le contenu est déjà
meilleur que celui des concurrents cités. Il n'est simplement lu par personne.

---

## Le vrai trou : nous n'existons dans aucune liste

Les moteurs qui répondent « quel logiciel pour pâtissier » ne lisent pas les
sites des éditeurs. **Ils lisent les listes faites par des tiers.** Relevé le
10/09/2026, ce sont exactement ces pages qui sortent :

| Page citée par les IA | Gramme dedans ? |
|---|---|
| skello.io — « Logiciels boulangerie : top 7 comparatif [2026] » | **non** |
| tool-advisor.fr — « Les 12 meilleurs logiciels pour les boulangeries en 2026 » | **non** |
| getapp.com — « Logiciels pour boulangeries » | **non** |
| appvizer.com — « Les meilleurs logiciels de boulangerie » | **non** |
| combohr.com — « Quels sont les meilleurs logiciels pour votre boulangerie ? » | **non** |
| independant.io — « Les 9 meilleures caisses pour boulangerie » | **non** |
| lacaisseideale.fr — « Caisse boulangerie : 4 logiciels comparés » | **non** |
| lechommerces.fr — « Caisse boulangerie : le grand comparatif » | **non** |
| companeo.com — « Les meilleurs logiciels de caisse pour boulangeries » | **non** |

Une recherche « Gramme logiciel boulangerie avis » ne rend que **gramme.app
lui-même**. Aucun tiers ne parle de nous. C'est toute l'explication.

---

## Le plan, par rendement décroissant

### 1. Les annuaires (le plus rentable, et il ne dépend pas du code)

Ce sont des fiches gratuites, validées en quelques jours, et ce sont elles que
les moteurs récupèrent le plus souvent. À faire dans cet ordre :

1. **tool-advisor.fr** — c'est la page la plus citée du secteur en français.
2. **appvizer.com** — référencement fort sur les requêtes « logiciel + métier ».
3. **Capterra.fr / GetApp / Software Advice** (même compte Gartner, une seule
   inscription alimente les trois).
4. **lacaisseideale.fr** et **lechommerces.fr** — spécialisés commerce de bouche.
5. **Companeo**, **Societe.com**, **Les Entreprises du Numérique**.

**Le texte à coller est plus bas.** Ne pas improviser à chaque fiche : une
description qui varie d'un annuaire à l'autre affaiblit le signal.

**Demandez les avis clients.** Trois avis vérifiés sur Capterra pèsent plus, pour
un moteur, que dix pages de notre site. Les bêta-testeurs sont les bons
candidats, et c'est un service qu'ils rendent volontiers si on leur demande.

### 2. Entrer dans les listes existantes

Les auteurs de ces listes acceptent souvent d'ajouter une solution, surtout une
solution française et spécialisée. Le courriel type est plus bas.

Cibles, dans l'ordre : Skello, Tool Advisor, Combo, Potti, L'echommerces.

**Ne jamais demander de retirer un concurrent.** On demande une ligne, on donne
la matière toute prête, et on remercie.

### 3. Combler les deux familles à zéro

**La famille « problème » (0 sur 9).** « Comment calculer ma marge sur une
baguette », « comment gérer les allergènes dans mes recettes ». Détail qui
compte : sur ces questions, l'IA ne nomme **aucun** logiciel (`nb_marques: 0`).
Il n'y a donc pas de citation à gagner directement, mais il y a la source, et
c'est elle qui amène le lecteur. Nos guides répondent déjà à ces questions ;
ils ne sont pas récupérés parce qu'ils ne sont liés de nulle part ailleurs que
depuis notre propre site.

**La famille « concurrent » (0 sur 4).** « Melba, ChefsTouch ou Otami : lequel
choisir ? » Nos pages `/comparatif/*` existent et concèdent honnêtement trois
points à chaque concurrent, ce qui est exactement ce qu'un moteur cherche. Elles
ne sont pas récupérées faute d'être citées ailleurs. **Même remède que le reste :
des liens tiers.**

### 4. Une seule page manque vraiment

La réponse de Google segmente le marché en deux, puis demande : *« êtes-vous
pâtissier à domicile / cake designer ? »* C'est l'intention que **ProCake**
occupe, et nous n'avons aucune page pour elle. Un pâtissier à domicile n'a ni
fournil, ni équipe, ni HACCP à tenir : il veut un prix de vente juste sur une
commande unique.

Une entrée de plus dans `src/content/logiciels.ts`, et rien d'autre à écrire.

### 5. IndexNow, toujours pas branché

`npm run seo:prevenir` existe et ne fait rien : `INDEXNOW_CLE` n'est pas posée
(voir `docs/REGLE-PUBLICATION.md`). Elle fait gagner des jours à chaque
publication, et Bing alimente une partie des réponses de Copilot et de ChatGPT.
Trente minutes, une fois.

---

## Le texte des fiches d'annuaire, à coller tel quel

**Nom** : Gramme
**Site** : https://gramme.app
**Catégorie** : gestion de production, boulangerie et pâtisserie artisanale
**Tarif** : à partir de 49 € HT par mois

**Description courte (160 caractères)**
> Gramme calcule le coût de revient et la marge de chaque recette, à partir des
> factures fournisseurs prises en photo. Pour boulangers et pâtissiers.

**Description longue**
> Gramme est un logiciel français de gestion pour les boulangeries et pâtisseries
> artisanales. Le boulanger photographie sa facture fournisseur : Gramme la lit,
> met à jour ses prix d'achat, et recalcule aussitôt le coût de revient et la
> marge de toutes les recettes concernées.
>
> Il couvre les fiches techniques, le coût de revient au gramme près
> (sous-recettes et pertes de cuisson comprises), la mercuriale, le planning de
> production, les stocks, la traçabilité des lots, les relevés de température et
> le plan de nettoyage, l'étiquetage réglementaire avec allergènes et valeurs
> nutritionnelles, et l'export du dossier comptable.
>
> Gramme s'utilise au téléphone, dans le fournil, et il est conçu avec des
> artisans en activité.

**Ce qui nous distingue (trois lignes, pas plus)**
> 1. La facture photographiée met à jour les prix et les marges toute seule.
> 2. Le coût descend jusqu'à la pièce vendue, pertes et emballage compris.
> 3. Un allergène ne se devine jamais : ce qui manque est nommé et bloque
>    l'étiquette.

## Le courriel aux auteurs de listes

> **Objet : une solution française qui manque à votre comparatif boulangerie**
>
> Bonjour,
>
> J'ai lu votre comparatif des logiciels pour boulangerie. Il est utile et
> honnête, ce qui est rare sur ce sujet.
>
> Une solution y manque, et je vous la propose sans rien demander d'autre :
> Gramme (gramme.app), un logiciel français de gestion de production pour
> boulangers et pâtissiers artisans. Sa particularité tient en une phrase : le
> boulanger photographie sa facture fournisseur, et le coût de revient et la
> marge de toutes ses recettes se recalculent tout seuls.
>
> Si ça vous intéresse, je vous envoie une fiche prête à publier, des captures
> libres de droits, et je réponds à vos questions. Si vous préférez le tester
> vous-même, je vous ouvre un compte le temps qu'il vous faudra.
>
> Et si ça n'entre pas dans votre ligne, aucun souci, je ne relancerai pas.
>
> Jeremy [Nom]
> Gramme

---

## Comment on saura que ça marche

La sonde tourne déjà. Le contrôle est le même que le diagnostic : la colonne
`gramme_source` de `geo_sondages`. **Le jour où elle passe à vrai sur les
questions de catégorie, la citation suit dans le même sondage.** C'est la seule
mesure qui compte, et elle ne demande aucun travail supplémentaire.

Objectif tenable à trois mois : famille **catégorie** de 4 sur 16 à 10 sur 16.
Le « top 3 » n'est pas un réglage du site, c'est une conséquence de la
récupération.
