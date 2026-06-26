import { ObjectData } from "../objects";

export const nebulaCincinData: ObjectData = {
  slug: "nebula-cincin",
  name: { id: "Nebula Cincin", en: "Ring Nebula" },
  icon: "🪐",
  category: "langit",
  type: "langit",
  scientificName: "Messier 57",
  surahName: "Ar-Rahman",
  surahReference: "55:37",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "وَرْدَةٌ", latin: "Wardatun", arti: "Mawar", artiEn: "Rose", contohAyat: "فَكَانَتْ وَرْدَةً كَالدِّهَانِ" },
    { arab: "خَاتَمٌ", latin: "Khaatamun", arti: "Cincin", artiEn: "Ring", contohAyat: "خَاتَمَ النَّبِيِّينَ" },
    { arab: "أَحْمَرُ", latin: "Ahmaru", arti: "Merah", artiEn: "Red", contohAyat: "حُمْرٌ مُّخْتَلِفٌ أَلْوَانُهَا" },
    { arab: "سَمَاءٌ", latin: "Samaa'un", arti: "Langit", artiEn: "Sky", contohAyat: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ" }
  ],

  balita: {
    text: {
      id: "Wah, ada cincin donat warna-warni melayang di luar angkasa! Atau mirip bunga mawar merah yang cantik. Allah menciptakan perhiasan di langit yang sangat besar!",
      en: "Wow, there's a colorful donut ring floating in space! Or it looks like a beautiful red rose. Allah created giant jewelry in the sky!"
    },
    audioTranscript: {
      id: "Nebula Cincin terlihat seperti donat bercahaya. Subhanallah indahnya!",
      en: "The Ring Nebula looks like a glowing donut. Subhanallah how beautiful!"
    },
    quiz: {
      question: { id: "Bentuk Nebula ini seperti apa?", en: "What does this Nebula look like?" },
      options: [
        { text: { id: "Cincin donat", en: "Donut ring" } },
        { text: { id: "Mobil pemadam", en: "Fire truck" } },
        { text: { id: "Kucing", en: "Cat" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Berbeda dari Nebula Kepiting, Nebula Cincin berasal dari bintang seukuran matahari kita yang sekarat. Alih-alih meledak kencang, bintang ini menghembuskan gas secara perlahan seperti meniup balon sabun merah menyala yang indah!",
      en: "Unlike the Crab Nebula, the Ring Nebula comes from a dying star the size of our sun. Instead of exploding violently, this star gently puffs out gas like blowing a beautiful glowing red soap bubble!"
    },
    facts: [
      { id: "Jarak Nebula Cincin sekitar 2.000 tahun cahaya dari bumi.", en: "The Ring Nebula is about 2,000 light years away from Earth." },
      { id: "Warnanya merah di pinggir, biru kehijauan di tengah.", en: "Its colors are red on the edge, bluish-green in the middle." },
      { id: "Jika dilihat dari samping, sebenarnya bentuknya memanjang seperti tong!", en: "If seen from the side, it's actually elongated like a barrel!" },
      { id: "Di pusatnya terdapat bintang kerdil putih yang panas.", en: "At its center is a hot white dwarf star." },
      { id: "Gas ini menyebar dengan kecepatan 69 ribu km/jam.", en: "The gas is expanding at 69 thousand km/h." }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Maka apabila langit telah terbelah dan menjadi merah mawar seperti (kilapan) minyak. (Ar-Rahman: 37)", en: "And when the heaven is split open and becomes rose-colored like oil. (Ar-Rahman: 37)" }
    },
    quiz: {
      question: { id: "Warna apa yang ada di pinggiran Nebula Cincin?", en: "What color is on the edge of the Ring Nebula?" },
      options: [
        { text: { id: "Merah", en: "Red" } },
        { text: { id: "Hitam", en: "Black" } },
        { text: { id: "Coklat tanah", en: "Mud brown" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Nebula Cincin adalah jenis 'Planetary Nebula'. Ini adalah nasib yang akan dialami Matahari kita kelak di masa depan. Gas terluar bintang terlepas, bersinar merah akibat radiasi dari Bintang Kerdil Putih (White Dwarf) super panas di pusatnya. Fakta Al-Qur'an: Al-Qur'an mendeskripsikan akhir tata surya/bintang dengan istilah 'Mawar Merah seperti kilapan minyak' (Ar-Rahman:37), dan luar biasanya, citra satelit NASA untuk planetary nebula ini benar-benar terlihat persis seperti bunga mawar merah raksasa bercahaya!",
      en: "The Ring Nebula is a 'Planetary Nebula'. This is the exact fate our Sun will face in the distant future. The star's outer gas peels off, glowing red due to radiation from a super-hot White Dwarf star at its center. Quran Fact: The Quran describes the end of stars/heavens as 'a red rose like shining oil' (Ar-Rahman:37), and incredibly, NASA's satellite imagery of this planetary nebula looks exactly like a giant glowing red rose!"
    },
    anatomy: [
      { part: { id: "Kerdil Putih", en: "White Dwarf" }, desc: { id: "Sisa inti bintang yang memancarkan UV tinggi.", en: "Star core remnant emitting high UV." } },
      { part: { id: "Cincin Merah", en: "Red Ring" }, desc: { id: "Gas nitrogen murni bercampur hidrogen.", en: "Pure nitrogen gas mixed with hydrogen." } }
    ],
    wowFactor: {
      id: "Meskipun terlihat kecil, cincin ini 500 kali lebih besar dari seluruh Tata Surya kita!",
      en: "Although it looks small, this ring is 500 times larger than our entire Solar System!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Maka apabila langit telah terbelah dan menjadi merah mawar seperti (kilapan) minyak. (Ar-Rahman: 37)", en: "And when the heaven is split open and becomes rose-colored like oil. (Ar-Rahman: 37)" }
    },
    quiz: [
      {
        question: { id: "Bintang jenis apa yang ada di pusat Nebula Cincin?", en: "What type of star is at the center of the Ring Nebula?" },
        options: [
          { text: { id: "Bintang Raksasa Merah", en: "Red Giant Star" } },
          { text: { id: "Bintang Kerdil Putih (White Dwarf)", en: "White Dwarf Star" } },
          { text: { id: "Bintang Laut", en: "Starfish" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Menurut Al-Qur'an surat Ar-Rahman, langit yang hancur/terbelah akan berwarna seperti apa?", en: "According to Surah Ar-Rahman, what color will the split heaven look like?" },
        options: [
          { text: { id: "Putih susu", en: "Milky white" } },
          { text: { id: "Merah mawar seperti minyak", en: "Rose-colored like oil" } },
          { text: { id: "Hitam legam", en: "Pitch black" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Seberapa besar cincin di nebula ini dibandingkan Tata Surya kita?", en: "How big is the ring in this nebula compared to our Solar System?" },
        options: [
          { text: { id: "Lebih kecil sedikit", en: "Slightly smaller" } },
          { text: { id: "500 kali lebih besar", en: "500 times larger" } },
          { text: { id: "Sama besar", en: "Same size" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
