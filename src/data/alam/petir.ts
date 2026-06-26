import { ObjectData } from "../objects";

export const petirData: ObjectData = {
  slug: "petir",
  name: { id: "Petir", en: "Lightning" },
  icon: "⚡",
  category: "alam",
  type: "alam",
  scientificName: "Fulgur (Electrostatic Discharge)",
  surahName: "Ar-Ra'd",
  surahReference: "13:12",
  unlockedAtPoints: 55,
  kosakata: [
    { arab: "بَرْق", latin: "Barq", arti: "Petir", artiEn: "Lightning", contohAyat: "هُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا" }
  ],
  balita: {
    text: { id: "JDER!! Suara petir keras sekali mengejutkan kita! ⚡ Petir itu kilatan cahaya di langit saat mau hujan badai.", en: "BOOM!! The thunder sound is so loud it surprises us! ⚡ Lightning is a flash of light in the sky when a storm is coming." },
    audioTranscript: { id: "Petir itu seperti listrik terang di awan. Kalau ada petir, kita harus cepat-cepat masuk ke dalam rumah supaya aman ya!", en: "Lightning is like bright electricity in the clouds. If there is lightning, we must quickly go inside the house to be safe!" },
    quiz: {
      question: { id: "Kalau kita melihat kilatan petir dan suara petir di luar, kita harus ngapain?", en: "If we see lightning flashes and thunder outside, what should we do?" },
      options: [
        { text: { id: "Masuk ke dalam rumah", en: "Go inside the house" } },
        { text: { id: "Main layangan", en: "Play kite" } },
        { text: { id: "Berenang di kolam", en: "Swim in the pool" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Petir adalah lompatan listrik raksasa dari awan ke tanah! Kilatan cahayanya sangat cepat dan bersuhu lebih panas dari permukaan matahari. Setelah ada kilat, barulah terdengar suara 'JDEER' yang kita sebut guntur.", en: "Lightning is a giant electricity jump from clouds to the ground! Its flash of light is very fast and hotter than the surface of the sun. After the flash, then we hear the 'BOOM' sound which we call thunder." },
    facts: [
      { id: "Satu sambaran petir mengandung listrik yang cukup untuk menyalakan jutaan lampu di satu kota besar!", en: "One lightning strike contains enough electricity to light up millions of lightbulbs in a big city!" },
      { id: "Kita selalu melihat cahaya petir duluan, baru setelah itu mendengar suaranya. Itu karena cahaya berlari jauh lebih cepat daripada suara.", en: "We always see the lightning flash first, then hear the sound after. That's because light runs much faster than sound." },
      { id: "Pohon tinggi sering tersambar petir, makanya jangan pernah berteduh di bawah pohon saat hujan badai!", en: "Tall trees are often struck by lightning, so never take shelter under a tree during a rainstorm!" }
    ],
    quranVerse: {
      arabic: "هُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا",
      transliteration: "Huwal-ladzii yuriikumul-barqa khawfaw wa thama'aa",
      translation: { id: "Dialah Tuhan yang memperlihatkan kilat kepadamu untuk menimbulkan ketakutan dan harapan.", en: "It is He who shows you lightening, [causing] fear and aspiration." },
      context: { id: "Kilat petir membuat kita takut karena suaranya keras, tapi juga memberi harapan karena setelah petir akan turun hujan rintik yang menyejukkan.", en: "Lightning makes us fearful because of its loud sound, but also gives hope because after lightning, cooling raindrops will fall." }
    },
    quiz: {
      question: { id: "Kenapa kita melihat kilatan cahaya petir dulu, baru mendengar suara guntur?", en: "Why do we see the lightning flash first, then hear the thunder sound?" },
      options: [
        { text: { id: "Karena guntur pemalu", en: "Because thunder is shy" } },
        { text: { id: "Karena kecepatan cahaya lebih cepat dari suara", en: "Because the speed of light is faster than sound" } },
        { text: { id: "Karena awan kelelahan", en: "Because the clouds are tired" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Petir terjadi akibat gesekan kristal es dan tetesan air di dalam awan badai (Kumulonimbus) yang menciptakan polarisasi muatan listrik ekstrem. Ion negatif di bagian bawah awan akan menyambar ion positif di bumi! Sangat luar biasa bahwa Al-Qur'an secara spesifik menyebutkan bahwa petir berfungsi membawa harapan dan rahmat hujan dari awan yang tebal bermuatan air.", en: "Lightning occurs due to the friction of ice crystals and water drops inside storm clouds (Cumulonimbus), creating extreme electric charge polarization. Negative ions at the cloud base strike positive ions on the earth! It is extraordinary that the Quran specifically mentions that lightning functions to bring hope and the blessing of rain from thick water-laden clouds." },
    anatomy: [
      { part: { id: "Stepped Leader", en: "Stepped Leader" }, desc: { id: "Jalur muatan listrik negatif tak kasat mata yang turun dari awan ke bawah.", en: "An invisible path of negative electrical charge coming down from the cloud." } },
      { part: { id: "Return Stroke", en: "Return Stroke" }, desc: { id: "Lompatan listrik positif kuat dari bumi ke atas menuju awan yang bercahaya sangat terang.", en: "The strong positive electrical jump from earth upwards to the cloud that glows super brightly." } }
    ],
    wowFactor: { id: "HAH?! Suhu satu sambaran petir bisa mencapai 30.000 derajat Celcius! Itu 5 KALI LEBIH PANAS daripada permukaan Matahari yang menyala-nyala!", en: "WOW?! The temperature of one lightning strike can reach 30,000 degrees Celsius! That is 5 TIMES HOTTER than the blazing surface of the Sun!" },
    quranVerse: {
      arabic: "يَكَادُ سَنَا بَرْقِهِ يَذْهَبُ بِالْأَبْصَارِ",
      transliteration: "Yakaadu sanaa barqihii yadzhabu bil-abshaar",
      translation: { id: "Kilauan kilat awan itu hampir-hampir menghilangkan penglihatan.", en: "The flash of its lightening almost takes away the eyesight." }
    },
    quiz: [
      {
        question: { id: "Berapa perbandingan panas suhu petir dibandingkan dengan permukaan matahari?", en: "What is the heat ratio of lightning temperature compared to the surface of the sun?" },
        options: [
          { text: { id: "Lebih dingin dari matahari", en: "Colder than the sun" } },
          { text: { id: "5 kali lebih panas dari permukaan matahari", en: "5 times hotter than the surface of the sun" } },
          { text: { id: "Sama persis suhunya", en: "Exactly the same temperature" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
