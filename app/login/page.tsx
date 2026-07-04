"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Lock, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useAuth } from "@/lib/auth/auth-context";
import { demoUsers, roleLabels } from "@/lib/auth/roles";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const { login, loginAs, user, ready, usingSupabase } = useAuth();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("demo");
  const [error, setError] = React.useState("");
  const [busy, setBusy] = React.useState(false);

  React.useEffect(() => {
    if (ready && user) router.replace("/dashboard");
  }, [ready, user, router]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await login(email, password);
    setBusy(false);
    if (res.ok) router.push("/dashboard");
    else setError(res.error ?? "Gagal masuk. Periksa email/kata sandi Anda.");
  }

  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-900 to-teal-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute inset-0 bg-grid-emerald bg-[size:40px_40px] opacity-30" />
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
        <Link href="/" className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
            <GraduationCap className="h-6 w-6" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-bold">MTsN 1 Probolinggo</p>
            <p className="text-xs uppercase tracking-[0.18em] text-gold-300">
              Digital Platform
            </p>
          </div>
        </Link>
        <div className="relative">
          <h1 className="font-display text-4xl font-bold leading-tight balance">
            Portal Digital untuk Seluruh Warga Madrasah
          </h1>
          <p className="mt-4 max-w-md text-emerald-50/80">
            Satu akun untuk mengakses nilai, jadwal, materi, absensi, dan seluruh
            layanan akademik secara aman dan real-time.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-emerald-50/70">
            <ShieldCheck className="h-5 w-5 text-gold-300" />
            Terlindungi enkripsi & autentikasi berlapis
          </div>
        </div>
        <p className="relative text-xs text-emerald-100/50">
          © {new Date().getFullYear()} MTsN 1 Probolinggo
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-background p-6 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground lg:hidden"
          >
            ← Kembali ke Beranda
          </Link>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Masuk ke Akun Anda
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Selamat datang kembali! Silakan masuk untuk melanjutkan.
          </p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="email@mtsn1probolinggo.sch.id"
                  className="h-11 w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            {error && <p className="text-sm text-rose-500">{error}</p>}
            <button
              type="submit"
              disabled={busy}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60"
            >
              {busy ? "Memproses…" : "Masuk"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Demo quick access — hanya mode tanpa Supabase */}
          {!usingSupabase && (
            <div className="mt-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">
                  Masuk cepat (demo)
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {demoUsers.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => {
                      loginAs(u.role);
                      router.push("/dashboard");
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border border-border bg-card p-2.5 text-left transition-colors hover:border-emerald-500 hover:bg-secondary"
                    )}
                  >
                    <Image
                      src={u.avatar}
                      alt={u.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-foreground">
                      {roleLabels[u.role]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {usingSupabase && (
            <p className="mt-6 rounded-xl bg-secondary/60 p-3 text-center text-xs text-muted-foreground">
              Terhubung ke Supabase. Masuk dengan email & kata sandi akun Anda.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
