import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
          description="Belum menemukan jawabannya? Admin kami siap membantu langsung lewat WhatsApp."
        />

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={1} className="mt-8 flex justify-center">
          <WhatsAppButton variant="subtle">Masih ada pertanyaan? Tanya admin</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
