import { ObjectData } from "../objects";

export const bulanData: ObjectData = {
  slug: "bulan",
  name: { id: "Bulan", en: "Moon" },
  icon: "🌙",
  category: "alam",
  type: "langit",
  scientificName: "Luna",
  surahName: "Yasin",
  surahReference: "36:39",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "قَمَر", latin: "Qamar", arti: "Bulan", artiEn: "Moon", contohAyat: "وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ" }
  ],
  balita: {
    text: { id: "Bulan itu cantik sekali! 🌙 Kadang bentuknya bulat penuh seperti bola, kadang melengkung seperti pisang!", en: "The moon is so pretty! 🌙 Sometimes it's round like a ball, sometimes it's curved like a banana!" },
    audioTranscript: { id: "Bulan menemani kita saat malam gelap. Bulan bersinar terang menjaga Bumi sebelum matahari terbit kembali besok pagi.", en: "The moon accompanies us when the night is dark. The moon shines brightly guarding the Earth before the sun rises again tomorrow morning." },
    quiz: {
      question: { id: "Bentuk bulan yang terlihat melengkung seperti pisang di langit malam disebut bulan apa?", en: "The moon shape that looks curved like a banana in the night sky is called what moon?" },
      options: [
        { text: { id: "Bulan Kotak", en: "Box Moon" } },
        { text: { id: "Bulan Sabit", en: "Crescent Moon" } },
        { text: { id: "Bulan Segitiga", en: "Triangle Moon" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bulan adalah teman terdekat Bumi di luar angkasa! Bulan itu sebenarnya tidak punya cahaya sendiri lho. Dia bersinar terang karena memantulkan cahaya dari Matahari seperti sebuah cermin raksasa.", en: "The moon is Earth's closest friend in space! The moon actually doesn't have its own light, you know. It shines brightly because it reflects light from the Sun like a giant mirror." },
    facts: [
      { id: "Manusia pernah mendarat di Bulan lho! Karena di sana tidak ada angin, jejak sepatu astronot itu akan tetap ada selamanya.", en: "Humans have landed on the Moon! Because there is no wind there, the astronauts' shoe prints will stay there forever." },
      { id: "Permukaan bulan penuh dengan lubang-lubang besar yang disebut Kawah, karena sering ditabrak oleh batu angkasa (meteor).", en: "The moon's surface is full of big holes called Craters, because it's often hit by space rocks (meteors)." },
      { id: "Bulan bergerak mengelilingi Bumi sambil berputar pelan, makanya kita selalu melihat sisi wajah Bulan yang sama.", en: "The moon orbits the Earth while spinning slowly, that's why we always see the exact same side of the Moon." }
    ],
    quranVerse: {
      arabic: "وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ",
      transliteration: "Wal-qamara qaddarnaahu manaazila hattaa 'aada kal-'urjuunil-qadiim",
      translation: { id: "Dan telah Kami tetapkan bagi bulan manzilah-manzilah, sehingga (setelah dia sampai ke manzilah yang terakhir) kembalilah dia sebagai bentuk tandan yang tua.", en: "And We have decreed for the moon phases, until it returns like the old dried curved date stalk." },
      context: { id: "Allah mengatur bentuk bulan berubah-ubah (sabit, purnama) agar manusia bisa menggunakannya sebagai kalender perhitungan bulan.", en: "Allah sets the moon's shape to change (crescent, full) so humans can use it as a calendar to count months." }
    },
    quiz: {
      question: { id: "Dari mana asal cahaya Bulan yang bersinar di malam hari?", en: "Where does the moonlight that shines at night come from?" },
      options: [
        { text: { id: "Dari lampu raksasa di Bulan", en: "From a giant lamp on the Moon" } },
        { text: { id: "Pantulan cahaya Matahari", en: "Reflection of the Sun's light" } },
        { text: { id: "Dari bintang yang menempel", en: "From attached stars" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Secara astronomi, Bulan adalah satelit alami Bumi yang terjebak dalam gravitasi planet kita. Bulan menyebabkan pasang surut air laut yang menjaga ekosistem pesisir. Menakjubkannya, Al-Qur'an secara akurat mendeskripsikan siklus fase orbit bulan seperti 'tandan kurma tua' (melengkung), 14 abad sebelum ilmu astronomi modern memetakannya secara presisi!", en: "Astronomically, the Moon is Earth's natural satellite trapped in our planet's gravity. The Moon causes ocean tides that maintain coastal ecosystems. Amazingly, the Quran accurately describes the lunar orbital phase cycle as an 'old dried date stalk' (curved), 14 centuries before modern astronomy mapped it precisely!" },
    anatomy: [
      { part: { id: "Kerak Bulan (Crust)", en: "Lunar Crust" }, desc: { id: "Permukaan berbatu dan berdebu tebal tempat terbentuknya kawah-kawah.", en: "The rocky and thick dusty surface where craters are formed." } },
      { part: { id: "Maria (Lautan Basalt)", en: "Maria (Basalt Plains)" }, desc: { id: "Bercak gelap di bulan yang merupakan lautan lava beku dari gunung berapi kuno.", en: "Dark patches on the moon which are frozen lava seas from ancient volcanoes." } }
    ],
    wowFactor: { id: "HAH?! Ternyata setiap tahun Bulan menjauh dari Bumi sekitar 3,8 sentimeter! Berarti jutaan tahun yang lalu, Bulan terlihat sangat-sangat besar di langit karena posisinya jauh lebih dekat dari sekarang!", en: "WOW?! Every year the Moon moves away from Earth by about 3.8 centimeters! This means millions of years ago, the Moon looked incredibly huge in the sky because it was much closer than it is now!" },
    quranVerse: {
      arabic: "هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ نُورًا",
      transliteration: "Huwal-ladzii ja'alasy-syamsa dhiyaa'aw wal-qamara nuuraa",
      translation: { id: "Dialah yang menjadikan matahari bersinar (menghasilkan cahaya sendiri) dan bulan bercahaya (memantulkan cahaya).", en: "It is He who made the sun a shining light (producing its own) and the moon a derived light (reflecting)." }
    },
    quiz: [
      {
        question: { id: "Bagaimana cara Al-Qur'an mendeskripsikan bentuk bulan sabit terakhir sebelum hilang?", en: "How does the Quran describe the shape of the final crescent moon before it disappears?" },
        options: [
          { text: { id: "Seperti pisang yang matang", en: "Like a ripe banana" } },
          { text: { id: "Seperti tandan kurma tua yang melengkung", en: "Like an old curved dried date stalk" } },
          { text: { id: "Seperti cincin yang bersinar terang", en: "Like a brightly shining ring" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
