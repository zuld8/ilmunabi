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
  storyShort: { id: "Diutus kepada kaum 'Aad yang sombong karena kekuatan fisiknya.", en: "Sent to the 'Aad people who were arrogant due to their physical strength." },
  storyFull: { id: "Nabi Hud AS diutus ke kaum 'Aad yang memiliki tubuh besar, kuat, dan membangun gedung-gedung mewah di perbukitan. Mereka sangat sombong dan menyembah berhala. Nabi Hud menasihati mereka, tapi mereka menolak. Akhirnya Allah menurunkan angin topan dahsyat selama 7 malam 8 hari yang memusnahkan kesombongan mereka. Nabi Hud dan orang beriman diselamatkan.", en: "Prophet Hud AS was sent to the 'Aad people who had large, strong bodies and built luxurious buildings on hills. They were very arrogant and worshipped idols. Prophet Hud advised them, but they refused. Finally, Allah sent a devastating hurricane for 7 nights and 8 days that destroyed their arrogance. Prophet Hud and the believers were saved." },
  miracles: [
    { id: "Diselamatkan dari angin topan yang sangat dahsyat", en: "Saved from a very devastating hurricane" }
  ],
  characterTraits: [
    { trait: { id: "Berani", en: "Brave" }, desc: { id: "Berani menasihati kaum yang kuat dan kejam", en: "Brave to advise a strong and cruel people" } },
    { trait: { id: "Rendah Hati", en: "Humble" }, desc: { id: "Tidak sombong meski utusan Allah", en: "Not arrogant despite being Allah's messenger" } }
  ],
  timeline: [
    { yearOrAge: "Dakwah", title: { id: "Menasihati Kaum 'Aad", en: "Advising 'Aad" }, desc: { id: "Mengingatkan agar tidak sombong", en: "Reminding them not to be arrogant" } },
    { yearOrAge: "Azab", title: { id: "Angin Topan", en: "Hurricane" }, desc: { id: "Angin badai menghancurkan kesombongan mereka", en: "A storm destroyed their arrogance" } }
  ],
  dailyLifeConnection: { id: "Sebesar apa pun kekuatan atau kepintaran kita, jangan pernah sombong ya! Semua itu titipan Allah.", en: "No matter how strong or smart we are, never be arrogant! It's all entrusted by Allah." }
};
