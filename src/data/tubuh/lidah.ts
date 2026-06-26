import { ObjectData } from "../objects";

export const lidahData: ObjectData = {
  slug: "lidah",
  name: { id: "Lidah", en: "Tongue" },
  icon: "👅",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Lingua",
  surahName: "Al-Balad",
  surahReference: "90:9",
  unlockedAtPoints: 90,
  kosakata: [
    { arab: "لِسَانٌ", latin: "Lisaanun", arti: "Lidah", artiEn: "Tongue", contohAyat: "Wa lisaanan wa shafatayn (Dan lidah dan dua buah bibir)." }
  ],
  balita: {
    text: { id: "Melet! Lidah kita hebat, bisa merasakan permen yang manis dan lemon yang asam! Nyam nyam! 🍭🍋", en: "Stick it out! Our tongue is great, it can taste sweet candy and sour lemon! Yum yum! 🍭🍋" },
    audioTranscript: { id: "Lidah itu seperti spons kecil yang basah, gunanya untuk merasa dan bicara.", en: "The tongue is like a small wet sponge, used for tasting and talking." },
    quiz: {
      question: { id: "Buah lemon rasanya seperti apa di lidah kita?", en: "What does a lemon taste like on our tongue?" },
      options: [
        { text: { id: "Manis", en: "Sweet" } },
        { text: { id: "Asam", en: "Sour" } },
        { text: { id: "Asin", en: "Salty" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Lidah adalah otot yang sangat lentur di mulut kita! Dia bekerja sama dengan gigi untuk mengunyah makanan. Tanpa lidah, kita tidak bisa mengucapkan huruf-huruf dengan jelas, lho! Makanya Allah memberi kita lidah agar bisa membaca Al-Qur'an dan berbicara yang baik-baik. 🗣️📖", en: "The tongue is a very flexible muscle in our mouth! It works with the teeth to chew food. Without a tongue, we can't pronounce letters clearly, you know! That's why Allah gave us a tongue so we can read the Quran and speak good words. 🗣️📖" },
    facts: [
      { id: "Lidah adalah satu-satunya otot di tubuh manusia yang hanya menempel pada satu ujung! 😲", en: "The tongue is the only muscle in the human body that is attached at only one end! 😲" },
      { id: "Sama seperti sidik jari, setiap orang memiliki 'sidik lidah' (cetakan lidah) yang unik! 🔍", en: "Just like fingerprints, everyone has a unique 'tongue print'! 🔍" },
      { id: "Lidah tidak pernah beristirahat, dia terus bekerja membantu menelan air liur meski kita sedang tidur.", en: "The tongue never rests, it keeps working to help swallow saliva even when we sleep." }
    ],
    quranVerse: {
      arabic: "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ ۝ وَلِسَانًا وَشَفَتَيْنِ",
      transliteration: "Alam naj'al lahu 'aynayn. Wa lisaanan wa shafatayn.",
      translation: { id: "Bukankah Kami telah memberikan kepadanya dua buah mata, lidah dan dua buah bibir.", en: "Have We not made for him two eyes? And a tongue and two lips?" },
      context: { id: "Lidah adalah anugerah alat komunikasi dari Allah agar kita bisa berbicara dan beribadah.", en: "The tongue is a communication tool gift from Allah so we can speak and worship." }
    },
    quiz: {
      question: { id: "Selain untuk mengecap makanan, lidah juga sangat penting untuk apa?", en: "Besides tasting food, what is the tongue also very important for?" },
      options: [
        { text: { id: "Berbicara yang jelas", en: "Speaking clearly" } },
        { text: { id: "Melihat warna", en: "Seeing colors" } },
        { text: { id: "Mendengar suara", en: "Hearing sounds" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Permukaan lidahmu dipenuhi oleh bintil-bintil kecil bernama papila. Di dalam papila inilah bersembunyi ribuan sensor pengecap (taste buds) yang terus beregenerasi setiap dua minggu! Hebatnya, sensor ini mendeteksi 5 rasa dasar: manis, asam, asin, pahit, dan umami (gurih). Kombinasi sinyal dari lidah dan penciuman hidunglah yang menciptakan 'rasa' makanan yang lezat di otakmu. Sungguh Allah Maha Pemberi Nikmat (Al-Wahhab) yang mengizinkan kita merasakan lezatnya makanan. 🍲✨", en: "The surface of your tongue is covered with tiny bumps called papillae. Hidden inside these papillae are thousands of taste buds that regenerate every two weeks! Amazingly, these sensors detect 5 basic tastes: sweet, sour, salty, bitter, and umami (savory). The combination of signals from the tongue and the nose's smell creates the delicious 'flavor' of food in your brain. Truly Allah is The Bestower (Al-Wahhab) who allows us to taste delicious food. 🍲✨" },
    anatomy: [
      { part: { id: "Papila", en: "Papillae" }, desc: { id: "Bintil-bintil kasar di permukaan lidah.", en: "The rough bumps on the surface of the tongue." } },
      { part: { id: "Taste Buds", en: "Taste Buds" }, desc: { id: "Sensor saraf sangat kecil di dalam papila untuk mendeteksi rasa.", en: "Very small nerve sensors inside the papillae to detect taste." } },
      { part: { id: "Frenulum", en: "Frenulum" }, desc: { id: "Tali jaringan tipis di bawah lidah yang menahannya agar tidak tertelan.", en: "A thin cord of tissue under the tongue that holds it from being swallowed." } }
    ],
    wowFactor: { id: "Lidah jerapah panjangnya bisa mencapai 50 cm dan berwarna kebiruan agar tidak terbakar sinar matahari saat makan daun di pucuk pohon! 🦒", en: "A giraffe's tongue can reach 50 cm long and is bluish so it doesn't get sunburned when eating leaves at the top of trees! 🦒" },
    quranVerse: {
      arabic: "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ ۝ وَلِسَانًا وَشَفَتَيْنِ",
      transliteration: "Alam naj'al lahu 'aynayn. Wa lisaanan wa shafatayn.",
      translation: { id: "Bukankah Kami telah memberikan kepadanya dua buah mata, lidah dan dua buah bibir.", en: "Have We not made for him two eyes? And a tongue and two lips?" }
    },
    quiz: [
      {
        question: { id: "Apa nama bintil-bintil kecil di permukaan lidah?", en: "What is the name of the tiny bumps on the surface of the tongue?" },
        options: [
          { text: { id: "Enamel", en: "Enamel" } },
          { text: { id: "Papila", en: "Papillae" } },
          { text: { id: "Nefron", en: "Nephron" } }
        ],
        answerIdx: 1
      }
    ]
  }
};