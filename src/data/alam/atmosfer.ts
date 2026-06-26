import { ObjectData } from "../objects";

export const atmosferData: ObjectData = {
  slug: "atmosfer",
  name: { id: "Atmosfer Bumi", en: "Earth's Atmosphere" },
  icon: "☁️",
  category: "alam",
  type: "alam",
  scientificName: "Atmosphere",
  surahName: "Nuh",
  surahReference: "Nuh:15-16",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "هَوَاءٌ", latin: "Hawaa'", arti: "Udara", artiEn: "Air" },
    { arab: "طَبَقَةٌ", latin: "Tabaqah", arti: "Lapisan", artiEn: "Layer" },
    { arab: "سَمَاءٌ", latin: "Samaa'", arti: "Langit", artiEn: "Sky" },
    { arab: "سَحَابٌ", latin: "Sahaab", arti: "Awan", artiEn: "Cloud" }
  ],
  balita: {
    text: { id: "Coba tarik napas dalam-dalam... Udara yang kita hirup itu ada di atmosfer! Atmosfer itu seperti selimut tebal dari udara yang menutupi bumi supaya kita tetap hangat dan bisa bernapas.", en: "Take a deep breath... The air we breathe is in the atmosphere! The atmosphere is like a thick blanket of air covering the earth to keep us warm and let us breathe." },
    audioTranscript: { id: "Atmosfer adalah selimut udara yang menutupi bumi kita.", en: "The atmosphere is a blanket of air that covers our earth." },
    quiz: {
      question: { id: "Atmosfer berguna untuk apa?", en: "What is the atmosphere used for?" },
      options: [
        { text: { id: "Untuk makan", en: "To eat" } },
        { text: { id: "Untuk bernapas", en: "To breathe" } },
        { text: { id: "Untuk berenang", en: "To swim" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Atmosfer terdiri dari 7 lapisan udara yang berbeda lho! Allah menciptakan berlapis-lapis langit supaya ada bagian udara untuk kita bernapas, ada bagian untuk hujan, dan ada yang membakar meteor jatuh. Keren sekali ciptaan Allah ya!", en: "The atmosphere consists of 7 different layers of air! Allah created layers of the sky so there is air for us to breathe, a part for rain, and a part that burns falling meteors. How awesome is Allah's creation!" },
    facts: [
      { id: "Udara di atmosfer kita paling banyak berisi gas Nitrogen.", en: "The air in our atmosphere contains mostly Nitrogen gas." },
      { id: "Atmosfer bisa membakar meteor sehingga tidak jatuh mengenai kita.", en: "The atmosphere can burn meteors so they don't fall and hit us." },
      { id: "Awan dan hujan terjadi di lapisan paling bawah yang bernama Troposfer.", en: "Clouds and rain occur in the lowest layer called the Troposphere." },
      { id: "Makin tinggi kita terbang, udara di atmosfer makin tipis.", en: "The higher we fly, the thinner the air in the atmosphere." },
      { id: "Atmosfer menahan panas matahari supaya bumi tidak kedinginan.", en: "The atmosphere holds the sun's heat so the earth doesn't freeze." }
    ],
    quranVerse: {
      arabic: "أَلَمْ تَرَوْا۟ كَيْفَ خَلَقَ ٱللَّهُ سَبْعَ سَمَٰوَٰتٍ طِبَاقًا",
      transliteration: "Alam taraw kayfa khalaqallaahu sab'a samaawaatin tibaaqaa",
      translation: { id: "Tidakkah kamu perhatikan bagaimana Allah telah menciptakan tujuh langit bertingkat-tingkat?", en: "Do you not consider how Allah has created seven heavens in layers?" }
    },
    quiz: {
      question: { id: "Berapa banyak lapisan langit/atmosfer yang disebutkan dalam Al-Qur'an?", en: "How many layers of the sky/atmosphere are mentioned in the Quran?" },
      options: [
        { text: { id: "Tiga", en: "Three" } },
        { text: { id: "Tujuh", en: "Seven" } },
        { text: { id: "Sepuluh", en: "Ten" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Atmosfer bumi terdiri dari gas (78% Nitrogen, 21% Oksigen). Para ilmuwan membaginya menjadi beberapa lapisan (Troposfer, Stratosfer, Mesosfer, Termosfer, Eksosfer, dsb). Hebatnya, Al-Qur'an juga menyebutkan langit diciptakan dalam tujuh lapisan (sab'a samawat) yang bertingkat-tingkat (tibaaqaa). Ini adalah bukti bahwa sains Islam telah sesuai dengan fakta ilmiah!", en: "Earth's atmosphere consists of gases (78% Nitrogen, 21% Oxygen). Scientists divide it into several layers (Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere, etc.). Amazingly, the Quran also mentions the sky was created in seven layers (sab'a samawat) stacked above each other (tibaaqaa). This is proof that Islamic science aligns with scientific facts!" },
    anatomy: [
      { part: { id: "Troposfer", en: "Troposphere" }, desc: { id: "Lapisan paling dekat bumi, tempat terjadinya cuaca dan awan.", en: "The closest layer to earth, where weather and clouds occur." } },
      { part: { id: "Mesosfer", en: "Mesosphere" }, desc: { id: "Lapisan yang membakar habis meteor dari luar angkasa.", en: "The layer that burns up meteors from outer space." } }
    ],
    wowFactor: { id: "Hah?! Kalau bumi tidak punya atmosfer, suhu di siang hari akan mendidih (120°C) dan malam hari sangat beku (-150°C)! Atmosfer bertindak seperti selimut pengatur suhu!", en: "What?! If the earth had no atmosphere, the daytime temperature would boil (120°C) and the night would freeze (-150°C)! The atmosphere acts like a temperature-regulating blanket!" },
    quranVerse: {
      arabic: "أَلَمْ تَرَوْا۟ كَيْفَ خَلَقَ ٱللَّهُ سَبْعَ سَمَٰوَٰتٍ طِبَاقًا",
      transliteration: "Alam taraw kayfa khalaqallaahu sab'a samaawaatin tibaaqaa",
      translation: { id: "Tidakkah kamu perhatikan bagaimana Allah telah menciptakan tujuh langit bertingkat-tingkat?", en: "Do you not consider how Allah has created seven heavens in layers?" }
    },
    quiz: [
      {
        question: { id: "Gas apa yang paling banyak jumlahnya di atmosfer kita?", en: "What gas is the most abundant in our atmosphere?" },
        options: [
          { text: { id: "Oksigen", en: "Oxygen" } },
          { text: { id: "Karbon Dioksida", en: "Carbon Dioxide" } },
          { text: { id: "Nitrogen", en: "Nitrogen" } }
        ],
        answerIdx: 2
      },
      {
        question: { id: "Di lapisan atmosfer manakah semua cuaca (hujan, angin, awan) terjadi?", en: "In which atmospheric layer does all weather (rain, wind, clouds) occur?" },
        options: [
          { text: { id: "Stratosfer", en: "Stratosphere" } },
          { text: { id: "Troposfer", en: "Troposphere" } },
          { text: { id: "Eksosfer", en: "Exosphere" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa kata yang dipakai Al-Qur'an untuk menggambarkan langit yang 'bertingkat-tingkat'?", en: "What word does the Quran use to describe the sky being 'in layers'?" },
        options: [
          { text: { id: "Tibaaqaa", en: "Tibaaqaa" } },
          { text: { id: "Kifaata", en: "Kifaata" } },
          { text: { id: "Mahfuuza", en: "Mahfuuza" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
