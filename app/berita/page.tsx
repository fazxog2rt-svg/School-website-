import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { BeritaDirectory } from "@/components/sections/berita-directory";

export const metadata: Metadata = {
  title: "Berita Sekolah",
  description:
    "Informasi, kegiatan, dan pengumuman terbaru dari MTsN 1 Probolinggo.",
};

export default function BeritaPage() {
  return (
    <>
      <PageHeader
        title="Berita & Informasi"
        description="Ikuti perkembangan, kegiatan, dan pengumuman terbaru dari madrasah."
        crumbs={[{ label: "Berita" }]}
      />
      <section className="section-pad">
        <div className="container">
          <BeritaDirectory />
        </div>
      </section>
    </>
  );
}
