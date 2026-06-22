import { ObjectData } from "../objects";

export const untaData: ObjectData = {
  slug: "unta",
  name: { id: "Unta", en: "Camel" },
  scientificName: "Camelus",
  surahName: "Al-Ghashiyah (17)",
  surahReference: "88:17",
  icon: "🐫",
  category: "Hewan Darat",
  type: "hewan",
  unlockedAtPoints: 150,
  kosakata: [
    {
      arab: "إِبِلٌ",
      latin: "Ibil",
      arti: "Unta",
      artiEn: "Camel",
      contohAyat: "Al-Ghashiyah 88:17",
      icon: "🐫"
    },
    {
      arab: "خُلِقَتْ",
      latin: "Khuliqat",
      arti: "Diciptakan",
      artiEn: "Created",
      contohAyat: "Al-Ghashiyah 88:17",
      icon: "✨"
    },
    {
      arab: "سَمَاءٌ",
      latin: "Samaa'",
      arti: "Langit",
      artiEn: "Sky",
      contohAyat: "Al-Ghashiyah 88:18",
      icon: "☁️"
    },
    {
      arab: "كَيْفَ",
      latin: "Kayfa",
      arti: "Bagaimana",
      artiEn: "How",
      contohAyat: "Al-Ghashiyah 88:17",
      icon: "❓"
    }
  ],
  balita: {
    text: {
      id: "Ini unta! Unta punya punuk besar di punggungnya untuk berjalan jauh di gurun pasir yang panas. 🐫",
      en: "This is a camel! Camels have big humps on their backs to travel far in the hot desert. 🐫",
    },
    audioTranscript: {
      id: "Ini unta! Unta punya punuk besar di punggungnya untuk berjalan jauh di gurun pasir yang panas.",
      en: "This is a camel! Camels have big humps on their backs to travel far in the hot desert.",
    },
    quiz: {
      question: {
        id: "Di manakah tempat tinggal alamiah unta?",
        en: "Where do camels naturally live?",
      },
      options: [
        { text: { id: "❄️ Kutub Es", en: "❄️ Snowy Poles" }, isImage: true },
        { text: { id: "🏜️ Gurun Pasir", en: "🏜️ Sandy Desert" }, isImage: true },
        { text: { id: "🌊 Laut Dalam", en: "🌊 Deep Sea" }, isImage: true },
      ],
      answerIdx: 1,
    },
  },
  anak: {
    text: {
      id: "Unta dijuluki 'kapal gurun' karena kekuatannya menyeberangi lautan pasir tanpa air.",
      en: "Camels are called 'ships of the desert' for their ability to cross hot sand oceans without water.",
    },
    facts: [
      {
        id: "Punuk unta tidak menyimpan air, melainkan lemak sebagai cadangan makanan.",
        en: "A camel's hump does not store water; it stores fat as an energy reserve.",
      },
      {
        id: "Unta bisa minum 200 liter air dalam 3 menit.",
        en: "A camel can drink up to 200 liters of water in just 3 minutes.",
      },
      {
        id: "Mereka memiliki kelopak mata ketiga transparan untuk melindungi dari badai pasir.",
        en: "They have a transparent third eyelid to shield their eyes during sandstorms.",
      },
    ],
    quranVerse: {
      arabic: "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
      transliteration: "Afalaa yanzuroona ilal ibili kaifa khuliqat",
      translation: {
        id: "Maka tidakkah mereka memperhatikan bagaimana unta diciptakan?",
        en: "Do they not look at the camels - how they are created?",
      },
    },
    quiz: {
      question: {
        id: "Apa isi sebenarnya dari punuk yang ada di punggung unta?",
        en: "What is actually stored inside a camel's hump?",
      },
      options: [
        { text: { id: "Air minum", en: "Drinking water" } },
        { text: { id: "Lemak cadangan makanan", en: "Fat food reserves" } },
        { text: { id: "Pasir gurun", en: "Desert sand" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Struktur fisiologi unta dirancang khusus untuk bertahan hidup di suhu ekstrem Gurun.",
      en: "A camel's physiological design is uniquely adapted to survive extreme desert climates.",
    },
    anatomy: [
      {
        part: { id: "Sel Darah Merah Oval", en: "Oval Red Blood Cells" },
        desc: { id: "Mampu mengembang hingga 240% tanpa pecah saat minum air dalam jumlah banyak.", en: "Can expand up to 240% of their size without bursting when rehydrating." },
      },
      {
        part: { id: "Kaki Lebar Berlapis", en: "Padded Feet" },
        desc: { id: "Kaki melebar mencegah terperosok ke dalam pasir panas yang gembur.", en: "Wide footpads that spread out to prevent sinking into loose, hot sand." },
      },
    ],
    wowFactor: {
      id: "Unta bisa minum 200 liter air dalam 3 menit. Punuk unta menyimpan lemak, bukan air — ilmu yang baru dipahami sains modern. Al-Ghashiyah 88:17 mengajak manusia untuk 'memperhatikan unta' sebagai tanda kebesaran Allah.",
      en: "Camels can drink 200 liters of water in 3 minutes. A camel's hump stores fat, not water — a detail modern science only recently fully understood. Al-Ghashiyah 88:17 invites mankind to 'look at the camels' as a sign of Allah's greatness.",
    },
    quranVerse: {
      arabic: "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
      transliteration: "Afalaa yanzuroona ilal ibili kaifa khuliqat",
      translation: {
        id: "Maka tidakkah mereka memperhatikan bagaimana unta diciptakan?",
        en: "Do they not look at the camels - how they are created?",
      },
      context: {
        id: "Ajakan mengamati unta mendahului langit dan gunung, karena bagi masyarakat Arab Gurun, unta adalah lambang vitalitas dan teknologi hidup tercanggih penakluk iklim keras.",
        en: "The invitation to observe camels precedes the sky and mountains, as they represent the ultimate living technology engineered to conquer hostile terrains.",
      },
    },
    quiz: {
      question: {
        id: "Apa keistimewaan sel darah merah unta dibanding mamalia lain?",
        en: "What makes camel red blood cells unique compared to other mammals?",
      },
      options: [
        { text: { id: "Bentuknya segitiga", en: "They are triangular" } },
        { text: { id: "Bentuknya oval dan elastis mengembang", en: "They are oval and highly stretchable" } },
        { text: { id: "Berwarna biru", en: "They are blue" } },
      ],
      answerIdx: 1,
    },
  },
};
