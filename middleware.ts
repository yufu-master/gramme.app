import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { reconnaitreRobot } from "@/lib/mesure/robots";
import { normaliserChemin } from "@/lib/mesure/chemin";

/**
 * Le middleware ne fait QU'UNE chose : journaliser les passages de robots.
 *
 * POURQUOI ICI ET PAS DANS LE SCRIPT CLIENT. Les crawlers n'exécutent pas de
 * JavaScript. Googlebot, GPTBot ou Perplexity-User sont donc rigoureusement
 * invisibles de la mesure d'audience ordinaire : le seul endroit où on les
 * voit, c'est la requête HTTP elle-même.
 *
 * POURQUOI IL NE MESURE PAS LES HUMAINS, alors qu'il les voit passer. Parce
 * que Next précharge les pages au survol d'un `<Link>` : compter ici
 * produirait une vue pour chaque lien effleuré, et le classement des pages les
 * plus lues deviendrait un classement des liens les plus survolés. Le partage
 * est net : les robots ici, les humains dans le navigateur, et aucun risque de
 * compter quelqu'un deux fois.
 */

export const config = {
  matcher: ["/((?!_next/|api/|images/|logos/|.*\\.[a-z0-9]+$).*)"],
};

const SUPABASE_URL =
  process.env.GRAMME_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_GRAMME_SUPABASE_URL ||
  "https://febyaixvwfpyixkwuajw.supabase.co";

const SUPABASE_ANON_KEY =
  process.env.GRAMME_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_GRAMME_SUPABASE_ANON_KEY || "";

/**
 * Une requête de navigation interne du routeur, pas une visite. Trois marqueurs
 * parce qu'ils n'apparaissent pas tous ensemble selon la version et le mode :
 * l'en-tête `RSC` sur un rendu de segment, `Next-Router-Prefetch` sur un
 * préchargement, et `?_rsc=` sur les requêtes que le routeur émet lui-même.
 */
function estRequeteInterne(req: NextRequest): boolean {
  return (
    req.headers.get("RSC") === "1" ||
    req.headers.has("Next-Router-Prefetch") ||
    req.nextUrl.searchParams.has("_rsc")
  );
}

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const suite = NextResponse.next();

  if (!SUPABASE_ANON_KEY) return suite;
  if (estRequeteInterne(req)) return suite;

  const robot = reconnaitreRobot(req.headers.get("user-agent"));
  if (!robot) return suite;

  const entetes: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    apikey: SUPABASE_ANON_KEY,
    "x-visiteur-ip": (req.headers.get("x-forwarded-for") || "").split(",")[0].trim(),
    "x-visiteur-ua": req.headers.get("user-agent") || "",
  };
  const secret = process.env.AUDIENCE_INGEST_SECRET;
  if (secret) entetes["x-audience-secret"] = secret;

  // `event.waitUntil` : la réponse au robot part tout de suite, l'écriture
  // continue après. Un crawler qui attendrait notre base pour recevoir la page
  // verrait un site lent, et la lenteur est exactement ce qu'il rapporte.
  event.waitUntil(
    fetch(`${SUPABASE_URL}/functions/v1/site-audience`, {
      method: "POST",
      headers: entetes,
      body: JSON.stringify({
        action: "robot",
        robot: robot.nom,
        famille: robot.famille,
        chemin: normaliserChemin(req.nextUrl.pathname),
        user_agent: req.headers.get("user-agent") || "",
      }),
    }).catch(() => undefined),
  );

  return suite;
}
