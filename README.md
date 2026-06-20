# Portofolio Dadan Hamdani — Versi React + Tailwind

Redesain interaktif dari portofolio asli. Semua isi konten (teks, data, proyek, pengalaman) **tidak diubah sama sekali** — hanya tampilan & interaksinya yang didesain ulang menggunakan React, Tailwind CSS, dan Framer Motion.

## Yang baru dibanding versi HTML asli

- **"Welcome Portofolio"** + foto profil bulat muncul di paling atas halaman Hero.
- **DataField** — jaringan titik data interaktif di latar Hero yang bergerak mengikuti kursor/sentuhan (efek "buliran" yang diminta), merepresentasikan dunia data science (titik data yang saling terhubung).
- Animasi *scroll-reveal* halus di setiap section menggunakan Framer Motion.
- Navbar responsif dengan menu mobile (hamburger).
- Tab pengalaman kerja yang bisa digeser di mobile.
- Sepenuhnya **responsif**: mobile, tablet, desktop.
- Menghormati preferensi `prefers-reduced-motion` (animasi otomatis nonaktif untuk pengguna yang sensitif terhadap gerakan).

## Cara menjalankan di komputer sendiri

Pastikan Node.js (versi 18 atau lebih baru) sudah terinstal.

```bash
npm install
npm run dev
```

Buka browser ke alamat yang muncul (biasanya `http://localhost:5173`).

## Cara build untuk hosting (production)

```bash
npm run build
```

Hasilnya ada di folder `dist/` — folder ini yang diupload ke hosting (Vercel, Netlify, GitHub Pages, dll).

## Cara mengganti foto profil

1. Siapkan foto persegi (disarankan minimal 400x400px), format `.jpg`.
2. Beri nama file tersebut **`profile.jpg`**.
3. Letakkan di folder `public/images/profile.jpg`.
4. Jalankan ulang `npm run dev` — foto otomatis muncul di halaman Hero.

Jika foto belum ada, halaman akan otomatis menampilkan inisial **"DH"** sebagai placeholder, jadi halaman tetap rapi meski foto belum diupload.

## Struktur folder penting

```
src/
  data/content.js       <- SEMUA teks portofolio (edit di sini kalau ada update info)
  components/            <- setiap section adalah satu file (Hero, About, Skills, dst)
public/images/           <- tempat foto profil
```

Jika ingin mengubah teks (misalnya update GPA, menambah sertifikasi baru, dll), cukup edit file `src/data/content.js` -- tidak perlu menyentuh komponen lain.

## Stack teknologi

- React 19 + Vite 5
- Tailwind CSS 3
- Framer Motion (animasi)
- Lucide React (ikon)
