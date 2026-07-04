"use client";

import * as React from "react";
import { demoUsers, type DemoUser, type Role } from "@/lib/auth/roles";
import { getSupabaseBrowser } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

type LoginResult = { ok: boolean; error?: string };

type AuthState = {
  user: DemoUser | null;
  ready: boolean;
  usingSupabase: boolean;
  login: (email: string, password?: string) => Promise<LoginResult>;
  loginAs: (role: Role) => DemoUser | null;
  logout: () => Promise<void>;
};

const AuthContext = React.createContext<AuthState | null>(null);
const STORAGE_KEY = "mtsn1-demo-user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<DemoUser | null>(null);
  const [ready, setReady] = React.useState(false);
  const sb = getSupabaseBrowser();

  // Bangun profil DemoUser dari sesi Supabase
  const loadSupabaseUser = React.useCallback(async () => {
    if (!sb) return null;
    const { data: sess } = await sb.auth.getUser();
    const authUser = sess.user;
    if (!authUser) return null;
    const { data: profile } = await sb
      .from("profiles")
      .select("*")
      .eq("id", authUser.id)
      .single();
    const mapped: DemoUser = {
      id: authUser.id,
      name: (profile as any)?.full_name || authUser.email || "Pengguna",
      email: authUser.email || "",
      role: ((profile as any)?.role as Role) || "siswa",
      avatar:
        (profile as any)?.avatar_url ||
        `https://i.pravatar.cc/150?u=${authUser.id}`,
      meta: (profile as any)?.meta || undefined,
    };
    return mapped;
  }, [sb]);

  React.useEffect(() => {
    let active = true;
    (async () => {
      if (isSupabaseConfigured && sb) {
        const u = await loadSupabaseUser();
        if (active) setUser(u);
        const { data: sub } = sb.auth.onAuthStateChange(async () => {
          const next = await loadSupabaseUser();
          if (active) setUser(next);
        });
        if (active) setReady(true);
        return () => sub.subscription.unsubscribe();
      }
      // Mode demo (tanpa Supabase)
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw && active) setUser(JSON.parse(raw));
      } catch {
        /* ignore */
      }
      if (active) setReady(true);
    })();
    return () => {
      active = false;
    };
  }, [sb, loadSupabaseUser]);

  const persistDemo = React.useCallback((u: DemoUser | null) => {
    setUser(u);
    try {
      if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const login = React.useCallback(
    async (email: string, password?: string): Promise<LoginResult> => {
      if (isSupabaseConfigured && sb) {
        const { error } = await sb.auth.signInWithPassword({
          email,
          password: password ?? "",
        });
        if (error) return { ok: false, error: error.message };
        const u = await loadSupabaseUser();
        setUser(u);
        return { ok: true };
      }
      // Demo: cocokkan email dengan akun contoh
      const found = demoUsers.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (!found) return { ok: false, error: "Email tidak ditemukan." };
      persistDemo(found);
      return { ok: true };
    },
    [sb, loadSupabaseUser, persistDemo]
  );

  const loginAs = React.useCallback(
    (role: Role) => {
      // Quick-access hanya untuk mode demo
      const found = demoUsers.find((u) => u.role === role) ?? null;
      if (found) persistDemo(found);
      return found;
    },
    [persistDemo]
  );

  const logout = React.useCallback(async () => {
    if (isSupabaseConfigured && sb) {
      await sb.auth.signOut();
      setUser(null);
      return;
    }
    persistDemo(null);
  }, [sb, persistDemo]);

  return (
    <AuthContext.Provider
      value={{
        user,
        ready,
        usingSupabase: isSupabaseConfigured,
        login,
        loginAs,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
