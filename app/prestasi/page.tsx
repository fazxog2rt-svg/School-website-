import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { PrestasiDirectory } from "@/components/sections/prestasi-directory";
import { getAchievements } from "@/lib/db";

export const metadata: Metadata = {
  title: "Prestasi",
  description:
    "Beragam prestasi akademik, non-akademik, olahraga, keagamaan, sains, dan robotik siswa MTsN 1 Probolinggo.",
};

export default async function PrestasiPage() {
  const achievements = await getAchievements();
  return (
    <>
      <PageHeader
        title="Prestasi Siswa"
        description="Bukti nyata dedikasi dan kerja keras — dari tingkat kota hingga internasional."
        crumbs={[{ label: "Prestasi" }]}
      />
      <section className="section-pad">
        <div className="container">
          <PrestasiDirectory achievements={achievements} />
        </div>
      </section>
    </>
  );
}
