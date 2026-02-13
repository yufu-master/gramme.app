import { cn } from "@/lib/utils";

export function BrandIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--dashboard)] text-sm font-extrabold text-[var(--dashboard-foreground)]",
        className
      )}
    >
      G
    </span>
  );
}

export function BrandWordmark({ className }: { className?: string }) {
  return <span className={cn("text-lg font-extrabold tracking-tight text-[var(--foreground)]", className)}>GRAMME</span>;
}
