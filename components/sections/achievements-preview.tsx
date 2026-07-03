"use client";

import { motion } from "framer-motion";
import { AchievementCard } from "@/components/cards/achievement-card";
import { PreviewHeader } from "@/components/sections/preview-header";
import { achievements } from "@/lib/data/achievements";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";

export function AchievementsPreview() {
  const featured = achievements.slice(0, 3);
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container">
        <PreviewHeader
          eyebrow="Prestasi Membanggakan"
          title="Torehan Juara Kami"
          href="/prestasi"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {featured.map((a) => (
            <motion.div key={a.id} variants={staggerItem}>
              <AchievementCard item={a} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
