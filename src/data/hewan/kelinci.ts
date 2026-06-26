import { ObjectData } from "../objects";

export const kelinciData: ObjectData = {
  slug: "kelinci",
  name: { id: "Kelinci", en: "Rabbit" },
  icon: "🐰",
  category: "hewan",
  type: "hewan",
  scientificName: "Oryctolagus cuniculus",
  surahName: "Al-Baqarah",
  surahReference: "2:168",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "أَرْنَبٌ", latin: "arnabun", arti: "Kelinci", artiEn: "Rabbit", contohAyat: "Kelinci adalah salah satu rezeki halal di bumi." }
  ],
  balita: {
    text: { id: "Boing! Boing! 🐰 Kelinci melompat-lompat dengan lincah. Dia suka makan wortel!", en: "Boing! Boing! 🐰 Rabbits hop around playfully. They love eating carrots!" },
    audioTranscript: { id: "Halo teman! Aku kelinci yang lucu. Gigiku kuat untuk mengunyah sayuran, dan aku suka melompat tinggi!", en: "Hello friend! I am a cute rabbit. My teeth are strong for chewing vegetables, and I love jumping high!" },
    quiz: {
      question: { id: "Sayuran apa yang sangat disukai kelinci?", en: "What vegetable do rabbits love very much?" },
      options: [
        { text: { id: "Cabai", en: "Chili" } },
        { text: { id: "Wortel", en: "Carrot" } },
        { text: { id: "Bawang", en: "Onion" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Gigi kelinci itu terus tumbuh sepanjang hidup mereka lho! Makanya mereka harus sering mengunyah agar giginya tidak kepanjangan. Masya Allah ya ciptaan-Nya!", en: "A rabbit's teeth keep growing throughout its life! That's why they have to chew often so their teeth don't get too long. Mashallah, what a creation!" },
    facts: [
      { id: "Kelinci bisa melompat setinggi 1 meter dan sejauh 3 meter! 🦘", en: "Rabbits can jump up to 1 meter high and 3 meters long! 🦘" },
      { id: "Telinga panjang mereka bisa diputar 270 derajat untuk mendeteksi bahaya dari segala arah! 👂", en: "Their long ears can rotate 270 degrees to detect danger from all directions! 👂" },
      { id: "Kelinci sangat peduli dengan kebersihan, mereka selalu membersihkan diri setiap hari seperti kucing! 🛁", en: "Rabbits are very hygienic, they groom themselves every day like cats! 🛁" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Tahukah kamu, sahabat Nabi Anas bin Malik pernah menangkap kelinci dan Nabi Muhammad SAW memakannya? Ini menjadi bukti bahwa kelinci termasuk hewan buruan darat yang baik dan halal dimakan (Halalan Thayyiban), sesuai dengan perintah Allah untuk memakan makanan yang halal di bumi.", en: "Did you know, the Prophet's companion Anas bin Malik once caught a rabbit and Prophet Muhammad SAW ate it? This is proof that rabbits are good land game and halal to eat (Halalan Tayyiban), according to Allah's command to eat halal food on earth." },
    quranVerse: {
      arabic: "يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا",
      transliteration: "Yaa ayyuhannaasu kuluu mimmaa fil ardi halaalan tayyibaa",
      translation: { id: "Wahai manusia, makanlah dari apa yang ada di bumi yang halal lagi baik.", en: "O mankind, eat from whatever is on earth [that is] lawful and good." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
