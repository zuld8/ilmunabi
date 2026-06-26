import { ObjectData } from "../objects";

export const ularData: ObjectData = {
  slug: "ular",
  name: { id: "Ular", en: "Snake" },
  icon: "🐍",
  category: "reptil",
  type: "hewan",
  scientificName: "Serpentes",
  surahName: "Taha",
  surahReference: "20:20",
  unlockedAtPoints: 85,
  kosakata: [
    { arab: "حَيَّة", latin: "Hayyah", arti: "Ular", artiEn: "Snake", contohAyat: "Maka dilemparkannya tongkat itu, maka tiba-tiba ia menjadi seekor ular yang merayap dengan cepat." }
  ],
  balita: {
    text: { id: "Sssss! Halo, aku ular yang tidak punya kaki! Aku merayap meliuk-liuk di atas tanah. Sss! 🐍", en: "Sssss! Hello, I am a snake with no legs! I slither and wiggle on the ground. Sss! 🐍" },
    audioTranscript: { id: "Sss! Lihatlah lidahku yang menjulur keluar. Aku sedang mencium bau, lho!", en: "Sss! Look at my tongue sticking out. I am smelling things, you know!" },
    quiz: {
      question: { id: "Bagaimana cara ular berjalan memindahkan badannya?", en: "How does a snake move its body?" },
      options: [
        { text: { id: "Melompat", en: "Jumping" } },
        { text: { id: "Merayap (meliuk)", en: "Slithering (wiggling)" } },
        { text: { id: "Terbang", en: "Flying" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Ular adalah hewan yang merayap dengan perutnya. Allah memberikan ular kekuatan luar biasa. Di masa lalu, tongkat Nabi Musa AS diubah oleh Allah menjadi ular sungguhan untuk mengalahkan sihir Fir'aun!", en: "Snakes are animals that slither on their bellies. Allah gave snakes extraordinary strength. In the past, Prophet Musa AS's staff was turned by Allah into a real snake to defeat Pharaoh's magic!" },
    facts: [
      { id: "Ular menjulurkan lidah bercabangnya untuk menangkap partikel bau di udara.", en: "Snakes stick out their forked tongues to catch smell particles in the air." },
      { id: "Ular mengganti kulit lama mereka (moulting) agar bisa tumbuh lebih besar.", en: "Snakes shed their old skin (moulting) so they can grow bigger." },
      { id: "Ular tidak punya kelopak mata, sehingga mereka tidak pernah menutup matanya!", en: "Snakes don't have eyelids, so they never close their eyes!" }
    ],
    quranVerse: {
      arabic: "فَأَلْقَاهَا فَإِذَا هِيَ حَيَّةٌ تَسْعَىٰ",
      transliteration: "Fa-alqaha fa-idha hiya hayyatun tas'a.",
      translation: { id: "Maka dilemparkannya tongkat itu, maka tiba-tiba ia menjadi seekor ular yang merayap dengan cepat.", en: "So he threw it down, and thereupon it was a snake, moving swiftly." },
      context: { id: "Mukjizat tongkat Nabi Musa AS yang berubah menjadi ular di Gunung Sinai.", en: "The miracle of Prophet Musa AS's staff turning into a snake at Mount Sinai." }
    },
    quiz: {
      question: { id: "Tongkat Nabi siapa yang pernah berubah menjadi ular raksasa?", en: "Whose Prophet's staff once turned into a giant snake?" },
      options: [
        { text: { id: "Nabi Nuh AS", en: "Prophet Nuh AS" } },
        { text: { id: "Nabi Musa AS", en: "Prophet Musa AS" } },
        { text: { id: "Nabi Adam AS", en: "Prophet Adam AS" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Rahang ular sungguh ajaib! Karena diciptakan tanpa tangan, Allah memberi ular tulang rahang yang sangat elastis. Mereka bisa melepaskan engsel rahang bawahnya untuk menelan mangsa yang jauh lebih besar dari ukuran kepala mereka sendiri. Masya Allah!", en: "A snake's jaw is truly magical! Because they were created without hands, Allah gave snakes highly elastic jawbones. They can unhinge their lower jaws to swallow prey much larger than the size of their own head. Masya Allah!" },
    anatomy: [
      { part: { id: "Organ Jacobson", en: "Jacobson's Organ" }, desc: { id: "Organ pendeteksi bau super sensitif di langit-langit mulut ular, bekerja sama dengan lidah.", en: "A super sensitive smell-detecting organ on the roof of the snake's mouth, working with the tongue." } },
      { part: { id: "Sisik Perut (Scutes)", en: "Ventral Scales (Scutes)" }, desc: { id: "Sisik tebal di bagian bawah yang mencengkeram tanah dan mendorong ular ke depan.", en: "Thick scales on the belly that grip the ground and push the snake forward." } }
    ],
    wowFactor: { id: "Beberapa ular piton punya 'pit organ' di wajahnya, semacam kamera infra-merah alami! Mereka bisa melihat panas tubuh mangsanya di dalam kegelapan malam dengan sangat jelas!", en: "Some pythons have 'pit organs' on their faces, a kind of natural infrared camera! They can see the body heat of their prey in the dark of night very clearly!" },
    quranVerse: {
      arabic: "وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِنْ مَاءٍ ۖ فَمِنْهُمْ مَنْ يَمْشِي عَلَىٰ بَطْنِهِ",
      transliteration: "Wallahu khalaqa kulla dabbatin min ma', faminhum man yamshi 'ala batnih.",
      translation: { id: "Dan Allah telah menciptakan semua jenis hewan dari air, maka sebagian dari hewan itu ada yang berjalan di atas perutnya...", en: "Allah has created every [living] creature from water. And of them are those that move on their bellies..." }
    },
    quiz: [
      {
        question: { id: "Bagaimana cara ular bisa menelan makanan yang sangat besar utuh-utuh?", en: "How can snakes swallow very large food whole?" },
        options: [
          { text: { id: "Perut mereka robek lalu menyambung lagi", en: "Their stomachs tear and then reattach" } },
          { text: { id: "Mereka bisa melepaskan engsel rahang bawahnya agar mulutnya terbuka sangat lebar", en: "They can unhinge their lower jaws so their mouths open very wide" } },
          { text: { id: "Mereka mengunyahnya ribuan kali", en: "They chew it thousands of times" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
