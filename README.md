# Nimbus — Hosting Bot Premium

Landing page & katalog layanan untuk jasa **Hosting Bot Premium** (Node.js & Python),
dibangun sebagai produk SaaS modern: cepat, aksesibel, dan siap SEO. Semua transaksi
diarahkan langsung ke admin via WhatsApp — tanpa payment gateway.

Fokus pasar: developer & komunitas yang menjalankan bot **Discord, WhatsApp, dan
Telegram** 24 jam nonstop.

## ✨ Fitur

- **Hero** dengan ilustrasi terminal server animatif dan badge platform mengambang
- **Statistik** dengan animasi count-up saat masuk viewport
- **Grid fitur** (SSD NVMe, RAM dedicated, DDoS protection, dsb.)
- **4 paket harga** (Starter → Premium) dengan badge "Paling Populer"
- **Timeline "Cara Order"** 5 langkah
- **CTA pembayaran** yang membuka WhatsApp dengan pesan otomatis terisi
- **Testimoni** realistis & **FAQ** dengan accordion aksesibel
- **Dark / Light mode** (default gelap) via `next-themes`
- **Aurora background** + glassmorphism ringan, murni CSS
- **Floating WhatsApp button**
- SEO lengkap: metadata, Open Graph, Twitter Card, `robots.txt`, `sitemap.xml`,
  JSON-LD (Organization, Product, FAQPage), semantic HTML
- Menghormati `prefers-reduced-motion`

## 🧱 Tech Stack

| Kebutuhan       | Teknologi                          |
| --------------- | ---------------------------------- |
| Framework       | Next.js 15 (App Router)            |
| UI Runtime      | React 19 + TypeScript              |
| Styling         | Tailwind CSS v4                    |
| Komponen        | Pola shadcn/ui + Radix UI          |
| Animasi         | Framer Motion                      |
| Ikon            | Lucide React                       |
| Tema            | next-themes                        |
| Form / Validasi | React Hook Form + Zod (tersedia)   |

## 🚀 Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm start        # jalankan hasil build
```

## 📁 Struktur Project

```
.
├── app/                  # App Router: layout, page, robots, sitemap, globals.css
├── components/           # Komponen reusable global
│   ├── ui/               # Primitif bergaya shadcn (button, card, badge, accordion)
│   └── layout/           # Navbar & Footer
├── features/             # Section halaman per-domain
│   ├── hero/  pricing/  features/  stats/
│   ├── steps/  faq/  testimonials/  cta/
├── hooks/                # Custom hooks (mis. useCountUp)
├── lib/                  # site config, data konten, util, schema JSON-LD
├── types/                # Tipe TypeScript bersama
└── public/               # favicon.svg, og.svg
```

## ⚙️ Konfigurasi

Semua konten & identitas terpusat agar mudah diubah:

- **Brand, WhatsApp, kontak** → `lib/site.ts`
- **Paket, fitur, statistik, testimoni, FAQ** → `lib/data.ts`
- **Warna / token tema** → `app/globals.css`

Untuk mengganti nomor WhatsApp, ubah `siteConfig.whatsapp.number` (format E.164 tanpa `+`)
di `lib/site.ts`.

## 📄 Lisensi

Hak cipta © Nimbus Bot Hosting.
