import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { BeritaDirectory } from "@/components/sections/berita-directory";
import { getNews } from "@/lib/db";

export const metadata: Metadata = {
  title: "Berita Sekolah",
  description:
    "Informasi, kegiatan, dan pengumuman terbaru dari MTsN 1 Probolinggo.",
};

export default async function BeritaPage() {
  const news = await getNews();
  return (
    <>
      <PageHeader
        title="Berita & Informasi"
        description="Ikuti perkembangan, kegiatan, dan pengumuman terbaru dari madrasah."
        crumbs={[{ label: "Berita" }]}
      />
      <section className="section-pad">
        <div className="container">
          <BeritaDirectory news={news} />
        </div>
      </section>
    </>
  );
}
