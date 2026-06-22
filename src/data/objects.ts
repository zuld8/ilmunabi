// Import Hewan
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

// Import Tumbuhan
import { kurmaData } from "./tumbuhan/kurma";
import { zaitunData } from "./tumbuhan/zaitun";
import { tinData } from "./tumbuhan/tin";

// Import Alam & Fenomena
import { matahariData } from "./alam/matahari";
import { lautData } from "./alam/laut";

// Import Tubuh Manusia
import { jantungData } from "./tubuh/jantung";
import { sidikJariData } from "./tubuh/sidik-jari";

// Import Kisah Nabi
import { adamData } from "./nabi/adam";
import { nuhData } from "./nabi/nuh";

// Import Asmaul Husna
import { alKhaliqData } from "./asmaul-husna/al-khaliq";
import { arRahmanData } from "./asmaul-husna/ar-rahman";

// Import Luar Angkasa
import { bulanData } from "./langit/bulan";
import { bumiData } from "./langit/bumi";

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
  miracles: Translation[];
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

export const objectsData: LearningObject[] = [
  // Hewan
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

  // Tumbuhan
  kurmaData,
  zaitunData,
  tinData,

  // Alam
  matahariData,
  lautData,

  // Tubuh
  jantungData,
  sidikJariData,

  // Nabi
  adamData,
  nuhData,

  // Asmaul Husna
  alKhaliqData,
  arRahmanData,

  // Langit
  bulanData,
  bumiData,
];
