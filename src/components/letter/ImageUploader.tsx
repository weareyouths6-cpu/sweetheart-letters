import { useRef, useState } from "react";
import { toast } from "sonner";
import { fileToCompressedDataUrl } from "@/lib/image-upload";

export function ImageUploader({
  label,
  value,
  onChange,
  onRemove,
}: {
  label: string;
  value?: string;
  onChange: (dataUrl: string) => void;
  onRemove?: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  async function handleFile(file?: File | null) {
    if (!file) return;
    setBusy(true);
    try {
      onChange(await fileToCompressedDataUrl(file));
      toast.success("Photo updated \u2661");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label}</p>
      <div className="flex items-center gap-3">
        {value ? (
          <img
            src={value}
            alt={label}
            className="h-16 w-16 rounded-xl border border-border object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-border text-xs text-muted-foreground">
            none
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
            className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground disabled:opacity-60"
          >
            {busy ? "Uploading..." : "Upload photo"}
          </button>
          {onRemove && value && (
            <button
              type="button"
              onClick={onRemove}
              className="rounded-full border border-border px-4 py-2 text-xs"
            >
              Remove
            </button>
          )}
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          void handleFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
    </div>
  );
}
