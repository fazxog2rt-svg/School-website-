import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Hero } from "@/features/hero/hero";
import { StatsSection } from "@/features/stats/stats-section";
import { FeaturesSection } from "@/features/features/features-section";
import { PricingSection } from "@/features/pricing/pricing-section";
import { StepsSection } from "@/features/steps/steps-section";
import { TestimonialsSection } from "@/features/testimonials/testimonials-section";
import { FaqSection } from "@/features/faq/faq-section";
import { PaymentCta } from "@/features/cta/payment-cta";
import { getFaqJsonLd } from "@/lib/schema";
import { faqs } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd(faqs)) }}
      />
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <PricingSection />
        <StepsSection />
        <PaymentCta />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
