"use client";

import { useCountUp } from "@/hooks/use-count-up";
import type { Stat } from "@/types";

export function StatItem({ stat }: { stat: Stat }) {
  const { ref, display } = useCountUp({
    target: stat.value,
    decimals: stat.decimals ?? 0,
  });

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
        <span ref={ref} className="tabular-nums">
          {display}
        </span>
        <span className="text-gradient">{stat.suffix}</span>
      </div>
      <p className="text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}
