import { lebahData } from "./hewan/lebah";
import { semutData } from "./hewan/semut";
import { labalabaData } from "./hewan/laba-laba";
import { untaData } from "./hewan/unta";
import { nyamukData } from "./hewan/nyamuk";
import { gajahData } from "./hewan/gajah";
import { lalatData } from "./hewan/lalat";
import { hudhudData } from "./hewan/hudhud";
import { pausData } from "./hewan/paus";
import { kudaData } from "./hewan/kuda";
import { kurmaData } from "./tumbuhan/kurma";
import { zaitunData } from "./tumbuhan/zaitun";
import { tinData } from "./tumbuhan/tin";

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

export interface ObjectData {
  slug: string;
  name: Translation;
  scientificName: string;
  surahName: string;
  surahReference: string;
  icon: string;
  category: string;
  type: "hewan" | "tumbuhan";
  unlockedAtPoints: number;
  kosakata?: KosakataItem[];
  balita: {
    text: Translation;
    audioTranscript: Translation;
    quiz: Quiz;
  };
  anak: {
    text: Translation;
    facts: Translation[];
    quranVerse: QuranVerse;
    quiz: Quiz;
  };
  explorer: {
    text: Translation;
    anatomy: AnatomyDetail[];
    wowFactor: Translation;
    quranVerse: QuranVerse;
    quiz: Quiz | Quiz[];
  };
}

export const objectsData: ObjectData[] = [
  lebahData,
  semutData,
  labalabaData,
  untaData,
  nyamukData,
  gajahData,
  lalatData,
  hudhudData,
  pausData,
  kudaData,
  kurmaData,
  zaitunData,
  tinData,
];
