import { ObjectData } from "../objects";

export const kucingData: ObjectData = {
  slug: "kucing",
  name: { id: "Kucing", en: "Cat" },
  icon: "🐱",
  category: "mamalia",
  type: "hewan",
  scientificName: "Felis catus",
  surahName: "Al-Ghashiyah",
  surahReference: "88:17",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "قِطَّة", latin: "Qittah", arti: "Kucing", artiEn: "Cat", contohAyat: "Kasih sayangilah makhluk di bumi, niscaya yang di langit akan menyayangimu." }
  ],
  balita: {
    text: { id: "Meoow! Halo, aku kucing yang manis! Aku suka dielus dan diajak bermain bola benang! 🧶", en: "Meoow! Hello, I am a sweet cat! I love to be petted and play with balls of yarn! 🧶" },
    audioTranscript: { id: "Meow! Kalau aku senang, aku akan mengeluarkan suara purr... purr...", en: "Meow! When I am happy, I will make a purring sound... purr..." },
    quiz: {
      question: { id: "Suara apa yang kucing keluarkan saat merasa senang?", en: "What sound does a cat make when it feels happy?" },
      options: [
        { text: { id: "Auman keras", en: "Loud roar" } },
        { text: { id: "Gonggongan", en: "Barking" } },
        { text: { id: "Dengkuran (Purr)", en: "Purring" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Kucing adalah hewan kesayangan Nabi Muhammad SAW! Nabi punya seekor kucing bernama Muezza. Kucing adalah hewan yang sangat bersih dan selalu menjilat bulunya untuk mandi.", en: "Cats are the beloved animal of Prophet Muhammad SAW! The Prophet had a cat named Muezza. Cats are very clean animals and always lick their fur to take a bath." },
    facts: [
      { id: "Kucing bisa tidur selama 12 hingga 16 jam sehari!", en: "Cats can sleep for 12 to 16 hours a day!" },
      { id: "Hidung setiap kucing memiliki pola unik, persis seperti sidik jari manusia.", en: "Every cat's nose has a unique pattern, just like human fingerprints." },
      { id: "Kucing berjalan berjinjit agar langkahnya sangat sunyi saat mengintai mainan.", en: "Cats walk on their tiptoes so their steps are very silent when stalking toys." }
    ],
    quranVerse: {
      arabic: "ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
      transliteration: "Irhamu man fil ardi yarhamkum man fis-sama'.",
      translation: { id: "Sayangilah siapa yang ada di bumi, niscaya Dzat yang ada di langit akan menyayangimu. (Hadits Riwayat Tirmidzi)", en: "Have mercy on those on earth, and the One in heaven will have mercy on you. (Hadith Tirmidhi)" },
      context: { id: "Islam mengajarkan kita untuk menyayangi hewan, terutama kucing yang hidup berdampingan dengan kita.", en: "Islam teaches us to love animals, especially cats that live alongside us." }
    },
    quiz: {
      question: { id: "Siapa nama kucing kesayangan Nabi Muhammad SAW?", en: "What is the name of Prophet Muhammad SAW's beloved cat?" },
      options: [
        { text: { id: "Muezza", en: "Muezza" } },
        { text: { id: "Garfiel", en: "Garfield" } },
        { text: { id: "Milo", en: "Milo" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Lidah kucing terasa kasar seperti amplas! Itu karena lidahnya dipenuhi ribuan duri kecil (papila) yang menghadap ke belakang. Duri ini membantu mereka menyisir bulu dan membersihkan tubuhnya secara sempurna.", en: "A cat's tongue feels rough like sandpaper! That's because it is covered with thousands of tiny backward-facing spines (papillae). These spines help them comb their fur and clean their body perfectly." },
    anatomy: [
      { part: { id: "Lidah Berduri (Papila)", en: "Spiky Tongue (Papillae)" }, desc: { id: "Sikat alami untuk membersihkan bulu dari debu rontok.", en: "A natural brush to clean fur from loose dirt." } },
      { part: { id: "Kumis (Vibrissae)", en: "Whiskers (Vibrissae)" }, desc: { id: "Sensor super sensitif untuk mengukur ruang sempit dan merasakan pergerakan udara.", en: "Super sensitive sensors to measure narrow spaces and feel air movement." } }
    ],
    wowFactor: { id: "Saat kucing jatuh, mereka memiliki 'Righting Reflex' ajaib. Mereka bisa memutar tubuh di udara agar selalu mendarat dengan kakinya dengan selamat!", en: "When cats fall, they have a magical 'Righting Reflex'. They can twist their body in the air to always land safely on their feet!" },
    quranVerse: {
      arabic: "وَمَا مِنْ دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا",
      transliteration: "Wa ma min dabbatin fil-ardi illa 'alallahi rizquha.",
      translation: { id: "Dan tidak ada suatu binatang melata pun di bumi melainkan Allah-lah yang memberi rezekinya.", en: "And there is no creature on earth but that upon Allah is its provision." }
    },
    quiz: [
      {
        question: { id: "Mengapa lidah kucing terasa sangat kasar?", en: "Why does a cat's tongue feel very rough?" },
        options: [
          { text: { id: "Karena ada duri kecil yang menghadap belakang", en: "Because there are tiny backward-facing spines" } },
          { text: { id: "Karena mereka suka makan batu", en: "Because they like to eat stones" } },
          { text: { id: "Karena mereka haus", en: "Because they are thirsty" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
