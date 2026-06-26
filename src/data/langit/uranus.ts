import { ObjectData } from "../objects";

export const uranusData: ObjectData = {
  slug: "uranus",
  name: { id: "Uranus", en: "Uranus" },
  icon: "💠",
  category: "langit",
  type: "langit",
  scientificName: "Uranus",
  surahName: "An-Nahl",
  surahReference: "16:12",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "مُسَخَّرَات", latin: "Musakhkharat", arti: "Dundukkan / Dikendalikan", artiEn: "Subjected / Controlled", contohAyat: "Planet-planet tunduk pada perintah Allah" }
  ],
  balita: {
    text: { id: "Hahaha, lihat planet Uranus! Dia berputar dengan posisi miring, seperti bola yang sedang menggelinding ke samping! ⚽❄️", en: "Hahaha, look at planet Uranus! It spins on a tilt, like a ball rolling sideways! ⚽❄️" },
    audioTranscript: { id: "Ini planet biru muda yang dingin bernama Uranus. Saking miringnya, dia berputar seperti menggelinding rebahan lho! Unik sekali ciptaan Allah ini.", en: "This is a cold light blue planet called Uranus. It's so tilted, it spins like it's rolling on its side! What a unique creation of Allah." },
    quiz: {
      question: { id: "Bagaimana cara planet Uranus berputar?", en: "How does planet Uranus spin?" },
      options: [
        { text: { id: "Berdiri tegak", en: "Standing straight" } },
        { text: { id: "Miring sambil menggelinding ke samping", en: "Tilted and rolling sideways" } },
        { text: { id: "Lompat-lompat", en: "Jumping up and down" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Uranus adalah Raksasa Es yang sangat dingin. Karena dia berputar miring (hampir 90 derajat!), salah satu kutubnya menghadap matahari terus menerus selama puluhan tahun!", en: "Uranus is a very cold Ice Giant. Because it spins on a tilt (almost 90 degrees!), one of its poles faces the sun continuously for decades!" },
    facts: [
      { id: "Satu musim (seperti musim panas atau dingin) di Uranus lamanya bisa sampai 21 tahun Bumi! 🥶", en: "One season (like summer or winter) on Uranus can last up to 21 Earth years! 🥶" },
      { id: "Seperti Saturnus, Uranus sebenarnya juga punya cincin tipis yang melingkarinya.", en: "Like Saturn, Uranus actually also has thin rings circling it." },
      { id: "Uranus adalah planet pertama yang ditemukan menggunakan teleskop.", en: "Uranus was the first planet discovered using a telescope." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kalau kamu ke Uranus, kamu akan mencium bau telur busuk yang sangat menyengat! HAH?! Ya, awan atas Uranus penuh dengan gas Hidrogen Sulfida (gas kentut/telur busuk). Keunikan dan ketundukan setiap planet dengan ciri khasnya masing-masing adalah bukti pengaturan Allah. 1400 tahun lalu, Al-Qur'an menegaskan bahwa bulan, bintang, dan planet ditundukkan beredar dengan perintah-Nya.", en: "If you went to Uranus, you would smell incredibly pungent rotten eggs! HAH?! Yes, Uranus' upper clouds are full of Hydrogen Sulfide gas (fart/rotten egg gas). The uniqueness and subjection of each planet with its own characteristics is proof of Allah's arrangement. 1400 years ago, the Quran affirmed that the sun, moon, stars, and planets are subjected to orbit by His command." },
    quranVerse: {
      arabic: "وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ وَالشَّمْسَ وَالْقَمَرَ ۖ وَالنُّجُومُ مُسَخَّرَاتٌ بِأَمْرِهِ",
      transliteration: "Wa sakhkhara lakumul-layla wan-nahāra wash-shamsa wal-qamar, wan-nujūmu musakhkharātum bi'amrih",
      translation: { id: "Dan Dia menundukkan malam dan siang, matahari dan bulan untukmu. Dan bintang-bintang itu ditundukkan (untukmu) dengan perintah-Nya.", en: "And He has subjected for you the night and day and the sun and moon, and the stars are subjected by His command." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
