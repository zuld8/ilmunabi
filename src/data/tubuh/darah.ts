import { ObjectData } from "../objects";

export const darahData: ObjectData = {
  slug: "darah",
  name: { id: "Darah", en: "Blood" },
  icon: "🩸",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Sanguis",
  surahName: "Al-'Alaq",
  surahReference: "96:2",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "دَمٌ", latin: "Damun", arti: "Darah", artiEn: "Blood", contohAyat: "Khalaqal-insaana min 'alaq (Dia menciptakan manusia dari segumpal darah)." }
  ],
  balita: {
    text: { id: "Wusss! Darah mengalir di seluruh tubuh kita seperti sungai kecil merah. Ia membawa makanan supaya kita kuat dan bisa lari kencang! 🏃‍♂️💨", en: "Whoosh! Blood flows all over our body like a little red river. It carries food so we can be strong and run fast! 🏃‍♂️💨" },
    audioTranscript: { id: "Wah, darah kita hebat! Dia jalan-jalan terus di dalam tubuh membawa makanan.", en: "Wow, our blood is amazing! It keeps traveling inside the body bringing food." },
    quiz: {
      question: { id: "Apa warna darah kita?", en: "What color is our blood?" },
      options: [
        { text: { id: "Kuning", en: "Yellow" } },
        { text: { id: "Merah", en: "Red" } },
        { text: { id: "Biru", en: "Blue" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Darah itu seperti kurir paket super cepat! Jantung memompa darah ke seluruh tubuh, membawa oksigen dan makanan. Bahkan saat kita tidur, darah tetap bekerja! Masya Allah, Allah membuat sistem pengiriman hebat ini agar kita selalu sehat. ❤️", en: "Blood is like a super-fast delivery courier! The heart pumps blood all over the body, carrying oxygen and food. Even when we sleep, blood keeps working! Masya Allah, Allah made this amazing delivery system so we always stay healthy. ❤️" },
    facts: [
      { id: "Ada sel darah putih yang bertugas seperti polisi, melawan kuman penyakit! 👮‍♂️🦠", en: "There are white blood cells that act like police, fighting off disease germs! 👮‍♂️🦠" },
      { id: "Jika pembuluh darah direntangkan, panjangnya bisa mengelilingi Bumi lebih dari dua kali! 🌍", en: "If all blood vessels were stretched out, they could circle the Earth more than twice! 🌍" },
      { id: "Darah menyumbang sekitar 7-8% dari total berat badan manusia.", en: "Blood makes up about 7-8% of total human body weight." }
    ],
    quranVerse: {
      arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",
      transliteration: "Khalaqal-insaana min 'alaq",
      translation: { id: "Dia telah menciptakan manusia dari segumpal darah.", en: "Created man from a clinging substance." },
      context: { id: "Allah menyebutkan bahwa manusia diciptakan dari segumpal darah, menunjukkan betapa pentingnya darah bagi kehidupan.", en: "Allah mentions that man is created from a clot of blood, showing how important blood is for life." }
    },
    quiz: {
      question: { id: "Siapa yang bertugas memompa darah ke seluruh tubuh?", en: "What is responsible for pumping blood throughout the body?" },
      options: [
        { text: { id: "Jantung", en: "Heart" } },
        { text: { id: "Paru-paru", en: "Lungs" } },
        { text: { id: "Perut", en: "Stomach" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Pernahkah kamu berpikir bagaimana tubuh kita tahu cara menyembuhkan luka? Saat kita terluka, keping darah (trombosit) langsung bergegas membentuk jaring penutup agar darah tidak keluar terus! Ini adalah salah satu bukti rancangan Allah yang sangat detail. Bayangkan jika tidak ada sistem perbaikan otomatis ini, sebuah luka kecil bisa berbahaya! Sungguh Allah Maha Pencipta (Al-Khaliq) yang mendesain sistem pertahanan tubuh yang luar biasa rumit. 🛡️✨", en: "Have you ever wondered how our body knows how to heal a wound? When we are hurt, platelets rush to form a net covering so blood doesn't keep pouring out! This is one proof of Allah's highly detailed design. Imagine if there was no auto-repair system, a small wound could be dangerous! Indeed Allah is The Creator (Al-Khaliq) who designed this incredibly complex body defense system. 🛡️✨" },
    anatomy: [
      { part: { id: "Sel Darah Merah", en: "Red Blood Cells" }, desc: { id: "Membawa oksigen dari paru-paru ke seluruh tubuh.", en: "Carry oxygen from the lungs to the rest of the body." } },
      { part: { id: "Sel Darah Putih", en: "White Blood Cells" }, desc: { id: "Pasukan pelindung yang membunuh bakteri jahat dan virus.", en: "The protective army that kills bad bacteria and viruses." } },
      { part: { id: "Trombosit", en: "Platelets" }, desc: { id: "Berfungsi menambal pembuluh darah yang bocor saat kita terluka.", en: "Function to patch up leaking blood vessels when we are injured." } }
    ],
    wowFactor: { id: "Darah bisa mendeteksi suhu tubuh! Darah membantu menyebarkan panas agar tubuh kita tetap hangat saat dingin, dan melepas panas saat kita kepanasan. 🌡️", en: "Blood can detect body temperature! Blood helps spread heat to keep our body warm when it's cold, and releases heat when we are too hot. 🌡️" },
    quranVerse: {
      arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",
      transliteration: "Khalaqal-insaana min 'alaq",
      translation: { id: "Dia telah menciptakan manusia dari segumpal darah.", en: "Created man from a clinging substance." }
    },
    quiz: [
      {
        question: { id: "Bagian darah mana yang bertugas melawan penyakit dan kuman?", en: "Which part of the blood is responsible for fighting diseases and germs?" },
        options: [
          { text: { id: "Sel darah merah", en: "Red blood cells" } },
          { text: { id: "Sel darah putih", en: "White blood cells" } },
          { text: { id: "Plasma darah", en: "Blood plasma" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
