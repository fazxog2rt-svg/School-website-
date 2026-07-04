"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, Download, User } from "lucide-react";
import * as React from "react";
import { classes, days, getSchedule } from "@/lib/data/schedule";
import { cn } from "@/lib/utils";
import { toast } from "@/lib/toast";

export function ScheduleView() {
  const [cls, setCls] = React.useState<string>("8A");
  const [day, setDay] = React.useState<string>("Senin");

  const schedule = getSchedule(cls);
  const active = schedule.find((d) => d.day === day) ?? schedule[0];

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-foreground">Kelas:</span>
          <div className="flex flex-wrap gap-2">
            {classes.map((c) => (
              <button
                key={c}
                onClick={() => setCls(c)}
                className={cn(
                  "h-9 w-11 rounded-full border text-sm font-semibold transition-colors",
                  cls === c
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-border text-muted-foreground hover:bg-secondary"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            toast("Menyiapkan cetakan PDF jadwal…", "info");
            setTimeout(() => window.print(), 300);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <Download className="h-4 w-4" /> Unduh / Cetak PDF
        </button>
      </div>

      {/* Day tabs */}
      <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
        {days.map((d) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
              day === d
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-border bg-card text-muted-foreground hover:bg-secondary"
            )}
          >
            {d}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={cls + day}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-6 space-y-3"
        >
          {active.lessons.map((l, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display font-bold text-foreground">{l.subject}</p>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <User className="h-3 w-3" /> {l.teacher}
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 self-start rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground sm:self-auto">
                <Clock className="h-3.5 w-3.5" /> {l.time}
              </span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
