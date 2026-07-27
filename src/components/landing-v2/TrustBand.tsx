import { Cpu, Smartphone, Wifi } from "lucide-react";

const items = [
  { icon: Smartphone, label: "Mobile-first — iPhone, Android, iPad & Mac/PC" },
  { icon: Wifi, label: "PWA — synchronisation temps réel, zéro installation" },
  { icon: Cpu, label: "IA intégrée — scan recettes & factures fournisseurs" },
];

export function TrustBand() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--secondary)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        {items.map(({ icon: Icon, label }) => (
          <p key={label} className="flex items-center gap-2.5 text-sm font-medium text-[var(--muted-foreground)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)]/15">
              <Icon className="h-4 w-4 text-[var(--brand-dark)]" />
            </span>
            {label}
          </p>
        ))}
      </div>
    </section>
  );
}
