"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type SubjectOption = "Demande de démo" | "Question sur les tarifs" | "Support technique" | "Autre";
type StructureStatus = "en_cours_de_creation" | "cree" | "plusieurs_structures";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

const SUBJECTS: SubjectOption[] = ["Demande de démo", "Question sur les tarifs", "Support technique", "Autre"];

const STRUCTURE_STATUSES: { value: StructureStatus; label: string }[] = [
  { value: "en_cours_de_creation", label: "En cours de création" },
  { value: "cree", label: "Créée" },
  { value: "plusieurs_structures", label: "Plusieurs structures" },
];

function isSubjectOption(value: string): value is SubjectOption {
  return SUBJECTS.includes(value as SubjectOption);
}

export default function ContactPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<SubjectOption>("Demande de démo");
  const [structureName, setStructureName] = useState("");
  const [structureStatus, setStructureStatus] = useState<StructureStatus | "">("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    const sujet = searchParams.get("sujet");
    const integration = searchParams.get("integration");
    if (sujet && isSubjectOption(sujet)) setSubject(sujet);
    if (integration) {
      setSubject("Autre");
      setMessage((prev) =>
        prev
          ? prev
          : integration === "Suggestion"
            ? "Je souhaite suggérer une intégration : "
            : `Je suis intéressé(e) par une intégration avec ${integration}.`,
      );
    }
  }, [searchParams]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!structureStatus) {
      setToast({ type: "error", message: "Merci d’indiquer où en est votre structure." });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          subject,
          structureName: structureName.trim(),
          structureStatus,
          message: message.trim(),
          website: honeypot,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setToast({
          type: "error",
          message: data.error || "Une erreur est survenue. Merci de réessayer.",
        });
        return;
      }

      trackEvent("contact_submit", { subject });
      router.push("/merci");
    } catch {
      setToast({ type: "error", message: "Une erreur est survenue. Merci de réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-[0_20px_70px_rgba(58,92,39,0.08)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[#264021] p-8 text-white sm:p-10 md:p-12">
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em]">Contact</p>
            <h1 className="mt-5 text-3xl font-black md:text-4xl">Contactez l&apos;équipe GRAMME</h1>
            <p className="mt-5 text-white/85">
              Demandez une démonstration du logiciel de gestion boulangerie &amp; pâtisserie Gramme, ou posez vos questions sur les tarifs et le déploiement.
            </p>
            <p className="mt-5 text-white/85">
              Nous répondons sous <strong className="text-white">4 heures ouvrées</strong> aux artisans boulangers-pâtissiers.
            </p>
            <p className="mt-4 text-sm text-white/75">
              Vos recettes et factures restent confidentielles : propriété exclusive, pas de revente, cloisonnement entre établissements.{" "}
              <Link href="/securite" className="font-semibold text-[#a8cf8c] underline-offset-2 hover:underline">
                Voir nos engagements
              </Link>
              .
            </p>
            <div className="mt-8 space-y-3 text-sm md:text-base">
              <div className="rounded-2xl border border-white/25 bg-white/10 p-4">
                <p className="font-semibold">Email</p>
                <a href="mailto:bonjour@gramme.app" className="mt-1 inline-block underline-offset-2 hover:underline">
                  bonjour@gramme.app
                </a>
              </div>
              <div className="rounded-2xl border border-white/25 bg-white/10 p-4">
                <p className="font-semibold">Support</p>
                <a href="mailto:support@gramme.app" className="mt-1 inline-block underline-offset-2 hover:underline">
                  support@gramme.app
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-5 p-6 sm:p-8 md:p-12" aria-label="Formulaire de contact Gramme">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#355329]">Nom complet *</span>
              <input
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3 text-sm outline-none ring-[#a8cf8c] transition focus:ring-2"
                placeholder="Votre nom"
                autoComplete="name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#355329]">Email de contact *</span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3 text-sm outline-none ring-[#a8cf8c] transition focus:ring-2"
                placeholder="vous@boulangerie.fr"
                autoComplete="email"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#355329]">Sujet de la demande *</span>
              <select
                required
                value={subject}
                onChange={(event) => setSubject(event.target.value as SubjectOption)}
                className="w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3 text-sm outline-none ring-[#a8cf8c] transition focus:ring-2"
              >
                {SUBJECTS.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#355329]">Nom de la structure *</span>
              <input
                required
                value={structureName}
                onChange={(event) => setStructureName(event.target.value)}
                className="w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3 text-sm outline-none ring-[#a8cf8c] transition focus:ring-2"
                placeholder="Ex. Boulangerie Dupont"
                autoComplete="organization"
              />
            </label>

            <fieldset>
              <legend className="mb-2 block text-sm font-semibold text-[#355329]">Où en est la structure ? *</legend>
              <div className="grid gap-2 sm:grid-cols-1">
                {STRUCTURE_STATUSES.map((item) => (
                  <label
                    key={item.value}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                      structureStatus === item.value
                        ? "border-[#7ca764] bg-[#f6fbf2] font-semibold text-[#355329]"
                        : "border-[#d8e6cf] text-[#4d6952] hover:bg-[#f6fbf2]/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="structureStatus"
                      required
                      value={item.value}
                      checked={structureStatus === item.value}
                      onChange={() => setStructureStatus(item.value)}
                      className="accent-[#355329]"
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#355329]">
                Message <span className="font-normal text-[var(--muted-foreground)]">(optionnel)</span>
              </span>
              <textarea
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3 text-sm outline-none ring-[#a8cf8c] transition focus:ring-2"
                placeholder="Décrivez votre besoin…"
              />
            </label>

            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <p className="text-xs leading-relaxed text-[var(--muted-foreground)]">
              Vos données servent uniquement à traiter votre demande. Pas de newsletter. Détails :{" "}
              <Link href="/politique-de-confidentialite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition hover:bg-[#1f341a] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </section>

      {toast && (
        <div
          role="status"
          className={`fixed bottom-5 right-5 z-50 max-w-sm rounded-xl px-4 py-3 text-sm font-medium shadow-lg ${
            toast.type === "success" ? "bg-[#264021] text-white" : "bg-[#7a2323] text-white"
          }`}
        >
          {toast.message}
        </div>
      )}
    </>
  );
}
