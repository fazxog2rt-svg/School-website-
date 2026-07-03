"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  Upload,
  User,
  Users,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, label: "Data Diri", icon: User },
  { id: 2, label: "Data Orang Tua", icon: Users },
  { id: 3, label: "Dokumen", icon: FileText },
  { id: 4, label: "Selesai", icon: Check },
];

const field =
  "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring";
const labelCls = "mb-1.5 block text-sm font-medium text-foreground";

export function PpdbForm() {
  const [step, setStep] = React.useState(1);
  const [regNumber] = React.useState(
    () => "PPDB-2026-" + Math.floor(1000 + Math.random() * 9000)
  );

  const progress = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Stepper */}
      <div className="relative mb-10">
        <div className="absolute left-0 top-5 h-0.5 w-full bg-border" />
        <motion.div
          className="absolute left-0 top-5 h-0.5 bg-emerald-600"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
        <div className="relative flex justify-between">
          {steps.map((s) => {
            const done = step > s.id;
            const activeStep = step === s.id;
            return (
              <div key={s.id} className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background transition-colors",
                    done || activeStep
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-border text-muted-foreground"
                  )}
                >
                  {done ? <Check className="h-5 w-5" /> : <s.icon className="h-5 w-5" />}
                </div>
                <span
                  className={cn(
                    "hidden text-xs font-medium sm:block",
                    activeStep ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Data Diri Calon Siswa
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Nama Lengkap</label>
                    <input className={field} placeholder="Nama sesuai akta" />
                  </div>
                  <div>
                    <label className={labelCls}>NISN</label>
                    <input className={field} placeholder="10 digit NISN" />
                  </div>
                  <div>
                    <label className={labelCls}>Tempat Lahir</label>
                    <input className={field} placeholder="Kota kelahiran" />
                  </div>
                  <div>
                    <label className={labelCls}>Tanggal Lahir</label>
                    <input type="date" className={field} />
                  </div>
                  <div>
                    <label className={labelCls}>Jenis Kelamin</label>
                    <select className={field}>
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Asal Sekolah (SD/MI)</label>
                    <input className={field} placeholder="Nama sekolah asal" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Data Orang Tua / Wali
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Nama Ayah</label>
                    <input className={field} placeholder="Nama ayah" />
                  </div>
                  <div>
                    <label className={labelCls}>Nama Ibu</label>
                    <input className={field} placeholder="Nama ibu" />
                  </div>
                  <div>
                    <label className={labelCls}>No. WhatsApp Aktif</label>
                    <input className={field} placeholder="08xxxxxxxxxx" />
                  </div>
                  <div>
                    <label className={labelCls}>Pekerjaan Orang Tua</label>
                    <input className={field} placeholder="Pekerjaan" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Alamat Domisili</label>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Alamat lengkap"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Unggah Dokumen
                </h3>
                <p className="text-sm text-muted-foreground">
                  Format PDF/JPG, maksimal 2MB per berkas.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Kartu Keluarga",
                    "Akta Kelahiran",
                    "Ijazah / SKL",
                    "Pas Foto 3x4",
                  ].map((doc) => (
                    <label
                      key={doc}
                      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background p-6 text-center transition-colors hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-500/5"
                    >
                      <Upload className="h-6 w-6 text-emerald-500" />
                      <span className="text-sm font-medium text-foreground">
                        {doc}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Klik untuk unggah
                      </span>
                      <input type="file" className="hidden" />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="flex flex-col items-center py-4 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15"
                >
                  <CheckCircle2 className="h-10 w-10" />
                </motion.div>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                  Pendaftaran Berhasil!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Simpan nomor pendaftaran Anda. Verifikasi & pembaruan status
                  akan dikirim melalui email dan WhatsApp.
                </p>
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-5">
                  <div
                    className="grid h-24 w-24 shrink-0 grid-cols-6 gap-0.5 rounded-lg bg-white p-2"
                    aria-hidden
                  >
                    {Array.from({ length: 36 }).map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "rounded-[1px]",
                          (i * 7 + 3) % 3 === 0 ? "bg-emerald-950" : "bg-transparent"
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">
                      Nomor Pendaftaran
                    </p>
                    <p className="font-display text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      {regNumber}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Status:{" "}
                      <span className="font-semibold text-gold-600">
                        Menunggu Verifikasi
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        {step < 4 && (
          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className={cn(step === 1 && "invisible")}
            >
              <ArrowLeft className="h-4 w-4" /> Kembali
            </Button>
            <Button onClick={() => setStep((s) => Math.min(4, s + 1))}>
              {step === 3 ? "Kirim Pendaftaran" : "Lanjut"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
