import { ObjectData } from "../objects";

export const kudaData: ObjectData = {
  slug: "kuda",
  name: { id: "Kuda", en: "Horse" },
  icon: "🐎",
  category: "hewan",
  type: "hewan",
  scientificName: "Equus caballus",
  surahName: "Al-'Adiyat",
  surahReference: "100:1-2",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "حِصَانٌ", latin: "hisaanun", arti: "Kuda", artiEn: "Horse", contohAyat: "وَالْعَادِيَاتِ ضَبْحًا (Demi kuda perang yang berlari kencang terengah-engah)" }
  ],
  balita: {
    text: { id: "Tuk tik tak tik tuk! 🐎 Kuda berlari sangat cepat. Rambut di lehernya panjang dan indah!", en: "Clip clop clip clop! 🐎 Horses run very fast. The hair on their neck is long and beautiful!" },
    audioTranscript: { id: "Hai! Aku kuda. Kakiku ada empat dan sangat kuat untuk berlari kencang. Ayo balapan denganku!", en: "Hi! I am a horse. I have four legs and they are very strong for running fast. Let's race with me!" },
    quiz: {
      question: { id: "Apa kehebatan utama yang dimiliki oleh kuda?", en: "What is the main strength of a horse?" },
      options: [
        { text: { id: "Berenang di laut", en: "Swimming in the sea" } },
        { text: { id: "Berlari sangat cepat", en: "Running very fast" } },
        { text: { id: "Memanjat pohon", en: "Climbing trees" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kuda bisa tidur sambil berdiri lho! Mereka punya sistem pengunci khusus di kakinya agar tidak jatuh. Wah, hebat ya ciptaan Allah!", en: "Horses can sleep while standing! They have a special locking system in their legs so they don't fall. Wow, Allah's creation is amazing!" },
    facts: [
      { id: "Kuda bisa melihat hampir 360 derajat karena matanya berada di samping kepala! 👁️", en: "Horses can see almost 360 degrees because their eyes are on the sides of their head! 👁️" },
      { id: "Jantung kuda beratnya bisa mencapai 4 sampai 5 kilogram! ❤️", en: "A horse's heart can weigh up to 4 to 5 kilograms! ❤️" },
      { id: "Nabi Muhammad SAW sangat menyukai olahraga berkuda! 🏇", en: "Prophet Muhammad SAW really loved the sport of horseback riding! 🏇" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kuda adalah simbol kekuatan, keberanian, dan kesetiaan. Dalam Surah Al-'Adiyat, Allah bahkan bersumpah demi kuda-kuda perang yang berlari kencang hingga memercikkan api dari pijakan kakinya! Ini menunjukkan betapa istimewanya kuda dalam membantu perjuangan umat manusia sepanjang sejarah.", en: "Horses are a symbol of strength, bravery, and loyalty. In Surah Al-'Adiyat, Allah even swears by the war horses running so fast that they strike sparks of fire from their hooves! This shows how special horses are in assisting human struggles throughout history." },
    quranVerse: {
      arabic: "وَالْعَادِيَاتِ ضَبْحًا ۝ فَالْمُورِيَاتِ قَدْحًا",
      transliteration: "Wal 'aadiyaati dabhaa ۝ Fal muuriyaati qadhaa",
      translation: { id: "Demi kuda perang yang berlari kencang terengah-engah, dan kuda yang memercikkan bunga api (dengan pukulan kuku kakinya).", en: "By the racing horses, panting, and the producers of sparks [when] striking." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
