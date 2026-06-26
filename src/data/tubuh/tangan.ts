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
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "يَدٌ", latin: "yadun", arti: "Tangan", artiEn: "Hand", contohAyat: "وَتُكَلِّمُنَا أَيْدِيهِمْ" }
  ],
  balita: {
    text: { id: "Hap! Tanganku bisa menangkap bola! 🖐️", en: "Catch! My hand can catch a ball! 🖐️" },
    audioTranscript: { id: "Tangan kita hebat banget, bisa buat tepuk tangan, menggambar, dan bersalaman sama teman. Jangan lupa cuci tangan ya!", en: "Our hands are so great, they can clap, draw, and shake hands with friends. Don't forget to wash your hands!" },
    quiz: {
      question: { id: "Berapa jumlah jari di satu tangan kita?", en: "How many fingers do we have on one hand?" },
      options: [
        { text: { id: "Tiga", en: "Three" } },
        { text: { id: "Lima", en: "Five" } },
        { text: { id: "Sepuluh", en: "Ten" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tangan itu alat yang super canggih. Di telapak tangan kita ada otot dan tulang kecil yang bikin kita bisa memegang pensil atau menggendong kucing kesayangan! Coba deh gerakan jari-jarimu, lentur sekali kan?", en: "The hand is a super advanced tool. In our palms, there are small muscles and bones that let us hold a pencil or carry a pet cat! Try moving your fingers, they are very flexible, right?" },
    facts: [
      { id: "Satu tangan manusia punya 27 tulang!", en: "One human hand has 27 bones!" },
      { id: "Jempol tangan membuat kita bisa memegang barang dengan kuat.", en: "The thumb allows us to grip objects strongly." },
      { id: "Otot yang menggerakkan jari tangan sebagian ada di lengan bawah.", en: "The muscles that move your fingers are partly in the forearm." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Secara anatomi, tangan (manus) adalah keajaiban biomekanik. Tangan dikendalikan oleh saraf rumit yang meneruskan sinyal dari otak dalam hitungan milidetik. Hebatnya, kelak di hari kiamat, mulut kita akan dikunci dan tanganlah yang akan berbicara dan bersaksi tentang apa yang kita kerjakan di dunia!", en: "Anatomically, the hand (manus) is a biomechanical marvel. The hand is controlled by complex nerves that transmit signals from the brain in milliseconds. Amazingly, on the Day of Judgment, our mouths will be sealed and our hands will speak and testify about what we did in the world!" },
    quranVerse: {
      arabic: "الْيَوْمَ نَخْتِمُ عَلَىٰ أَفْوَاهِهِمْ وَتُكَلِّمُنَا أَيْدِيهِمْ",
      transliteration: "Al-yawma nakhtimu 'alaa afwaahihim watukallimunaa aidiihim",
      translation: { id: "Pada hari ini Kami tutup mulut mereka; dan berkatalah kepada Kami tangan mereka...", en: "That Day, We will seal over their mouths, and their hands will speak to Us..." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
