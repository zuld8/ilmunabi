import { ObjectData } from "../objects";

export const kometData: ObjectData = {
  slug: "komet",
  name: { id: "Komet", en: "Comet" },
  icon: "☄️",
  category: "langit",
  type: "langit",
  scientificName: "Comet",
  surahName: "At-Tariq",
  surahReference: "86:1-3",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "ثَاقِب", latin: "Thaqib", arti: "Menembus", artiEn: "Piercing", contohAyat: "Bintang yang cahayanya menembus kegelapan" }
  ],
  balita: {
    text: { id: "Wuuussh! Ini komet! Dia seperti bola salju kotor raksasa yang punya ekor menyala panjang sekali! ❄️🔥", en: "Whoosh! This is a comet! It's like a giant dirty snowball with a super long glowing tail! ❄️🔥" },
    audioTranscript: { id: "Lihat itu! Ada bola salju terbang yang punya ekor cahaya panjang. Namanya Komet! Allah menciptakannya melesat sangat cepat di angkasa.", en: "Look at that! There's a flying snowball with a long tail of light. It's called a Comet! Allah created it to zoom very fast in space." },
    quiz: {
      question: { id: "Komet itu sering disebut mirip apa ya?", en: "What is a comet often said to look like?" },
      options: [
        { text: { id: "Bola api", en: "Fireball" } },
        { text: { id: "Bola salju kotor yang terbang", en: "Flying dirty snowball" } },
        { text: { id: "Kue donat", en: "Donut" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Komet terbuat dari es, debu, dan batuan sisa pembentukan tata surya. Kalau komet mendekati matahari, esnya akan menguap dan membentuk ekor yang indah!", en: "Comets are made of ice, dust, and rocks left over from the formation of the solar system. When a comet gets close to the sun, its ice evaporates and forms a beautiful tail!" },
    facts: [
      { id: "Ekor komet panjangnya bisa mencapai jutaan kilometer lho! Wow!", en: "A comet's tail can be millions of kilometers long! Wow!" },
      { id: "Anehnya, ekor komet SELALU menjauhi matahari, karena tertiup oleh angin matahari.", en: "Strangely, a comet's tail ALWAYS points away from the sun, blown by the solar wind." },
      { id: "Komet yang sangat terkenal adalah Komet Halley. Ia hanya lewat di dekat Bumi setiap 76 tahun sekali! 📅", en: "A very famous comet is Halley's Comet. It only passes near Earth once every 76 years! 📅" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Orbit komet sangat sangat lonjong. HAH?! Komet bisa pergi ke pinggiran tata surya yang paling gelap dan dingin, lalu kembali lagi meluncur mendekati panasnya matahari bak peluru tajam! 1400 tahun lalu, Al-Qur'an menggambarkan benda langit yang menembus kegelapan dengan cahayanya yang cemerlang.", en: "Comet orbits are incredibly elliptical. HAH?! Comets can travel to the darkest, coldest edges of the solar system, then shoot back near the scorching heat of the sun like a sharp bullet! 1400 years ago, the Quran described celestial bodies piercing the darkness with their brilliant light." },
    quranVerse: {
      arabic: "وَالسَّمَاءِ وَالطَّارِقِ ﴿١﴾ وَمَا أَدْرَاكَ مَا الطَّارِقُ ﴿٢﴾ النَّجْمُ الثَّاقِبُ ﴿٣﴾",
      transliteration: "Was-samā'i waṭ-ṭāriq (1). Wa mā adrāka maṭ-ṭāriq (2). An-najmuth-thāqib (3).",
      translation: { id: "Demi langit dan yang datang pada malam hari, tahukah kamu apakah yang datang pada malam hari itu? (yaitu) bintang yang cahayanya menembus.", en: "By the sky and the night comer - And what can make you know what is the night comer? It is the piercing star." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
