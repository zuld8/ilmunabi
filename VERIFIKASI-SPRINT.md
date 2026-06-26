# Verifikasi "Mega Sprint Phase 3" — 27 Juni 2026

Dicek langsung dari data & git, dibandingkan dengan klaim di laporan. Kesimpulan singkat: **ada progres nyata, tapi beberapa klaim utama tidak akurat. Jangan publish/anggap selesai dulu.**

## Tabel klaim vs realita

| Klaim di laporan | Realita (terverifikasi) | Status |
|---|---|---|
| "169 Objek Sains Premium" | 118 objek sains terdaftar; **hanya 42 berisi konten nyata, 76 sisanya masih STUB kosong** | ❌ Salah |
| "25 Nabi" | 35 entri di `nabiObjects` — **10 nabi dobel** (Adam, Idris, Nuh, Hud, Shaleh, Ibrahim, Luth, Ismail, Ishaq, Yaqub muncul 2x) | ❌ Salah |
| "0 Kloning / sudah disatukan" | 6 planet dobel: ada stub kosong (`jupiter`) **dan** kembarannya berkonten (`jupiter-raksasa-dekat`), keduanya live | ❌ Salah |
| "Penamaan standar / slug indah" | Masih ada slug clone jelek: `jupiter-raksasa-dekat`, `mars-merah-dekat`, `merkurius-terdekat-dekat`, dll | ❌ Salah |
| "0 File Orphan" | Masih ada orphan: `hewan/babi`, `hewan/anjing`, `hewan/anjing-ashabul-kahfi`, `nabi/shaleh-as`, `nabi/yaqub-as` | ⚠️ Sebagian |
| "99 Asmaul Husna dilindungi TODO ustadz" | Hanya **10 dari 100** file yang punya komentar `REVIEW USTADZ` | ❌ Salah |
| "npm run build sukses 100% / kompilasi tanpa cacat" | Versi **yang di-commit** memang lolos tsc (0 error). TAPI **working tree lokal rusak total: 320.932 error** | ⚠️ Menyesatkan |
| "Semua sudah di-commit & push ke main" | **133 file lokal belum di-commit** dan dalam keadaan rusak (lihat di bawah) | ❌ Salah |

## Yang BENAR / kabar baik

- Konten sensitif aman: `anjing-ashabul-kahfi` **sudah dikeluarkan** dari index (tidak live). 👍
- 25 kisah Nabi punya konten ID yang spesifik, dan tiap nabi sudah punya komentar `REVIEW USTADZ`.
- 42 objek sains memang berkualitas asli (18 lama + tambahan baru: serangga seperti belalang/capung/kupu-kupu, dan astronomi seperti supernova/nebula/lubang hitam).
- File clone varian wilayah (`-tropis`/`-kutub` lama) sudah hilang. 👍

## Masalah PALING SERIUS — korupsi file lokal

133 file `.ts` di working tree lokal **dipenuhi null byte (`\x00`)** di akhir file. Contoh `alam/air.ts`: 4.128 byte konten asli + ~6.240 byte null. Akibatnya:

- `tsc` menghasilkan **320.932 error** ("Invalid character") → proyek **tidak bisa di-build di lokal**.
- Perubahan ini **belum di-commit**, jadi tidak ikut ter-push (yang di GitHub masih versi lama yang lolos build).
- Setelah null di-strip, isinya **sama persis** dengan versi commit (4.128 byte) — artinya korupsi ini **tidak menambah konten apa pun**, murni sampah dari proses tulis yang gagal.

**Rekomendasi**: buang perubahan lokal yang rusak ini — `git checkout -- src/data/` (atau `git restore src/data/`) — agar kembali ke versi commit yang bersih. JANGAN commit working tree saat ini.

## Stub kosong yang harus ditulis ulang (76 objek)

Ironisnya yang masih kosong justru objek-objek **flagship Qur'an**: `lebah` (An-Nahl!), `semut`, `unta`, `air`, `api`, `matahari`, `bulan`, `otak`, `kurma`, `tin`, `zaitun`, `delima`, `gandum`, `sapi`, `ular`, `paus`, dll. Isinya placeholder literal: `wowFactor: "Amazing fact!"`, `quiz: "Question?"`, `anatomy: "Part"`, `facts: []` kosong.

## Angka sebenarnya

Total terdaftar: **253 objek** (hewan 29, tumbuhan 20, alam 20, tubuh 20, nabi 35, asmaul-husna 100, langit 29).
Yang benar-benar layak: **~42 sains + 100 asmaul-husna + 25 nabi (perlu review)** ≈ **167** — sisanya stub/dobel.

## Langkah perbaikan (urut)

1. **Pulihkan working tree**: `git restore src/data/` untuk buang 133 file rusak.
2. **Hapus duplikat**: keluarkan 10 import nabi `*-as` dan 6 planet stub (atau gabungkan ke 1 versi berkonten dengan slug bersih).
3. **Hapus/daftarkan orphan**: `babi`, `anjing`, `anjing-ashabul-kahfi` (sembunyikan—konten sensitif), `shaleh-as`, `yaqub-as`.
4. **Tulis ulang 76 stub** pakai standar 42 objek asli (terutama flagship: lebah, semut, unta, kurma, tin, zaitun).
5. **Tambah TODO ustadz** ke 90 Asmaul Husna sisanya kalau memang mau dilindungi semua.
6. Jalankan `npx tsc --noEmit` → pastikan 0 error → baru commit & push.
