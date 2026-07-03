"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Counter } from "@/components/ui/counter";

const heroStats = [
  { label: "Siswa Aktif", value: 1240, suffix: "+" },
  { label: "Prestasi", value: 88, suffix: "+" },
  { label: "Akreditasi", value: 100, suffix: "% A" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-16">
      {/* Background: video-ready layer (drop a <video> here for real footage) */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Overlays & decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-emerald bg-[size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -left-24 bottom-12 -z-10 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-gold-300" />
            <span>Terakreditasi A • Madrasah Unggul & Berkarakter</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl balance"
          >
            Membangun Generasi
            <br />
            <span className="bg-gradient-to-r from-gold-200 via-gold-300 to-gold-400 bg-clip-text text-transparent">
              Cerdas & Berakhlak
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-emerald-50/85 md:text-xl balance"
          >
            {site.vision}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <ButtonLink href="/ppdb" size="lg" variant="gold" className="w-full sm:w-auto">
              Daftar PPDB Online
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink
              href="/profil"
              size="lg"
              className="w-full border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 sm:w-auto"
            >
              <PlayCircle className="h-5 w-5" />
              Profil Madrasah
            </ButtonLink>
          </motion.div>

          {/* Floating realtime stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/10 py-5 backdrop-blur-xl"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="px-2">
                <p className="font-display text-2xl font-bold text-gold-200 sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-emerald-50/70 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-white"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
