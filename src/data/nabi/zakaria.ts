// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const zakariaData: NabiData = {
  slug: "nabi-zakaria",
  name: {
    id: "Nabi Zakaria A.S.",
    en: "Prophet Zakariyya A.S.",
  },
  icon: "🤲",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi yang merawat Maryam dan terus berdoa meminta anak meski usianya sudah sangat tua.",
    en: "The Prophet who cared for Maryam and kept praying for a child even though he was very old.",
  },
  storyFull: {
    id: "Nabi Zakaria A.S. adalah paman dari Siti Maryam. Beliau melihat mukjizat makanan dari surga di kamar Maryam, yang membuatnya yakin tak ada yang mustahil bagi Allah. Beliau yang sudah tua renta terus berdoa meminta keturunan. Allah akhirnya mengabulkan doanya dan memberinya anak bernama Yahya.",
    en: "Prophet Zakariyya A.S. was the uncle of Lady Maryam. He saw the miracle of food from heaven in Maryam's room, which made him believe nothing is impossible for Allah. Being very old, he kept praying for an offspring. Allah finally answered his prayer and gave him a son named Yahya.",
  },
  miracles: [
    { id: "Dikaruniai anak (Nabi Yahya) saat usianya sudah sangat tua dan istrinya mandul.", en: "Blessed with a child (Prophet Yahya) when he was very old and his wife was barren." },
    { id: "Tanda dari Allah: tidak bisa berbicara dengan manusia selama 3 hari walau tidak bisu.", en: "A sign from Allah: unable to speak to humans for 3 days despite not being mute." }
  ],
  characterTraits: [
    { trait: { id: "Pantang Putus Asa", en: "Never Gives Up" }, desc: { id: "Tidak pernah lelah berdoa berpuluh-puluh tahun meminta anak.", en: "Never tired of praying for decades to ask for a child." } },
    { trait: { id: "Pelindung yang Baik", en: "Good Protector" }, desc: { id: "Merawat Siti Maryam sejak kecil di Baitul Maqdis dengan penuh kasih.", en: "Cared for Lady Maryam since childhood in Baitul Maqdis with full love." } },
    { trait: { id: "Berbaik Sangka", en: "Positive Thinking" }, desc: { id: "Sangat yakin bahwa Allah pasti akan mendengar dan mengabulkan doanya.", en: "Very confident that Allah would surely hear and answer his prayers." } }
  ],
  timeline: [
    { yearOrAge: "Dewasa", title: { id: "Merawat Maryam", en: "Caring for Maryam" }, desc: { id: "Menjadi wali dan merawat Maryam di mihrab Baitul Maqdis.", en: "Became a guardian and cared for Maryam in the sanctuary of Baitul Maqdis." } },
    { yearOrAge: "Tua", title: { id: "Doa di Mihrab", en: "Prayer in the Sanctuary" }, desc: { id: "Berdoa meminta penerus setelah melihat makanan gaib Maryam.", en: "Prayed for a successor after seeing Maryam's miraculous food." } },
    { yearOrAge: "Kabar Gembira", title: { id: "Lahirnya Yahya", en: "Birth of Yahya" }, desc: { id: "Malaikat membawa kabar gembira lahirnya Yahya sebagai pewaris ilmu.", en: "Angels brought the glad tidings of Yahya's birth as an inheritor of knowledge." } }
  ],
  dailyLifeConnection: {
    id: "Jangan pernah berhenti berdoa! Kalau kita rajin berdoa, Allah pasti mengabulkannya di waktu yang tepat.",
    en: "Never stop praying! If we pray diligently, Allah will surely answer it at the right time.",
  },
  surahReference: "Maryam 19:2-11",
};
