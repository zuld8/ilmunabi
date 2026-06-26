import { ObjectData } from "../objects";

export const tinData: ObjectData = {
  slug: "tin",
  name: { id: "Tin", en: "Fig" },
  icon: "🪴", 
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Ficus carica",
  surahName: "At-Tin",
  surahReference: "95:1",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "تِين", latin: "Tīn", arti: "Buah Tin", artiEn: "Fig", contohAyat: "Demi buah Tin dan Zaitun." }
  ],
  balita: {
    text: { id: "Buah ini bentuknya bulat seperti bawang muda, tapi rasanya sangat manis dan teksturnya lembut! 🪴 Bijinya kecil-kecil dan bisa dimakan langsung.", en: "This fruit is round like a young onion, but it tastes very sweet and its texture is soft! 🪴 Its seeds are tiny and can be eaten directly." },
    audioTranscript: { id: "Buah tin itu empuk, manis, dan namanya ada di Al-Qur'an.", en: "The fig is soft, sweet, and its name is in the Quran." },
    quiz: {
      question: { id: "Apa rasa buah tin jika kita memakannya?", en: "What does a fig taste like if we eat it?" },
      options: [
        { text: { id: "Asam", en: "Sour" } },
        { text: { id: "Pedas", en: "Spicy" } },
        { text: { id: "Sangat manis", en: "Very sweet" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Buah Tin sangat istimewa karena Allah bersumpah menggunakan nama buah ini dalam surat At-Tin! Buah ini dijuluki buah surga karena di dalamnya tidak ada biji keras yang harus dibuang, semuanya bisa dimakan. Buah tin kaya akan kalsium yang bagus untuk tulangmu agar tumbuh tinggi dan kuat!", en: "The fig is very special because Allah swears by its name in Surah At-Tin! It is dubbed the fruit of heaven because there are no hard seeds inside to throw away, everything can be eaten. Figs are rich in calcium which is good for your bones to grow tall and strong!" },
    facts: [
      { id: "Satu surat penuh di dalam Al-Qur'an dinamai dengan nama buah ini: Surat At-Tin.", en: "One whole surah in the Quran is named after this fruit: Surah At-Tin." },
      { id: "Pohon tin adalah salah satu pohon pertama yang pernah ditanam oleh manusia di bumi.", en: "The fig tree is one of the first trees ever planted by humans on earth." },
      { id: "Buah tin yang dikeringkan akan menjadi lebih manis dan awet berbulan-bulan.", en: "Dried figs become sweeter and last for months." }
    ],
    quranVerse: {
      arabic: "وَالتِّينِ وَالزَّيْتُونِ",
      transliteration: "Wat-tīni waz-zaytūn",
      translation: { id: "Demi (buah) Tin dan (buah) Zaitun.", en: "By the fig and the olive." },
      context: { id: "Allah bersumpah demi buah tin, menunjukkan betapa besar berkah pada buah ini.", en: "Allah swears by the fig, showing how great the blessing in this fruit is." }
    },
    quiz: {
      question: { id: "Surat apa di dalam Al-Qur'an yang namanya diambil dari nama buah ini?", en: "Which surah in the Quran is named after this fruit?" },
      options: [
        { text: { id: "Surat Al-Baqarah (Sapi Betina)", en: "Surah Al-Baqarah (The Cow)" } },
        { text: { id: "Surat At-Tin", en: "Surah At-Tin" } },
        { text: { id: "Surat Al-Fatihah", en: "Surah Al-Fatihah" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Tahukah kamu bahwa buah tin sebenarnya bukanlah buah? Secara botani, tin adalah bunga yang terbalik! Bunga-bunganya mekar di dalam cangkang buah tertutup rapat. Untuk melakukan penyerbukan, Allah menugaskan seekor tawon kecil (tawon tin) yang merayap masuk ke dalam lubang sempit di ujung buah tin. Hubungan saling membutuhkan antara tawon tin dan pohon tin adalah contoh luar biasa ketelitian Sang Pencipta dalam merancang ekosistem.", en: "Did you know that the fig is actually not a fruit? Botanically, a fig is an inverted flower! The flowers bloom inside the tightly closed fruit shell. For pollination, Allah assigns a tiny wasp (fig wasp) that crawls into a narrow hole at the end of the fig. This mutually dependent relationship between the fig wasp and the fig tree is an extraordinary example of the Creator's precision in designing ecosystems." },
    anatomy: [
      { part: { id: "Syconium", en: "Syconium" }, desc: { id: "Struktur kantung tempat ribuan bunga mekar di bagian dalamnya.", en: "A pouch structure where thousands of flowers bloom on the inside." } },
      { part: { id: "Ostiole", en: "Ostiole" }, desc: { id: "Lubang kecil di ujung tin tempat tawon kecil masuk untuk penyerbukan.", en: "A tiny hole at the end of the fig where a small wasp enters for pollination." } }
    ],
    wowFactor: { id: "Setiap jenis pohon tin memiliki jenis spesies tawon tin-nya sendiri yang spesifik untuk membantunya. Mereka tidak bisa hidup tanpa satu sama lain!", en: "Every type of fig tree has its own specific fig wasp species to help it. They cannot live without each other!" },
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnā al-insāna fī aḥsani taqwīm",
      translation: { id: "Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." }
    },
    quiz: [
      {
        question: { id: "Secara ilmu botani (tanaman), buah tin sebenarnya adalah apa?", en: "In botany, what is a fig actually?" },
        options: [
          { text: { id: "Akar yang menggembung", en: "A swollen root" } },
          { text: { id: "Bunga yang terbalik dan mekar di bagian dalam", en: "An inverted flower blooming on the inside" } },
          { text: { id: "Jamur", en: "A mushroom" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
