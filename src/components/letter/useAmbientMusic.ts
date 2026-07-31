import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Gentle ambient music generated with the Web Audio API, so the gift needs
 * no external audio file. A slow arpeggio over a soft pad.
 */
const NOTES = [523.25, 587.33, 659.25, 783.99, 880.0, 783.99, 659.25, 587.33];

export function useAmbientMusic() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stepRef = useRef(0);

  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    gainRef.current?.gain.setTargetAtTime(0, ctxRef.current?.currentTime ?? 0, 0.2);
    setPlaying(false);
  }, []);

  const start = useCallback(() => {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    if (!ctxRef.current) {
      const ctx = new AC();
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      ctxRef.current = ctx;
      gainRef.current = master;
    }
    const ctx = ctxRef.current;
    const master = gainRef.current!;
    void ctx.resume();
    master.gain.setTargetAtTime(0.12, ctx.currentTime, 0.6);

    const playNote = () => {
      const t = ctx.currentTime;
      const freq = NOTES[stepRef.current % NOTES.length]!;
      stepRef.current += 1;
      [1, 2].forEach((mult, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = idx === 0 ? "sine" : "triangle";
        osc.frequency.value = freq * (idx === 0 ? 1 : 0.5) * mult * 0.5;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(idx === 0 ? 0.5 : 0.18, t + 0.35);
        g.gain.exponentialRampToValueAtTime(0.001, t + 2.6);
        osc.connect(g);
        g.connect(master);
        osc.start(t);
        osc.stop(t + 2.8);
      });
    };

    playNote();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(playNote, 1400);
    setPlaying(true);
  }, []);

  const toggle = useCallback(() => (playing ? stop() : start()), [playing, start, stop]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      void ctxRef.current?.close();
    };
  }, []);

  return { playing, start, stop, toggle };
}
