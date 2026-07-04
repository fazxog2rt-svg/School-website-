"use client";

import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { DashTitle, Panel, StatusPill } from "@/components/dashboard/ui";
import { managedUsers } from "@/lib/data/dashboard";
import { toast } from "@/lib/toast";

const roles = ["Semua", "Kepala Madrasah", "Guru", "Staff TU", "Operator"];

export default function PenggunaPage() {
  const [query, setQuery] = React.useState("");
  const [role, setRole] = React.useState("Semua");
  const [users, setUsers] = React.useState(managedUsers);

  function removeUser(id: string, name: string) {
    setUsers((p) => p.filter((u) => u.id !== id));
    toast(`Pengguna "${name}" dihapus.`, "info");
  }

  const filtered = users.filter((u) => {
    const q = query.toLowerCase();
    const mQ = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
    const mR = role === "Semua" || u.role === role;
    return mQ && mR;
  });

  return (
    <>
      <DashTitle title="Manajemen Pengguna" subtitle="Kelola akun & hak akses seluruh pengguna sistem." />
      <Panel>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="relative sm:max-w-xs sm:flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari pengguna…"
                className="h-10 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="h-10 rounded-full border border-border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            >
              {roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => toast("Form tambah pengguna akan terhubung ke backend.", "info")}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <Plus className="h-4 w-4" /> Tambah Pengguna
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Nama</th>
                <th className="pb-3 font-medium">Peran</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Aktivitas</th>
                <th className="pb-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-border last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={`https://i.pravatar.cc/80?u=${u.id}`}
                        alt={u.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-foreground">{u.name}</p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-muted-foreground">{u.role}</td>
                  <td className="py-3"><StatusPill status={u.status} /></td>
                  <td className="py-3 text-muted-foreground">{u.lastActive}</td>
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => toast(`Mengedit data "${u.name}" (demo).`, "info")}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-emerald-600"
                        aria-label="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeUser(u.id, u.name)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-500/15"
                        aria-label="Hapus"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}
