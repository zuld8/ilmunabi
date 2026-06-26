import { ObjectData } from "../objects";

export const kulitData: ObjectData = {
  slug: "kulit",
  name: { id: "Kulit", en: "Skin" },
  icon: "🤲",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Cutis",
  surahName: "Fussilat",
  surahReference: "41:20-21",
  unlockedAtPoints: 70,
  kosakata: [
    { arab: "جِلْدٌ", latin: "Jildun", arti: "Kulit", artiEn: "Skin", contohAyat: "Qaaloo lijuloodehim lima shahidtum 'alayna (Mereka berkata kepada kulit mereka: Mengapa kamu menjadi saksi terhadap kami?)." }
  ],
  balita: {
    text: { id: "Sentuh tanganmu! Lembut sekali kan? Kulit itu seperti jaket pelindung seluruh tubuh kita. Jaket kulit buatan Allah sangat hebat! 🧥✨", en: "Touch your hand! It's very soft, isn't it? Skin is like a protective jacket for our whole body. The skin jacket made by Allah is amazing! 🧥✨" },
    audioTranscript: { id: "Kulit melindungi kita dari panas, dingin, dan kotoran. Mandi pakai sabun agar kulit bersih!", en: "Skin protects us from heat, cold, and dirt. Shower with soap to keep the skin clean!" },
    quiz: {
      question: { id: "Kulit melindungi tubuh kita seperti apa?", en: "Skin protects our body like what?" },
      options: [
        { text: { id: "Jaket pelindung", en: "Protective jacket" } },
        { text: { id: "Topi", en: "Hat" } },
        { text: { id: "Sepatu", en: "Shoes" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Kulit adalah organ terbesar di tubuh kita! Ia bisa merasakan kasar, halus, panas, atau dingin. Saat kita kepanasan, kulit akan mengeluarkan keringat seperti AC alami untuk mendinginkan badan. Kulit kita beragam warnanya, ada yang terang ada yang gelap, dan semuanya indah diciptakan Allah! 🌈", en: "Skin is the largest organ in our body! It can feel rough, smooth, hot, or cold. When we are too hot, the skin sweats like a natural AC to cool the body. Our skin comes in various colors, some light some dark, and all are beautifully created by Allah! 🌈" },
    facts: [
      { id: "Manusia terus-menerus merontokkan sel kulit mati; ribuan kulit mati jatuh setiap hari! 🍂", en: "Humans constantly shed dead skin cells; thousands of dead skin cells fall off every day! 🍂" },
      { id: "Debu di dalam rumah kita sebagian besar adalah kulit mati kita sendiri! 🤯", en: "The dust in our house is mostly our own dead skin! 🤯" },
      { id: "Di ujung jari kita, kulit sangat sensitif sehingga bisa mendeteksi sesuatu seukuran sebutir pasir.", en: "At our fingertips, the skin is so sensitive it can detect something the size of a grain of sand." }
    ],
    quranVerse: {
      arabic: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
      transliteration: "Yaa ayyuhaan-naasu innaa khalaqnaakum min thakarin wa unthaa waja'alnaakum shu'ooban waqabaa-ila lita'aarafoo",
      translation: { id: "Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal.", en: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another." },
      context: { id: "Perbedaan warna kulit adalah tanda kebesaran Allah agar kita saling mengenal, bukan saling mengejek.", en: "Differences in skin color are a sign of Allah's greatness so we know each other, not mock each other." }
    },
    quiz: {
      question: { id: "Apa yang dikeluarkan kulit saat tubuh kita kepanasan?", en: "What does the skin release when our body is too hot?" },
      options: [
        { text: { id: "Keringat", en: "Sweat" } },
        { text: { id: "Darah", en: "Blood" } },
        { text: { id: "Air mata", en: "Tears" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Kulitmu punya tiga lapisan utama. Lapisan terluar (Epidermis) memperbarui dirinya setiap 28 hari! Di dalam Al-Qur'an, disebutkan bahwa kelak di hari kiamat, kulit manusia bisa berbicara dan menjadi saksi atas apa yang kita sentuh dan perbuat. Secara sains modern pun, kulit memang menyimpan sistem saraf peraba paling detail. Mari gunakan sentuhan dan perbuatan kita untuk hal-hal yang baik dan diridhai Allah, karena kulit kita merekam semuanya! ✋✨", en: "Your skin has three main layers. The outermost layer (Epidermis) renews itself every 28 days! In the Quran, it is mentioned that later on the Day of Judgment, human skin can speak and be a witness to what we touched and did. In modern science too, the skin indeed holds the most detailed tactile nervous system. Let's use our touch and actions for good things that please Allah, because our skin records everything! ✋✨" },
    anatomy: [
      { part: { id: "Epidermis", en: "Epidermis" }, desc: { id: "Lapisan paling luar pelindung air dan penentu warna kulitmu (melanin).", en: "The outermost waterproof layer and determiner of your skin color (melanin)." } },
      { part: { id: "Dermis", en: "Dermis" }, desc: { id: "Lapisan tengah yang tebal, berisi akar rambut, kelenjar keringat, dan saraf perasa.", en: "The thick middle layer, containing hair roots, sweat glands, and sensory nerves." } },
      { part: { id: "Hipodermis", en: "Hypodermis" }, desc: { id: "Lapisan terdalam dari lemak yang berfungsi sebagai bantal penahan benturan.", en: "The deepest layer of fat functioning as a shock-absorbing cushion." } }
    ],
    wowFactor: { id: "Luas kulit manusia dewasa jika direntangkan bisa mencapai sekitar 2 meter persegi. Itu setara dengan selimut tidur kecil! 🛏️", en: "The surface area of an adult's skin if stretched out could reach about 2 square meters. That's equivalent to a small blanket! 🛏️" },
    quranVerse: {
      arabic: "وَقَالُوا لِجُلُودِهِمْ لِمَ شَهِدتُّمْ عَلَيْنَا ۖ قَالُوا أَنطَقَنَا اللَّهُ الَّذِي أَنطَقَ كُلَّ شَيْءٍ",
      transliteration: "Waqaaloo lijuloodehim lima shahidtum 'alaynaa qaaloo antaqanallaahul-lathee antaqa kulla shay-in",
      translation: { id: "Dan mereka berkata kepada kulit mereka: 'Mengapa kamu menjadi saksi terhadap kami?' Kulit mereka menjawab: 'Allah yang menjadikan segala sesuatu pandai berkata telah menjadikan kami pandai berkata.'", en: "And they will say to their skins, 'Why have you testified against us?' They will say, 'We were made to speak by Allah, who has made everything speak.'" }
    },
    quiz: [
      {
        question: { id: "Zat apa di lapisan Epidermis yang menentukan warna kulit kita?", en: "What substance in the Epidermis layer determines our skin color?" },
        options: [
          { text: { id: "Keratin", en: "Keratin" } },
          { text: { id: "Melanin", en: "Melanin" } },
          { text: { id: "Hemoglobin", en: "Hemoglobin" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
