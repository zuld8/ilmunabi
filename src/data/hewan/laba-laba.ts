import { ObjectData } from "../objects";

export const labaLabaData: ObjectData = {
  slug: "laba-laba",
  name: { id: "Laba-laba", en: "Spider" },
  icon: "🕷️",
  category: "hewan",
  type: "hewan",
  scientificName: "Araneae",
  surahName: "Al-'Ankabut",
  surahReference: "29:41",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "عَنْكَبُوتٌ", latin: "'ankabuutun", arti: "Laba-laba", artiEn: "Spider", contohAyat: "كَمَثَلِ الْعَنْكَبُوتِ (seperti perumpamaan laba-laba)" }
  ],
  balita: {
    text: { id: "Laba-laba punya 8 kaki! 🕷️ Dia suka membuat jaring yang lengket untuk menangkap nyamuk.", en: "Spiders have 8 legs! 🕷️ They love making sticky webs to catch mosquitoes." },
    audioTranscript: { id: "Halo! Aku laba-laba. Lihat jaringku, bentuknya seperti pola yang cantik. Aku menggunakan jaring ini untuk menangkap makananku.", en: "Hello! I am a spider. Look at my web, it is shaped like a beautiful pattern. I use this web to catch my food." },
    quiz: {
      question: { id: "Berapa jumlah kaki yang dimiliki laba-laba?", en: "How many legs does a spider have?" },
      options: [
        { text: { id: "Empat", en: "Four" } },
        { text: { id: "Enam", en: "Six" } },
        { text: { id: "Delapan", en: "Eight" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Benang laba-laba itu lebih kuat dari baja dengan ketebalan yang sama lho! Jaring mereka elastis dan bisa menjerat serangga besar. Masya Allah!", en: "Spider silk is stronger than steel of the same thickness! Their webs are elastic and can trap big insects. Mashallah!" },
    facts: [
      { id: "Laba-laba bukan serangga! Serangga punya 6 kaki, laba-laba punya 8 kaki. 🕷️", en: "Spiders are not insects! Insects have 6 legs, spiders have 8 legs. 🕷️" },
      { id: "Seekor laba-laba bisa membuat jaring baru setiap hari dalam waktu kurang dari satu jam! 🕸️", en: "A spider can make a new web every day in less than an hour! 🕸️" },
      { id: "Jaring laba-laba pernah menolong Nabi Muhammad SAW bersembunyi dari musuh di Gua Tsur! 🪨", en: "A spider's web once helped Prophet Muhammad SAW hide from enemies in the Cave of Thawr! 🪨" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Meskipun benang laba-laba sangat kuat, sarang laba-laba sebagai sebuah rumah sangat rapuh dan mudah hancur. Dalam Surah Al-'Ankabut, Allah menjadikan sarang laba-laba sebagai perumpamaan bagi orang-orang yang bergantung pada selain Allah. Tempat bergantung selain Allah itu sama lemahnya dengan sarang laba-laba yang mudah diterbangkan angin!", en: "Although spider silk is very strong, the spider's web as a house is very fragile and easily destroyed. In Surah Al-'Ankabut, Allah uses the spider's web as a parable for those who rely on protectors other than Allah. Protectors other than Allah are as weak as a spider's web that is easily blown by the wind!" },
    quranVerse: {
      arabic: "مَثَلُ الَّذِينَ اتَّخَذُوا مِنْ دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ الْعَنْكَبُوتِ اتَّخَذَتْ بَيْتًا ۖ وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ",
      transliteration: "Mathalulladhiinat-takhadhuu min duunillaahi awliyaa'a kamathalil-'ankabuut, ittakhadhat baitaa, wa inna awhanal-buyuuti labaitul-'ankabuut",
      translation: { id: "Perumpamaan orang-orang yang mengambil pelindung-pelindung selain Allah adalah seperti laba-laba yang membuat rumah. Dan sesungguhnya rumah yang paling lemah adalah rumah laba-laba.", en: "The example of those who take allies other than Allah is like that of the spider who takes a home. And indeed, the weakest of homes is the home of the spider." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
