"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/lib/data/stats";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";

export function StatsSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="MTsN 1 dalam Angka"
          title="Capaian yang Membanggakan"
          description="Data pencapaian madrasah yang terus bertumbuh dari tahun ke tahun."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft card-hover"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-150" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                <stat.icon className="h-6 w-6" />
              </span>
              <p className="relative mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="relative mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
