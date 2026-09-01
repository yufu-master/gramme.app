# Être cité par les IA : le diagnostic, et ce qui reste à faire à la main

Établi le 31/08/2026 à partir de la sonde `geo-sonde` et de l'audit `seo-audit`,
tous deux visibles dans la console (`/supervision/audience/visibilite-ia` et
`/supervision/audience/seo`). Ce document ne décrit que ce qui **ne se code
pas** : les gestes qui demandent un compte, une identité, ou l'accord de
quelqu'un d'autre.

---

## 1. Le mécanisme, mesuré

Le moteur cite Gramme **exactement quand `gramme.app` figure dans les sources
qu'il vient de récupérer**, jamais autrement. Sur les six questions de
catégorie sondées le 31/08 :

| | Cité | `gramme.app` dans les sources |
|---|---|---|
| Étiquetage des allergènes | oui, rang 1 | **oui** |
| Coût de revient d'une recette | non | non |
| Meilleur logiciel de gestion boulangerie | non | non |
| Fiches techniques pâtissier | non | non |
| Scan des factures fournisseurs | non | non |
| Relevés de température HACCP | non | non |

Ce n'est donc pas un problème de notoriété : sur les trois questions qui
portent notre nom, nous sommes cités au rang 1, à chaque fois. C'est un
problème de **récupération**. Le moteur fait une recherche, et nous n'y sommes
pas.

Corollaire : tout ce qui fait remonter une page de `gramme.app` sur ces
requêtes fait mécaniquement remonter le taux de citation. C'est mesurable
chaque semaine, sans attendre.

**La preuve interne** : la seule question gagnée est la seule intention couverte
par deux pages, la page module et un guide. Là où il n'y en avait qu'une, on
perdait. Là où il n'y en avait aucune, on n'existait pas. Les cinq pages
`/logiciel-*` créées le 31/08 comblent exactement ces cinq trous.

---

## 2. Faire indexer ce qui existe (à faire en premier)

**Constat** : en cherchant `"gramme.app"` sur un moteur, **seule la page
d'accueil remonte**. Les trente-sept autres pages n'ont aucune visibilité. Tant
que c'est le cas, une nouvelle page ne sert à rien : elle ne sera pas récupérée
non plus.

Dans Google Search Console (propriété de domaine `gramme.app`, vérifiée par
enregistrement TXT) :

1. **Sitemaps → ajouter `sitemap.xml`.** Vérifier ensuite qu'il annonce bien
   **43 URL** (38 avant les pages `/logiciel-*`).
2. **Inspection de l'URL → « Demander une indexation »**, une par une, dans cet
   ordre de priorité. Google limite à une dizaine de demandes par jour : étaler
   sur trois jours plutôt que tout envoyer.
   1. `/logiciel-boulangerie`
   2. `/logiciel-cout-de-revient`
   3. `/logiciel-fiches-techniques`
   4. `/logiciel-releves-temperature`
   5. `/logiciel-scan-factures`
   6. `/logiciel-patisserie`
   7. `/tarifs`
   8. `/comparatif` et `/comparatif/otami`
   9. les sept guides
   10. les quatre articles
3. **Couverture → Pages.** Relever le nombre d'indexées contre le nombre
   d'exclues, et surtout LE MOTIF d'exclusion. « Détectée, actuellement non
   indexée » veut dire que Google a vu la page et l'a jugée dispensable :
   c'est un signal de contenu ou de maillage, pas un problème technique.
4. Refaire le point **à deux semaines**. C'est le délai normal pour un domaine
   jeune, et il ne s'accélère pas.

Côté Bing Webmaster Tools, l'import depuis Search Console suffit et vaut le
détour : Copilot et la recherche de ChatGPT s'appuient sur l'index Bing.
Soumettre le sitemap là aussi, et utiliser **IndexNow** si l'option est
proposée, qui pousse les URL au lieu d'attendre le passage d'un robot.

---

## 3. Les sites tiers sur lesquels le moteur s'appuie

Relevé des domaines cités par la sonde, hors sites de concurrents. Le nombre est
le nombre de questions où le domaine a servi de source, sur six.

