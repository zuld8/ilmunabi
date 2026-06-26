import { ObjectData } from "../objects";

export const lubangHitamM87Data: ObjectData = {
  slug: "lubang-hitam-m87",
  name: { id: "Lubang Hitam M87*", en: "M87* Black Hole" },
  icon: "🕳️",
  category: "langit",
  type: "langit",
  scientificName: "M87*",
  surahName: "At-Takwir",
  surahReference: "81:15-16",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "صُورَةٌ", latin: "Shuuratun", arti: "Gambar/Foto", artiEn: "Picture/Photo", contohAyat: "وَصَوَّرَكُمْ فَأَحْسَنَ صُوَرَكُمْ" },
    { arab: "كَبِيرٌ", latin: "Kabiirun", arti: "Besar", artiEn: "Big", contohAyat: "وَهُوَ الْعَلِيُّ الْكَبِيرُ" },
    { arab: "ظَلَامٌ", latin: "Dhalaamun", arti: "Kegelapan", artiEn: "Darkness", contohAyat: "فِي ظُلُمَاتٍ بَعْضُهَا فَوْقَ بَعْضٍ" },
    { arab: "نُورٌ", latin: "Nuurun", arti: "Cahaya", artiEn: "Light", contohAyat: "نُورٌ عَلَىٰ نُورٍ" }
  ],

  balita: {
    text: {
      id: "Wow! Ini adalah gambar foto lubang hitam pertama yang pernah dilihat manusia! Dia dikelilingi cincin cahaya api yang berputar cepat sekali. Lubang di tengahnya sangat gelap.",
      en: "Wow! This is the first picture of a black hole ever seen by humans! It is surrounded by a ring of fire spinning very fast. The hole in the middle is very dark."
    },
    audioTranscript: {
      id: "Ini foto pertama lubang hitam! Tengahnya gelap, pinggirannya menyala!",
      en: "This is the first photo of a black hole! The middle is dark, the edge is glowing!"
    },
    quiz: {
      question: { id: "Warna cincin di sekitar lubang hitam M87 ini adalah?", en: "What is the color of the ring around the M87 black hole?" },
      options: [
        { text: { id: "Oranye / Api bercahaya", en: "Orange / Glowing fire" } },
        { text: { id: "Hijau daun", en: "Leaf green" } },
        { text: { id: "Biru laut", en: "Sea blue" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "M87* adalah lubang hitam raksasa yang berada di galaksi Messier 87. Ukurannya jauh lebih besar dari lubang hitam di galaksi kita! Pada tahun 2019, ilmuwan berhasil memotretnya menggunakan jaringan teleskop dari seluruh dunia yang disebut Event Horizon Telescope.",
      en: "M87* is a giant black hole in the Messier 87 galaxy. Its size is much larger than the black hole in our galaxy! In 2019, scientists successfully photographed it using a worldwide network of telescopes called the Event Horizon Telescope."
    },
    facts: [
      { id: "M87* berukuran 6,5 miliar kali lebih berat dari matahari!", en: "M87* is 6.5 billion times heavier than the sun!" },
      { id: "Jaraknya sangat jauh, sekitar 55 juta tahun cahaya dari bumi.", en: "It is very far away, about 55 million light years from Earth." },
      { id: "Cincin oranye yang menyala itu adalah gas super panas yang berputar di sekitarnya.", en: "The glowing orange ring is super hot gas spinning around it." },
      { id: "Bagian gelap di tengah disebut 'bayangan' lubang hitam.", en: "The dark part in the middle is called the 'shadow' of the black hole." },
      { id: "Membutuhkan data komputer seberat berton-ton hard disk untuk mencetak fotonya!", en: "It took tons of hard drives full of computer data to print the photo!" }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Dan Dia menundukkan malam dan siang, matahari dan bulan untukmu. Dan bintang-bintang itu ditundukkan (untukmu) dengan perintah-Nya... (An-Nahl: 12)", en: "And He has subjected for you the night and day and the sun and moon, and the stars are subjected by His command... (An-Nahl: 12)" }
    },
    quiz: {
      question: { id: "Kapan ilmuwan pertama kali berhasil memotret lubang hitam ini?", en: "When did scientists first successfully photograph this black hole?" },
      options: [
        { text: { id: "Tahun 2019", en: "Year 2019" } },
        { text: { id: "Zaman Dinosaurus", en: "Dinosaur Era" } },
        { text: { id: "Tahun depan", en: "Next year" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "M87* membuktikan Teori Relativitas Umum Albert Einstein 100% benar. Lubang hitam ini menyedot gas dan menerbangkan pancaran jet plasma (Relativistic Jet) keluar angkasa hingga ribuan tahun cahaya! Foto M87* memperlihatkan bahwa 'Khunnas' (benda langit yang menyembunyikan diri/tak memancarkan cahaya) yang disebut dalam Al-Qur'an (At-Takwir: 15) benar-benar ada dan bisa 'dilihat' melalui siluet bayangannya pada gas panas (Kunnas/menyapu) di sekitarnya.",
      en: "M87* proves Albert Einstein's General Theory of Relativity 100% correct. This black hole sucks in gas and blasts relativistic jets of plasma into space for thousands of light years! The photo of M87* shows that 'Khunnas' (hidden/non-light emitting celestial bodies) mentioned in the Quran (At-Takwir: 15) really exist and can be 'seen' through their shadow silhouette against the hot gas (Kunnas/sweeping) around them."
    },
    anatomy: [
      { part: { id: "Piringan Akresi", en: "Accretion Disk" }, desc: { id: "Cincin gas super panas dan berputar sangat cepat.", en: "A super hot, fast-spinning ring of gas." } },
      { part: { id: "Jet Plasma", en: "Plasma Jet" }, desc: { id: "Pancaran energi yang ditembakkan menjauh dari lubang hitam.", en: "A beam of energy blasted away from the black hole." } }
    ],
    wowFactor: {
      id: "Ukuran bayangan gelap di tengah M87* itu lebih besar dari seluruh Tata Surya kita!",
      en: "The size of the dark shadow in the middle of M87* is larger than our entire Solar System!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Sungguh, Aku bersumpah dengan bintang-bintang yang bersembunyi (Khunnas). Yang bergerak cepat dan menyapu (Kunnas). (At-Takwir: 15-16)", en: "So I swear by the retreating stars (Khunnas). Those that run [their courses] and sweep (Kunnas). (At-Takwir: 15-16)" }
    },
    quiz: [
      {
        question: { id: "Apa nama jaringan teleskop yang berhasil memotret M87*?", en: "What is the name of the telescope network that successfully photographed M87*?" },
        options: [
          { text: { id: "Teleskop Bambu", en: "Bamboo Telescope" } },
          { text: { id: "Event Horizon Telescope (EHT)", en: "Event Horizon Telescope (EHT)" } },
          { text: { id: "Kacamata Hitam", en: "Sunglasses" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Berapa massa lubang hitam M87*?", en: "What is the mass of the M87* black hole?" },
        options: [
          { text: { id: "Lebih ringan dari Bumi", en: "Lighter than Earth" } },
          { text: { id: "6,5 miliar kali Matahari", en: "6.5 billion times the Sun" } },
          { text: { id: "Sama dengan Jupiter", en: "Same as Jupiter" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa itu Jet Plasma pada lubang hitam?", en: "What is a Plasma Jet in a black hole?" },
        options: [
          { text: { id: "Pesawat luar angkasa", en: "Spacecraft" } },
          { text: { id: "Pancaran energi ekstrim yang disemburkan lubang hitam", en: "Extreme beam of energy blasted by a black hole" } },
          { text: { id: "Air hujan", en: "Rainwater" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
