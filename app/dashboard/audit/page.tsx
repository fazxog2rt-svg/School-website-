"use client";

import { ShieldCheck } from "lucide-react";
import { DashTitle, Panel } from "@/components/dashboard/ui";
import { activityLogs } from "@/lib/data/dashboard";

export default function AuditPage() {
  return (
    <>
      <DashTitle title="Audit & Activity Log" subtitle="Rekam jejak aktivitas seluruh pengguna sistem." />
      <Panel>
        <ul className="space-y-1">
          {[...activityLogs, ...activityLogs].map((log, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-secondary/60"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{log.user}</span> — {log.action}
                </p>
                <p className="text-xs text-muted-foreground">{log.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
