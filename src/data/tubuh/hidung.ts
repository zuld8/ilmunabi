import { ObjectData } from "../objects";

export const hidungData: ObjectData = {
  slug: "hidung",
  name: { id: "Hidung", en: "Nose" },
  icon: "👃",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Nasus",
  surahName: "Al-Mu'minun",
  surahReference: "23:78",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "أَنْفٌ", latin: "Anfun", arti: "Hidung", artiEn: "Nose", contohAyat: "Wal-anfa bil-anfi (Dan hidung dengan hidung - Al-Ma'idah:45)." }
  ],
  balita: {
    text: { id: "Hmm... wangi sekali kue ibu! Hidung kita hebat, bisa mencium bau wangi dan bau busuk. Ayo tarik napas panjang lewat hidung! 👃🌬️", en: "Hmm... mommy's cake smells so good! Our nose is amazing, it can smell sweet and stinky things. Let's take a deep breath through the nose! 👃🌬️" },
    audioTranscript: { id: "Hidung berguna untuk bernapas dan mencium bau wangi seperti bunga.", en: "The nose is used for breathing and smelling sweet scents like flowers." },
    quiz: {
      question: { id: "Bagian tubuh mana yang kita gunakan untuk mencium bau?", en: "Which body part do we use to smell?" },
      options: [
        { text: { id: "Mata", en: "Eyes" } },
        { text: { id: "Telinga", en: "Ears" } },
        { text: { id: "Hidung", en: "Nose" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Hidung adalah pintu masuk udara ke dalam tubuh kita! Di dalam hidung ada bulu-bulu kecil yang bekerja sebagai sapu, membersihkan kotoran dari udara yang kita hirup. Selain itu, hidung bisa membedakan ribuan bau berbeda! Allah menciptakan hidung agar kita bisa bernapas dengan bersih dan menikmati aroma makanan. 🌸", en: "The nose is the front door for air into our body! Inside the nose are tiny hairs that work like a broom, cleaning dirt from the air we breathe. Also, the nose can tell the difference between thousands of smells! Allah created the nose so we can breathe clean air and enjoy the aroma of food. 🌸" },
    facts: [
      { id: "Manusia bisa membedakan sekitar 1 triliun bau yang berbeda! 👃🌟", en: "Humans can distinguish about 1 trillion different smells! 👃🌟" },
      { id: "Udara yang masuk lewat hidung langsung dihangatkan sebelum sampai ke paru-paru. 🔥", en: "Air entering through the nose is immediately warmed up before reaching the lungs. 🔥" },
      { id: "Hidung kita dan telinga kita akan terus memanjang (sangat sedikit) seiring bertambahnya usia. 👴", en: "Our nose and ears continue to lengthen (very slightly) as we age. 👴" }
    ],
    quranVerse: {
      arabic: "وَهُوَ الَّذِي أَنشَأَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ",
      transliteration: "Wahuwal-lathee ansha-a lakumus-sam'a wal-absaara wal-af'idah",
      translation: { id: "Dan Dialah yang telah menciptakan bagimu pendengaran, penglihatan dan hati.", en: "And it is He who produced for you hearing and vision and hearts." },
      context: { id: "Sistem penciuman dan pernapasan juga bagian dari nikmat luar biasa dari Allah yang patut kita syukuri.", en: "The olfactory and respiratory systems are also extraordinary blessings from Allah we should be grateful for." }
    },
    quiz: {
      question: { id: "Apa tugas bulu-bulu kecil di dalam hidung?", en: "What is the job of the tiny hairs inside the nose?" },
      options: [
        { text: { id: "Menyapu kotoran dari udara", en: "Sweeping dirt from the air" } },
        { text: { id: "Membuat suara bersin", en: "Making sneeze sounds" } },
        { text: { id: "Menangkap makanan", en: "Catching food" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Sistem penciuman manusia bagaikan sensor kimia paling canggih di dunia. Di bagian atas dalam hidung, terdapat jutaan sel reseptor bau (olfaktori). Saat bau masuk, sel ini mengirim sinyal listrik ke otak secepat kilat! Bahkan, bau tertentu bisa membangkitkan memori masa lalu, karena area penciuman di otak terhubung langsung ke area memori (hippocampus). Maha Suci Allah (Al-Khaliq) yang menciptakan sistem memori dan sensor canggih ini! 🧠⚡", en: "The human olfactory system is like the world's most advanced chemical sensor. At the upper inside of the nose, there are millions of olfactory receptor cells. When a scent enters, these cells send electrical signals to the brain at lightning speed! In fact, certain smells can trigger past memories, because the olfactory area in the brain is directly connected to the memory area (hippocampus). Glory be to Allah (Al-Khaliq) who created this advanced memory and sensor system! 🧠⚡" },
    anatomy: [
      { part: { id: "Rongga Hidung", en: "Nasal Cavity" }, desc: { id: "Ruang besar di balik hidung tempat udara dilembabkan dan dihangatkan.", en: "The large space behind the nose where air is moisturized and warmed." } },
      { part: { id: "Silia (Bulu Hidung)", en: "Cilia" }, desc: { id: "Rambut halus yang menyaring debu agar tidak masuk ke paru-paru.", en: "Fine hairs that filter dust so it doesn't enter the lungs." } },
      { part: { id: "Epitel Olfaktori", en: "Olfactory Epithelium" }, desc: { id: "Area kecil di atap rongga hidung yang berisi saraf pendeteksi bau.", en: "A small area at the roof of the nasal cavity containing scent-detecting nerves." } }
    ],
    wowFactor: { id: "Kecepatan bersin manusia bisa mencapai 160 km/jam! Bersin adalah cara tubuh secara refleks membuang kuman atau debu yang mengganggu. 🤧💨", en: "The speed of a human sneeze can reach 160 km/h! Sneezing is the body's reflex to expel irritating germs or dust. 🤧💨" },
    quranVerse: {
      arabic: "وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا",
      transliteration: "Wa khalaqa kulla shayin faqaddarahu taqdeera",
      translation: { id: "Dan Dia telah menciptakan segala sesuatu, dan Dia menetapkan ukuran-ukurannya dengan serapi-rapinya.", en: "And He has created each thing and determined it with [precise] determination." }
    },
    quiz: [
      {
        question: { id: "Bersin memiliki fungsi refleks yang sangat cepat untuk apa?", en: "Sneezing has a very fast reflex function for what?" },
        options: [
          { text: { id: "Memanggil teman", en: "Calling a friend" } },
          { text: { id: "Membuang kuman atau debu", en: "Expelling germs or dust" } },
          { text: { id: "Mendinginkan hidung", en: "Cooling the nose" } }
        ],
        answerIdx: 1
      }
    ]
  }
};