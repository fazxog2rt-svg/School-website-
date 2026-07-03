import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { ValuesSection } from "@/components/sections/values";
import { PrincipalSection } from "@/components/sections/principal";
import { TeachersPreview } from "@/components/sections/teachers-preview";
import { AchievementsPreview } from "@/components/sections/achievements-preview";
import { NewsPreview } from "@/components/sections/news-preview";
import { CtaSection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ValuesSection />
      <PrincipalSection />
      <TeachersPreview />
      <AchievementsPreview />
      <NewsPreview />
      <CtaSection />
    </>
  );
}
