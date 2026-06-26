import { ObjectData } from "../objects";

export const jupiterData: ObjectData = {
  slug: "jupiter",
  name: { id: "Jupiter", en: "Jupiter" },
  icon: "🪐",
  category: "langit",
  type: "langit",
  scientificName: "Jupiter",
  surahName: "Al-Infitar",
  surahReference: "82:1-2",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "كَوْكَب", latin: "Kawkab", arti: "Planet", artiEn: "Planet", contohAyat: "Planet terbesar di tata surya kita" }
  ],
  balita: {
    text: { id: "Wusss! Ini Jupiter, si Raksasa Gas! Dia planet paling gedeee di tata surya kita lho! 🎈", en: "Whoosh! This is Jupiter, the Gas Giant! It's the biiiggest planet in our solar system! 🎈" },
    audioTranscript: { id: "Lihat planet besar ini, namanya Jupiter! Garis-garis warnanya itu sebenarnya awan badai. Allah membuatnya sangat besar dan cantik sekali.", en: "Look at this big planet, it's called Jupiter! Those colorful stripes are actually storm clouds. Allah made it very big and extremely beautiful." },
    quiz: {
      question: { id: "Apakah kita bisa berdiri di planet Jupiter?", en: "Can we stand on planet Jupiter?" },
      options: [
        { text: { id: "Bisa, seperti di Bumi", en: "Yes, like on Earth" } },
        { text: { id: "Tidak bisa, karena dia terbuat dari gas!", en: "No, because it's made of gas!" } },
        { text: { id: "Bisa, kalau bawa payung", en: "Yes, if you bring an umbrella" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Jupiter dijuluki Raja Planet karena ukurannya yang super besar. 1.300 planet Bumi bisa muat dimasukkan ke dalam Jupiter!", en: "Jupiter is nicknamed the King of Planets because of its super huge size. 1,300 Earths could fit inside Jupiter!" },
    facts: [
      { id: "Ada badai raksasa di Jupiter bernama 'Bintik Merah Besar' yang sudah berputar selama ratusan tahun! 🌪️", en: "There's a giant storm on Jupiter called the 'Great Red Spot' that has been spinning for hundreds of years! 🌪️" },
      { id: "Meskipun besar, waktu sehari di Jupiter sangat cepat, hanya butuh 10 jam! Pusing deh berputarnya kencang sekali.", en: "Even though it's huge, a day on Jupiter is very short, taking only 10 hours! Dizzying how fast it spins." },
      { id: "Jupiter punya lebih dari 90 bulan yang mengelilinginya!", en: "Jupiter has more than 90 moons orbiting it!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Jupiter bukan sekadar planet gas, tapi ia adalah perisai raksasa bagi Bumi! HAH?! Gravitasi Jupiter yang sangat masif menarik komet dan asteroid bahaya ke arahnya sehingga tidak menabrak Bumi! Subhanallah, desain tata surya sangat teliti. 1400 tahun lalu, Al-Qur'an mengajarkan kita merenungi penciptaan benda-benda langit yang memiliki orbit dan fungsi penjagaan yang sempurna.", en: "Jupiter isn't just a gas planet, it's a giant shield for Earth! HAH?! Jupiter's massive gravity pulls dangerous comets and asteroids towards it so they don't crash into Earth! Subhanallah, the solar system's design is highly precise. 1400 years ago, the Quran taught us to reflect on the creation of celestial bodies with perfect orbits and guarding functions." },
    quranVerse: {
      arabic: "وَجَعَلْنَا السَّمَاءَ سَقْفًا مَحْفُوظًا ۖ وَهُمْ عَنْ آيَاتِهَا مُعْرِضُونَ",
      transliteration: "Wa ja'alnas-samā'a saqfam maḥfūẓā, wa hum 'an āyātihā mu'riḍūn",
      translation: { id: "Dan Kami menjadikan langit itu sebagai atap yang terpelihara, sedang mereka berpaling dari segala tanda-tanda (kekuasaan Allah) yang terdapat padanya.", en: "And We made the sky a protected ceiling, but they, from its signs, are turning away." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
