export type Role =
  | "super_admin"
  | "kepala"
  | "waka"
  | "guru"
  | "tu"
  | "operator"
  | "siswa"
  | "orangtua";

export type DemoUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  meta?: string;
};

export const roleLabels: Record<Role, string> = {
  super_admin: "Super Admin",
  kepala: "Kepala Madrasah",
  waka: "Wakil Kepala",
  guru: "Guru",
  tu: "Staff TU",
  operator: "Operator",
  siswa: "Siswa",
  orangtua: "Orang Tua",
};

/** Kelompok besar untuk menentukan tampilan dashboard */
export function roleGroup(role: Role): "admin" | "guru" | "siswa" | "orangtua" {
  if (role === "siswa") return "siswa";
  if (role === "orangtua") return "orangtua";
  if (role === "guru") return "guru";
  return "admin";
}

export const demoUsers: DemoUser[] = [
  {
    id: "u-admin",
    name: "Dr. H. Ahmad Fauzan, M.Pd.",
    email: "admin@mtsn1probolinggo.sch.id",
    role: "super_admin",
    avatar: "https://i.pravatar.cc/150?img=12",
    meta: "Administrator Sistem",
  },
  {
    id: "u-guru",
    name: "Siti Nurhaliza, M.Pd.",
    email: "guru@mtsn1probolinggo.sch.id",
    role: "guru",
    avatar: "https://i.pravatar.cc/150?img=45",
    meta: "Matematika · Wali Kelas 8A",
  },
  {
    id: "u-siswa",
    name: "Rafi Pratama",
    email: "siswa@mtsn1probolinggo.sch.id",
    role: "siswa",
    avatar: "https://i.pravatar.cc/150?img=57",
    meta: "Kelas 8A · NISN 0098765432",
  },
  {
    id: "u-ortu",
    name: "Bapak Hendra Pratama",
    email: "ortu@mtsn1probolinggo.sch.id",
    role: "orangtua",
    avatar: "https://i.pravatar.cc/150?img=13",
    meta: "Wali dari Rafi Pratama (8A)",
  },
];
