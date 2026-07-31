import { useMemo } from "react";
import type { DecorStyle } from "@/lib/letter-content";

const GLYPHS: Record<Exclude<DecorStyle, "none">, string[]> = {
  mixed: ["\u2661", "\u273f", "\u2727", "\u2740", "\u2726"],
  hearts: ["\u2661", "\u2665", "\u2764"],
  flowers: ["\u273f", "\u2740", "\u2698"],
  sparkles: ["\u2727", "\u2726", "\u02da"],
};

type Bit = {
  glyph: string;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  rot: number;
};

export function FloatingDecor({ style }: { style: DecorStyle }) {
  const bits = useMemo<Bit[]>(() => {
    if (style === "none") return [];
    const glyphs = GLYPHS[style];
    return Array.from({ length: 22 }, (_, i) => {
      const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
      return {
        glyph: glyphs[i % glyphs.length]!,
        left: r(1) * 100,
        size: 10 + r(2) * 20,
        delay: r(3) * 18,
        duration: 16 + r(4) * 16,
        opacity: 0.25 + r(5) * 0.4,
        rot: -60 + r(6) * 120,
      };
    });
  }, [style]);

  if (!bits.length) return null;

  return (
    <div className="lp-decor pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {bits.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-[-10vh] select-none"
          style={
            {
              left: `${b.left}%`,
              fontSize: `${b.size}px`,
              color: "var(--lp-primary)",
              animation: `lp-float ${b.duration}s linear ${b.delay}s infinite`,
              "--lp-op": b.opacity,
              "--lp-rot": `${b.rot}deg`,
            } as React.CSSProperties
          }
        >
          {b.glyph}
        </span>
      ))}
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "color-mix(in srgb, var(--lp-primary) 18%, transparent)" }}
      />
      <div
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "color-mix(in srgb, var(--lp-primary) 14%, transparent)" }}
      />
    </div>
  );
}
