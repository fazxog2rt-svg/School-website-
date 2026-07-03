"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, Newspaper } from "lucide-react";
import * as React from "react";
import { NewsCard } from "@/components/cards/news-card";
import { news, newsCategories } from "@/lib/data/news";
import { cn } from "@/lib/utils";

export function BeritaDirectory() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string>("Semua");

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    return news.filter((n) => {
      const matchCat = category === "Semua" || n.category === category;
      const matchQuery =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.tags.join(" ").toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari berita atau tag…"
            className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {newsCategories.map((cat) => (
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

      {filtered.length > 0 ? (
        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((n) => (
              <motion.div
                key={n.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <NewsCard item={n} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
          <Newspaper className="h-12 w-12 text-muted-foreground/50" />
          <p className="mt-4 font-semibold text-foreground">
            Tidak ada berita ditemukan
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Coba kata kunci atau kategori lain.
          </p>
        </div>
      )}
    </div>
  );
}
