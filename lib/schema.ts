import { plans } from "@/lib/data";
import { siteConfig } from "@/lib/site";

/** JSON-LD Schema.org untuk meningkatkan pemahaman mesin pencari. */
export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.fullName,
        url: siteConfig.url,
        description: siteConfig.description,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${siteConfig.whatsapp.number}`,
          contactType: "customer support",
          availableLanguage: ["Indonesian"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.fullName,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "id-ID",
      },
      {
        "@type": "Product",
        name: `${siteConfig.name} Bot Hosting`,
        description: siteConfig.description,
        brand: { "@type": "Brand", name: siteConfig.name },
        offers: plans.map((plan) => ({
          "@type": "Offer",
          name: `Paket ${plan.name}`,
          price: plan.price,
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/#paket`,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "500",
        },
      },
    ],
  };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
