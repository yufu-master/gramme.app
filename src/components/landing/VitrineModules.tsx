"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { BoucleVideo } from "@/components/BoucleVideo";
import { FeatureIcon } from "@/components/features/FeatureIcon";
import { features, featurePath, nombreModules } from "@/content/features";
import { trackEvent } from "@/lib/analytics";

/**
 * Les modules, en mouvement : la seule section de l'accueil qui montre le
 * logiciel en train de servir.
 *
 * L'accueil racontait Gramme en texte et en photos, et le film ne se lance
 * qu'au clic. Ici, une boucle de sept secondes par module, dans l'ordre du
 * catalogue, et le visiteur peut prendre la main à tout moment.
 *
 * Une seule vidéo est montée (`key` = module actif). Elle joue UNE fois ; sa
 * dernière image fait passer au module suivant, et le dernier renvoie au
 * premier. Rien d'autre ne pilote la rotation : ni minuteur, ni état qui
 * changerait à la seconde. Si la lecture ne démarre pas (économie d'énergie,
 * « réduire les animations »), l'affiche reste et rien ne défile tout seul.
 *
 * La barre de progression s'écrit directement dans le DOM (`transform`) à
 * chaque `timeupdate` : un `setState` quatre fois par seconde re-rendrait toute
 * la liste pour une barre de trois pixels.
 *
 * Sur ordinateur, liste à gauche et vidéo à droite ; sur téléphone, vidéo en
 * haut puis une rangée de pastilles qui défile dans son propre conteneur. Les
 * deux sont des `tablist` ; une seule est visible à la fois.
 */
const PANNEAU = "vitrine-panneau";

