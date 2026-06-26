// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const isaData: NabiData = {
  slug: "nabi-isa",
  name: {
    id: "Nabi Isa A.S.",
    en: "Prophet Isa A.S.",
  },
  icon: "✨",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi yang bisa bicara saat bayi dan mampu menyembuhkan orang sakit dengan izin Allah.",
    en: "The Prophet who could speak as a baby and heal the sick with Allah's permission.",
  },
  storyFull: {
    id: "Nabi Isa A.S. lahir dari wanita suci Siti Maryam tanpa ayah. Mukjizat ini membuktikan kebesaran Allah. Sejak bayi dalam buaian, beliau sudah bisa berbicara membela ibunya. Saat dewasa, beliau diberi kitab Injil, bisa menghidupkan burung dari tanah liat, dan menyembuhkan penyakit buta.",
    en: "Prophet Isa A.S. was born to the pure woman Lady Maryam without a father. This miracle proved Allah's greatness. Since he was a baby in the cradle, he could speak to defend his mother. As an adult, he was given the Gospel (Injil), could bring clay birds to life, and heal the blind.",
  },
  miracles: [
    { id: "Lahir tanpa ayah dan bisa berbicara jelas saat masih bayi merah.", en: "Born without a father and could speak clearly as a newborn baby." },
    { id: "Menyembuhkan orang buta sejak lahir dan menghidupkan orang mati dengan izin Allah.", en: "Healed the blind from birth and brought the dead to life with Allah's permission." }
  ],
  characterTraits: [
    { trait: { id: "Penuh Kasih", en: "Compassionate" }, desc: { id: "Sangat lembut dan peduli kepada orang-orang miskin dan sakit.", en: "Very gentle and cared for the poor and sick." } },
    { trait: { id: "Pembela Ibu", en: "Mother's Defender" }, desc: { id: "Berbicara saat bayi untuk melindungi nama baik ibunya, Siti Maryam.", en: "Spoke as a baby to protect the good name of his mother, Lady Maryam." } },
    { trait: { id: "Sederhana", en: "Simple" }, desc: { id: "Hidup berpindah-pindah menyebarkan kebaikan tanpa mengejar harta.", en: "Lived a nomadic life spreading goodness without chasing wealth." } }
  ],
  timeline: [
    { yearOrAge: "Bayi", title: { id: "Bicara di Buaian", en: "Speaking in the Cradle" }, desc: { id: "Menjelaskan dirinya adalah hamba Allah dan Nabi yang membawa kitab.", en: "Explained he was Allah's servant and a Prophet bringing a book." } },
    { yearOrAge: "Dakwah", title: { id: "Mukjizat Penyakit", en: "Miracles of Healing" }, desc: { id: "Menyembuhkan orang buta dan kusta agar orang-orang percaya Allah.", en: "Healed the blind and lepers so people would believe in Allah." } },
    { yearOrAge: "Akhir", title: { id: "Diangkat ke Langit", en: "Raised to the Sky" }, desc: { id: "Diselamatkan Allah dari kejaran musuh dengan diangkat ke langit.", en: "Saved by Allah from enemies by being raised to the sky." } }
  ],
  dailyLifeConnection: {
    id: "Kita harus membela dan menyayangi ibu kita, serta menolong orang yang sedang sakit.",
    en: "We must defend and love our mothers, and help those who are sick.",
  },
  surahReference: "Maryam 19:30-33",
};
