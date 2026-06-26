import { ObjectData } from "../objects";

export const venusData: ObjectData = {
  slug: "venus",
  name: { id: "Venus", en: "Venus" },
  icon: "✨",
  category: "langit",
  type: "langit",
  scientificName: "Venus",
  surahName: "Al-An'am",
  surahReference: "6:76",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "أَفَلَ", latin: "Afala", arti: "Tenggelam / Hilang", artiEn: "Set / Disappear", contohAyat: "Bintang yang muncul terang lalu tenggelam" }
  ],
  balita: {
    text: { id: "Wah, cahaya apa yang terang sekali di waktu fajar? Itu planet Venus! Bintang Kejora yang sangat bersinar namun sangat puanas! 🔥⭐", en: "Wow, what is that very bright light at dawn? It's planet Venus! The Morning Star that shines so bright but is incredibly hoooot! 🔥⭐" },
    audioTranscript: { id: "Venus itu sering disebut Bintang Kejora, padahal dia adalah planet! Dia planet paling terang dan paling panas karena ditutupi awan tebal ciptaan Allah.", en: "Venus is often called the Morning Star, even though it's a planet! It's the brightest and hottest planet because it's covered by thick clouds created by Allah." },
    quiz: {
      question: { id: "Meski terang seperti bintang, Venus sebenarnya adalah...", en: "Even though it's bright like a star, Venus is actually a..." },
      options: [
        { text: { id: "Planet", en: "Planet" } },
        { text: { id: "Pesawat UFO", en: "UFO spaceship" } },
        { text: { id: "Lampu senter", en: "Flashlight" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Meskipun Merkurius paling dekat dengan Matahari, planet yang PALING PANAS adalah Venus! Awan tebal di Venus mengurung panas seperti oven raksasa.", en: "Even though Mercury is closest to the Sun, the HOTTEST planet is Venus! Thick clouds on Venus trap heat like a giant oven." },
    facts: [
      { id: "Suhu di Venus bisa mencapai 470°C. Cukup panas untuk melelehkan logam timah! 🌡️", en: "The temperature on Venus can reach 470°C. Hot enough to melt lead metal! 🌡️" },
      { id: "Venus berputar berlawanan arah dengan Bumi. Jadi matahari di sana terbit dari barat!", en: "Venus spins in the opposite direction of Earth. So the sun there rises in the west!" },
      { id: "Satu hari di Venus lebih panjang daripada satu tahun di Venus (orbitnya mengelilingi matahari)!", en: "One day on Venus is longer than one year on Venus (its orbit around the sun)!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Di planet Venus, awannya terbentuk dari asam sulfat korosif, dan hujannya bisa melarutkan logam! HAH?! Benar, inilah Efek Rumah Kaca yang ekstrim. Kisah pencarian Tuhan oleh Nabi Ibrahim juga dimulai dengan melihat bintang terang (diyakini Venus). Saat bintang itu tenggelam, beliau sadar benda langit yang hilang bukanlah Tuhan. 1400 tahun lalu, Al-Qur'an merekam pencarian logis Nabi Ibrahim ini.", en: "On planet Venus, clouds are made of corrosive sulfuric acid, and its rain can dissolve metal! HAH?! True, this is an extreme Greenhouse Effect. The story of Prophet Abraham's search for God also began by observing a bright star (believed to be Venus). When it set, he realized celestial bodies that disappear are not God. 1400 years ago, the Quran recorded this logical search by Prophet Abraham." },
    quranVerse: {
      arabic: "فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا ۖ قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ",
      transliteration: "Falammā janna 'alayhil-laylu ra'ā kawkabā, qāla hādhā rabbī, falammā afala qāla lā uḥibbul-āfilīn",
      translation: { id: "Ketika malam telah gelap, dia melihat sebuah bintang (lalu) dia berkata: 'Inilah Tuhanku', tetapi tatkala bintang itu tenggelam dia berkata: 'Saya tidak suka kepada yang tenggelam'.", en: "So when the night covered him [with darkness], he saw a star. He said, 'This is my lord.' But when it set, he said, 'I like not those that disappear.'" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
