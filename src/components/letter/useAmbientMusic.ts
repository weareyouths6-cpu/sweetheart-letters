import { useCallback, useEffect, useRef, useState } from "react";

export function useAmbientMusic() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const start = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio("/sounds/Ed Sheeran - Photograph.mp3");
      audio.loop = true; // keep playing
      audio.volume = 0.3; // 30% volume
      audioRef.current = audio;
    }

    void audioRef.current.play();
    setPlaying(true);
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) {
      stop();
    } else {
      start();
    }
  }, [playing, start, stop]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return {
    playing,
    start,
    stop,
    toggle,
  };
}