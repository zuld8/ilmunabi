import { ObjectData } from "../objects";

export const gravitasiData: ObjectData = {
  slug: "gravitasi",
  name: { id: "Gravitasi Bumi", en: "Earth's Gravity" },
  icon: "🍎",
  category: "alam",
  type: "alam",
  scientificName: "Gravitas",
  surahName: "Al-Mursalat",
  surahReference: "Al-Mursalat:25-26",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "جَاذِبِيَّةٌ", latin: "Jadhibiyyah", arti: "Gravitasi", artiEn: "Gravity" },
    { arab: "أَرْضٌ", latin: "Ardhun", arti: "Bumi", artiEn: "Earth" },
    { arab: "وَزْنٌ", latin: "Waznun", arti: "Berat", artiEn: "Weight" },
    { arab: "سُقُوطٌ", latin: "Suqut", arti: "Jatuh", artiEn: "Fall" }
  ],
  balita: {
    text: { id: "Wah, coba lempar bola ke atas! Pasti turun lagi kan? Itu karena bumi punya tarikan kuat bernama gravitasi! Allah ciptakan gravitasi agar kita tidak melayang-layang di udara.", en: "Wow, try throwing a ball up! It comes down, right? That's because the earth has a strong pull called gravity! Allah created gravity so we don't float in the air." },
    audioTranscript: { id: "Bumi punya tarikan yang menahan kita agar tidak melayang.", en: "The earth has a pull that keeps us from floating." },
    quiz: {
      question: { id: "Apa yang terjadi jika kita melempar bola ke atas?", en: "What happens if we throw a ball up?" },
      options: [
        { text: { id: "Bola akan terbang terus", en: "The ball will keep flying" } },
        { text: { id: "Bola akan jatuh ke bawah", en: "The ball will fall down" } },
        { text: { id: "Bola akan menghilang", en: "The ball will disappear" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Gravitasi adalah gaya tarik-menarik yang terjadi antara semua partikel yang mempunyai massa di alam semesta. Bumi kita punya gravitasi yang sangat kuat sehingga menahan lautan dan udara agar tetap di tempatnya. Masya Allah, Allah menjadikan bumi sebagai tempat yang nyaman (kifaata) untuk kita hidup!", en: "Gravity is a force of attraction that exists between any two masses, any two bodies, any two particles. Our Earth has a very strong gravity that holds the oceans and air in place. Masya Allah, Allah made the earth a comfortable place (kifaata) for us to live!" },
    facts: [
      { id: "Gravitasi membuat kita bisa berjalan di atas tanah.", en: "Gravity makes it possible for us to walk on the ground." },
      { id: "Bulan juga punya gravitasi, tapi lebih lemah dari bumi.", en: "The moon also has gravity, but it's weaker than the earth's." },
      { id: "Tanpa gravitasi, atmosfer bumi akan lepas ke luar angkasa.", en: "Without gravity, the earth's atmosphere would escape into space." },
      { id: "Matahari punya gravitasi yang sangat kuat yang menahan planet-planet.", en: "The sun has a very strong gravity that holds the planets." },
      { id: "Gaya gravitasi menarik segala sesuatu menuju pusat bumi.", en: "Gravity pulls everything towards the center of the earth." }
    ],
    quranVerse: {
      arabic: "أَلَمْ نَجْعَلِ ٱلْأَرْضَ كِفَاتًا",
      transliteration: "Alam naj'alil-ardha kifaataa",
      translation: { id: "Bukankah Kami jadikan bumi (tempat) berkumpul.", en: "Have We not made the earth a gathering place." }
    },
    quiz: {
      question: { id: "Mengapa air laut tidak tumpah ke luar angkasa?", en: "Why doesn't the seawater spill into space?" },
      options: [
        { text: { id: "Karena ada dinding raksasa", en: "Because there is a giant wall" } },
        { text: { id: "Karena ada gravitasi bumi", en: "Because of the earth's gravity" } },
        { text: { id: "Karena lautnya membeku", en: "Because the sea is frozen" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Menurut hukum gravitasi Newton dan relativitas umum Einstein, massa yang besar akan melengkungkan ruang dan waktu! Itulah yang menahan kita di bumi. Hebatnya, Allah sudah menyebutkan dalam Al-Qur'an 1400 tahun lalu bahwa bumi bertindak sebagai 'kifaata' (tempat yang menahan/mengumpulkan) bagi benda hidup dan mati, jauh sebelum ilmu fisika modern menemukan konsep gaya tarik ini!", en: "According to Newton's law of gravity and Einstein's general relativity, massive objects curve space and time! That's what holds us on earth. Amazingly, Allah mentioned in the Quran 1400 years ago that the earth acts as 'kifaata' (a gathering/holding place) for the living and the dead, long before modern physics discovered this force concept!" },
    anatomy: [
      { part: { id: "Gaya Tarik Bumi", en: "Earth's Pull" }, desc: { id: "Gaya yang menarik objek ke pusat bumi dengan percepatan 9.8 m/s².", en: "The force pulling objects to the earth's center at 9.8 m/s²." } },
      { part: { id: "Pasang Surut Laut", en: "Ocean Tides" }, desc: { id: "Bukti gravitasi bulan yang menarik air laut bumi.", en: "Evidence of the moon's gravity pulling the earth's seawater." } }
    ],
    wowFactor: { id: "Hah?! Kalau bumi tiba-tiba kehilangan gravitasinya selama 5 detik saja, semua benda yang tidak terpaku ke tanah (termasuk air, udara, dan kita) akan melayang terbang ke luar angkasa!", en: "What?! If the earth suddenly lost its gravity for just 5 seconds, everything not nailed to the ground (including water, air, and us) would float away into space!" },
    quranVerse: {
      arabic: "أَلَمْ نَجْعَلِ ٱلْأَرْضَ كِفَاتًا ۝ أَحْيَآءً وَأَمْوَٰتًا",
      transliteration: "Alam naj'alil-ardha kifaataa. Ahyaaa'an wa amwaataa.",
      translation: { id: "Bukankah Kami jadikan bumi (tempat) berkumpul, orang-orang hidup dan orang-orang mati?", en: "Have We not made the earth a container, Of the living and the dead?" }
    },
    quiz: [
      {
        question: { id: "Berapa kira-kira percepatan gravitasi rata-rata di permukaan bumi?", en: "What is the approximate average gravitational acceleration on the earth's surface?" },
        options: [
          { text: { id: "9.8 m/s²", en: "9.8 m/s²" } },
          { text: { id: "100 m/s²", en: "100 m/s²" } },
          { text: { id: "0 m/s²", en: "0 m/s²" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Istilah dalam Al-Qur'an (Surat Al-Mursalat) yang bermakna 'tempat berkumpul/menahan' adalah?", en: "The term in the Quran (Surah Al-Mursalat) meaning 'gathering/holding place' is?" },
        options: [
          { text: { id: "Kifaata", en: "Kifaata" } },
          { text: { id: "Mihada", en: "Mihada" } },
          { text: { id: "Rawasiya", en: "Rawasiya" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Gravitasi benda langit apa yang paling mempengaruhi pasang surut air laut?", en: "Which celestial body's gravity most affects ocean tides?" },
        options: [
          { text: { id: "Mars", en: "Mars" } },
          { text: { id: "Bulan", en: "Moon" } },
          { text: { id: "Venus", en: "Venus" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
