import { ShieldCheck, Zap } from "lucide-react";

export function TrustBand() {
  return (
    <section className="border-y border-[var(--border)] bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-7 text-sm font-medium text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2"><Zap className="h-4 w-4 text-[var(--dashboard-foreground)]" /> Vitesse éclair (Vercel)</p>
        <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--dashboard-foreground)]" /> Données Sécurisées (Supabase)</p>
        <p className="flex items-center gap-2"><Zap className="h-4 w-4 text-[var(--dashboard-foreground)]" /> Automatisation 24/7 (N8N)</p>
      </div>
    </section>
  );
}
