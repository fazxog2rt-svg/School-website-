"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Download, Search, Star } from "lucide-react";
import * as React from "react";
import { books as mockBooks, bookCategories, borrowHistory, type Book } from "@/lib/data/library";
import { formatDate, cn } from "@/lib/utils";
import { toast } from "@/lib/toast";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
      <span className="text-xs font-semibold text-foreground">{rating}</span>
    </span>
  );
}

export function LibraryGrid({ books = mockBooks }: { books?: Book[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("Semua");
  const [active, setActive] = React.useState<Book | null>(null);

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    return books.filter((b) => {
      const mQ = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      const mC = category === "Semua" || b.category === category;
      return mQ && mC;
    });
  }, [query, category, books]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari judul atau penulis…"
              className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {bookCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  category === c
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-border bg-card text-muted-foreground hover:bg-secondary"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((b) => (
              <motion.button
                key={b.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setActive(b)}
                className="group text-left"
              >
                <div
                  className="relative flex aspect-[3/4] items-end overflow-hidden rounded-xl p-4 shadow-soft transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: `linear-gradient(150deg, ${b.cover}, #0b3d2e)` }}
                >
                  <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5">
                    <Stars rating={b.rating} />
                  </div>
                  <BookOpen className="absolute right-3 top-10 h-16 w-16 text-white/10" />
                  <div className="relative text-white">
                    <p className="text-[10px] uppercase tracking-wide text-white/70">
                      {b.category}
                    </p>
                    <p className="mt-1 font-display text-sm font-bold leading-tight">
                      {b.title}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{b.author}</p>
                <span
                  className={cn(
                    "text-[11px] font-semibold",
                    b.available ? "text-emerald-600" : "text-rose-500"
                  )}
                >
                  {b.available ? "● Tersedia" : "● Dipinjam"}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Borrow history sidebar */}
      <aside>
        <div className="sticky top-24 rounded-2xl border border-border bg-card p-5 shadow-soft">
          <h3 className="font-display text-lg font-bold text-foreground">
            Riwayat Peminjaman
          </h3>
          <ul className="mt-4 space-y-3">
            {borrowHistory.map((r) => (
              <li key={r.id} className="rounded-xl border border-border p-3">
                <p className="text-sm font-semibold text-foreground">{r.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tenggat: {formatDate(r.dueAt)}
                </p>
                <span
                  className={cn(
                    "mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold",
                    r.status === "Dipinjam" && "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
                    r.status === "Dikembalikan" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
                    r.status === "Terlambat" && "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300"
                  )}
                >
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Book detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-emerald-950/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-elevated"
            >
              <div className="flex gap-4">
                <div
                  className="flex h-40 w-28 shrink-0 items-end rounded-xl p-3 text-white shadow-soft"
                  style={{ background: `linear-gradient(150deg, ${active.cover}, #0b3d2e)` }}
                >
                  <p className="font-display text-sm font-bold leading-tight">
                    {active.title}
                  </p>
                </div>
                <div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    {active.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                    {active.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {active.author} · {active.year}
                  </p>
                  <div className="mt-2">
                    <Stars rating={active.rating} />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {active.synopsis}
              </p>
              <button
                disabled={!active.available}
                onClick={() => {
                  toast(`"${active.title}" berhasil dipinjam (demo).`);
                  setActive(null);
                }}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                {active.available ? "Pinjam / Baca Ebook" : "Sedang Dipinjam"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
