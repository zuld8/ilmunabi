import { ObjectData } from "../objects";

export const bambuData: ObjectData = {
  slug: "bambu",
  name: { id: "Bambu", en: "Bamboo" },
  icon: "🎋",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Bambusoideae",
  surahName: "Taha",
  surahReference: "20:53",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "خَيْزُرَان", latin: "Khayzurān", arti: "Bambu", artiEn: "Bamboo", contohAyat: "Bambu berongga tapi sangat kuat." }
  ],
  balita: {
    text: { id: "Bambu itu pohon yang sangat tinggi dan kurus! Warnanya hijau dan daunnya kecil-kecil. 🎋 Pandan suka makan bambu lho!", en: "Bamboo is a very tall and skinny tree! It's green and has tiny leaves. 🎋 Pandas love to eat bamboo!" },
    audioTranscript: { id: "Pohon bambu sangat tinggi dan bisa bergoyang saat kena angin.", en: "Bamboo trees are very tall and can sway in the wind." },
    quiz: {
      question: { id: "Hewan apa yang sangat suka makan daun bambu?", en: "What animal really loves eating bamboo leaves?" },
      options: [
        { text: { id: "Kucing", en: "Cat" } },
        { text: { id: "Panda", en: "Panda" } },
        { text: { id: "Harimau", en: "Tiger" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Bambu sebenarnya bukanlah pohon, melainkan jenis rumput raksasa! Bambu adalah tanaman yang tumbuhnya paling cepat di dunia. Subhanallah, Allah menciptakan tanaman ajaib ini yang bisa digunakan untuk membuat rumah, jembatan, bahkan alat musik!", en: "Did you know? Bamboo is actually not a tree, but a giant type of grass! Bamboo is the fastest growing plant in the world. Subhanallah, Allah created this magical plant that can be used to make houses, bridges, and even musical instruments!" },
    facts: [
      { id: "Bambu bisa tumbuh lebih dari 90 sentimeter hanya dalam satu hari!", en: "Bamboo can grow over 90 centimeters in just one day!" },
      { id: "Meskipun ringan, bambu sangat kuat, bahkan lebih kuat dari baja dalam menahan tarikan.", en: "Even though it is light, bamboo is very strong, even stronger than steel when resisting pulling." },
      { id: "Di dalam batang bambu terdapat rongga yang membuatnya ringan dan mudah dipotong.", en: "Inside the bamboo stem is a hollow space that makes it light and easy to cut." }
    ],
    quranVerse: {
      arabic: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا وَسَلَكَ لَكُمْ فِيهَا سُبُلًا وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ أَزْوَاجًا مِنْ نَبَاتٍ شَتَّى",
      transliteration: "Alladhī ja‘ala lakumu al-arḍa mahdan wa salaka lakum fīhā subulan wa anzala mina as-samā'i mā'an fa akhrajnā bihi azwājan min nabātin shattā",
      translation: { id: "Tuhan yang telah menjadikan bumi sebagai hamparan bagimu... dan menurunkan air dari langit. Maka Kami tumbuhkan berjenis-jenis tumbuhan.", en: "It is He who has made for you the earth as a bed... and sent down water from the sky. And We produced thereby categories of various plants." },
      context: { id: "Allah menciptakan berbagai jenis tanaman, termasuk rumput raksasa seperti bambu.", en: "Allah created various types of plants, including giant grasses like bamboo." }
    },
    quiz: {
      question: { id: "Bambu sebenarnya termasuk keluarga tanaman apa?", en: "What plant family does bamboo actually belong to?" },
      options: [
        { text: { id: "Pohon Ek", en: "Oak tree" } },
        { text: { id: "Rumput", en: "Grass" } },
        { text: { id: "Bunga", en: "Flower" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Struktur berongga pada bambu adalah rahasia kekuatan dan kelenturannya. Jika bambu padat, ia akan mudah patah saat diterjang badai. Namun karena berongga, bambu bisa melengkung tanpa patah! Ini menunjukkan desain arsitektur luar biasa dari Sang Pencipta, Allah SWT. Alam mengajarkan kita agar fleksibel dan tidak mudah patah semangat.", en: "The hollow structure of bamboo is the secret to its strength and flexibility. If bamboo were solid, it would easily break during a storm. But because it's hollow, bamboo can bend without breaking! This shows an incredible architectural design from the Creator, Allah SWT. Nature teaches us to be flexible and not easily broken in spirit." },
    anatomy: [
      { part: { id: "Rongga (Internode)", en: "Internode (Hollow part)" }, desc: { id: "Bagian kosong di dalam batang yang memberikan kelenturan.", en: "The empty space inside the stem that provides flexibility." } },
      { part: { id: "Buku (Node)", en: "Node (Joints)" }, desc: { id: "Ruas keras penyekat batang yang memberikan kekuatan struktur.", en: "The hard joints dividing the stem that provide structural strength." } }
    ],
    wowFactor: { id: "Bambu menghasilkan 35% lebih banyak oksigen ke udara dibandingkan pohon biasa dengan ukuran yang sama!", en: "Bamboo produces 35% more oxygen into the air compared to ordinary trees of the same size!" },
    quranVerse: {
      arabic: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۚ تَعَالَىٰ عَمَّا يُشْرِكُونَ",
      transliteration: "Khalaqa as-samāwāti wa al-arḍa bil-ḥaqqi, ta‘ālā ‘ammā yushrikūn",
      translation: { id: "Dia menciptakan langit dan bumi dengan kebenaran. Maha Tinggi Allah dari apa yang mereka musyrikkan.", en: "He created the heavens and earth in truth. High is He above what they associate with Him." }
    },
    quiz: [
      {
        question: { id: "Apa yang membuat bambu sangat lentur dan tidak mudah patah saat ditiup angin kencang?", en: "What makes bamboo very flexible and not easily broken when blown by strong winds?" },
        options: [
          { text: { id: "Batangnya yang padat dan tebal", en: "Its solid and thick stem" } },
          { text: { id: "Karena bambu adalah tanaman plastik", en: "Because bamboo is a plastic plant" } },
          { text: { id: "Struktur batangnya yang berongga (kosong di tengah)", en: "Its hollow stem structure (empty in the middle)" } }
        ],
        answerIdx: 2
      }
    ]
  }
};
