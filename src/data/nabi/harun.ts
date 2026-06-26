// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const harunData: NabiData = {
  slug: "nabi-harun",
  name: {
    id: "Nabi Harun A.S.",
    en: "Prophet Harun A.S.",
  },
  icon: "🗣️",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Kakak Nabi Musa A.S. yang fasih berbicara dan selalu setia membantu dakwah adiknya.",
    en: "The older brother of Prophet Musa A.S. who was eloquent and always loyally helped his brother's mission.",
  },
  storyFull: {
    id: "Nabi Harun A.S. adalah kakak yang sangat disayangi Nabi Musa A.S. Karena kepandaiannya berbicara, Nabi Musa memohon kepada Allah agar Harun dijadikan nabi untuk menemaninya berdakwah kepada Firaun. Beliau memimpin Bani Israil saat Nabi Musa pergi ke Bukit Sinai.",
    en: "Prophet Harun A.S. was the deeply beloved older brother of Prophet Musa A.S. Because of his eloquence, Musa prayed to Allah to make Harun a prophet to accompany him in preaching to Pharaoh. He led the Children of Israel when Prophet Musa went to Mount Sinai.",
  },
  miracles: [
    { id: "Dikaruniai kemampuan berbicara yang sangat fasih dan meyakinkan.", en: "Gifted with highly eloquent and persuasive speaking abilities." },
    { id: "Kesetiaannya yang diabadikan sebagai bentuk rahmat Allah bagi Nabi Musa.", en: "His loyalty was immortalized as a form of Allah's mercy for Prophet Musa." }
  ],
  characterTraits: [
    { trait: { id: "Fasih Berbicara", en: "Eloquent Speaker" }, desc: { id: "Mampu menjelaskan sesuatu dengan sangat baik dan mudah dimengerti.", en: "Able to explain things very well and easily understood." } },
    { trait: { id: "Saudara yang Baik", en: "Good Brother" }, desc: { id: "Selalu mendukung dan menemani adiknya dalam kebaikan.", en: "Always supported and accompanied his brother in doing good." } },
    { trait: { id: "Penyayang", en: "Affectionate" }, desc: { id: "Sangat lembut dan penuh kasih sayang kepada kaumnya.", en: "Very gentle and loving towards his people." } }
  ],
  timeline: [
    { yearOrAge: "Awal", title: { id: "Diangkat Jadi Nabi", en: "Appointed as Prophet" }, desc: { id: "Diangkat menjadi Nabi atas doa dari adiknya, Nabi Musa A.S.", en: "Appointed as a Prophet upon the prayer of his brother, Prophet Musa A.S." } },
    { yearOrAge: "Dakwah", title: { id: "Menghadapi Firaun", en: "Facing Pharaoh" }, desc: { id: "Menemani Nabi Musa berhadapan langsung dengan kekejaman Firaun.", en: "Accompanied Prophet Musa face-to-face with Pharaoh's cruelty." } },
    { yearOrAge: "Ujian", title: { id: "Ujian Patung Anak Sapi", en: "Test of the Golden Calf" }, desc: { id: "Berusaha keras melarang kaumnya menyembah patung saat Nabi Musa pergi.", en: "Tried hard to forbid his people from worshipping the calf statue when Musa left." } }
  ],
  dailyLifeConnection: {
    id: "Kita harus rukun dan saling membantu dengan kakak atau adik kita di rumah.",
    en: "We must get along and help our brothers and sisters at home.",
  },
  surahReference: "Thaha 20:29-36",
};
