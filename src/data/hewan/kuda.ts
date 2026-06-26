import { ObjectData } from "../objects";

export const kudaData: ObjectData = {
  slug: "kuda",
  name: { id: "Kuda", en: "Horse" },
  icon: "🐎",
  category: "mamalia",
  type: "hewan",
  scientificName: "Equus caballus",
  surahName: "Al-'Adiyat",
  surahReference: "100:1-2",
  unlockedAtPoints: 45,
  kosakata: [
    { arab: "خَيْل / حِصَان", latin: "Khayl / Hisaan", arti: "Kuda", artiEn: "Horse", contohAyat: "Demi kuda perang yang berlari kencang terengah-engah." }
  ],
  balita: {
    text: { id: "Hiiigh! Aku kuda yang berlari sangat cepat! Tuk-tik-tak-tik-tuk, dengarkan langkah kakiku! 🐴", en: "Neigh! I am a horse that runs very fast! Clip-clop, listen to my footsteps! 🐴" },
    audioTranscript: { id: "Hiigh! Aku suka berlari di padang rumput dan melompat tinggi!", en: "Neigh! I like running in the meadow and jumping high!" },
    quiz: {
      question: { id: "Bagaimana suara langkah kaki kuda?", en: "What is the sound of a horse's footsteps?" },
      options: [
        { text: { id: "Meong-meong", en: "Meow-meow" } },
        { text: { id: "Tuk-tik-tak-tik-tuk", en: "Clip-clop" } },
        { text: { id: "Ssst-ssst", en: "Shhh-shhh" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kuda adalah hewan yang luar biasa hebat dan disebut spesial dalam Al-Qur'an. Kuda perang digambarkan sangat berani, berlari kencang sampai memercikkan api dari kakinya yang beradu dengan batu!", en: "Horses are incredible animals and are mentioned specially in the Quran. War horses are described as very brave, running so fast that they strike sparks of fire from their hooves hitting rocks!" },
    facts: [
      { id: "Kuda bisa tidur sambil berdiri karena kakinya memiliki sistem pengunci alami!", en: "Horses can sleep while standing because their legs have a natural locking system!" },
      { id: "Kuda memiliki mata terbesar dari semua mamalia darat.", en: "Horses have the largest eyes of any land mammal." },
      { id: "Bayi kuda (anak kuda) sudah bisa berjalan dan berlari hanya beberapa jam setelah lahir!", en: "A baby horse (foal) can walk and run just a few hours after birth!" }
    ],
    quranVerse: {
      arabic: "وَالْعَادِيَاتِ ضَبْحًا ۝ فَالْمُورِيَاتِ قَدْحًا",
      transliteration: "Wal 'adiyati dabha. Fal muriyati qadha.",
      translation: { id: "Demi kuda perang yang berlari kencang terengah-engah, dan kuda yang memercikkan bunga api (dengan pukulan kuku kakinya).", en: "By the racers, panting, And the producers of sparks [when] striking." },
      context: { id: "Allah bersumpah menggunakan kuda yang gagah berani untuk mengingatkan kekuatan dan kehebatan ciptaan-Nya.", en: "Allah swears by the brave and gallant horses to remind us of the strength and greatness of His creation." }
    },
    quiz: {
      question: { id: "Bagaimana cara kuda bisa tidur?", en: "How can horses sleep?" },
      options: [
        { text: { id: "Hanya sambil berbaring telentang", en: "Only while lying on their back" } },
        { text: { id: "Sambil berdiri maupun berbaring", en: "While standing or lying down" } },
        { text: { id: "Sambil terbang", en: "While flying" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Mata kuda berada di sisi kepalanya, memberi mereka penglihatan 350 derajat. Mereka punya 'titik buta' hanya di tepat depan hidung dan tepat di belakang ekornya. Karena itu, jangan pernah mengagetkan kuda dari belakang!", en: "A horse's eyes are on the sides of its head, giving them 350-degree vision. They have a 'blind spot' only directly in front of their nose and directly behind their tail. Because of this, never startle a horse from behind!" },
    anatomy: [
      { part: { id: "Kuku Kuda (Hoof)", en: "Horse Hoof" }, desc: { id: "Terbuat dari keratin, bahan yang sama dengan kuku manusia, namun sangat tebal dan kuat.", en: "Made of keratin, the same material as human nails, but very thick and strong." } },
      { part: { id: "Otot Kaki Stay Apparatus", en: "Stay Apparatus Leg Muscles" }, desc: { id: "Sistem ligamen yang mengunci kaki kuda agar bisa berdiri rileks tanpa membuang energi.", en: "A system of ligaments that locks the horse's legs so it can stand relaxed without wasting energy." } }
    ],
    wowFactor: { id: "Kuda tidak bisa bernapas melalui mulutnya sama sekali! Mereka hanya bisa bernapas melalui hidung. Ini mencegah mereka tersedak saat makan rumput dan berlari kencang.", en: "Horses cannot breathe through their mouths at all! They can only breathe through their noses. This prevents them from choking when eating grass and running fast." },
    quranVerse: {
      arabic: "وَالْخَيْلَ وَالْبِغَالَ وَالْحَمِيرَ لِتَرْكَبُوهَا وَزِينَةً ۚ وَيَخْلُقُ مَا لَا تَعْلَمُونَ",
      transliteration: "Wal khayla wal bighala wal hamira litarkabuha wazinatan. Wa yakhluqu ma la ta'lamun.",
      translation: { id: "Dan (Dia telah menciptakan) kuda, bagal, dan keledai, untuk kamu tunggangi dan (menjadi) perhiasan. Allah menciptakan apa yang tidak kamu ketahui.", en: "And [He created] the horses, mules and donkeys for you to ride and [as] adornment. And He creates that which you do not know." }
    },
    quiz: [
      {
        question: { id: "Mengapa kita tidak boleh mengagetkan kuda dari arah belakang?", en: "Why shouldn't we startle a horse from behind?" },
        options: [
          { text: { id: "Karena di situlah titik buta (blind spot) mereka", en: "Because that is their blind spot" } },
          { text: { id: "Karena mereka pemalu", en: "Because they are shy" } },
          { text: { id: "Karena bulu belakangnya mudah rontok", en: "Because their back hair falls out easily" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
