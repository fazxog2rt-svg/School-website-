# Panduan Menghubungkan Supabase

Website ini sudah **siap Supabase**. Selama env belum diisi, aplikasi otomatis
memakai data contoh (mock) sehingga tetap bisa di-deploy. Ikuti langkah berikut
untuk mengaktifkan database & autentikasi sungguhan.

## 1. Buat Project Supabase

1. Daftar/masuk di **[supabase.com](https://supabase.com)** → **New Project**.
2. Catat **Project URL** dan **anon public key** di
   *Project Settings → API*.

## 2. Jalankan Skema & Seed

Buka **SQL Editor** di dashboard Supabase, lalu jalankan berurutan:

1. Isi & jalankan seluruh isi `supabase/migrations/0001_init.sql`
   (membuat tabel, RBAC/RLS, dan trigger profil otomatis).
2. Isi & jalankan `supabase/seed.sql` (mengisi data awal: guru, berita,
   prestasi, pengumuman, ekskul, alumni, buku, kalender).

> Alternatif via **Supabase CLI**:
> ```bash
> supabase link --project-ref <ref>
> supabase db push          # atau: psql < supabase/migrations/0001_init.sql
> psql "$DATABASE_URL" -f supabase/seed.sql
> ```

## 3. Isi Environment Variable

Salin `.env.example` menjadi `.env.local` dan isi:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

Di **Vercel**: *Project → Settings → Environment Variables*, tambahkan kedua
variabel tersebut, lalu **Redeploy**.

## 4. Buat Akun & Peran (RBAC)

Autentikasi memakai **Supabase Auth (email + kata sandi)**.

1. *Authentication → Users → Add user* untuk membuat akun.
2. Peran default setiap akun baru adalah `siswa`. Untuk mengubah peran, jalankan
   di SQL Editor (setelah user dibuat):

   ```sql
   update public.profiles
   set role = 'super_admin', full_name = 'Nama Admin'
   where id = (select id from auth.users where email = 'admin@contoh.com');
   ```

   Peran tersedia: `super_admin`, `kepala`, `waka`, `guru`, `tu`,
   `operator`, `siswa`, `orangtua`.

3. Bisa juga menyetel peran saat sign-up lewat `raw_user_meta_data`
   (`full_name`, `role`, `avatar_url`) — trigger `handle_new_user` akan
   otomatis membuat baris di `profiles`.

## Apa yang langsung aktif setelah tersambung

| Fitur | Perilaku dengan Supabase |
| --- | --- |
| Login `/login` | Autentikasi asli (email + password). Tombol demo disembunyikan. |
| Konten publik | Guru, Berita, Prestasi, Pengumuman, Ekskul, Alumni, Perpustakaan, Kalender dibaca dari database. |
| **PPDB `/ppdb`** | Pendaftaran tersimpan ke tabel `ppdb_registrations`. |
| **Kontak `/kontak`** | Pesan tersimpan ke tabel `contact_messages`. |
| Keamanan | Row Level Security aktif: publik hanya baca; tulis butuh peran staf. |

## Keamanan (RLS) — ringkasan

- Tabel konten: **baca publik**, **tulis** hanya untuk peran staf
  (`super_admin/kepala/waka/guru/tu/operator`) — lihat fungsi `is_staff()`.
- `ppdb_registrations` & `contact_messages`: **insert publik**,
  **baca** hanya staf.
- `profiles`: user hanya melihat/mengubah profil miliknya; staf melihat semua.

## Langkah lanjutan (opsional)

- Simpan file upload PPDB & materi ke **Supabase Storage**.
- Wiring CRUD dashboard (nilai, absensi, tugas) ke tabel khusus.
- **2FA**, magic link, atau OAuth Google via Supabase Auth.
- AI Assistant berbasis LLM melalui route handler `/api/assistant`.
