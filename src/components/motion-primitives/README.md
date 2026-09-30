# motion-primitives, adaptés

Composants repris de [motion-primitives](https://github.com/ibelick/motion-primitives)
(ibelick, licence MIT, copie dans `LICENCE.md`), puis adaptés au site :

- tout respecte `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` dans
  `SiteChrome`, et un rendu fixe quand l'animation n'a pas de sens sans mouvement) ;
- le texte reste dans le HTML servi : rien n'est monté après coup, un moteur ou
  une IA qui lit la page sans JavaScript lit tout ;
- les listes gardent leur `ul > li` ;
- la copie décorative du défilement est `aria-hidden` et `inert`.

Le héros de l'accueil ne passe pas par ici : son entrée est en CSS
(`gr-entree`, `gr-pinceau` dans `app/globals.css`), pour jouer dès le premier
affichage, avant que le JavaScript soit chargé.

Rien ici ne doit tourner en continu sous le menu fixe, ni utiliser
`backdrop-filter` (30/09/2026, scintillement) : le bandeau défilant est en
keyframes CSS (`gr-defile`), son fondu de bords est un `mask-image`, et
`progressive-blur` (12 couches de flou d'arrière-plan) a été supprimé.
