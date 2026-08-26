import Link from "next/link";

/**
 * Le manifeste : pourquoi cet outil-là plutôt qu'un autre.
 *
 * C'est le seul argument que la concurrence ne peut pas copier — les
 * fonctionnalités se rattrapent, l'origine non. Le texte évite deux pièges :
 * il ne cite aucun concurrent par son nom (le comparatif s'en charge, chiffres
 * à l'appui), et il ne dit rien de méprisant sur les ERP, qui font
 * correctement le travail pour lequel ils ont été conçus — celui d'un groupe,
 * pas celui d'un artisan.
 */

const piliers = [
  {
    titre: "Écrit par quelqu'un qui a les mains dedans",
    texte:
      "Jeremy est chef pâtissier en exercice, responsable de la R&D d'une entreprise du secteur. Chaque écran de Gramme passe l'épreuve du laboratoire avant d'exister : si une fonction ne sert pas un lundi matin en pleine production, elle ne rentre pas. C'est aussi simple, et c'est ce qui explique presque toutes les différences que vous verrez à l'usage.",
  },
  {
    titre: "Fait pour la boulangerie et la pâtisserie, pas pour « la restauration »",
    texte:
      "Un outil pensé pour les restaurants gère des plats. Un outil de boulangerie doit gérer des sous-recettes en cascade, des rendements en pièces comme au poids, des pertes de parage et de cuisson, des fournées. Une crème pâtissière qui entre dans un flan qui entre dans un plateau : sans cette mécanique-là, les coûts de revient sont faux, et ils le sont d'autant plus que le produit est travaillé.",
  },
  {
    titre: "La marge au centime, parce que c'est là qu'elle se joue",
    texte:
      "Un colorant à 0,4 g dans une recette de 200 g. Une caissette à 4,50 € les mille, soit 0,0045 € la pièce. Ces montants-là s'arrondissent à zéro dans la plupart des outils, et ce zéro-là est définitif : multipliez la recette par dix, il reste zéro. Gramme garde les décimales nécessaires plutôt que de les effacer. Sur une viennoiserie vendue 1,30 €, trois centimes d'erreur, c'est plus de deux points de marge.",
  },
  {
    titre: "Taillé pour une petite structure",
    texte:
      "Les ERP du secteur sont vendus module par module, avec un accompagnement à la hauteur d'un groupe de plusieurs sites — et un budget de démarrage qui n'a aucun rapport avec ce qu'une boulangerie de quartier peut engager sur un logiciel. Ils ne sont pas mauvais : ils ne sont pas pour vous. Gramme est une ligne, comprise, sans commission sur votre chiffre d'affaires et sans coût qui gonfle à chaque fonction que vous ouvrez.",
  },
  {
    titre: "Utilisable avec les mains dans la farine",
    texte:
      "Des écrans lisibles à bout de bras, peu de champs, aucun vocabulaire de logiciel. Ça marche sur le téléphone posé à côté du pétrin comme sur l'ordinateur du bureau. Et vous ne démarrez pas devant un outil vide : nous montons votre compte — profils, fournisseurs, mercuriale, fiches — avant que vous l'ouvriez. Le premier jour, vous voyez vos produits et vos marges, pas un tutoriel.",
  },
  {
    titre: "En chantier permanent, et c'est voulu",
    texte:
      "Gramme évolue toutes les semaines. Les retours d'atelier passent directement dans la version suivante, et les nouveautés arrivent sans surcoût : pas de version 2 à racheter, pas de module à débloquer. Un métier dont les prix bougent tous les mois ne peut pas travailler avec un logiciel figé — c'est exactement ce qui fait abandonner les tableurs au bout de six mois.",
  },
];

export function NeDuTerrain() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16"
      aria-labelledby="ne-du-terrain-title"
    >
      <div className="max-w-3xl">
        <h2
          id="ne-du-terrain-title"
          className="text-3xl font-black leading-tight text-[#27421f] md:text-4xl"
        >
          Gramme vient du laboratoire, pas d&apos;un cahier des charges
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#4d6952] md:text-lg">
          La plupart des logiciels de gestion du secteur ont été conçus pour l&apos;industrie
          agroalimentaire, puis rétrécis pour être vendus aux artisans. Gramme a été fait dans
          l&apos;autre sens : il part d&apos;un chef pâtissier qui tenait ses fiches sur un cahier et
          ses prix sur un tableur, et qui savait exactement où ça coinçait.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {piliers.map((pilier) => (
          <article
            key={pilier.titre}
            className="rounded-2xl border border-[#dcead2] bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold leading-snug text-[#27421f]">{pilier.titre}</h3>
            <p className="mt-3 leading-relaxed text-[#4d6952]">{pilier.texte}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-[#a8cf8c]/50 bg-[#f6fbf2] p-6 sm:p-8">
        <p className="max-w-3xl leading-relaxed text-[#4d6952] md:text-lg">
          <strong className="text-[#3e6134]">Ce n&apos;est pas un discours.</strong> Nous avons comparé
          Gramme aux principaux logiciels du secteur, fonction par fonction et tarif public à
          l&apos;appui — y compris là où ils font des choses que nous ne faisons pas.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/comparatif"
            className="inline-flex rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1e3319]"
          >
            Voir le comparatif détaillé
          </Link>
          <Link
            href="/a-propos-de-gramme"
            className="inline-flex rounded-xl border border-[#a8cf8c] px-5 py-3 font-semibold text-[#355329] transition-colors hover:bg-white"
          >
            Qui est derrière Gramme
          </Link>
        </div>
      </div>
    </section>
  );
}
