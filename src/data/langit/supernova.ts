import { ObjectData } from "../objects";

export const supernovaData: ObjectData = {
  slug: "supernova",
  name: { id: "Supernova", en: "Supernova" },
  icon: "💥",
  category: "langit",
  type: "langit",
  scientificName: "Supernova",
  surahName: "Al-Hadid",
  surahReference: "57:25",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "نَجْمٌ", latin: "Najmun", arti: "Bintang", artiEn: "Star", contohAyat: "وَٱلنَّجْمِ إِذَا هَوَىٰ" },
    { arab: "مَوْتٌ", latin: "Mawtun", arti: "Kematian", artiEn: "Death", contohAyat: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ" },
    { arab: "نُورٌ", latin: "Nuurun", arti: "Cahaya", artiEn: "Light", contohAyat: "نُورٌ عَلَىٰ نُورٍ" },
    { arab: "سَمَاءٌ", latin: "Samaa'un", arti: "Langit", artiEn: "Sky", contohAyat: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ" }
  ],

  balita: {
    text: {
      id: "Wow! Lihat, ada kembang api raksasa di langit! Itu namanya Supernova. Saat bintang sudah sangat tua, ia meledak dengan sangat terang. Subhanallah!",
      en: "Wow! Look, there's a giant firework in the sky! It's called a Supernova. When a star gets very old, it explodes brightly. Subhanallah!"
    },
    audioTranscript: {
      id: "Supernova adalah ledakan bintang yang sudah tua! Ciptaan Allah sangat hebat!",
      en: "Supernova is the explosion of an old star! Allah's creation is amazing!"
    },
    quiz: {
      question: { id: "Supernova itu mirip seperti apa ya?", en: "What does a Supernova look like?" },
      options: [
        { text: { id: "Kembang api raksasa", en: "Giant firework" } },
        { text: { id: "Batu biasa", en: "Normal rock" } },
        { text: { id: "Pohon", en: "Tree" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Supernova adalah ledakan bintang paling besar dan paling terang yang pernah ada! Bayangkan, satu supernova bisa lebih terang dari seluruh galaksi! Allah menciptakan siklus hidup bintang, dari lahir hingga akhirnya meledak menyebarkan material baru ke luar angkasa.",
      en: "A supernova is the biggest and brightest star explosion ever! Imagine, one supernova can outshine an entire galaxy! Allah created the life cycle of stars, from birth to finally exploding and spreading new materials into space."
    },
    facts: [
      { id: "Satu supernova meledak setiap detik di alam semesta!", en: "A supernova explodes every second in the universe!" },
      { id: "Sangat terang, kamu bahkan bisa melihatnya di siang hari!", en: "It's so bright, you could even see it during the day!" },
      { id: "Material dari ledakan ini menjadi bahan pembuat bumi lho.", en: "Materials from this explosion made the earth." },
      { id: "Menghasilkan zat besi yang mengalir di darah kita.", en: "It produces the iron that flows in our blood." },
      { id: "Bintang yang meledak harus sangat besar.", en: "The exploding star must be very massive." }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Dan Dialah yang menciptakan bintang-bintang bagimu... (Al-An'am: 97)", en: "And it is He who placed for you the stars... (Al-An'am: 97)" }
    },
    quiz: {
      question: { id: "Apa yang disebarkan supernova ke luar angkasa saat meledak?", en: "What does a supernova spread into space when it explodes?" },
      options: [
        { text: { id: "Material pembuat planet", en: "Materials to make planets" } },
        { text: { id: "Air laut", en: "Sea water" } },
        { text: { id: "Kertas", en: "Paper" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Supernova adalah akhir dari riwayat sebuah bintang masif. Saat bahan bakarnya habis, inti bintang runtuh dan memicu ledakan mahadahsyat. Fakta mencengangkan: emas dan besi di bumi ini berasal dari supernova! Dalam Al-Qur'an (Al-Hadid: 25), Allah menyebutkan 'Kami turunkan besi', yang sangat relevan dengan fakta sains bahwa besi terbentuk dari ledakan bintang jauh di atas langit, lalu dikirim ke bumi!",
      en: "A supernova is the end of a massive star's life. When it runs out of fuel, the core collapses, triggering a colossal explosion. Mind-blowing fact: the gold and iron on Earth came from supernovae! In the Quran (Al-Hadid: 25), Allah says 'We sent down iron,' which perfectly matches the scientific fact that iron is forged in star explosions far in the sky, then sent down to Earth!"
    },
    anatomy: [
      { part: { id: "Inti Runtuh", en: "Core Collapse" }, desc: { id: "Pusat bintang yang hancur.", en: "The crushed center of the star." } },
      { part: { id: "Gelombang Kejut", en: "Shockwave" }, desc: { id: "Energi ledakan yang menyebar ke luar.", en: "Explosive energy expanding outward." } }
    ],
    wowFactor: {
      id: "Ternyata, zat besi di dalam darahmu dibuat dari ledakan bintang miliaran tahun lalu! Kamu benar-benar terbuat dari debu bintang!",
      en: "Turns out, the iron in your blood was forged in a star explosion billions of years ago! You are literally made of stardust!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Sungguh, Kami telah mengutus rasul-rasul Kami... dan Kami turunkan besi yang padanya terdapat kekuatan yang hebat dan berbagai manfaat bagi manusia... (Al-Hadid: 25)", en: "We have already sent Our messengers... and We sent down iron, wherein is great military might and benefits for the people... (Al-Hadid: 25)" }
    },
    quiz: [
      {
        question: { id: "Logam apa yang disebutkan Al-Qur'an diturunkan dari langit, yang ternyata berasal dari supernova?", en: "What metal does the Quran mention as being sent down from the sky, which actually comes from supernovae?" },
        options: [
          { text: { id: "Emas", en: "Gold" } },
          { text: { id: "Besi", en: "Iron" } },
          { text: { id: "Perak", en: "Silver" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Kapan supernova terjadi?", en: "When does a supernova occur?" },
        options: [
          { text: { id: "Saat bintang lahir", en: "When a star is born" } },
          { text: { id: "Saat bintang masif kehabisan bahan bakar", en: "When a massive star runs out of fuel" } },
          { text: { id: "Saat bulan purnama", en: "During a full moon" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Berapa banyak supernova yang meledak setiap detik di alam semesta?", en: "How many supernovae explode every second in the universe?" },
        options: [
          { text: { id: "Tidak ada", en: "None" } },
          { text: { id: "Kira-kira satu", en: "About one" } },
          { text: { id: "Satu juta", en: "One million" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
