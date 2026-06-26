import { ObjectData } from "../objects";

export const tonggeretData: ObjectData = {
  slug: "tonggeret",
  name: { id: "Tonggeret", en: "Cicada" },
  scientificName: "Cicadidae",
  surahName: "Ar-Rum",
  surahReference: "30:50",
  icon: "🪲",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "أَرْضٌ", latin: "Ardhun", arti: "Bumi/Tanah", artiEn: "Earth/Soil", contohAyat: "Ar-Rum 30:50" },
    { arab: "حَيَاةٌ", latin: "Hayaatun", arti: "Kehidupan (Menghidupkan)", artiEn: "Life", contohAyat: "Ar-Rum 30:50" },
    { arab: "صَيْفٌ", latin: "Shaifun", arti: "Musim Panas", artiEn: "Summer", contohAyat: "Quraish 106:2" },
    { arab: "أَشْجَارٌ", latin: "Asyjaarun", arti: "Pohon-pohon", artiEn: "Trees", contohAyat: "Al-Hajj 22:18" }
  ],
  balita: {
    text: {
      id: "Ngiiiinggg! Suara apa itu yang keras di pohon? Itu adalah Tonggeret! 🪲",
      en: "BuzzZzz! What's that loud sound in the tree? It's a Cicada! 🪲"
    },
    audioTranscript: {
      id: "Tonggeret adalah hewan yang suka bernyanyi nyaring di pohon saat hari panas.",
      en: "Cicadas love to sing loudly in the trees on hot days."
    },
    quiz: {
      question: { id: "Dimana tonggeret biasa hinggap sambil berbunyi?", en: "Where do cicadas usually perch while making noise?" },
      options: [
        { text: { id: "Di dalam air", en: "In the water" } },
        { text: { id: "Di batang pohon", en: "On tree trunks" } },
        { text: { id: "Di bawah kasur", en: "Under the bed" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: {
      id: "Tonggeret adalah serangga dengan suara paling nyaring! Mereka menghabiskan waktu bertahun-tahun tidur di dalam tanah dan baru keluar ke batang pohon untuk bernyanyi.",
      en: "Cicadas are the insects with the loudest sound! They spend years sleeping underground and only come out to tree trunks to sing."
    },
    facts: [
      { id: "Beberapa jenis tonggeret berhibernasi di dalam tanah selama 13 atau 17 tahun!", en: "Some types of cicadas hibernate underground for 13 or 17 years!" },
      { id: "Suara nyaring mereka bisa terdengar hingga jarak 1,5 Kilometer.", en: "Their loud sound can be heard from up to 1.5 Kilometers away." },
      { id: "Hanya tonggeret jantan yang bisa berbunyi 'ngiiing'.", en: "Only male cicadas can make the 'buzzing' sound." },
      { id: "Saat tonggeret keluar dari tanah, jutaan dari mereka bisa muncul bersamaan.", en: "When cicadas emerge from the ground, millions of them can appear at once." },
      { id: "Siklus hidup tonggeret mengingatkan kita akan kebangkitan dari kematian.", en: "The cicada's life cycle reminds us of resurrection after death." }
    ],
    quranVerse: {
      arabic: "فَانظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ كَيْفَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا ۚ إِنَّ ذَٰلِكَ لَمُحْيِي الْمَوْتَىٰ",
      transliteration: "Fanẓur ilā āsāri raḥmatillāhi kaifa yuḥyil-arḍa ba'da mautihā, inna zālika lamuḥyil-mautā",
      translation: {
        id: "Maka perhatikanlah bekas-bekas rahmat Allah, bagaimana Allah menghidupkan bumi yang sudah mati. Sesungguhnya (Tuhan yang berbuat demikian), benar-benar (berkuasa) menghidupkan orang-orang yang telah mati.",
        en: "So observe the effects of the mercy of Allah - how He gives life to the earth after its lifelessness. Indeed, that [same one] will give life to the dead."
      }
    },
    quiz: {
      question: { id: "Berapa lama tonggeret periodik bersembunyi di dalam tanah?", en: "How long do periodical cicadas hide underground?" },
      options: [
        { text: { id: "Hanya 1 hari", en: "Only 1 day" } },
        { text: { id: "Bisa 13 hingga 17 tahun!", en: "Can be 13 to 17 years!" } },
        { text: { id: "2 Jam", en: "2 Hours" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: {
      id: "Suara tonggeret dihasilkan oleh organ bernama 'Tymbal' yang bergetar ratusan kali per detik. Bagian perutnya yang kopong berfungsi layaknya kotak gitar untuk menggemakan suara akustik terkuat di alam!",
      en: "The cicada sound is produced by an organ called the 'Tymbal' which vibrates hundreds of times per second. Its hollow abdomen acts like a guitar box to resonate the most powerful acoustic sound in nature!"
    },
    anatomy: [
      { part: { id: "Tymbal", en: "Tymbal" }, desc: { id: "Selaput bergetar di sisi perut yang menghasilkan suara.", en: "Vibrating membrane on the side of the abdomen." } },
      { part: { id: "Rongga Resonansi", en: "Resonance Chamber" }, desc: { id: "Perut kosong tempat suara diperkuat.", en: "Empty abdomen where sound is amplified." } }
    ],
    wowFactor: {
      id: "Angka 13 dan 17 tahun (siklus tonggeret) adalah bilangan prima (Prime numbers)! Ilmuwan biologi sepakat ini desain evolusi matematis Allah agar mereka terhindar dari siklus hidup pemangsanya.",
      en: "The 13 and 17 years (cicada cycles) are prime numbers! Biologists agree this is Allah's mathematical design so they avoid the life cycles of their predators."
    },
    quranVerse: {
      arabic: "وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا",
      transliteration: "Wa aḥṣā kulla syai'in 'adadā",
      translation: { id: "Dan Dia menghitung segala sesuatu satu persatu.", en: "And He has enumerated all things in number." },
      context: { id: "Matematika bilangan prima pada siklus hidup tonggeret adalah bukti Allah mengatur alam semesta dengan perhitungan yang pasti.", en: "Prime number mathematics in cicada life cycles prove Allah commands the universe with precise calculations." }
    },
    quiz: [
      {
        question: { id: "Keajaiban bilangan apa yang ada pada siklus tidur tonggeret (13 dan 17 tahun)?", en: "What magical numbers are in the cicada's sleep cycle (13 and 17 years)?" },
        options: [
          { text: { id: "Bilangan Prima (Prime Numbers)", en: "Prime Numbers" } },
          { text: { id: "Bilangan Pecahan", en: "Fractions" } },
          { text: { id: "Bilangan Negatif", en: "Negative Numbers" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Organ apa yang digetarkan tonggeret untuk membuat suara super keras?", en: "What organ does the cicada vibrate to make super loud sounds?" },
        options: [
          { text: { id: "Pita suara", en: "Vocal cords" } },
          { text: { id: "Tymbal (selaput di perut)", en: "Tymbal (membrane in the belly)" } },
          { text: { id: "Sayap belakang", en: "Hind wings" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Keluarnya tonggeret dari dalam tanah setelah bertahun-tahun mengingatkan muslim akan hal apa?", en: "Cicadas emerging from the ground after years reminds Muslims of what?" },
        options: [
          { text: { id: "Musim hujan", en: "Rainy season" } },
          { text: { id: "Kebangkitan orang mati (Hari Kiamat)", en: "Resurrection of the dead (Day of Judgment)" } },
          { text: { id: "Perjalanan luar angkasa", en: "Space travel" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
