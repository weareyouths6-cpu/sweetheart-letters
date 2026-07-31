import { motion } from "motion/react";
import type { LetterCopy } from "@/lib/letter-content";

export function FinalScreen({
  content,
  onReplay,
}: {
  content: LetterCopy;
  onReplay: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center px-7 py-14 text-center"
    >
      <motion.span
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="text-5xl"
        style={{ color: "var(--lp-primary)" }}
        aria-hidden="true"
      >
        {"\u2661"}
      </motion.span>

      <h2 className="lp-display mt-6 text-xl leading-snug" style={{ color: "var(--lp-text)" }}>
        {content.finalMessage}
      </h2>

      <p className="mt-3 text-sm opacity-70">
        with all my love, {content.girlfriendName} {"\u2014"} {content.senderName}
      </p>

      <button
        type="button"
        onClick={onReplay}
        className="lp-btn-ghost mt-8 rounded-full px-6 py-2.5 text-xs"
      >
        {"Read it again \u2661"}
      </button>
    </motion.div>
  );
}
