import { motion } from "motion/react";
import type { LetterCopy } from "@/lib/letter-content";

export function LetterScreen({
  content,
  onNext,
}: {
  content: LetterCopy;
  onNext: () => void;
}) {
  const paragraphs = content.letterBody.split("\n").filter((p) => p.trim().length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="px-5 py-6"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--lp-border)" }}
      >
        <img
          src={content.letterImage}
          alt={`A memory with ${content.girlfriendName}`}
          className="aspect-[4/3] w-full object-cover"
          width={1024}
          height={768}
          loading="lazy"
        />
      </motion.div>

      <h2
        className="lp-display mt-5 text-center text-2xl"
        style={{ color: "var(--lp-primary)" }}
      >
        {content.letterTitle}
      </h2>

      <div
        className="lp-paper mt-4 rounded-2xl border px-5 py-5 text-[0.95rem] leading-[34px]"
        style={{ borderColor: "var(--lp-border)" }}
      >
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
            className={i === 0 ? "" : "mt-[34px]"}
          >
            {p}
          </motion.p>
        ))}
        <p className="mt-[34px] text-right italic opacity-80">{content.senderName}</p>
      </div>

      {content.gallery.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {content.gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Memory ${i + 1}`}
              loading="lazy"
              className="aspect-square w-full rounded-xl border object-cover"
              style={{ borderColor: "var(--lp-border)" }}
            />
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={onNext}
        className="lp-btn mt-6 w-full rounded-full px-8 py-3.5 text-sm font-medium"
      >
        {"One last thing \u2661"}
      </button>
    </motion.div>
  );
}
