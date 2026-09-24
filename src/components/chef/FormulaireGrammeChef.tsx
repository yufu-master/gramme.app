"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { vueCourante } from "@/lib/mesure/collecteur";

/**
 * Liste d'attente et candidature bêta de Gramme Chef.
 *
 * Passe par `/api/contact`, donc par la fonction `website-lead` : le chef entre
 * dans le CRM comme n'importe quel prospect du site, reçoit l'accusé de
 * réception habituel, et l'équipe est prévenue. Aucun chemin nouveau côté
 * serveur : un deuxième tuyau de prospects aurait fini par diverger du premier.
 * Le sujet distingue les deux demandes, et le détail voyage dans le message.
 */

type Choix = "beta" | "attente";
type Statut = "micro" | "societe" | "creation";

const STATUTS: { value: Statut; label: string }[] = [
  { value: "micro", label: "Micro-entrepreneur" },
  { value: "societe", label: "Société" },
  { value: "creation", label: "En cours d'installation" },
];

const VOLUMES = ["Moins de 2 prestations par mois", "2 à 5 par mois", "6 à 10 par mois", "Plus de 10 par mois"];

export function FormulaireGrammeChef() {
  const [choix, setChoix] = useState<Choix>("beta");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ville, setVille] = useState("");
  const [statut, setStatut] = useState<Statut | "">("");
  const [siren, setSiren] = useState("");
  const [volume, setVolume] = useState("");
  const [message, setMessage] = useState("");
  const [consentement, setConsentement] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoye, setEnvoye] = useState<Choix | null>(null);

  const soumettre = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErreur(null);
    if (!fullName.trim() || !email.trim() || !ville.trim()) {
      setErreur("Merci d'indiquer votre nom, votre e-mail et votre ville.");
      return;
    }
    if (!statut) {
      setErreur("Merci d'indiquer votre statut.");
      return;
    }
    if (!consentement) {
      setErreur("Merci d'accepter d'être recontacté au sujet de Gramme Chef.");
      return;
    }
    setEnvoi(true);
    try {
      const libelleStatut = STATUTS.find((s) => s.value === statut)?.label ?? statut;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          subject: choix === "beta" ? "Gramme Chef : candidature bêta-testeur" : "Gramme Chef : liste d'attente",
          structureName: `Chef à domicile · ${fullName.trim()} · ${ville.trim()}`,
          structureStatus: statut === "creation" ? "en_cours_de_creation" : "cree",
          message: [
            `Demande : ${choix === "beta" ? "bêta-testeur (accès avant janvier, gratuit pendant la période de test)" : "liste d'attente (lancement de janvier 2027)"}`,
            `Ville : ${ville.trim()}`,
            telephone.trim() ? `Téléphone : ${telephone.trim()}` : null,
            `Statut : ${libelleStatut}`,
            siren.trim() ? `SIREN : ${siren.trim()}` : null,
            volume ? `Volume : ${volume}` : null,
            message.trim() ? `Message : ${message.trim()}` : null,
            "Consentement : accepte d'être recontacté au sujet de Gramme Chef.",
          ]
            .filter(Boolean)
            .join("\n"),
          website: honeypot,
          vueId: vueCourante(),
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setErreur(data.error || "Une erreur est survenue. Merci de réessayer.");
        return;
      }
      trackEvent("gramme_chef_inscription", { choix });
      setEnvoye(choix);
    } catch {
      setErreur("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setEnvoi(false);
    }
  };

  if (envoye) {
    return (
      <div className="rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:p-8" role="status">
        <h3 className="text-xl font-bold text-[#27421f]">
          {envoye === "beta" ? "Candidature reçue, merci !" : "Vous êtes sur la liste, merci !"}
        </h3>
        <p className="mt-3 leading-relaxed text-[#4d6952]">
          {envoye === "beta"
            ? "Nous choisissons les chefs de la bêta au fil des candidatures, pour avoir des profils variés. Nous revenons vers vous par e-mail, avec les dates et ce que nous attendons de vos retours."
            : "Vous recevrez un e-mail au lancement de Gramme Chef, en janvier 2027, et rien d'autre d'ici là."}
        </p>
      </div>
    );
  }

  const champ =
    "mt-1 w-full rounded-xl border border-[#cfe0c4] bg-white px-4 py-3 text-[#27421f] outline-none transition focus:border-[#6e9f55] focus:ring-2 focus:ring-[#a8cf8c]/40";
  const etiquette = "block text-sm font-semibold text-[#355329]";

  return (
    <form onSubmit={soumettre} className="grid gap-5" noValidate>
      <fieldset>
        <legend className={etiquette}>Vous souhaitez</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {(
            [
              { value: "beta", titre: "Devenir chef bêta-testeur", texte: "Accès avant janvier, gratuit pendant la période de test, en échange de vos retours." },
              { value: "attente", titre: "Être prévenu du lancement", texte: "Un e-mail en janvier 2027, quand Gramme Chef ouvre à tous." },
            ] as { value: Choix; titre: string; texte: string }[]
          ).map((option) => (
            <label
              key={option.value}
              className={`cursor-pointer rounded-2xl border p-4 transition ${
                choix === option.value ? "border-[#6e9f55] bg-[#f3f9ee]" : "border-[#dcead2] bg-white hover:border-[#a8cf8c]"
              }`}
            >
              <input
                type="radio"
                name="choix"
                value={option.value}
                checked={choix === option.value}
                onChange={() => setChoix(option.value)}
                className="sr-only"
              />
              <span className="block font-bold text-[#27421f]">{option.titre}</span>
              <span className="mt-1 block text-sm leading-relaxed text-[#4d6952]">{option.texte}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={etiquette}>
          Prénom et nom
          <input className={champ} value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" required />
        </label>
        <label className={etiquette}>
          E-mail
          <input className={champ} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        </label>
        <label className={etiquette}>
          Téléphone (facultatif)
          <input className={champ} type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} autoComplete="tel" />
        </label>
        <label className={etiquette}>
          Ville
          <input className={champ} value={ville} onChange={(e) => setVille(e.target.value)} autoComplete="address-level2" required />
        </label>
        <label className={etiquette}>
          Statut
          <select className={champ} value={statut} onChange={(e) => setStatut(e.target.value as Statut)} required>
            <option value="">Choisir</option>
            {STATUTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        <label className={etiquette}>
          Prestations par mois
          <select className={champ} value={volume} onChange={(e) => setVolume(e.target.value)}>
            <option value="">Choisir</option>
            {VOLUMES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label className={`${etiquette} sm:col-span-2`}>
          SIREN (facultatif)
          <input className={champ} inputMode="numeric" value={siren} onChange={(e) => setSiren(e.target.value)} />
        </label>
        <label className={`${etiquette} sm:col-span-2`}>
          Ce que vous aimeriez que l&apos;outil fasse pour vous (facultatif)
          <textarea className={`${champ} min-h-24`} value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
      </div>

      {/* Piège à robots : invisible pour un humain. */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <label className="flex items-start gap-3 text-sm leading-relaxed text-[#4d6952]">
        <input
          type="checkbox"
          checked={consentement}
          onChange={(e) => setConsentement(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[#6e9f55]"
        />
        <span>
          J&apos;accepte d&apos;être recontacté par Gramme au sujet de Gramme Chef. Vos informations ne servent qu&apos;à
          cela, ne sont jamais revendues, et vous pouvez demander leur suppression à tout moment à bonjour@gramme.app.
        </span>
      </label>

      {erreur && (
        <p className="rounded-xl bg-[#fdecea] px-4 py-3 text-sm text-[#a3452c]" role="alert">
          {erreur}
        </p>
      )}

      <button
        type="submit"
        disabled={envoi}
        className="inline-flex justify-center rounded-xl bg-[#264021] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1e3319] disabled:opacity-60"
      >
        {envoi ? "Envoi…" : choix === "beta" ? "Envoyer ma candidature" : "M'inscrire sur la liste"}
      </button>
    </form>
  );
}
