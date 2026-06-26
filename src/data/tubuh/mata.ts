import { ObjectData } from "../objects";

export const mataData: ObjectData = {
  slug: "mata",
  name: { id: "Mata", en: "Eye" },
  icon: "👁️",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Oculus",
  surahName: "Al-Balad",
  surahReference: "90:8",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "عَيْنٌ", latin: "'Ayn", arti: "Mata", artiEn: "Eye", contohAyat: "Mata untuk melihat ciptaan Allah." },
    { arab: "بَصَرٌ", latin: "Basar", arti: "Penglihatan", artiEn: "Vision", contohAyat: "Allah Maha Melihat (Al-Bashiir)." },
    { arab: "نُورٌ", latin: "Nuur", arti: "Cahaya", artiEn: "Light", contohAyat: "Cahaya diperlukan mata untuk melihat." },
    { arab: "دَمْعٌ", latin: "Dam'", arti: "Air Mata", artiEn: "Tear", contohAyat: "Air mata karena takut kepada Allah." }
  ],
  
  balita: {
    text: { id: "Ciluk... Ba! Matamu bisa melihat dunia yang indah! 👁️", en: "Peek-a... boo! Your eyes can see the beautiful world! 👁️" },
    audioTranscript: { id: "Tutup matamu... gelap kan? Sekarang buka! Wah, terang! Matamu adalah hadiah dari Allah supaya kita bisa melihat ibu dan ayah.", en: "Close your eyes... dark right? Now open them! Wow, bright! Your eyes are a gift from Allah so we can see mom and dad." },
    quiz: {
      question: { id: "Mana yang namanya mata?", en: "Which one is the eye?" },
      options: [
        { text: { id: "👁️ Mata", en: "👁️ Eye" } },
        { text: { id: "👃 Hidung", en: "👃 Nose" } },
        { text: { id: "👂 Telinga", en: "👂 Ear" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Matamu bekerja seperti kamera super canggih yang memotret dunia di sekitarmu!", en: "Your eye works like a super advanced camera taking pictures of the world around you!" },
    facts: [
      { id: "Mata kita bisa membedakan 10 juta warna yang berbeda!", en: "Our eyes can distinguish 10 million different colors!" },
      { id: "Mata adalah otot yang paling cepat bergerak di seluruh tubuhmu.", en: "The eye is the fastest moving muscle in your entire body." },
      { id: "Kita berkedip lebih dari 10.000 kali dalam sehari tanpa kita sadari.", en: "We blink more than 10,000 times a day without realizing it." },
      { id: "Bayi yang baru lahir awalnya hanya bisa melihat warna hitam dan putih.", en: "Newborn babies initially can only see black and white." },
      { id: "Air mata kita punya antibakteri untuk menjaga mata tetap bersih.", en: "Our tears have antibacterials to keep the eyes clean." }
    ],
    quranVerse: {
      arabic: "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ",
      transliteration: "Alam naj'al lahu 'aynayn",
      translation: { id: "Bukankah Kami telah menjadikan untuknya sepasang mata?", en: "Have We not made for him two eyes?" },
      context: { id: "Tau nggak? Mata kita bisa melihat benda 3D dan memperkirakan jarak karena kita punya DUA mata! Allah sengaja memberi kita sepasang mata agar dunia terlihat nyata.", en: "Did you know? Our eyes can see 3D objects and estimate distance because we have TWO eyes! Allah purposely gave us a pair of eyes to make the world look real." }
    },
    quiz: {
      question: { id: "Berapa banyak warna yang bisa dibedakan oleh mata kita?", en: "How many colors can our eyes distinguish?" },
      options: [
        { text: { id: "100 warna", en: "100 colors" } },
        { text: { id: "1.000 warna", en: "1,000 colors" } },
        { text: { id: "10 Juta warna", en: "10 Million colors" } },
        { text: { id: "1 Miliar warna", en: "1 Billion colors" } }
      ],
      answerIdx: 2
    }
  },
  
  explorer: {
    text: { id: "Mata adalah jendela dunia. Saat kamu melihat sesuatu, cahaya masuk melalui pupil, lalu difokuskan oleh lensa ke bagian belakang mata yang disebut retina.\n\nRetina ini memiliki jutaan sel khusus yang mendeteksi cahaya dan warna, lalu mengirimkannya ke otak sebagai pesan listrik.\n\nTahukah kamu? Gambar yang ditangkap retina sebenarnya terbalik lho! Otak kitalah yang membalikkannya kembali dengan sangat cepat.", en: "The eye is the window to the world. When you see something, light enters through the pupil, then is focused by the lens onto the back of the eye called the retina.\n\nThe retina has millions of special cells that detect light and color, then send them to the brain as electrical messages.\n\nDid you know? The image captured by the retina is actually upside down! It's our brain that flips it back right side up incredibly fast." },
    anatomy: [
      { part: { id: "Pupil", en: "Pupil" }, desc: { id: "Lubang hitam di tengah mata yang membiarkan cahaya masuk.", en: "The black hole in the middle of the eye that lets light in." } },
      { part: { id: "Iris", en: "Iris" }, desc: { id: "Bagian berwarna yang mengatur ukuran pupil.", en: "The colored part that controls the size of the pupil." } }
    ],
    wowFactor: { id: "Desain mata sangatlah rumit! Bahkan Charles Darwin (Bapak Evolusi) pernah mengakui bahwa mata tampaknya terlalu sempurna untuk tercipta kebetulan.\n\nAllah merancang mata kita lengkap dengan alis, bulu mata, dan kelopak yang semuanya punya fungsi melindungi kamera alami ini dari debu dan cahaya menyilaukan. Subhanallah!", en: "The design of the eye is incredibly complex! Even Charles Darwin (Father of Evolution) once admitted that the eye seems too perfect to be formed by chance.\n\nAllah designed our eyes complete with eyebrows, eyelashes, and eyelids, which all have functions to protect this natural camera from dust and glaring light. Subhanallah!" },
    quranVerse: {
      arabic: "وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ لَا تَعْلَمُونَ شَيْئًا وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ",
      transliteration: "Wallahu akhrajakum min butuni ummahatikum la ta'lamuna shay'an waja'ala lakumus-sam'a wal-absara wal-af'idah",
      translation: { id: "Dan Allah mengeluarkan kamu dari perut ibumu dalam keadaan tidak mengetahui sesuatu pun, dan Dia memberi kamu pendengaran, penglihatan dan hati.", en: "And Allah has extracted you from the wombs of your mothers not knowing a thing, and He made for you hearing and vision and intellect." }
    },
    quiz: [
      {
        question: { id: "Bagian mata yang memberikan warna (seperti hitam, coklat, atau biru) disebut...", en: "The part of the eye that gives it color (like black, brown, or blue) is called..." },
        options: [{ text: { id: "Retina", en: "Retina" } }, { text: { id: "Kornea", en: "Cornea" } }, { text: { id: "Iris", en: "Iris" } }, { text: { id: "Pupil", en: "Pupil" } }],
        answerIdx: 2
      },
      {
        question: { id: "Gambar yang ditangkap oleh retina mata kita sebenarnya...", en: "The image captured by our eye's retina is actually..." },
        options: [{ text: { id: "Hitam putih", en: "Black and white" } }, { text: { id: "Terbalik", en: "Upside down" } }, { text: { id: "Buram", en: "Blurry" } }, { text: { id: "Berputar", en: "Spinning" } }],
        answerIdx: 1
      },
      {
        question: { id: "Apa fungsi air mata selain untuk menangis?", en: "What is the function of tears besides crying?" },
        options: [{ text: { id: "Membuat mata jadi biru", en: "Making eyes blue" } }, { text: { id: "Membersihkan mata dari bakteri", en: "Cleaning eyes from bacteria" } }, { text: { id: "Membantu kita tidur", en: "Helping us sleep" } }, { text: { id: "Membuat mata menyala di malam hari", en: "Making eyes glow at night" } }],
        answerIdx: 1
      }
    ]
  }
};
