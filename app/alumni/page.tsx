import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AlumniDirectory } from "@/components/sections/alumni-directory";

export const metadata: Metadata = {
  title: "Alumni",
  description:
    "Database alumni MTsN 1 Probolinggo — jejak kiprah lulusan di dunia pendidikan, karier, dan wirausaha.",
};

export default function AlumniPage() {
  return (
    <>
      <PageHeader
        title="Jejak Alumni"
        description="Ribuan lulusan yang terus berkarya dan menginspirasi di berbagai bidang."
        crumbs={[{ label: "Alumni" }]}
      />
      <section className="section-pad">
        <div className="container">
          <AlumniDirectory />
        </div>
      </section>
    </>
  );
}
