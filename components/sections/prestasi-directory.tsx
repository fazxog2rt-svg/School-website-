"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SearchX } from "lucide-react";
import * as React from "react";
import { AchievementCard } from "@/components/cards/achievement-card";
import { achievements, achievementCategories } from "@/lib/data/achievements";
import { cn } from "@/lib/utils";

export function PrestasiDirectory() {
  const [category, setCategory] = React.useState<string>("Semua");

  const filtered = React.useMemo(
    () =>
      category === "Semua"
        ? achievements
        : achievements.filter((a) => a.category === category),
    [category]
  );

  return (
    <div>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {achievementCategories.map((cat) => (
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

      {filtered.length > 0 ? (
        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((a) => (
              <motion.div
                key={a.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <AchievementCard item={a} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
          <SearchX className="h-12 w-12 text-muted-foreground/50" />
          <p className="mt-4 font-semibold text-foreground">
            Belum ada prestasi pada kategori ini
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Pilih kategori lain untuk melihat prestasi lainnya.
          </p>
        </div>
      )}
    </div>
  );
}
