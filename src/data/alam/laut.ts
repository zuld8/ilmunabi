import { ObjectData } from "../objects";

export const lautData: ObjectData = {
  slug: "laut",
  name: { id: "Laut", en: "Sea" },
  icon: "🌊",
  category: "alam",
  type: "alam",
  scientificName: "Oceanus (Marine Ecosystem)",
  surahName: "Ar-Rahman",
  surahReference: "55:19-20",
  unlockedAtPoints: 45,
  kosakata: [
    { arab: "بَحْر", latin: "Bahr", arti: "Laut", artiEn: "Sea", contohAyat: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ" }
  ],
  balita: {
    text: { id: "Byuur! Ombak laut bergulung-gulung! 🌊 Di dalam laut banyak sekali ikan kecil berwarna-warni yang berenang.", en: "Splash! The ocean waves are rolling! 🌊 Inside the sea, there are so many colorful little fishes swimming." },
    audioTranscript: { id: "Air laut rasanya asiiiin sekali! Di pantai pinggir laut kita bisa membuat istana pasir yang bagus.", en: "Sea water tastes veeery salty! At the beach by the sea we can make nice sandcastles." },
    quiz: {
      question: { id: "Kalau kita main air di laut, rasanya seperti apa sih?", en: "If we play in the sea water, what does it taste like?" },
      options: [
        { text: { id: "Manis", en: "Sweet" } },
        { text: { id: "Asin", en: "Salty" } },
        { text: { id: "Pahit", en: "Bitter" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Laut adalah perairan air asin yang super besaaar! Banyak hewan raksasa hidup di sana seperti Paus Biru. Laut juga memberikan kita banyak sekali ikan enak yang bisa dimakan.", en: "The sea is a super biiig body of saltwater! Many giant animals live there like the Blue Whale. The sea also gives us lots of delicious fish to eat." },
    facts: [
      { id: "Lautan itu sangat dalam, bahkan gunung tertinggi di Bumi pun akan tenggelam sepenuhnya kalau dimasukkan ke laut terdalam!", en: "The ocean is so deep, even the highest mountain on Earth would completely sink if put into the deepest sea!" },
      { id: "Kebanyakan oksigen (udara bersih) untuk kita bernapas ternyata bukan dari pohon, melainkan dari tanaman kecil di laut (fitoplankton).", en: "Most of the oxygen (clean air) for us to breathe actually comes not from trees, but from tiny plants in the sea (phytoplankton)." },
      { id: "Garam laut yang asin berasal dari bebatuan di daratan yang luntur tersapu hujan ke lautan selama jutaan tahun.", en: "The salty sea salt comes from rocks on land that washed away by rain into the ocean over millions of years." }
    ],
    quranVerse: {
      arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ ۝ بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ",
      transliteration: "Marajal-bahrayni yaltaqiyaan. Baynahumaa barzakhul-laa yabghiyaan.",
      translation: { id: "Dia membiarkan dua lautan mengalir yang keduanya kemudian bertemu. Antara keduanya ada batas yang tidak dilampaui masing-masing.", en: "He released the two seas, meeting [side by side]. Between them is a barrier [so] neither of them transgresses." },
      context: { id: "Allah menciptakan air laut dan air tawar yang ketika bertemu mereka tidak bercampur karena ada batas tak terlihat (massa jenis air).", en: "Allah created seawater and freshwater which when they meet, they don't mix because there's an invisible barrier (water density)." }
    },
    quiz: {
      question: { id: "Dari manakah asalnya banyak oksigen bersih untuk kita bernapas?", en: "Where does most of the clean oxygen we breathe come from?" },
      options: [
        { text: { id: "Asap mobil", en: "Car smoke" } },
        { text: { id: "Pabrik", en: "Factories" } },
        { text: { id: "Tanaman kecil di lautan", en: "Tiny plants in the ocean" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Lautan (Samudra) menutupi 71% permukaan Bumi dan mengatur sistem iklim secara global dengan menyerap radiasi matahari. Salah satu fenomena laut terhebat yang membuktikan kebenaran Al-Qur'an adalah 'Estuari' dan 'Halocline', yaitu kondisi dimana aliran sungai (air tawar) bertemu lautan (air asin) dan keduanya sama sekali tidak bercampur karena perbedaan kerapatan (densitas) dan salinitas (kadar garam).", en: "The ocean covers 71% of the Earth's surface and regulates the global climate system by absorbing solar radiation. One of the greatest marine phenomena proving the Quran's truth is 'Estuaries' and 'Halocline', which is the condition where river flow (freshwater) meets the ocean (saltwater) and they do not mix at all due to differences in density and salinity." },
    anatomy: [
      { part: { id: "Zona Epipelagik (Sunlight Zone)", en: "Epipelagic Zone" }, desc: { id: "Lapisan laut paling atas yang masih tembus sinar matahari, tempat terumbu karang hidup.", en: "The topmost layer of the sea where sunlight still penetrates, where coral reefs live." } },
      { part: { id: "Palung Laut (Trench)", en: "Ocean Trench" }, desc: { id: "Jurang sangat dalam di dasar samudra yang gelap gulita dan tekanannya bisa menghancurkan kapal selam.", en: "A very deep abyss at the ocean floor that is pitch black and whose pressure can crush submarines." } }
    ],
    wowFactor: { id: "HAH?! Di dasar samudra terdalam (Palung Mariana), terdapat ikan yang bentuknya seram dan bisa menghasilkan cahayanya sendiri karena di sana benar-benar tidak ada sinar matahari sama sekali!", en: "WOW?! At the bottom of the deepest ocean (Mariana Trench), there are scary-looking fish that can produce their own light because there is absolutely no sunlight down there at all!" },
    quranVerse: {
      arabic: "أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُجِّيٍّ يَغْشَاهُ مَوْجٌ مِنْ فَوْقِهِ مَوْجٌ مِنْ فَوْقِهِ سَحَابٌ ۚ ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ",
      transliteration: "Aw kadzhulumaatin fii bahril-lujjiyyin yaghsyaahu mawjum-min fawqihii mawjum-min fawqihii sahaab, zhulumaatum ba'dhuhaa fawqa ba'dh",
      translation: { id: "Atau seperti gelap gulita di lautan yang dalam, yang diliputi oleh ombak, yang di atasnya ombak (pula), di atasnya (lagi) awan; gelap gulita yang tindih-bertindih.", en: "Or [they are] like darknesses within an unfathomable sea which is covered by waves, upon which are waves, over which are clouds - darknesses, some of them upon others." }
    },
    quiz: [
      {
        question: { id: "Fenomena sains apa yang membuktikan firman Allah tentang dua lautan yang berdampingan tapi tidak menyatu?", en: "What science phenomenon proves Allah's word about two adjoining seas that do not mix?" },
        options: [
          { text: { id: "Fenomena Magnetik", en: "Magnetic Phenomenon" } },
          { text: { id: "Perbedaan Salinitas/Densitas (Halocline)", en: "Salinity/Density Difference (Halocline)" } },
          { text: { id: "Gelombang Tsunami", en: "Tsunami Waves" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
