import { ObjectData } from "../objects";

export const monyetData: ObjectData = {
  slug: "monyet",
  name: { id: "Monyet", en: "Monkey" },
  icon: "🐒",
  category: "hewan",
  type: "hewan",
  scientificName: "Macaca",
  surahName: "Al-Baqarah",
  surahReference: "2:65",
  unlockedAtPoints: 60,

  kosakata: [
    { arab: "قِرْدٌ", latin: "Qird", arti: "Monyet", artiEn: "Monkey", contohAyat: "Allah mengubah orang yang melanggar hari Sabat menjadi monyet." },
    { arab: "شَجَرَةٌ", latin: "Shajarah", arti: "Pohon", artiEn: "Tree", contohAyat: "Monyet suka melompat dari pohon ke pohon." },
    { arab: "مَوْزٌ", latin: "Mawz", arti: "Pisang", artiEn: "Banana", contohAyat: "Pisang adalah makanan favorit banyak monyet." },
    { arab: "ذَيْلٌ", latin: "Dhayl", arti: "Ekor", artiEn: "Tail", contohAyat: "Ekor panjang monyet membantu keseimbangan." }
  ],

  balita: {
    text: { id: "Uuk aak! Ini monyet! Monyet suka makan pisang dan jago memanjat pohon lho! 🐒", en: "Ooh aah! This is a monkey! Monkeys love eating bananas and are great at climbing trees! 🐒" },
    audioTranscript: { id: "Uuk aak uuk aak! Halo, aku monyet! Aku suka bergelantungan di pohon pakai tanganku yang kuat. Ekor panjangku juga bisa buat pegangan lho! Nyam nyam, ada yang punya pisang nggak buat aku?", en: "Ooh aah ooh aah! Hello, I'm a monkey! I love swinging on trees with my strong hands. My long tail can also hold on! Yum yum, does anyone have a banana for me?" },
    quiz: {
      question: { id: "Apa makanan kesukaan monyet?", en: "What is a monkey's favorite food?" },
      options: [
        { text: { id: "🥕 Wortel", en: "🥕 Carrot" } },
        { text: { id: "🍌 Pisang", en: "🍌 Banana" } },
        { text: { id: "🐟 Ikan", en: "🐟 Fish" } }
      ],
      answerIdx: 1
    }
  },

  anak: {
    text: { id: "Monyet adalah hewan yang sangat cerdas dan suka iseng!", en: "Monkeys are very smart and mischievous animals!" },
    facts: [
      { id: "Monyet bisa berhitung dan mengerti angka lho! Pintar banget kan?", en: "Monkeys can count and understand numbers! Very smart, right?" },
      { id: "Ekor monyet sangat kuat, bisa dipakai sebagai tangan ketiga untuk memegang cabang pohon.", en: "A monkey's tail is very strong, can be used as a third hand to grab tree branches." },
      { id: "Mereka suka membersihkan bulu temannya (grooming) untuk menunjukkan rasa sayang.", en: "They like to clean their friends' fur (grooming) to show affection." },
      { id: "Monyet kapusin memukul-mukul kacang pakai batu sampai pecah supaya bisa dimakan.", en: "Capuchin monkeys smash nuts with rocks until they break so they can be eaten." },
      { id: "Beberapa monyet bisa belajar pakai bahasa isyarat untuk bicara sama manusia!", en: "Some monkeys can learn to use sign language to talk to humans!" }
    ],
    quranVerse: {
      arabic: "فَقُلْنَا لَهُمْ كُونُوا قِرَدَةً خَاسِئِينَ",
      transliteration: "Faqulnaa lahum kuunuu qiradatan khaasi'iin",
      translation: { id: "Maka Kami berfirman kepada mereka: 'Jadilah kamu kera yang hina.'", en: "So We said to them, 'Be apes, despised.'" },
      context: { id: "Tau nggak? Di zaman Nabi Musa, ada sekelompok orang yang sangat nakal dan melanggar perintah Allah di hari Sabtu. Karena teguran tidak mempan, Allah pun menghukum mereka dengan merubah wujudnya menjadi monyet yang hina!", en: "Did you know? In the time of Prophet Musa, there was a group of very naughty people who disobeyed Allah's command on Saturday. Because warnings didn't work, Allah punished them by changing their form into despised monkeys!" }
    },
    quiz: {
      question: { id: "Monyet menggunakan apa untuk memecahkan kacang yang keras?", en: "What do monkeys use to break hard nuts?" },
      options: [
        { text: { id: "Kepala", en: "Head" } },
        { text: { id: "Gigi", en: "Teeth" } },
        { text: { id: "Batu", en: "Rock" } },
        { text: { id: "Ekor", en: "Tail" } }
      ],
      answerIdx: 2
    }
  },

  explorer: {
    text: { id: "Monyet memiliki DNA yang sangat mirip dengan manusia, yaitu sekitar 93%. Itulah mengapa struktur tubuh dan otak mereka memungkinkan mereka untuk menggunakan alat sederhana, seperti memakai tongkat untuk mengambil madu atau batu untuk memecah kacang.\n\nMereka memiliki ibu jari yang berlawanan (opposable thumbs) di tangan dan kakinya. Ini membuat mereka sangat ahli menggenggam dan memanjat lincah di hutan tropis.\n\nSecara sosial, monyet memiliki hierarki yang kompleks dan ikatan keluarga yang sangat kuat.", en: "Monkeys have DNA very similar to humans, about 93%. That is why their body and brain structure allows them to use simple tools, like using sticks to get honey or rocks to break nuts.\n\nThey have opposable thumbs on their hands and feet. This makes them very skilled at grasping and climbing nimbly in tropical forests.\n\nSocially, monkeys have complex hierarchies and very strong family bonds." },
    anatomy: [
      { part: { id: "Opposable Thumbs", en: "Opposable Thumbs" }, desc: { id: "Ibu jari yang bisa ditekuk ke arah jari lain, cocok untuk menggenggam alat.", en: "Thumbs that can bend towards other fingers, perfect for grasping tools." } },
      { part: { id: "Ekor Prehensil", en: "Prehensile Tail" }, desc: { id: "Ekor yang bisa menggulung dan menahan berat badan.", en: "Tail that can coil and hold body weight." } }
    ],
    wowFactor: { id: "Sains membuktikan tingkat kecerdasan monyet yang tinggi memungkinkan mereka memiliki emosi kompleks, tapi otak mereka tidak dirancang untuk memiliki 'moralitas' dan akal sehat seperti manusia. Mereka bertindak berdasarkan insting bertahan hidup semata.\n\nAl-Qur'an mengisahkan kaum Bani Israil yang dikutuk menjadi kera (Qird) karena rakus melanggar larangan menangkap ikan di hari Sabat (Surah Al-Baqarah). Pelajaran luar biasanya adalah: Manusia yang hidupnya hanya menuruti hawa nafsu perut dan insting keserakahan tanpa peduli aturan Tuhan, derajatnya akan turun drastis menyamai hewan seperti monyet!", en: "Science proves that monkeys' high intelligence allows them to have complex emotions, but their brains are not designed to have 'morality' and intellect like humans. They act purely on survival instinct.\n\nThe Qur'an tells the story of the Israelites cursed into apes (Qird) due to their greed violating the ban on fishing on the Sabbath (Surah Al-Baqarah). The incredible lesson is: Humans whose lives only follow stomach desires and greedy instincts without caring about God's rules will have their status drastically reduced to match animals like monkeys!" },
    quranVerse: {
      arabic: "وَلَقَدْ عَلِمْتُمُ الَّذِينَ اعْتَدَوْا مِنكُمْ فِي السَّبْتِ فَقُلْنَا لَهُمْ كُونُوا قِرَدَةً خَاسِئِينَ",
      transliteration: "Walaqad 'alimtumulladziina' tadaw minkum fiis-sabti faqulnaa lahum kuunuu qiradatan khaasi'iin",
      translation: { id: "Dan sungguh, kamu telah mengetahui orang-orang yang melakukan pelanggaran di antara kamu pada hari Sabat, lalu Kami katakan kepada mereka: 'Jadilah kamu kera yang hina.'", en: "And you had already known about those who transgressed among you concerning the sabbath, and We said to them, 'Be apes, despised.'" }
    },
    quiz: [
      {
        question: { id: "Kemampuan apa yang membuat monyet bisa memakai batu untuk alat?", en: "What ability allows monkeys to use rocks as tools?" },
        options: [{ text: { id: "Ibu jari yang bisa menggenggam", en: "Opposable grasping thumbs" } }, { text: { id: "Bisa bahasa manusia", en: "Can speak human language" } }, { text: { id: "Otak sebesar manusia", en: "Brain the size of humans" } }, { text: { id: "Bantuan burung", en: "Bird assistance" } }],
        answerIdx: 0
      },
      {
        question: { id: "Kisah manusia dikutuk menjadi monyet terjadi karena mereka melanggar aturan hari...", en: "The story of humans cursed into monkeys happened because they broke the rule of..." },
        options: [{ text: { id: "Senin", en: "Monday" } }, { text: { id: "Jumat", en: "Friday" } }, { text: { id: "Sabtu (Sabat)", en: "Saturday (Sabbath)" } }, { text: { id: "Ahad", en: "Sunday" } }],
        answerIdx: 2
      },
      {
        question: { id: "Fungsi ekor prehensil pada monyet adalah untuk...", en: "The function of a prehensile tail in monkeys is to..." },
        options: [{ text: { id: "Berenang", en: "Swim" } }, { text: { id: "Menggenggam dahan pohon", en: "Grasp tree branches" } }, { text: { id: "Mengusir lalat", en: "Shoo away flies" } }, { text: { id: "Tempat menyimpan makanan", en: "Place to store food" } }],
        answerIdx: 1
      }
    ]
  }
};
