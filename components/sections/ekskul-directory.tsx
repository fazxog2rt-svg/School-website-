"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, CalendarDays, UserCog } from "lucide-react";
import * as React from "react";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  extracurriculars as mockEkskul,
  extracurricularCategories,
  type Extracurricular,
} from "@/lib/data/extracurriculars";
import { cn } from "@/lib/utils";

export function EkskulDirectory({ extracurriculars = mockEkskul }: { extracurriculars?: Extracurricular[] }) {
  const [category, setCategory] = React.useState<string>("Semua");

  const filtered = React.useMemo(
    () =>
      category === "Semua"
        ? extracurriculars
        : extracurriculars.filter((e) => e.category === category),
    [category, extracurriculars]
  );

  return (
    <div>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {extracurricularCategories.map((cat) => (
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

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((e) => (
            <motion.article
              key={e.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft card-hover"
            >
              <div className="relative flex h-28 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800">
                <div className="absolute inset-0 bg-grid-emerald bg-[size:24px_24px] opacity-30" />
                <span className="relative text-5xl transition-transform duration-300 group-hover:scale-110">
                  {e.emoji}
                </span>
                <Badge tone="gold" className="absolute right-3 top-3">
                  {e.category}
                </Badge>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {e.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
                <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <UserCog className="h-4 w-4 text-emerald-500" /> {e.coach}
                  </p>
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-emerald-500" />{" "}
                    {e.schedule}
                  </p>
                  <p className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-gold-500" />{" "}
                    {e.achievements[0]}
                  </p>
                </div>
                <ButtonLink
                  href="/ppdb"
                  variant="outline"
                  size="sm"
                  className="mt-5"
                >
                  Daftar Ekskul
                </ButtonLink>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
