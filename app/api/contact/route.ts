import { NextResponse } from "next/server";
import { normaliserTelephone, telephoneObligatoire } from "@/lib/telephone";

const STRUCTURE_STATUSES = ["en_cours_de_creation", "cree", "plusieurs_structures"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUPABASE_URL =
  process.env.GRAMME_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_GRAMME_SUPABASE_URL ||
  "https://febyaixvwfpyixkwuajw.supabase.co";

const SUPABASE_ANON_KEY =
  process.env.GRAMME_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_GRAMME_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlYnlhaXh2d2ZweWl4a3d1YWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4MDI0NDksImV4cCI6MjA4NTM3ODQ0OX0.r7OLBEVsdgMQgc0gRd9R5g4pLttsnpylwWvZCbPbiXc";

type Payload = {
  fullName?: string;
  email?: string;
  telephone?: string;
  subject?: string;
  structureName?: string;
  structureStatus?: string;
  message?: string;
  website?: string;
  vueId?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;

    // Honeypot
    if (String(body.website || "").trim()) {
      return NextResponse.json({ ok: true });
    }

    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const telephoneSaisi = String(body.telephone || "").trim();
    const telephone = normaliserTelephone(telephoneSaisi);
    const subject = String(body.subject || "").trim();
    const structureName = String(body.structureName || "").trim();
    const structureStatus = String(body.structureStatus || "").trim();
    const message = String(body.message || "").trim();
    // Validé ici plutôt que transmis tel quel : la valeur part vers une RPC, et
    // une chaîne arbitraire n'a rien à y faire.
    const vueIdBrut = String(body.vueId || "").trim();
    const vueId = /^[0-9a-f-]{36}$/i.test(vueIdBrut) ? vueIdBrut : undefined;

    if (!fullName) {
      return NextResponse.json({ error: "Nom complet requis" }, { status: 400 });
    }
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }
    // Obligatoire selon le sujet : sans numéro, un prospect qui ne lit pas ses
    // courriels est perdu. Facultatif ailleurs, mais un numéro donné doit servir.
    if (!telephone && (telephoneSaisi || telephoneObligatoire(String(body.subject || "")))) {
      return NextResponse.json(
        {
          error: telephoneSaisi
            ? "Numéro de téléphone incomplet (par exemple 06 12 34 56 78)"
            : "Numéro de téléphone requis (par exemple 06 12 34 56 78)",
        },
        { status: 400 },
      );
    }
    if (!subject) {
      return NextResponse.json({ error: "Sujet requis" }, { status: 400 });
    }
    if (!structureName) {
      return NextResponse.json({ error: "Nom de la structure requis" }, { status: 400 });
    }
    if (!STRUCTURE_STATUSES.includes(structureStatus as (typeof STRUCTURE_STATUSES)[number])) {
      return NextResponse.json({ error: "État de la structure requis" }, { status: 400 });
    }

    if (!SUPABASE_ANON_KEY) {
      console.error("[contact] GRAMME_SUPABASE_ANON_KEY manquante");
      return NextResponse.json(
        { error: "Configuration serveur incomplète. Réessayez plus tard." },
        { status: 500 },
      );
    }

    const leadResponse = await fetch(`${SUPABASE_URL}/functions/v1/website-lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        fullName,
        email,
        telephone,
        subject,
        structureName,
        structureStatus,
        // Aussi dans le message : la fiche CRM le montre ainsi même tant que la
        // fonction website-lead en production ne lit pas encore le champ.
        message: [telephone ? `Téléphone : ${telephone}` : null, message].filter(Boolean).join("\n"),
        vueId,
      }),
    });

    const leadJson = (await leadResponse.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
      prospectId?: string;
    };

    if (!leadResponse.ok) {
      console.error("[contact] website-lead error", leadResponse.status, leadJson);
      return NextResponse.json(
        { error: leadJson.error || "Impossible d'enregistrer le prospect." },
        { status: 502 },
      );
    }

    // Notification email (optionnelle) — ne bloque pas le succès CRM
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || "58063a70-50a7-4690-a9aa-b2505452a448";
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          name: fullName,
          email,
          subject: `[Prospect Gramme] ${subject}`,
          message: [
            telephone ? `Téléphone : ${telephone}` : null,
            `Structure : ${structureName}`,
            `État : ${structureStatus}`,
            message ? `Message : ${message}` : null,
            leadJson.prospectId ? `Prospect ID : ${leadJson.prospectId}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });
    } catch (notifyErr) {
      console.warn("[contact] notification email ignorée", notifyErr);
    }

    return NextResponse.json({ ok: true, prospectId: leadJson.prospectId });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Une erreur est survenue." }, { status: 500 });
  }
}
