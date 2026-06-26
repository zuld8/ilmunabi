import { ObjectData } from "../objects";

export const hujanData: ObjectData = {
  slug: "hujan",
  name: { id: "Hujan", en: "Rain" },
  icon: "🌧️",
  category: "alam",
  type: "alam",
  scientificName: "Presipitasi",
  surahName: "Ar-Rum",
  surahReference: "30:48",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "مَطَر", latin: "Mathar", arti: "Hujan", artiEn: "Rain", contohAyat: "اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ فَتُثِيرُ سَحَابًا" }
  ],
  balita: {
    text: { id: "Tik tik tik bunyi hujan di atas genteng! 🌧️ Airnya turun dari langit membasahi pohon dan bunga.", en: "Pitter patter goes the rain on the roof! 🌧️ The water falls from the sky, wetting the trees and flowers." },
    audioTranscript: { id: "Kalau langit mendung berubah jadi gelap, itu tandanya hujan mau turun! Jangan lupa pakai payung biar tidak kehujanan ya.", en: "When the cloudy sky turns dark, it's a sign that rain is about to fall! Don't forget to use an umbrella so you don't get rained on." },
    quiz: {
      question: { id: "Apa yang kita pakai saat hujan supaya baju kita tidak basah?", en: "What do we wear when it rains so our clothes don't get wet?" },
      options: [
        { text: { id: "Kacamata Hitam", en: "Sunglasses" } },
        { text: { id: "Topi Pesta", en: "Party Hat" } },
        { text: { id: "Jas Hujan", en: "Raincoat" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Hujan terjadi karena air dari laut dipanaskan matahari, lalu menguap ke langit membentuk awan mendung. Kalau awannya sudah keberatan air, dia akan menangis meneteskan air hujan ke bumi!", en: "Rain happens because seawater is heated by the sun, then evaporates into the sky forming dark clouds. When the cloud gets too heavy with water, it cries and drops rainwater to earth!" },
    facts: [
      { id: "Aroma wangi tanah saat rintik hujan pertama turun disebut Petrichor (petrikor).", en: "The sweet smell of earth when the first rain drops fall is called Petrichor." },
      { id: "Tidak semua hujan sampai ke tanah lho! Terkadang hujannya menguap lagi karena udaranya sangat panas (disebut Virga).", en: "Not all rain reaches the ground! Sometimes the rain evaporates again because the air is so hot (called Virga)." },
      { id: "Kecepatan titik air hujan yang jatuh ke bumi sekitar 10 sampai 32 kilometer per jam.", en: "The speed of a raindrop falling to earth is about 10 to 32 kilometers per hour." }
    ],
    quranVerse: {
      arabic: "اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ فَتُثِيرُ سَحَابًا فَيَبْسُطُهُ فِي السَّمَاءِ",
      transliteration: "Allahu ladzii yursilur-riyaaha fa tutsiiru sahaaban fa yabsuthuhuu fis-samaa'i",
      translation: { id: "Allah, Dialah yang mengirim angin, lalu angin itu menggerakkan awan dan Allah membentangkannya di langit.", en: "It is Allah who sends the winds, and they stir the clouds and spread them in the sky." },
      context: { id: "Hujan adalah rahmat karena dengan hujan, tumbuhan bisa minum air dan tumbuh subur menghasilkan buah-buahan.", en: "Rain is a blessing because with rain, plants can drink water and grow well to produce fruits." }
    },
    quiz: {
      question: { id: "Dari manakah air yang membentuk awan hujan berasal?", en: "Where does the water that forms rain clouds come from?" },
      options: [
        { text: { id: "Dari keringat burung-burung", en: "From birds' sweat" } },
        { text: { id: "Air laut dan sungai yang menguap", en: "Seawater and rivers that evaporate" } },
        { text: { id: "Dari salju bulan", en: "From the moon's snow" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Proses terjadinya hujan (Siklus Hidrologi) melibatkan kondensasi uap air akibat perubahan suhu di atmosfer. Hujan membawa nutrisi vital bagi biosfer dan mengendalikan cuaca global. Hal yang mencengangkan, Al-Qur'an menggambarkan secara berurutan dan persis bagaimana angin meniup uap air, pembentukan awan berlapis-lapis (kumulonimbus), hingga turunnya hujan ratusan tahun sebelum sains menemukannya!", en: "The process of rain (Hydrological Cycle) involves water vapor condensation due to temperature changes in the atmosphere. Rain brings vital nutrients to the biosphere and controls global weather. Amazingly, the Quran describes exactly and in sequence how the wind blows water vapor, the formation of layered clouds (cumulonimbus), and finally the downpour of rain, hundreds of years before science discovered it!" },
    anatomy: [
      { part: { id: "Evaporasi", en: "Evaporation" }, desc: { id: "Tahap awal saat air laut berubah wujud menjadi gas karena panas matahari.", en: "The first stage when seawater turns into gas due to the sun's heat." } },
      { part: { id: "Kondensasi", en: "Condensation" }, desc: { id: "Uap air di langit mendingin dan saling menempel membentuk awan air.", en: "Water vapor in the sky cools and sticks together forming water clouds." } }
    ],
    wowFactor: { id: "HAH?! Di planet lain hujannya bukan air lho! Di planet Venus hujan asam mematikan, sedangkan di planet Jupiter dan Saturnus bisa hujan berlian batu permata yang berjatuhan dari langit!", en: "WOW?! On other planets, rain isn't water! On Venus it rains deadly acid, while on Jupiter and Saturn it can rain diamond gemstones falling from the sky!" },
    quranVerse: {
      arabic: "أَلَمْ تَرَ أَنَّ اللَّهَ يُزْجِي سَحَابًا ثُمَّ يُؤَلِّفُ بَيْنَهُ ثُمَّ يَجْعَلُهُ رُكَامًا فَتَرَى الْوَدْقَ يَخْرُجُ مِنْ خِلَالِهِ",
      transliteration: "Alam tara annallaaha yuzjii sahaaban tsumma yu'allifu baynahuu tsumma yaj'aluhuu rukaaman fa taral-wadqa yakhruju min khilaalih",
      translation: { id: "Tidakkah engkau melihat bahwa Allah menjadikan awan bergerak perlahan, lalu mengumpulkannya, lalu Dia menjadikannya bertumpuk-tumpuk, lalu engkau lihat hujan keluar dari celah-celahnya.", en: "Do you not see that Allah drives clouds, then gathers them, then makes them into a mass, and you see the rain emerge from within it." }
    },
    quiz: [
      {
        question: { id: "Berdasarkan Al-Qur'an Surat An-Nur 24:43, awan tebal penghasil hujan badai bentuknya dideskripsikan seperti apa?", en: "Based on Quran Surah An-Nur 24:43, what is the shape of thick storm-producing clouds described as?" },
        options: [
          { text: { id: "Datar dan tipis di langit", en: "Flat and thin in the sky" } },
          { text: { id: "Bertumpuk-tumpuk raksasa seperti gunung", en: "Piled up gigantic like mountains" } },
          { text: { id: "Berbentuk cincin", en: "Ring-shaped" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
