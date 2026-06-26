// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const dzulkifliData: NabiData = {
  slug: "nabi-dzulkifli",
  name: {
    id: "Nabi Dzulkifli A.S.",
    en: "Prophet Dhul-Kifl A.S.",
  },
  icon: "⚖️",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi yang memimpin kerajaannya dengan sangat adil, sabar, dan tidak pernah marah.",
    en: "The Prophet who led his kingdom with great justice, patience, and never got angry.",
  },
  storyFull: {
    id: "Nabi Dzulkifli A.S. adalah anak Nabi Ayub A.S. Beliau menjadi raja setelah berjanji untuk puasa di siang hari, shalat di malam hari, dan tidak pernah marah. Walaupun iblis mencoba menggodanya agar marah, beliau tetap sabar dan menepati janjinya hingga akhir hayat.",
    en: "Prophet Dhul-Kifl A.S. was the son of Prophet Ayyub A.S. He became king after promising to fast during the day, pray at night, and never get angry. Even though the devil tried to tempt him to get angry, he remained patient and kept his promise until the end of his life.",
  },
  miracles: [
    { id: "Kesabaran luar biasa dan kemampuan menahan amarah yang tidak tertandingi.", en: "Extraordinary patience and unmatched ability to control anger." },
    { id: "Kekuatannya menepati janji yang sangat berat selama bertahun-tahun.", en: "His strength in keeping a very heavy promise for years." }
  ],
  characterTraits: [
    { trait: { id: "Sabar Tak Terbatas", en: "Limitless Patience" }, desc: { id: "Tidak pernah terpancing amarah walau diganggu saat sedang lelah.", en: "Never provoked to anger even when disturbed while tired." } },
    { trait: { id: "Menepati Janji", en: "Keeps Promises" }, desc: { id: "Berkomitmen memegang teguh janji yang telah diucapkannya.", en: "Committed to upholding the promises he made." } },
    { trait: { id: "Pemimpin Adil", en: "Just Leader" }, desc: { id: "Menjadi raja yang selalu memihak pada kebenaran dan keadilan.", en: "Became a king who always sided with truth and justice." } }
  ],
  timeline: [
    { yearOrAge: "Pemuda", title: { id: "Mengucapkan Janji", en: "Making the Promise" }, desc: { id: "Menyanggupi syarat raja untuk selalu sabar, puasa, dan shalat malam.", en: "Agreed to the king's conditions to always be patient, fast, and pray at night." } },
    { yearOrAge: "Menjabat", title: { id: "Menjadi Raja", en: "Becoming King" }, desc: { id: "Memimpin rakyatnya dengan luar biasa adil dan bijaksana.", en: "Led his people with extraordinary justice and wisdom." } },
    { yearOrAge: "Ujian", title: { id: "Godaan Iblis", en: "Devil's Temptation" }, desc: { id: "Diganggu iblis saat waktu tidurnya, namun tidak pernah marah sama sekali.", en: "Disturbed by the devil during his sleep time, yet never got angry at all." } }
  ],
  dailyLifeConnection: {
    id: "Jika sedang lelah dan diganggu teman, kita belajar untuk menahan marah dan tetap sabar.",
    en: "If we are tired and bothered by friends, we learn to hold our anger and remain patient.",
  },
  surahReference: "Al-Anbiya' 21:85-86",
};
