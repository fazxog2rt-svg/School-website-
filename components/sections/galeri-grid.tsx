"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { gallery, galleryCategories, type GalleryItem } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

export function GaleriGrid() {
  const [category, setCategory] = React.useState<string>("Semua");
  const [active, setActive] = React.useState<GalleryItem | null>(null);

  const filtered = React.useMemo(
    () =>
      category === "Semua"
        ? gallery
        : gallery.filter((g) => g.category === category),
    [category]
  );

  return (
    <div>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              category === cat
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-border bg-card text-muted-foreground hover:bg-secondary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 columns-2 gap-4 [column-fill:_balance] md:columns-3 lg:columns-4"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setActive(item)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-border shadow-soft"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={item.span === "tall" ? 800 : 450}
                className={cn(
                  "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                  item.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                )}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4 text-left text-white">
                  <span className="rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-bold">
                    {item.category}
                  </span>
                  <p className="mt-2 font-semibold">{item.title}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-emerald-950/80 p-4 backdrop-blur-sm"
          >
            <button
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl"
            >
              <Image
                src={active.image}
                alt={active.title}
                width={1200}
                height={800}
                className="max-h-[85vh] w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/90 to-transparent p-6 text-white">
                <span className="rounded-full bg-gold-500 px-2.5 py-0.5 text-xs font-bold">
                  {active.category}
                </span>
                <p className="mt-2 font-display text-xl font-bold">
                  {active.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
