# Prompt Tugas: Rapihin Konten IlmuNabi

> Copy seluruh isi di bawah garis ini dan kirim ke teman / AI agent (Claude Code, Cursor, dll). Sudah self-contained.

---

## Konteks

IlmuNabi = platform edukasi anak Muslim (Next.js 14 + Tailwind + Supabase). Konsep: **sains dulu bikin anak takjub, baru koneksi ke Al-Qur'an secara natural**. Live di https://ilmunabi.vercel.app, repo `github.com/zuld8/ilmunabi` (branch `main`).

Konten ada di `src/data/`, satu objek per file `.ts`, di-aggregate lewat `index.ts` tiap kategori, lalu digabung di `src/data/objects.ts`. Interface ada di `src/data/objects.types.ts` — **JANGAN ubah interface ini**, semua komponen React bergantung padanya.

## Masalah (hasil audit 27 Juni 2026)

Konten sekarang **menipu**: kelihatan "terisi" padahal mayoritas boilerplate auto-generate. Faktanya:

- **1.895 file objek di disk, tapi hanya 1.034 yang terdaftar di index** → 861 file orphan tak terpakai (bloat repo).
- Dari 910 objek sains terdaftar, **892 (98%) boilerplate template**, cuma **18 yang asli berkualitas**.
- **352 objek = klon padding** pakai sufiks `-tropis`, `-kutub`, `-pegunungan`, `-rawa`, `-hutan` (nama ilmiah ngawur tipe `Canis lupus var. tropis`).
- Ada nama nonsens: `"Tangan kanan Kanan"`, `"Kulit Luar Kanan"`.
- Terjemahan EN sering tidak jalan (`en` == `id`), termasuk **semua 25 Nabi**.
- Ayat di objek template generik, bukan ayat spesifik topik.

## Tugas — kerjakan berurutan

### FASE 1 — Bersih-bersih (lakukan dulu, cepat & berdampak besar)

1. **Hapus 352 klon varian wilayah.** Semua file & entri index dengan slug berakhiran `-tropis`, `-kutub`, `-pegunungan`, `-rawa`, `-hutan`, dan sufiks varian sejenis. Hapus file `.ts`-nya DAN baris import + baris array di `index.ts` kategori terkait.
2. **Hapus 861 file orphan** (file `.ts` yang tidak di-import di `index.ts` mana pun). Pakai script untuk mendeteksi: bandingkan daftar file di disk vs slug yang di-import. Sebelum hapus, cek dulu — beberapa orphan justru objek "asli" penting (`anjing`, `air`, `api`, `bambu`); kalau ternyata bagus, **daftarkan ke index** alih-alih dihapus.
3. Setelah bersih, jalankan `npm run build` → pastikan tidak ada import error (file yang dihapus tidak boleh masih di-import).

### FASE 2 — Amankan konten sensitif

4. **Unpublish/sembunyikan `anjing-ashabul-kahfi` + semua variannya** sampai direview ustadz. Jangan publish konten Anjing & Nabi tanpa review ustadz dulu (sesuai aturan project).

### FASE 3 — Tulis ulang konten (yang berat)

5. **Tetapkan target jujur**: misal 150–300 objek BERKUALITAS, bukan 1.000+ objek kosong. Lebih baik sedikit tapi WOW.
6. **Tulis ulang objek boilerplate dari nol.** Pakai 18 objek asli ini sebagai standar acuan (baca dulu sebelum nulis):
   `tubuh/jantung`, `tubuh/mata`, `tubuh/telinga`, `alam/aurora`, `alam/ozon`, `alam/atmosfer`, `alam/gravitasi`, `alam/magnetosfer`, `alam/getaran-seismik`, `alam/ionosfer`, `alam/angin-matahari`, `alam/gelombang-laut`, `alam/magnet-bumi`, `hewan/burung-hudhud`, `hewan/burung-gagak`, `hewan/ulat-sutra`, `tumbuhan/bawang-putih`, `langit/nebula-orion`.
7. **Perbaiki terjemahan EN** — field `en` harus betul-betul bahasa Inggris, bukan menyalin `id`. Berlaku juga untuk **25 Nabi** (sekarang 100% EN belum diterjemahkan) dan `characterTraits` Nabi yang masih tipis (tambah jadi minimal 3 sifat).
8. **Verifikasi harakat Asmaul Husna** (99 objek, paling siap) oleh native speaker Arab — kerjakan paling akhir.

## Prinsip konten (WAJIB diikuti tiap objek)

1. Bahasa anak, bukan bahasa buku pelajaran.
2. Sains dulu — fakta mengagumkan, baru koneksi Islam.
3. Minimal 1 **fakta WOW** yang bikin anak "HAH?!".
4. Kuis pemahaman, bukan hafalan nama latin/nomor ayat.
5. Koneksi Islam **natural & spesifik** — ayat harus relevan dgn topik (mis. lebah → An-Nahl 16:68-69, BUKAN ayat generik). Pola: *"1400 tahun lalu Al-Qur'an sudah menyebut ini, padahal ilmuwan baru tahu tahun ..."*.
6. Tiap objek punya 3 zona: Balita (2-5), Anak (6-8), Explorer (9-12) — lihat struktur di interface `ObjectData`.
7. `scientificName` harus nama ilmiah BENAR (bukan `var. tropis` dsb).

## Aturan keras

- JANGAN ubah `src/data/objects.types.ts`.
- JANGAN publish Anjing, Babi, atau konten Nabi tanpa review ustadz.
- JANGAN pakai generator boilerplate yang lama — itu sumber masalahnya.
- Setiap selesai satu kategori: jalankan `npm run build`, pastikan lolos, baru commit.

## Selesai bila

`npm run build` lolos, tidak ada objek boilerplate/klon tersisa, EN benar-benar diterjemahkan, konten sensitif aman, dan tiap objek live memenuhi 7 prinsip di atas.
