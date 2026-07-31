import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Envelope } from "./Envelope";

export function EnvelopeAnimation({ onDone }: { onDone: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const a = setTimeout(() => setOpen(true), 120);
    const b = setTimeout(onDone, 1250);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center px-6 py-16"
    >
      <div className="relative">
        <Envelope open={open} />
        {open &&
          [0, 1, 2, 3, 4, 5].map((i) => (
            <motion.span
              key={i}
              className="absolute left-1/2 top-1/2 text-sm"
              style={{ color: "var(--lp-primary)" }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
              animate={{
                opacity: [0, 1, 0],
                x: (i - 2.5) * 34,
                y: -70 - (i % 3) * 22,
                scale: 1,
              }}
              transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
              aria-hidden="true"
            >
              {i % 2 ? "\u2727" : "\u2661"}
            </motion.span>
          ))}
      </div>
      <p className="mt-10 text-xs uppercase tracking-[0.3em] opacity-60">opening...</p>
    </motion.div>
  );
}
