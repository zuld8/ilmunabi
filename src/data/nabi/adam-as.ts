// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const adamAsData: NabiData = {
  slug: "adam-as",
  name: { id: "Nabi Adam AS", en: "Prophet Adam AS" },
  icon: "👤",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Al-Baqarah:30",
  storyShort: { id: "Manusia pertama yang diciptakan Allah SWT.", en: "The first human created by Allah SWT." },
  storyFull: { id: "Allah menciptakan Nabi Adam AS dari tanah liat, lalu meniupkan roh kepadanya. Beliau diberi pengetahuan tentang nama-nama semua benda yang bahkan para malaikat tidak mengetahuinya. Setelah sempat tinggal di surga, Nabi Adam dan Hawa diturunkan ke bumi untuk menjadi khalifah. Ini mengajarkan kita bahwa manusia adalah makhluk istimewa yang dibekali akal untuk memakmurkan bumi.", en: "Allah created Prophet Adam AS from clay, then breathed a soul into him. He was taught the names of all things, something even angels did not know. After briefly living in heaven, Adam and Eve were sent to earth as vicegerents. This teaches us that humans are special creatures equipped with intellect to prosper on earth." },
  miracles: [
    { id: "Manusia pertama tanpa ayah dan ibu", en: "The first human created without parents" },
    { id: "Mengetahui nama-nama segala sesuatu", en: "Knowing the names of all things" }
  ],
  characterTraits: [
    { trait: { id: "Pintar", en: "Smart" }, desc: { id: "Mau belajar tentang segala hal baru", en: "Willing to learn new things" } },
    { trait: { id: "Bertaubat", en: "Repentant" }, desc: { id: "Segera minta maaf saat melakukan kesalahan", en: "Immediately apologizes when making a mistake" } }
  ],
  timeline: [
    { yearOrAge: "Penciptaan", title: { id: "Diciptakan dari tanah", en: "Created from clay" }, desc: { id: "Diciptakan sebagai manusia pertama", en: "Created as the first human" } },
    { yearOrAge: "Di Surga", title: { id: "Belajar nama-nama", en: "Learning names" }, desc: { id: "Diajarkan nama segala sesuatu", en: "Taught the names of all things" } },
    { yearOrAge: "Di Bumi", title: { id: "Menjadi Khalifah", en: "Becoming a Vicegerent" }, desc: { id: "Mulai memakmurkan bumi", en: "Started prospering the earth" } }
  ],
  dailyLifeConnection: { id: "Gunakan akal kita untuk rajin belajar, seperti Nabi Adam yang mengetahui nama semua benda. Kalau buat salah, langsung bilang maaf!", en: "Use our intellect to study diligently, like Prophet Adam who knew the names of all things. If you make a mistake, say sorry immediately!" }
};
