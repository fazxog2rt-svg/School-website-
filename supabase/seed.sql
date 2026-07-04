-- =====================================================================
-- Data awal (seed) MTsN 1 Probolinggo
-- Jalankan setelah 0001_init.sql. Aman diulang (truncate dulu).
-- =====================================================================

truncate table public.teachers, public.achievements, public.news,
  public.announcements, public.extracurriculars, public.alumni,
  public.books, public.calendar_events restart identity cascade;

-- GURU
insert into public.teachers (name, subject, category, education, experience, certifications, achievements, photo, email) values
('Dr. H. Ahmad Fauzan, M.Pd.', 'Kepala Madrasah', 'Umum', 'S3 Manajemen Pendidikan — UIN Sunan Ampel', '22 tahun', '{"Sertifikasi Pendidik","Asesor Nasional"}', '{"Kepala Madrasah Berprestasi Tk. Provinsi 2023"}', 'https://i.pravatar.cc/400?img=12', 'kepala@mtsn1probolinggo.sch.id'),
('Siti Nurhaliza, M.Pd.', 'Matematika', 'Sains', 'S2 Pendidikan Matematika — Universitas Negeri Malang', '14 tahun', '{"Sertifikasi Pendidik","Guru Penggerak"}', '{"Pembina OSN Matematika — Medali Perak Nasional 2022"}', 'https://i.pravatar.cc/400?img=45', 'siti.n@mtsn1probolinggo.sch.id'),
('Muhammad Rizky, S.Pd.', 'Bahasa Inggris', 'Bahasa', 'S1 Pendidikan Bahasa Inggris — Universitas Jember', '9 tahun', '{"TOEFL ITP 600","Cambridge CELTA"}', '{"Pembina English Debate — Juara 1 Provinsi 2023"}', 'https://i.pravatar.cc/400?img=33', 'rizky@mtsn1probolinggo.sch.id'),
('Hj. Fatimah Az-Zahra, M.Ag.', 'Akidah Akhlak', 'Agama', 'S2 Pendidikan Agama Islam — UIN Malang', '17 tahun', '{"Sertifikasi Pendidik","Hafidzah 30 Juz"}', '{"Pembina Tahfidz — Juara Umum MTQ Pelajar 2023"}', 'https://i.pravatar.cc/400?img=44', 'fatimah@mtsn1probolinggo.sch.id'),
('Budi Santoso, S.Si.', 'IPA Terpadu', 'Sains', 'S1 Fisika — Institut Teknologi Sepuluh Nopember', '11 tahun', '{"Sertifikasi Pendidik","Trainer Robotika"}', '{"Pembina Robotik — Juara 2 Internasional WRO 2023"}', 'https://i.pravatar.cc/400?img=15', 'budi.s@mtsn1probolinggo.sch.id'),
('Dewi Anggraini, S.Pd.', 'Bahasa Indonesia', 'Bahasa', 'S1 Pendidikan Bahasa Indonesia — Universitas Negeri Surabaya', '13 tahun', '{"Sertifikasi Pendidik","Juri Lomba Cipta Puisi"}', '{"Pembina Jurnalistik — Media Sekolah Terbaik 2022"}', 'https://i.pravatar.cc/400?img=47', 'dewi@mtsn1probolinggo.sch.id'),
('Agus Prasetyo, S.Pd.', 'Pendidikan Jasmani', 'Olahraga', 'S1 Pendidikan Olahraga — Universitas Negeri Malang', '10 tahun', '{"Pelatih Futsal Lisensi D","Wasit Nasional"}', '{"Pembina Futsal — Juara 1 POPDA Jatim 2023"}', 'https://i.pravatar.cc/400?img=51', 'agus@mtsn1probolinggo.sch.id'),
('Nur Aisyah, M.Pd.', 'IPS Terpadu', 'Sosial', 'S2 Pendidikan IPS — Universitas Negeri Malang', '12 tahun', '{"Sertifikasi Pendidik","Guru Penggerak"}', '{"Pembina Karya Ilmiah Sosial — Finalis Nasional 2023"}', 'https://i.pravatar.cc/400?img=26', 'aisyah@mtsn1probolinggo.sch.id'),
('Hendra Wijaya, S.Kom.', 'Informatika', 'Sains', 'S1 Teknik Informatika — Universitas Brawijaya', '7 tahun', '{"Google Certified Educator","MikroTik MTCNA"}', '{"Pembina Coding Club — Juara 1 Hackathon Pelajar 2023"}', 'https://i.pravatar.cc/400?img=59', 'hendra@mtsn1probolinggo.sch.id'),
('Rahmawati, S.Pd.', 'Bimbingan Konseling', 'Umum', 'S1 Bimbingan Konseling — Universitas Negeri Surabaya', '15 tahun', '{"Sertifikasi Konselor","Fasilitator Anti-Bullying"}', '{"Program Sekolah Ramah Anak — Penghargaan 2022"}', 'https://i.pravatar.cc/400?img=32', 'rahma@mtsn1probolinggo.sch.id'),
('Imam Syafi''i, M.Ag.', 'Al-Qur''an Hadits', 'Agama', 'S2 Ilmu Al-Qur''an dan Tafsir — UIN Sunan Ampel', '19 tahun', '{"Sertifikasi Pendidik","Sanad Qira''ah"}', '{"Pembina MTQ — Juara Umum Tk. Kota 2023"}', 'https://i.pravatar.cc/400?img=68', 'imam@mtsn1probolinggo.sch.id'),
('Yuni Kartika, S.Pd.', 'Seni Budaya', 'Umum', 'S1 Pendidikan Seni Rupa — Universitas Negeri Malang', '8 tahun', '{"Sertifikasi Pendidik","Kurator Pameran"}', '{"Pembina Seni — Juara 1 FLS2N Tk. Provinsi 2023"}', 'https://i.pravatar.cc/400?img=24', 'yuni@mtsn1probolinggo.sch.id');

