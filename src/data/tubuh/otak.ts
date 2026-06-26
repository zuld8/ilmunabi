import { ObjectData } from "../objects";

export const otakData: ObjectData = {
  slug: "otak",
  name: { id: "Otak", en: "Brain" },
  icon: "🧠",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Cerebrum",
  surahName: "Al-Mulk",
  surahReference: "67:23",
  unlockedAtPoints: 100,
  kosakata: [
    { arab: "دِمَاغٌ", latin: "Dimaaghun", arti: "Otak", artiEn: "Brain", contohAyat: "Inna fee dhaalika la dhikraa li oolil albaab (Sungguh pada yang demikian itu terdapat peringatan bagi orang-orang yang berakal - Az-Zumar:21)." }
  ],
  balita: {
    text: { id: "Di dalam kepalamu ada komputer super pintar bernama otak! Otak membantumu menggambar, melompat, dan mengingat nama teman. Hebat sekali! 🧠💡", en: "Inside your head is a super smart computer called the brain! The brain helps you draw, jump, and remember friends' names. So amazing! 🧠💡" },
    audioTranscript: { id: "Otak dilindungi oleh tengkorak yang keras karena otak itu sangat penting.", en: "The brain is protected by a hard skull because the brain is very important." },
    quiz: {
      question: { id: "Di bagian tubuh mana otak kita berada?", en: "In which body part is our brain located?" },
      options: [
        { text: { id: "Di perut", en: "In the belly" } },
        { text: { id: "Di kepala", en: "In the head" } },
        { text: { id: "Di tangan", en: "In the hand" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Otak adalah bos dari seluruh tubuh! Kalau kamu ingin berlari, otak akan mengirim pesan kilat ke kaki agar bergerak. Otak juga tempat menyimpan memori, seperti menghafal Al-Qur'an. Karena otak sangat penting, Allah melindunginya dengan tulang tengkorak yang sangat keras seperti helm! ⛑️✨", en: "The brain is the boss of the whole body! If you want to run, the brain sends a lightning-fast message to the legs to move. The brain is also where memories are stored, like memorizing the Quran. Because the brain is so important, Allah protects it with a very hard skull bone like a helmet! ⛑️✨" },
    facts: [
      { id: "Otak tidak bisa merasakan sakit! Tidak ada sensor rasa sakit di dalam otak itu sendiri. 😲", en: "The brain cannot feel pain! There are no pain sensors inside the brain itself. 😲" },
      { id: "Otak manusia menghasilkan listrik yang cukup untuk menyalakan sebuah lampu bohlam kecil! 💡", en: "The human brain produces enough electricity to light up a small light bulb! 💡" },
      { id: "Semakin sering kita belajar sesuatu yang baru, otak kita akan membuat sambungan kabel baru di dalamnya.", en: "The more often we learn something new, our brain will create new wire connections inside it." }
    ],
    quranVerse: {
      arabic: "قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۖ قَلِيلًا مَّا تَشْكُرُونَ",
      transliteration: "Qul huwal-lathee ansha-akum waja'ala lakumus-sam'a wal-absaara wal-af'idah; qaleelan maa tashkuroon",
      translation: { id: "Katakanlah: 'Dialah Yang menciptakan kamu dan menjadikan bagi kamu pendengaran, penglihatan dan hati'. (Tetapi) amat sedikit kamu bersyukur.", en: "Say, 'It is He who has produced you and made for you hearing and vision and hearts; little are you grateful.'" },
      context: { id: "Kemampuan berpikir dan berakal yang berpusat di otak adalah pembeda utama manusia dengan hewan.", en: "The ability to think and reason centered in the brain is the main difference between humans and animals." }
    },
    quiz: {
      question: { id: "Apa tulang keras yang melindungi otak kita?", en: "What hard bone protects our brain?" },
      options: [
        { text: { id: "Tengkorak", en: "Skull" } },
        { text: { id: "Tulang rusuk", en: "Ribs" } },
        { text: { id: "Tulang belakang", en: "Spine" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Koneksi dalam otakmu lebih banyak daripada jumlah bintang di galaksi Bimasakti! Ada sekitar 86 miliar sel saraf (neuron) di otak yang saling berkomunikasi menggunakan sinyal listrik dan kimia. Otak bagian kiri mengatur logika dan matematika, sedangkan otak kanan mengatur kreativitas dan seni. Tidak ada superkomputer di bumi yang bisa menandingi efisiensi energi otak manusia buatan Allah! 🌌💻", en: "The connections in your brain are more than the number of stars in the Milky Way galaxy! There are about 86 billion nerve cells (neurons) in the brain communicating with each other using electrical and chemical signals. The left brain controls logic and math, while the right brain controls creativity and art. No supercomputer on earth can match the energy efficiency of the human brain made by Allah! 🌌💻" },
    anatomy: [
      { part: { id: "Cerebrum (Otak Besar)", en: "Cerebrum" }, desc: { id: "Bagian terbesar yang mengatur pikiran, ingatan, dan panca indra.", en: "The largest part that controls thoughts, memory, and the five senses." } },
      { part: { id: "Cerebellum (Otak Kecil)", en: "Cerebellum" }, desc: { id: "Bagian di belakang bawah yang mengatur keseimbangan agar kamu tidak jatuh saat berjalan.", en: "The part at the lower back that controls balance so you don't fall when walking." } },
      { part: { id: "Batang Otak", en: "Brainstem" }, desc: { id: "Penghubung ke tulang belakang yang mengatur fungsi otomatis seperti detak jantung dan napas.", en: "The connection to the spine that controls automatic functions like heartbeat and breathing." } }
    ],
    wowFactor: { id: "Pesan listrik dari otak meluncur ke anggota tubuh dengan kecepatan lebih dari 400 km/jam, lebih cepat dari mobil balap Formula 1! 🏎️💨", en: "Electrical messages from the brain speed to body parts at over 400 km/h, faster than a Formula 1 race car! 🏎️💨" },
    quranVerse: {
      arabic: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ",
      transliteration: "Afalaa yatadabbaroonal-qur-aan",
      translation: { id: "Maka apakah mereka tidak merenungkan Al Quran?", en: "Then do they not reflect upon the Qur'an?" }
    },
    quiz: [
      {
        question: { id: "Bagian otak mana yang mengatur keseimbangan tubuhmu?", en: "Which part of the brain controls your body's balance?" },
        options: [
          { text: { id: "Batang Otak", en: "Brainstem" } },
          { text: { id: "Cerebrum (Otak Besar)", en: "Cerebrum" } },
          { text: { id: "Cerebellum (Otak Kecil)", en: "Cerebellum" } }
        ],
        answerIdx: 2
      }
    ]
  }
};
