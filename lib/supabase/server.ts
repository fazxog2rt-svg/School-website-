import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "./config";

/**
 * Client Supabase untuk Server Component / Route Handler.
 * Mengembalikan null bila kredensial belum diatur (mode demo/mock).
 */
export function getSupabaseServer() {
  if (!isSupabaseConfigured) return null;

  const cookieStore = cookies();
  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // dipanggil dari Server Component — aman diabaikan (middleware me-refresh sesi)
        }
      },
    },
  });
}
