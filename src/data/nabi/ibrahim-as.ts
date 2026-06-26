// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const ibrahimAsData: NabiData = {
  slug: "ibrahim-as",
  name: { id: "Nabi Ibrahim AS", en: "Prophet Ibrahim AS" },
  icon: "🔥",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Al-Anbiya:69",
  storyShort: {
    id: "Nabi yang tidak hangus dibakar api dan membangun Ka'bah.",
    en: "The prophet who did not burn in fire and built the Kaaba."
  },
  storyFull: {
    id: "Nabi Ibrahim AS sejak kecil selalu berpikir kritis mencari Tuhan yang sebenarnya hingga ia tahu Allah adalah Sang Pencipta. Karena menghancurkan berhala raja Namrud, beliau dibakar hidup-hidup, tapi Allah membuat api menjadi dingin! Beliau juga membangun Ka'bah bersama putranya, Nabi Ismail AS.",
    en: "Since childhood, Prophet Ibrahim AS critically thought about finding the true God until he knew Allah is the Creator. Because he destroyed King Namrud's idols, he was burned alive, but Allah made the fire cool! He also built the Kaaba with his son, Prophet Ismail AS."
  },
  miracles: [
    { id: "Tubuhnya tidak hangus terbakar oleh api raksasa Raja Namrud.", en: "His body was not burned by King Namrud's giant fire." },
    { id: "Allah memperlihatkan burung yang sudah mati bisa dihidupkan kembali.", en: "Allah showed him dead birds brought back to life." }
  ],
  characterTraits: [
    { trait: { id: "Berpikir Kritis", en: "Critical Thinker" }, desc: { id: "Selalu menggunakan akal untuk mencari kebenaran", en: "Always used his intellect to seek the truth" } },
    { trait: { id: "Pemberani", en: "Brave" }, desc: { id: "Berani menghancurkan berhala Raja Namrud", en: "Brave to destroy King Namrud's idols" } },
    { trait: { id: "Taat Kepada Allah", en: "Obedient to Allah" }, desc: { id: "Sangat patuh pada segala perintah Allah", en: "Very obedient to all of Allah's commands" } }
  ],
  timeline: [
    { yearOrAge: "Masa Muda", title: { id: "Mencari Tuhan", en: "Seeking God" }, desc: { id: "Melihat bintang, bulan, dan matahari", en: "Looking at the stars, moon, and sun" } },
    { yearOrAge: "Masa Dakwah", title: { id: "Dibakar Api", en: "Burned in Fire" }, desc: { id: "Api menjadi dingin dan menyelamatkannya", en: "The fire became cool and saved him" } },
    { yearOrAge: "Masa Tua", title: { id: "Membangun Ka'bah", en: "Building Kaaba" }, desc: { id: "Bersama Nabi Ismail membangun baitullah", en: "Together with Prophet Ismail building the House of Allah" } }
  ],
  dailyLifeConnection: {
    id: "Gunakan akal kita untuk membedakan hal yang benar dan salah, serta berani membela kebenaran meskipun sendiri!",
    en: "Use our intellect to distinguish between right and wrong, and be brave to defend the truth even if we are alone!"
  }
};

