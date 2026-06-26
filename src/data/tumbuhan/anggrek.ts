import { ObjectData } from "../objects";

export const anggrekData: ObjectData = {
  slug: "anggrek",
  name: { id: "Anggrek", en: "Orchid" },
  icon: "🌸",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Orchidaceae",
  surahName: "Al-An'am",
  surahReference: "6:99",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "سِحْلِب", latin: "Sihlib", arti: "Anggrek", artiEn: "Orchid", contohAyat: "Allah menciptakan bunga-bunga yang indah." }
  ],
  balita: {
    text: { id: "Wah, lihat bunga anggrek ini! Warnanya sangat cantik dan bentuknya unik! 🌸", en: "Wow, look at this orchid! The colors are so beautiful and its shape is unique! 🌸" },
    audioTranscript: { id: "Bunga anggrek sangat indah dan harum.", en: "The orchid is very beautiful and fragrant." },
    quiz: {
      question: { id: "Bunga apa yang warnanya sangat cantik dan menempel di pohon?", en: "What flower has beautiful colors and sticks to trees?" },
      options: [
        { text: { id: "Bunga Mawar", en: "Rose" } },
        { text: { id: "Bunga Anggrek", en: "Orchid" } },
        { text: { id: "Bunga Matahari", en: "Sunflower" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Anggrek adalah bunga spesial! Beberapa jenis anggrek hidup dengan menempel pada pohon lain, tapi tidak merugikan pohon itu. Subhanallah, Allah menciptakan anggrek dengan bentuk yang sangat beragam, ada yang mirip serangga, lho!", en: "Orchids are special flowers! Some orchids live by attaching themselves to other trees, but they do not harm the tree. Subhanallah, Allah created orchids with very diverse shapes, some even look like insects!" },
    facts: [
      { id: "Keluarga anggrek memiliki lebih dari 28.000 spesies yang berbeda!", en: "The orchid family has over 28,000 different species!" },
      { id: "Biji anggrek adalah salah satu biji terkecil di dunia.", en: "Orchid seeds are some of the smallest seeds in the world." },
      { id: "Anggrek bisa hidup di berbagai tempat, kecuali di daerah yang sangat dingin (Antartika).", en: "Orchids can live almost anywhere, except in extremely cold regions (Antarctica)." }
    ],
    quranVerse: {
      arabic: "وَهُوَ الَّذِي أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ",
      transliteration: "Wa huwa alladhī anzala mina as-samā'i mā'an fa akhrajnā bihi nabāta kulli shay'in",
      translation: { id: "Dan Dialah yang menurunkan air hujan dari langit, lalu Kami tumbuhkan dengan air itu segala macam tumbuh-tumbuhan...", en: "And it is He who sends down rain from the sky, and We produce thereby the growth of all things..." },
      context: { id: "Allah Maha Pencipta, menumbuhkan berbagai tanaman cantik seperti anggrek.", en: "Allah, the Creator, grows various beautiful plants like orchids." }
    },
    quiz: {
      question: { id: "Di mana banyak bunga anggrek biasa hidup?", en: "Where do many orchids usually live?" },
      options: [
        { text: { id: "Menempel di pohon lain", en: "Attaching to other trees" } },
        { text: { id: "Di dalam lautan", en: "In the ocean" } },
        { text: { id: "Terbang di udara", en: "Flying in the air" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Tahukah kamu bahwa anggrek memiliki trik khusus untuk menarik serangga agar membantu penyerbukan? Bentuknya yang indah sering kali menipu serangga yang mengira itu pasangannya! Desain serumit ini pasti membutuhkan pencipta yang Maha Cerdas. Allah Al-Khaliq telah mengatur segalanya dengan sempurna.", en: "Did you know that orchids have a special trick to attract insects for pollination? Their beautiful shapes often deceive insects into thinking they are their mates! Such complex design certainly requires an All-Intelligent creator. Allah Al-Khaliq has arranged everything perfectly." },
    anatomy: [
      { part: { id: "Akar Udara", en: "Aerial Roots" }, desc: { id: "Menyerap uap air dan nutrisi langsung dari udara.", en: "Absorbs moisture and nutrients directly from the air." } },
      { part: { id: "Labelum", en: "Labellum" }, desc: { id: "Kelopak bunga khusus yang bertindak sebagai tempat pendaratan bagi serangga.", en: "A special petal that acts as a landing pad for insects." } }
    ],
    wowFactor: { id: "Beberapa anggrek membutuhkan waktu hingga 7 tahun sebelum mereka mekar untuk pertama kalinya! Sungguh pelajaran tentang kesabaran.", en: "Some orchids take up to 7 years before they bloom for the first time! Truly a lesson in patience." },
    quranVerse: {
      arabic: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ",
      transliteration: "Sun‘a Allāhi alladhī atqana kulla shay'in",
      translation: { id: "(Itulah) ciptaan Allah yang membuat dengan kokoh (dan sempurna) tiap-tiap sesuatu.", en: "(It is) the work of Allah, who perfected all things." }
    },
    quiz: [
      {
        question: { id: "Apa fungsi dari Labelum pada bunga anggrek?", en: "What is the function of the Labellum on an orchid?" },
        options: [
          { text: { id: "Untuk bernapas di air", en: "To breathe underwater" } },
          { text: { id: "Tempat pendaratan bagi serangga penyerbuk", en: "A landing pad for pollinating insects" } },
          { text: { id: "Menangkap burung kecil", en: "To catch small birds" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