export function VitrineModules() {
  const [actif, setActif] = useState(0);
  const [survol, setSurvol] = useState(false);
  const racine = useRef<HTMLDivElement>(null);
  const rangee = useRef<HTMLDivElement>(null);

  const courant = features[actif];
  const suivant = features[(actif + 1) % features.length];

  const avancer = useCallback(() => setActif((i) => (i + 1) % features.length), []);

  const majBarres = useCallback((ratio: number) => {
    racine.current?.querySelectorAll<HTMLElement>("[data-barre]").forEach((barre) => {
      barre.style.transform = `scaleX(${ratio})`;
    });
  }, []);

  // On ne charge que l'affiche du module suivant : le changement se fait alors
  // sans blanc, et les douze autres n'ont rien coûté.
  useEffect(() => {
    const image = new Image();
    image.src = suivant.video?.poster ?? "";
  }, [suivant]);

  // La pastille active reste au centre de la rangée. `scrollTo` sur la rangée
  // seule : `scrollIntoView` ferait aussi défiler la page.
  useEffect(() => {
    const conteneur = rangee.current;
    const pastille = document.getElementById(`vitrine-m-${features[actif].slug}`);
    if (!conteneur || !pastille || conteneur.clientWidth === 0) return;
    conteneur.scrollTo({ left: pastille.offsetLeft - (conteneur.clientWidth - pastille.offsetWidth) / 2 });
  }, [actif]);

  function choisir(index: number) {
    setActif(index);
    trackEvent("vitrine_module_select", { feature: features[index].slug });
  }

  function auClavier(e: KeyboardEvent<HTMLDivElement>, prefixe: string) {
    const suite = ["ArrowDown", "ArrowRight"];
    const avant = ["ArrowUp", "ArrowLeft"];
    let cible: number | null = null;
    if (suite.includes(e.key)) cible = (actif + 1) % features.length;
    else if (avant.includes(e.key)) cible = (actif - 1 + features.length) % features.length;
    else if (e.key === "Home") cible = 0;
    else if (e.key === "End") cible = features.length - 1;
    if (cible === null) return;
    e.preventDefault();
    choisir(cible);
    document.getElementById(`${prefixe}${features[cible].slug}`)?.focus();
  }

  return (
    <section
      id="modules-en-mouvement"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16"
      aria-labelledby="vitrine-title"
    >
      <h2 id="vitrine-title" className="gr-titre text-3xl md:text-4xl">
        Chaque module, en mouvement.
      </h2>
      <p className="mt-3 max-w-2xl text-[var(--muted-foreground)]">
        {nombreModules.charAt(0).toUpperCase() + nombreModules.slice(1)} modules, sept secondes chacun, sans le son.
        Choisissez-en un, ou laissez défiler.
      </p>

      <div ref={racine} className="mt-8 grid gap-5 md:grid-cols-12 md:items-start md:gap-8">
        {/* Le panneau : une seule vidéo montée. */}
        <div
          id={PANNEAU}
          role="tabpanel"
          aria-label={courant.name}
          className="order-1 min-w-0 md:order-2 md:col-span-7"
        >
          {courant.video ? (
            <BoucleVideo
              key={courant.slug}
              video={courant.video}
              label={`Aperçu animé du module : ${courant.name}`}
              className="rounded-3xl"
              sizes="(max-width: 768px) 92vw, 640px"
              boucler={false}
              suspendu={survol}
              onFin={avancer}
              onTemps={majBarres}
            />
          ) : null}
          <div aria-hidden className="mt-3 h-1 overflow-hidden rounded-full bg-[#dcead2] md:hidden">
            <div
              key={courant.slug}
              data-barre
              className="h-full origin-left rounded-full bg-[#6e9f55] transition-transform duration-300 ease-linear"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>

        <div className="order-2 min-w-0 md:order-1 md:col-span-5">
          {/* Téléphone : pastilles dans leur propre conteneur, la page ne défile pas. */}
          <div
            ref={rangee}
            className="relative -mx-1 flex max-w-full gap-2 overflow-x-auto px-1 pb-2 md:hidden"
            role="tablist"
            aria-label="Les modules"
            onKeyDown={(e) => auClavier(e, "vitrine-m-")}
          >
            {features.map((feature, index) => {
              const estActif = index === actif;
              return (
                <button
                  key={feature.slug}
                  id={`vitrine-m-${feature.slug}`}
                  type="button"
                  role="tab"
                  aria-selected={estActif}
                  aria-controls={PANNEAU}
                  tabIndex={estActif ? 0 : -1}
                  onClick={() => choisir(index)}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-semibold transition ${
                    estActif
                      ? "border-[#264021] bg-[#264021] text-white"
                      : "border-[#dcead2] bg-white text-[#355329] hover:bg-[#f6fbf2]"
                  }`}
                >
                  {feature.name}
                </button>
              );
            })}
          </div>
          <div className="mt-3 md:hidden">
            <p className="font-bold text-[#1a2e14]">{courant.name}</p>
            <p className="mt-1 text-sm leading-snug text-[var(--muted-foreground)]">{courant.summary}</p>
            <DetailLien slug={courant.slug} name={courant.name} />
          </div>

          {/* Ordinateur : la liste. Le survol suspend la lecture, le temps de lire. */}
          <div
            className="hidden md:block"
            role="tablist"
            aria-label="Les modules"
            aria-orientation="vertical"
            onKeyDown={(e) => auClavier(e, "vitrine-d-")}
            onPointerEnter={(e) => e.pointerType === "mouse" && setSurvol(true)}
            onPointerLeave={() => setSurvol(false)}
          >
            {features.map((feature, index) => {
              const estActif = index === actif;
              return (
                <div key={feature.slug} role="presentation">
                  <button
                    id={`vitrine-d-${feature.slug}`}
                    type="button"
                    role="tab"
                    aria-selected={estActif}
                    aria-controls={PANNEAU}
                    tabIndex={estActif ? 0 : -1}
                    onClick={() => choisir(index)}
                    className={`flex w-full items-center gap-3 border-l-4 px-3 py-2.5 text-left transition ${
                      estActif
                        ? "border-[#6e9f55] bg-[#f0f6ea]"
                        : "border-transparent hover:bg-[#f8fbf5]"
                    }`}
                  >
                    <span
                      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full transition ${
                        estActif ? "bg-[#6e9f55] text-white" : "bg-[#a8cf8c]/25 text-[#355329]"
                      }`}
                    >
                      <FeatureIcon name={feature.icon} className="size-3.5" />
                    </span>
                    <span className={`font-bold ${estActif ? "text-[#1a2e14]" : "text-[#355329]"}`}>{feature.name}</span>
                  </button>
                  {estActif ? (
                    <div className="border-l-4 border-[#6e9f55] bg-[#f0f6ea] px-3 pb-3 pl-[3.5rem]">
                      <p className="text-sm leading-snug text-[var(--muted-foreground)]">{feature.summary}</p>
                      <DetailLien slug={feature.slug} name={feature.name} />
                      <div aria-hidden className="mt-3 h-[3px] overflow-hidden rounded-full bg-[#dcead2]">
                        <div
                          data-barre
                          className="h-full origin-left rounded-full bg-[#6e9f55] transition-transform duration-300 ease-linear"
                          style={{ transform: "scaleX(0)" }}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailLien({ slug, name }: { slug: string; name: string }) {
  return (
    <Link
      href={featurePath(slug)}
      onClick={() => trackEvent("feature_detail_click", { feature: slug })}
      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#355329] underline-offset-2 hover:underline"
    >
      Voir le détail<span className="sr-only"> : {name.toLowerCase()}</span>
      <span aria-hidden>→</span>
    </Link>
  );
}
