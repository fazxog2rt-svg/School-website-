"use client";

import { Plus, Pin } from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";
import { roleGroup } from "@/lib/auth/roles";
import { DashTitle, Panel } from "@/components/dashboard/ui";
import { Badge } from "@/components/ui/badge";
import { announcements } from "@/lib/data/announcements";
import { formatDate } from "@/lib/utils";
import { toast } from "@/lib/toast";

export default function PengumumanDashboardPage() {
  const { user } = useAuth();
  const canManage = user && roleGroup(user.role) === "admin";

  return (
    <>
      <DashTitle title="Pengumuman" subtitle={canManage ? "Kelola pengumuman madrasah." : "Pengumuman terbaru untuk Anda."} />
      <Panel
        title="Daftar Pengumuman"
        action={
          canManage ? (
            <button
              onClick={() => toast("Editor pengumuman akan terhubung ke backend.", "info")}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              <Plus className="h-4 w-4" /> Buat Pengumuman
            </button>
          ) : undefined
        }
      >
        <ul className="space-y-3">
          {announcements.map((a) => (
            <li key={a.id} className="flex flex-col gap-2 rounded-2xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {a.pinned && <Pin className="h-3.5 w-3.5 text-gold-500" />}
                  <Badge tone="emerald">{a.category}</Badge>
                  <span className="text-xs text-muted-foreground">{formatDate(a.date)}</span>
                </div>
                <p className="mt-1.5 font-semibold text-foreground">{a.title}</p>
              </div>
              {a.deadline && (
                <span className="self-start rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-500/15 dark:text-rose-300 sm:self-auto">
                  Tenggat: {formatDate(a.deadline)}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
