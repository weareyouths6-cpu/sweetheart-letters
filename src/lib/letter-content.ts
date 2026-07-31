import coverDefault from "@/assets/cover-default.jpg";
import letterDefault from "@/assets/letter-default.jpg";

export type FontChoice = "romantic" | "handwritten" | "soft";
export type DecorStyle = "mixed" | "hearts" | "flowers" | "sparkles" | "none";

export type LetterCopy = {
  girlfriendName: string;
  senderName: string;
  greeting: string;
  subtitle: string;
  question: string;
  startButton: string;
  openButton: string;
  notYetButton: string;
  letterTitle: string;
  letterBody: string;
  finalMessage: string;
  coverImage: string;
  letterImage: string;
  gallery: string[];
};

export type Appearance = {
  primary: string;
  background: string;
  text: string;
  border: string;
  font: FontChoice;
  decorations: DecorStyle;
};

export type AdminCredentials = { email: string; password: string };

export type LetterData = {
  content: LetterCopy;
  appearance: Appearance;
  admin: AdminCredentials;
};

export const FONT_STACKS: Record<FontChoice, { display: string; body: string }> = {
  romantic: {
    display: "'Playfair Display', Georgia, serif",
    body: "'Quicksand', system-ui, sans-serif",
  },
  handwritten: {
    display: "'Caveat', cursive",
    body: "'Caveat', 'Quicksand', cursive",
  },
  soft: {
    display: "'Quicksand', system-ui, sans-serif",
    body: "'Quicksand', system-ui, sans-serif",
  },
};

export const DEFAULT_DATA: LetterData = {
  content: {
    girlfriendName: "My Love",
    senderName: "Yours, always",
    greeting: "Happy National Girlfriend Day & 2 years 11 months Anniversary",
    subtitle: "Click the button below... I made something for you \u2661",
    question: "Do you want to open it? (\uff61\u2022\u0301\u203f\u2022\u0300\uff61)",
    startButton: "Start \u2661",
    openButton: "Open \u2661",
    notYetButton: "Not yet",
    letterTitle: "Dear my love \u2661",
    letterBody:
      "Happy National Girlfriend Day, my love. ❤️\n\n2 years and 11 months of us — and through every moment, I’ve learned that love isn’t just about the happy days, but about choosing each other through everything.\n\nThank you for being a part of my life and for making these years so meaningful. Almost 3 years, and I’d still choose you, in every lifetime.\n\nI love you, always. ❤️",
    finalMessage: "HAPPY NATIONAL GIRLFRIEND DAY & 2 YEARS 11 MONTHS ANNIVERSARY \u2661",
    coverImage: coverDefault,
    letterImage: letterDefault,
    gallery: [],
  },
  appearance: {
    primary: "#ef7fa4",
    background: "#fff3f6",
    text: "#5c3a45",
    border: "#f7c6d5",
    font: "romantic",
    decorations: "mixed",
  },
  admin: { email: "admin@loveletter.com", password: "admin123" },
};

const STORAGE_KEY = "love-letter-data-v1";

function merge(saved: Partial<LetterData> | null): LetterData {
  if (!saved) return DEFAULT_DATA;
  return {
    content: { ...DEFAULT_DATA.content, ...(saved.content ?? {}) },
    appearance: { ...DEFAULT_DATA.appearance, ...(saved.appearance ?? {}) },
    admin: { ...DEFAULT_DATA.admin, ...(saved.admin ?? {}) },
  };
}

export function loadData(): LetterData {
  if (typeof window === "undefined") return DEFAULT_DATA;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return merge(raw ? (JSON.parse(raw) as Partial<LetterData>) : null);
  } catch {
    return DEFAULT_DATA;
  }
}

export function saveData(data: LetterData) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota exceeded - ignore */
  }
}

export function clearData() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
