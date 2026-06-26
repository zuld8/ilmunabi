// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const sulaimanData: NabiData = {
  slug: "nabi-sulaiman",
  name: {
    id: "Nabi Sulaiman A.S.",
    en: "Prophet Sulayman A.S.",
  },
  icon: "👑",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Raja paling kaya di dunia yang bisa berbicara dengan hewan dan mengendalikan jin.",
    en: "The richest king in the world who could talk to animals and control jinns.",
  },
  storyFull: {
    id: "Nabi Sulaiman A.S. adalah putra Nabi Daud A.S. Beliau diberi kerajaan terhebat yang tak akan pernah dimiliki orang lain. Pasukannya terdiri dari manusia, jin, dan hewan. Beliau bisa mendengar obrolan semut dan memerintah burung hud-hud, tapi beliau tetap rendah hati dan bersyukur.",
    en: "Prophet Sulayman A.S. was the son of Prophet Dawud A.S. He was given the greatest kingdom that no one else will ever possess. His army consisted of humans, jinns, and animals. He could hear ants talking and command the hoopoe bird, yet he remained humble and grateful.",
  },
  miracles: [
    { id: "Mengerti bahasa hewan, seperti semut dan burung.", en: "Understood the language of animals, such as ants and birds." },
    { id: "Bisa memerintah bangsa Jin dan mengendalikan angin untuk bepergian cepat.", en: "Could command the Jinn and control the wind for fast travel." }
  ],
  characterTraits: [
    { trait: { id: "Rendah Hati", en: "Humble" }, desc: { id: "Tidak sombong meski menjadi raja terkaya dengan pasukan jin dan hewan.", en: "Not arrogant despite being the richest king with an army of jinns and animals." } },
    { trait: { id: "Pandai Bersyukur", en: "Grateful" }, desc: { id: "Selalu menyadari bahwa semua kekuatannya berasal dari Allah SWT.", en: "Always realized that all his power came from Allah SWT." } },
    { trait: { id: "Bijaksana", en: "Wise" }, desc: { id: "Memutuskan masalah dengan adil dan cerdas sejak masih kecil.", en: "Solved problems fairly and intelligently since childhood." } }
  ],
  timeline: [
    { yearOrAge: "Muda", title: { id: "Kecerdasan Sulaiman", en: "Intelligence of Sulayman" }, desc: { id: "Membantu ayahnya, Nabi Daud, dalam memberikan keputusan yang lebih adil.", en: "Helped his father, Prophet Dawud, in giving fairer judgments." } },
    { yearOrAge: "Raja", title: { id: "Lembah Semut", en: "Valley of Ants" }, desc: { id: "Mendengar percakapan semut yang takut terinjak pasukannya, lalu beliau tersenyum.", en: "Heard the conversation of ants fearing being stepped on by his army, and smiled." } },
    { yearOrAge: "Puncak", title: { id: "Ratu Balqis", en: "Queen Sheba" }, desc: { id: "Mengajak Ratu Balqis menyembah Allah dengan memindahkan singgasananya sekejap mata.", en: "Invited Queen Sheba to worship Allah by moving her throne in the blink of an eye." } }
  ],
  dailyLifeConnection: {
    id: "Hebat dan kaya tidak boleh membuat kita sombong. Kita harus berbuat baik pada hewan kecil seperti semut.",
    en: "Being great and rich should not make us arrogant. We must be kind to small animals like ants.",
  },
  surahReference: "An-Naml 27:15-19",
};
