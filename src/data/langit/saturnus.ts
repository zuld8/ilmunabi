import { ObjectData } from "../objects";

export const saturnusData: ObjectData = {
  slug: "saturnus",
  name: { id: "Saturnus", en: "Saturn" },
  icon: "🪐",
  category: "langit",
  type: "langit",
  scientificName: "Saturn",
  surahName: "Yasin",
  surahReference: "36:40",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "فَلَك", latin: "Falak", arti: "Orbit/Garis Edar", artiEn: "Orbit", contohAyat: "Planet-planet beredar pada orbitnya" }
  ],
  balita: {
    text: { id: "Wow! Lihat planet yang pakai cincin cantik ini! Ini Saturnus! Cincinnya berputar-putar seperti hula hoop! 🪐✨", en: "Wow! Look at this planet wearing a pretty ring! This is Saturn! Its ring spins like a hula hoop! 🪐✨" },
    audioTranscript: { id: "Ini planet paling cantik, Saturnus! Dia memakai cincin raksasa yang berkilauan. Allah menciptakannya sangat unik agar kita kagum.", en: "This is the most beautiful planet, Saturn! It wears a giant sparkling ring. Allah created it very uniquely so we would be amazed." },
    quiz: {
      question: { id: "Apa yang membuat planet Saturnus sangat cantik dan unik?", en: "What makes planet Saturn so beautiful and unique?" },
      options: [
        { text: { id: "Punya topi", en: "It has a hat" } },
        { text: { id: "Punya cincin raksasa", en: "It has giant rings" } },
        { text: { id: "Bentuknya kotak", en: "It is square shaped" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Cincin Saturnus sebenarnya terbuat dari miliaran potongan bongkahan es dan batu yang mengorbit (mengelilingi) planet itu dengan sangat rapi!", en: "Saturn's rings are actually made of billions of pieces of ice and rock orbiting the planet very neatly!" },
    facts: [
      { id: "Kalau ada bak mandi yang ukurannya cukup besar, planet Saturnus bisa MENGAPUNG di atas air! 🛀", en: "If there were a bathtub big enough, planet Saturn would FLOAT on water! 🛀" },
      { id: "Saturnus adalah planet gas, jadi kamu tidak bisa berdiri atau mendarat di permukaannya.", en: "Saturn is a gas planet, so you can't stand or land on its surface." },
      { id: "Potongan es di cincinnya ada yang sekecil debu, sampai sebesar rumah!", en: "The ice pieces in its rings range from the size of dust to the size of a house!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kutub utara Saturnus punya pusaran badai berbentuk segi enam sempurna (Hexagon) selebar 30.000 km! HAH?! Para ilmuwan pun kagum melihat keteraturan geometri yang tercipta dari dinamika fluida gas ini. 1400 tahun lalu, Al-Qur'an menyatakan bahwa segala benda langit terapung/beredar pada garis edarnya yang teratur tanpa saling bertabrakan.", en: "Saturn's north pole has a perfect hexagon-shaped storm swirling 30,000 km wide! HAH?! Scientists are amazed to see such geometric order created by gas fluid dynamics. 1400 years ago, the Quran stated that all celestial bodies float/swim in their ordered orbits without colliding." },
    quranVerse: {
      arabic: "لَا الشَّمْسُ يَنْبَغِي لَهَا أَنْ تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ ۚ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ",
      transliteration: "Lash-shamsu yambaghī lahā an tudrikal-qamara wa lal-laylu sābiqun-nahār, wa kullun fī falakiy-yasbaḥūn",
      translation: { id: "Tidaklah mungkin bagi matahari mendapatkan bulan dan malampun tidak dapat mendahului siang. Dan masing-masing beredar pada garis edarnya.", en: "It is not allowable for the sun to reach the moon, nor does the night overtake the day, but each, in an orbit, is swimming." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
