import { ObjectData } from "../objects";

export const hatiData: ObjectData = {
  slug: "hati",
  name: { id: "Hati", en: "Liver" },
  icon: "🥩",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Hepar",
  surahName: "Al-Mu'minun",
  surahReference: "23:78",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "كَبِدٌ", latin: "Kabidun", arti: "Hati", artiEn: "Liver", contohAyat: "Wahuwal-lathee ansha-a lakumus-sam'a wal-absaara wal-af'idah (Dan Dialah yang telah menciptakan bagimu pendengaran, penglihatan dan hati/perasaan)." }
  ],
  balita: {
    text: { id: "Hati itu superhero besar di perut kita! Dia membantu mengolah makanan yang kita makan jadi tenaga untuk bermain. Horee! 🦸‍♂️✨", en: "The liver is a big superhero in our belly! It helps process the food we eat into energy for playing. Hooray! 🦸‍♂️✨" },
    audioTranscript: { id: "Organ hati kita itu besar dan kuat, dia bekerja siang dan malam.", en: "Our liver organ is big and strong, it works day and night." },
    quiz: {
      question: { id: "Apakah hati organ yang besar di dalam perut kita?", en: "Is the liver a big organ in our belly?" },
      options: [
        { text: { id: "Tidak", en: "No" } },
        { text: { id: "Ya", en: "Yes" } },
        { text: { id: "Mungkin", en: "Maybe" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Hati atau liver itu organ tubuh terbesar di dalam perut kita! Dia punya lebih dari 500 tugas rahasia! Mulai dari membersihkan racun, menyimpan vitamin, sampai membuat cairan empedu. Masya Allah, Allah memberinya kekuatan super untuk bisa terus menolong tubuh kita. 🌟", en: "Did you know? The liver is the largest internal organ in our belly! It has more than 500 secret jobs! From cleaning toxins, storing vitamins, to making bile. Masya Allah, Allah gave it super strength to keep helping our body. 🌟" },
    facts: [
      { id: "Hati adalah satu-satunya organ tubuh yang bisa tumbuh kembali (regenerasi) meskipun sudah dipotong setengah! 🦎", en: "The liver is the only internal organ that can regrow (regenerate) even if it's cut in half! 🦎" },
      { id: "Hati menyimpan cadangan gula (glikogen) untuk dipakai saat kita sedang puasa atau lari cepat.", en: "The liver stores extra sugar (glycogen) to be used when we are fasting or running fast." },
      { id: "Berat hati orang dewasa itu sekitar seukuran bola basket kecil! 🏀", en: "The weight of an adult's liver is about the size of a small basketball! 🏀" }
    ],
    quranVerse: {
      arabic: "وَهُوَ الَّذِي أَنشَأَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۚ قَلِيلًا مَّا تَشْكُرُونَ",
      transliteration: "Wahuwal-lathee ansha-a lakumus-sam'a wal-absaara wal-af'idah; qaleelan maa tashkuroon",
      translation: { id: "Dan Dialah yang telah menciptakan bagimu pendengaran, penglihatan dan hati (perasaan). Sedikit sekali kamu bersyukur.", en: "And it is He who produced for you hearing and vision and hearts; little are you grateful." },
      context: { id: "Allah memberi kita anugerah organ vital untuk merenung dan mensyukuri penciptaan-Nya.", en: "Allah gave us the gift of vital organs to reflect and be grateful for His creation." }
    },
    quiz: {
      question: { id: "Berapa banyak tugas rahasia yang dilakukan oleh organ hati?", en: "How many secret jobs are done by the liver organ?" },
      options: [
        { text: { id: "Lebih dari 10", en: "More than 10" } },
        { text: { id: "Lebih dari 500", en: "More than 500" } },
        { text: { id: "Hanya 1", en: "Only 1" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Jika tubuh adalah sebuah kota, hati (liver) adalah pabrik pemrosesan kimianya. Setiap obat atau makanan yang kamu makan, pertama-tama dikirim ke hati untuk diperiksa. Jika ada racun, hati akan menghancurkannya! Keajaiban regenerasi hati membuat para dokter takjub; jika seseorang mendonorkan sebagian hatinya, sisa hatinya akan tumbuh lagi ke ukuran semula dalam beberapa minggu! Allah Al-Qayyum merancang pabrik kimia mandiri ini dengan kemampuan menakjubkan. 🧪🔍", en: "If the body were a city, the liver would be its chemical processing plant. Every medicine or food you eat is first sent to the liver to be inspected. If there are toxins, the liver destroys them! The miracle of liver regeneration amazes doctors; if someone donates a part of their liver, the remaining part will grow back to its original size in a few weeks! Allah Al-Qayyum designed this independent chemical factory with astonishing abilities. 🧪🔍" },
    anatomy: [
      { part: { id: "Lobus Kanan & Kiri", en: "Right & Left Lobes" }, desc: { id: "Bagian utama hati; lobus kanan jauh lebih besar dari yang kiri.", en: "The main parts of the liver; the right lobe is much larger than the left." } },
      { part: { id: "Kantung Empedu", en: "Gallbladder" }, desc: { id: "Kantung kecil hijau di bawah hati untuk menyimpan cairan pencerna lemak.", en: "A small green sac under the liver to store fat-digesting fluid." } },
      { part: { id: "Vena Porta", en: "Portal Vein" }, desc: { id: "Pipa darah besar yang membawa darah penuh makanan dari usus menuju hati.", en: "A large blood pipe that carries food-rich blood from the intestines to the liver." } }
    ],
    wowFactor: { id: "Hati memproduksi cairan hijau kekuningan bernama empedu, sekitar 1 liter sehari, yang sangat penting untuk menghancurkan lemak dari pizza atau gorengan! 🍕", en: "The liver produces a yellowish-green fluid called bile, about 1 liter a day, which is crucial for breaking down fat from pizza or fried food! 🍕" },
    quranVerse: {
      arabic: "وَهُوَ الَّذِي أَنشَأَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۚ قَلِيلًا مَّا تَشْكُرُونَ",
      transliteration: "Wahuwal-lathee ansha-a lakumus-sam'a wal-absaara wal-af'idah; qaleelan maa tashkuroon",
      translation: { id: "Dan Dialah yang telah menciptakan bagimu pendengaran, penglihatan dan hati (perasaan). Sedikit sekali kamu bersyukur.", en: "And it is He who produced for you hearing and vision and hearts; little are you grateful." }
    },
    quiz: [
      {
        question: { id: "Apa kemampuan luar biasa hati yang tidak dimiliki organ dalam lainnya?", en: "What is the extraordinary ability of the liver that other internal organs don't have?" },
        options: [
          { text: { id: "Bisa membesar selamanya", en: "Can grow forever" } },
          { text: { id: "Tumbuh kembali (Regenerasi)", en: "Regrow (Regeneration)" } },
          { text: { id: "Bisa berdetak seperti jantung", en: "Can beat like a heart" } }
        ],
        answerIdx: 1
      }
    ]
  }
};