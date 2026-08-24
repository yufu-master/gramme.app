"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ACCEPTED_MIME,
  MAX_UPLOAD_BYTES,
  ONBOARDING_STEPS,
  USER_USAGES,
  requiredFieldsOf,
  type Field,
  type Step,
  type UserRow,
  USER_ROLES,
} from "@/content/onboarding";

type Reponses = Record<string, unknown>;

type Fichier = {
  id: string;
  categorie: string;
  nom_fichier: string;
  taille_octets: number | null;
};

type ResolveResponse = {
  ok?: boolean;
  error?: string;
  soumis?: boolean;
  expire_le?: string;
  prefill?: Record<string, string>;
  reponses?: Reponses;
  fichiers?: Fichier[];
};

async function api(payload: Record<string, unknown>) {
  const res = await fetch("/api/mise-en-service", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || "Une erreur est survenue.");
  return json;
}

function formatBytes(n: number | null) {
  if (!n) return "";
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} Ko`;
  return `${(n / (1024 * 1024)).toFixed(1)} Mo`;
}

export function QuestionnaireForm({ token }: { token: string }) {
  const [loading, setLoading] = useState(true);
  const [fatal, setFatal] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [reponses, setReponses] = useState<Reponses>({});
  const [fichiers, setFichiers] = useState<Fichier[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const savedRef = useRef<string>("");
  const sectionRef = useRef<HTMLElement>(null);

  /**
   * Remonter en haut de l'ÉTAPE à chaque changement (#63).
   *
   * Avant : `window.scrollTo({ top: 0, behavior: "smooth" })` juste après le
   * setState. Deux problèmes. Le haut de la page n'est pas le haut du
   * questionnaire — il y a l'en-tête du site au-dessus — et surtout un
   * défilement animé lancé au moment où React remplace tout le contenu de
   * l'étape se fait annuler par Safari : on restait au milieu de la nouvelle
   * étape, à l'endroit exact où on avait cliqué.
   *
   * Ici, le défilement est joué APRÈS le rendu, vise la section elle-même, et
   * respecte scroll-mt pour ne pas passer sous la barre de progression collée.
   */
  useEffect(() => {
    if (stepIndex === 0) return;
    sectionRef.current?.scrollIntoView({ block: "start" });
  }, [stepIndex]);

  const step: Step = ONBOARDING_STEPS[stepIndex];
  const isLast = stepIndex === ONBOARDING_STEPS.length - 1;
  const progress = Math.round(((stepIndex + 1) / ONBOARDING_STEPS.length) * 100);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data: ResolveResponse = await api({ action: "resolve", token });
        if (cancelled) return;
        if (data.soumis) {
          setSubmitted(true);
        } else {
          const base: Reponses = { ...(data.reponses ?? {}) };
          const prefill = data.prefill ?? {};
          for (const [k, v] of Object.entries(prefill)) {
            if (v && base[k] === undefined) base[k] = v;
          }
          setReponses(base);
          setFichiers(data.fichiers ?? []);
          savedRef.current = JSON.stringify(base);
        }
      } catch (e) {
        if (!cancelled) setFatal(e instanceof Error ? e.message : "Lien invalide.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  // Sauvegarde du brouillon, sans bloquer la saisie.
  const saveDraft = useCallback(
    async (data: Reponses) => {
      const serialized = JSON.stringify(data);
      if (serialized === savedRef.current) return;
      setSaving(true);
      try {
        await api({ action: "save", token, reponses: data });
        savedRef.current = serialized;
      } catch {
        // Silencieux : la soumission finale renverra l'erreur si besoin.
      } finally {
        setSaving(false);
      }
    },
    [token],
  );

  useEffect(() => {
    if (loading || submitted || fatal) return;
    const timer = window.setTimeout(() => void saveDraft(reponses), 1200);
    return () => window.clearTimeout(timer);
  }, [reponses, loading, submitted, fatal, saveDraft]);

  const setValue = (name: string, value: unknown) => {
    setReponses((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
  };

  const validateStep = (): boolean => {
    const next: Record<string, string> = {};
    for (const name of requiredFieldsOf(step)) {
      const v = reponses[name];
      const empty = v === undefined || v === null || String(v).trim() === "";
      if (empty) next[name] = "Cette réponse est nécessaire.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.querySelector<HTMLElement>(`[data-field="${Object.keys(next)[0]}"]`);
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    return true;
  };

  const goNext = async () => {
    if (!validateStep()) return;
    await saveDraft(reponses);
    setStepIndex((i) => Math.min(i + 1, ONBOARDING_STEPS.length - 1));
  };

  const goPrev = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const submit = async () => {
    if (!validateStep()) return;
    setSending(true);
    setSendError(null);
    try {
      await api({ action: "submit", token, reponses });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setSendError(e instanceof Error ? e.message : "Envoi impossible.");
    } finally {
      setSending(false);
    }
  };

  /* ---------------- États terminaux ---------------- */

  if (loading) {
    return (
      <p className="rounded-2xl border border-[#dcead2] bg-white p-6 text-[#4d6952]" role="status">
        Chargement de votre questionnaire…
      </p>
    );
  }

  if (fatal) {
    return (
      <div className="rounded-2xl border border-[#e6cfcf] bg-white p-6">
        <h2 className="text-xl font-bold text-[#27421f]">Ce lien n&apos;est pas utilisable</h2>
        <p className="mt-3 text-[#4d6952]">{fatal}</p>
        <p className="mt-4 text-sm text-[#4d6952]">
          Écrivez-nous à{" "}
          {/* Lien cassé = problème technique : c'est le support qui traite. */}
          <a href="mailto:support@gramme.app" className="font-semibold text-[#355329] underline">
            support@gramme.app
          </a>{" "}
          et nous vous renverrons un lien valide.
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#dcead2] bg-white p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6e9f55]">C&apos;est envoyé</p>
        <h2 className="mt-3 text-2xl font-bold text-[#27421f] md:text-3xl">Merci, tout est bien arrivé.</h2>
        <p className="mt-4 leading-relaxed text-[#4d6952]">
          Nous préparons votre compte avec ces éléments avant notre rendez-vous. Si un document manque ou
          si un chiffre a changé, écrivez-nous simplement à{" "}
          <a href="mailto:bonjour@gramme.app" className="font-semibold text-[#355329] underline">
            bonjour@gramme.app
          </a>
          .
        </p>
      </div>
    );
  }

  /* ---------------- Formulaire ---------------- */

  return (
    <div>
      <div className="sticky top-[4.5rem] z-10 -mx-4 mb-8 border-b border-[#dcead2] bg-[#f9fcf6]/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
        <div className="flex items-center justify-between gap-4 text-sm">
          <p className="font-semibold text-[#355329]">
            Étape {stepIndex + 1} sur {ONBOARDING_STEPS.length} — {step.title}
          </p>
          <p className="shrink-0 text-xs text-[#6e9f55]" aria-live="polite">
            {saving ? "Enregistrement…" : "Enregistré"}
          </p>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#dcead2]">
          <div
            className="h-full rounded-full bg-[#6e9f55] transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progression du questionnaire"
          />
        </div>
      </div>

      <section ref={sectionRef} aria-labelledby={`step-${step.id}`} className="scroll-mt-40">
        <h2 id={`step-${step.id}`} className="text-2xl font-bold text-[#27421f] md:text-3xl">
          {step.title}
        </h2>
        {step.intro ? <p className="mt-3 max-w-2xl leading-relaxed text-[#4d6952]">{step.intro}</p> : null}

        <div className="mt-7 space-y-6">
          {step.fields.map((field) => (
            <FieldRenderer
              key={field.name}
              field={field}
              value={reponses[field.name]}
              reponses={reponses}
              error={errors[field.name]}
              onChange={setValue}
              token={token}
              fichiers={fichiers}
              setFichiers={setFichiers}
            />
          ))}
        </div>
      </section>

      {sendError ? (
        <p className="mt-6 rounded-xl border border-[#e6cfcf] bg-[#fdf6f6] px-4 py-3 text-sm text-[#8a3b3b]" role="alert">
          {sendError}
        </p>
      ) : null}

      <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-[#dcead2] pt-6">
        {stepIndex > 0 ? (
          <button
            type="button"
            onClick={goPrev}
            className="rounded-xl border border-[#d8e6cf] bg-white px-5 py-3 font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
          >
            Retour
          </button>
        ) : null}
        {isLast ? (
          <button
            type="button"
            onClick={submit}
            disabled={sending}
            className="rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition hover:bg-[#355329] disabled:opacity-60"
          >
            {sending ? "Envoi…" : "Envoyer le questionnaire"}
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            className="rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition hover:bg-[#355329]"
          >
            Continuer
          </button>
        )}
        <p className="w-full text-xs text-[#6e9f55] sm:w-auto">
          Vos réponses sont enregistrées au fur et à mesure. Vous pouvez fermer et revenir plus tard.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const labelCls = "block text-sm font-bold text-[#27421f]";
const inputCls =
  "mt-2 w-full rounded-xl border border-[#dcead2] bg-white px-4 py-3 text-[#27421f] outline-none transition focus:border-[#6e9f55] focus:ring-2 focus:ring-[#a8cf8c]/40";
const hintCls = "mt-1.5 text-sm text-[#6e9f55]";

function FieldRenderer({
  field,
  value,
  reponses,
  error,
  onChange,
  token,
  fichiers,
  setFichiers,
}: {
  field: Field;
  value: unknown;
  reponses: Reponses;
  error?: string;
  onChange: (name: string, value: unknown) => void;
  token: string;
  fichiers: Fichier[];
  setFichiers: React.Dispatch<React.SetStateAction<Fichier[]>>;
}) {
  const id = `f-${field.name}`;
  const describedBy = error ? `${id}-err` : "hint" in field && field.hint ? `${id}-hint` : undefined;

  const wrapper = (children: React.ReactNode) => (
    <div data-field={field.name}>
      {children}
      {"hint" in field && field.hint && !error ? (
        <p id={`${id}-hint`} className={hintCls}>
          {field.hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-err`} className="mt-1.5 text-sm font-semibold text-[#8a3b3b]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );

  if (field.kind === "text" || field.kind === "tel") {
    return wrapper(
      <>
        <label htmlFor={id} className={labelCls}>
          {field.label}
          {field.required ? <span className="text-[#8a3b3b]"> *</span> : null}
        </label>
        <input
          id={id}
          type={field.kind === "tel" ? "tel" : "text"}
          value={String(value ?? "")}
          placeholder={"placeholder" in field ? field.placeholder : undefined}
          onChange={(e) => onChange(field.name, e.target.value)}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          className={inputCls}
        />
      </>,
    );
  }

  if (field.kind === "number") {
    return wrapper(
      <>
        <label htmlFor={id} className={labelCls}>
          {field.label}
          {field.required ? <span className="text-[#8a3b3b]"> *</span> : null}
        </label>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={field.min ?? 0}
          value={value === undefined || value === null ? "" : String(value)}
          onChange={(e) => onChange(field.name, e.target.value === "" ? "" : Number(e.target.value))}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          className={`${inputCls} max-w-[12rem]`}
        />
      </>,
    );
  }

  if (field.kind === "textarea") {
    return wrapper(
      <>
        <label htmlFor={id} className={labelCls}>
          {field.label}
          {field.required ? <span className="text-[#8a3b3b]"> *</span> : null}
        </label>
        <textarea
          id={id}
          rows={4}
          value={String(value ?? "")}
          placeholder={field.placeholder}
          onChange={(e) => onChange(field.name, e.target.value)}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          className={`${inputCls} resize-y`}
        />
      </>,
    );
  }

  if (field.kind === "radio") {
    const showOther = field.otherFor && (value === "autre" || value === "logiciel");
    return wrapper(
      <fieldset>
        <legend className={labelCls}>
          {field.label}
          {field.required ? <span className="text-[#8a3b3b]"> *</span> : null}
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {field.choices.map((c) => {
            const checked = value === c.value;
            return (
              <label
                key={c.value}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                  checked
                    ? "border-[#6e9f55] bg-[#f2f8ec] font-semibold text-[#27421f]"
                    : "border-[#dcead2] bg-white text-[#4d6952] hover:bg-[#f8fbf5]"
                }`}
              >
                <input
                  type="radio"
                  name={field.name}
                  value={c.value}
                  checked={checked}
                  onChange={() => onChange(field.name, c.value)}
                  className="size-4 accent-[#355329]"
                />
                {c.label}
              </label>
            );
          })}
        </div>
        {showOther ? (
          <input
            type="text"
            value={String(reponses[field.otherFor!] ?? "")}
            onChange={(e) => onChange(field.otherFor!, e.target.value)}
            placeholder={value === "logiciel" ? "Lequel ?" : "Précisez"}
            aria-label={value === "logiciel" ? "Nom du logiciel" : "Précisez l'activité"}
            className={inputCls}
          />
        ) : null}
      </fieldset>,
    );
  }

  if (field.kind === "checkbox") {
    // Valeur stockée en tableau ; on tolère une ancienne réponse en chaîne
    // (questionnaires remplis avant le passage au choix multiple).
    const selection: string[] = Array.isArray(value)
      ? (value as string[])
      : value
        ? [String(value)]
        : [];
    const basculer = (v: string) => {
      const suite = selection.includes(v)
        ? selection.filter((x) => x !== v)
        : [...selection, v];
      onChange(field.name, suite);
      // « Autre » décoché : on n'emporte pas une précision devenue orpheline.
      if (field.otherFor && v === "autre" && selection.includes(v)) {
        onChange(field.otherFor, "");
      }
    };
    const montrerAutre = !!field.otherFor && (selection.includes("autre") || selection.includes("logiciel"));

    return wrapper(
      <fieldset>
        <legend className={labelCls}>
          {field.label}
          {field.required ? <span className="text-[#8a3b3b]"> *</span> : null}
        </legend>
        {/* Pas d'indication ici : `wrapper` l'affiche déjà sous le champ, comme
            pour tous les autres types. Écrite aux deux endroits, « Plusieurs
            réponses possibles. » se lisait deux fois d'affilée. */}
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {field.choices.map((c) => {
            const checked = selection.includes(c.value);
            return (
              <label
                key={c.value}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                  checked
                    ? "border-[#6e9f55] bg-[#f2f8ec] font-semibold text-[#27421f]"
                    : "border-[#dcead2] bg-white text-[#4d6952] hover:bg-[#f8fbf5]"
                }`}
              >
                <input
                  type="checkbox"
                  name={field.name}
                  value={c.value}
                  checked={checked}
                  onChange={() => basculer(c.value)}
                  className="size-4 accent-[#355329]"
                />
                {c.label}
              </label>
            );
          })}
        </div>
        {montrerAutre ? (
          <input
            type="text"
            value={String(reponses[field.otherFor!] ?? "")}
            onChange={(e) => onChange(field.otherFor!, e.target.value)}
            placeholder={selection.includes("logiciel") ? "Lequel ?" : "Précisez"}
            aria-label="Précisez"
            className={inputCls}
          />
        ) : null}
      </fieldset>,
    );
  }

  if (field.kind === "users") {
    const rows: UserRow[] = Array.isArray(value) && value.length
      ? (value as UserRow[])
      : [{ nom: "", fonction: "", email: "", usage: "", role: "operateur" }];

    const update = (i: number, patch: Partial<UserRow>) => {
      const next = rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r));
      onChange(field.name, next);
    };

    return wrapper(
      <div>
        <p className={labelCls}>{field.label}</p>
        <div className="mt-3 space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="rounded-2xl border border-[#dcead2] bg-white p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  value={row.nom}
                  onChange={(e) => update(i, { nom: e.target.value })}
                  placeholder="Nom"
                  aria-label={`Nom de l'utilisateur ${i + 1}`}
                  className={`${inputCls} mt-0`}
                />
                <input
                  type="text"
                  value={row.fonction}
                  onChange={(e) => update(i, { fonction: e.target.value })}
                  placeholder="Fonction"
                  aria-label={`Fonction de l'utilisateur ${i + 1}`}
                  className={`${inputCls} mt-0`}
                />
                <input
                  type="email"
                  value={row.email}
                  onChange={(e) => update(i, { email: e.target.value })}
                  placeholder="E-mail"
                  aria-label={`E-mail de l'utilisateur ${i + 1}`}
                  className={`${inputCls} mt-0`}
                />
                <select
                  value={row.usage}
                  onChange={(e) => update(i, { usage: e.target.value })}
                  aria-label={`Usage prévu pour l'utilisateur ${i + 1}`}
                  className={`${inputCls} mt-0`}
                >
                  <option value="">Usage prévu…</option>
                  {USER_USAGES.map((u) => (
                    <option key={u.value} value={u.value}>
                      {u.label}
                    </option>
                  ))}
                </select>
                {/* Rôle applicatif (#63) : renseigné ici, il n'y a plus à le
                    redemander au moment de créer les accès. */}
                <select
                  value={row.role || "operateur"}
                  onChange={(e) => update(i, { role: e.target.value })}
                  aria-label={`Rôle Gramme de l'utilisateur ${i + 1}`}
                  className={`${inputCls} mt-0 sm:col-span-2`}
                >
                  {USER_ROLES.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
              {rows.length > 1 ? (
                <button
                  type="button"
                  onClick={() => onChange(field.name, rows.filter((_, idx) => idx !== i))}
                  className="mt-3 text-sm font-semibold text-[#8a3b3b] underline-offset-2 hover:underline"
                >
                  Retirer cette personne
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() =>
            onChange(field.name, [
              ...rows,
              { nom: "", fonction: "", email: "", usage: "", role: "operateur" },
            ])
          }
          className="mt-3 rounded-xl border border-[#d8e6cf] bg-white px-4 py-2.5 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
        >
          Ajouter une personne
        </button>
      </div>,
    );
  }

  return (
    <FileField
      field={field}
      token={token}
      fichiers={fichiers.filter((f) => f.categorie === field.categorie)}
      setFichiers={setFichiers}
    />
  );
}

/* ------------------------------------------------------------------ */

function FileField({
  field,
  token,
  fichiers,
  setFichiers,
}: {
  field: Extract<Field, { kind: "files" }>;
  token: string;
  fichiers: Fichier[];
  setFichiers: React.Dispatch<React.SetStateAction<Fichier[]>>;
}) {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState({ fait: 0, total: 0 });
  const [echecs, setEchecs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = `f-${field.name}`;

  /**
   * Transfert d'un fichier, avec une seconde tentative.
   * Ne jette jamais : un fichier en échec ne doit pas emporter les autres —
   * c'est ce qui faisait qu'une seule pièce par section arrivait.
   */
  const uploadUn = async (file: File): Promise<string | null> => {
    if (file.size > MAX_UPLOAD_BYTES) return `${file.name} : dépasse 25 Mo`;
    if (file.type && !ACCEPTED_MIME.includes(file.type)) {
      return `${file.name} : format non accepté`;
    }

    for (let tentative = 1; tentative <= 2; tentative++) {
      let prepId: string | null = null;
      try {
        const prep = await api({
          action: "upload-url",
          token,
          categorie: field.categorie,
          nom_fichier: file.name,
          mime: file.type,
          taille_octets: file.size,
        });
        prepId = prep.id;

        const put = await fetch(prep.signedUrl, {
          method: "PUT",
          headers: { "Content-Type": file.type || "application/octet-stream" },
          body: file,
        });
        if (!put.ok) throw new Error(`HTTP ${put.status}`);

        setFichiers((prev) =>
          prev.some((f) => f.id === prep.id)
            ? prev
            : [
                ...prev,
                {
                  id: prep.id,
                  categorie: field.categorie,
                  nom_fichier: file.name,
                  taille_octets: file.size,
                },
              ],
        );
        return null;
      } catch (e) {
        // La ligne créée pour une tentative ratée ne doit pas rester orpheline.
        if (prepId) await api({ action: "delete-file", token, fichier_id: prepId }).catch(() => {});
        if (tentative === 2) {
          const detail = e instanceof Error ? e.message : "erreur inconnue";
          return `${file.name} : ${detail}`;
        }
        await new Promise((r) => setTimeout(r, 800));
      }
    }
    return `${file.name} : échec`;
  };

  const handleFiles = async (list: FileList | null) => {
    const selection = Array.from(list ?? []);
    if (!selection.length) return;

    setError(null);
    setEchecs([]);
    setBusy(true);
    setProgress({ fait: 0, total: selection.length });

    // Trois transferts de front : assez pour ne pas subir une file d'attente
    // sur vingt photos, assez peu pour ne pas saturer le réseau du laboratoire.
    const CONCURRENCE = 3;
    const rates: string[] = [];
    let curseur = 0;

    const worker = async () => {
      while (curseur < selection.length) {
        const file = selection[curseur++];
        const echec = await uploadUn(file);
        if (echec) rates.push(echec);
        setProgress((p) => ({ ...p, fait: p.fait + 1 }));
      }
    };

    await Promise.all(
      Array.from({ length: Math.min(CONCURRENCE, selection.length) }, () => worker()),
    );

    setEchecs(rates);
    setBusy(false);
    setProgress({ fait: 0, total: 0 });
    if (inputRef.current) inputRef.current.value = "";
  };

  const remove = async (fichierId: string) => {
    setError(null);
    try {
      await api({ action: "delete-file", token, fichier_id: fichierId });
      setFichiers((prev) => prev.filter((f) => f.id !== fichierId));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Suppression impossible.");
    }
  };

  return (
    <div data-field={field.name} className="rounded-2xl border border-[#dcead2] bg-white p-5">
      <label htmlFor={id} className={labelCls}>
        {field.label}
      </label>
      {field.hint ? <p className={hintCls}>{field.hint}</p> : null}

      <input
        ref={inputRef}
        id={id}
        type="file"
        multiple
        accept={ACCEPTED_MIME.join(",")}
        onChange={(e) => void handleFiles(e.target.files)}
        disabled={busy}
        className="mt-3 block w-full text-sm text-[#4d6952] file:mr-3 file:rounded-xl file:border-0 file:bg-[#264021] file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-[#355329] disabled:opacity-60"
      />

      {busy ? (
        <div className="mt-3" role="status" aria-live="polite">
          <p className="text-sm text-[#6e9f55]">
            Transfert {progress.fait} / {progress.total}… laissez la page ouverte.
          </p>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#dcead2]">
            <div
              className="h-full rounded-full bg-[#6e9f55] transition-all duration-300"
              style={{ width: `${progress.total ? (progress.fait / progress.total) * 100 : 0}%` }}
            />
          </div>
        </div>
      ) : null}

      {echecs.length > 0 ? (
        <div className="mt-3 rounded-xl border border-[#e6cfcf] bg-[#fdf6f6] px-3 py-2" role="alert">
          <p className="text-sm font-semibold text-[#8a3b3b]">
            {echecs.length} fichier{echecs.length > 1 ? "s" : ""} n&apos;
            {echecs.length > 1 ? "ont" : "a"} pas pu être transféré
            {echecs.length > 1 ? "s" : ""}. Les autres sont bien arrivés — vous pouvez les
            resélectionner.
          </p>
          <ul className="mt-1.5 space-y-0.5 text-xs text-[#8a3b3b]">
            {echecs.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {error ? (
        <p className="mt-2 text-sm font-semibold text-[#8a3b3b]" role="alert">
          {error}
        </p>
      ) : null}

      {fichiers.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {fichiers.map((f) => (
            <li
              key={f.id}
              className="flex items-center justify-between gap-3 rounded-xl bg-[#f6fbf2] px-3 py-2 text-sm"
            >
              <span className="min-w-0 truncate text-[#27421f]">
                {f.nom_fichier}
                <span className="ml-2 text-[#6e9f55]">{formatBytes(f.taille_octets)}</span>
              </span>
              <button
                type="button"
                onClick={() => void remove(f.id)}
                className="shrink-0 text-xs font-semibold text-[#8a3b3b] underline-offset-2 hover:underline"
              >
                Retirer
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
