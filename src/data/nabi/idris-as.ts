// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const idrisAsData: NabiData = {
  slug: "idris-as",
  name: { id: "Nabi Idris AS", en: "Prophet Idris AS" },
  icon: "✍️",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Maryam:56-57",
  storyShort: {
    id: "Nabi yang pertama kali bisa menulis dengan pena dan menjahit pakaian.",
    en: "The first prophet who could write with a pen and sew clothes."
  },
  storyFull: {
    id: "Nabi Idris AS adalah manusia pertama yang dianugerahi kepandaian luar biasa oleh Allah. Beliau adalah orang pertama yang pandai membaca, menulis dengan pena, berhitung, menjahit baju, hingga ilmu perbintangan (astronomi). Selain cerdas, beliau juga sangat rajin beribadah dan sabar berdakwah.",
    en: "Prophet Idris AS was the first human endowed with extraordinary intelligence by Allah. He was the first person skilled in reading, writing with a pen, calculating, sewing clothes, and even astronomy. Besides being smart, he was also very diligent in worship and patient in preaching."
  },
  miracles: [
    { id: "Manusia pertama yang menulis dengan pena.", en: "The first human to write with a pen." },
    { id: "Diberi ilmu astronomi (perbintangan) dan matematika.", en: "Given the knowledge of astronomy and mathematics." }
  ],
  characterTraits: [
    { trait: { id: "Cerdas", en: "Intelligent" }, desc: { id: "Gemar belajar banyak ilmu pengetahuan", en: "Loves to learn many sciences" } },
    { trait: { id: "Sabar", en: "Patient" }, desc: { id: "Tidak mudah menyerah saat mengajar", en: "Does not easily give up when teaching" } },
    { trait: { id: "Rajin Beribadah", en: "Diligent in Worship" }, desc: { id: "Selalu mengingat Allah di setiap waktu", en: "Always remembers Allah at all times" } }
  ],
  timeline: [
    { yearOrAge: "Masa Muda", title: { id: "Belajar Menulis", en: "Learning to Write" }, desc: { id: "Mulai menggunakan pena", en: "Started using a pen" } },
    { yearOrAge: "Dewasa", title: { id: "Menjahit Pakaian", en: "Sewing Clothes" }, desc: { id: "Membuat pakaian untuk manusia", en: "Making clothes for humans" } },
    { yearOrAge: "Tua", title: { id: "Berdakwah", en: "Preaching" }, desc: { id: "Mengajarkan tauhid", en: "Teaching monotheism" } }
  ],
  dailyLifeConnection: {
    id: "Rajinlah belajar menulis dan membaca seperti Nabi Idris AS! Ilmu yang kita pelajari akan sangat bermanfaat.",
    en: "Be diligent in learning to write and read like Prophet Idris AS! The knowledge we learn will be very useful."
  }
};

