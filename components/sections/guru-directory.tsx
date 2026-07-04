"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, UserX } from "lucide-react";
import * as React from "react";
import { TeacherCard } from "@/components/cards/teacher-card";
import { teachers as mockTeachers, teacherCategories, type Teacher } from "@/lib/data/teachers";
import { cn } from "@/lib/utils";

const PER_PAGE = 8;

export function GuruDirectory({ teachers = mockTeachers }: { teachers?: Teacher[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string>("Semua");
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    return teachers.filter((t) => {
      const matchCat = category === "Semua" || t.category === category;
      const matchQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.subject.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category, teachers]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const shown = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  React.useEffect(() => setPage(1), [query, category]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama atau mata pelajaran…"
            className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {teacherCategories.map((cat) => (
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
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Menampilkan{" "}
        <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
        guru
      </p>

      {/* Grid */}
      {shown.length > 0 ? (
        <motion.div
          layout
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <TeacherCard teacher={t} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
          <UserX className="h-12 w-12 text-muted-foreground/50" />
          <p className="mt-4 font-semibold text-foreground">
            Tidak ada guru ditemukan
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Coba ubah kata kunci atau filter kategori.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={current === 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card disabled:opacity-40"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={cn(
                "h-10 w-10 rounded-full text-sm font-semibold transition-colors",
                current === i + 1
                  ? "bg-emerald-600 text-white"
                  : "border border-border bg-card text-muted-foreground hover:bg-secondary"
              )}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={current === totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card disabled:opacity-40"
            aria-label="Berikutnya"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
