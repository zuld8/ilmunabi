import { ObjectData } from "../objects";

export const bebekData: ObjectData = {
  slug: "bebek",
  name: { id: "Bebek", en: "Duck" },
  icon: "🦆",
  category: "burung",
  type: "hewan",
  scientificName: "Anas platyrhynchos",
  surahName: "An-Nur",
  surahReference: "24:45",
  unlockedAtPoints: 15,
  kosakata: [
    { arab: "بَطَّة", latin: "Battah", arti: "Bebek", artiEn: "Duck", contohAyat: "Dan Allah telah menciptakan semua jenis hewan dari air." }
  ],
  balita: {
    text: { id: "Kwek kwek! Aku bebek yang suka berenang. Kakiku lebar untuk mendayung di air! 🌊", en: "Quack quack! I am a duck who loves to swim. My feet are wide to paddle in the water! 🌊" },
    audioTranscript: { id: "Kwek kwek! Ayo ikut aku berenang di kolam. Sangat segar!", en: "Quack quack! Come join me swimming in the pond. So refreshing!" },
    quiz: {
      question: { id: "Bagaimana suara bebek?", en: "What is the sound of a duck?" },
      options: [
        { text: { id: "Mbek!", en: "Baa!" } },
        { text: { id: "Kwek kwek!", en: "Quack quack!" } },
        { text: { id: "Guk guk!", en: "Woof woof!" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bebek adalah perenang yang sangat handal. Bulunya tidak pernah basah kuyup karena dilapisi minyak pelindung khusus. Masya Allah!", en: "Ducks are very good swimmers. Their feathers never get soaked because they are coated with a special protective oil. Masya Allah!" },
    facts: [
      { id: "Air akan tergelincir dari bulu bebek seperti air di atas daun talas.", en: "Water slips off duck feathers like water off a taro leaf." },
      { id: "Bebek bisa tidur dengan satu mata terbuka untuk mengawasi bahaya!", en: "Ducks can sleep with one eye open to watch for danger!" },
      { id: "Bebek menggunakan kaki berselaputnya sebagai alat dayung alami.", en: "Ducks use their webbed feet as natural paddles." }
    ],
    quranVerse: {
      arabic: "وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِنْ مَاءٍ",
      transliteration: "Wallahu khalaqa kulla dabbatin min ma'.",
      translation: { id: "Dan Allah telah menciptakan semua jenis hewan dari air.", en: "And Allah has created every animal from water." },
      context: { id: "Bebek hidup tidak jauh dari air, menunjukkan kebesaran Allah menciptakan berbagai makhluk dengan habitatnya.", en: "Ducks live close to water, showing the greatness of Allah in creating various creatures with their habitats." }
    },
    quiz: {
      question: { id: "Kenapa bulu bebek tidak basah saat berenang?", en: "Why do a duck's feathers not get wet when swimming?" },
      options: [
        { text: { id: "Karena ada minyak pelindung", en: "Because of a protective oil" } },
        { text: { id: "Karena mereka memakai jas hujan", en: "Because they wear raincoats" } },
        { text: { id: "Karena mereka berenang terlalu cepat", en: "Because they swim too fast" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Bebek bisa bermigrasi ribuan kilometer dengan formasi huruf 'V' untuk menghemat energi. Itulah kecerdasan alami yang diberikan Allah kepada bebek agar bisa bertahan hidup.", en: "Ducks can migrate thousands of kilometers in a 'V' formation to save energy. That is the natural intelligence given by Allah to ducks to survive." },
    anatomy: [
      { part: { id: "Kaki Berselaput", en: "Webbed Feet" }, desc: { id: "Memudahkan bebek mendayung di dalam air, seperti sirip buatan.", en: "Helps ducks paddle in the water, like built-in flippers." } },
      { part: { id: "Paruh Datar", en: "Flat Beak" }, desc: { id: "Paruh ini seperti saringan untuk menangkap makanan di air dan lumpur.", en: "This beak is like a strainer to catch food in water and mud." } }
    ],
    wowFactor: { id: "Bebek punya tiga kelopak mata! Kelopak mata yang ketiga transparan, jadi mereka bisa melihat di dalam air seolah memakai kacamata renang!", en: "Ducks have three eyelids! The third one is transparent, so they can see underwater as if they are wearing swimming goggles!" },
    quranVerse: {
      arabic: "أَلَمْ يَرَوْا إِلَى الطَّيْرِ مُسَخَّرَاتٍ فِي جَوِّ السَّمَاءِ مَا يُمْسِكُهُنَّ إِلَّا اللَّهُ",
      transliteration: "Alam yaraw ilat-tayri musakh-kharatin fi jawwis-sama'i ma yumsikuhunna illallah.",
      translation: { id: "Tidakkah mereka memperhatikan burung-burung yang dimudahkan terbang di angkasa bebas. Tidak ada yang menahannya selain daripada Allah.", en: "Do they not see the birds controlled in the atmosphere of the sky? None holds them up except Allah." }
    },
    quiz: [
      {
        question: { id: "Bagaimana cara bebek melihat di dalam air?", en: "How do ducks see underwater?" },
        options: [
          { text: { id: "Menggunakan kelopak mata ketiga yang transparan", en: "Using a third transparent eyelid" } },
          { text: { id: "Mereka memejamkan mata dan meraba", en: "They close their eyes and feel" } },
          { text: { id: "Mereka berenang terbalik", en: "They swim upside down" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
