export function trackEvent(name: string, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const plausible = (window as Window & { plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void })
    .plausible;
  if (typeof plausible !== "function") return;
  plausible(name, props ? { props } : undefined);
}
