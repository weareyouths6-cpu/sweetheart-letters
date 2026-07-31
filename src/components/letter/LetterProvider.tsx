import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_DATA,
  FONT_STACKS,
  loadData,
  saveData,
  type Appearance,
  type LetterCopy,
  type LetterData,
} from "@/lib/letter-content";

type Ctx = {
  data: LetterData;
  hydrated: boolean;
  updateContent: (patch: Partial<LetterCopy>) => void;
  updateAppearance: (patch: Partial<Appearance>) => void;
  updateAdmin: (patch: Partial<LetterData["admin"]>) => void;
  reset: () => void;
  persist: () => void;
};

const LetterContext = createContext<Ctx | null>(null);

export function LetterProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<LetterData>(DEFAULT_DATA);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setData(loadData());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveData(data);
  }, [data, hydrated]);

  const updateContent = useCallback((patch: Partial<LetterCopy>) => {
    setData((d) => ({ ...d, content: { ...d.content, ...patch } }));
  }, []);
  const updateAppearance = useCallback((patch: Partial<Appearance>) => {
    setData((d) => ({ ...d, appearance: { ...d.appearance, ...patch } }));
  }, []);
  const updateAdmin = useCallback((patch: Partial<LetterData["admin"]>) => {
    setData((d) => ({ ...d, admin: { ...d.admin, ...patch } }));
  }, []);
  const reset = useCallback(() => setData(DEFAULT_DATA), []);
  const persist = useCallback(() => saveData(data), [data]);

  const value = useMemo(
    () => ({ data, hydrated, updateContent, updateAppearance, updateAdmin, reset, persist }),
    [data, hydrated, updateContent, updateAppearance, updateAdmin, reset, persist],
  );

  return <LetterContext.Provider value={value}>{children}</LetterContext.Provider>;
}

export function useLetter() {
  const ctx = useContext(LetterContext);
  if (!ctx) throw new Error("useLetter must be used inside LetterProvider");
  return ctx;
}

export function appearanceStyle(a: Appearance): React.CSSProperties {
  const fonts = FONT_STACKS[a.font];
  return {
    "--lp-primary": a.primary,
    "--lp-bg": a.background,
    "--lp-text": a.text,
    "--lp-border": a.border,
    "--lp-font-display": fonts.display,
    "--lp-font-body": fonts.body,
  } as React.CSSProperties;
}
