// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const hudAsData: NabiData = {
  slug: "hud-as",
  name: { id: "Nabi Hud AS", en: "Prophet Hud AS" },
  icon: "🌪️",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Hud:50",
  storyShort: {
    id: "Nabi yang diutus untuk Kaum 'Aad yang sombong karena kekuatannya.",
    en: "The prophet sent to the 'Aad people who were arrogant due to their strength."
  },
  storyFull: {
    id: "Kaum 'Aad sangat kuat dan pintar membangun gedung-gedung tinggi, tapi mereka sombong dan menyembah berhala. Nabi Hud AS mengingatkan mereka, namun mereka malah menantang Allah. Akhirnya, Allah mengirimkan angin kencang yang sangat dingin selama 7 malam 8 hari yang menghancurkan kesombongan mereka.",
    en: "The 'Aad people were very strong and smart at building tall buildings, but they were arrogant and worshipped idols. Prophet Hud AS warned them, but they challenged Allah instead. Finally, Allah sent a very cold and fierce wind for 7 nights and 8 days that destroyed their arrogance."
  },
  miracles: [
    { id: "Selamat dari badai angin super dahsyat.", en: "Survived a super devastating wind storm." },
    { id: "Diberi kesabaran menghadapi kaum raksasa yang kuat.", en: "Given patience in facing a strong, giant-like people." }
  ],
  characterTraits: [
    { trait: { id: "Berani", en: "Brave" }, desc: { id: "Berani menasihati orang-orang kuat dan sombong", en: "Brave to advise strong and arrogant people" } },
    { trait: { id: "Tenang", en: "Calm" }, desc: { id: "Tidak panik saat diancam kaumnya", en: "Not panicked when threatened by his people" } },
    { trait: { id: "Tawakkal", en: "Trust in Allah" }, desc: { id: "Hanya bergantung pada perlindungan Allah", en: "Relied solely on Allah's protection" } }
  ],
  timeline: [
    { yearOrAge: "Masa Dakwah", title: { id: "Menasihati Kaum 'Aad", en: "Advising 'Aad" }, desc: { id: "Mengajak menyembah Allah", en: "Calling to worship Allah" } },
    { yearOrAge: "Penolakan", title: { id: "Kaum 'Aad Sombong", en: "Arrogant 'Aad" }, desc: { id: "Mereka membanggakan kekuatan fisiknya", en: "They boasted of their physical strength" } },
    { yearOrAge: "Azab", title: { id: "Angin Dingin", en: "Cold Wind" }, desc: { id: "Badai dahsyat memusnahkan mereka", en: "A fierce storm wiped them out" } }
  ],
  dailyLifeConnection: {
    id: "Orang kuat bukan berarti boleh sombong. Kekuatan itu titipan Allah, gunakan untuk melindungi yang lemah!",
    en: "Being strong doesn't mean you can be arrogant. Strength is entrusted by Allah, use it to protect the weak!"
  }
};

