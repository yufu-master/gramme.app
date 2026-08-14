import { NextResponse } from "next/server";

/**
 * Relais vers l'edge function onboarding-questionnaire.
 * La clé Supabase reste côté serveur ; le navigateur ne voit que ce proxy.
 * Seules les actions publiques (token) sont relayées — jamais les actions admin.
 */

const SUPABASE_URL = process.env.GRAMME_SUPABASE_URL || "https://febyaixvwfpyixkwuajw.supabase.co";
const SUPABASE_ANON_KEY = process.env.GRAMME_SUPABASE_ANON_KEY;

const PUBLIC_ACTIONS = ["resolve", "save", "upload-url", "delete-file", "submit"] as const;
type PublicAction = (typeof PUBLIC_ACTIONS)[number];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const action = String(body.action || "");

    if (!PUBLIC_ACTIONS.includes(action as PublicAction)) {
      return NextResponse.json({ error: "Action non autorisée." }, { status: 400 });
    }

    const token = String(body.token || "").trim();
    if (!/^[a-f0-9]{40,80}$/i.test(token)) {
      return NextResponse.json({ error: "Lien invalide." }, { status: 400 });
    }

    if (!SUPABASE_ANON_KEY) {
      console.error("[mise-en-service] GRAMME_SUPABASE_ANON_KEY manquante");
      return NextResponse.json(
        { error: "Configuration serveur incomplète. Réessayez plus tard." },
        { status: 500 },
      );
    }

    const response = await fetch(`${SUPABASE_URL}/functions/v1/onboarding-questionnaire`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({ ...body, action, token }),
    });

    const json = await response.json().catch(() => ({}));
    return NextResponse.json(json, { status: response.ok ? 200 : response.status });
  } catch (error) {
    console.error("[mise-en-service] erreur", error);
    return NextResponse.json({ error: "Une erreur est survenue." }, { status: 500 });
  }
}
