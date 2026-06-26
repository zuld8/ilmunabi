import { ObjectData } from "../objects";

export const bintangData: ObjectData = {
  slug: "bintang",
  name: { id: "Bintang", en: "Star" },
  icon: "⭐",
  category: "alam",
  type: "langit",
  scientificName: "Stella / Plasma Sphere",
  surahName: "An-Nahl",
  surahReference: "16:16",
  unlockedAtPoints: 25,
  kosakata: [
    { arab: "نَجْم", latin: "Najm", arti: "Bintang", artiEn: "Star", contohAyat: "وَعَلَامَاتٍ ۚ وَبِالنَّجْمِ هُمْ يَهْتَدُونَ" }
  ],
  balita: {
    text: { id: "Kelap-kelip di langit malam! ⭐ Bintang itu seperti lampu-lampu kecil yang dipasang di atas langit.", en: "Twinkle-twinkle in the night sky! ⭐ Stars are like tiny lights installed up in the sky." },
    audioTranscript: { id: "Wah, langit malam indah sekali penuh dengan bintang! Bintang terlihat kecil karena jaraknya sangat jauuuh dari kita.", en: "Wow, the night sky is so beautiful full of stars! Stars look small because they are so faaar away from us." },
    quiz: {
      question: { id: "Kapan kita bisa melihat banyak bintang berkelap-kelip di langit?", en: "When can we see lots of stars twinkling in the sky?" },
      options: [
        { text: { id: "Siang hari", en: "Daytime" } },
        { text: { id: "Malam hari", en: "Nighttime" } },
        { text: { id: "Saat hujan deras", en: "During heavy rain" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bintang sebenarnya adalah bola gas panas berukuran super raksasa yang bercahaya terang. Karena jaraknya miliaran kilometer dari Bumi, mereka jadi terlihat sekecil titik cahaya!", en: "Stars are actually super giant balls of hot gas that shine brightly. Because they are billions of kilometers away from Earth, they look like tiny dots of light!" },
    facts: [
      { id: "Matahari yang menyinari kita di siang hari sebenarnya adalah sebuah Bintang lho! Hanya saja jaraknya paling dekat dengan Bumi.", en: "The sun that shines on us during the day is actually a Star you know! It's just the closest one to Earth." },
      { id: "Bintang tidak berkelap-kelip dari luar angkasa. Cahayanya terlihat berkelip karena harus menembus udara Bumi yang terus bergerak.", en: "Stars don't twinkle from space. Their light appears to twinkle because it has to pass through Earth's moving air." },
      { id: "Bintang punya warna yang berbeda. Ada bintang yang warnanya merah, kuning, dan ada yang biru yang paling panas!", en: "Stars have different colors. There are red stars, yellow stars, and blue ones which are the hottest!" }
    ],
    quranVerse: {
      arabic: "وَعَلَامَاتٍ ۚ وَبِالنَّجْمِ هُمْ يَهْتَدُونَ",
      transliteration: "Wa 'alaamaat, wa bin-najmi hum yahtaduun",
      translation: { id: "Dan (Dia ciptakan) tanda-tanda (penunjuk jalan). Dan dengan bintang-bintang itulah mereka mendapat petunjuk.", en: "And landmarks. And by the stars they are [also] guided." },
      context: { id: "Dulu sebelum ada kompas dan GPS, para pelaut di laut lepas menggunakan posisi bintang untuk mengetahui arah.", en: "Before compasses and GPS, sailors in the open sea used the position of stars to know directions." }
    },
    quiz: {
      question: { id: "Apa bintang yang paling dekat dengan planet Bumi kita?", en: "What is the closest star to our planet Earth?" },
      options: [
        { text: { id: "Bintang Sirius", en: "Sirius Star" } },
        { text: { id: "Matahari", en: "The Sun" } },
        { text: { id: "Bulan", en: "The Moon" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Bintang adalah bola plasma raksasa yang menghasilkan energinya sendiri melalui reaksi fusi nuklir (mengubah hidrogen menjadi helium) di intinya. Sejak zaman kuno manusia menggunakan bintang sebagai peta kosmik. Begitu sempurnanya desain semesta, sehingga Al-Qur'an sejak abad ke-7 sudah menyatakan fungsi bintang sebagai sistem navigasi (petunjuk arah) bagi manusia!", en: "Stars are giant plasma balls that generate their own energy through nuclear fusion (turning hydrogen into helium) at their core. Since ancient times humans have used stars as a cosmic map. So perfect is the design of the universe, that the Quran since the 7th century already stated the function of stars as a navigation system for humans!" },
    anatomy: [
      { part: { id: "Inti (Core)", en: "Core" }, desc: { id: "Pusat bintang super panas tempat terjadinya fusi nuklir dahsyat.", en: "The super hot center of a star where explosive nuclear fusion happens." } },
      { part: { id: "Korona", en: "Corona" }, desc: { id: "Lapisan atmosfer terluar bintang yang terlihat seperti mahkota cahaya.", en: "The outermost atmospheric layer of a star that looks like a crown of light." } }
    ],
    wowFactor: { id: "HAH?! Ketika sebuah bintang raksasa meledak dan mati (Supernova), ledakannya bisa lebih terang dari satu galaksi utuh! Dari debu ledakan itulah terbentuk planet-planet berbatu seperti Bumi kita ini!", en: "WOW?! When a giant star explodes and dies (Supernova), its explosion can be brighter than an entire galaxy! It is from the dust of this explosion that rocky planets like our Earth are formed!" },
    quranVerse: {
      arabic: "وَالسَّمَاءِ وَالطَّارِقِ ۝ وَمَا أَدْرَاكَ مَا الطَّارِقُ ۝ النَّجْمُ الثَّاقِبُ",
      transliteration: "Was-samaa'i wath-thaariq. Wa maa adraaka math-thaariq. An-najmuts-tsaaqib.",
      translation: { id: "Demi langit dan yang datang pada malam hari. Tahukah kamu apakah yang datang pada malam hari itu? (Yaitu) bintang yang cahayanya menembus.", en: "By the sky and the night comer. And what can make you know what is the night comer? It is the piercing star." }
    },
    quiz: [
      {
        question: { id: "Reaksi fisika apa yang terjadi di dalam inti bintang sehingga menghasilkan cahaya sangat terang?", en: "What physical reaction occurs inside a star's core that produces such bright light?" },
        options: [
          { text: { id: "Pembakaran Batu Bara", en: "Coal Burning" } },
          { text: { id: "Reaksi Fusi Nuklir", en: "Nuclear Fusion Reaction" } },
          { text: { id: "Gesekan Magnet Bumi", en: "Earth's Magnetic Friction" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
