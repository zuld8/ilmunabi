import { ObjectData } from "../objects";

export const kelinciData: ObjectData = {
  slug: "kelinci",
  name: { id: "Kelinci", en: "Rabbit" },
  icon: "🐇",
  category: "mamalia",
  type: "hewan",
  scientificName: "Oryctolagus cuniculus",
  surahName: "Al-An'am",
  surahReference: "6:38",
  unlockedAtPoints: 35,
  kosakata: [
    { arab: "أَرْنَب", latin: "Arnab", arti: "Kelinci", artiEn: "Rabbit", contohAyat: "Dan tidak ada seekor binatang pun yang ada di bumi dan burung-burung yang terbang..." }
  ],
  balita: {
    text: { id: "Boing! Boing! Aku kelinci yang lucu. Telingaku panjang dan aku suka melompat! 🥕", en: "Boing! Boing! I am a cute rabbit. My ears are long and I love to jump! 🥕" },
    audioTranscript: { id: "Telingaku sangat panjang! Aku suka makan wortel yang renyah. Nyam nyam!", en: "My ears are very long! I like to eat crunchy carrots. Yum yum!" },
    quiz: {
      question: { id: "Apa makanan kesukaan kelinci?", en: "What is a rabbit's favorite food?" },
      options: [
        { text: { id: "Daging", en: "Meat" } },
        { text: { id: "Wortel", en: "Carrot" } },
        { text: { id: "Ikan", en: "Fish" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kelinci adalah pelompat yang hebat! Mereka menggunakan kaki belakangnya yang kuat untuk berlari kencang menghindari bahaya. Subhanallah, Allah memberi kelinci pertahanan yang luar biasa.", en: "Rabbits are great jumpers! They use their strong hind legs to run fast and escape danger. Subhanallah, Allah gave rabbits incredible defense." },
    facts: [
      { id: "Gigi kelinci tidak pernah berhenti tumbuh! Mereka harus terus mengunyah agar giginya tetap pendek.", en: "A rabbit's teeth never stop growing! They have to keep chewing to keep them short." },
      { id: "Kelinci bisa memutar telinganya sejauh 270 derajat untuk mendengarkan suara.", en: "Rabbits can turn their ears 270 degrees to listen to sounds." },
      { id: "Kelinci yang bahagia akan melompat dan memutar tubuhnya di udara, ini disebut 'Binky'!", en: "A happy rabbit will jump and twist its body in the air, this is called a 'Binky'!" }
    ],
    quranVerse: {
      arabic: "وَمَا مِنْ دَابَّةٍ فِي الْأَرْضِ وَلَا طَائِرٍ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُمْ",
      transliteration: "Wa ma min dabbatin fil-ardi wa la ta'irin yatiru bijanahayhi illa umamun amthalukum.",
      translation: { id: "Dan tiadalah binatang-binatang yang ada di bumi dan burung-burung yang terbang dengan kedua sayapnya, melainkan umat (juga) seperti kamu.", en: "And there is no creature on [or within] the earth or bird that flies with its wings except [that they are] communities like you." },
      context: { id: "Kelinci hidup berkelompok dan bersosialisasi, persis seperti yang dijelaskan Al-Qur'an bahwa hewan juga merupakan umat seperti manusia.", en: "Rabbits live in groups and socialize, exactly as the Quran explains that animals are also communities like humans." }
    },
    quiz: {
      question: { id: "Apa yang terjadi pada gigi kelinci jika tidak digunakan untuk mengunyah?", en: "What happens to a rabbit's teeth if they are not used for chewing?" },
      options: [
        { text: { id: "Giginya akan terus tumbuh panjang", en: "Their teeth will keep growing long" } },
        { text: { id: "Giginya akan rontok", en: "Their teeth will fall out" } },
        { text: { id: "Giginya akan berubah warna", en: "Their teeth will change color" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Telinga panjang kelinci bukan cuma untuk mendengar, lho! Telinga itu memiliki banyak pembuluh darah yang berfungsi sebagai pengatur suhu tubuh. Saat cuaca panas, telinga itu membuang panas agar tubuh kelinci tetap sejuk.", en: "A rabbit's long ears aren't just for hearing, you know! The ears have many blood vessels that act as body temperature regulators. In hot weather, the ears release heat to keep the rabbit's body cool." },
    anatomy: [
      { part: { id: "Telinga Pengatur Suhu", en: "Temperature-Regulating Ears" }, desc: { id: "Berfungsi seperti AC alami dengan pembuluh darah yang melepas panas.", en: "Functions like a natural AC with blood vessels that release heat." } },
      { part: { id: "Kaki Belakang Kuat", en: "Strong Hind Legs" }, desc: { id: "Berfungsi sebagai pegas untuk melompat sejauh 3 meter dalam satu lompatan!", en: "Acts as springs to jump as far as 3 meters in a single leap!" } }
    ],
    wowFactor: { id: "Kelinci memiliki pandangan mata 360 derajat! Mereka bahkan bisa melihat ke arah belakang tubuh mereka tanpa perlu menoleh!", en: "Rabbits have 360-degree vision! They can even see behind their bodies without needing to turn their heads!" },
    quranVerse: {
      arabic: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ ۚ إِنَّهُ خَبِيرٌ بِمَا تَفْعَلُونَ",
      transliteration: "Sun'allahil-ladhi atqana kulla shay'in, innahu khabirun bima taf'alun.",
      translation: { id: "(Itulah) ciptaan Allah yang menyempurnakan segala sesuatu. Sesungguhnya Dia Maha Mengetahui apa yang kamu kerjakan.", en: "[It is] the work of Allah, who perfected all things. Indeed, He is Acquainted with that which you do." }
    },
    quiz: [
      {
        question: { id: "Bagaimana kelinci mengatur suhu tubuhnya agar tidak kepanasan?", en: "How do rabbits regulate their body temperature so they don't get too hot?" },
        options: [
          { text: { id: "Berkeringat dari kulitnya", en: "Sweating from their skin" } },
          { text: { id: "Lewat telinga panjangnya", en: "Through their long ears" } },
          { text: { id: "Meminum es", en: "Drinking ice" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
