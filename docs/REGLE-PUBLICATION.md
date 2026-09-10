# La règle : rien ne se publie sans être annonçable

Posée par Clermont le 07/09/2026 :

> « Est-ce que tu as bien mis pour le référencement sur le site le sitemap de
> toutes les nouvelles pages ? Faut que ce soit une règle que l'on mette
> toujours à jour les nouvelles fonctions pour que ce soit référencé le plus
> vite possible. »

La règle en une phrase : **une page nouvelle entre au sitemap et mène à un
contenu de fond, ou le build s'arrête.**

Elle n'est pas écrite ici seulement. Elle est **mécanisée** : quatre contrôles
la tiennent, et ils échouent au lieu de rappeler poliment.

---

## Ce qui est déjà automatique, et ne demande rien

Le sitemap se **dérive des catalogues**. Ajouter une entrée à l'un de ces
fichiers suffit à publier la page et à l'inscrire au sitemap :

| Ce qu'on ajoute | Où | Adresse produite |
|---|---|---|
| Un module | `src/content/features.ts` | `/fonctionnalites/<slug>` |
| Un guide | `src/content/guides/` + son index | `/guides/<slug>` |
| Un article | `src/content/articles/` + son index | `/articles/<slug>` |
| Une page métier ou d'intention | `src/content/logiciels.ts` | `/logiciel-<sujet>` |
| Une page concurrent | `src/content/comparatif.ts` | `/comparatif/<id>` |

Un guide en `draft: true` est exclu du sitemap, de l'index et de `llms.txt` :
c'est ainsi qu'on garde un brouillon sans le publier par accident.

## Ce qui demande une ligne, et que le test surveille

Les pages **fixes** (`/tarifs`, `/metiers`, `/faq`…) sont déclarées à la main
dans `src/lib/routes.ts`. C'était le trou : créer `app/metiers/page.tsx` et
oublier la ligne donnait une page en ligne, invisible des moteurs, sans qu'aucun
contrôle ne bronche.

`src/lib/routes.test.ts` ferme le trou dans les deux sens :

1. **Une page servie par `app/` sans déclaration fait échouer le build.** Le
   message nomme la page et rappelle les deux issues : la déclarer, ou
   l'inscrire dans `HORS_SITEMAP` avec sa raison écrite.
2. **Une déclaration sans page fait échouer le build** : un lien vers une 404
   qu'on s'inflige.
3. **Un segment dynamique sans catalogue fait échouer le build** : une page
   `[slug]` de plus publierait un nombre inconnu d'adresses qu'aucun sitemap
   n'annoncerait.
4. **Un doublon dans le sitemap fait échouer le build.**

Prouvé en créant `app/page-oubliee/page.tsx` : le contrôle l'a nommée. Retirée,
il est repassé vert.

## Et le contenu doit mener quelque part

`src/content/maillage.test.ts` ajoute une règle de fond : **une page métier lie
au moins un guide ou un article.**

Elle vient d'un cas réel. Le 07/09/2026, trois guides sur l'équilibrage étaient
publiés, au sitemap, et affichés sur l'accueil ; mais `/logiciel-chocolaterie`
et `/logiciel-glacerie` étaient les deux seules pages métier à ne lier aucun
contenu. Or ce sont exactement les pages où atterrit quelqu'un qui cherche
l'équilibrage : il lisait la page, ne trouvait rien à lire ensuite, et
repartait. Clermont l'a vu avant le test : « je vois pas les nouveaux articles
sur l'équilibrage de recettes ».

Les autres contrôles de contenu, déjà en place :

- `src/content/images.test.ts` : une image citée mène à un fichier, une capture
  n'est pas creuse, et une capture qu'aucune page n'affiche est déclarée en
  réserve avec sa raison.
- `src/content/features.test.ts` : le nombre de modules annoncé est celui du
  catalogue, chaque module est complet, aucun tiret cadratin.
- `src/content/logiciels.test.ts` : chaque page métier a une vraie capture, une
  place au sitemap et un fil d'Ariane.
- `guides/types.ts` : un guide publié qui contient encore un `⟨…⟩` ou un tiret
  cadratin **fait échouer l'import**, donc le build.

## Être lu vite, pas seulement être indexable

Le sitemap dit ce qui existe, mais il ne le dit **à personne** : il attend qu'un
robot vienne le lire, ce qui prend des jours à des semaines pour un site jeune.

`npm run seo:prevenir` renverse le sens : il annonce les adresses au protocole
IndexNow, que Bing prend en charge en quelques heures. Yandex, Seznam et Naver
le partagent. Google ne le rejoint pas, mais **Bing alimente une partie des
réponses de Copilot et de ChatGPT**, ce qui compte autant que le classement pour
ce site.

