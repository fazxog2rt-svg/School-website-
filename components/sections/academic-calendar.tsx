"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import * as React from "react";
import {
  calendarEvents as mockCalendar,
  eventTypeColors,
  type CalendarEvent,
} from "@/lib/data/calendar";
import { cn } from "@/lib/utils";
import { toast, downloadFile } from "@/lib/toast";

const monthNames = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];
const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const types = ["Semua", "Akademik", "Ujian", "Kegiatan", "Libur", "Keagamaan"] as const;

function eventsOnDay(
  events: CalendarEvent[],
  y: number,
  m: number,
  d: number
): CalendarEvent[] {
  return events.filter((e) => {
    const start = new Date(e.date);
    const end = e.endDate ? new Date(e.endDate) : start;
    const day = new Date(y, m, d);
    day.setHours(12);
    return day >= new Date(start.setHours(0)) && day <= new Date(end.setHours(23));
  });
}

export function AcademicCalendar({ events = mockCalendar }: { events?: CalendarEvent[] }) {
  const [cursor, setCursor] = React.useState(new Date(2026, 6, 1));
  const [filter, setFilter] = React.useState<string>("Semua");

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const upcoming = events
    .filter((e) => filter === "Semua" || e.type === filter)
    .slice()
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));

  function exportIcs() {
    const fmt = (d: string) => d.replace(/-/g, "");
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//MTsN 1 Probolinggo//Kalender Akademik//ID",
      ...upcoming.flatMap((e) => {
        const end = e.endDate ?? e.date;
        return [
          "BEGIN:VEVENT",
          `UID:${e.id}@mtsn1probolinggo.sch.id`,
          `DTSTART;VALUE=DATE:${fmt(e.date)}`,
          `DTEND;VALUE=DATE:${fmt(end)}`,
          `SUMMARY:${e.title}`,
          `CATEGORIES:${e.type}`,
          "END:VEVENT",
        ];
      }),
      "END:VCALENDAR",
    ];
    downloadFile("kalender-akademik.ics", lines.join("\r\n"), "text/calendar;charset=utf-8");
    toast("Kalender diunduh (.ics) — buka di Google Calendar.");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      {/* Calendar */}
      <div className="rounded-3xl border border-border bg-card p-5 shadow-soft md:p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-foreground">
            {monthNames[month]} {year}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => setCursor(new Date(year, month - 1, 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"
              aria-label="Bulan sebelumnya"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCursor(new Date(year, month + 1, 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"
              aria-label="Bulan berikutnya"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground">
          {dayNames.map((d) => (
            <div key={d} className="py-2">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            if (day === null) return <div key={i} />;
            const dayEvents = eventsOnDay(events, year, month, day).filter(
              (e) => filter === "Semua" || e.type === filter
            );
            return (
              <div
                key={i}
                className={cn(
                  "min-h-[64px] rounded-lg border border-transparent p-1.5 text-left transition-colors hover:border-border",
                  dayEvents.length > 0 && "bg-secondary/50"
                )}
              >
                <span className="text-xs font-semibold text-foreground">{day}</span>
                <div className="mt-1 space-y-0.5">
                  {dayEvents.slice(0, 2).map((e) => (
                    <div
                      key={e.id}
                      title={e.title}
                      className={cn(
                        "truncate rounded px-1 py-0.5 text-[9px] font-medium text-white",
                        eventTypeColors[e.type]
                      )}
                    >
                      {e.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <span className="text-[9px] text-muted-foreground">
                      +{dayEvents.length - 2} lainnya
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar */}
      <div>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                filter === t
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <button
          onClick={exportIcs}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <Download className="h-4 w-4" /> Export ke Google Calendar (.ics)
        </button>

        <div className="mt-5 space-y-3">
          {upcoming.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <span className={cn("mt-1 h-3 w-3 shrink-0 rounded-full", eventTypeColors[e.type])} />
              <div>
                <p className="text-sm font-semibold text-foreground">{e.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {new Date(e.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  {e.endDate &&
                    ` – ${new Date(e.endDate).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                    })}`}
                </p>
                <span className="mt-1 inline-block text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  {e.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
