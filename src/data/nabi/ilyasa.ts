// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const ilyasaData: NabiData = {
  slug: "nabi-ilyasa",
  name: {
    id: "Nabi Ilyasa A.S.",
    en: "Prophet Al-Yasa A.S.",
  },
  icon: "🤝",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Penerus Nabi Ilyas A.S. yang berhasil mengembalikan kedamaian dan kesejahteraan kaumnya.",
    en: "The successor of Prophet Ilyas A.S. who successfully restored peace and prosperity to his people.",
  },
  storyFull: {
    id: "Nabi Ilyasa A.S. adalah murid terbaik Nabi Ilyas A.S. yang meneruskan perjuangan dakwahnya. Beliau membimbing Bani Israil untuk taat kepada Allah, sehingga di masa kepemimpinannya, rakyat hidup makmur, damai, dan penuh berkah tanpa adanya kekeringan.",
    en: "Prophet Al-Yasa A.S. was the best student of Prophet Ilyas A.S. who continued his preaching mission. He guided the Children of Israel to obey Allah, so that during his leadership, the people lived prosperously, peacefully, and full of blessings without drought.",
  },
  miracles: [
    { id: "Mampu menyembuhkan penyakit dan menjernihkan sumber air yang tercemar.", en: "Able to heal illnesses and purify polluted water sources." },
    { id: "Membawa masa keemasan dan kemakmuran bagi Bani Israil.", en: "Brought a golden age and prosperity to the Children of Israel." }
  ],
  characterTraits: [
    { trait: { id: "Setia", en: "Loyal" }, desc: { id: "Setia menemani dan belajar dari Nabi Ilyas di masa-masa sulit.", en: "Loyally accompanied and learned from Prophet Ilyas in difficult times." } },
    { trait: { id: "Pemimpin Bijak", en: "Wise Leader" }, desc: { id: "Memimpin kaumnya menuju kehidupan yang damai dan sejahtera.", en: "Led his people towards a peaceful and prosperous life." } },
    { trait: { id: "Pembawa Damai", en: "Peacemaker" }, desc: { id: "Menyelesaikan perselisihan kaumnya dengan aturan Allah SWT.", en: "Resolved his people's disputes with the laws of Allah SWT." } }
  ],
  timeline: [
    { yearOrAge: "Muda", title: { id: "Menjadi Murid", en: "Becoming a Student" }, desc: { id: "Belajar dakwah dan kesabaran dengan mengikuti jejak Nabi Ilyas A.S.", en: "Learned preaching and patience by following Prophet Ilyas A.S.'s footsteps." } },
    { yearOrAge: "Penerus", title: { id: "Meneruskan Dakwah", en: "Continuing the Mission" }, desc: { id: "Diangkat menjadi Nabi setelah Nabi Ilyas wafat.", en: "Appointed as a Prophet after Prophet Ilyas passed away." } },
    { yearOrAge: "Pemimpin", title: { id: "Masa Makmur", en: "Prosperous Era" }, desc: { id: "Bani Israil hidup rukun dan makmur di bawah bimbingannya.", en: "The Children of Israel lived in harmony and prosperity under his guidance." } }
  ],
  dailyLifeConnection: {
    id: "Kita harus mau belajar dari orang yang lebih tua dan lebih berilmu, seperti Nabi Ilyasa belajar dari Nabi Ilyas.",
    en: "We must be willing to learn from older and more knowledgeable people, just as Prophet Al-Yasa learned from Prophet Ilyas.",
  },
  surahReference: "Shad 38:48",
};
