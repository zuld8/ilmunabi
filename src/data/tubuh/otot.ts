import { ObjectData } from "../objects";

export const ototData: ObjectData = {
  slug: "otot",
  name: { id: "Otot", en: "Muscle" },
  icon: "💪",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Musculus",
  surahName: "Al-Qasas",
  surahReference: "28:26",
  unlockedAtPoints: 110,
  kosakata: [
    { arab: "عَضَلَةٌ", latin: "A'dhalatun", arti: "Otot", artiEn: "Muscle", contohAyat: "Inna khayra manista'jartal-qawiyyul-ameen (Sesungguhnya orang yang paling baik yang kamu ambil sebagai pekerja ialah orang yang kuat lagi dapat dipercaya)." }
  ],
  balita: {
    text: { id: "Tunjuk lenganmu! Wah, ada yang keras, ya? Itu namanya otot. Otot membantumu mengangkat mainan dan melompat tinggi seperti katak! Boing! 🐸💪", en: "Point to your arm! Wow, there's something hard, right? That's called a muscle. Muscles help you lift toys and jump high like a frog! Boing! 🐸💪" },
    audioTranscript: { id: "Otot itu tali-tali daging di dalam tubuh yang menarik tulang supaya kita bisa bergerak.", en: "Muscles are meat ropes inside the body that pull bones so we can move." },
    quiz: {
      question: { id: "Otot membantu kita untuk apa?", en: "Muscles help us to do what?" },
      options: [
        { text: { id: "Tidur saja", en: "Just sleep" } },
        { text: { id: "Melihat warna", en: "See colors" } },
        { text: { id: "Bergerak dan melompat", en: "Move and jump" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Di balik kulit kita, ada sekitar 600 otot yang menempel pada tulang! Otot itu seperti karet gelang yang bisa meregang dan mengerut. Kalau kita makan makanan sehat dan sering berolahraga, otot kita jadi kuat! Seorang mukmin yang kuat fisiknya lebih dicintai Allah daripada mukmin yang lemah. Ayo rajin olahraga! 🚴‍♂️🤸‍♀️", en: "Under our skin, there are about 600 muscles attached to the bones! Muscles are like rubber bands that can stretch and contract. If we eat healthy food and exercise often, our muscles get strong! A believer who is physically strong is more loved by Allah than a weak believer. Let's exercise diligently! 🚴‍♂️🤸‍♀️" },
    facts: [
      { id: "Dibutuhkan 43 otot untuk cemberut, tapi hanya butuh 17 otot untuk tersenyum. Jadi senyum itu lebih hemat energi! 😊", en: "It takes 43 muscles to frown, but only 17 muscles to smile. So smiling saves more energy! 😊" },
      { id: "Otot terkuat di tubuh manusia (berdasarkan ukurannya) adalah otot rahang yang digunakan untuk mengunyah! 🦷", en: "The strongest muscle in the human body (based on its size) is the jaw muscle used for chewing! 🦷" },
      { id: "Otot menyumbang hampir setengah dari berat badan kita.", en: "Muscles make up nearly half of our body weight." }
    ],
    quranVerse: {
      arabic: "إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ",
      transliteration: "Inna khayra manista'jartal-qawiyyul-ameen",
      translation: { id: "Sesungguhnya orang yang paling baik yang kamu ambil untuk bekerja (pada kita) ialah orang yang kuat lagi dapat dipercaya.", en: "Indeed, the best one you can hire is the strong and the trustworthy." },
      context: { id: "Kekuatan fisik (otot) yang digunakan untuk kebaikan adalah sifat yang terpuji dalam Islam.", en: "Physical strength (muscles) used for good is a praiseworthy trait in Islam." }
    },
    quiz: {
      question: { id: "Lebih mudah (membutuhkan lebih sedikit otot) untuk melakukan apa?", en: "Is it easier (requires fewer muscles) to do what?" },
      options: [
        { text: { id: "Cemberut", en: "Frown" } },
        { text: { id: "Tersenyum", en: "Smile" } },
        { text: { id: "Marah", en: "Be angry" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Otot tidak pernah mendorong, mereka hanya menarik! Saat kamu menekuk lengan, otot bisep di depan menarik tulang bawah ke atas, sementara otot trisep di belakang rileks. Ketika lengan diluruskan, ganti otot trisep yang menarik. Sistem tuas (katrol) biologis ini dirancang sangat presisi oleh Allah agar tubuh manusia bisa melakukan gerakan halus seperti menulis hingga gerakan kasar seperti mengangkat batu. Subhanallah! 🏗️⚙️", en: "Muscles never push, they only pull! When you bend your arm, the bicep muscle in front pulls the lower bone up, while the triceps in back relax. When the arm is straightened, the triceps take a turn pulling. This biological lever (pulley) system is designed very precisely by Allah so the human body can perform fine movements like writing to gross movements like lifting rocks. Subhanallah! 🏗️⚙️" },
    anatomy: [
      { part: { id: "Otot Rangka (Lurik)", en: "Skeletal Muscle" }, desc: { id: "Otot yang menempel di tulang, kita bisa mengendalikannya secara sadar.", en: "Muscles attached to bones, we can control them consciously." } },
      { part: { id: "Otot Polos", en: "Smooth Muscle" }, desc: { id: "Otot di organ dalam seperti lambung dan usus yang bergerak otomatis.", en: "Muscles in internal organs like the stomach and intestines that move automatically." } },
      { part: { id: "Otot Jantung", en: "Cardiac Muscle" }, desc: { id: "Otot super spesial yang tidak pernah lelah berdetak seumur hidup!", en: "A super special muscle that never gets tired of beating for a lifetime!" } }
    ],
    wowFactor: { id: "Lidah adalah organ yang tersusun dari sekumpulan otot yang sangat fleksibel dan tidak menempel pada tulang di kedua ujungnya! 👅", en: "The tongue is an organ made of a group of highly flexible muscles and is not attached to bones at both ends! 👅" },
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnal-insaana fee ahsani taqweem",
      translation: { id: "Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." }
    },
    quiz: [
      {
        question: { id: "Jenis otot apa yang bergerak sendiri secara otomatis di lambung kita?", en: "What type of muscle moves automatically in our stomach?" },
        options: [
          { text: { id: "Otot Jantung", en: "Cardiac Muscle" } },
          { text: { id: "Otot Rangka", en: "Skeletal Muscle" } },
          { text: { id: "Otot Polos", en: "Smooth Muscle" } }
        ],
        answerIdx: 2
      }
    ]
  }
};