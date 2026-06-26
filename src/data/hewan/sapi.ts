import { ObjectData } from "../objects";

export const sapiData: ObjectData = {
  slug: "sapi",
  name: { id: "Sapi", en: "Cow" },
  icon: "🐄", 
  category: "hewan",
  type: "hewan",
  scientificName: "Bos taurus",
  surahName: "Al-Baqarah",
  surahReference: "2:67", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "بَقَرَةٌ", latin: "Baqarah", arti: "Sapi Betina", artiEn: "Cow", contohAyat: "Surah terbesar di Al-Qur'an dinamai Sapi Betina" },
    { arab: "لَبَنٌ", latin: "Laban", arti: "Susu", artiEn: "Milk", contohAyat: "Susu sapi murni yang menyehatkan" },
    { arab: "لَحْمٌ", latin: "Lahm", arti: "Daging", artiEn: "Meat", contohAyat: "Sapi memberi kita daging yang lezat" },
    { arab: "حَرْثٌ", latin: "Harts", arti: "Membajak tanah", artiEn: "Plowing", contohAyat: "Sapi digunakan untuk membajak sawah" }
  ],
  
  balita: {
    text: { id: "Mooooo! Ini sapi! Sapi suka makan rumput yang banyak agar bisa menghasilkan susu yang sehat buat kita! 🐄🥛", en: "Mooooo! This is a cow! Cows love eating lots of grass so they can produce healthy milk for us! 🐄🥛" },
    audioTranscript: { id: "Moooo... Sapi bunyinya moooo. Sapi makan rumput hijau nyam nyam nyam, lalu dia kasih kita susu yang segar! Siapa yang suka minum susu sapi?", en: "Mooo... The cow goes mooo. The cow eats green grass yum yum yum, then she gives us fresh milk! Who likes drinking cow's milk?" },
    quiz: {
      question: { id: "Minuman apa yang dihasilkan sapi untuk kita?", en: "What drink does the cow produce for us?" },
      options: [
        { text: { id: "🥛 Susu", en: "🥛 Milk" } },
        { text: { id: "🧃 Jus Jeruk", en: "🧃 Orange Juice" } },
        { text: { id: "☕ Kopi", en: "☕ Coffee" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Sapi itu hewan yang sangat berjasa buat manusia, dari susu sampai tenaga mereka membajak sawah!", en: "Cows are highly meritorious animals to humans, from their milk to their energy plowing fields!" },
    facts: [
      { id: "Sapi tidak punya gigi seri di bagian atas mulutnya. Mereka merumput dengan melilitkan lidahnya ke rumput.", en: "Cows don't have top front teeth. They graze by wrapping their tongues around grass." },
      { id: "Sapi punya 4 bagian lambung! Makanan dicerna, dimuntahkan, lalu dikunyah lagi.", en: "Cows have 4 stomach compartments! Food is digested, regurgitated, and chewed again." },
      { id: "Mata sapi terletak di samping kepala, jadi mereka bisa melihat hampir 360 derajat di sekitarnya.", en: "Cow's eyes are on the sides of their head, so they can see nearly 360 degrees around." },
      { id: "Sapi bisa mencium bau rumput hijau dari jarak sejauh 8 kilometer!", en: "Cows can smell green grass from up to 8 kilometers away!" },
      { id: "Seekor sapi perah bisa menghasilkan sekitar 200 ribu gelas susu sepanjang hidupnya.", en: "A dairy cow can produce around 200,000 glasses of milk in her lifetime." }
    ],
    quranVerse: {
      arabic: "وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً ۖ نُسْقِيكُمْ مِمَّا فِي بُطُونِهِ مِنْ بَيْنِ فَرْثٍ وَدَمٍ لَبَنًا خَالِصًا سَائِغًا لِلشَّارِبِينَ",
      transliteration: "Wa inna lakum fil-an'aami la'ibrah. Nusqiikum mimmaa fii buthuunihii mim-bayni fartsing-wa damil-labanan khaalisan saa'ighal lisy-syaaribiin.",
      translation: { id: "Dan sesungguhnya pada binatang ternak itu benar-benar terdapat pelajaran bagi kamu. Kami memberimu minum daripada apa yang berada dalam perutnya (berupa) susu yang bersih antara kotoran dan darah, yang mudah ditelan bagi orang-orang yang meminumnya.", en: "And indeed, for you in grazing livestock is a lesson. We give you drink from what is in their bellies - between excretion and blood - pure milk, palatable to drinkers." },
      context: { id: "Tau nggak? Mesin susu ajaib ciptaan Allah ada di perut sapi. Rumput kotor bercampur lumpur dikunyah, lalu di dalam badannya disaring sehingga keluar susu putih bersih yang bergizi tinggi!", en: "Did you know? Allah's magic milk machine is inside a cow's belly. Dirty grass mixed with mud is chewed, then filtered inside its body to produce pure white, highly nutritious milk!" }
    },
    quiz: {
      question: { id: "Sapi mengunyah rumput, menelannya, lalu memuntahkannya kembali untuk dikunyah ulang karena mereka punya...", en: "Cows chew grass, swallow it, then regurgitate it to chew again because they have..." },
      options: [
        { text: { id: "Lambung dengan 4 bagian", en: "A stomach with 4 compartments" } },
        { text: { id: "Gigi palsu", en: "Fake teeth" } },
        { text: { id: "Mesin blender di mulut", en: "A blender in their mouth" } },
        { text: { id: "Dua lidah", en: "Two tongues" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Sapi dan hewan pemamah biak (ruminansia) lainnya adalah keajaiban teknologi bio-kimia. Karena rumput mengandung selulosa kayu yang tidak bisa dicerna oleh manusia, sapi memiliki 'pabrik fermentasi' raksasa di perutnya (rumen) yang berisi milyaran bakteri dan protozoa.\n\nBakteri inilah yang menghancurkan rumput kasar tersebut. Proses ini menghasilkan banyak gas (sapi banyak bersendawa metana). Sapi mengunyah rumput, menelannya, lalu menaikkan lagi makanannya (cud) untuk dikunyah ulang puluhan ribu kali dalam sehari!\n\nNama surah terpanjang di Al-Qur'an (Surah ke-2) adalah Al-Baqarah yang berarti Sapi Betina. Ini merujuk pada mukjizat mencengangkan di zaman Nabi Musa di mana seekor sapi dipukul ke mayat untuk menghidupkannya kembali.", 
      en: "Cows and other ruminants are miracles of bio-chemical technology. Because grass contains woody cellulose indigestible to humans, cows have a giant 'fermentation factory' in their belly (rumen) containing billions of bacteria and protozoa.\n\nThese bacteria break down the coarse grass. This process produces lots of gas (cows burp a lot of methane). Cows chew grass, swallow it, then bring the food back up (cud) to re-chew tens of thousands of times a day!\n\nThe longest surah in the Qur'an (2nd Surah) is Al-Baqarah, meaning The Cow. This refers to an astonishing miracle in Prophet Moses' time where a cow was struck against a corpse to bring it back to life." 
    },
    anatomy: [
      { part: { id: "Rumen", en: "Rumen" }, desc: { id: "Bagian lambung pertama dan terbesar (bisa memuat 150 liter!), berfungsi sebagai tong fermentasi raksasa.", en: "The first and largest stomach compartment (holding 150 liters!), acting as a giant fermentation vat." } },
      { part: { id: "Ambing (Kelenjar Susu)", en: "Udder" }, desc: { id: "Pabrik susu biologis tempat darah mensuplai nutrisi yang diubah menjadi susu murni.", en: "A biological milk factory where blood supplies nutrients that are transformed into pure milk." } }
    ],
    wowFactor: { 
      id: "Fakta WOW mencengangkan: Surah An-Nahl ayat 66 menyebutkan bahwa susu sapi keluar dari 'ANTARA KOTORAN (Farts) DAN DARAH (Dam)'. Sains mikrobiologi modern membongkar rahasia anatomi sapi ini.\n\nDalam proses memproduksi susu, makanan yang sudah difermentasi menjadi bubur (Farts / isi usus kotor) diserap nutrisinya oleh miliaran pembuluh Darah (Dam) di sekitar usus. Darah tersebut kemudian mengalir membawa nutrisi menuju ambing susu (kelenjar mammae). Di ambing itulah, sel sekretori menyaring darah dari sel darah merah dan merakitnya menjadi cairan susu putih (Laban). Susu yang sangat suci putih bersih ini, secara harfiah, diproses berbatasan tipis persis di ANTARA sistem pencernaan kotoran sapi dan aliran darah merahnya! Fakta anatomi super presisi ini tertulis 1400 tahun lalu!", 
      en: "Astonishing WOW Fact: Surah An-Nahl verse 66 states that cow's milk comes from 'BETWEEN EXCRETION (Farts) AND BLOOD (Dam)'. Modern microbiological science unpacked this cow's anatomical secret.\n\nIn the milk production process, fermented food turned into mush (Farts / dirty gut contents) has its nutrients absorbed by billions of Blood (Dam) vessels around the intestines. The blood then flows carrying nutrients to the udder (mammary glands). In the udder, secretory cells filter out red blood cells and assemble the fluid into white milk (Laban). This extremely pure white milk is, literally, processed thinly BETWEEN the cow's dirty digestive system and its red blood flow! This super precise anatomical fact was written 1400 years ago!" 
    },
    quranVerse: {
      arabic: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً",
      transliteration: "Wa idz qaala muusaa liqawmihii innal-laaha ya'murukum an tadzbahuu baqarah.",
      translation: { id: "Dan (ingatlah), ketika Musa berkata kepada kaumnya: 'Sesungguhnya Allah menyuruh kamu menyembelih seekor sapi betina.'", en: "And [recall] when Moses said to his people, 'Indeed, Allah commands you to slaughter a cow.'" }
    },
    quiz: [
      {
        question: { id: "Susu sapi dalam Al-Qur'an dan sains secara menakjubkan diproses di antara dua hal berkat filter biologis tubuhnya, yaitu di antara...", en: "Cow's milk in the Qur'an and science is astonishingly processed between two things thanks to its body's biological filter, namely between..." },
        options: [{ text: { id: "Kotoran isi usus dan aliran darah", en: "Intestinal excretion and blood flow" } }, { text: { id: "Air ludah dan asam lambung", en: "Saliva and stomach acid" } }, { text: { id: "Daging dan tulang", en: "Meat and bone" } }, { text: { id: "Kulit dan otot", en: "Skin and muscle" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa nama Surah terpanjang di Al-Qur'an yang memiliki arti Sapi Betina?", en: "What is the name of the longest Surah in the Qur'an which means The Cow?" },
        options: [{ text: { id: "Al-Baqarah", en: "Al-Baqarah" } }, { text: { id: "Al-Ma'idah", en: "Al-Ma'idah" } }, { text: { id: "An-Naml", en: "An-Naml" } }, { text: { id: "Al-Kahfi", en: "Al-Kahf" } }],
        answerIdx: 0
      },
      {
        question: { id: "Nama bagian lambung sapi yang terbesar untuk memfermentasi rumput keras adalah...", en: "The name of the largest stomach part of a cow to ferment tough grass is..." },
        options: [{ text: { id: "Rumen", en: "Rumen" } }, { text: { id: "Hati", en: "Liver" } }, { text: { id: "Usus buntu", en: "Appendix" } }, { text: { id: "Pankreas", en: "Pancreas" } }],
        answerIdx: 0
      }
    ]
  }
};
