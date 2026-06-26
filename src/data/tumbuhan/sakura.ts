import { ObjectData } from "../objects";

export const sakuraData: ObjectData = {
  slug: "sakura",
  name: { id: "Sakura", en: "Cherry Blossom" },
  icon: "🌸",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Prunus serrulata",
  surahName: "Ar-Rum",
  surahReference: "30:50",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "زَهْرَةُ الكَرَز", latin: "Zahratul Karaz", arti: "Sakura", artiEn: "Cherry Blossom", contohAyat: "Bunga sakura mekar dengan indah di musim semi." }
  ],
  balita: {
    text: { id: "Lihat pohon ini! Bunganya warna merah muda dan sangat baaanyak! 🌸 Kalau kena angin, kelopaknya akan terbang seperti hujan salju warna pink.", en: "Look at this tree! The flowers are pink and there are so maaany! 🌸 When the wind blows, the petals fly like pink snow." },
    audioTranscript: { id: "Bunga sakura mekar saat musim semi dan warnanya sangat cantik.", en: "Cherry blossoms bloom in spring and their color is very beautiful." },
    quiz: {
      question: { id: "Seperti apa kelopak bunga sakura saat ditiup angin?", en: "What do cherry blossom petals look like when blown by the wind?" },
      options: [
        { text: { id: "Tetap menempel kuat", en: "They stick strongly" } },
        { text: { id: "Berjatuhan seperti hujan salju merah muda", en: "Falling like pink snow" } },
        { text: { id: "Berubah menjadi daun", en: "Turn into leaves" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Sakura adalah bunga khas dari negara Jepang. Bunga ini sangat spesial karena hanya mekar selama beberapa hari saja dalam setahun, lalu gugur. Siklus hidup sakura yang singkat ini mengajarkan kita bahwa kehidupan di dunia ini hanya sementara, sehingga kita harus berbuat baik sebanyak-banyaknya sebelum waktu kita habis!", en: "Sakura is a signature flower from Japan. This flower is very special because it only blooms for a few days a year, then falls. This short life cycle of the cherry blossom teaches us that life in this world is only temporary, so we must do as much good as possible before our time runs out!" },
    facts: [
      { id: "Pohon sakura tidak menghasilkan buah ceri yang bisa dimakan, ia hanya berbunga.", en: "Cherry blossom trees do not produce edible cherries, they only bloom flowers." },
      { id: "Bunga sakura mekar bersamaan sebelum daun hijaunya muncul.", en: "Cherry blossoms bloom all at once before their green leaves appear." },
      { id: "Orang Jepang punya tradisi piknik di bawah pohon sakura bernama 'Hanami'.", en: "Japanese people have a tradition of picnicking under sakura trees called 'Hanami'." }
    ],
    quranVerse: {
      arabic: "فَانْظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ كَيْفَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا",
      transliteration: "Fanẓur ilā āthāri raḥmati Allāhi kayfa yuḥyī al-arḍa ba‘da mawtihā",
      translation: { id: "Maka perhatikanlah bekas-bekas rahmat Allah, bagaimana Dia menghidupkan bumi setelah matinya (kering)...", en: "So observe the effects of the mercy of Allah - how He gives life to the earth after its lifelessness..." },
      context: { id: "Allah menghidupkan kembali pohon sakura yang gundul di musim dingin menjadi berbunga indah di musim semi.", en: "Allah brings the bare sakura tree in winter back to life to bloom beautifully in spring." }
    },
    quiz: {
      question: { id: "Apa pelajaran yang bisa kita ambil dari bunga sakura yang mekarnya hanya sebentar?", en: "What lesson can we learn from the cherry blossom that only blooms for a short time?" },
      options: [
        { text: { id: "Hidup di dunia ini sementara, jadi harus banyak berbuat baik", en: "Life in this world is temporary, so we must do a lot of good deeds" } },
        { text: { id: "Bunga sakura tidak berguna", en: "Sakura flowers are useless" } },
        { text: { id: "Kita harus marah jika bunga gugur", en: "We should be angry if flowers fall" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Pohon sakura memiliki jam internal alami yang disebut fotoperiodisme. Selama musim dingin yang membeku, pohon ini 'tidur' panjang. Namun ketika suhu mulai hangat dan hari bertambah panjang, sensor di dalam pohon memicu hormon 'florigen' yang memerintahkan semua kuncup mekar serentak! Allah mengatur jam biologis ini dengan sangat presisi, seolah pohon itu tahu persis kapan harus bangun.", en: "The sakura tree has a natural internal clock called photoperiodism. During the freezing winter, the tree takes a long 'sleep'. But when the temperature gets warm and days get longer, sensors inside the tree trigger the 'florigen' hormone that commands all buds to bloom simultaneously! Allah set this biological clock with extreme precision, as if the tree knows exactly when to wake up." },
    anatomy: [
      { part: { id: "Fotoperiodisme", en: "Photoperiodism" }, desc: { id: "Kemampuan tanaman merasakan panjang siang dan malam.", en: "The plant's ability to sense the length of day and night." } },
      { part: { id: "Florigen", en: "Florigen" }, desc: { id: "Hormon pembungaan yang memberi sinyal agar bunga mekar.", en: "The flowering hormone that gives the signal for flowers to bloom." } }
    ],
    wowFactor: { id: "Kecepatan mekarnya bunga sakura bergerak dari selatan Jepang ke utara disebut 'Sakura Zensen' (Garis Depan Sakura) dan dipantau seperti prakiraan cuaca!", en: "The speed of sakura blooming moving from southern Japan to the north is called 'Sakura Zensen' (Cherry Blossom Front) and is tracked like a weather forecast!" },
    quranVerse: {
      arabic: "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ",
      transliteration: "Yukhriju al-ḥayya mina al-mayyiti wa yukhriju al-mayyita mina al-ḥayyi",
      translation: { id: "Dia mengeluarkan yang hidup dari yang mati dan mengeluarkan yang mati dari yang hidup...", en: "He brings the living out of the dead and brings the dead out of the living..." }
    },
    quiz: [
      {
        question: { id: "Hormon apa yang memerintahkan kuncup bunga sakura untuk mekar secara serentak?", en: "What hormone commands the sakura buds to bloom simultaneously?" },
        options: [
          { text: { id: "Florigen", en: "Florigen" } },
          { text: { id: "Adrenalin", en: "Adrenaline" } },
          { text: { id: "Melatonin", en: "Melatonin" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