| Domaine | Cité | Ce que c'est | Effort |
|---|---:|---|---|
| **lacaisseideale.fr** | 3 | Comparatif d'outils pour les métiers de bouche. Cité aussi souvent que les plus gros concurrents. | Prise de contact éditoriale |
| **tool-advisor.fr** | 2 | Annuaire de logiciels français | Fiche à créer |
| **capterra.fr** | 1 | Annuaire international (même groupe que GetApp et Software Advice : une fiche alimente les trois) | Fiche à créer |
| **independant.io** | 1 | Annuaire pour indépendants et TPE | Fiche à créer |
| **inbp.com** | 1 | Institut National de la Boulangerie Pâtisserie | Long, et de loin le plus fort en autorité |
| **ctmp.org** | 1 | Centre technique des métiers de la pâtisserie | Idem |
| **entrepreneurhero.fr** | 1 | Contenu entrepreneurial, listes d'outils | Prise de contact éditoriale |
| **helloharel.com** | 1 | Blog métier sur le prix de revient | Prise de contact éditoriale |
| **trustindex.io** | 1 | Agrégateur d'avis | Dépend d'avis clients existants |

**Ce qu'il faut avoir sous la main pour remplir une fiche**, écrit une fois et
recopié partout pour que toutes les fiches disent la même chose :

- **Nom** : Gramme
- **Site** : https://gramme.app
- **Catégories** : logiciel de gestion pour boulangerie et pâtisserie ;
  calcul de coût de revient ; gestion de recettes et fiches techniques ;
  gestion des achats et mercuriale ; planning de production.
- **Une phrase** : « Gramme réunit recettes, factures, stock et marges dans un
  seul outil pour les boulangeries et pâtisseries artisanales : le prix d'une
  facture scannée se répercute jusqu'à la marge de chaque produit. »
- **Trois différences** : les sous-recettes en cascade avec leur rendement
  réel ; la mercuriale alimentée par la photo des factures fournisseurs ;
  un registre sanitaire qui ne se réécrit pas.
- **Tarifs** : Starter 49 € HT/mois (490 € HT/an), Pro 89 € HT/mois
  (890 € HT/an). Installation accompagnée facturée une fois, à partir de
  300 € HT.
- **Cible** : boulangeries, pâtisseries et chocolateries artisanales, de
  l'artisan seul à la structure multi-sites.
- **Plateformes** : navigateur, téléphone, tablette. Rien à installer.
- **Captures** : `public/images/app/` (mercuriale, recette-couts,
  recette-fiche, factures, production, haccp-temperatures), toutes en
  1920 × 1200.
- **Langue** : français. **Pays** : France.

> Les comptes sont à créer par vous : ces sites demandent une identité
> d'entreprise et acceptent des conditions d'utilisation en votre nom.

---

## 4. Le comparatif, à étendre

La sonde a relevé les logiciels cités à côté de nous. Ceux que
`/comparatif/[concurrent]` ne traite pas encore, par nombre de citations :

**Ratatool** (3), **ChefsTouch** (3), **CommisSoft** (2), **ProCake** (2),
**Kooklin** (2), **Patisprix**, **Toporder**, **Koust**, **HACCP Facile**,
**Pastria**, **Quantara**, **Wenzi**.

La route existe et déduit son face-à-face de `blocsComparatif` : ajouter un
concurrent, c'est du relevé factuel, pas de la mise en page. Rappel du cadre :
la publicité comparative (L122-1 à L122-7) impose des éléments vérifiables et
une date de relevé, et une citation d'un concurrent ne se réécrit jamais.

---

## 5. Comment on saura que ça marche

Sans rien faire de plus : la sonde repasse chaque nuit, huit questions par
réveil, et l'écran `/supervision/audience/visibilite-ia` montre le taux par
famille. **Le chiffre à surveiller est celui de la famille « Quel logiciel
pour… », parti de 17 %.** Le taux de la famille « Notre nom » est déjà à 100 %
et n'a nulle part où aller.

Deux avertissements pour ne pas se tromper de lecture :

- **Un moteur génératif ne répond jamais deux fois pareil.** C'est la
  fréquence de citation qui se suit sur plusieurs semaines, jamais un
  classement d'un jour.
- **Le premier signal ne sera pas le trafic**, ce sera le passage des robots de
  réponse (`ChatGPT-User`, `Perplexity-User`, `OAI-SearchBot`) sur les nouvelles
  pages, visible dans `/supervision/audience/robots`. Il précède le trafic
  référé de plusieurs semaines.
