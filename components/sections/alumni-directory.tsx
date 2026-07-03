"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, GraduationCap, Quote, Search, Store } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { alumni, alumniStatuses, alumniYears } from "@/lib/data/alumni";
import { cn } from "@/lib/utils";

const statusIcon = {
  Kuliah: GraduationCap,
  Bekerja: Briefcase,
  Wirausaha: Store,
};

export function AlumniDirectory() {
  const [query, setQuery] = React.useState("");
  const [year, setYear] = React.useState("Semua");
  const [status, setStatus] = React.useState<string>("Semua");

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    return alumni.filter((a) => {
      const mQ = !q || a.name.toLowerCase().includes(q) || a.detail.toLowerCase().includes(q);
      const mY = year === "Semua" || String(a.graduationYear) === year;
      const mS = status === "Semua" || a.status === status;
      return mQ && mY && mS;
    });
  }, [query, year, status]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama alumni…"
            className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="h-11 rounded-full border border-border bg-card px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            {alumniYears.map((y) => (
              <option key={y} value={y}>
                {y === "Semua" ? "Semua Angkatan" : `Angkatan ${y}`}
              </option>
            ))}
          </select>
          <div className="flex gap-2">
            {alumniStatuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  status === s
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-border bg-card text-muted-foreground hover:bg-secondary"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((a) => {
            const Icon = statusIcon[a.status];
            return (
              <motion.article
                key={a.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft card-hover"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={a.avatar}
                    alt={a.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-emerald-500/20"
                  />
                  <div>
                    <h3 className="font-display font-bold text-foreground">{a.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      Angkatan {a.graduationYear}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-secondary/60 px-3 py-2 text-sm">
                  <Icon className="h-4 w-4 text-emerald-600" />
                  <span className="text-foreground">{a.detail}</span>
                </div>
                {a.testimonial && (
                  <div className="mt-4 flex-1">
                    <Quote className="h-5 w-5 text-emerald-500/30" />
                    <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">
                      {a.testimonial}
                    </p>
                  </div>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
