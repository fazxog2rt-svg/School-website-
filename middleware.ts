import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const configured = URL.startsWith("http") && KEY.length > 20;

/**
 * Menyegarkan sesi Supabase pada setiap request (jika dikonfigurasi).
 * Tanpa kredensial, middleware langsung meneruskan request.
 */
export async function middleware(request: NextRequest) {
  if (!configured) return NextResponse.next();

  let response = NextResponse.next({ request });

  const supabase = createServerClient(URL, KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  await supabase.auth.getUser();
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
