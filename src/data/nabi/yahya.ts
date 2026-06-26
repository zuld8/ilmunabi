// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const yahyaData: NabiData = {
  slug: "nabi-yahya",
  name: {
    id: "Nabi Yahya A.S.",
    en: "Prophet Yahya A.S.",
  },
  icon: "📖",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi yang sangat cerdas sejak kecil, lemah lembut, dan cinta kepada hewan serta alam.",
    en: "The Prophet who was very smart since childhood, gentle, and loved animals and nature.",
  },
  storyFull: {
    id: "Nabi Yahya A.S. adalah anak dari Nabi Zakaria A.S. yang lahir karena mukjizat. Sejak kecil, beliau sangat pintar dan sudah memahami isi kitab Taurat. Beliau sangat menyayangi binatang, hidup sederhana di hutan, dan sangat berbakti kepada kedua orang tuanya.",
    en: "Prophet Yahya A.S. was the son of Prophet Zakariyya A.S., born through a miracle. Since childhood, he was very smart and already understood the Torah. He loved animals very much, lived simply in the forest, and was very devoted to his parents.",
  },
  miracles: [
    { id: "Diberi kecerdasan luar biasa dan pemahaman agama sejak masih anak-anak.", en: "Given extraordinary intelligence and religious understanding since childhood." },
    { id: "Disucikan hatinya oleh Allah dari rasa sombong dan durhaka.", en: "His heart was purified by Allah from arrogance and disobedience." }
  ],
  characterTraits: [
    { trait: { id: "Anak Berbakti", en: "Devoted Child" }, desc: { id: "Sangat taat dan sayang kepada kedua orang tuanya.", en: "Very obedient and loving to his parents." } },
    { trait: { id: "Penyayang Binatang", en: "Animal Lover" }, desc: { id: "Suka bergaul dengan hewan-hewan di alam liar dan menyayangi mereka.", en: "Loved to interact with animals in the wild and cared for them." } },
    { trait: { id: "Jenius & Bijak", en: "Genius & Wise" }, desc: { id: "Pintar ilmu agama walau usianya masih sangat muda.", en: "Smart in religious knowledge even at a very young age." } }
  ],
  timeline: [
    { yearOrAge: "Lahir", title: { id: "Mukjizat Kelahiran", en: "Miracle of Birth" }, desc: { id: "Lahir dari ayah ibu yang sudah sangat tua berkat kuasa Allah.", en: "Born to very old parents thanks to the power of Allah." } },
    { yearOrAge: "Anak-anak", title: { id: "Diberi Hikmah", en: "Given Wisdom" }, desc: { id: "Sejak kecil sudah rajin membaca kitab suci dan tidak suka main sia-sia.", en: "Since childhood, he diligently read the holy book and disliked useless play." } },
    { yearOrAge: "Dewasa", title: { id: "Membaptis Isa", en: "Baptizing Isa" }, desc: { id: "Menjadi saksi dan pendukung kerasulan Nabi Isa A.S.", en: "Became a witness and supporter of Prophet Isa A.S.'s prophethood." } }
  ],
  dailyLifeConnection: {
    id: "Jadilah anak yang pintar, sayang binatang, dan selalu patuh pada ayah dan ibu.",
    en: "Be a smart child, love animals, and always obey your father and mother.",
  },
  surahReference: "Maryam 19:12-15",
};
