"use client";

import { Plus, Upload } from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";
import { roleGroup } from "@/lib/auth/roles";
import { DashTitle, Panel, StatusPill } from "@/components/dashboard/ui";
import { assignments } from "@/lib/data/elearning";

export default function TugasPage() {
  const { user } = useAuth();
  if (!user) return null;
  const isTeacher = roleGroup(user.role) === "guru" || roleGroup(user.role) === "admin";

  return (
    <>
      <DashTitle
        title={isTeacher ? "Tugas & Koreksi" : "Tugas Saya"}
        subtitle={isTeacher ? "Buat tugas dan koreksi pekerjaan siswa." : "Kerjakan dan pantau status tugasmu."}
      />
      <Panel
        title="Daftar Tugas"
        action={
          isTeacher ? (
            <button className="inline-flex h-10 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700">
              <Plus className="h-4 w-4" /> Buat Tugas
            </button>
          ) : undefined
        }
      >
        <div className="space-y-3">
          {assignments.map((a) => (
            <div key={a.id} className="flex flex-col gap-3 rounded-2xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-foreground">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.subject} · Tenggat {a.due}</p>
              </div>
              <div className="flex items-center gap-3">
                {a.score != null && (
                  <span className="font-display text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {a.score}
                  </span>
                )}
                <StatusPill status={a.status} />
                {!isTeacher && a.status !== "Dinilai" && (
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700">
                    <Upload className="h-3.5 w-3.5" /> Kumpulkan
                  </button>
                )}
                {isTeacher && (
                  <button className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary">
                    Koreksi
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </>
  );
}
