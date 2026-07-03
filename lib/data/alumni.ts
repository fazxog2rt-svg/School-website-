export type Alumnus = {
  id: string;
  name: string;
  graduationYear: number;
  status: "Kuliah" | "Bekerja" | "Wirausaha";
  detail: string;
  testimonial?: string;
  avatar: string;
};

export const alumni: Alumnus[] = [
  {
    id: "al-01",
    name: "Aisyah Rahmawati",
    graduationYear: 2015,
    status: "Kuliah",
    detail: "S2 Kedokteran — Universitas Airlangga",
    testimonial:
      "MTsN 1 membentuk fondasi karakter dan disiplin yang membawa saya sejauh ini.",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: "al-02",
    name: "Muhammad Iqbal",
    graduationYear: 2013,
    status: "Bekerja",
    detail: "Software Engineer — Gojek",
    testimonial:
      "Ekstrakurikuler robotik di sini menumbuhkan kecintaan saya pada teknologi.",
    avatar: "https://i.pravatar.cc/150?img=53",
  },
  {
    id: "al-03",
    name: "Fatimah Zahra",
    graduationYear: 2016,
    status: "Wirausaha",
    detail: "Founder — Batik Nusantara Digital",
    testimonial: "Nilai kemandirian yang ditanamkan sangat berharga bagi saya.",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    id: "al-04",
    name: "Ahmad Dhani",
    graduationYear: 2012,
    status: "Kuliah",
    detail: "S3 Teknik Sipil — ITB",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    id: "al-05",
    name: "Nur Hidayah",
    graduationYear: 2017,
    status: "Bekerja",
    detail: "Guru — MAN 2 Probolinggo",
    testimonial: "Saya kembali mengabdi di dunia pendidikan berkat inspirasi guru-guru saya.",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    id: "al-06",
    name: "Rizal Fadillah",
    graduationYear: 2014,
    status: "Bekerja",
    detail: "Dokter Umum — RSUD Dr. Moh. Saleh",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    id: "al-07",
    name: "Salsabila Putri",
    graduationYear: 2018,
    status: "Kuliah",
    detail: "S1 Hubungan Internasional — UGM",
    avatar: "https://i.pravatar.cc/150?img=48",
  },
  {
    id: "al-08",
    name: "Bayu Setiawan",
    graduationYear: 2013,
    status: "Wirausaha",
    detail: "Owner — Bayu Farm Hidroponik",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

export const alumniYears = [
  "Semua",
  ...Array.from(new Set(alumni.map((a) => String(a.graduationYear)))).sort(
    (a, b) => Number(b) - Number(a)
  ),
];

export const alumniStatuses = ["Semua", "Kuliah", "Bekerja", "Wirausaha"] as const;
