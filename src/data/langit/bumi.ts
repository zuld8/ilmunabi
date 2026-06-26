import { ObjectData } from "../objects";

export const bumiData: ObjectData = {
  slug: "bumi",
  name: { id: "Bumi", en: "Earth" },
  icon: "🌍",
  category: "langit",
  type: "langit",
  scientificName: "Terra",
  surahName: "Taha",
  surahReference: "20:53",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "أَرْض", latin: "Ardh", arti: "Bumi", artiEn: "Earth", contohAyat: "Allah menciptakan langit dan bumi" }
  ],
  balita: {
    text: { id: "Halo Bumi! Ini adalah rumah kita yang berwarna biru dan hijau. Penuh dengan air, hewan, dan tanaman! 🏡💧", en: "Hello Earth! This is our blue and green home. Full of water, animals, and plants! 🏡💧" },
    audioTranscript: { id: "Ini planet Bumi! Satu-satunya tempat yang punya udara segar untuk kita bernapas. Allah membuat Bumi sangat nyaman agar kita bisa bermain dan belajar setiap hari.", en: "This is planet Earth! The only place that has fresh air for us to breathe. Allah made Earth so cozy so we can play and learn every day." },
    quiz: {
      question: { id: "Warna biru di Bumi itu apa ya?", en: "What is the blue color on Earth?" },
      options: [
        { text: { id: "Langit-langitan", en: "Ceiling" } },
        { text: { id: "Laut dan Samudra", en: "Sea and Ocean" } },
        { text: { id: "Permen karet", en: "Bubblegum" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bumi adalah planet ketiga dari matahari. Posisinya sangat pas lho, tidak terlalu panas dan tidak terlalu dingin. Sempurna untuk kehidupan!", en: "Earth is the third planet from the sun. Its position is just right, not too hot and not too cold. Perfect for life!" },
    facts: [
      { id: "Bumi berputar pada sumbunya dengan kecepatan 1.600 km/jam! Tapi kita tidak merasa pusing, kan?", en: "Earth spins on its axis at 1,600 km/hour! But we don't feel dizzy, do we?" },
      { id: "Sekitar 71% permukaan Bumi tertutup oleh air! Sisanya adalah daratan tempat kita tinggal.", en: "About 71% of Earth's surface is covered by water! The rest is land where we live." },
      { id: "Bumi punya perisai tak terlihat bernama medan magnet yang melindungi kita dari angin matahari berbahaya! 🛡️", en: "Earth has an invisible shield called a magnetic field that protects us from dangerous solar winds! 🛡️" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Bumi berada di 'Goldilocks Zone', area presisi di tata surya di mana air bisa berwujud cair. HAH?! Atmosfer bumi tidak hanya memberi oksigen, tapi juga membakar meteor yang jatuh, melindungi kita seperti atap yang kokoh! 1400 tahun lalu, Al-Qur'an sudah menyebutkan bahwa Allah menjadikan bumi sebagai hamparan dan tempat yang nyaman serta langit sebagai atap yang terpelihara.", en: "Earth is in the 'Goldilocks Zone', a precise area in the solar system where water can exist as a liquid. HAH?! Earth's atmosphere doesn't just provide oxygen, but also burns falling meteors, protecting us like a solid roof! 1400 years ago, the Quran already mentioned that Allah made the earth a resting place and a comfortable home, and the sky a protected roof." },
    quranVerse: {
      arabic: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا وَسَلَكَ لَكُمْ فِيهَا سُبُلًا وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً",
      transliteration: "Alladhī ja'ala lakumul-arḍa mahdan wa salaka lakum fīhā subulan wa anzala minas-samā'i mā'an",
      translation: { id: "Tuhan yang telah menjadikan bumi sebagai hamparan bagimu, dan menjadikan jalan-jalan di atasnya untukmu, dan yang menurunkan air (hujan) dari langit.", en: "[It is He] who has made for you the earth as a bed [spread out] and inserted therein for you roadways and sent down from the sky, rain." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
