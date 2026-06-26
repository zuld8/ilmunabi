import { ObjectData } from "../objects";

export const pisangData: ObjectData = {
  slug: "pisang",
  name: { id: "Pisang", en: "Banana" },
  icon: "🍌",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Musa",
  surahName: "Al-Waqi'ah",
  surahReference: "56:29",
  unlockedAtPoints: 150,
  kosakata: [
    { arab: "مَوْزٌ", latin: "mawzun", arti: "Pisang", artiEn: "Banana", contohAyat: "Makan pisang pagi hari." }
  ],
  balita: {
    text: { id: "Kuning melengkung seperti senyuman! 🍌", en: "Yellow and curved like a smile! 🍌" },
    audioTranscript: { id: "Monyet sukaaa sekali makan pisang! Kita juga suka! Buah pisang empuk dan bikin perut kenyang. Jangan lupa kulitnya dibuang ke tempat sampah, ya!", en: "Monkeys reeeally love eating bananas! We love it too! Bananas are soft and make our tummy full. Don't forget to throw the peel in the trash!" },
    quiz: {
      question: { id: "Ke mana kulit pisang harus dibuang agar orang tidak terpeleset?", en: "Where should banana peels be thrown so people don't slip?" },
      options: [
        { text: { id: "Di lantai keramik", en: "On the ceramic floor" } },
        { text: { id: "Ke tempat sampah", en: "Into the trash can" } },
        { text: { id: "Di atas kasur", en: "On the bed" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Pohon pisang sebetulnya bukan pohon! Ia adalah herba (tanaman rumput) raksasa karena batangnya tidak berkayu. Batang pisang itu sebenarnya kumpulan daun yang berlapis-lapis erat.", en: "Did you know? Banana trees are actually not trees! They are giant herbs (grass plants) because their stems are not woody. Banana stems are actually tightly layered leaves." },
    facts: [
      { id: "Pisang mengandung kalium yang tinggi untuk memperkuat otot kita.", en: "Bananas contain high potassium to strengthen our muscles." },
      { id: "Pohon pisang hanya berbuah satu kali seumur hidup, lalu akan digantikan tunas baru.", en: "Banana trees only bear fruit once in their lifetime, then are replaced by new shoots." },
      { id: "Pisang secara alami mengandung bahan kimia yang bisa bikin kita merasa bahagia!", en: "Bananas naturally contain chemicals that can make us feel happy!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Buah pisang memiliki bungkus alami paling praktis, bersih, dan mudah dikupas di dunia. Allah menyebut pohon pisang yang buahnya bersusun-susun (Thalhin) sebagai salah satu kenikmatan di Surga kelak! Masya Allah, desain pisang sungguh bukti kemurahan Allah pada hamba-Nya.", en: "Bananas have the most practical, clean, and easily peelable natural packaging in the world. Allah mentions banana trees with layered fruits (Thalhin) as one of the delights in Paradise! Masya Allah, the design of a banana is truly proof of Allah's generosity to His servants." },
    quranVerse: {
      arabic: "وَطَلْحٍ مَنْضُودٍ",
      transliteration: "Wa ṭalḥin manḍūd",
      translation: { id: "Dan pohon pisang yang bersusun-susun (buahnya),", en: "And [banana] trees layered [with fruit]," }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
