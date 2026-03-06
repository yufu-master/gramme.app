"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

type SubjectOption = "Demande de démo" | "Question sur les tarifs" | "Support technique" | "Autre";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

const SUBJECTS: SubjectOption[] = ["Demande de démo", "Question sur les tarifs", "Support technique", "Autre"];

export default function ContactPageContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    setIsSubmitting(true);
    setToast(null);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "58063a70-50a7-4690-a9aa-b2505452a448",
        name: fullName.trim(),
        email: email.trim(),
        subject,
        message: message.trim(),
      }),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setToast({ type: "error", message: "Une erreur est survenue. Merci de réessayer." });
      return;
    }

    resetForm();
    setToast({ type: "success", message: "✅ Votre message a bien été envoyé !" });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6fbf2,_#ffffff_45%)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 lg:relative">
          <Link href="/" className="flex items-center gap-2 text-[1.44rem] font-black tracking-wide">
            <Image src="/logos/gramme-icon.svg" alt="Logo Gramme" width={36} height={36} />
            <span>GRAMME</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[var(--muted-foreground)] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex">
            <Link href="/">Fonctionnalités</Link>
            <Link href="/">Tarifs</Link>
            <Link href="/comment-ca-marche">Comment ça marche</Link>
            <Link href="/a-propos-de-gramme">À propos de Gramme</Link>
            <Link href="/contact" className="font-semibold text-[#355329]">Contact</Link>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8e6cf] bg-white text-[#355329] lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute inset-x-5 top-[74px] rounded-2xl border border-[#d8e6cf] bg-white p-3 shadow-lg lg:hidden">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-[#355329] hover:bg-[#f6fbf2]">Fonctionnalités</Link>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-[#355329] hover:bg-[#f6fbf2]">Tarifs</Link>
              <Link href="/comment-ca-marche" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-[#355329] hover:bg-[#f6fbf2]">Comment ça marche</Link>
              <Link href="/a-propos-de-gramme" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-[#355329] hover:bg-[#f6fbf2]">À propos de Gramme</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg bg-[#f6fbf2] px-3 py-2 text-sm font-semibold text-[#355329]">Contact</Link>
            </div>
          )}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:pt-24 lg:pt-20">
        <section className="overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-[0_20px_70px_rgba(58,92,39,0.08)]">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#264021] p-10 text-white md:p-12">
              <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em]">Contact</p>
              <h1 className="mt-5 text-3xl font-black md:text-4xl">Contactez l&apos;équipe GRAMME</h1>
              <p className="mt-5 text-white/85">Notre équipe est là pour vous accompagner dans la digitalisation de votre laboratoire.</p>
              <p className="mt-5 text-white/85">Nous répondons rapidement aux artisans boulangers-pâtissiers pour vous aider à démarrer sereinement.</p>
              <div className="mt-8 rounded-2xl border border-white/25 bg-white/10 p-4 text-sm md:text-base">
                <p className="font-semibold">Email direct</p>
                <p className="mt-1">gramme.app@outlook.fr</p>
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
                <span className="mb-2 block text-sm font-semibold text-[#355329]">Email de contact</span>
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
                <span className="mb-2 block text-sm font-semibold text-[#355329]">Sujet de la demande</span>
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
      </main>

      <footer className="border-t border-[var(--border)] bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/mentions-legales" className="hover:text-[var(--foreground)]">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-[var(--foreground)]">CGV</Link>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/logos/gramme-icon.svg" alt="Logo Gramme" width={20} height={20} />
            <p>© {new Date().getFullYear()} Gramme</p>
          </div>
        </div>
      </footer>

      {toast && (
        <div className={`fixed bottom-5 right-5 max-w-sm rounded-xl px-4 py-3 text-sm font-medium shadow-lg ${toast.type === "success" ? "bg-[#264021] text-white" : "bg-[#7a2323] text-white"}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