**Mise en service : faite le 10/09/2026.**

- Clé : `41902de802fead9fcf7ecf644d75b898`. Elle n'est **pas** un secret : le
  protocole exige qu'elle soit publiée à la racine du site, c'est même sa seule
  preuve de propriété du domaine.
- Fichier de preuve : `public/41902de802fead9fcf7ecf644d75b898.txt`, dont le
  contenu est exactement la clé, sans retour à la ligne.
- `INDEXNOW_CLE` posée dans `.env.local` et dans les variables Vercel du projet
  `gramme.app`, environnement production.

**C'est automatique depuis ce jour** : `postbuild` appelle le script après
chaque `next build`. Deux gardes le tiennent :

1. **Une préversion n'annonce rien.** `VERCEL_ENV !== "production"` sort tout de
   suite : une branche poussée construit les mêmes adresses de production, donc
   elle annoncerait des pages qu'elle ne sert pas, et elle mangerait le quota du
   protocole à chaque essai.
2. **Sans clé, le script ne fait rien et le dit.** Il n'échoue jamais, et il rend
   toujours 0 : le référencement ne doit pas casser un déploiement.

**Le seul cas dégradé à connaître** : si `src/lib/routes.ts` ne peut pas être
lu, le script se rabat sur le sitemap du site **déjà en ligne**, c'est-à-dire
celui du déploiement précédent. Les pages créées par le déploiement en cours ne
sont alors annoncées qu'au suivant. Le script écrit la raison en clair dans le
journal de build.

C'est arrivé dès la mise en service, et **le repli l'avait caché** : le script
affichait cinquante-cinq adresses, ce qui avait l'air parfaitement normal, et la
seule chose qui manquait était précisément la page qu'on venait de publier.
Deux causes, corrigées par `scripts/resoudre-alias.mjs` : `routes.ts` importe
`@/content`, un alias de `tsconfig.json` que Node ignore, et les fichiers du
catalogue s'importent entre eux sans extension, ce que TypeScript accepte et que
l'ESM de Node refuse. **Le contrôle qui distingue les deux chemins** est
`npm run seo:prevenir -- --essai --depuis <date>` : le repli ignore `--depuis`
et rend toujours la liste entière, la lecture du catalogue rend moins.

## Bing refuse, et ce n'est pas la clé

Mesuré le 10/09/2026, sur exactement la même requête :

| Moteur | Réponse |
|---|---|
| Seznam | **200, accepté** |
| Yandex | **200, accepté** |
| api.indexnow.org | 403 `UserForbiddedToAccessSite` |
| Bing | 403 `UserForbiddedToAccessSite` |

La clé est donc bonne : deux moteurs l'ont vérifiée et ont pris la liste. Bing
refuse parce qu'il ne connaît pas encore le domaine, et cela se règle **une
fois, à la main** : déclarer `gramme.app` dans Bing Webmaster Tools. C'est le
moteur qui compte le plus ici, puisqu'il alimente une partie des réponses de
Copilot et de ChatGPT.

Le script appelle désormais **les quatre moteurs** et dit ce que chacun répond.
La promesse du protocole (« un seul point d'entrée relaie aux autres ») ne tient
pas : un appel unique rendait « Moteurs NON prévenus » alors que deux moteurs
sur trois venaient d'accepter. Un contrôle qui annonce un échec là où il y a un
succès partiel est pire que pas de contrôle.

Pour annoncer à la main, hors déploiement :

```bash
cd "/Users/clermontfu/Documents/GRAMME APP/DEV/gramme-website"
npm run seo:prevenir -- --essai   # affiche sans envoyer
npm run seo:prevenir              # envoie
```

## Ce qui reste à la main, et qui ne dépend pas du code

- **`DERNIERE_MISE_A_JOUR_PAGES_FIXES`** dans `src/lib/routes.ts` : à avancer
  quand une page fixe est réécrite. Elle valait `new Date()`, ce qui datait les
  cinquante pages de l'instant du build, y compris les CGV qui n'avaient pas
  bougé depuis des mois. Un `lastmod` qui change sans que le contenu change est
  un signal que Google apprend à ignorer, et il l'ignore alors aussi le jour où
  une page change vraiment. Les guides et les articles portent leur propre
  `updatedAt` et n'ont pas ce problème.
- **Soumettre le plan du site à la Search Console et à Bing Webmaster Tools.**
  Une seule fois, et cela demande les comptes.
- **Les fiches d'annuaire** (lacaisseideale.fr, tool-advisor.fr, capterra.fr) :
  c'est de là que viennent la plupart des citations des IA aujourd'hui.
