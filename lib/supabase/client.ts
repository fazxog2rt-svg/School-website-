"use client";

import { createBrowserClient } from "@supabase/ssr";
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "./config";

let browserClient: ReturnType<typeof createBrowserClient> | null = null;

/**
 * Client Supabase untuk komponen browser. Mengembalikan null bila
 * kredensial belum diatur (mode demo/mock).
 */
export function getSupabaseBrowser() {
  if (!isSupabaseConfigured) return null;
  if (!browserClient) {
    browserClient = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return browserClient;
}
