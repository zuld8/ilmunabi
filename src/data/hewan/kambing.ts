import { ObjectData } from "../objects";

export const kambingData: ObjectData = {
  slug: "kambing",
  name: { id: "Kambing", en: "Goat" },
  icon: "🐐",
  category: "hewan",
  type: "hewan",
  scientificName: "Capra hircus",
  surahName: "Al-An'am",
  surahReference: "6:143",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "مَاعِزٌ", latin: "maa'izun", arti: "Kambing", artiEn: "Goat", contohAyat: "Kambing menghasilkan susu yang sehat." }
  ],
  balita: {
    text: { id: "Mbeeek! 🐐 Kambing suka makan rumput daun hijau. Mereka pintar melompat lho!", en: "Meeeh! 🐐 Goats love eating green grass and leaves. They are very good at jumping!" },
    audioTranscript: { id: "Hai! Aku kambing! Aku suka sekali memanjat dan makan dedaunan yang segar. Nyam nyam!", en: "Hi! I'm a goat! I really love climbing and eating fresh leaves. Yum yum!" },
    quiz: {
      question: { id: "Apa makanan kesukaan kambing?", en: "What is a goat's favorite food?" },
      options: [
        { text: { id: "Tulang", en: "Bones" } },
        { text: { id: "Rumput dan daun", en: "Grass and leaves" } },
        { text: { id: "Es krim", en: "Ice cream" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Kambing gunung itu pemanjat tebing paling hebat di dunia! Mereka bisa berdiri di tebing batu yang sangat curam lho. Subhanallah!", en: "Did you know? Mountain goats are the best cliff climbers in the world! They can stand on very steep rock cliffs. Subhanallah!" },
    facts: [
      { id: "Susu kambing sangat sehat dan merupakan minuman kesukaan Rasulullah SAW! 🥛", en: "Goat milk is very healthy and was the favorite drink of Prophet Muhammad SAW! 🥛" },
      { id: "Kambing punya pupil mata berbentuk persegi panjang supaya bisa melihat sangat lebar! 👀", en: "Goats have rectangular pupils so they can see very widely! 👀" },
      { id: "Kambing sangat cerdas dan bisa diajari trik seperti anjing! 🎓", en: "Goats are very smart and can be taught tricks like dogs! 🎓" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kambing adalah salah satu hewan peliharaan pertama dalam sejarah manusia! Allah memberikan susu kambing khasiat luar biasa, lebih mudah dicerna manusia dibanding susu sapi. Dalam Al-Qur'an disebutkan 8 hewan ternak berpasangan, termasuk sepasang dari jenis domba dan sepasang dari jenis kambing.", en: "Goats are one of the first domesticated animals in human history! Allah gave goat's milk extraordinary benefits, it's easier for humans to digest than cow's milk. The Qur'an mentions 8 livestock in pairs, including a pair of sheep and a pair of goats." },
    quranVerse: {
      arabic: "ثَمَانِيَةَ أَزْوَاجٍ ۖ مِنَ الضَّأْنِ اثْنَيْنِ وَمِنَ الْمَعْزِ اثْنَيْنِ",
      transliteration: "Thamaaniyata azwaajin minad-da'nith-naini wa minal-ma'zith-nain",
      translation: { id: "Ada delapan hewan ternak yang berpasangan; sepasang domba dan sepasang kambing.", en: "There are eight mates (in pairs): of the sheep two, and of the goats two." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
