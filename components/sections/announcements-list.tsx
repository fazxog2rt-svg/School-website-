"use client";

import { motion } from "framer-motion";
import { Download, FileText, Pin } from "lucide-react";
import * as React from "react";
import { announcements, type Announcement } from "@/lib/data/announcements";
import { Badge } from "@/components/ui/badge";
import { formatDate, cn } from "@/lib/utils";

const categoryTone: Record<Announcement["category"], "emerald" | "gold" | "blue" | "muted"> = {
  Akademik: "emerald",
  PPDB: "gold",
  Kegiatan: "blue",
  Umum: "muted",
};

function Countdown({ deadline }: { deadline: string }) {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = +new Date(deadline) - now;
  if (diff <= 0)
    return (
      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
        Telah berakhir
      </span>
    );

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const units = [
    { v: d, l: "Hari" },
    { v: h, l: "Jam" },
    { v: m, l: "Menit" },
    { v: s, l: "Detik" },
  ];

  return (
    <div className="flex gap-2">
      {units.map((u) => (
        <div
          key={u.l}
          className="flex min-w-[3rem] flex-col items-center rounded-xl bg-emerald-600 px-2 py-1.5 text-white"
        >
          <span className="font-display text-lg font-bold tabular-nums">
            {String(u.v).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-wide">{u.l}</span>
        </div>
      ))}
    </div>
  );
}

export function AnnouncementsList() {
  const pinned = announcements.filter((a) => a.pinned);
  const rest = announcements.filter((a) => !a.pinned);

  return (
    <div className="space-y-10">
      {pinned.length > 0 && (
        <div>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground">
            <Pin className="h-5 w-5 text-gold-500" /> Disematkan
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {pinned.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-gold-300/40 bg-gradient-to-br from-gold-50 to-card p-6 shadow-soft dark:from-gold-500/5"
              >
                <div className="flex items-center justify-between">
                  <Badge tone={categoryTone[a.category]}>{a.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(a.date)}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
                {a.deadline && (
                  <div className="mt-4">
                    <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                      Batas waktu:
                    </p>
                    <Countdown deadline={a.deadline} />
                  </div>
                )}
                {a.hasPdf && (
                  <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700">
                    <Download className="h-3.5 w-3.5" /> Unduh Lampiran PDF
                  </button>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="mb-4 font-display text-xl font-bold text-foreground">
          Pengumuman Lainnya
        </h2>
        <div className="space-y-4">
          {rest.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft sm:flex-row sm:items-center"
            >
              <span
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                  "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                )}
              >
                <FileText className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={categoryTone[a.category]}>{a.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(a.date)}
                  </span>
                </div>
                <h3 className="mt-1.5 font-semibold text-foreground">{a.title}</h3>
                <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
                  {a.body}
                </p>
              </div>
              {a.hasPdf && (
                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary">
                  <Download className="h-4 w-4" />
                </button>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
