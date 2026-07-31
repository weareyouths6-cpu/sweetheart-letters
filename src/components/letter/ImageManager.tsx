import { ImageUploader } from "./ImageUploader";
import { useLetter } from "./LetterProvider";

export function ImageManager() {
  const { data, updateContent } = useLetter();
  const { coverImage, letterImage, gallery } = data.content;

  return (
    <div className="space-y-6">
      <ImageUploader
        label="Cover photo (welcome screen)"
        value={coverImage}
        onChange={(v) => updateContent({ coverImage: v })}
      />
      <ImageUploader
        label="Letter photo"
        value={letterImage}
        onChange={(v) => updateContent({ letterImage: v })}
      />
      <div className="space-y-3">
        <p className="text-sm font-medium">Extra photos</p>
        <div className="flex flex-wrap gap-3">
          {gallery.map((src, i) => (
            <div key={i} className="relative">
              <img
                src={src}
                alt={`Extra ${i + 1}`}
                className="h-16 w-16 rounded-xl border border-border object-cover"
              />
              <button
                type="button"
                aria-label="Remove photo"
                onClick={() =>
                  updateContent({ gallery: gallery.filter((_, idx) => idx !== i) })
                }
                className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-primary text-xs text-primary-foreground"
              >
                x
              </button>
            </div>
          ))}
        </div>
        <ImageUploader
          label="Add a photo"
          onChange={(v) => updateContent({ gallery: [...gallery, v] })}
        />
      </div>
    </div>
  );
}
