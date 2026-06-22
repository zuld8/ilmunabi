export interface Translation {
  id: string;
  en: string;
}

export interface QuizOption {
  text: Translation;
  isImage?: boolean;
}

export interface Quiz {
  question: Translation;
  options: QuizOption[];
  answerIdx: number;
}

export interface AnatomyDetail {
  part: Translation;
  desc: Translation;
}

export interface QuranVerse {
  arabic: string;
  transliteration: string;
  translation: Translation;
  audioUrl?: string;
  context?: Translation;
}

export interface KosakataItem {
  arab: string;
  latin: string;
  arti: string;
  artiEn: string;
  contohAyat?: string;
  icon?: string;
}

export interface BaseObject {
  slug: string;
  name: Translation;
  icon: string;
  category: string;
  type: "hewan" | "tumbuhan" | "alam" | "tubuh" | "langit" | "nabi" | "asmaul-husna";
  unlockedAtPoints: number;
}

export interface ObjectData extends BaseObject {
  type: "hewan" | "tumbuhan" | "alam" | "tubuh" | "langit";
  scientificName: string;
  surahName: string;
  surahReference: string;
  kosakata?: KosakataItem[];
  balita: {
    text: Translation;
    audioTranscript: Translation;
    quiz: Quiz | Quiz[];
  };
  anak: {
    text: Translation;
    facts: Translation[];
    quranVerse: QuranVerse;
    quiz: Quiz | Quiz[];
  };
  explorer: {
    text: Translation;
    anatomy: AnatomyDetail[];
    wowFactor: Translation;
    quranVerse: QuranVerse;
    quiz: Quiz | Quiz[];
  };
}

export interface NabiTimelineEvent {
  yearOrAge: string;
  title: Translation;
  desc: Translation;
}

export interface NabiData extends BaseObject {
  type: "nabi";
  storyShort: Translation;
  storyFull: Translation;
  miracles: { id: string; en: string }[];
  characterTraits: {
    trait: Translation;
    desc: Translation;
  }[];
  timeline: NabiTimelineEvent[];
  dailyLifeConnection: Translation;
  surahReference: string;
}

export interface AsmaulHusnaData extends BaseObject {
  type: "asmaul-husna";
  arabicWithHarakat: string;
  transliteration: string;
  meaning: Translation;
  explanationForKids: Translation;
  realLifeExample: Translation;
  connectedObjectSlugs: string[];
}

export type LearningObject = ObjectData | NabiData | AsmaulHusnaData;
