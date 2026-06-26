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
  storyShort: { id: "Bapak para nabi yang tidak hangus dibakar api dan membangun Ka'bah.", en: "The father of the prophets who was not burned by fire and built the Kaaba." },
  storyFull: { id: "Nabi Ibrahim AS adalah pemuda cerdas yang mencari Tuhan melalui alam semesta. Beliau menghancurkan berhala-berhala yang disembah kaumnya. Raja Namrud yang marah memerintahkan agar Nabi Ibrahim dibakar hidup-hidup. Ajaibnya, Allah memerintahkan api menjadi dingin dan menyelamatkan beliau. Beliau juga yang membangun Ka'bah bersama putranya, Nabi Ismail.", en: "Prophet Ibrahim AS was a smart youth who sought God through the universe. He destroyed the idols worshipped by his people. The angry King Nimrod ordered Ibrahim to be burned alive. Miraculously, Allah commanded the fire to be cool and saved him. He also built the Kaaba with his son, Prophet Ismail." },
  miracles: [
    { id: "Api menjadi dingin dan tidak membakarnya", en: "The fire became cold and did not burn him" },
    { id: "Burung mati yang hidup kembali", en: "Dead birds coming back to life" }
  ],
  characterTraits: [
    { trait: { id: "Kritis", en: "Critical" }, desc: { id: "Selalu mencari kebenaran lewat berpikir", en: "Always seeking truth through thinking" } },
    { trait: { id: "Pemberani", en: "Courageous" }, desc: { id: "Berani melawan ketidakadilan Raja Namrud", en: "Brave to fight King Nimrod's injustice" } }
  ],
  timeline: [
    { yearOrAge: "Muda", title: { id: "Menghancurkan Berhala", en: "Destroying Idols" }, desc: { id: "Menyadarkan kaumnya yang tersesat", en: "Awakening his misguided people" } },
    { yearOrAge: "Cobaan Api", title: { id: "Dibakar Raja Namrud", en: "Burned by Nimrod" }, desc: { id: "Diselamatkan Allah dari panasnya api", en: "Saved by Allah from the heat of the fire" } },
    { yearOrAge: "Tua", title: { id: "Membangun Ka'bah", en: "Building the Kaaba" }, desc: { id: "Mendirikan Baitullah di Mekkah", en: "Building the House of Allah in Mecca" } }
  ],
  dailyLifeConnection: { id: "Gunakan akal kita untuk berpikir kritis seperti Nabi Ibrahim yang memperhatikan matahari, bulan, dan bintang untuk mengenal Allah.", en: "Use our intellect to think critically like Prophet Ibrahim who observed the sun, moon, and stars to know Allah." }
};
