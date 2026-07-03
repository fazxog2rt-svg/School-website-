import { cn } from "@/lib/utils";
import * as React from "react";

type BadgeProps = {
  tone?: "emerald" | "gold" | "muted" | "blue";
} & React.HTMLAttributes<HTMLSpanElement>;

const tones = {
  emerald:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  gold: "bg-gold-100 text-gold-800 dark:bg-gold-500/15 dark:text-gold-300",
  muted: "bg-muted text-muted-foreground",
  blue: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
};

export function Badge({ tone = "emerald", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
