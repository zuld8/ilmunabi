import { ObjectData } from "../objects";

export const ususData: ObjectData = {
  slug: "usus",
  name: { id: "Usus", en: "Intestines" },
  icon: "🍝",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Intestinum",
  surahName: "Muhammad",
  surahReference: "47:15",
  unlockedAtPoints: 170,
  kosakata: [
    { arab: "أَمْعَاءٌ", latin: "Am'aa-un", arti: "Usus", artiEn: "Intestines", contohAyat: "Wa suqoo maa-an hameeman faqatta'a am'aa-ahum (Dan diberi minum dengan air yang mendidih sehingga memotong-motong ususnya)." }
  ],
  balita: {
    text: { id: "Di dalam perutmu ada tabung panjang yang berbelok-belok seperti selang air. Namanya usus! Dia mengambil vitamin dari makanan biar tubuh kita kuat. 🥕🍎", en: "Inside your belly there's a long tube that winds around like a water hose. It's called the intestine! It takes vitamins from food so our body is strong. 🥕🍎" },
    audioTranscript: { id: "Makanan yang dari lambung akan jalan-jalan masuk ke dalam usus yang paaanjang.", en: "Food from the stomach will travel into the loooong intestines." },
    quiz: {
      question: { id: "Usus mengambil apa dari makanan kita?", en: "What do the intestines take from our food?" },
      options: [
        { text: { id: "Batu", en: "Stones" } },
        { text: { id: "Vitamin dan gizi", en: "Vitamins and nutrients" } },
        { text: { id: "Udara", en: "Air" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Wow! Kalau usus kita direntangkan, panjangnya bisa sampai 7 meter! Lebih panjang dari mobil ayah! Ada Usus Halus yang bertugas menyedot semua gizi makanan, dan Usus Besar yang menyerap air lalu membuang sisanya jadi pup. Allah membuat usus berlipat-lipat rapi agar muat di dalam perut kita yang kecil. 🚗💨", en: "Wow! If our intestines were stretched out, the length could reach 7 meters! Longer than dad's car! There's the Small Intestine whose job is to suck all food nutrients, and the Large Intestine that absorbs water and throws the rest out as poop. Allah made the intestines neatly folded to fit inside our small belly. 🚗💨" },
    facts: [
      { id: "Makanan butuh waktu sekitar 1 sampai 3 hari untuk melewati seluruh ususmu sampai menjadi kotoran! 💩", en: "Food takes about 1 to 3 days to pass through all your intestines until it becomes waste! 💩" },
      { id: "Di dalam usus kita hidup triliunan bakteri baik yang membantu pencernaan makanan. 🦠", en: "Trillions of good bacteria live inside our intestines helping food digestion. 🦠" },
      { id: "Bunyi perut lapar (keroncongan) juga bisa berasal dari udara yang bergerak di usus. 💨", en: "Hungry tummy sounds (rumbling) can also come from air moving in the intestines. 💨" }
    ],
    quranVerse: {
      arabic: "وَسُقُوا مَاءً حَمِيمًا فَقَطَّعَ أَمْعَاءَهُمْ",
      transliteration: "Wa suqoo maa-an hameeman faqatta'a am'aa-ahum",
      translation: { id: "Dan diberi minum dengan air yang mendidih sehingga memotong-motong ususnya.", en: "And they are given boiling water to drink that cuts their intestines." },
      context: { id: "Al-Qur'an menjelaskan usus sebagai organ penting, yang kelak di neraka akan hancur jika diberi minuman mendidih.", en: "The Quran describes intestines as important organs, which in hell will be destroyed if given boiling water." }
    },
    quiz: {
      question: { id: "Bagaimana caranya usus yang sangat panjang bisa muat di dalam perut kita?", en: "How can the very long intestines fit inside our belly?" },
      options: [
        { text: { id: "Karena dipotong-potong", en: "Because they are cut into pieces" } },
        { text: { id: "Karena ukurannya menyusut", en: "Because their size shrinks" } },
        { text: { id: "Karena digulung dan dilipat rapi", en: "Because they are neatly rolled and folded" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Usus sering disebut sebagai 'otak kedua' (second brain) pada manusia! Mengapa? Karena dinding usus mengandung seratus juta jaringan saraf yang bisa bekerja secara mandiri tanpa disuruh otak kepala kita. Itulah mengapa saat kamu sedang stres atau grogi saat ujian, perutmu bisa terasa mules! Di permukaan usus halus terdapat tonjolan-tonjolan mikroskopis bernama vili yang memperluas area penyerapan gizi, membuatnya setara luas setengah lapangan bulu tangkis! Subhanallah, desain penyerapan yang maksimal. 🧠🔬", en: "The intestines are often called the human 'second brain'! Why? Because the intestinal wall contains a hundred million nerve networks that can work independently without being told by our head brain. That's why when you are stressed or nervous during an exam, your tummy can feel butterflies! On the surface of the small intestine are microscopic projections called villi that expand the nutrient absorption area, making it equivalent to half a badminton court! Subhanallah, a maximum absorption design. 🧠🔬" },
    anatomy: [
      { part: { id: "Usus Halus (Duodenum, Jejunum, Ileum)", en: "Small Intestine" }, desc: { id: "Tabung terpanjang penyerap gizi. Permukaannya seperti karpet tebal (vili).", en: "The longest tube absorbing nutrients. Its surface is like thick carpet (villi)." } },
      { part: { id: "Usus Besar (Kolon)", en: "Large Intestine (Colon)" }, desc: { id: "Pipa lebar yang mengelilingi usus halus, bertugas menyerap air agar tidak dehidrasi.", en: "The wide pipe surrounding the small intestine, tasked with absorbing water to prevent dehydration." } },
      { part: { id: "Mikrobioma", en: "Microbiome" }, desc: { id: "Pasukan triliunan bakteri bersahabat di usus besar yang memproduksi vitamin K.", en: "The army of trillions of friendly bacteria in the large intestine producing vitamin K." } }
    ],
    wowFactor: { id: "Jika tidak ada bakteri baik di usus kita, pencernaan tidak akan selesai dan kita tidak bisa mendapat cukup energi dari sayur dan buah yang kita makan! 🥦", en: "If there were no good bacteria in our intestines, digestion wouldn't finish and we couldn't get enough energy from the veggies and fruits we eat! 🥦" },
    quranVerse: {
      arabic: "وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ",
      transliteration: "Wa fee anfusikum; afalaa tubsiroon",
      translation: { id: "Dan (juga) pada dirimu sendiri (terdapat tanda-tanda kebesaran Allah). Maka apakah kamu tidak memperhatikan?", en: "And in yourselves. Then will you not see?" }
    },
    quiz: [
      {
        question: { id: "Mengapa usus sering disebut sebagai 'otak kedua'?", en: "Why are the intestines often called the 'second brain'?" },
        options: [
          { text: { id: "Karena ada tengkorak kecil di perut", en: "Because there's a small skull in the belly" } },
          { text: { id: "Karena usus pintar berhitung", en: "Because intestines are smart at math" } },
          { text: { id: "Karena punya jutaan saraf yang bisa bekerja sendiri", en: "Because they have millions of nerves that can work on their own" } }
        ],
        answerIdx: 2
      }
    ]
  }
};