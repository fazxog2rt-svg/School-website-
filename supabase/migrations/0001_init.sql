-- =====================================================================
-- MTsN 1 Probolinggo — Skema Database (Supabase / PostgreSQL)
-- Jalankan di Supabase Dashboard → SQL Editor, atau via Supabase CLI.
-- =====================================================================

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------------
-- PROFILES (terhubung ke auth.users) + peran (RBAC)
-- ------------------------------------------------------------------
create type public.user_role as enum (
  'super_admin', 'kepala', 'waka', 'guru', 'tu', 'operator', 'siswa', 'orangtua'
);

create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text not null default '',
  role        public.user_role not null default 'siswa',
  avatar_url  text,
  meta        text,
  created_at  timestamptz not null default now()
);

-- Buat profil otomatis saat user baru mendaftar
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce((new.raw_user_meta_data->>'role')::public.user_role, 'siswa'),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- helper: apakah user saat ini admin/staf
create or replace function public.is_staff()
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and p.role in ('super_admin','kepala','waka','guru','tu','operator')
  );
$$;

-- ------------------------------------------------------------------
-- KONTEN PUBLIK
-- ------------------------------------------------------------------
create table if not exists public.teachers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  subject text not null,
  category text not null default 'Umum',
  education text,
  experience text,
  certifications text[] default '{}',
  achievements text[] default '{}',
  photo text,
  email text,
  created_at timestamptz not null default now()
);

create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  level text not null,
  year int not null,
  description text,
  image text,
  created_at timestamptz not null default now()
);

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  category text not null,
  date date not null default now(),
  author text,
  reading_time int default 3,
  image text,
  featured boolean default false,
  trending boolean default false,
  tags text[] default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text,
  category text not null default 'Umum',
  date date not null default now(),
  deadline timestamptz,
  pinned boolean default false,
  has_pdf boolean default false,
  created_at timestamptz not null default now()
);

create table if not exists public.extracurriculars (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  coach text,
  schedule text,
  emoji text,
  description text,
  achievements text[] default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.alumni (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  graduation_year int not null,
  status text not null,
  detail text,
  testimonial text,
  avatar text,
  created_at timestamptz not null default now()
);

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text,
  category text not null,
  rating numeric(2,1) default 4.5,
  year int,
  cover text default '#065f46',
  available boolean default true,
  synopsis text,
  created_at timestamptz not null default now()
);

create table if not exists public.calendar_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date date not null,
  end_date date,
  type text not null default 'Kegiatan',
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------------
-- PENDAFTARAN & PESAN (public insert)
-- ------------------------------------------------------------------
create table if not exists public.ppdb_registrations (
  id uuid primary key default gen_random_uuid(),
  reg_number text unique not null,
  full_name text not null,
  nisn text,
  birth_place text,
  birth_date date,
  gender text,
  prev_school text,
  father_name text,
  mother_name text,
  parent_phone text,
  parent_job text,
  address text,
  status text not null default 'Menunggu Verifikasi',
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  handled boolean default false,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------------
-- ROW LEVEL SECURITY
-- ------------------------------------------------------------------
alter table public.profiles            enable row level security;
alter table public.teachers            enable row level security;
alter table public.achievements        enable row level security;
alter table public.news                enable row level security;
alter table public.announcements       enable row level security;
alter table public.extracurriculars    enable row level security;
alter table public.alumni              enable row level security;
alter table public.books               enable row level security;
alter table public.calendar_events     enable row level security;
alter table public.ppdb_registrations  enable row level security;
alter table public.contact_messages    enable row level security;

-- Konten publik: siapa saja boleh baca; hanya staf boleh tulis
do $$
declare t text;
begin
  foreach t in array array[
    'teachers','achievements','news','announcements',
    'extracurriculars','alumni','books','calendar_events'
  ]
  loop
    execute format('drop policy if exists "public_read" on public.%I;', t);
    execute format('create policy "public_read" on public.%I for select using (true);', t);
    execute format('drop policy if exists "staff_write" on public.%I;', t);
    execute format('create policy "staff_write" on public.%I for all using (public.is_staff()) with check (public.is_staff());', t);
  end loop;
end $$;

-- Profiles: user baca/ubah miliknya; staf baca semua
drop policy if exists "own_profile_read" on public.profiles;
create policy "own_profile_read" on public.profiles
  for select using (auth.uid() = id or public.is_staff());
drop policy if exists "own_profile_update" on public.profiles;
create policy "own_profile_update" on public.profiles
  for update using (auth.uid() = id);

-- PPDB: siapa saja boleh mendaftar (insert); hanya staf boleh baca
drop policy if exists "ppdb_insert" on public.ppdb_registrations;
create policy "ppdb_insert" on public.ppdb_registrations
  for insert with check (true);
drop policy if exists "ppdb_staff_read" on public.ppdb_registrations;
create policy "ppdb_staff_read" on public.ppdb_registrations
  for select using (public.is_staff());

-- Pesan kontak: siapa saja boleh kirim; hanya staf boleh baca
drop policy if exists "contact_insert" on public.contact_messages;
create policy "contact_insert" on public.contact_messages
  for insert with check (true);
drop policy if exists "contact_staff_read" on public.contact_messages;
create policy "contact_staff_read" on public.contact_messages
  for select using (public.is_staff());
