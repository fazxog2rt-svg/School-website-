"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { WhatsappFab } from "@/components/layout/whatsapp-fab";
import { AiAssistant } from "@/components/ai/assistant";

/**
 * Menyembunyikan chrome publik (navbar/footer/FAB) pada halaman
 * dashboard dan login yang memiliki tata letak sendiri.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname.startsWith("/dashboard") || pathname.startsWith("/login");

  if (bare) {
    return <main id="main">{children}</main>;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsappFab />
      <AiAssistant />
    </>
  );
}