-- PRESTASI
insert into public.achievements (title, category, level, year, description, image) values
('Medali Perak OSN Matematika', 'Olimpiade', 'Nasional', 2023, 'Ananda Rafi Pratama meraih Medali Perak pada Olimpiade Sains Nasional bidang Matematika.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80'),
('Juara 2 World Robot Olympiad', 'Robotik', 'Internasional', 2023, 'Tim Robotik MTsN 1 Probolinggo menembus panggung internasional WRO di kategori RoboMission.', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'),
('Juara Umum MTQ Pelajar', 'Keagamaan', 'Provinsi', 2023, 'Tim Tahfidz dan Tilawah meraih Juara Umum pada MTQ Pelajar tingkat Provinsi Jawa Timur.', 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&q=80'),
('Juara 1 POPDA Futsal', 'Olahraga', 'Provinsi', 2023, 'Tim Futsal putra menjuarai Pekan Olahraga Pelajar Daerah tingkat Provinsi.', 'https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800&q=80'),
('Juara 1 English Debate Championship', 'Akademik', 'Provinsi', 2023, 'Tim debat bahasa Inggris memenangkan kompetisi debat antar madrasah se-Jawa Timur.', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80'),
('Juara 1 Hackathon Pelajar', 'Sains', 'Nasional', 2023, 'Coding Club membangun aplikasi solusi lingkungan dan meraih juara pertama nasional.', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'),
('Regu Berprestasi Jambore Nasional', 'Pramuka', 'Nasional', 2022, 'Regu Pramuka penggalang terpilih sebagai regu berprestasi pada Jambore Nasional.', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80'),
('Juara 2 Kompetisi PMR Wira', 'PMR', 'Provinsi', 2022, 'Unit PMR menorehkan prestasi pada lomba pertolongan pertama tingkat provinsi.', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80');

-- BERITA
insert into public.news (slug, title, excerpt, category, date, author, reading_time, image, featured, trending, tags) values
('raih-medali-perak-osn-matematika-2023', 'Siswa MTsN 1 Probolinggo Raih Medali Perak OSN Matematika', 'Prestasi membanggakan kembali ditorehkan di ajang Olimpiade Sains Nasional bidang Matematika tahun ini.', 'Prestasi', '2026-06-24', 'Humas Madrasah', 4, 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1000&q=80', true, true, '{"OSN","Matematika","Prestasi"}'),
('pembukaan-ppdb-tahun-ajaran-2026-2027', 'Pembukaan PPDB Tahun Ajaran 2026/2027 Resmi Dimulai', 'Pendaftaran Peserta Didik Baru dibuka secara online dengan sistem yang lebih modern dan transparan.', 'Pengumuman', '2026-06-18', 'Panitia PPDB', 3, 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=80', true, true, '{"PPDB","Pendaftaran"}'),
('peringatan-tahun-baru-hijriah', 'Semarak Peringatan Tahun Baru Hijriah di Madrasah', 'Rangkaian kegiatan religius dan sosial digelar untuk memperingati datangnya tahun baru Islam.', 'Keagamaan', '2026-06-10', 'OSIS', 5, 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1000&q=80', false, true, '{"Keagamaan","Kegiatan"}'),
('workshop-guru-penggerak-kurikulum-adaptif', 'Workshop Guru Penggerak: Menuju Kurikulum yang Adaptif', 'Para pendidik mengikuti pelatihan intensif untuk meningkatkan kualitas pembelajaran abad 21.', 'Akademik', '2026-05-30', 'Waka Kurikulum', 4, 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=80', false, false, '{"Guru","Kurikulum"}'),
('juara-2-world-robot-olympiad', 'Tim Robotik Melangkah ke Panggung World Robot Olympiad', 'Inovasi dan kerja keras tim robotik mengantar madrasah meraih prestasi tingkat internasional.', 'Prestasi', '2026-05-22', 'Coding & Robotik', 6, 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=80', false, false, '{"Robotik","Internasional"}'),
('bakti-sosial-ramadhan', 'Bakti Sosial Ramadhan: Berbagi Kebahagiaan dengan Sesama', 'Siswa dan guru bergotong royong menyalurkan bantuan kepada masyarakat sekitar madrasah.', 'Kegiatan', '2026-05-12', 'OSIS', 3, 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80', false, false, '{"Sosial","Ramadhan"}');

-- PENGUMUMAN
insert into public.announcements (title, body, category, date, deadline, pinned, has_pdf) values
('Pendaftaran Ulang Peserta Didik Baru 2026/2027', 'Bagi calon peserta didik yang dinyatakan lulus seleksi, wajib melakukan daftar ulang dengan membawa berkas asli.', 'PPDB', '2026-07-01', '2026-07-15 23:59:00+07', true, true),
('Jadwal Penilaian Akhir Semester Genap', 'PAS Genap dilaksanakan mulai 8 Juni 2026. Siswa diharapkan mempersiapkan diri dan mengecek jadwal masing-masing.', 'Akademik', '2026-06-01', '2026-07-10 17:00:00+07', true, true),
('Lomba Kebersihan Kelas dalam Rangka HUT Madrasah', 'Seluruh kelas mengikuti lomba kebersihan dan dekorasi. Penilaian dilakukan oleh tim juri pada minggu terakhir Juli.', 'Kegiatan', '2026-06-28', null, false, false),
('Libur Semester & Kegiatan Pesantren Kilat', 'Informasi jadwal libur semester genap serta kegiatan pesantren kilat bagi siswa yang berminat.', 'Umum', '2026-06-20', null, false, true),
('Pengumuman Beasiswa Prestasi', 'Dibuka pendaftaran beasiswa bagi siswa berprestasi akademik dan tahfidz. Kuota terbatas.', 'Akademik', '2026-06-15', '2026-07-05 23:59:00+07', false, true);

-- EKSTRAKURIKULER
insert into public.extracurriculars (name, category, coach, schedule, emoji, description, achievements) values
('Tahfidz Al-Qur''an', 'Keagamaan', 'Ustadz Imam Syafi''i, M.Ag.', 'Senin & Rabu, 15.00 – 16.30', '📖', 'Membina hafalan Al-Qur''an dengan metode mutqin serta pembinaan adab dan tajwid.', '{"Juara Umum MTQ Pelajar Provinsi 2023"}'),
('Robotik & Coding', 'Sains & Teknologi', 'Budi Santoso, S.Si.', 'Selasa & Kamis, 15.00 – 17.00', '🤖', 'Belajar merancang robot, pemrograman, dan berpikir komputasional untuk kompetisi nasional.', '{"Juara 2 World Robot Olympiad 2023"}'),
('Futsal', 'Olahraga', 'Agus Prasetyo, S.Pd.', 'Rabu & Jumat, 15.30 – 17.00', '⚽', 'Melatih teknik, strategi, dan sportivitas atlet muda untuk kompetisi antar sekolah.', '{"Juara 1 POPDA Jatim 2023"}'),
('English Club', 'Sains & Teknologi', 'Muhammad Rizky, S.Pd.', 'Sabtu, 09.00 – 11.00', '🗣️', 'Meningkatkan kemampuan public speaking, debat, dan komunikasi bahasa Inggris.', '{"Juara 1 English Debate Championship 2023"}'),
('Pramuka', 'Kepanduan', 'Kak Dewi & Kak Hendra', 'Jumat, 14.00 – 16.00', '⛺', 'Membangun karakter, kemandirian, dan jiwa kepemimpinan melalui kegiatan kepanduan.', '{"Regu Berprestasi Jambore Nasional 2022"}'),
('PMR (Palang Merah Remaja)', 'Kepanduan', 'Rahmawati, S.Pd.', 'Kamis, 15.00 – 16.30', '⛑️', 'Melatih keterampilan pertolongan pertama dan kepedulian sosial kemanusiaan.', '{"Juara 2 Kompetisi PMR Wira Provinsi 2022"}'),
('Seni Hadrah & Banjari', 'Seni', 'Yuni Kartika, S.Pd.', 'Sabtu, 13.00 – 15.00', '🥁', 'Mengembangkan bakat seni musik islami yang memadukan sholawat dan kreativitas.', '{"Juara 1 Festival Banjari Kota 2023"}'),
('Pencak Silat', 'Bela Diri', 'Pelatih Bersertifikat IPSI', 'Selasa & Jumat, 15.30 – 17.00', '🥋', 'Melestarikan seni bela diri tradisional sekaligus membentuk fisik dan mental tangguh.', '{"Juara 3 Kejuaraan Silat Pelajar Provinsi 2023"}');

-- ALUMNI
insert into public.alumni (name, graduation_year, status, detail, testimonial, avatar) values
('Aisyah Rahmawati', 2015, 'Kuliah', 'S2 Kedokteran — Universitas Airlangga', 'MTsN 1 membentuk fondasi karakter dan disiplin yang membawa saya sejauh ini.', 'https://i.pravatar.cc/150?img=20'),
('Muhammad Iqbal', 2013, 'Bekerja', 'Software Engineer — Gojek', 'Ekstrakurikuler robotik di sini menumbuhkan kecintaan saya pada teknologi.', 'https://i.pravatar.cc/150?img=53'),
('Fatimah Zahra', 2016, 'Wirausaha', 'Founder — Batik Nusantara Digital', 'Nilai kemandirian yang ditanamkan sangat berharga bagi saya.', 'https://i.pravatar.cc/150?img=25'),
('Ahmad Dhani', 2012, 'Kuliah', 'S3 Teknik Sipil — ITB', null, 'https://i.pravatar.cc/150?img=60'),
('Nur Hidayah', 2017, 'Bekerja', 'Guru — MAN 2 Probolinggo', 'Saya kembali mengabdi di dunia pendidikan berkat inspirasi guru-guru saya.', 'https://i.pravatar.cc/150?img=31'),
('Rizal Fadillah', 2014, 'Bekerja', 'Dokter Umum — RSUD Dr. Moh. Saleh', null, 'https://i.pravatar.cc/150?img=68'),
('Salsabila Putri', 2018, 'Kuliah', 'S1 Hubungan Internasional — UGM', null, 'https://i.pravatar.cc/150?img=48'),
('Bayu Setiawan', 2013, 'Wirausaha', 'Owner — Bayu Farm Hidroponik', null, 'https://i.pravatar.cc/150?img=15');

-- PERPUSTAKAAN
insert into public.books (title, author, category, rating, year, cover, available, synopsis) values
('Sejarah Peradaban Islam', 'Dr. Badri Yatim', 'Sejarah', 4.8, 2018, '#065f46', true, 'Menelusuri perjalanan peradaban Islam dari masa Rasulullah hingga era modern.'),
('Fisika untuk Madrasah', 'Tim MGMP IPA', 'Sains', 4.5, 2021, '#0369a1', true, 'Konsep fisika dasar yang aplikatif dan mudah dipahami siswa.'),
('Laskar Pelangi', 'Andrea Hirata', 'Fiksi', 4.9, 2005, '#b07726', false, 'Kisah inspiratif tentang perjuangan anak-anak meraih pendidikan.'),
('Tafsir Al-Qur''an Juz Amma', 'Prof. Quraish Shihab', 'Agama', 4.9, 2019, '#047857', true, 'Tafsir kontekstual Juz Amma dengan bahasa yang membumi.'),
('English Grammar in Use', 'Raymond Murphy', 'Bahasa', 4.7, 2019, '#7c3aed', true, 'Panduan tata bahasa Inggris paling populer untuk pelajar.'),
('Ensiklopedia Sains Bergambar', 'DK Publishing', 'Referensi', 4.6, 2020, '#be123c', true, 'Referensi sains visual yang kaya untuk menumbuhkan rasa ingin tahu.'),
('Matematika Kreatif', 'Prof. Iwan Pranoto', 'Sains', 4.4, 2022, '#0f766e', true, 'Pendekatan menyenangkan untuk memahami logika matematika.'),
('Bumi Manusia', 'Pramoedya Ananta Toer', 'Fiksi', 4.8, 1980, '#92400e', true, 'Roman sejarah pergerakan bangsa yang menggugah nasionalisme.');

-- KALENDER AKADEMIK
insert into public.calendar_events (title, date, end_date, type) values
('Awal Tahun Ajaran 2026/2027', '2026-07-14', null, 'Akademik'),
('Masa Ta''aruf Siswa (MATSAMA)', '2026-07-14', '2026-07-16', 'Kegiatan'),
('Peringatan Tahun Baru Hijriah', '2026-07-16', null, 'Keagamaan'),
('HUT Kemerdekaan RI', '2026-08-17', null, 'Kegiatan'),
('Maulid Nabi Muhammad SAW', '2026-08-25', null, 'Keagamaan'),
('Penilaian Tengah Semester', '2026-09-22', '2026-09-27', 'Ujian'),
('Penilaian Akhir Semester Ganjil', '2026-12-01', '2026-12-10', 'Ujian'),
('Class Meeting', '2026-12-15', '2026-12-19', 'Kegiatan'),
('Pembagian Rapor Semester Ganjil', '2026-12-20', null, 'Akademik'),
('Libur Semester Ganjil', '2026-12-22', '2027-01-03', 'Libur');
