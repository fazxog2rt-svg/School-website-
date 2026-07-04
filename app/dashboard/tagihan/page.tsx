"use client";

import { CreditCard, Wallet } from "lucide-react";
import * as React from "react";
import { DashTitle, Panel, StatCard, StatusPill } from "@/components/dashboard/ui";
import { bills as allBills } from "@/lib/data/dashboard";
import { formatRupiah } from "@/lib/utils";
import { toast } from "@/lib/toast";

export default function TagihanPage() {
  const [bills, setBills] = React.useState(allBills);
  const unpaid = bills.filter((b) => !b.paid).reduce((s, b) => s + b.amount, 0);
  const paid = bills.filter((b) => b.paid).reduce((s, b) => s + b.amount, 0);

  function pay(id: string, label: string) {
    setBills((p) => p.map((b) => (b.id === id ? { ...b, paid: true } : b)));
    toast(`Pembayaran "${label}" berhasil (demo).`);
  }

  return (
    <>
      <DashTitle title="Tagihan & Pembayaran" subtitle="Kelola pembayaran SPP dan biaya lainnya." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Belum Terbayar" value={formatRupiah(unpaid)} icon={Wallet} tone="rose" />
        <StatCard label="Sudah Terbayar" value={formatRupiah(paid)} icon={CreditCard} tone="emerald" />
        <StatCard label="Total Tagihan" value={formatRupiah(unpaid + paid)} icon={Wallet} tone="gold" />
      </div>

      <div className="mt-6">
        <Panel title="Rincian Tagihan">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Keterangan</th>
                  <th className="pb-3 font-medium">Jumlah</th>
                  <th className="pb-3 font-medium">Jatuh Tempo</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((b) => (
                  <tr key={b.id} className="border-b border-border last:border-0">
                    <td className="py-3 font-medium text-foreground">{b.label}</td>
                    <td className="py-3 text-muted-foreground">{formatRupiah(b.amount)}</td>
                    <td className="py-3 text-muted-foreground">{b.due}</td>
                    <td className="py-3"><StatusPill status={b.paid ? "Lunas" : "Belum Bayar"} /></td>
                    <td className="py-3 text-right">
                      {b.paid ? (
                        <span className="text-xs text-muted-foreground">—</span>
                      ) : (
                        <button
                          onClick={() => pay(b.id, b.label)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                        >
                          <CreditCard className="h-3.5 w-3.5" /> Bayar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </>
  );
}
