import { ObjectData } from "../objects";

export const kambingData: ObjectData = {
  slug: "kambing",
  name: { id: "Kambing", en: "Goat" },
  icon: "🐐",
  category: "mamalia",
  type: "hewan",
  scientificName: "Capra aegagrus hircus",
  surahName: "Al-An'am",
  surahReference: "6:143",
  unlockedAtPoints: 25,
  kosakata: [
    { arab: "مَاعِز", latin: "Maa'iz", arti: "Kambing", artiEn: "Goat", contohAyat: "Delapan ekor berpasangan; sepasang dari domba dan sepasang dari kambing." }
  ],
  balita: {
    text: { id: "Mbeee! Aku kambing, si pelompat hebat! Aku suka memanjat dan makan rumput yang enak! 🌿", en: "Baaa! I am a goat, a great jumper! I love to climb and eat yummy grass! 🌿" },
    audioTranscript: { id: "Mbeee! Lihatlah janggut kecilku. Lucu kan?", en: "Baaa! Look at my little beard. Cute, isn't it?" },
    quiz: {
      question: { id: "Apa yang sangat disukai kambing?", en: "What do goats really like to do?" },
      options: [
        { text: { id: "Berenang di laut", en: "Swimming in the sea" } },
        { text: { id: "Melompat dan memanjat", en: "Jumping and climbing" } },
        { text: { id: "Menyanyi lagu", en: "Singing songs" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kambing adalah salah satu hewan yang banyak diternakkan pada zaman Nabi Muhammad SAW. Susu kambing sangat sehat dan lezat, lho! Itu minuman favorit Rasulullah.", en: "Goats are one of the animals that were widely farmed during the time of Prophet Muhammad SAW. Goat's milk is very healthy and delicious, you know! It was the Prophet's favorite drink." },
    facts: [
      { id: "Kambing tidak punya gigi seri di bagian atas rahangnya.", en: "Goats have no incisor teeth on the top part of their jaw." },
      { id: "Mereka bisa mengenali nama mereka sendiri jika dipanggil!", en: "They can recognize their own names if called!" },
      { id: "Kambing punya pendengaran super tajam dan bisa menggerakkan telinganya ke segala arah.", en: "Goats have super sharp hearing and can move their ears in all directions." }
    ],
    quranVerse: {
      arabic: "ثَمَانِيَةَ أَزْوَاجٍ ۖ مِنَ الضَّأْنِ اثْنَيْنِ وَمِنَ الْمَعْزِ اثْنَيْنِ",
      transliteration: "Thamaniyata azwaj. Minad-da'nithnayni wa minal-ma'zithnayn.",
      translation: { id: "(Allah menciptakan) delapan ekor hewan ternak yang berpasangan; sepasang domba dan sepasang kambing.", en: "[He created] eight mates: of the sheep, two and of the goats, two." },
      context: { id: "Allah menjelaskan penciptaan berbagai ternak untuk dimanfaatkan manusia.", en: "Allah explains the creation of various livestock to be utilized by humans." }
    },
    quiz: {
      question: { id: "Minuman apa dari kambing yang sangat sehat dan disukai Nabi Muhammad SAW?", en: "What drink from a goat is very healthy and loved by Prophet Muhammad SAW?" },
      options: [
        { text: { id: "Jus Kambing", en: "Goat juice" } },
        { text: { id: "Susu Kambing", en: "Goat's milk" } },
        { text: { id: "Air mata Kambing", en: "Goat tears" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Kambing memiliki pupil mata persegi panjang horizontal, sama seperti domba. Allah mendesain ini supaya mereka bisa melihat sangat lebar walau sedang menunduk memakan rumput!", en: "Goats have horizontal rectangular pupils, just like sheep. Allah designed this so they can see very widely even when they lower their heads to eat grass!" },
    anatomy: [
      { part: { id: "Kuku Belah", en: "Cloven Hooves" }, desc: { id: "Kuku kambing terbelah dua yang membantu mereka mencengkeram batu saat memanjat tebing curam.", en: "Goat hooves are split in two, helping them grip rocks when climbing steep cliffs." } },
      { part: { id: "Perut Empat Bilik", en: "Four-Chambered Stomach" }, desc: { id: "Sistem pencernaan rumit yang membuat kambing bisa memakan tanaman berduri sekalipun.", en: "A complex digestive system that allows goats to eat even thorny plants." } }
    ],
    wowFactor: { id: "Ada kambing liar yang bisa memanjat bendungan vertikal (tegak lurus) setinggi bangunan hanya untuk menjilat garam di batu bata! Keseimbangannya luar biasa!", en: "There are wild goats that can climb vertical dams as high as buildings just to lick salt off the bricks! Their balance is incredible!" },
    quranVerse: {
      arabic: "وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً ۖ نُسْقِيكُمْ مِمَّا فِي بُطُونِهَا",
      transliteration: "Wa inna lakum fil-an'ami la'ibratan nusqikum mimma fi butuniha.",
      translation: { id: "Dan sungguh, pada hewan ternak itu terdapat pelajaran bagimu. Kami memberimu minum dari apa yang ada dalam perutnya.", en: "And indeed, for you in grazing livestock is a lesson. We give you drink from what is in their bellies." }
    },
    quiz: [
      {
        question: { id: "Kenapa kuku kambing sangat istimewa?", en: "Why are a goat's hooves so special?" },
        options: [
          { text: { id: "Kuku mereka bisa menyala", en: "Their hooves can glow" } },
          { text: { id: "Kuku mereka terbelah dua untuk mencengkeram batu", en: "Their hooves are split in two to grip rocks" } },
          { text: { id: "Kuku mereka terbuat dari emas", en: "Their hooves are made of gold" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
