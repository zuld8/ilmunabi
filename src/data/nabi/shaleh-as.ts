// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const shalehAsData: NabiData = {
  slug: "shaleh-as",
  name: { id: "Nabi Shaleh AS", en: "Prophet Shaleh AS" },
  icon: "🐪",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Al-A'raf:73",
  storyShort: { id: "Mengeluarkan unta betina dari batu karang sebagai bukti kebesarannya.", en: "Brought forth a female camel from a rock as proof of His greatness." },
  storyFull: { id: "Nabi Shaleh AS diutus kepada kaum Tsamud yang pandai memahat gunung menjadi rumah yang indah. Mereka menantang Nabi Shaleh untuk mengeluarkan unta betina hamil dari batu karang padat. Dengan izin Allah, unta itu muncul! Namun kaum Tsamud melanggar janji untuk menjaga unta itu dan malah membunuhnya. Allah pun menghukum mereka dengan suara guntur yang sangat menggelegar.", en: "Prophet Shaleh AS was sent to the Thamud people who were skilled at carving mountains into beautiful houses. They challenged Prophet Shaleh to bring forth a pregnant female camel from a solid rock. By Allah's permission, the camel appeared! But the Thamud people broke their promise to protect the camel and killed it instead. Allah punished them with an extremely loud thunderous sound." },
  miracles: [
    { id: "Unta betina yang keluar dari batu karang padat", en: "A female camel emerging from solid rock" }
  ],
  characterTraits: [
    { trait: { id: "Penyayang Binatang", en: "Animal Lover" }, desc: { id: "Sangat menyayangi dan melindungi unta mukjizatnya", en: "Loved and protected his miracle camel" } },
    { trait: { id: "Tegas", en: "Firm" }, desc: { id: "Tegas memperingatkan kaumnya tentang hukuman", en: "Firmly warned his people about the punishment" } }
  ],
  timeline: [
    { yearOrAge: "Tantangan", title: { id: "Mukjizat Unta", en: "Camel Miracle" }, desc: { id: "Unta keluar dari batu karang", en: "A camel emerged from a rock" } },
    { yearOrAge: "Kejahatan", title: { id: "Unta Dibunuh", en: "Camel Killed" }, desc: { id: "Kaum Tsamud menyembelih unta itu", en: "The Thamud slaughtered the camel" } },
    { yearOrAge: "Hukuman", title: { id: "Suara Gemuruh", en: "Thunderous Sound" }, desc: { id: "Suara keras dari langit membinasakan mereka", en: "A loud sound from the sky destroyed them" } }
  ],
  dailyLifeConnection: { id: "Kita harus menyayangi hewan dan menjaga lingkungan, jangan menyakiti ciptaan Allah ya!", en: "We must love animals and protect the environment, do not harm Allah's creations!" }
};
