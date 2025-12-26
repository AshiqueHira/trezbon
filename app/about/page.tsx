import AboutHero from "@/components/sections/about/AboutHero";
import CommitmentsSection from "@/components/sections/about/CommitmentsSection";
import FastFactsSection from "@/components/sections/about/FastFactsSection";
import MeetTheTeamSection from "@/components/sections/about/MeetTheTeamSection";
import TestimonialsSection from "@/components/sections/about/TestimonialsSection";
import WhatWeDoSection from "@/components/sections/about/WhatWeDo";

export default function About() {
  return (
    <main>
      <AboutHero />
      <WhatWeDoSection />
      <FastFactsSection />
      <CommitmentsSection />
      <MeetTheTeamSection />
      <TestimonialsSection />
    </main>
  );
}
