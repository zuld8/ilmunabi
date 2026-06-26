import { ObjectData } from "../objects";

export const keledaiData: ObjectData = {
  slug: "keledai",
  name: { id: "Keledai", en: "Donkey" },
  icon: "🐴",
  category: "mamalia",
  type: "hewan",
  scientificName: "Equus africanus asinus",
  surahName: "Luqman",
  surahReference: "31:19",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "حِمَار", latin: "Himaar", arti: "Keledai", artiEn: "Donkey", contohAyat: "Dan pelankanlah suaramu. Sesungguhnya seburuk-buruk suara ialah suara keledai." }
  ],
  balita: {
    text: { id: "Hii-hooo! Hii-hooo! Halo, aku keledai yang kuat! Aku suka membantu mengangkat barang! 🎒", en: "Hee-haw! Hee-haw! Hello, I am a strong donkey! I like to help carry things! 🎒" },
    audioTranscript: { id: "Suaraku sangat keras! Hii-hooo! Telingaku panjang sekali!", en: "My voice is very loud! Hee-haw! My ears are so long!" },
    quiz: {
      question: { id: "Bagaimana suara keledai?", en: "What sound does a donkey make?" },
      options: [
        { text: { id: "Mooo", en: "Mooo" } },
        { text: { id: "Hii-hooo!", en: "Hee-haw!" } },
        { text: { id: "Meow", en: "Meow" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Keledai disebut di dalam Al-Qur'an! Allah melarang kita berteriak-teriak kasar seperti suara keledai. Keledai memang sangat kuat mengangkat barang, tapi suaranya lumayan berisik, lho!", en: "Donkeys are mentioned in the Quran! Allah forbids us from yelling harshly like the sound of a donkey. Donkeys are very strong at carrying things, but their voices are quite noisy, you know!" },
    facts: [
      { id: "Telinga keledai yang sangat besar membantunya mendengar suara dari jarak bermil-mil jauhnya di padang pasir.", en: "A donkey's huge ears help it hear sounds from miles away in the desert." },
      { id: "Keledai memiliki ingatan yang luar biasa selama 25 tahun!", en: "Donkeys have an incredible memory that lasts for 25 years!" },
      { id: "Di gurun panas, telinga besarnya juga berfungsi membuang panas agar tubuhnya tetap sejuk.", en: "In the hot desert, its big ears also act to release heat so its body stays cool." }
    ],
    quranVerse: {
      arabic: "وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِنْ صَوْتِكَ ۚ إِنَّ أَنْكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ",
      transliteration: "Waqsid fi mashyika wagh-dud min sawtika. Inna ankaral aswati lasawtul hamir.",
      translation: { id: "Dan sederhanakanlah kamu dalam berjalan dan lunakkanlah suaramu. Sesungguhnya seburuk-buruk suara ialah suara keledai.", en: "And be moderate in your pace and lower your voice; indeed, the most disagreeable of sounds is the voice of donkeys." },
      context: { id: "Nasihat Luqman kepada anaknya agar bersikap sopan dan tidak berteriak-teriak berlebihan.", en: "Luqman's advice to his son to be polite and not yell excessively." }
    },
    quiz: {
      question: { id: "Kenapa kita tidak boleh berteriak kasar menurut Al-Qur'an?", en: "Why shouldn't we yell harshly according to the Quran?" },
      options: [
        { text: { id: "Karena itu buruk seperti suara keledai", en: "Because it's bad like a donkey's voice" } },
        { text: { id: "Karena keledai akan sedih", en: "Because the donkey will be sad" } },
        { text: { id: "Karena bisa membuat sakit perut", en: "Because it can cause a stomachache" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Keledai diciptakan Allah dengan tenaga yang stabil untuk berjalan di medan kasar. Keledai bukan hewan bodoh, mereka hanya sangat berhati-hati. Jika merasa bahaya, mereka tidak akan bergerak!", en: "Allah created donkeys with stable strength to walk on rough terrain. Donkeys are not stupid animals, they are just very cautious. If they sense danger, they will not move!" },
    anatomy: [
      { part: { id: "Telinga Raksasa", en: "Giant Ears" }, desc: { id: "Berfungsi layaknya antena pendeteksi dan AC alami di gurun panas.", en: "Functions like a detecting antenna and a natural air conditioner in the hot desert." } },
      { part: { id: "Kuku Keras", en: "Hard Hooves" }, desc: { id: "Kuku mereka jauh lebih tangguh dari kuda, didesain khusus untuk jalan berbatu di pegunungan.", en: "Their hooves are much tougher than a horse's, specially designed for rocky mountain roads." } }
    ],
    wowFactor: { id: "Di beberapa negara, keledai dijadikan penjaga hewan ternak lain dari serangan serigala, karena mereka tidak takut dan akan menendang serigala dengan keras!", en: "In some countries, donkeys are used as guard animals for other livestock from wolf attacks, because they are fearless and will kick wolves hard!" },
    quranVerse: {
      arabic: "وَالْخَيْلَ وَالْبِغَالَ وَالْحَمِيرَ لِتَرْكَبُوهَا وَزِينَةً",
      transliteration: "Wal khayla wal bighala wal hamira litarkabuha wazinatan.",
      translation: { id: "Dan (Dia telah menciptakan) kuda, bagal, dan keledai, agar kamu menungganginya dan (menjadikannya) perhiasan.", en: "And [He created] the horses, mules and donkeys for you to ride and [as] adornment." }
    },
    quiz: [
      {
        question: { id: "Fungsi lain dari telinga raksasa keledai selain untuk mendengar adalah...", en: "Another function of a donkey's giant ears besides hearing is..." },
        options: [
          { text: { id: "Untuk terbang", en: "To fly" } },
          { text: { id: "Sebagai AC alami yang membuang panas", en: "As a natural air conditioner that releases heat" } },
          { text: { id: "Untuk menyimpan air", en: "To store water" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
