import { ObjectData } from "../objects";

export const tanganData: ObjectData = {
  slug: "tangan",
  name: { id: "Tangan", en: "Hand" },
  icon: "🖐️",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Manus",
  surahName: "Yasin",
  surahReference: "36:65",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "يَدٌ", latin: "Yad", arti: "Tangan", artiEn: "Hand", contohAyat: "Tangan digunakan untuk berdoa dan bersedekah." },
    { arab: "أُصْبُعٌ", latin: "Usbu'", arti: "Jari", artiEn: "Finger", contohAyat: "Jari-jari kita ada sepuluh." },
    { arab: "يَمِينٌ", latin: "Yamiin", arti: "Kanan", artiEn: "Right", contohAyat: "Makanlah dengan tangan kanan." },
    { arab: "شِمَالٌ", latin: "Shimaal", arti: "Kiri", artiEn: "Left", contohAyat: "Tangan kiri untuk istinja." }
  ],
  
  balita: {
    text: { id: "Tepuk tangan! Prok prok prok! Tanganmu hebat sekali! 🖐️", en: "Clap your hands! Clap clap clap! Your hands are amazing! 🖐️" },
    audioTranscript: { id: "Mana tangan kananmu? Mana tangan kirimu? Tangan kanan untuk makan dan tangan kiri untuk hal lain. Hebat ya Allah kasih kita dua tangan!", en: "Where is your right hand? Where is your left hand? Right hand for eating and left hand for other things. It's amazing Allah gave us two hands!" },
    quiz: {
      question: { id: "Tangan mana yang kita pakai untuk makan?", en: "Which hand do we use to eat?" },
      options: [
        { text: { id: "🖐️ Tangan Kanan", en: "🖐️ Right Hand" } },
        { text: { id: "🤚 Tangan Kiri", en: "🤚 Left Hand" } },
        { text: { id: "🦶 Kaki", en: "🦶 Foot" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Tanganmu punya banyak tulang kecil sehingga bisa bergerak bebas meremas, melempar, dan menulis!", en: "Your hand has many small bones so it can move freely to squeeze, throw, and write!" },
    facts: [
      { id: "Satu tangan manusia memiliki 27 tulang, 29 sendi, dan setidaknya 123 ligamen.", en: "One human hand has 27 bones, 29 joints, and at least 123 ligaments." },
      { id: "Ujung jarimu adalah salah satu bagian tubuh yang paling peka terhadap sentuhan.", en: "Your fingertips are one of the most sensitive parts of the body to touch." },
      { id: "Jari kita tidak punya otot lho! Jari digerakkan oleh tendon yang ditarik dari lengan bawah.", en: "Our fingers have no muscles! Fingers are moved by tendons pulled from the forearm." },
      { id: "Setiap orang punya sidik jari yang berbeda-beda, bahkan anak kembar sekalipun!", en: "Everyone has different fingerprints, even twins!" },
      { id: "Tangan digunakan untuk berdoa kepada Allah dan berbuat baik kepada sesama.", en: "Hands are used to pray to Allah and do good to others." }
    ],
    quranVerse: {
      arabic: "الْيَوْمَ نَخْتِمُ عَلَىٰ أَفْوَاهِهِمْ وَتُكَلِّمُنَا أَيْدِيهِمْ وَتَشْهَدُ أَرْجُلُهُم بِمَا كَانُوا يَكْسِبُونَ",
      transliteration: "Al-yawma nakhtimu 'ala afwahihim watukallimuna aydihim watashhadu arjuluhum bima kanu yaksibun",
      translation: { id: "Pada hari ini Kami tutup mulut mereka; dan berkatalah kepada Kami tangan mereka dan memberi kesaksianlah kaki mereka terhadap apa yang dahulu mereka usahakan.", en: "That Day, We will seal over their mouths, and their hands will speak to Us, and their feet will testify about what they used to earn." },
      context: { id: "Tau nggak? Di akhirat nanti, mulut kita akan dikunci. Tangan dan kaki kitalah yang akan bercerita kepada Allah tentang semua perbuatan baik dan buruk yang pernah kita lakukan.", en: "Did you know? In the afterlife, our mouths will be sealed. Our hands and feet will be the ones telling Allah about all the good and bad deeds we have done." }
    },
    quiz: {
      question: { id: "Berapa jumlah tulang yang ada di satu tangan kita?", en: "How many bones are in one of our hands?" },
      options: [
        { text: { id: "5 tulang", en: "5 bones" } },
        { text: { id: "10 tulang", en: "10 bones" } },
        { text: { id: "27 tulang", en: "27 bones" } },
        { text: { id: "100 tulang", en: "100 bones" } }
      ],
      answerIdx: 2
    }
  },
  
  explorer: {
    text: { id: "Tangan manusia adalah sebuah keajaiban teknik mekanika.\n\nKombinasi antara tulang, otot dari lengan, dan sistem saraf yang padat membuat kita bisa memegang benda halus seperti jarum, tapi juga kuat untuk bergelantungan.\n\nJempol kita yang bisa berputar (opposable thumb) adalah kelebihan luar biasa yang memudahkan kita memegang alat dengan presisi.", en: "The human hand is a marvel of mechanical engineering.\n\nThe combination of bones, muscles from the arm, and a dense nervous system makes us able to hold fine objects like needles, but also strong enough to hang.\n\nOur opposable thumb is an incredible advantage that makes it easy for us to hold tools with precision." },
    anatomy: [
      { part: { id: "Tulang Karpal", en: "Carpal Bones" }, desc: { id: "Delapan tulang kecil di pergelangan tanganmu.", en: "Eight small bones in your wrist." } },
      { part: { id: "Tendon", en: "Tendon" }, desc: { id: "Tali kuat yang menarik tulang jari saat kamu menggenggam.", en: "Strong cords that pull your finger bones when you grip." } }
    ],
    wowFactor: { id: "Sadarkah kamu bahwa jari-jarimu tidak memiliki otot sama sekali? Otot yang menggerakkan jarimu sebenarnya terletak di telapak tangan dan lengan bawahmu! Mereka menarik jarimu melalui tendon seperti tali boneka (marionette).\n\nAllah menciptakan tangan kita dengan desain yang sangat canggih sehingga robot terbaik buatan manusia pun belum bisa meniru keluwesan tangan manusia sepenuhnya.", en: "Did you realize that your fingers have no muscles at all? The muscles that move your fingers are actually located in your palm and forearm! They pull your fingers through tendons like a marionette's strings.\n\nAllah created our hands with such an advanced design that even the best human-made robots cannot fully replicate the dexterity of a human hand." },
    quranVerse: {
      arabic: "يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ",
      transliteration: "Yadullahi fawqa aydihim",
      translation: { id: "Tangan Allah di atas tangan mereka.", en: "The hand of Allah is over their hands." }
    },
    quiz: [
      {
        question: { id: "Bagian tubuh mana yang tidak memiliki otot sama sekali?", en: "Which body part has no muscles at all?" },
        options: [{ text: { id: "Lengan atas", en: "Upper arm" } }, { text: { id: "Jari-jari tangan", en: "Fingers" } }, { text: { id: "Telapak tangan", en: "Palm" } }, { text: { id: "Pergelangan tangan", en: "Wrist" } }],
        answerIdx: 1
      },
      {
        question: { id: "Jari-jari kita digerakkan oleh apa?", en: "What are our fingers moved by?" },
        options: [{ text: { id: "Tulang", en: "Bones" } }, { text: { id: "Kulit", en: "Skin" } }, { text: { id: "Tendon yang ditarik otot lengan", en: "Tendons pulled by arm muscles" } }, { text: { id: "Pembuluh darah", en: "Blood vessels" } }],
        answerIdx: 2
      },
      {
        question: { id: "Apa yang akan menjadi saksi perbuatan kita di akhirat saat mulut dikunci?", en: "What will witness our deeds in the afterlife when our mouths are sealed?" },
        options: [{ text: { id: "Mata dan Telinga", en: "Eyes and Ears" } }, { text: { id: "Hati dan Otak", en: "Heart and Brain" } }, { text: { id: "Tangan dan Kaki", en: "Hands and Feet" } }, { text: { id: "Rambut dan Kuku", en: "Hair and Nails" } }],
        answerIdx: 2
      }
    ]
  }
};
