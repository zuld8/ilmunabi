import { ObjectData } from "../objects";

export const untaData: ObjectData = {
  slug: "unta",
  name: { id: "Unta", en: "Camel" },
  icon: "🐪",
  category: "mamalia",
  type: "hewan",
  scientificName: "Camelus",
  surahName: "Al-Ghashiyah",
  surahReference: "88:17",
  unlockedAtPoints: 90,
  kosakata: [
    { arab: "إِبِل / جَمَل", latin: "Ibil / Jamal", arti: "Unta", artiEn: "Camel", contohAyat: "Maka apakah mereka tidak memperhatikan unta bagaimana dia diciptakan?" }
  ],
  balita: {
    text: { id: "Halo, aku unta si kapal gurun pasir! Aku punya punuk besar di punggungku! 🐪", en: "Hello, I am the camel, the ship of the desert! I have a big hump on my back! 🐪" },
    audioTranscript: { id: "Kaki panjangku tidak akan kepanasan saat berjalan di atas pasir gurun. Keren, kan?", en: "My long legs won't get hot when walking on desert sand. Cool, right?" },
    quiz: {
      question: { id: "Apa nama benjolan besar yang ada di punggung unta?", en: "What is the name of the big bump on a camel's back?" },
      options: [
        { text: { id: "Tanduk", en: "Horn" } },
        { text: { id: "Punuk", en: "Hump" } },
        { text: { id: "Sayap", en: "Wing" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Unta adalah keajaiban gurun! Allah secara khusus menyuruh kita memperhatikan bagaimana uniknya penciptaan unta. Hewan ini sangat kuat menahan haus berhari-hari di tengah panas matahari terik.", en: "Camels are miracles of the desert! Allah specifically commands us to look at how uniquely camels are created. This animal is very strong at enduring thirst for days in the scorching heat of the sun." },
    facts: [
      { id: "Unta bisa minum hingga 100 liter air hanya dalam waktu 10 menit!", en: "A camel can drink up to 100 liters of water in just 10 minutes!" },
      { id: "Punuk unta TIDAK berisi air, melainkan cadangan lemak yang digunakan sebagai energi cadangan.", en: "A camel's hump does NOT contain water, but rather fat reserves used as backup energy." },
      { id: "Bulu mata unta sangat panjang dan tebal untuk menghalangi pasir masuk ke matanya saat badai gurun.", en: "A camel's eyelashes are very long and thick to prevent sand from getting into its eyes during desert storms." }
    ],
    quranVerse: {
      arabic: "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
      transliteration: "Afala yanzuruna ilal-ibili kayfa khuliqat.",
      translation: { id: "Maka apakah mereka tidak memperhatikan unta bagaimana dia diciptakan?", en: "Then do they not look at the camels - how they are created?" },
      context: { id: "Allah menggunakan unta sebagai bukti nyata kebesaran ciptaan-Nya karena kekuatan anatominya bertahan di gurun.", en: "Allah uses camels as clear evidence of the greatness of His creation because of their anatomical strength to survive in the desert." }
    },
    quiz: {
      question: { id: "Sebenarnya, apa isi dari punuk unta yang besar itu?", en: "Actually, what is inside that big camel hump?" },
      options: [
        { text: { id: "Air cadangan", en: "Backup water" } },
        { text: { id: "Tulang keras", en: "Hard bone" } },
        { text: { id: "Cadangan lemak untuk energi", en: "Fat reserves for energy" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Desain unta 100% sempurna untuk bertahan hidup di gurun ekstrim! Saat badai pasir menyapu, unta bisa secara otomatis menutup rapat lubang hidungnya agar debu tak masuk. Darah unta juga sangat spesial, sel darah merahnya berbentuk oval, bukan bulat seperti manusia, sehingga bisa mengalir lancar meski tubuhnya sedang sangat kekurangan air dehidrasi!", en: "The camel's design is 100% perfect to survive in the extreme desert! When a sandstorm sweeps by, camels can automatically seal their nostrils tightly so dust doesn't get in. A camel's blood is also very special, its red blood cells are oval, not round like humans, so they can flow smoothly even when the body is severely dehydrated!" },
    anatomy: [
      { part: { id: "Kelopak Mata Tembus Pandang", en: "Transparent Eyelids" }, desc: { id: "Unta punya kelopak mata ketiga yang tipis. Mereka bisa melihat melewati kelopak ini meski sedang menutup mata saat badai pasir!", en: "Camels have a thin third eyelid. They can see through it even when closing their eyes during a sandstorm!" } },
      { part: { id: "Telapak Kaki Bantalan", en: "Padded Footpads" }, desc: { id: "Telapak kakinya lebar dan empuk seperti bantalan raksasa, mencegah unta terperosok ke dalam pasir yang dalam.", en: "Its footpads are wide and soft like giant cushions, preventing the camel from sinking into deep sand." } }
    ],
    wowFactor: { id: "Bibir bagian dalam unta sangat keras dan kebal rasa sakit! Hal ini memungkinkan mereka memakan kaktus gurun yang penuh duri tajam seolah-olah sedang makan biskuit renyah!", en: "The inside of a camel's lips is very hard and immune to pain! This allows them to eat desert cacti full of sharp thorns as if they were eating crunchy biscuits!" },
    quranVerse: {
      arabic: "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ ۝ وَإِلَى السَّمَاءِ كَيْفَ رُفِعَتْ",
      transliteration: "Afala yanzuruna ilal-ibili kayfa khuliqat. Wa ilas-sama'i kayfa rufi'at.",
      translation: { id: "Maka apakah mereka tidak memperhatikan unta bagaimana dia diciptakan? Dan langit, bagaimana ia ditinggikan?", en: "Then do they not look at the camels - how they are created? And at the heaven - how it is raised?" }
    },
    quiz: [
      {
        question: { id: "Mengapa sel darah merah unta berbentuk oval, bukan bulat seperti manusia?", en: "Why are a camel's red blood cells oval, not round like humans?" },
        options: [
          { text: { id: "Agar bisa berubah menjadi air", en: "So they can turn into water" } },
          { text: { id: "Agar darah tetap bisa mengalir lancar meskipun sedang dehidrasi (kurang air)", en: "So blood can keep flowing smoothly even when dehydrated (lacking water)" } },
          { text: { id: "Agar warnanya tidak terlalu merah", en: "So the color is not too red" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
