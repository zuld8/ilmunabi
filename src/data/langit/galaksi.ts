import { ObjectData } from "../objects";

export const galaksiData: ObjectData = {
  slug: "galaksi",
  name: { id: "Galaksi", en: "Galaxy" },
  icon: "🌌",
  category: "langit",
  type: "langit",
  scientificName: "Galaxias",
  surahName: "Adh-Dhariyat",
  surahReference: "51:47",
  unlockedAtPoints: 80,
  kosakata: [
    { arab: "مَجَرَّة", latin: "Majarrah", arti: "Galaksi", artiEn: "Galaxy", contohAyat: "Matahari kita berada di galaksi Bima Sakti." }
  ],
  balita: {
    text: { id: "Wow, lihat langit malam! Ada banyak bintang berkumpul jadi satu keluarga besar namanya Galaksi! 🌌", en: "Wow, look at the night sky! There are many stars gathered into one big family called a Galaxy! 🌌" },
    audioTranscript: { id: "Galaksi itu rumah raksasa buat jutaan bintang-bintang di langit.", en: "A galaxy is a giant home for millions of stars in the sky." },
    quiz: {
      question: { id: "Apa itu galaksi?", en: "What is a galaxy?" },
      options: [
        { text: { id: "Satu bintang saja", en: "Just one star" } },
        { text: { id: "Batu bata", en: "Bricks" } },
        { text: { id: "Kumpulan banyak bintang", en: "A group of many stars" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Galaksi adalah kota raksasa di ruang angkasa yang berisi gas, debu, dan miliaran bintang! Bumi kita tinggal di galaksi bernama Bima Sakti (Milky Way).", en: "A galaxy is a giant city in space containing gas, dust, and billions of stars! Our Earth lives in a galaxy called the Milky Way." },
    facts: [
      { id: "Galaksi Bima Sakti kita berbentuk spiral yang berputar seperti gasing.", en: "Our Milky Way galaxy is shaped like a spiral spinning like a top." },
      { id: "Saking besarnya, cahaya butuh 100.000 tahun untuk menyeberangi galaksi kita!", en: "It is so big that light takes 100,000 years to cross our galaxy!" },
      { id: "Di alam semesta ini ada lebih dari 100 miliar galaksi lain.", en: "There are over 100 billion other galaxies in this universe." }
    ],
    quranVerse: {
      arabic: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ",
      transliteration: "Was-samaa'a banaynaahaa bi'aydiw wa innaa lamuusi'uun",
      translation: { id: "Dan langit itu Kami bangun dengan kekuasaan (Kami) dan sesungguhnya Kami benar-benar meluaskannya.", en: "And the heaven We constructed with strength, and indeed, We are [its] expander." },
      context: { id: "Ilmuwan modern baru tahu bahwa alam semesta terus meluas dan galaksi-galaksi saling menjauh, padahal Al-Qur'an sudah menyebutkannya sejak dulu!", en: "Modern scientists just found out that the universe is constantly expanding and galaxies are moving apart, yet the Quran mentioned it a long time ago!" }
    },
    quiz: {
      question: { id: "Apa nama galaksi tempat Bumi kita berada?", en: "What is the name of the galaxy where our Earth is located?" },
      options: [
        { text: { id: "Andromeda", en: "Andromeda" } },
        { text: { id: "Bima Sakti", en: "Milky Way" } },
        { text: { id: "Orion", en: "Orion" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Di tengah galaksi-galaksi besar, termasuk Bima Sakti, terdapat sebuah Lubang Hitam Supermasif (Supermassive Black Hole) yang gravitasinya menjaga agar miliaran bintang tetap berputar di orbitnya. Sungguh menakjubkan bagaimana Allah mengatur agar bintang yang tak terhitung jumlahnya itu tidak saling bertabrakan, bergerak selaras dalam tatanan yang begitu kompleks.", en: "In the center of large galaxies, including the Milky Way, there is a Supermassive Black Hole whose gravity keeps billions of stars spinning in their orbits. It is truly amazing how Allah manages so that countless stars do not collide with each other, moving harmoniously in such a complex order." },
    anatomy: [
      { part: { id: "Inti Galaksi", en: "Galactic Core" }, desc: { id: "Pusat galaksi yang sangat terang dan padat karena banyak bintang tua dan lubang hitam supermasif.", en: "The highly bright and dense center of a galaxy due to many old stars and a supermassive black hole." } },
      { part: { id: "Lengan Spiral", en: "Spiral Arms" }, desc: { id: "Lengan galaksi tempat bintang-bintang baru sering terbentuk, termasuk tempat Matahari kita berada.", en: "The arms of the galaxy where new stars are often formed, including where our Sun is located." } }
    ],
    wowFactor: { id: "Galaksi Bima Sakti kita sedang bergerak menuju galaksi Andromeda, dan sekitar 4 miliar tahun lagi, keduanya akan bertabrakan dan bergabung menjadi galaksi baru yang lebih besar!", en: "Our Milky Way galaxy is moving towards the Andromeda galaxy, and in about 4 billion years, they will collide and merge into a new, larger galaxy!" },
    quranVerse: {
      arabic: "تَبَارَكَ الَّذِي جَعَلَ فِي السَّمَاءِ بُرُوجًا",
      transliteration: "Tabaarakalladzii ja'ala fis-samaa'i buruujan",
      translation: { id: "Maha Suci Allah yang menjadikan di langit gugusan-gugusan bintang.", en: "Blessed is He who has placed in the sky great stars." }
    },
    quiz: [
      {
        question: { id: "Apa yang biasanya ada di pusat sebuah galaksi besar?", en: "What is usually found at the center of a large galaxy?" },
        options: [{ text: { id: "Planet besar", en: "A giant planet" } }, { text: { id: "Lubang hitam supermasif", en: "A supermassive black hole" } }, { text: { id: "Awan kosong", en: "An empty cloud" } }],
        answerIdx: 1
      }
    ]
  }
};
