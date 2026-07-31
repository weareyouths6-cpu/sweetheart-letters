import { motion } from "motion/react";
import type { LetterCopy } from "@/lib/letter-content";

export function WelcomeScreen({ content, onStart }: { content: LetterCopy; onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.97 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex flex-col items-center px-6 py-9 text-center"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="h-32 w-32 overflow-hidden rounded-full border-4"
          style={{ borderColor: "var(--lp-border)" }}
        >
          <img
            src={content.coverImage}
            alt={`A photo for ${content.girlfriendName}`}
            className="h-full w-full object-cover"
            width={800}
            height={800}
          />
        </div>
        <span
          className="absolute -right-1 -top-1 text-2xl"
          style={{ color: "var(--lp-primary)" }}
          aria-hidden="true"
        >
          {"\u2661"}
        </span>
      </motion.div>

      <p
        className="mt-6 text-[0.65rem] uppercase tracking-[0.3em]"
        style={{ color: "var(--lp-primary)" }}
      >
        for {content.girlfriendName}
      </p>

      <h1
        className="lp-display mt-2 text-2xl leading-snug tracking-wide sm:text-3xl"
        style={{ color: "var(--lp-text)" }}
      >
        {content.greeting}
      </h1>

      <p className="mt-3 max-w-[16rem] text-sm opacity-75">{content.subtitle}</p>

      <button
        type="button"
        onClick={onStart}
        className="lp-btn mt-8 w-full rounded-full px-8 py-3.5 text-base font-medium"
      >
        {content.startButton}
      </button>
    </motion.div>
  );
}
