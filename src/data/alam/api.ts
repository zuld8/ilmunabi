import { ObjectData } from "../objects";

export const apiData: ObjectData = {
  slug: "api",
  name: { id: "Api", en: "Fire" },
  icon: "🔥",
  category: "alam",
  type: "alam",
  scientificName: "Ignis (Combustion)",
  surahName: "Al-Waqi'ah",
  surahReference: "56:71-72",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "نَار", latin: "Naar", arti: "Api", artiEn: "Fire", contohAyat: "أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ" }
  ],
  balita: {
    text: { id: "Sssh! Api itu sangat panas dan terang! 🔥 Kita tidak boleh memegang api ya, biar tangan kita tidak terluka.", en: "Sssh! Fire is very hot and bright! 🔥 We shouldn't touch fire, so our hands won't get hurt." },
    audioTranscript: { id: "Api warnanya bisa merah, kuning, dan oranye. Bunda pakai api di kompor untuk memasak makanan yang enak!", en: "Fire can be red, yellow, and orange. Mom uses fire on the stove to cook delicious food!" },
    quiz: {
      question: { id: "Api gunanya untuk apa saat malam hari sedang gelap gulita?", en: "What is fire used for when the night is pitch black?" },
      options: [
        { text: { id: "Untuk dimakan", en: "To be eaten" } },
        { text: { id: "Untuk menerangi jalan", en: "To light up the road" } },
        { text: { id: "Untuk diminum", en: "To be drunk" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Api adalah cahaya dan panas yang muncul karena benda sedang terbakar. Api sangat berguna buat manusia, seperti untuk memasak, menghangatkan badan, dan menjadi sumber cahaya di tempat gelap!", en: "Fire is light and heat that appears when things are burning. Fire is very useful for humans, like for cooking, warming the body, and being a light source in dark places!" },
    facts: [
      { id: "Warna api menunjukkan seberapa panas api itu! Api biru ternyata jauh lebih panas daripada api merah.", en: "The color of fire shows how hot it is! Blue fire is actually much hotter than red fire." },
      { id: "Api tidak memiliki bayangan! Coba nyalakan lilin dan sinari pakai senter ke dinding, apinya tidak akan membentuk bayangan.", en: "Fire has no shadow! Try lighting a candle and shine a flashlight on it towards a wall, the fire won't form a shadow." },
      { id: "Api selalu mengarah ke atas karena udara panas di sekitar api lebih ringan dan akan selalu naik.", en: "Fire always points up because the hot air around the fire is lighter and will always rise." }
    ],
    quranVerse: {
      arabic: "أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ",
      transliteration: "Afa ra'aytumun-naaral-latii tuuruun",
      translation: { id: "Maka terangkanlah kepadaku tentang api yang kamu nyalakan.", en: "Then tell Me about the fire that you ignite." },
      context: { id: "Allah menyuruh kita berpikir, siapa yang menciptakan pohon hijau sehingga bisa menjadi kayu bakar pembuat api?", en: "Allah commands us to think, who created the green tree so it could become firewood to make fire?" }
    },
    quiz: {
      question: { id: "Warna api apa yang suhunya paling panas?", en: "What color of fire has the hottest temperature?" },
      options: [
        { text: { id: "Api Biru", en: "Blue Fire" } },
        { text: { id: "Api Merah", en: "Red Fire" } },
        { text: { id: "Api Kuning", en: "Yellow Fire" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Dalam fisika dan kimia, api adalah hasil dari reaksi pembakaran (oksidasi) yang sangat cepat sehingga melepaskan panas dan foton (cahaya). Syarat terjadinya api adalah 'Segitiga Api': oksigen, bahan bakar, dan panas. Yang luar biasa, Al-Qur'an mengajak kita memikirkan penciptaan kayu hijau yang bisa menghasilkan api, padahal pohon hijau penuh dengan air!", en: "In physics and chemistry, fire is the result of a very rapid combustion (oxidation) reaction that releases heat and photons (light). The requirement for fire is the 'Fire Triangle': oxygen, fuel, and heat. Amazingly, the Quran invites us to ponder the creation of green wood that can produce fire, even though green trees are full of water!" },
    anatomy: [
      { part: { id: "Oksigen (O2)", en: "Oxygen (O2)" }, desc: { id: "Gas di udara yang membuat api bisa terus menyala.", en: "Gas in the air that keeps the fire burning." } },
      { part: { id: "Bahan Bakar", en: "Fuel" }, desc: { id: "Benda yang dibakar seperti kayu, kertas, atau gas alam.", en: "The item being burned like wood, paper, or natural gas." } }
    ],
    wowFactor: { id: "HAH?! Api tidak bisa menyala di luar angkasa karena tidak ada oksigen! Tapi jika kita membawa oksigen ke sana, apinya akan berbentuk bulat sempurna seperti bola bercahaya karena tidak ada gravitasi yang menarik udara panas ke atas!", en: "WOW?! Fire cannot burn in space because there is no oxygen! But if we brought oxygen there, the fire would be perfectly round like a glowing ball because there's no gravity pulling hot air up!" },
    quranVerse: {
      arabic: "أَأَنْتُمْ أَنْشَأْتُمْ شَجَرَتَهَا أَمْ نَحْنُ الْمُنْشِئُونَ",
      transliteration: "A'antum ansya'tum syajaratahaa am nahnul-munsyi'uun",
      translation: { id: "Kamukah yang menjadikan kayu itu atau Kamikah yang menjadikannya?", en: "Is it you who brought forth its tree, or are We the Bringers?" }
    },
    quiz: [
      {
        question: { id: "Syarat terjadinya api sering disebut 'Segitiga Api'. Manakah yang BUKAN bagian dari Segitiga Api?", en: "The requirements for fire are often called the 'Fire Triangle'. Which one is NOT a part of the Fire Triangle?" },
        options: [
          { text: { id: "Karbondioksida", en: "Carbon dioxide" } },
          { text: { id: "Oksigen", en: "Oxygen" } },
          { text: { id: "Bahan bakar", en: "Fuel" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
