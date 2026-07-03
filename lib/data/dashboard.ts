// ---- Analytics untuk dashboard admin ----
export const enrollmentTrend = [
  { year: "2021", siswa: 980 },
  { year: "2022", siswa: 1040 },
  { year: "2023", siswa: 1120 },
  { year: "2024", siswa: 1180 },
  { year: "2025", siswa: 1210 },
  { year: "2026", siswa: 1240 },
];

export const genderSplit = [
  { name: "Laki-laki", value: 612 },
  { name: "Perempuan", value: 628 },
];

export const gradeDistribution = [
  { kelas: "7A", rata: 84 },
  { kelas: "7B", rata: 82 },
  { kelas: "8A", rata: 88 },
  { kelas: "8B", rata: 85 },
  { kelas: "9A", rata: 90 },
  { kelas: "9B", rata: 87 },
];

export const ppdbFunnel = [
  { tahap: "Pendaftar", jumlah: 480 },
  { tahap: "Verifikasi", jumlah: 420 },
  { tahap: "Tes", jumlah: 390 },
  { tahap: "Diterima", jumlah: 320 },
  { tahap: "Daftar Ulang", jumlah: 305 },
];

// ---- Data siswa (untuk siswa & orang tua) ----
export const studentGrades = [
  { subject: "Matematika", nilai: 88, kkm: 75 },
  { subject: "B. Inggris", nilai: 92, kkm: 75 },
  { subject: "IPA", nilai: 85, kkm: 75 },
  { subject: "IPS", nilai: 80, kkm: 75 },
  { subject: "B. Indonesia", nilai: 90, kkm: 75 },
  { subject: "Akidah", nilai: 95, kkm: 75 },
];

export const progressTrend = [
  { term: "Smt 1", nilai: 82 },
  { term: "Smt 2", nilai: 85 },
  { term: "Smt 3", nilai: 87 },
  { term: "Smt 4", nilai: 89 },
];

export const attendanceSummary = {
  hadir: 92,
  izin: 4,
  sakit: 3,
  alpha: 1,
};

// ---- Manajemen pengguna (admin) ----
export type ManagedUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Aktif" | "Nonaktif";
  lastActive: string;
};

export const managedUsers: ManagedUser[] = [
  { id: "1", name: "Dr. H. Ahmad Fauzan", email: "kepala@mtsn1.sch.id", role: "Kepala Madrasah", status: "Aktif", lastActive: "Baru saja" },
  { id: "2", name: "Siti Nurhaliza, M.Pd.", email: "siti@mtsn1.sch.id", role: "Guru", status: "Aktif", lastActive: "10 menit lalu" },
  { id: "3", name: "Budi Santoso, S.Si.", email: "budi@mtsn1.sch.id", role: "Guru", status: "Aktif", lastActive: "1 jam lalu" },
  { id: "4", name: "Rahmawati, S.Pd.", email: "rahma@mtsn1.sch.id", role: "Staff TU", status: "Aktif", lastActive: "2 jam lalu" },
  { id: "5", name: "Hendra Wijaya, S.Kom.", email: "hendra@mtsn1.sch.id", role: "Operator", status: "Aktif", lastActive: "3 jam lalu" },
  { id: "6", name: "Dewi Anggraini, S.Pd.", email: "dewi@mtsn1.sch.id", role: "Guru", status: "Nonaktif", lastActive: "3 hari lalu" },
];

// ---- Activity / audit log ----
export type ActivityLog = {
  id: string;
  user: string;
  action: string;
  time: string;
};

export const activityLogs: ActivityLog[] = [
  { id: "1", user: "Siti Nurhaliza", action: "Menginput nilai PAS kelas 8A", time: "10 menit lalu" },
  { id: "2", user: "Operator", action: "Mempublikasikan berita 'Medali Perak OSN'", time: "45 menit lalu" },
  { id: "3", user: "Staff TU", action: "Memverifikasi 12 pendaftar PPDB", time: "2 jam lalu" },
  { id: "4", user: "Budi Santoso", action: "Mengunggah materi 'Fotosintesis'", time: "3 jam lalu" },
  { id: "5", user: "Super Admin", action: "Menambahkan pengguna baru (Guru)", time: "5 jam lalu" },
  { id: "6", user: "Kepala Madrasah", action: "Menyetujui pengumuman beasiswa", time: "1 hari lalu" },
];

// ---- Absensi kelas (guru) ----
export type StudentAttendance = {
  id: string;
  name: string;
  status: "Hadir" | "Izin" | "Sakit" | "Alpha";
};

export const classRoster: StudentAttendance[] = [
  { id: "s1", name: "Rafi Pratama", status: "Hadir" },
  { id: "s2", name: "Salsa Nabila", status: "Hadir" },
  { id: "s3", name: "Dimas Aji Saputra", status: "Izin" },
  { id: "s4", name: "Aisyah Putri", status: "Hadir" },
  { id: "s5", name: "Bayu Firmansyah", status: "Sakit" },
  { id: "s6", name: "Nadia Ramadhani", status: "Hadir" },
  { id: "s7", name: "Fahri Alauddin", status: "Hadir" },
  { id: "s8", name: "Zahra Kirana", status: "Alpha" },
];

// ---- Tagihan (orang tua) ----
export type Bill = {
  id: string;
  label: string;
  amount: number;
  due: string;
  paid: boolean;
};

export const bills: Bill[] = [
  { id: "bl1", label: "SPP Juli 2026", amount: 150000, due: "2026-07-10", paid: false },
  { id: "bl2", label: "SPP Juni 2026", amount: 150000, due: "2026-06-10", paid: true },
  { id: "bl3", label: "Kegiatan Semester", amount: 250000, due: "2026-07-20", paid: false },
  { id: "bl4", label: "Seragam & Atribut", amount: 450000, due: "2026-06-01", paid: true },
];
