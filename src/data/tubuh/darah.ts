import { ObjectData } from "../objects";

export const darahData: ObjectData = {
  slug: "darah",
  name: { id: "Darah", en: "Blood" },
  icon: "🩸",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Sanguis",
  surahName: "Al-'Alaq",
  surahReference: "96:2",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "دَمٌ", latin: "Dam", arti: "Darah", artiEn: "Blood", contohAyat: "Darah mengalir di seluruh tubuh." },
    { arab: "عَلَقٌ", latin: "'Alaq", arti: "Segumpal Darah", artiEn: "Blood Clot", contohAyat: "Manusia diciptakan dari segumpal darah." },
    { arab: "قَلْبٌ", latin: "Qalb", arti: "Jantung", artiEn: "Heart", contohAyat: "Jantung memompa darah." },
    { arab: "حَيَاةٌ", latin: "Hayaat", arti: "Kehidupan", artiEn: "Life", contohAyat: "Darah adalah sumber kehidupan tubuh." }
  ],
  
  balita: {
    text: { id: "Darah itu cairan berwarna merah yang sangat penting untuk hidup kita! 🩸", en: "Blood is a red liquid that is very important for our life! 🩸" },
    audioTranscript: { id: "Pernah jatuh dan lututmu berdarah? Jangan takut! Darah adalah prajurit tubuh yang mengantar makanan dan melawan kuman di tubuhmu.", en: "Ever fallen and your knee bled? Don't be scared! Blood is the body's soldier that delivers food and fights germs in your body." },
    quiz: {
      question: { id: "Apa warna darah kita?", en: "What color is our blood?" },
      options: [
        { text: { id: "🟩 Hijau", en: "🟩 Green" } },
        { text: { id: "🟥 Merah", en: "🟥 Red" } },
        { text: { id: "🟦 Biru", en: "🟦 Blue" } }
      ],
      answerIdx: 1
    }
  },
  
  anak: {
    text: { id: "Darahmu adalah sungai kehidupan yang mengalir tak henti di dalam tubuh membawa oksigen dan nutrisi!", en: "Your blood is a river of life that flows endlessly inside the body carrying oxygen and nutrients!" },
    facts: [
      { id: "Tubuh anak-anak punya sekitar 2-3 liter darah, sementara orang dewasa sekitar 5 liter.", en: "Children's bodies have about 2-3 liters of blood, while adults have about 5 liters." },
      { id: "Darah terlihat merah karena mengandung zat besi (iron) yang mirip dengan karat besi.", en: "Blood looks red because it contains iron, similar to iron rust." },
      { id: "Sel darah putih adalah superhero pelindung yang bertarung melawan virus dan bakteri yang masuk ke tubuhmu.", en: "White blood cells are superhero protectors fighting viruses and bacteria entering your body." },
      { id: "Butuh sekitar 20-60 detik saja bagi setetes darah untuk mengelilingi seluruh tubuhmu lalu kembali ke jantung.", en: "It takes about 20-60 seconds for a drop of blood to circle your whole body and return to the heart." },
      { id: "Nyamuk hanya butuh setetes kecil darahmu untuk makanannya.", en: "Mosquitoes only need a tiny drop of your blood for their food." }
    ],
    quranVerse: {
      arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",
      transliteration: "Khalaqal-insana min 'alaq",
      translation: { id: "Dia telah menciptakan manusia dari segumpal darah.", en: "Created man from a clinging substance (blood clot)." },
      context: { id: "Tau nggak? Semua manusia bermula dari sel kecil di perut ibu yang kemudian berkembang menjadi seperti segumpal darah ('alaq) yang menempel. Subhanallah!", en: "Did you know? All humans start from a small cell in the mother's womb that then develops like a clinging blood clot ('alaq). Subhanallah!" }
    },
    quiz: {
      question: { id: "Sel darah mana yang bertugas melawan penyakit dan kuman?", en: "Which blood cell fights diseases and germs?" },
      options: [
        { text: { id: "Sel darah merah", en: "Red blood cells" } },
        { text: { id: "Sel darah putih", en: "White blood cells" } },
        { text: { id: "Trombosit", en: "Platelets" } },
        { text: { id: "Plasma darah", en: "Blood plasma" } }
      ],
      answerIdx: 1
    }
  },
  
  explorer: {
    text: { id: "Darah adalah cairan ajaib yang terdiri dari berbagai macam komponen dengan tugas berbeda.\n\nAda Sel Darah Merah si kurir oksigen, Sel Darah Putih sang tentara imun, Keping Darah (Trombosit) si montir yang menambal luka, dan Plasma, cairan kuning tempat mereka semua berenang.\n\nSetiap detiknya, tubuhmu memproduksi 2 juta sel darah merah baru di sumsum tulang untuk menggantikan yang sudah mati lho!", en: "Blood is a magical fluid consisting of various components with different jobs.\n\nThere are Red Blood Cells the oxygen couriers, White Blood Cells the immune soldiers, Platelets the mechanics that patch wounds, and Plasma, the yellow liquid where they all swim.\n\nEvery second, your body produces 2 million new red blood cells in the bone marrow to replace the dead ones!" },
    anatomy: [
      { part: { id: "Eritrosit", en: "Erythrocytes" }, desc: { id: "Nama ilmiah untuk sel darah merah pembawa oksigen.", en: "Scientific name for oxygen-carrying red blood cells." } },
      { part: { id: "Leukosit", en: "Leukocytes" }, desc: { id: "Tentara tubuh yang memburu kuman penyakit.", en: "The body's soldiers that hunt down disease germs." } }
    ],
    wowFactor: { id: "Sains menemukan bahwa pada tahap awal perkembangan embrio di dalam rahim, ia tampak persis seperti seekor lintah kecil yang menempel untuk mengisap nutrisi darah dari ibunya.\n\nSangat mengejutkan! Kata 'Alaq' dalam Surah Al-'Alaq bahasa Arab memiliki tiga arti: segumpal darah, sesuatu yang menempel/menggantung, dan seekor lintah! Ketiga arti ini menggambarkan secara sempurna bentuk embrio manusia 14 abad sebelum mikroskop ditemukan!", en: "Science discovered that in the early stages of embryo development in the womb, it looks exactly like a tiny leech clinging to suck blood nutrients from its mother.\n\nMind-blowing! The word 'Alaq' in Surah Al-'Alaq in Arabic has three meanings: a blood clot, something clinging/suspending, and a leech! All three meanings perfectly describe the human embryo 14 centuries before microscopes were invented!" },
    quranVerse: {
      arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ﴿١﴾ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ﴿٢﴾",
      transliteration: "Iqra' bismi rabbikal-ladzi khalaq. Khalaqal-insana min 'alaq.",
      translation: { id: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan. Dia telah menciptakan manusia dari segumpal darah.", en: "Recite in the name of your Lord who created. Created man from a clinging substance." }
    },
    quiz: [
      {
        question: { id: "Mengapa darah kita berwarna merah?", en: "Why is our blood colored red?" },
        options: [{ text: { id: "Karena banyak makan tomat", en: "Because eating a lot of tomatoes" } }, { text: { id: "Karena mengandung zat besi", en: "Because it contains iron" } }, { text: { id: "Karena panas matahari", en: "Because of the sun's heat" } }, { text: { id: "Karena warnanya dicampur di jantung", en: "Because the color is mixed in the heart" } }],
        answerIdx: 1
      },
      {
        question: { id: "Selain berarti 'segumpal darah', kata 'Alaq' dalam bahasa Arab juga bisa diartikan sebagai hewan apa?", en: "Besides meaning 'blood clot', the word 'Alaq' in Arabic can also mean what animal?" },
        options: [{ text: { id: "Semut", en: "Ant" } }, { text: { id: "Lintah", en: "Leech" } }, { text: { id: "Laba-laba", en: "Spider" } }, { text: { id: "Lebah", en: "Bee" } }],
        answerIdx: 1
      },
      {
        question: { id: "Bagian darah yang bertugas menambal luka supaya darah berhenti mengalir disebut...", en: "The part of blood that patches wounds to stop bleeding is called..." },
        options: [{ text: { id: "Trombosit (Keping Darah)", en: "Platelets" } }, { text: { id: "Eritrosit", en: "Erythrocytes" } }, { text: { id: "Leukosit", en: "Leukocytes" } }, { text: { id: "Plasma", en: "Plasma" } }],
        answerIdx: 0
      }
    ]
  }
};
