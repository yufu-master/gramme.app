import Image from "next/image";

/**
 * La grille Instagram de gramme.app (posts publiés, RS/POSTS) : plâtre sauge,
 * balance en laiton, poids « gr ». Elle alterne, comme le compte, les posts
 * avec une phrase et les visuels seuls.
 */
const INSTAGRAM = "https://www.instagram.com/gramme.app/";

const VISUELS = [
  { src: "/images/instagram/gramme-qui-change-tout.jpg", alt: "Une main laisse tomber un poids « gr » vert : « le gramme qui change tout »" },
  { src: "/images/instagram/poids-farine.jpg", alt: "Le poids « gr » s'écrase dans la farine sur un plâtre vert sauge" },
  { src: "/images/instagram/labo-au-gramme-pres.jpg", alt: "Balance en laiton en équilibre, farine d'un côté, poids « gr » de l'autre : « l'application qui gère votre labo au gramme près »" },
  { src: "/images/instagram/gr-farine.jpg", alt: "Les lettres « gr » tracées dans la farine" },
  { src: "/images/instagram/balance-beurre-billets.jpg", alt: "Balance en laiton : un petit morceau de beurre pèse plus lourd qu'une liasse de billets" },
  { src: "/images/instagram/poids-main.jpg", alt: "Une main farinée pose le poids « gr » sur le plâtre vert sauge" },
] as const;

export function SurInstagram() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-5 sm:pb-16" aria-labelledby="instagram-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="instagram-title" className="text-3xl font-bold md:text-4xl">
            Au gramme près, aussi sur Instagram
          </h2>
          <p className="mt-2 text-[var(--muted-foreground)]">Un calcul, une fonction, une phrase d&apos;atelier : chaque semaine.</p>
        </div>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-start rounded-xl border border-[#dcead2] bg-white px-4 py-2.5 text-sm font-semibold text-[#355329] transition hover:border-[#a8cf8c] sm:self-auto"
        >
          Suivre @gramme.app
        </a>
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {VISUELS.map((v) => (
          <li key={v.src}>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl"
              aria-label={`${v.alt}, sur Instagram`}
            >
              <Image
                src={v.src}
                alt={v.alt}
                width={1080}
                height={1080}
                sizes="(min-width: 640px) 33vw, 50vw"
                className="aspect-square h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
