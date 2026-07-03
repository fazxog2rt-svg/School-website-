import {
  LayoutDashboard,
  Users,
  Newspaper,
  GraduationCap,
  ClipboardCheck,
  CalendarDays,
  BookOpen,
  FileText,
  MessagesSquare,
  Award,
  Wallet,
  LineChart,
  ShieldCheck,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import type { Role } from "@/lib/auth/roles";
import { roleGroup } from "@/lib/auth/roles";

export type DashboardNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const overview: DashboardNavItem = {
  label: "Ringkasan",
  href: "/dashboard",
  icon: LayoutDashboard,
};

const nav: Record<"admin" | "guru" | "siswa" | "orangtua", DashboardNavItem[]> = {
  admin: [
    overview,
    { label: "Manajemen Pengguna", href: "/dashboard/pengguna", icon: Users },
    { label: "Manajemen Berita", href: "/dashboard/berita", icon: Newspaper },
    { label: "Pengumuman", href: "/dashboard/pengumuman", icon: Megaphone },
    { label: "Data Nilai", href: "/dashboard/nilai", icon: GraduationCap },
    { label: "Analytics", href: "/dashboard/analytics", icon: LineChart },
    { label: "Audit Log", href: "/dashboard/audit", icon: ShieldCheck },
  ],
  guru: [
    overview,
    { label: "Input Nilai", href: "/dashboard/nilai", icon: GraduationCap },
    { label: "Absensi", href: "/dashboard/absensi", icon: ClipboardCheck },
    { label: "Jadwal Mengajar", href: "/dashboard/jadwal", icon: CalendarDays },
    { label: "Materi Ajar", href: "/dashboard/materi", icon: BookOpen },
    { label: "Tugas & Koreksi", href: "/dashboard/tugas", icon: FileText },
    { label: "Forum Diskusi", href: "/dashboard/forum", icon: MessagesSquare },
  ],
  siswa: [
    overview,
    { label: "Nilai Saya", href: "/dashboard/nilai", icon: GraduationCap },
    { label: "Jadwal", href: "/dashboard/jadwal", icon: CalendarDays },
    { label: "Materi", href: "/dashboard/materi", icon: BookOpen },
    { label: "Tugas", href: "/dashboard/tugas", icon: FileText },
    { label: "Forum Diskusi", href: "/dashboard/forum", icon: MessagesSquare },
    { label: "Rapor & Sertifikat", href: "/dashboard/rapor", icon: Award },
  ],
  orangtua: [
    overview,
    { label: "Nilai Anak", href: "/dashboard/nilai", icon: GraduationCap },
    { label: "Presensi Anak", href: "/dashboard/absensi", icon: ClipboardCheck },
    { label: "Tagihan", href: "/dashboard/tagihan", icon: Wallet },
    { label: "Jadwal", href: "/dashboard/jadwal", icon: CalendarDays },
    { label: "Pengumuman", href: "/dashboard/pengumuman", icon: Megaphone },
  ],
};

export function getDashboardNav(role: Role): DashboardNavItem[] {
  return nav[roleGroup(role)];
}
