import { ObjectData } from "../objects";

export const neptunusData: ObjectData = {
  slug: "neptunus",
  name: { id: "Neptunus", en: "Neptune" },
  icon: "🔵",
  category: "langit",
  type: "langit",
  scientificName: "Neptune",
  surahName: "Al-Furqan",
  surahReference: "25:61",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "بُرُوج", latin: "Buruj", arti: "Gugusan bintang / Orbit besar", artiEn: "Constellations / Giant orbits", contohAyat: "Langit memiliki orbit yang sangat besar" }
  ],
  balita: {
    text: { id: "Brrr! Ini Neptunus, planet yang warnanya biru terang dan sangaaaat dingin! Anginnya meniup kencang sekali! 🌬️🔵", en: "Brrr! This is Neptune, a bright blue planet that is veeeery cold! Its winds blow super fast! 🌬️🔵" },
    audioTranscript: { id: "Neptunus adalah planet paling jauh di tata surya kita. Karena jauh dari matahari, planet biru ini jadi sangat dingin dan gelap. Allah menciptakannya penuh es.", en: "Neptune is the farthest planet in our solar system. Because it's far from the sun, this blue planet gets very cold and dark. Allah created it full of ice." },
    quiz: {
      question: { id: "Kenapa planet Neptunus sangat dingin?", en: "Why is planet Neptune so cold?" },
      options: [
        { text: { id: "Karena berisi es krim", en: "Because it's filled with ice cream" } },
        { text: { id: "Karena dia paling jauh dari matahari", en: "Because it's the farthest from the sun" } },
        { text: { id: "Karena sedang musim salju di Bumi", en: "Because it's snowing on Earth" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Neptunus adalah Raksasa Es terakhir di tata surya kita. Butuh waktu 165 tahun di Bumi untuk Neptunus memutari matahari satu kali saja lho!", en: "Neptune is the last Ice Giant in our solar system. It takes 165 Earth years for Neptune to orbit the sun just once!" },
    facts: [
      { id: "Kecepatan angin badai di Neptunus bisa mencapai 2.000 km/jam! Lebih cepat dari pesawat jet! ✈️", en: "Storm winds on Neptune can reach 2,000 km/h! Faster than a jet plane! ✈️" },
      { id: "Neptunus punya warna biru cantik yang berasal dari gas bernama metana.", en: "Neptune has a beautiful blue color coming from a gas called methane." },
      { id: "Planet ini punya 14 bulan, yang paling besar bernama Triton.", en: "This planet has 14 moons, the largest one is called Triton." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Tahukah kamu? Di dalam atmosfer Neptunus yang tekanan dan suhunya ekstrem, gas karbon mengkristal dan jatuh menjadi HUJAN BERLIAN! HAH?! Ya, jutaan berlian berjatuhan ke inti planet ini. 1400 tahun lalu, Al-Qur'an mengajak kita takjub kepada Yang Maha Suci pencipta gugusan benda langit raksasa di ruang angkasa.", en: "Did you know? Deep in Neptune's atmosphere with extreme pressure and temperature, carbon gas crystallizes and falls as DIAMOND RAIN! HAH?! Yes, millions of diamonds shower down to the planet's core. 1400 years ago, the Quran invited us to marvel at the Exalted Creator of giant celestial constellations in space." },
    quranVerse: {
      arabic: "تَبَارَكَ الَّذِي جَعَلَ فِي السَّمَاءِ بُرُوجًا وَجَعَلَ فِيهَا سِرَاجًا وَقَمَرًا مُنِيرًا",
      transliteration: "Tabārakal-ladhī ja'ala fis-samā'i burūjaw wa ja'ala fīhā sirājaw wa qamaram munīrā",
      translation: { id: "Maha Suci Allah yang menjadikan di langit gugusan-gugusan bintang dan Dia menjadikan juga padanya matahari dan bulan yang bersinar.", en: "Blessed is He who has placed in the sky great stars and placed therein a [burning] lamp and luminous moon." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
