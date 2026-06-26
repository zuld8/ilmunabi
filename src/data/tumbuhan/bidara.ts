import { ObjectData } from "../objects";

export const bidaraData: ObjectData = {
  slug: "bidara",
  name: { id: "Bidara", en: "Sidr Tree" },
  icon: "🌳",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Ziziphus mauritiana",
  surahName: "Saba",
  surahReference: "34:16",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "سِدْر", latin: "Sidr", arti: "Bidara", artiEn: "Sidr Tree", contohAyat: "Pohon bidara disebutkan dalam surga." }
  ],
  balita: {
    text: { id: "Pohon bidara punya daun hijau kecil dan buah yang manis! Di daunnya kadang ada duri, jadi hati-hati ya. 🌳", en: "The Sidr tree has small green leaves and sweet fruits! There are sometimes thorns on its leaves, so be careful. 🌳" },
    audioTranscript: { id: "Pohon bidara sangat istimewa karena ada di surga.", en: "The Sidr tree is very special because it is in heaven." },
    quiz: {
      question: { id: "Apa yang harus kita perhatikan saat memegang ranting bidara?", en: "What should we be careful about when holding a Sidr branch?" },
      options: [
        { text: { id: "Gigi yang tajam", en: "Sharp teeth" } },
        { text: { id: "Duri", en: "Thorns" } },
        { text: { id: "Tanduk", en: "Horns" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Pohon bidara (Sidr) sangat istimewa dalam Islam! Daunnya sering digunakan untuk mandi bersih karena bisa menghilangkan kotoran seperti sabun. Pohon ini sangat kuat dan tahan panas, lho. Subhanallah, pohon bidara juga ada di Surga namun tanpa duri!", en: "The Sidr tree is very special in Islam! Its leaves are often used for cleansing baths because they can remove dirt like soap. This tree is very strong and heat-resistant. Subhanallah, there is also a Sidr tree in Heaven but without thorns!" },
    facts: [
      { id: "Daun bidara jika ditumbuk dan dicampur air akan mengeluarkan busa alami seperti sabun.", en: "Crushed Sidr leaves mixed with water will produce natural foam like soap." },
      { id: "Akar pohon bidara menembus sangat dalam ke tanah untuk mencari air di tempat kering.", en: "Sidr tree roots penetrate very deep into the soil to find water in dry places." },
      { id: "Madu dari bunga bidara adalah salah satu madu terbaik di dunia.", en: "Honey from Sidr flowers is one of the best honeys in the world." }
    ],
    quranVerse: {
      arabic: "فِي سِدْرٍ مَخْضُودٍ",
      transliteration: "Fī sidrin makhḍūdin",
      translation: { id: "Berada di antara pohon bidara yang tidak berduri.", en: "[They will be] among lote trees with thorns removed." },
      context: { id: "Allah menjanjikan orang-orang beriman pohon bidara yang indah di surga tanpa duri.", en: "Allah promises the believers beautiful Sidr trees in heaven without thorns." }
    },
    quiz: {
      question: { id: "Mengapa daun bidara sering digunakan sejak zaman Nabi?", en: "Why have Sidr leaves been used since the time of the Prophet?" },
      options: [
        { text: { id: "Karena bisa bernyanyi", en: "Because they can sing" } },
        { text: { id: "Untuk membersihkan badan seperti sabun", en: "To clean the body like soap" } },
        { text: { id: "Untuk dijadikan payung", en: "To be used as an umbrella" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Daun bidara memiliki senyawa saponin alami. Saat dilarutkan dalam air, saponin ini akan mengikat kotoran dan lemak layaknya sabun modern! Selain itu, pohon ini adalah 'survivor' sejati di padang pasir. Allah merancangnya untuk bisa bertahan hidup di suhu yang sangat ekstrem. Tidak heran pohon istimewa ini disebut dalam Al-Qur'an.", en: "Sidr leaves contain natural saponin compounds. When dissolved in water, this saponin binds dirt and fat just like modern soap! Besides, this tree is a true 'survivor' in the desert. Allah designed it to survive in very extreme temperatures. No wonder this special tree is mentioned in the Quran." },
    anatomy: [
      { part: { id: "Saponin", en: "Saponins" }, desc: { id: "Zat kimia alami di dalam daun yang berfungsi sebagai pembersih.", en: "Natural chemicals in the leaves that act as cleaners." } },
      { part: { id: "Akar Tunggang", en: "Taproot" }, desc: { id: "Akar utama yang sangat panjang untuk mencapai air tanah dalam.", en: "A very long main root to reach deep groundwater." } }
    ],
    wowFactor: { id: "Sidratul Muntaha adalah pohon bidara raksasa di langit ketujuh yang menjadi batas pencapaian makhluk Allah!", en: "Sidrat al-Muntaha is a giant lote tree in the seventh heaven marking the boundary of creation!" },
    quranVerse: {
      arabic: "عِنْدَ سِدْرَةِ الْمُنْتَهَىٰ",
      transliteration: "‘Inda sidrati al-muntahā",
      translation: { id: "Di Sidratul Muntaha (batas tertinggi).", en: "At the Lote Tree of the Utmost Boundary." }
    },
    quiz: [
      {
        question: { id: "Zat alami apa dalam daun bidara yang membuatnya bisa berbuih seperti sabun?", en: "What natural substance in Sidr leaves makes them foam like soap?" },
        options: [
          { text: { id: "Saponin", en: "Saponins" } },
          { text: { id: "Klorofil", en: "Chlorophyll" } },
          { text: { id: "Karbohidrat", en: "Carbohydrates" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
