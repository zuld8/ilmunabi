// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const idrisAsData: NabiData = {
  slug: "idris-as",
  name: { id: "Nabi Idris AS", en: "Prophet Idris AS" },
  icon: "📚",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Maryam:56-57",
  storyShort: { id: "Nabi yang rajin belajar dan manusia pertama yang pandai menulis.", en: "The diligent prophet who was the first human to write." },
  storyFull: { id: "Nabi Idris AS adalah manusia pertama yang pandai membaca, menulis dengan pena, dan menjahit pakaian. Sebelum beliau, manusia menggunakan kulit hewan sebagai pakaian. Beliau sangat rajin belajar dan beribadah kepada Allah. Karena ketekunan dan kesalehannya, Allah mengangkat beliau ke tempat yang tinggi (langit).", en: "Prophet Idris AS was the first human to master reading, writing with a pen, and sewing clothes. Before him, people used animal skins as clothes. He was very diligent in studying and worshipping Allah. Because of his perseverance and piety, Allah raised him to a high place (heaven)." },
  miracles: [
    { id: "Mampu menulis dengan pena pertama kali", en: "The first to write with a pen" },
    { id: "Manusia pertama yang pandai menjahit pakaian", en: "The first human to sew clothes" }
  ],
  characterTraits: [
    { trait: { id: "Rajin Belajar", en: "Diligent in studying" }, desc: { id: "Suka membaca dan menuntut ilmu", en: "Likes to read and seek knowledge" } },
    { trait: { id: "Kreatif", en: "Creative" }, desc: { id: "Mampu membuat pakaian dari kain", en: "Able to make clothes from fabric" } }
  ],
  timeline: [
    { yearOrAge: "Muda", title: { id: "Menemukan alat tulis", en: "Invented writing tools" }, desc: { id: "Mengajarkan cara menulis dan membaca", en: "Taught how to read and write" } },
    { yearOrAge: "Dewasa", title: { id: "Menjahit Pakaian", en: "Sewing Clothes" }, desc: { id: "Membuat pakaian yang lebih nyaman dipakai", en: "Made more comfortable clothes" } }
  ],
  dailyLifeConnection: { id: "Mari kita rajin membaca buku dan berkreasi, karena ilmu pengetahuan adalah kunci kesuksesan!", en: "Let's read books diligently and be creative, because knowledge is the key to success!" }
};
