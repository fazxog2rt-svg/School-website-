export type GalleryItem = {
  id: string;
  title: string;
  category: "Kegiatan" | "Fasilitas" | "Prestasi" | "Ekstrakurikuler";
  image: string;
  span?: "tall" | "wide" | "normal";
};

export const gallery: GalleryItem[] = [
  {
    id: "g-01",
    title: "Upacara Bendera",
    category: "Kegiatan",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80",
    span: "tall",
  },
  {
    id: "g-02",
    title: "Laboratorium Sains",
    category: "Fasilitas",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&q=80",
  },
  {
    id: "g-03",
    title: "Perpustakaan Modern",
    category: "Fasilitas",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&q=80",
    span: "wide",
  },
  {
    id: "g-04",
    title: "Kompetisi Robotik",
    category: "Prestasi",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80",
  },
  {
    id: "g-05",
    title: "Kegiatan Tahfidz",
    category: "Ekstrakurikuler",
    image:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=900&q=80",
    span: "tall",
  },
  {
    id: "g-06",
    title: "Latihan Futsal",
    category: "Ekstrakurikuler",
    image:
      "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=900&q=80",
  },
  {
    id: "g-07",
    title: "Ruang Kelas Nyaman",
    category: "Fasilitas",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
    span: "wide",
  },
  {
    id: "g-08",
    title: "Wisuda Tahfidz",
    category: "Kegiatan",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",
  },
  {
    id: "g-09",
    title: "Pentas Seni",
    category: "Kegiatan",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80",
  },
];

export const galleryCategories = [
  "Semua",
  "Kegiatan",
  "Fasilitas",
  "Prestasi",
  "Ekstrakurikuler",
] as const;
