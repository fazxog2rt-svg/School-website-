import * as React from "react";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function DashTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Panel({
  title,
  action,
  className,
  children,
}: {
  title?: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6", className)}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h2 className="font-display text-lg font-bold text-foreground">{title}</h2>
          )}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  tone = "emerald",
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: { value: string; up: boolean };
  tone?: "emerald" | "gold" | "blue" | "rose";
}) {
  const tones = {
    emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    gold: "bg-gold-100 text-gold-700 dark:bg-gold-500/15 dark:text-gold-300",
    blue: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    rose: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  };
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", tones[tone])}>
          <Icon className="h-5 w-5" />
        </span>
        {trend && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-xs font-semibold",
              trend.up ? "text-emerald-600" : "text-rose-500"
            )}
          >
            {trend.up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
            {trend.value}
          </span>
        )}
      </div>
      <p className="mt-4 font-display text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-0.5 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Aktif: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    Nonaktif: "bg-muted text-muted-foreground",
    Hadir: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    Izin: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    Sakit: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    Alpha: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
    Dinilai: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    Dikerjakan: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    Belum: "bg-muted text-muted-foreground",
    Lunas: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    "Belum Bayar": "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  };
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold",
        map[status] ?? "bg-muted text-muted-foreground"
      )}
    >
      {status}
    </span>
  );
}
