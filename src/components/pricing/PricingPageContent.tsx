"use client";

import Link from "next/link";
import { CadreAppareil } from "@/components/produit/CadreAppareil";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { BillingPeriodToggle } from "@/components/pricing/BillingPeriodToggle";
import { MISE_EN_SERVICE_EN_CREATION, formatEuro, formatInstallation, pricingFaq, pricingPlans, type BillingPeriod } from "@/lib/pricing";

export function PricingPageContent() {
  const [period, setPeriod] = useState<BillingPeriod>("yearly");

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center gap-3">
        <BillingPeriodToggle period={period} onChange={setPeriod} />
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {pricingPlans.map((plan) => {
          const isYearly = period === "yearly";
          const bigPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
          const unitLabel = isYearly ? "HT / an" : "HT / mois";

          return (
            <article
              key={plan.id}
              className={`rounded-3xl border p-6 sm:p-8 transition-[opacity,transform] duration-150 ${
                plan.highlight
                  ? "relative border-[#7ca764] bg-[#264021] text-white shadow-[0_20px_60px_rgba(34,60,23,0.35)]"
                  : "border-[#dcead2] bg-white"
              }`}
            >
              {plan.highlight ? (
                <p className="absolute -top-3 left-6 rounded-full bg-[#a8cf8c] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#264021]">
                  Le plus choisi
                </p>
              ) : null}
              <p
                className={`text-sm font-semibold uppercase tracking-wide ${
                  plan.highlight ? "text-[#d7efca]" : "text-[#355329]"
                }`}
              >
                {plan.name}
              </p>
              <p className="mt-4 tabular-nums text-4xl font-black tracking-tight sm:text-5xl">
                {formatEuro(bigPrice)}
                <span
                  className={`ml-1 text-base font-semibold ${
                    plan.highlight ? "text-white/80" : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {unitLabel}
                </span>
              </p>
              <p
                className={`mt-2 text-sm tabular-nums ${
                  plan.highlight ? "text-white/85" : "text-[#4d6952]"
                }`}
              >
                {isYearly ? (
                  <>
                    soit {formatEuro(plan.yearlyMonthlyEquivalent, 2)} HT / mois
                    <span className="mt-1 block font-semibold text-[#a8cf8c]">
                      Économisez {formatEuro(plan.yearlySavings)}
                    </span>
                  </>
                ) : (
                  <>Sans engagement</>
                )}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? "text-white/85" : "text-[#4d6952]"}`}>
                {plan.tagline}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((item) => (
                  <li
                    key={item.label}
                    className={`flex items-start gap-2 ${
                      item.emphasis
                        ? plan.highlight
                          ? "font-bold text-white"
                          : "font-bold text-[#27421f]"
                        : plan.highlight
                          ? "text-white/95"
                          : "text-[#4d6952]"
                    }`}
                  >
                    <CheckIcon
                      className={`mt-0.5 size-4 shrink-0 ${
                        plan.highlight ? "text-[#a8cf8c]" : "text-[#6e9f55]"
                      }`}
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() =>
                  trackEvent("cta_demo_click", { source: `tarif_${plan.id}_${period}` })
                }
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold ${
                  plan.highlight
                    ? "bg-[#a8cf8c] text-[#264021]"
                    : "bg-[#264021] text-white"
                }`}
              >
                Demander une démonstration
              </Link>
            </article>
          );
        })}
      </div>

      {/* Ce que le prix comprend, dit avant le prix de l'installation.
          Un abonnement se compare rarement sur son montant : il se compare sur
          ce qu'il faut ACHETER EN PLUS pour couvrir son besoin. Chez plusieurs
          éditeurs, l'hygiène et le planning de production sont des modules
          facturés entre 49 € et 89 € par mois : le dire ici, chiffres publics à
          l'appui, vaut mieux que de le laisser découvrir après signature. */}
      <section
        className="mt-10 rounded-3xl border-2 border-[#a8cf8c] bg-white p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8"
        aria-labelledby="tout-compris-title"
      >
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6e9f55]">Aucun module, aucune option</p>
        <h2 id="tout-compris-title" className="mt-2 text-2xl font-black text-[#27421f] md:text-3xl">
          L&apos;hygiène et l&apos;étiquetage sont compris dans l&apos;offre Pro
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952]">
          Gramme tient vos registres sanitaires. Ce n&apos;est pas une option à cocher ni un module à activer :
          c&apos;est dans les 89 € HT par mois, comme le reste, et ce que nous livrons ensuite y entre sans
          surcoût.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Relevés de températures",
              "Vos enceintes, vos bornes, vos horaires. Un écart appelle son action corrective avant d'être enregistré, et la courbe couvre quatre-vingt-dix jours.",
            ],
            [
              "Plan de nettoyage",
              "Par zone et par fréquence, pointé d'un geste depuis le téléphone. Les retards remontent en tête, et chaque pointage garde le nom de qui l'a fait.",
            ],
            [
              "Étiquettes de lot et dates limites",
              "Numéro de lot, date limite et prénom remplis seuls, aux formats de vos rouleaux. Le contrôle à réception part de la facture déjà scannée.",
            ],
            [
              "Registres imprimables",
              "Températures et nettoyage sur la période de votre choix. Un registre ne se réécrit pas : pas même par un administrateur.",
            ],
            [
              "Allergènes et valeurs nutritionnelles",
              "Les 14 allergènes du règlement européen remontent des matières aux produits finis. Table Ciqual de l'ANSES intégrée.",
            ],
            [
              "Planning de production",
              "Les quantités du jour, les besoins matières consolidés, la feuille d'atelier et le coût de la fournée.",
            ],
          ].map(([titre, texte]) => (
            <li key={titre} className="flex gap-3 rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-4">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#6e9f55]" />
              <span>
                <span className="block font-bold text-[#27421f]">{titre}</span>
                <span className="mt-1 block text-sm leading-relaxed text-[#4d6952]">{texte}</span>
              </span>
            </li>
          ))}
        </ul>
        {/* Une page de prix qui ne montre pas ce qu'on achète demande un acte
            de foi. Les deux écrans ci-dessus sont ceux qui justifient l'écart
            avec les offres à modules. */}
        <div className="mt-8 flex flex-wrap items-end justify-center gap-8 rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:gap-12">
          <div className="w-[160px] sm:w-[190px]">
            <CadreAppareil
              appareil="telephone"
              src="/images/app/haccp-temperatures-telephone.png"
              alt="Relevé de températures dans Gramme sur téléphone, compris dans l'offre Pro"
              sizes="190px"
            />
            <p className="mt-3 text-center text-xs font-semibold text-[#4d6952]">Relevé de températures</p>
          </div>
          <div className="w-[160px] sm:w-[190px]">
            <CadreAppareil
              appareil="telephone"
              src="/images/app/haccp-nettoyage-telephone.png"
              alt="Plan de nettoyage dans Gramme sur téléphone, compris dans l'offre Pro"
              sizes="190px"
            />
            <p className="mt-3 text-center text-xs font-semibold text-[#4d6952]">Plan de nettoyage</p>
          </div>
          <div className="w-[160px] sm:w-[190px]">
            <CadreAppareil
              appareil="telephone"
              src="/images/app/recette-fiche-telephone.png"
              alt="Fiche technique d'une recette dans Gramme sur téléphone"
              sizes="190px"
            />
            <p className="mt-3 text-center text-xs font-semibold text-[#4d6952]">Fiche technique</p>
          </div>
        </div>

        <p className="mt-6 rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-4 text-sm leading-relaxed text-[#4d6952]">
          <strong className="text-[#3e6134]">Ce que cela change sur la facture.</strong> Chez plusieurs éditeurs,
          le planning de production et le suivi sanitaire sont des modules facturés à part : 49 € HT par mois
          chacun sur les grilles publiques relevées le 30 août 2026. Une boulangerie qui reçoit une trentaine de
          factures par mois et veut le planning de production paie ailleurs jusqu&apos;à 208 € HT par mois. Le
          détail, éditeur par éditeur, est dans notre{" "}
          <Link href="/comparatif" className="font-semibold text-[#355329] underline underline-offset-2">
            comparatif
          </Link>
          .
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#6e7c66]">
          Une précision qui compte : Gramme enregistre, horodate et imprime vos relevés. Il ne rédige pas votre
          plan de maîtrise sanitaire et ne certifie aucune conformité : vous restez l&apos;exploitant responsable.
        </p>
      </section>

      <section
        className="mt-10 rounded-3xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:p-8"
        aria-labelledby="installation-title"
      >
        <h2 id="installation-title" className="text-2xl font-bold text-[#27421f]">
          On installe tout avec vous
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952]">
          C&apos;est plusieurs jours de travail, pas une visite. Nous montons votre compte de bout en
          bout : votre établissement et les profils de votre équipe avec leurs droits, votre carnet de
          fournisseurs, puis votre mercuriale complète : chaque matière première, son unité, son
          conditionnement et son prix d&apos;achat réel. Nous reprenons vos fiches recettes et vos
          sous-recettes, nous traitons vos factures des derniers mois pour que l&apos;historique de prix
          existe dès le départ, nous vérifions les coûts de revient obtenus, et nous formons ceux qui
          utiliseront l&apos;application.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952]">
          Le premier jour, vous n&apos;ouvrez pas un logiciel vide : vous ouvrez vos produits, vos prix
          et vos marges. C&apos;est la différence entre un outil qu&apos;on adopte et un outil
          qu&apos;on abandonne au bout de trois semaines.
        </p>
        <p className="mt-5 text-base font-semibold tabular-nums text-[#355329]">
          Installation accompagnée : {formatInstallation(pricingPlans[0])} pour Starter,{" "}
          {formatInstallation(pricingPlans[1])} pour Pro. Une seule fois, à la mise en service.
          Payable en trois fois sans supplément si vous préférez.
        </p>
        {/* Le cas où le plancher devient le prix : il n'y a rien à reprendre,
            donc la charge est connue d'avance. C'est aussi le profil qui hésite
            le plus sur le coût de départ : autant le lever ici. */}
        <p className="mt-4 rounded-2xl border border-[#a8cf8c]/50 bg-[#f6fbf2] p-4 text-[#4d6952]">
          <strong className="text-[#3e6134]">Vous êtes en cours de création ?</strong> La mise en service
          est alors un forfait ferme de {formatEuro(MISE_EN_SERVICE_EN_CREATION)} HT, quelle que soit
          l&apos;offre : sans historique de factures ni fiches à reprendre, le travail d&apos;installation
          est connu d&apos;avance. Nous partons de vos recettes et nous montons votre mercuriale avec vous.
        </p>
      </section>

      <ul className="mt-8 grid gap-2 text-sm text-[#4d6952] sm:grid-cols-2">
        <li>Sans engagement en mensuel, résiliable à tout moment.</li>
        <li>Trente jours satisfait ou remboursé sur l&apos;annuel.</li>
        <li>Données exportables à tout moment, conservées douze mois si vous partez.</li>
        <li>Prix hors taxes, TVA récupérable.</li>
      </ul>

      <section className="mt-14" aria-labelledby="tarifs-faq-title">
        <h2 id="tarifs-faq-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
          Questions fréquentes
        </h2>
        <dl className="mt-6 space-y-4">
          {pricingFaq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-[#dcead2] bg-white p-5">
              <dt className="font-bold text-[#355329]">{item.q}</dt>
              <dd className="mt-2 text-[#4d6952]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
