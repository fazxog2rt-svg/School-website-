import {
  GraduationCap,
  Users,
  Trophy,
  Globe2,
  Sparkles,
  UserCheck,
  School,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
};

export const stats: Stat[] = [
  { label: "Jumlah Siswa", value: 1240, icon: Users },
  { label: "Tenaga Pendidik", value: 84, icon: GraduationCap },
  { label: "Prestasi Nasional", value: 76, icon: Trophy },
  { label: "Prestasi Internasional", value: 12, icon: Globe2 },
  { label: "Ekstrakurikuler", value: 24, icon: Sparkles },
  { label: "Alumni", value: 9800, suffix: "+", icon: UserCheck },
  { label: "Ruang Kelas", value: 33, icon: School },
  { label: "Laboratorium", value: 6, icon: FlaskConical },
];
