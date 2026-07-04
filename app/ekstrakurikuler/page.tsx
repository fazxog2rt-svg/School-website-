import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { EkskulDirectory } from "@/components/sections/ekskul-directory";
import { getExtracurriculars } from "@/lib/db";

export const metadata: Metadata = {
  title: "Ekstrakurikuler",
  description:
    "Beragam kegiatan ekstrakurikuler untuk mengembangkan bakat, minat, dan karakter siswa MTsN 1 Probolinggo.",
};

export default async function EkskulPage() {
  const items = await getExtracurriculars();
  return (
    <>
      <PageHeader
        title="Ekstrakurikuler"
        description="Ruang bagi ananda untuk mengembangkan bakat, minat, dan jiwa kepemimpinan."
        crumbs={[{ label: "Ekstrakurikuler" }]}
      />
      <section className="section-pad">
        <div className="container">
          <EkskulDirectory extracurriculars={items} />
        </div>
      </section>
    </>
  );
}
