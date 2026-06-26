import { ObjectData } from "../objects";

export const nebulaKepitingData: ObjectData = {
  slug: "nebula-kepiting",
  name: { id: "Nebula Kepiting", en: "Crab Nebula" },
  icon: "🦀",
  category: "langit",
  type: "langit",
  scientificName: "Messier 1",
  surahName: "Al-Infitar",
  surahReference: "82:1",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "سَرَطَان", latin: "Sarathaan", arti: "Kepiting", artiEn: "Crab", contohAyat: "-" },
    { arab: "إِنْفِطَار", latin: "Infithaar", arti: "Terbelah", artiEn: "Cleaving", contohAyat: "إِذَا السَّمَاءُ انْفَطَرَتْ" },
    { arab: "نَجْمٌ", latin: "Najmun", arti: "Bintang", artiEn: "Star", contohAyat: "وَٱلنَّجْمِ إِذَا هَوَىٰ" },
    { arab: "نُورٌ", latin: "Nuurun", arti: "Cahaya", artiEn: "Light", contohAyat: "نُورٌ عَلَىٰ نُورٍ" }
  ],

  balita: {
    text: {
      id: "Wah, ada kepiting raksasa di luar angkasa! Nebula ini bentuknya mirip cangkang kepiting yang menyala terang. Ini adalah sisa kembang api bintang yang meledak zaman dulu. Ciptaan Allah sangat menakjubkan!",
      en: "Wow, there's a giant crab in space! This nebula looks like a glowing crab shell. It's the leftovers of a star firework that exploded long ago. Allah's creation is amazing!"
    },
    audioTranscript: {
      id: "Nebula kepiting adalah awan cantik sisa ledakan bintang besar!",
      en: "The Crab Nebula is a beautiful cloud from a big star's explosion!"
    },
    quiz: {
      question: { id: "Nebula ini mirip hewan apa?", en: "What animal does this nebula look like?" },
      options: [
        { text: { id: "Kepiting", en: "Crab" } },
        { text: { id: "Kucing", en: "Cat" } },
        { text: { id: "Ikan", en: "Fish" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Nebula Kepiting bukan tempat lahirnya bintang, tapi justru kuburan bintang! Ratusan tahun lalu, ada bintang masif yang meledak (Supernova) dan menyisakan awan gas bersinar yang terus menyebar sampai sekarang.",
      en: "The Crab Nebula is not a stellar nursery, but a star's graveyard! Hundreds of years ago, a massive star exploded (Supernova) and left behind a glowing gas cloud that is still expanding today."
    },
    facts: [
      { id: "Manusia pertama melihat ledakan ini pada tahun 1054 masehi.", en: "Humans first saw this explosion in the year 1054 AD." },
      { id: "Meledak sangat terang, bisa dilihat siang hari selama hampir sebulan!", en: "Exploded so brightly, it could be seen during the day for almost a month!" },
      { id: "Berisi gas beracun yang cantik bercahaya.", en: "Contains beautiful glowing toxic gas." },
      { id: "Di tengahnya ada bintang mati yang berputar super cepat.", en: "At its center is a dead star spinning super fast." },
      { id: "Angin dari bintang memancarkan cahaya biru terang.", en: "The stellar wind emits a bright blue light." }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Apabila langit terbelah... (Al-Infitar: 1)", en: "When the sky breaks apart... (Al-Infitar: 1)" }
    },
    quiz: {
      question: { id: "Kapan ledakan Nebula Kepiting pertama kali terlihat dari Bumi?", en: "When was the Crab Nebula explosion first seen from Earth?" },
      options: [
        { text: { id: "Tahun 1054", en: "Year 1054" } },
        { text: { id: "Kemarin sore", en: "Yesterday afternoon" } },
        { text: { id: "Belum pernah terlihat", en: "Never seen" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Nebula Kepiting (Crab Nebula) adalah Sisa Supernova (Supernova Remnant). Menariknya, di pusatnya terdapat Bintang Neutron kecil yang ukurannya hanya sebesar kota tapi massanya seberat Matahari! Bintang Neutron ini berputar 30 kali setiap detik (disebut Pulsar), mengirimkan pancaran radiasi bagai mercusuar kosmik raksasa. Kekuasaan Allah meruntuhkan bintang besar menjadi sekecil debu yang sangat berat!",
      en: "The Crab Nebula is a Supernova Remnant. Interestingly, at its center lies a small Neutron Star the size of a city but weighing as much as the Sun! This Neutron Star spins 30 times a second (called a Pulsar), emitting beams of radiation like a giant cosmic lighthouse. Allah's power collapsed a massive star into incredibly heavy dust!"
    },
    anatomy: [
      { part: { id: "Pulsar Pusat", en: "Central Pulsar" }, desc: { id: "Bintang berputar sangat cepat memancarkan energi.", en: "A rapidly spinning star emitting energy." } },
      { part: { id: "Filamen Gas", en: "Gas Filaments" }, desc: { id: "Sisa ledakan yang membentuk tentakel kepiting.", en: "Explosion leftovers forming the crab tentacles." } }
    ],
    wowFactor: {
      id: "Satu sendok teh bahan dari bintang di tengah nebula ini beratnya sama dengan 900 Piramida Giza!",
      en: "A teaspoon of material from the star at the center of this nebula weighs as much as 900 Giza Pyramids!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Demi langit dan yang datang pada malam hari, tahukah kamu apakah yang datang pada malam hari itu? (Yaitu) bintang yang cahayanya menembus... (At-Tariq: 1-3)", en: "By the sky and the night comer - And what can make you know what is the night comer? It is the piercing star... (At-Tariq: 1-3)" }
    },
    quiz: [
      {
        question: { id: "Benda super berat dan berputar cepat di tengah Nebula Kepiting disebut apa?", en: "What is the super heavy, fast-spinning object in the center of the Crab Nebula called?" },
        options: [
          { text: { id: "Bintang Jatuh", en: "Shooting Star" } },
          { text: { id: "Pulsar (Bintang Neutron)", en: "Pulsar (Neutron Star)" } },
          { text: { id: "Komet", en: "Comet" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Seberapa berat satu sendok teh dari bintang neutron tersebut?", en: "How heavy is a teaspoon of that neutron star?" },
        options: [
          { text: { id: "Sama dengan sekapas", en: "Same as a cotton" } },
          { text: { id: "Sama dengan 900 Piramida", en: "Same as 900 Pyramids" } },
          { text: { id: "Sama dengan satu gajah", en: "Same as one elephant" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Berapa kali bintang pulsar ini berputar dalam satu detik?", en: "How many times does this pulsar spin in one second?" },
        options: [
          { text: { id: "1 kali", en: "1 time" } },
          { text: { id: "30 kali", en: "30 times" } },
          { text: { id: "1000 kali", en: "1000 times" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
