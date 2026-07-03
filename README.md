# MTsN 1 Probolinggo — School Digital Platform

Website resmi & platform digital **MTsN 1 Probolinggo** dengan konsep desain
**Modern Islamic Education** — modern, minimalis, elegan, premium, dan bernuansa
akademik-islami. Dibangun dengan Next.js App Router, TypeScript, Tailwind CSS,
dan Framer Motion.

> **Visi:** Terwujudnya insan yang cerdas intelektual, matang spiritual, dan
> siap berkontribusi bagi masyarakat.

---

## ✨ Fitur Utama

### Sudah tersedia (frontend, production-ready)

- **Landing page premium** — hero fullscreen (siap video), statistik animated
  counter, visi-misi, sambutan kepala madrasah, preview guru, prestasi, & berita.
- **Profil Madrasah** — visi & misi, timeline sejarah, nilai & budaya.
- **Direktori Guru** — kartu premium dengan _search_, filter kategori, & paginasi.
- **Prestasi** — galeri prestasi dengan filter kategori (akademik, robotik,
  olimpiade, keagamaan, olahraga, pramuka, PMR, dll).
- **Berita** — daftar berita dengan _search_, filter, tag, & artikel _featured_.
- **Ekstrakurikuler** — kartu ekskul lengkap (pembina, jadwal, prestasi) + filter.
- **Galeri** — masonry gallery dengan _lightbox_ & filter kategori.
- **PPDB Online** — formulir multi-langkah dengan _progress bar_, upload dokumen,
  & tampilan nomor pendaftaran + QR (demo).
- **Kontak** — form kontak, Google Maps embed, & tautan media sosial.
- **AI Assistant** — chat widget dengan basis pengetahuan sekolah, _voice input_
  (Web Speech API) & _text-to-speech_. Mudah di-upgrade ke LLM sungguhan.
- **UX premium** — dark mode, Command Palette (`Ctrl/⌘ + K`), scroll progress,
  back-to-top, floating WhatsApp, skip-link a11y, reduced-motion, custom 404/500,
  loading screen.
- **SEO & PWA** — metadata lengkap, Open Graph, `sitemap.xml`, `robots.txt`,
  Web App Manifest, security headers.

### Roadmap (butuh backend & autentikasi)

Fitur berikut disiapkan pada level UI/arsitektur dan menjadi tahap lanjutan
(memerlukan backend seperti Supabase/Firebase + PostgreSQL, autentikasi, & RBAC):

- Dashboard **Admin / Guru / Siswa / Orang Tua** (RBAC, analytics, CRUD, audit log).
- **E-Learning** (materi, quiz, tugas, nilai, forum) & **Perpustakaan Digital**.
- **Kalender akademik** interaktif, **jadwal pelajaran** dinamis, **rapor digital**.
- **CMS berita**, komentar, bookmark, & notifikasi.
- Autentikasi **JWT/2FA**, rate limiter, backup otomatis, integrasi email/OTP PPDB.
- **AI Assistant** berbasis LLM (mis. Claude) via route handler `/api/assistant`.

---

## 🛠️ Teknologi

| Kategori    | Teknologi                                             |
| ----------- | ----------------------------------------------------- |
| Framework   | Next.js 14 (App Router), React 18                     |
| Bahasa      | TypeScript                                            |
| Styling     | Tailwind CSS + design tokens (CSS variables)          |
| Animasi     | Framer Motion                                         |
| Ikon        | Lucide React                                          |
| Tema        | next-themes (light/dark)                              |
| Font        | Plus Jakarta Sans (sans) + Fraunces (display)         |

Palet warna: **Hijau Emerald** (dominan), **Putih**, **Abu muda**, aksen
**Gold**, dan sentuhan **Biru lembut** — dengan glassmorphism ringan, soft
shadow, rounded corner, dan whitespace yang luas.

---

## 🚀 Menjalankan Proyek

```bash
# 1. Install dependencies
npm install

# 2. Jalankan mode pengembangan
npm run dev
# buka http://localhost:3000

# 3. Build produksi
npm run build && npm run start
```

Butuh Node.js 18.17+ (disarankan 20/22 LTS).

---

## 📁 Struktur Folder

```
.
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout, font, metadata, chrome global
│   ├── page.tsx              # Landing page
│   ├── profil/               # Profil madrasah
│   ├── guru/                 # Direktori guru
│   ├── prestasi/             # Prestasi
│   ├── berita/               # Berita
│   ├── ekstrakurikuler/      # Ekstrakurikuler
│   ├── galeri/               # Galeri
│   ├── ppdb/                 # PPDB online
│   ├── kontak/               # Kontak
│   ├── manifest.ts           # PWA manifest
│   ├── sitemap.ts / robots.ts
│   ├── not-found.tsx / error.tsx / loading.tsx
│   └── globals.css           # Design tokens & utilities
├── components/
│   ├── ai/                   # AI Assistant widget
│   ├── cards/                # Kartu guru, prestasi, berita
│   ├── layout/               # Navbar, footer, command palette, FAB, dll
│   ├── providers/            # Theme provider
│   ├── sections/             # Section landing & direktori interaktif
│   └── ui/                   # Primitif: button, badge, card, counter, reveal
└── lib/
    ├── site.ts               # Konfigurasi & identitas sekolah
    ├── utils.ts              # Helper (cn, formatDate, slugify)
    ├── ai-knowledge.ts       # Basis pengetahuan asisten (rule-based)
    └── data/                 # Data konten (mock, siap diganti API)
```

Seluruh konten teks/gambar berada di `lib/data/*` dan `lib/site.ts` sehingga
mudah diganti dengan data dari CMS/backend tanpa mengubah komponen.

---

## 🎨 Kustomisasi

- **Identitas sekolah** (nama, alamat, sosial, visi-misi): `lib/site.ts`.
- **Warna & radius**: variabel CSS di `app/globals.css` + `tailwind.config.ts`.
- **Konten**: file pada `lib/data/` (teachers, achievements, news, dll).
- **Video hero**: ganti layer background di `components/sections/hero.tsx`
  dengan elemen `<video autoPlay muted loop>`.

---

## ☁️ Deploy

Optimal di **Vercel** (nol konfigurasi):

```bash
# push ke GitHub, lalu import repo di vercel.com
```

Atau VPS/Node server:

```bash
npm run build
npm run start   # default port 3000
```

---

## 📌 Catatan

Data yang ditampilkan saat ini bersifat **contoh (mock)** untuk keperluan
demo tampilan. Ganti dengan data resmi madrasah dan hubungkan ke backend
sebelum digunakan secara publik. Gambar menggunakan Unsplash & pravatar
sebagai _placeholder_.

---

_Dibuat dengan ♥ untuk pendidikan yang lebih baik._
