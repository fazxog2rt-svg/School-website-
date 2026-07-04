export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/**
 * True jika kredensial Supabase tersedia. Bila false, aplikasi otomatis
 * memakai data contoh (mock) sehingga tetap dapat berjalan & di-build.
 */
export const isSupabaseConfigured =
  SUPABASE_URL.startsWith("http") && SUPABASE_ANON_KEY.length > 20;
