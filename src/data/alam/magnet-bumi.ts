import { ObjectData } from "../objects";

export const magnetBumiData: ObjectData = {
  slug: "magnet-bumi",
  name: { id: "Medan Magnet Bumi", en: "Earth's Magnetic Field" },
  icon: "🧲",
  category: "alam",
  type: "alam",
  scientificName: "Geomagnetosphere",
  surahName: "Al-Anbiya",
  surahReference: "Al-Anbiya:32",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "مِغْنَاطِيسٌ", latin: "Mignatis", arti: "Magnet", artiEn: "Magnet" },
    { arab: "حِمَايَةٌ", latin: "Himayah", arti: "Perlindungan", artiEn: "Protection" },
    { arab: "سَمَاءٌ", latin: "Samaa'", arti: "Langit", artiEn: "Sky" },
    { arab: "أَرْضٌ", latin: "Ardhun", arti: "Bumi", artiEn: "Earth" }
  ],
  balita: {
    text: { id: "Bumi kita seperti punya tameng ajaib yang tidak kelihatan! Tameng ini bernama medan magnet. Tameng ini melindungi kita dari sinar berbahaya. Allah Maha Hebat menciptakan tameng ini!", en: "Our Earth has an invisible magic shield! This shield is called a magnetic field. It protects us from harmful rays. Allah is Most Great for creating this shield!" },
    audioTranscript: { id: "Bumi memiliki pelindung tak terlihat seperti magnet raksasa.", en: "Earth has an invisible protector like a giant magnet." },
    quiz: {
      question: { id: "Tameng tidak kelihatan di bumi terbuat dari apa?", en: "What is the invisible shield on earth made of?" },
      options: [
        { text: { id: "Es", en: "Ice" } },
        { text: { id: "Batu", en: "Stone" } },
        { text: { id: "Magnet", en: "Magnet" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Medan magnet bumi berasal dari inti bumi yang sangat panas dan berputar. Medan ini bertindak seperti perisai yang melindungi kita dari angin matahari. Allah menyebutkan dalam Al-Qur'an bahwa langit diciptakan sebagai 'atap yang terpelihara'. Masya Allah, sains membuktikan hal itu!", en: "The Earth's magnetic field comes from the very hot, spinning core of the Earth. It acts like a shield protecting us from the solar wind. Allah mentions in the Quran that the sky is a 'well-protected roof'. Masya Allah, science proves it!" },
    facts: [
      { id: "Medan magnet bumi memiliki dua kutub: Utara dan Selatan.", en: "The Earth's magnetic field has two poles: North and South." },
      { id: "Burung menggunakan medan magnet bumi untuk navigasi saat terbang jauh.", en: "Birds use the Earth's magnetic field to navigate when flying far." },
      { id: "Kompas bekerja karena adanya medan magnet bumi.", en: "A compass works because of the Earth's magnetic field." },
      { id: "Inti luar bumi yang berupa besi cair adalah sumber magnet ini.", en: "The Earth's outer core of liquid iron is the source of this magnet." },
      { id: "Tanpa medan magnet, atmosfer kita bisa tersapu angin matahari.", en: "Without a magnetic field, our atmosphere could be swept away by solar winds." }
    ],
    quranVerse: {
      arabic: "وَجَعَلْنَا ٱلسَّمَآءَ سَقْفًا مَّحْفُوظًا ۖ وَهُمْ عَنْ ءَايَٰتِهَا مُعْرِضُونَ",
      transliteration: "Wa ja'alnas-samaaa'a saqfam mahfuuthaa, wa hum 'an aayaatihaa mu'ridhuun",
      translation: { id: "Dan Kami menjadikan langit itu sebagai atap yang terpelihara, sedang mereka berpaling dari segala tanda-tanda (kekuasaan Allah) yang terdapat padanya.", en: "And We made the sky a protected ceiling, but they, from its signs, are turning away." }
    },
    quiz: {
      question: { id: "Hewan apa yang bisa merasakan medan magnet bumi untuk mencari jalan?", en: "What animal can feel the earth's magnetic field to find its way?" },
      options: [
        { text: { id: "Burung", en: "Bird" } },
        { text: { id: "Cacing", en: "Worm" } },
        { text: { id: "Katak", en: "Frog" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Bumi adalah dinamo raksasa! Pergerakan logam cair di inti luar bumi menghasilkan medan magnet kuat (Geodinamo) yang melingkupi planet ini. Radiasi kosmik dan angin matahari yang mematikan akan menghancurkan kehidupan jika bukan karena perisai ini. Subhanallah, 14 abad silam Al-Qur'an menyebut langit sebagai 'saqfan mahfuuzhan' (atap yang terpelihara/memelihara) jauh sebelum kita tahu tentang eksistensi magnetosfer!", en: "Earth is a giant dynamo! The movement of liquid metal in the outer core generates a strong magnetic field (Geodynamo) enveloping the planet. Deadly cosmic radiation and solar winds would destroy life if not for this shield. Subhanallah, 14 centuries ago the Quran called the sky 'saqfan mahfuuzhan' (a protected/protecting roof) long before we knew about the magnetosphere!" },
    anatomy: [
      { part: { id: "Inti Luar Bumi", en: "Outer Core" }, desc: { id: "Besi dan nikel cair bersuhu sangat tinggi yang terus berputar.", en: "Liquid iron and nickel at extremely high temperatures that keep spinning." } },
      { part: { id: "Kutub Magnetik", en: "Magnetic Poles" }, desc: { id: "Titik di mana garis gaya magnet bumi masuk dan keluar.", en: "Points where the earth's magnetic field lines enter and exit." } }
    ],
    wowFactor: { id: "Hah?! Kutub magnet bumi bisa terbalik (Selatan jadi Utara dan sebaliknya)! Proses ini disebut pembalikan geomagnetik, dan terakhir terjadi sekitar 780.000 tahun yang lalu!", en: "What?! The earth's magnetic poles can flip (South becomes North and vice versa)! This process is called geomagnetic reversal, and it last happened about 780,000 years ago!" },
    quranVerse: {
      arabic: "وَجَعَلْنَا ٱلسَّمَآءَ سَقْفًا مَّحْفُوظًا",
      transliteration: "Wa ja'alnas-samaaa'a saqfam mahfuuthaa",
      translation: { id: "Dan Kami menjadikan langit itu sebagai atap yang terpelihara.", en: "And We made the sky a protected ceiling." }
    },
    quiz: [
      {
        question: { id: "Apa penyebab utama terbentuknya medan magnet bumi?", en: "What is the main cause of the earth's magnetic field?" },
        options: [
          { text: { id: "Rotasi logam cair di inti bumi", en: "Rotation of liquid metal in the earth's core" } },
          { text: { id: "Sinar matahari", en: "Sunlight" } },
          { text: { id: "Tarikan bulan", en: "Moon's pull" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Dalam surat Al-Anbiya ayat 32, langit disebut sebagai?", en: "In Surah Al-Anbiya verse 32, the sky is called?" },
        options: [
          { text: { id: "Tempat berkumpul", en: "Gathering place" } },
          { text: { id: "Atap yang terpelihara", en: "Protected ceiling" } },
          { text: { id: "Hamparan luas", en: "Vast expanse" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa nama alat yang menggunakan medan magnet bumi untuk menunjukkan arah?", en: "What is the name of the tool that uses the earth's magnetic field to show direction?" },
        options: [
          { text: { id: "Termometer", en: "Thermometer" } },
          { text: { id: "Barometer", en: "Barometer" } },
          { text: { id: "Kompas", en: "Compass" } }
        ],
        answerIdx: 2
      }
    ]
  }
};
