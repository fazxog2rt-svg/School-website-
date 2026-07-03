"use client";

import { motion } from "framer-motion";
import { NewsCard } from "@/components/cards/news-card";
import { PreviewHeader } from "@/components/sections/preview-header";
import { news } from "@/lib/data/news";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";

export function NewsPreview() {
  const featured = news.find((n) => n.featured) ?? news[0];
  const rest = news.filter((n) => n.id !== featured.id).slice(0, 2);

  return (
    <section className="section-pad">
      <div className="container">
        <PreviewHeader
          eyebrow="Berita & Informasi"
          title="Kabar Terbaru Madrasah"
          href="/berita"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-5 lg:grid-cols-2"
        >
          <motion.div variants={staggerItem} className="lg:row-span-2">
            <NewsCard item={featured} featured />
          </motion.div>
          {rest.map((n) => (
            <motion.div key={n.id} variants={staggerItem}>
              <NewsCard item={n} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
