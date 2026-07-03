"use client";

import { motion } from "framer-motion";
import { TeacherCard } from "@/components/cards/teacher-card";
import { PreviewHeader } from "@/components/sections/preview-header";
import { teachers } from "@/lib/data/teachers";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";

export function TeachersPreview() {
  const featured = teachers.slice(1, 5);
  return (
    <section className="section-pad">
      <div className="container">
        <PreviewHeader
          eyebrow="Tenaga Pendidik"
          title="Guru Profesional & Inspiratif"
          href="/guru"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((t) => (
            <motion.div key={t.id} variants={staggerItem}>
              <TeacherCard teacher={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
