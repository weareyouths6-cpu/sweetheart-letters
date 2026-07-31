import { useLetter } from "./LetterProvider";
import type { LetterCopy } from "@/lib/letter-content";

const FIELDS: { key: keyof LetterCopy; label: string; multiline?: boolean }[] = [
  { key: "girlfriendName", label: "Her name" },
  { key: "senderName", label: "Your sign-off" },
  { key: "greeting", label: "Main greeting" },
  { key: "subtitle", label: "Subtitle" },
  { key: "question", label: "Question text" },
  { key: "startButton", label: "Start button" },
  { key: "openButton", label: "Open button" },
  { key: "notYetButton", label: '"Not yet" button' },
  { key: "letterTitle", label: "Letter title" },
  { key: "letterBody", label: "Letter message", multiline: true },
  { key: "finalMessage", label: "Final message" },
];

export function ContentEditor() {
  const { data, updateContent } = useLetter();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {FIELDS.map((f) => (
        <label
          key={f.key}
          className={`block space-y-1.5 ${f.multiline ? "sm:col-span-2" : ""}`}
        >
          <span className="text-sm font-medium">{f.label}</span>
          {f.multiline ? (
            <textarea
              rows={8}
              value={data.content[f.key] as string}
              onChange={(e) => updateContent({ [f.key]: e.target.value } as Partial<LetterCopy>)}
              className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
            />
          ) : (
            <input
              value={data.content[f.key] as string}
              onChange={(e) => updateContent({ [f.key]: e.target.value } as Partial<LetterCopy>)}
              className="w-full rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-primary"
            />
          )}
        </label>
      ))}
    </div>
  );
}
