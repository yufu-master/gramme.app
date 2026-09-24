"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Le calculateur gratuit du prix d'un menu de chef à domicile.
 *
 * C'est le « gratuit » de Gramme Chef (décision du 24/09/2026) : pas de compte
 * gratuit à accompagner, mais un outil en accès libre qui répond aux
 * recherches « gratuit » et amène vers l'offre. La méthode est celle du guide
 * `prix-menu-chef-a-domicile`, et les valeurs par défaut reprennent son
 * exemple : les deux doivent donner le même prix plancher (62,04 €).
 */

const euros = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });
const nombre = (v: string) => {
  const n = Number(v.replace(",", ".").replace(/\s/g, ""));
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

type Champ = {
  id: string;
  label: string;
  aide: string;
  suffixe: string;
  pas: string;
};

const CHAMPS: Champ[] = [
  { id: "convives", label: "Nombre de convives", aide: "Les invités à table.", suffixe: "convives", pas: "1" },
  { id: "matiere", label: "Coût matière par convive", aide: "Entrée, plat, dessert, pain et mignardises, au prix de vos dernières courses.", suffixe: "€", pas: "0.1" },
  { id: "frais", label: "Frais de la prestation", aide: "Déplacement, consommables, location éventuelle de vaisselle.", suffixe: "€", pas: "1" },
  { id: "heures", label: "Heures de travail", aide: "Courses, préparation, trajet, service et nettoyage compris.", suffixe: "h", pas: "0.5" },
  { id: "horaire", label: "Revenu horaire visé", aide: "Ce que vous voulez gagner par heure, avant cotisations.", suffixe: "€/h", pas: "1" },
  { id: "cotisations", label: "Taux de cotisations sociales", aide: "22 % est un exemple : le vôtre se lit sur votre espace de déclaration.", suffixe: "%", pas: "0.1" },
];

const DEPART: Record<string, string> = {
  convives: "8",
  matiere: "7,70",
  frais: "28",
  heures: "8,5",
  horaire: "35",
  cotisations: "22",
};

export function CalculateurPrixMenu() {
  const [valeurs, setValeurs] = useState<Record<string, string>>(DEPART);
  const [prixAffiche, setPrixAffiche] = useState("65");
  const [touche, setTouche] = useState(false);

  const r = useMemo(() => {
    const convives = Math.max(1, Math.round(nombre(valeurs.convives)));
    const matieres = convives * nombre(valeurs.matiere);
    const frais = nombre(valeurs.frais);
    const heures = nombre(valeurs.heures);
    const remuneration = heures * nombre(valeurs.horaire);
    const taux = Math.min(nombre(valeurs.cotisations), 90) / 100;
    const aCouvrir = matieres + frais + remuneration;
    const plancherTotal = aCouvrir / (1 - taux);
    const plancherConvive = Math.ceil((plancherTotal / convives) * 100) / 100;

    const prix = nombre(prixAffiche);
    const ca = prix * convives;
    const cotisations = ca * taux;
    const reste = ca - matieres - frais - cotisations;
    const parHeure = heures > 0 ? reste / heures : 0;
    return { convives, matieres, frais, remuneration, aCouvrir, plancherTotal, plancherConvive, prix, ca, cotisations, reste, parHeure, taux };
  }, [valeurs, prixAffiche]);

  const changer = (id: string, v: string) => {
    setValeurs((prec) => ({ ...prec, [id]: v }));
    if (!touche) {
      setTouche(true);
      trackEvent("calculateur_prix_menu_utilise");
    }
  };

  const auDessus = r.prix >= r.plancherConvive;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <form className="grid gap-4 rounded-3xl border border-[#dcead2] bg-white p-6 sm:p-7" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#6e9f55]">Votre prestation</p>
        {CHAMPS.map((c) => (
          <label key={c.id} htmlFor={`calc-${c.id}`} className="grid gap-1">
            <span className="text-sm font-semibold text-[#27421f]">{c.label}</span>
            <span className="flex items-center gap-2">
              <input
                id={`calc-${c.id}`}
                inputMode="decimal"
                value={valeurs[c.id]}
                onChange={(e) => changer(c.id, e.target.value)}
                className="w-full rounded-xl border border-[#cfe0c4] bg-white px-4 py-2.5 text-[#27421f] outline-none transition focus:border-[#6e9f55] focus:ring-2 focus:ring-[#a8cf8c]/40"
              />
              <span className="w-20 shrink-0 text-sm text-[#6e9f55]">{c.suffixe}</span>
            </span>
            <span className="text-xs leading-relaxed text-[#6b8566]">{c.aide}</span>
          </label>
        ))}
      </form>

      <div className="grid content-start gap-4">
        <section className="rounded-3xl bg-[#44624b] p-6 text-white sm:p-7" aria-live="polite">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#d3e8c4]">Votre prix plancher</p>
          <p className="mt-2 text-5xl font-black tabular-nums">{euros.format(r.plancherConvive)}</p>
          <p className="mt-1 text-[#e3efdb]">par convive, soit {euros.format(r.plancherTotal)} pour {r.convives} convives</p>
          <dl className="mt-5 grid gap-2 text-sm text-[#f1f7ec]">
            <div className="flex justify-between gap-4">
              <dt>Matières</dt>
              <dd className="tabular-nums">{euros.format(r.matieres)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Frais de la prestation</dt>
              <dd className="tabular-nums">{euros.format(r.frais)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Vos heures</dt>
              <dd className="tabular-nums">{euros.format(r.remuneration)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-white/20 pt-2">
              <dt>Total à couvrir</dt>
              <dd className="tabular-nums">{euros.format(r.aCouvrir)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Avec les cotisations ({Math.round(r.taux * 1000) / 10} %)</dt>
              <dd className="tabular-nums font-bold">{euros.format(r.plancherTotal)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-[#d3e8c4]">
            En dessous de ce prix, vous travaillez à perte. Calcul hors TVA : si vous la facturez, ajoutez-la.
          </p>
        </section>

        <section className="rounded-3xl border border-[#dcead2] bg-white p-6 sm:p-7">
          <label htmlFor="calc-prix" className="grid gap-1">
            <span className="text-sm font-semibold text-[#27421f]">Et au prix que vous pensez annoncer ?</span>
            <span className="flex items-center gap-2">
              <input
                id="calc-prix"
                inputMode="decimal"
                value={prixAffiche}
                onChange={(e) => setPrixAffiche(e.target.value)}
                className="w-full rounded-xl border border-[#cfe0c4] bg-white px-4 py-2.5 text-[#27421f] outline-none transition focus:border-[#6e9f55] focus:ring-2 focus:ring-[#a8cf8c]/40"
              />
              <span className="w-20 shrink-0 text-sm text-[#6e9f55]">€ / convive</span>
            </span>
          </label>
          <p
            className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
              auDessus ? "bg-[#eaf4e3] text-[#3f7a33]" : "bg-[#fbeee4] text-[#a0582a]"
            }`}
          >
            {auDessus ? "Au-dessus de votre plancher" : "En dessous de votre plancher"}
          </p>
          <p className="mt-3 leading-relaxed text-[#4d6952]">
            À {euros.format(r.prix)} par convive, la prestation rapporte {euros.format(r.ca)}. Après les matières, les
            frais et les cotisations, il vous reste <strong className="text-[#27421f]">{euros.format(r.reste)}</strong>,
            soit <strong className="text-[#27421f]">{euros.format(r.parHeure)} par heure</strong> travaillée.
          </p>
        </section>
      </div>
    </div>
  );
}
