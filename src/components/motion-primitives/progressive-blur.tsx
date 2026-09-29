/**
 * Un flou qui s'épaissit vers un bord, pour fondre un bandeau dans la page.
 * D'après `progressive-blur` de motion-primitives (sans motion : rien n'y bouge).
 */
const ANGLES = { top: 0, right: 90, bottom: 180, left: 270 } as const;

export function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 6,
  blurIntensity = 0.6,
  className,
}: {
  direction?: keyof typeof ANGLES;
  blurLayers?: number;
  blurIntensity?: number;
  className?: string;
}) {
  const couches = Math.max(blurLayers, 2);
  const pas = 1 / (couches + 1);
  return (
    <div aria-hidden className={`pointer-events-none ${className ?? ""}`}>
      {Array.from({ length: couches }).map((_, i) => {
        const arrets = [i, i + 1, i + 2, i + 3]
          .map((k, j) => `rgba(255,255,255,${j === 1 || j === 2 ? 1 : 0}) ${k * pas * 100}%`)
          .join(", ");
        const masque = `linear-gradient(${ANGLES[direction]}deg, ${arrets})`;
        return (
          <div
            key={i}
            className="absolute inset-0 rounded-[inherit]"
            style={{
              maskImage: masque,
              WebkitMaskImage: masque,
              backdropFilter: `blur(${i * blurIntensity}px)`,
              WebkitBackdropFilter: `blur(${i * blurIntensity}px)`,
            }}
          />
        );
      })}
    </div>
  );
}
