"use client";

import { FormEvent, useState } from "react";

type SubjectOption = "Demande de démo" | "Question technique" | "Partenariat" | "Autre";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

const SUBJECTS: SubjectOption[] = ["Demande de démo", "Question technique", "Partenariat", "Autre"];

export default function ContactPageContent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<SubjectOption>("Demande de démo");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setSubject("Demande de démo");
    setMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      setToast({ type: "error", message: "Configuration Supabase manquante. Merci de réessayer plus tard." });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    const response = await fetch(`${supabaseUrl}/rest/v1/messages_contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        nom_complet: fullName.trim(),
        email: email.trim(),
        sujet: subject,
        message: message.trim(),
      }),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setToast({ type: "error", message: "Une erreur est survenue lors de l'envoi. Merci de réessayer." });
      return;
    }

    resetForm();
    setToast({ type: "success", message: "✅ Message envoyé avec succès, notre équipe vous recontacte très vite !" });
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-20">
      <section className="overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-[0_20px_70px_rgba(58,92,39,0.08)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[#264021] p-10 text-white md:p-12">
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em]">Contact</p>
            <h1 className="mt-5 text-3xl font-black md:text-4xl">Contactez l&apos;équipe GRAMME</h1>
            <p className="mt-5 text-white/85">Parlez-nous de votre boulangerie : nous vous aidons à piloter vos recettes, vos coûts et vos marges avec clarté.</p>
            <div className="mt-8 space-y-2 text-sm md:text-base">
              <p>📞 +33 1 84 80 42 19</p>
              <p>✉️ contact@gramme.app</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-8 md:p-12">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#355329]">Nom complet</span>
              <input
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3 text-sm outline-none ring-[#a8cf8c] transition focus:ring-2"
                placeholder="Votre nom"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#355329]">Email</span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3 text-sm outline-none ring-[#a8cf8c] transition focus:ring-2"
                placeholder="vous@boulangerie.fr"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#355329]">Sujet</span>
              <select
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
              <span className="mb-2 block text-sm font-semibold text-[#355329]">Message</span>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-xl border border-[#d8e6cf] bg-white px-4 py-3 text-sm outline-none ring-[#a8cf8c] transition focus:ring-2"
                placeholder="Décrivez votre besoin…"
              />
            </label>

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
        <div className={`fixed bottom-5 right-5 max-w-sm rounded-xl px-4 py-3 text-sm font-medium shadow-lg ${toast.type === "success" ? "bg-[#264021] text-white" : "bg-[#7a2323] text-white"}`}>
          {toast.message}
        </div>
      )}
    </main>
  );
}
