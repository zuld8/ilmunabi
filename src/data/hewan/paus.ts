import { ObjectData } from "../objects";

export const pausData: ObjectData = {
  slug: "paus",
  name: { id: "Paus", en: "Whale" },
  icon: "🐳",
  category: "hewan",
  type: "hewan",
  scientificName: "Cetacea",
  surahName: "As-Saffat",
  surahReference: "37:142",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "حُوتٌ", latin: "huut", arti: "Paus / Ikan Besar", artiEn: "Whale / Big Fish", contohAyat: "فَالْتَقَمَهُ الْحُوتُ (Maka ia ditelan oleh ikan besar/paus)" }
  ],
  balita: {
    text: { id: "Wusss! 🐳 Paus itu suangat besar! Dia suka menyemburkan air dari kepalanya. Brrrrr!", en: "Whoosh! 🐳 Whales are sooo big! They love spouting water from their heads. Brrrrr!" },
    audioTranscript: { id: "Halo, aku ikan paus! Aku adalah hewan terbesar di lautan. Aku bernapas menyemburkan air ke atas lho!", en: "Hello, I am a whale! I am the biggest animal in the ocean. I breathe by spouting water up in the air!" },
    quiz: {
      question: { id: "Dari mana paus menyemburkan air?", en: "Where do whales spout water from?" },
      options: [
        { text: { id: "Dari mulutnya", en: "From their mouth" } },
        { text: { id: "Dari ekornya", en: "From their tail" } },
        { text: { id: "Dari lubang di atas kepalanya", en: "From a hole on top of their head" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Jantung Paus Biru itu sebesar mobil, dan lidahnya seberat gajah! Meskipun mereka tinggal di air, paus itu mamalia lho, jadi mereka bernapas pakai paru-paru, bukan insang!", en: "Did you know? A Blue Whale's heart is the size of a car, and its tongue is as heavy as an elephant! Even though they live in water, whales are mammals, so they breathe with lungs, not gills!" },
    facts: [
      { id: "Paus bisa bernyanyi! Lagu mereka bisa terdengar sejauh ribuan kilometer di bawah laut! 🎶", en: "Whales can sing! Their songs can be heard for thousands of kilometers underwater! 🎶" },
      { id: "Nabi Yunus pernah ditelan oleh paus raksasa atas izin Allah, dan beliau selamat! 🐋", en: "Prophet Yunus was swallowed by a giant whale by Allah's permission, and he survived! 🐋" },
      { id: "Paus tidak tidur seperti kita, mereka mematikan separuh otak mereka secara bergantian agar tidak tenggelam! 💤", en: "Whales don't sleep like we do, they shut down half of their brain at a time so they don't drown! 💤" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Allah menciptakan paus sebagai raksasa lautan yang lembut. Kisah Nabi Yunus AS sangat menakjubkan. Saat beliau melompat ke laut, Allah memerintahkan seekor ikan paus (Hut) untuk menelannya tanpa melukai tulang dan dagingnya. Di dalam perut paus yang gelap, Nabi Yunus berdoa memohon ampun, dan Allah memerintahkan paus untuk mengeluarkannya dengan selamat!", en: "Allah created whales as gentle giants of the ocean. The story of Prophet Yunus AS is amazing. When he jumped into the sea, Allah commanded a whale (Hut) to swallow him without harming his bones or flesh. Inside the dark belly of the whale, Prophet Yunus prayed for forgiveness, and Allah commanded the whale to release him safely!" },
    quranVerse: {
      arabic: "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ",
      transliteration: "Faltaqamahul huutu wahuwa muliim",
      translation: { id: "Maka dia ditelan oleh ikan besar dalam keadaan tercela (melakukan kesalahan).", en: "Then the whale swallowed him, while he was blameworthy." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
