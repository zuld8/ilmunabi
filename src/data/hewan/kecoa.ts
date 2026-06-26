import { ObjectData } from "../objects";

export const kecoaData: ObjectData = {
  slug: "kecoa",
  name: { id: "Kecoa", en: "Cockroach" },
  scientificName: "Blattodea",
  surahName: "Al-Baqarah",
  surahReference: "2:26",
  icon: "🪳",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "بَعُوضَةٌ", latin: "Ba'udhatun", arti: "Nyamuk (Perumpamaan serangga hina)", artiEn: "Mosquito (Metaphor for lowly insect)", contohAyat: "Al-Baqarah 2:26" },
    { arab: "سَرِيعٌ", latin: "Sarii'un", arti: "Cepat", artiEn: "Fast", contohAyat: "Al-Baqarah 2:202" },
    { arab: "حَيَاةٌ", latin: "Hayaatun", arti: "Kehidupan", artiEn: "Life", contohAyat: "Al-Anbiya 21:30" },
    { arab: "مَثَلٌ", latin: "Masalun", arti: "Perumpamaan", artiEn: "Example/Parable", contohAyat: "Al-Baqarah 2:26" }
  ],
  balita: {
    text: {
      id: "Wusss! Kecoa bisa lari sangat cepat dan bersembunyi di tempat gelap. 🪳",
      en: "Whoosh! Cockroaches can run very fast and hide in the dark. 🪳"
    },
    audioTranscript: {
      id: "Kecoa adalah serangga pelari cepat. Ia diciptakan sangat lincah.",
      en: "The cockroach is a fast-running insect. It was created very agile."
    },
    quiz: {
      question: { id: "Hewan apa yang larinya sangat cepat dan suka tempat gelap?", en: "Which animal runs very fast and likes dark places?" },
      options: [
        { text: { id: "🪳 Kecoa", en: "🪳 Cockroach" } },
        { text: { id: "🐢 Kura-kura", en: "🐢 Turtle" } },
        { text: { id: "🦋 Kupu-kupu", en: "🦋 Butterfly" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: {
      id: "Meski banyak orang takut, kecoa adalah salah satu penyintas terhebat ciptaan Allah. Dalam Al-Qur'an, Allah tidak malu membuat perumpamaan hewan kecil untuk pelajaran manusia.",
      en: "Though many fear them, cockroaches are one of Allah's greatest survivors. In the Qur'an, Allah is not ashamed to use tiny animals as examples for human lessons."
    },
    facts: [
      { id: "Kecoa bisa bertahan hidup sebulan tanpa makanan!", en: "Cockroaches can survive a month without food!" },
      { id: "Mereka bisa berlari dengan kecepatan 5 km/jam.", en: "They can run at a speed of 5 km/h." },
      { id: "Kecoa dapat menahan napas di dalam air selama 40 menit.", en: "Cockroaches can hold their breath underwater for 40 minutes." },
      { id: "Kecoa adalah 'pembersih alam' karena memakan sisa-sisa organik.", en: "Cockroaches are 'nature's cleaners' because they eat organic waste." },
      { id: "Bentuk tubuh mereka sangat pipih sehingga bisa masuk ke celah kecil.", en: "Their body shape is very flat so they can fit into tiny crevices." }
    ],
    quranVerse: {
      arabic: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَن يَضْرِبَ مَثَلًا مَّا بَعُوضَةً فَمَا فَوْقَهَا",
      transliteration: "Innallāha lā yastaḥyī ay yaḍriba masalam mā ba‘ūḍatan fa mā fauqahā",
      translation: {
        id: "Sesungguhnya Allah tiada segan membuat perumpamaan berupa nyamuk atau yang lebih rendah dari itu.",
        en: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it."
      }
    },
    quiz: {
      question: { id: "Berapa lama kecoa bisa menahan napas di air?", en: "How long can a cockroach hold its breath underwater?" },
      options: [
        { text: { id: "1 Menit", en: "1 Minute" } },
        { text: { id: "40 Menit", en: "40 Minutes" } },
        { text: { id: "Tidak bisa sama sekali", en: "Cannot at all" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: {
      id: "Kecoa adalah keajaiban biomekanik. Mereka bisa menahan tekanan hingga 900 kali berat badannya dan otak mereka bisa memproses gerak hanya dalam 50 milidetik!",
      en: "Cockroaches are biomechanical marvels. They can withstand pressure up to 900 times their body weight and their brain processes motion in just 50 milliseconds!"
    },
    anatomy: [
      { part: { id: "Eksoskeleton Fleksibel", en: "Flexible Exoskeleton" }, desc: { id: "Cangkang luar yang bisa memipih dan elastis.", en: "Outer shell that can flatten and is elastic." } },
      { part: { id: "Cerci (Sensor Belakang)", en: "Cerci (Rear Sensors)" }, desc: { id: "Sensor di belakang tubuh pendeteksi pergerakan angin sekecil apapun.", en: "Sensors at the rear detecting the slightest wind movement." } }
    ],
    wowFactor: {
      id: "Sistem saraf cerci kecoa sangat cepat mendeteksi musuh. Bahkan sebelum otak memikirkannya, saraf refleks langsung menyuruh kakinya berlari! Ini adalah sistem otonom ciptaan Allah.",
      en: "The cerci nervous system detects enemies instantly. Even before the brain thinks, reflex nerves tell the legs to run! This is an autonomous system created by Allah."
    },
    quranVerse: {
      arabic: "وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِن دَابَّةٍ آيَاتٌ لِّقَوْمٍ يُوقِنُونَ",
      transliteration: "Wa fī khalqikum wa mā yabussu min dābbatin āyātul liqaumiy yūqinūn",
      translation: { id: "Dan pada penciptaan dirimu dan pada binatang-binatang yang bertebaran terdapat tanda-tanda kekuasaan Allah untuk kaum yang meyakini.", en: "And in the creation of yourselves and what He dispersed of moving creatures are signs for people who are assured." },
      context: { id: "Anatomi bertahan hidup kecoa adalah tanda kekuasaan Allah bagi ilmuwan biomekanik.", en: "The cockroach's survival anatomy is a sign of Allah's power for biomechanical scientists." }
    },
    quiz: [
      {
        question: { id: "Sensor apa yang membuat kecoa bisa menghindari injakan kaki dengan cepat?", en: "What sensor allows cockroaches to dodge stomping feet so fast?" },
        options: [
          { text: { id: "Hidung panjang", en: "Long nose" } },
          { text: { id: "Mata laser", en: "Laser eyes" } },
          { text: { id: "Cerci (Sensor angin di pantat)", en: "Cerci (Wind sensor at the rear)" } }
        ],
        answerIdx: 2
      },
      {
        question: { id: "Berapa tekanan yang bisa ditahan eksoskeleton kecoa?", en: "How much pressure can a cockroach's exoskeleton withstand?" },
        options: [
          { text: { id: "Hanya 2 kg", en: "Only 2 kg" } },
          { text: { id: "Hingga 900 kali berat badannya", en: "Up to 900 times its body weight" } },
          { text: { id: "Kecoa sangat rapuh", en: "Cockroaches are very fragile" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apakah Allah malu membuat perumpamaan hewan kecil (seperti nyamuk/kecoa) di Qur'an?", en: "Is Allah ashamed to make examples of small animals (like mosquitoes/cockroaches) in the Qur'an?" },
        options: [
          { text: { id: "Ya, karena hewan itu menjijikkan", en: "Yes, because the animals are disgusting" } },
          { text: { id: "Tidak, Allah menggunakan mereka sebagai pelajaran bagi manusia", en: "No, Allah uses them as a lesson for humans" } },
          { text: { id: "Allah hanya mengumpamakan hewan besar", en: "Allah only uses large animals as examples" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
