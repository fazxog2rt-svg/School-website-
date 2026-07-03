import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { PrestasiDirectory } from "@/components/sections/prestasi-directory";

export const metadata: Metadata = {
  title: "Prestasi",
  description:
    "Beragam prestasi akademik, non-akademik, olahraga, keagamaan, sains, dan robotik siswa MTsN 1 Probolinggo.",
};

export default function PrestasiPage() {
  return (
    <>
      <PageHeader
        title="Prestasi Siswa"
        description="Bukti nyata dedikasi dan kerja keras — dari tingkat kota hingga internasional."
        crumbs={[{ label: "Prestasi" }]}
      />
      <section className="section-pad">
        <div className="container">
          <PrestasiDirectory />
        </div>
      </section>
    </>
  );
}
