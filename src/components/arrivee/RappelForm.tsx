"use client";

import { FormEvent, useState } from "react";
import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { vueCourante } from "@/lib/mesure/collecteur";

/**
 * « Être rappelé » : nom et téléphone, rien d'autre.
 *
 * Même tuyau que le formulaire de /contact : `/api/contact`, puis la fonction
 * `website-lead` qui crée la fiche du CRM et y rattache la provenance par
 * `vueId`. Aucun second mécanisme.
 */
export function RappelForm({ chemin }: { chemin: string }) {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [piege, setPiege] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [fait, setFait] = useState(false);

  async function soumettre(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnvoi(true);
    setErreur(null);
    try {
      const reponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rappel: true,
          fullName: nom.trim(),
          telephone: telephone.trim(),
          subject: "Demande de rappel (papier)",
          message: `Rappel demandé depuis la page ${chemin}`,
          website: piege,
          vueId: vueCourante(),
        }),
      });
      const data = (await reponse.json().catch(() => ({}))) as { error?: string };
      if (!reponse.ok) {
        setErreur(data.error || "Une erreur est survenue. Merci de réessayer.");
        return;
      }
      trackEvent("rappel_submit", { page: chemin });
      setFait(true);
    } catch {
      setErreur("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setEnvoi(false);
    }
  }

  if (fait) {
    return (
      <p role="status" className="rounded-2xl bg-[#f6fbf2] p-5 text-base font-semibold text-[#264021]">
        C&apos;est noté. Nous vous rappelons sous 4 heures ouvrées.
      </p>
    );
  }

  const champ =
    "w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3.5 text-base outline-none ring-[#a8cf8c] transition focus:ring-2";

  return (
    <form onSubmit={soumettre} className="relative space-y-3" aria-label="Être rappelé">
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-[#355329]">Votre nom</span>
        <input required value={nom} onChange={(e) => setNom(e.target.value)} autoComplete="name" className={champ} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-[#355329]">Votre téléphone</span>
        <input
          required
          type="tel"
          inputMode="tel"
          pattern="\+?[\d\s.\-\(\)]{6,25}"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          autoComplete="tel"
          className={champ}
        />
      </label>
      <input
        type="text"
        name="website"
        value={piege}
        onChange={(e) => setPiege(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {erreur && (
        <p role="alert" className="text-sm font-medium text-[#7a2323]">
          {erreur}
        </p>
      )}
      <button
        type="submit"
        disabled={envoi}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#264021] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#1f341a] disabled:opacity-70"
      >
        <Phone className="h-5 w-5" aria-hidden />
        {envoi ? "Envoi en cours..." : "Être rappelé"}
      </button>
      <p className="text-xs text-[var(--muted-foreground)]">
        Votre numéro sert uniquement à vous rappeler. Pas de newsletter.
      </p>
    </form>
  );
}
