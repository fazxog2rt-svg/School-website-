export const site = {
  name: "MTsN 1 Probolinggo",
  shortName: "MTsN 1 Probolinggo",
  tagline: "Madrasah Tsanawiyah Negeri 1 Probolinggo",
  description:
    "Website resmi & platform digital MTsN 1 Probolinggo — mewujudkan insan yang cerdas intelektual, matang spiritual, dan siap berkontribusi bagi masyarakat.",
  motto: "Cerdas • Spiritual • Berkontribusi",
  url: "https://mtsn1probolinggo.sch.id",
  email: "info@mtsn1probolinggo.sch.id",
  phone: "(0335) 421xxx",
  whatsapp: "6281234567890",
  address:
    "Jl. Pendidikan No. 1, Kota Probolinggo, Jawa Timur 67213, Indonesia",
  mapsQuery: "MTsN 1 Probolinggo, Jawa Timur",
  socials: {
    instagram: "https://instagram.com/mtsn1probolinggo",
    facebook: "https://facebook.com/mtsn1probolinggo",
    youtube: "https://youtube.com/@mtsn1probolinggo",
    tiktok: "https://tiktok.com/@mtsn1probolinggo",
  },
  vision:
    "Terwujudnya insan yang cerdas intelektual, matang spiritual, dan siap berkontribusi bagi masyarakat.",
  missions: [
    "Membentuk pribadi yang taat beribadah dan menghormati nilai-nilai kemanusiaan.",
    "Melejitkan potensi akademik dan non-akademik siswa melalui kurikulum yang adaptif.",
    "Menciptakan lingkungan sekolah yang kondusif, aman, dan sarat dengan nilai-nilai religius.",
  ],
};

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Guru", href: "/guru" },
  { label: "Prestasi", href: "/prestasi" },
  { label: "Berita", href: "/berita" },
  { label: "Ekstrakurikuler", href: "/ekstrakurikuler" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export type NavLink = (typeof navLinks)[number];
