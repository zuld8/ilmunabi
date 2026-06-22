/**
 * IlmuNabi Mass Content Generator Script
 * 
 * Usage:
 *   node scripts/generate-content.js --name="Lumba-lumba" --slug="lumba-lumba" --category="hewan" --type="hewan"
 *   node scripts/generate-content.js --batch=list.json
 */

const fs = require('fs');
const path = require('path');

// Helper to parse arguments
function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach(val => {
    const parts = val.split('=');
    if (parts[0].startsWith('--')) {
      const key = parts[0].substring(2);
      args[key] = parts[1] || true;
    }
  });
  return args;
}

const args = parseArgs();

if (Object.keys(args).length === 0) {
  console.log(`
IlmuNabi Content Generator

Usage:
  node scripts/generate-content.js --name="Name" --slug="slug" --category="hewan|tumbuhan|alam|tubuh|langit|nabi|asmaul-husna" --type="hewan|tumbuhan|alam|tubuh|langit|nabi|asmaul-husna"

Example:
  node scripts/generate-content.js --name="Kucing" --slug="kucing" --category="hewan" --type="hewan"
  `);
  process.exit(0);
}

const name = args.name || "Contoh Objek";
const slug = args.slug || "contoh-objek";
const category = args.category || "hewan";
const type = args.type || "hewan";
const points = parseInt(args.points || "100", 10);

const targetDir = path.join(__dirname, '..', 'src', 'data', category);

// Make sure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetFile = path.join(targetDir, `${slug}.ts`);

if (fs.existsSync(targetFile)) {
  console.log(`[Warning] File already exists at: ${targetFile}. Skipping generation.`);
  process.exit(0);
}

let template = '';

if (type === 'nabi') {
  template = `import { NabiData } from "../objects";

export const ${slug.replace(/-([a-z])/g, g => g[1].toUpperCase())}Data: NabiData = {
  slug: "${slug}",
  name: {
    id: "${name}",
    en: "${name}",
  },
  icon: "🕌",
  category: "${category}",
  type: "nabi",
  unlockedAtPoints: ${points},
  storyShort: {
    id: "Kisah singkat tentang ${name}...",
    en: "Short story about ${name}...",
  },
  storyFull: {
    id: "Kisah mendalam tentang ${name}...",
    en: "Full story about ${name}...",
  },
  miracles: [
    { id: "Mukjizat pertama...", en: "First miracle..." }
  ],
  characterTraits: [
    {
      trait: { id: "Sabar", en: "Patience" },
      desc: { id: "Keterangan sifat sabar...", en: "Description of patience..." }
    }
  ],
  timeline: [
    {
      yearOrAge: "Awal",
      title: { id: "Kelahiran", en: "Birth" },
      desc: { id: "Keterangan masa awal...", en: "Description of early life..." }
    }
  ],
  dailyLifeConnection: {
    id: "Hubungan kisah dengan kehidupan sehari-hari anak...",
    en: "Connection of the story with children's daily life...",
  },
  surahReference: "Al-Qur'an",
};
`;
} else if (type === 'asmaul-husna') {
  template = `import { AsmaulHusnaData } from "../objects";

export const ${slug.replace(/-([a-z])/g, g => g[1].toUpperCase())}Data: AsmaulHusnaData = {
  slug: "${slug}",
  name: {
    id: "${name}",
    en: "${name}",
  },
  icon: "🌟",
  category: "${category}",
  type: "asmaul-husna",
  unlockedAtPoints: ${points},
  arabicWithHarakat: "الْأَسْمَاءُ",
  transliteration: "${name}",
  meaning: {
    id: "Arti nama...",
    en: "Meaning of name...",
  },
  explanationForKids: {
    id: "Penjelasan makna nama untuk anak...",
    en: "Meaning explanation for kids...",
  },
  realLifeExample: {
    id: "Contoh dalam kehidupan sehari-hari...",
    en: "Example in daily life...",
  },
  connectedObjectSlugs: [],
};
`;
} else {
  // Scientific types: hewan, tumbuhan, alam, tubuh, langit
  template = `import { ObjectData } from "../objects";

export const ${slug.replace(/-([a-z])/g, g => g[1].toUpperCase())}Data: ObjectData = {
  slug: "${slug}",
  name: {
    id: "${name}",
    en: "${name}",
  },
  scientificName: "${name}",
  surahName: "Al-Qur'an",
  surahReference: "1:1",
  icon: "✨",
  category: "${category}",
  type: "${type}",
  unlockedAtPoints: ${points},
  kosakata: [
    { arab: "كِتَابٌ", latin: "Kitab", arti: "Buku/Kitab", artiEn: "Book" }
  ],
  balita: {
    text: {
      id: "Ini ${name}! Ciptaan Allah yang indah. ✨",
      en: "This is ${name}! A beautiful creation of Allah. ✨",
    },
    audioTranscript: {
      id: "Ini ${name}. Allah menciptakan ${name} dengan sangat baik.",
      en: "This is ${name}. Allah created ${name} very well.",
    },
    quiz: {
      question: {
        id: "Mana gambar ${name}?",
        en: "Which one is ${name}?",
      },
      options: [
        { text: { id: "✨ ${name}", en: "✨ ${name}" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta sains tentang ${name} untuk usia anak-anak...",
      en: "Scientific facts about ${name} for kids...",
    },
    facts: [
      { id: "Fakta menarik 1...", en: "Interesting fact 1..." },
      { id: "Fakta menarik 2...", en: "Interesting fact 2..." }
    ],
    quranVerse: {
      arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      transliteration: "Bismillāhir-rahmānir-rahīm",
      translation: {
        id: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
        en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      },
    },
    quiz: {
      question: {
        id: "Pertanyaan kuis untuk anak...",
        en: "Quiz question for kids...",
      },
      options: [
        { text: { id: "Pilihan A", en: "Option A" } },
        { text: { id: "Pilihan B", en: "Option B" } },
      ],
      answerIdx: 0,
    },
  },
  explorer: {
    text: {
      id: "Penjelasan mendalam tentang ${name} untuk usia explorer...",
      en: "In-depth scientific explanation of ${name} for explorers...",
    },
    anatomy: [
      {
        part: { id: "Bagian Tubuh/Struktur", en: "Part/Structure" },
        desc: { id: "Penjelasan fungsi...", en: "Function explanation..." },
      },
    ],
    wowFactor: {
      id: "Koneksi sains-Islam yang mengejutkan tentang ${name}...",
      en: "Awe-inspiring science-Islam connection about ${name}...",
    },
    quranVerse: {
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillah",
      translation: {
        id: "Dengan nama Allah",
        en: "In the name of Allah",
      },
      context: {
        id: "Konteks ayat Quran...",
        en: "Quranic verse context...",
      },
    },
    quiz: [
      {
        question: {
          id: "Pertanyaan kuis explorer...",
          en: "Quiz question for explorer...",
        },
        options: [
          { text: { id: "Pilihan A", en: "Option A" } },
          { text: { id: "Pilihan B", en: "Option B" } },
        ],
        answerIdx: 0,
      },
    ],
  },
};
`;
}

fs.writeFileSync(targetFile, template, 'utf8');
console.log(`[Success] Template generated successfully at: ${targetFile}`);
console.log(`Don't forget to import this file in src/data/objects.ts to aggregate it!`);
