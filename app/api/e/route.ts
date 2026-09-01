import { NextResponse } from "next/server";

/**
 * Point de collecte de la mesure d'audience.
 *
 * POURQUOI CETTE ROUTE EXISTE plutôt qu'un appel direct du navigateur vers
 * Supabase, trois raisons dont la première suffirait :
 *
 *  1. L'ADRESSE IP. Vue depuis l'Edge Function, l'IP d'un appel relayé serait
 *     celle de Vercel : identique pour tout le monde, donc une seule empreinte
 *     pour tous les visiteurs de la journée, et un « 1 visiteur unique »
 *     parfaitement stable que rien ne viendrait signaler comme faux. Cette
 *     route lit l'IP réelle et la transmet explicitement.
 *  2. La géolocalisation approximative est donnée gratuitement par Vercel dans
 *     les en-têtes `x-vercel-ip-*`, et n'est disponible nulle part ailleurs.
 *  3. `sendBeacon` ne sait pas poser d'en-tête `Authorization` : un appel
 *     direct imposerait d'ouvrir la fonction Supabase à tout le monde. Ici la
 *     clé anon reste côté serveur, exactement comme dans `api/contact`.
 *
 * Et accessoirement : `connect-src 'self'` suffit, donc rien à changer à la CSP.
 */

export const runtime = "edge";
export const dynamic = "force-dynamic";

const SUPABASE_URL =
  process.env.GRAMME_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_GRAMME_SUPABASE_URL ||
  "https://febyaixvwfpyixkwuajw.supabase.co";

const SUPABASE_ANON_KEY =
  process.env.GRAMME_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_GRAMME_SUPABASE_ANON_KEY || "";

/** Huit kilooctets : une balise de fin réaliste en fait moins de deux. */
const TAILLE_MAX = 8 * 1024;

/**
 * `x-vercel-ip-city` arrive encodée en pourcentage : « Saint-%C3%89tienne ».
 * Sans décodage, la console afficherait des noms de villes illisibles, et
 * personne ne saurait dire si c'est la mesure ou l'affichage qui est cassé.
 */
function enTeteDecode(valeur: string | null): string | undefined {
  if (!valeur) return undefined;
  try {
    return decodeURIComponent(valeur);
  } catch {
    return valeur;
  }
}

export async function POST(request: Request) {
  try {
    if (!SUPABASE_ANON_KEY) {
      // Sans clé, on ne peut rien mesurer, mais on ne casse rien non plus : le
      // navigateur ne lit pas cette réponse.
      return new NextResponse(null, { status: 204 });
    }

    const brut = await request.text();
    if (!brut || brut.length > TAILLE_MAX) return new NextResponse(null, { status: 204 });

    let charge: Record<string, unknown>;
    try {
      charge = JSON.parse(brut) as Record<string, unknown>;
    } catch {
      return new NextResponse(null, { status: 204 });
    }

    const action = String(charge.action || "");
    if (action !== "vue" && action !== "fin") return new NextResponse(null, { status: 204 });

    const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim();
    const geo = {
      pays: request.headers.get("x-vercel-ip-country") || undefined,
      region: request.headers.get("x-vercel-ip-country-region") || undefined,
      ville: enTeteDecode(request.headers.get("x-vercel-ip-city")),
    };

    if (action === "vue" && charge.vue && typeof charge.vue === "object") {
      Object.assign(charge.vue as Record<string, unknown>, geo);
    }

    const entetes: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      apikey: SUPABASE_ANON_KEY,
      "x-visiteur-ip": ip,
      "x-visiteur-ua": request.headers.get("user-agent") || "",
    };
    const secret = process.env.AUDIENCE_INGEST_SECRET;
    if (secret) entetes["x-audience-secret"] = secret;

    await fetch(`${SUPABASE_URL}/functions/v1/site-audience`, {
      method: "POST",
      headers: entetes,
      body: JSON.stringify(charge),
    });

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("[audience]", err);
    // Toujours 204 : une mesure qui échoue ne doit rien apprendre à qui la
    // sonde, et surtout rien changer pour le visiteur.
    return new NextResponse(null, { status: 204 });
  }
}
