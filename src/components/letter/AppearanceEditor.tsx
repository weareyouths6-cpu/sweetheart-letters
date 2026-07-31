import { useLetter } from "./LetterProvider";
import type { DecorStyle, FontChoice } from "@/lib/letter-content";

const COLORS: { key: "primary" | "background" | "text" | "border"; label: string }[] = [
  { key: "primary", label: "Primary pink" },
  { key: "background", label: "Background" },
  { key: "text", label: "Text color" },
  { key: "border", label: "Border color" },
];

const FONTS: { value: FontChoice; label: string }[] = [
  { value: "romantic", label: "Romantic serif" },
  { value: "handwritten", label: "Handwritten" },
  { value: "soft", label: "Soft rounded" },
];

const DECOR: { value: DecorStyle; label: string }[] = [
  { value: "mixed", label: "Everything" },
  { value: "hearts", label: "Hearts" },
  { value: "flowers", label: "Flowers" },
  { value: "sparkles", label: "Sparkles" },
  { value: "none", label: "None" },
];

export function AppearanceEditor() {
  const { data, updateAppearance } = useLetter();
  const a = data.appearance;

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {COLORS.map((c) => (
          <label key={c.key} className="flex items-center gap-3 text-sm">
            <input
              type="color"
              value={a[c.key]}
              onChange={(e) => updateAppearance({ [c.key]: e.target.value })}
              className="h-9 w-12 cursor-pointer rounded-md border border-border bg-card"
              aria-label={c.label}
            />
            <span className="font-medium">{c.label}</span>
            <span className="ml-auto text-xs text-muted-foreground">{a[c.key]}</span>
          </label>
        ))}
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Font</p>
        <div className="flex flex-wrap gap-2">
          {FONTS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => updateAppearance({ font: f.value })}
              className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                a.font === f.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Decorations</p>
        <div className="flex flex-wrap gap-2">
          {DECOR.map((d) => (
            <button
              key={d.value}
              type="button"
              onClick={() => updateAppearance({ decorations: d.value })}
              className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                a.decorations === d.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
