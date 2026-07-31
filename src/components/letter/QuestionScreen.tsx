import { useState } from "react";
import { motion } from "motion/react";
import type { LetterCopy } from "@/lib/letter-content";
import { Envelope } from "./Envelope";

const NUDGES = [
  "Are you sure? It took me a while \u2661",
  "Pretty please? (\u3065\uff61\u25d5\u203f\u203f\u25d5\uff61)\u3065",
  "It's only for you, I promise...",
  "Okay okay, one more chance \u2661",
  "Fine, I'll just leave it open for you \u2661",
];

export function QuestionScreen({
  content,
  onOpen,
}: {
  content: LetterCopy;
  onOpen: () => void;
}) {
  const [dodges, setDodges] = useState(0);
  const gaveIn = dodges >= NUDGES.length;

  const dodge = () => setDodges((d) => Math.min(d + 1, NUDGES.length));

  const offset = gaveIn
    ? { x: 0, y: 0 }
    : { x: dodges % 2 === 0 ? 72 : -72, y: dodges === 0 ? 0 : (dodges % 3) * -18 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.97 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex flex-col items-center px-6 py-10 text-center"
    >
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Envelope />
      </motion.div>

      <h2 className="lp-display mt-8 text-xl leading-snug" style={{ color: "var(--lp-text)" }}>
        {content.question}
      </h2>

      <p className="mt-2 h-5 text-xs opacity-70">{dodges > 0 ? NUDGES[dodges - 1] : ""}</p>

      <div className="mt-7 flex w-full items-center justify-center gap-3">
        <button
          type="button"
          onClick={onOpen}
          className="lp-btn rounded-full px-7 py-3 text-sm font-medium"
        >
          {content.openButton}
        </button>
        <motion.button
          type="button"
          animate={offset}
          transition={{ type: "spring", stiffness: 320, damping: 16 }}
          onClick={gaveIn ? onOpen : dodge}
          onMouseEnter={() => !gaveIn && dodge()}
          className="lp-btn-ghost rounded-full px-6 py-3 text-sm"
        >
          {gaveIn ? content.openButton : content.notYetButton}
        </motion.button>
      </div>
    </motion.div>
  );
}
