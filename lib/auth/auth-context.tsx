"use client";

import * as React from "react";
import { demoUsers, type DemoUser, type Role } from "@/lib/auth/roles";

type AuthState = {
  user: DemoUser | null;
  ready: boolean;
  login: (email: string) => DemoUser | null;
  loginAs: (role: Role) => DemoUser | null;
  logout: () => void;
};

const AuthContext = React.createContext<AuthState | null>(null);
const STORAGE_KEY = "mtsn1-demo-user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<DemoUser | null>(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const persist = React.useCallback((u: DemoUser | null) => {
    setUser(u);
    try {
      if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const login = React.useCallback(
    (email: string) => {
      const found =
        demoUsers.find((u) => u.email.toLowerCase() === email.toLowerCase()) ??
        null;
      if (found) persist(found);
      return found;
    },
    [persist]
  );

  const loginAs = React.useCallback(
    (role: Role) => {
      const found = demoUsers.find((u) => u.role === role) ?? null;
      if (found) persist(found);
      return found;
    },
    [persist]
  );

  const logout = React.useCallback(() => persist(null), [persist]);

  return (
    <AuthContext.Provider value={{ user, ready, login, loginAs, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
