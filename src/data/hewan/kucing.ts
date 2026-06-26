import { ObjectData } from "../objects";

export const kucingData: ObjectData = {
  slug: "kucing",
  name: { id: "Kucing", en: "Cat" },
  icon: "🐈",
  category: "hewan",
  type: "hewan",
  scientificName: "Felis catus",
  surahName: "Hadits Riwayat Bukhari",
  surahReference: "Kisah Kucing",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "قِطَّةٌ", latin: "qittatun", arti: "Kucing", artiEn: "Cat", contohAyat: "Kucing adalah hewan kesayangan." }
  ],
  balita: {
    text: { id: "Meoong! 🐈 Kucing punya bulu yang lembut dan suka bermanja-manja. Lucu ya!", en: "Meow! 🐈 Cats have soft fur and love to cuddle. So cute!" },
    audioTranscript: { id: "Halo, aku kucing. Aku suka dielus-elus dan tidur di tempat yang hangat. Purrr...", en: "Hello, I am a cat. I love being pet and sleeping in warm places. Purrr..." },
    quiz: {
      question: { id: "Suara apa yang kucing keluarkan saat dia merasa senang?", en: "What sound does a cat make when it feels happy?" },
      options: [
        { text: { id: "Guk guk", en: "Woof woof" } },
        { text: { id: "Purrr (mendengkur)", en: "Purrr" } },
        { text: { id: "Moo", en: "Moo" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kucing selalu jatuh dengan kakinya karena refleks khususnya lho! Mereka juga sangat bersih dan punya lidah seperti sikat untuk menyisir bulu. Masya Allah!", en: "Cats always land on their feet because of their special reflex! They are also very clean and have a brush-like tongue to comb their fur. Mashallah!" },
    facts: [
      { id: "Kucing menghabiskan 70% dari hidupnya hanya untuk tidur! 💤", en: "Cats spend 70% of their lives just sleeping! 💤" },
      { id: "Hidung kucing memiliki pola unik seperti sidik jari manusia, tidak ada yang sama! 👃", en: "A cat's nose has a unique pattern like a human fingerprint, no two are the same! 👃" },
      { id: "Kumis kucing berfungsi seperti antena untuk mengukur jarak benda di malam hari! 📡", en: "Cat whiskers act like antennas to measure the distance of objects at night! 📡" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Dalam Islam, kucing adalah hewan yang sangat istimewa dan suci (tidak najis). Sahabat Nabi yang paling banyak meriwayatkan hadits bernama 'Abu Hurairah', yang artinya 'Bapaknya Kucing Kecil', karena beliau sangat menyayangi kucing. Rasulullah SAW mengajarkan kita untuk menyayangi semua hewan dan tidak boleh menyiksanya.", en: "In Islam, cats are very special and pure animals (not ritually impure). The Prophet's companion who narrated the most hadiths was named 'Abu Hurairah', which means 'Father of the Little Cat', because he loved cats so much. Prophet Muhammad SAW taught us to love all animals and never torture them." },
    quranVerse: {
      arabic: "إِنَّهَا لَيْسَتْ بِنَجَسٍ إِنَّهَا مِنَ الطَّوَّافِينَ عَلَيْكُمْ وَالطَّوَّافَاتِ",
      transliteration: "Innaha laisat binajasin innaha minat tawwafeena 'alaikum wat tawwaafaat",
      translation: { id: "Kucing itu tidak najis. Ia adalah termasuk hewan yang selalu berkeliaran di sekelilingmu (HR. Abu Dawud).", en: "Cats are not impure. They are among the animals that roam around you (Sunan Abi Dawud)." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
