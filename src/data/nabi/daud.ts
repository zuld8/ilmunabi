// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const daudData: NabiData = {
  slug: "nabi-daud",
  name: {
    id: "Nabi Daud A.S.",
    en: "Prophet Dawud A.S.",
  },
  icon: "🛡️",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi yang memiliki suara sangat merdu dan bisa melunakkan besi dengan tangannya.",
    en: "The Prophet who had a very melodious voice and could soften iron with his hands.",
  },
  storyFull: {
    id: "Nabi Daud A.S. awalnya adalah prajurit muda yang berhasil mengalahkan raja raksasa Jalut (Goliath). Allah mengangkatnya menjadi Nabi sekaligus raja. Beliau diberi kitab Zabur, suaranya sangat merdu hingga burung dan gunung ikut bertasbih bersamanya, dan tangannya bisa membentuk besi layaknya tanah liat.",
    en: "Prophet Dawud A.S. was initially a young soldier who successfully defeated the giant king Jalut (Goliath). Allah made him a Prophet and a king. He was given the book of Zabur, his voice was so melodious that birds and mountains glorified Allah with him, and his hands could shape iron like clay.",
  },
  miracles: [
    { id: "Bisa melunakkan besi tanpa dibakar, untuk membuat baju zirah pelindung.", en: "Could soften iron without heating it, to make protective armor." },
    { id: "Suaranya sangat merdu, alam semesta ikut bertasbih saat beliau membaca Zabur.", en: "His voice was so melodious, the universe glorified Allah when he read the Zabur." }
  ],
  characterTraits: [
    { trait: { id: "Pemberani", en: "Brave" }, desc: { id: "Berani maju melawan musuh raksasa walau dirinya masih muda.", en: "Bravely faced a giant enemy even though he was young." } },
    { trait: { id: "Rajin Beribadah", en: "Devout" }, desc: { id: "Suka berpuasa selang-seling (Puasa Daud) dan banyak shalat malam.", en: "Loved fasting on alternate days (Dawud's Fast) and did many night prayers." } },
    { trait: { id: "Kreatif & Pekerja Keras", en: "Creative & Hardworking" }, desc: { id: "Membuat baju besi pelindung dengan tangan kosong.", en: "Made protective armor with his bare hands." } }
  ],
  timeline: [
    { yearOrAge: "Muda", title: { id: "Mengalahkan Jalut", en: "Defeating Jalut" }, desc: { id: "Menumbangkan panglima raksasa Jalut hanya dengan batu ketapel.", en: "Brought down the giant commander Jalut with just a slingshot stone." } },
    { yearOrAge: "Dewasa", title: { id: "Menjadi Raja", en: "Becoming King" }, desc: { id: "Diangkat menjadi raja yang adil dan nabi yang menerima kitab Zabur.", en: "Appointed as a just king and a prophet who received the book of Zabur." } },
    { yearOrAge: "Sepanjang Hayat", title: { id: "Bertasbih Bersama Alam", en: "Glorifying with Nature" }, desc: { id: "Gunung dan burung-burung ikut bertasbih saat beliau bernyanyi memuji Allah.", en: "Mountains and birds joined in glorification when he sang praising Allah." } }
  ],
  dailyLifeConnection: {
    id: "Kita harus menggunakan suara dan bakat kita untuk memuji kebesaran Allah.",
    en: "We must use our voices and talents to praise the greatness of Allah.",
  },
  surahReference: "Saba' 34:10-11",
};
