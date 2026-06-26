import { ObjectData } from "../objects";

export const tanganData: ObjectData = {
  slug: "tangan",
  name: { id: "Tangan", en: "Hand" },
  icon: "✋",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Manus",
  surahName: "Yasin",
  surahReference: "36:65",
  unlockedAtPoints: 150,
  kosakata: [
    { arab: "يَدٌ", latin: "Yadun", arti: "Tangan", artiEn: "Hand", contohAyat: "Al-yawma nakhtimu 'alaa afwaahihim watukallimunaa aydeehim (Pada hari ini Kami tutup mulut mereka; dan berkatalah kepada Kami tangan mereka)." }
  ],
  balita: {
    text: { id: "Tepuk tangan! Prok prok prok! Tangan kita ada dua, kanan dan kiri. Gunakan tangan kanan untuk makan yang enak-enak ya! 🍎🙌", en: "Clap your hands! Clap clap clap! We have two hands, right and left. Use the right hand to eat yummy things, okay! 🍎🙌" },
    audioTranscript: { id: "Tangan digunakan untuk memegang mainan dan bersalaman. Selalu cuci tanganmu!", en: "Hands are used to hold toys and shake hands. Always wash your hands!" },
    quiz: {
      question: { id: "Tangan mana yang diajarkan Rasulullah untuk digunakan saat makan?", en: "Which hand did the Prophet teach to use when eating?" },
      options: [
        { text: { id: "Tangan kiri", en: "Left hand" } },
        { text: { id: "Tangan kanan", en: "Right hand" } },
        { text: { id: "Kedua tangan", en: "Both hands" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tangan manusia adalah alat ciptaan Allah yang paling fleksibel! Kita bisa menulis, melukis, bermain bola, dan memeluk ayah ibu. Bayangkan bagaimana hewan makan langsung dengan mulutnya, sedangkan kita diberi tangan yang indah untuk mengambil makanan dengan sopan. Jangan lupa, tangan harus digunakan untuk menolong teman, bukan memukul ya! 🤝💖", en: "Human hands are Allah's most flexible creation tool! We can write, paint, play ball, and hug our parents. Imagine how animals eat directly with their mouths, while we are given beautiful hands to take food politely. Don't forget, hands must be used to help friends, not for hitting! 🤝💖" },
    facts: [
      { id: "Satu tangan manusia memiliki 27 tulang, jumlah yang sangat banyak! 🦴", en: "One human hand has 27 bones, a very large amount! 🦴" },
      { id: "Jari kita tidak punya otot penggerak di dalamnya, otot yang menggerakkan jari ada di lengan bawah! 🦾", en: "Our fingers have no moving muscles inside them, the muscles that move the fingers are in the forearm! 🦾" },
      { id: "Seperempat dari semua tulang di tubuh manusia berada di sepasang tangannya.", en: "A quarter of all bones in the human body are in the pair of hands." }
    ],
    quranVerse: {
      arabic: "الْيَوْمَ نَخْتِمُ عَلَىٰ أَفْوَاهِهِمْ وَتُكَلِّمُنَا أَيْدِيهِمْ",
      transliteration: "Al-yawma nakhtimu 'alaa afwaahihim watukallimunaa aydeehim",
      translation: { id: "Pada hari ini Kami tutup mulut mereka; dan berkatalah kepada Kami tangan mereka.", en: "That Day, We will seal over their mouths, and their hands will speak to Us." },
      context: { id: "Kelak di hari kiamat, tangan kita akan berbicara menceritakan perbuatan kita di dunia.", en: "Later on judgment day, our hands will speak to tell our deeds in the world." }
    },
    quiz: {
      question: { id: "Di mana letak otot yang menarik jari kita sehingga bisa menekuk?", en: "Where is the muscle located that pulls our fingers so they can bend?" },
      options: [
        { text: { id: "Di dalam jari itu sendiri", en: "Inside the finger itself" } },
        { text: { id: "Di lengan bawah (seperti katrol tali)", en: "In the forearm (like a rope pulley)" } },
        { text: { id: "Di bahu", en: "In the shoulder" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Keistimewaan tangan manusia dibanding hewan lain adalah ibu jari (jempol) yang letaknya berlawanan arah dari jari lainnya (opposable thumb). Desain jempol unik inilah yang memungkinkan manusia untuk 'menggenggam' dengan kuat sekaligus memegang alat yang sangat kecil seperti jarum secara presisi. Karena tangan kitalah yang melaksanakan kebaikan (sedekah) atau keburukan, Allah memperingatkan di Surah Yasin bahwa tangan akan menjadi saksi yang bisa berbicara di pengadilan akhirat kelak! ⚖️🖐️", en: "The special feature of human hands compared to other animals is the thumb which is located opposite the other fingers (opposable thumb). This unique thumb design is what allows humans to 'grasp' strongly and simultaneously hold very small tools like needles with precision. Because it is our hands that perform good deeds (charity) or bad deeds, Allah warns in Surah Yasin that hands will be speaking witnesses in the afterlife court! ⚖️🖐️" },
    anatomy: [
      { part: { id: "Karpal", en: "Carpals" }, desc: { id: "Kumpulan 8 tulang kecil di pergelangan tangan yang membuatnya bisa memutar.", en: "A group of 8 small bones in the wrist that allow it to rotate." } },
      { part: { id: "Metakarpal", en: "Metacarpals" }, desc: { id: "5 tulang panjang yang membentuk kerangka telapak tanganmu.", en: "5 long bones that form the framework of your palm." } },
      { part: { id: "Falang (Phalanges)", en: "Phalanges" }, desc: { id: "Tulang-tulang penyusun jari-jari yang jumlahnya 14 di setiap tangan.", en: "The bones making up the fingers, totaling 14 in each hand." } }
    ],
    wowFactor: { id: "Ujung jari kita memiliki sidik yang basah karena keringat, ini membuat jari berfungsi seperti bantalan rem sehingga benda tidak mudah meluncur jatuh saat kita pegang! 🧱", en: "Our fingertips have prints wet with sweat, this makes the fingers act like brake pads so things don't easily slide down when we hold them! 🧱" },
    quranVerse: {
      arabic: "الْيَوْمَ نَخْتِمُ عَلَىٰ أَفْوَاهِهِمْ وَتُكَلِّمُنَا أَيْدِيهِمْ وَتَشْهَدُ أَرْجُلُهُم بِمَا كَانُوا يَكْسِبُونَ",
      transliteration: "Al-yawma nakhtimu 'alaa afwaahihim watukallimunaa aydeehim watashhadu arjuluhum bimaa kaanoo yaksiboon",
      translation: { id: "Pada hari ini Kami tutup mulut mereka; dan berkatalah kepada Kami tangan mereka dan memberi kesaksianlah kaki mereka terhadap apa yang dahulu mereka usahakan.", en: "That Day, We will seal over their mouths, and their hands will speak to Us, and their feet will testify about what they used to earn." }
    },
    quiz: [
      {
        question: { id: "Desain apa pada tangan manusia yang memungkinkannya menggenggam benda dengan presisi?", en: "What design on the human hand allows it to grasp objects with precision?" },
        options: [
          { text: { id: "Kuku yang panjang", en: "Long nails" } },
          { text: { id: "Bulu halus", en: "Fine hairs" } },
          { text: { id: "Ibu jari yang berlawanan arah (opposable thumb)", en: "Opposable thumb" } }
        ],
        answerIdx: 2
      }
    ]
  }
};
