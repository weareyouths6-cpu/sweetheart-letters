import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { appearanceStyle, useLetter } from "./LetterProvider";
import { FloatingDecor } from "./FloatingDecor";
import { WelcomeScreen } from "./WelcomeScreen";
import { QuestionScreen } from "./QuestionScreen";
import { EnvelopeAnimation } from "./EnvelopeAnimation";
import { LetterScreen } from "./LetterScreen";
import { FinalScreen } from "./FinalScreen";
import { CustomizationPanel } from "./CustomizationPanel";
import { useAmbientMusic } from "./useAmbientMusic";

const STEPS = ["welcome", "question", "opening", "letter", "final"] as const;
type Step = (typeof STEPS)[number];

export function LetterExperience({
  showChrome = true,
  className = "",
}: {
  showChrome?: boolean;
  className?: string;
}) {
  const { data } = useLetter();
  const [step, setStep] = useState<Step>("welcome");
  const [panelOpen, setPanelOpen] = useState(false);
  const music = useAmbientMusic();

  const go = useCallback(
    (next: Step) => {
      setStep(next);
      if (!music.playing) music.start();
    },
    [music],
  );

  const goToLetter = useCallback(() => setStep("letter"), []);

  return (
    <div
      className={`lp-root relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-8 ${className}`}
      style={{ ...appearanceStyle(data.appearance), background: "var(--lp-bg)" }}
    >
      <FloatingDecor style={data.appearance.decorations} />

      {showChrome && (
        <button
          type="button"
          onClick={music.toggle}
          aria-label={music.playing ? "Turn music off" : "Turn music on"}
          className="lp-btn-ghost absolute right-4 top-4 z-20 h-10 w-10 rounded-full text-sm"
        >
          {music.playing ? "\u266a" : "\u2715"}
        </button>
      )}

      <div className="relative z-10 w-full max-w-[24rem]">
        <div className="lp-card overflow-hidden rounded-[2rem]">
          <AnimatePresence mode="wait">
            {step === "welcome" && (
              <WelcomeScreen
                key="welcome"
                content={data.content}
                onStart={() => go("question")}
              />
            )}
            {step === "question" && (
              <QuestionScreen
                key="question"
                content={data.content}
                onOpen={() => go("opening")}
              />
            )}
            {step === "opening" && <EnvelopeAnimation key="opening" onDone={goToLetter} />}
            {step === "letter" && (
              <LetterScreen key="letter" content={data.content} onNext={() => go("final")} />
            )}
            {step === "final" && (
              <FinalScreen
                key="final"
                content={data.content}
                onReplay={() => setStep("welcome")}
              />
            )}
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5" aria-hidden="true">
          {STEPS.map((s) => (
            <span
              key={s}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: s === step ? 18 : 6,
                background:
                  s === step
                    ? "var(--lp-primary)"
                    : "color-mix(in srgb, var(--lp-primary) 30%, transparent)",
              }}
            />
          ))}
        </div>

        {showChrome && (
          <div className="mt-5 flex items-center justify-center gap-4 text-xs opacity-70">
            <button
              type="button"
              onClick={() => setPanelOpen(true)}
              className="underline-offset-4 hover:underline"
            >
              
            </button>
            <span aria-hidden="true">{"\u00b7"}</span>
            <Link to="/admin" className="underline-offset-4 hover:underline">
              
            </Link>
          </div>
        )}
      </div>

      {showChrome && <CustomizationPanel open={panelOpen} onOpenChange={setPanelOpen} />}
    </div>
  );
}
