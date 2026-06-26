import { ObjectData } from "../objects";

export const matahariData: ObjectData = {
  slug: "matahari",
  name: { id: "Matahari", en: "Sun" },
  icon: "☀️",
  category: "alam",
  type: "alam",
  scientificName: "Sol",
  surahName: "Ash-Shams",
  surahReference: "91:1",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "شَمْسٌ", latin: "Syamsun", arti: "Matahari", artiEn: "Sun", contohAyat: "Wasy-syamsi wa duhaahaa (Demi matahari dan sinarnya pada pagi hari)" },
    { arab: "نَهَارٌ", latin: "Nahar", arti: "Siang", artiEn: "Day", contohAyat: "Wan-nahaari idzaa jallaahaa (Dan siang apabila menampakkannya)" },
    { arab: "ضِيَاءٌ", latin: "Dhiya'", arti: "Cahaya bersinar", artiEn: "Shining light", contohAyat: "Huwal-ladzii ja'alasy-syamsa dhiyaa'an (Dialah yang menjadikan matahari bersinar)" },
    { arab: "حَرَارَةٌ", latin: "Hararah", arti: "Panas", artiEn: "Heat", contohAyat: "Matahari memberikan panas ke bumi" }
  ],

  balita: {
    text: { id: "Ini matahari! Matahari terbit di pagi hari dan membuat bumi jadi terang dan hangat! ☀️", en: "This is the sun! The sun rises in the morning and makes the earth bright and warm! ☀️" },
    audioTranscript: { id: "Wah, lihat ke atas langit! Ada matahari yang bersinar terang! Matahari bikin kita hangat. Alhamdulillah ya Allah, sudah menciptakan matahari! ☀️", en: "Wow, look up at the sky! The sun is shining brightly! The sun keeps us warm. Alhamdulillah, Allah created the sun! ☀️" },
    quiz: {
      question: { id: "Matahari munculnya kapan ya?", en: "When does the sun come out?" },
      options: [
        { text: { id: "🌅 Pagi dan Siang", en: "🌅 Morning and Day" } },
        { text: { id: "🌌 Malam hari", en: "🌌 Night time" } },
        { text: { id: "🌧️ Saat hujan deras saja", en: "🌧️ Only during heavy rain" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Matahari itu bintang raksasa yang sangat panas! Letaknya jauh sekali dari Bumi, tapi cahayanya bisa sampai ke kita.", en: "The sun is a giant, super hot star! It's very far from Earth, but its light can reach us." },
    facts: [
      { id: "Matahari adalah bintang yang paling dekat dengan Bumi.", en: "The sun is the closest star to Earth." },
      { id: "Besar matahari itu lebih dari 1 juta kali lebih besar dari Bumi!", en: "The sun is more than 1 million times larger than Earth!" },
      { id: "Suhu di permukaan matahari sangat panas, sekitar 5.500 derajat Celcius.", en: "The temperature on the sun's surface is very hot, around 5,500 degrees Celsius." },
      { id: "Cahaya matahari butuh waktu 8 menit untuk sampai ke Bumi.", en: "Sunlight takes 8 minutes to reach Earth." },
      { id: "Tanpa matahari, tidak akan ada kehidupan di Bumi karena semuanya akan membeku.", en: "Without the sun, there would be no life on Earth because everything would freeze." }
    ],
    quranVerse: {
      arabic: "هُوَ ٱلَّذِى جَعَلَ ٱلشَّمْسَ ضِيَآءً وَٱلْقَمَرَ نُورًا",
      transliteration: "Huwal-ladzii ja'alasy-syamsa dhiyaa'an wal-qamara nuuran",
      translation: { id: "Dialah yang menjadikan matahari bersinar dan bulan bercahaya.", en: "It is He who made the sun a shining light and the moon a derived light." },
      context: { id: "Tau nggak? Allah menciptakan matahari agar kita punya cahaya di siang hari dan tumbuhan bisa tumbuh. Keren banget kan ciptaan Allah!", en: "Did you know? Allah created the sun so we have light during the day and plants can grow. Allah's creation is amazing!" }
    },
    quiz: {
      question: { id: "Berapa lama cahaya matahari sampai ke Bumi?", en: "How long does it take for sunlight to reach Earth?" },
      options: [
        { text: { id: "8 Menit", en: "8 Minutes" } },
        { text: { id: "8 Jam", en: "8 Hours" } },
        { text: { id: "8 Detik", en: "8 Seconds" } },
        { text: { id: "8 Hari", en: "8 Days" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Matahari adalah pusat Tata Surya kita. Ia adalah bola gas pijar raksasa yang terdiri sebagian besar dari hidrogen dan helium.\n\nDi inti Matahari, terjadi reaksi fusi nuklir yang mengubah hidrogen menjadi helium. Reaksi ini melepaskan energi yang luar biasa besar, yang kemudian dipancarkan ke luar angkasa sebagai cahaya dan panas.\n\nGaya gravitasi Matahari yang sangat kuat menahan planet-planet, termasuk Bumi, tetap berada pada orbitnya.", en: "The Sun is the center of our Solar System. It is a giant ball of glowing gas consisting mostly of hydrogen and helium.\n\nIn the core of the Sun, nuclear fusion reactions occur that convert hydrogen into helium. This reaction releases an enormous amount of energy, which is then radiated into space as light and heat.\n\nThe Sun's incredibly strong gravitational pull keeps planets, including Earth, in their orbits." },
    anatomy: [
      { part: { id: "Inti Matahari", en: "Sun's Core" }, desc: { id: "Bagian tengah yang paling panas tempat terjadinya fusi nuklir.", en: "The hottest central part where nuclear fusion occurs." } },
      { part: { id: "Korona", en: "Corona" }, desc: { id: "Lapisan atmosfer paling luar yang bisa dilihat saat gerhana matahari total.", en: "The outermost atmospheric layer visible during a total solar eclipse." } }
    ],
    wowFactor: { id: "Sains menemukan bahwa Matahari adalah sumber energi utama tata surya, memancarkan sinar (dhiya') yang menyilaukan dan panas karena reaksi fusi nuklir dari dalam dirinya.\n\nAl-Qur'an secara menakjubkan membedakan cahaya matahari dan cahaya bulan. Matahari disebut 'dhiya' (sumber cahaya yang menyilaukan dan panas), sedangkan bulan disebut 'nur' (cahaya pantulan yang sejuk). Ini adalah fakta ilmiah yang baru dipahami berabad-abad kemudian!", en: "Science discovered that the Sun is the main energy source of the solar system, emitting a blinding and hot light (dhiya') due to nuclear fusion from within.\n\nThe Qur'an amazingly distinguishes between the light of the sun and the moon. The sun is called 'dhiya' (a blazing source of light), while the moon is called 'nur' (a cool reflected light). This is a scientific fact understood centuries later!" },
    quranVerse: {
      arabic: "وَجَعَلْنَا سِرَاجًا وَهَّاجًا",
      transliteration: "Wa ja'alnaa siraajan wahhaajaa",
      translation: { id: "Dan Kami jadikan pelita yang amat terang (matahari).", en: "And We made a fiercely burning lamp (the sun)." }
    },
    quiz: [
      {
        question: { id: "Proses apa yang menghasilkan energi di inti matahari?", en: "What process generates energy in the sun's core?" },
        options: [{ text: { id: "Fusi Nuklir", en: "Nuclear Fusion" } }, { text: { id: "Pembakaran Batu Bara", en: "Coal Combustion" } }, { text: { id: "Gesekan Angin", en: "Wind Friction" } }, { text: { id: "Reaksi Kimia Air", en: "Water Chemical Reaction" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa arti kata 'dhiya' dalam Al-Qur'an yang merujuk pada matahari?", en: "What does 'dhiya' mean in the Qur'an referring to the sun?" },
        options: [{ text: { id: "Cahaya bersinar yang memancarkan panas", en: "A shining light that emits heat" } }, { text: { id: "Cahaya redup", en: "Dim light" } }, { text: { id: "Batu meteor", en: "Meteor stone" } }, { text: { id: "Bulan sabit", en: "Crescent moon" } }],
        answerIdx: 0
      },
      {
        question: { id: "Gas apa yang paling banyak menyusun matahari?", en: "What gas mostly makes up the sun?" },
        options: [{ text: { id: "Hidrogen dan Helium", en: "Hydrogen and Helium" } }, { text: { id: "Oksigen dan Karbon Dioksida", en: "Oxygen and Carbon Dioxide" } }, { text: { id: "Nitrogen dan Metana", en: "Nitrogen and Methane" } }, { text: { id: "Besi dan Emas", en: "Iron and Gold" } }],
        answerIdx: 0
      }
    ]
  }
};
