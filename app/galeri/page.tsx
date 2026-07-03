import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { GaleriGrid } from "@/components/sections/galeri-grid";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Dokumentasi kegiatan, fasilitas, dan momen berharga di MTsN 1 Probolinggo.",
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        title="Galeri Madrasah"
        description="Kumpulan momen, kegiatan, dan fasilitas yang menggambarkan kehidupan di madrasah."
        crumbs={[{ label: "Galeri" }]}
      />
      <section className="section-pad">
        <div className="container">
          <GaleriGrid />
        </div>
      </section>
    </>
  );
}
