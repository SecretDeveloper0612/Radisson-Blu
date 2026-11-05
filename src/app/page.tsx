import React from "react";
import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import WellnessRecreation from "@/components/home/WellnessRecreation";
import GatewayDestination from "@/components/home/GatewayDestination";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section A: Hero with cinematic video loop */}
      <HeroSection />

      {/* Section B: The Radisson Experience Introduction */}
      <IntroductionSection />

      {/* Section C: Discover the Experience (Rooms, Dining, Events) */}
      <ExperienceSection />

      {/* Section D: Restorative Wellness & Recreation (Pool, Spa, Fitness) */}
      <WellnessRecreation />

      {/* Section E: Regional Connectivity & Himalayan Gateway Destinations */}
      <GatewayDestination />

      {/* Section F: Infinite Testimonials Carousels */}
      <TestimonialsSection />

      {/* Section G: Final Conversion CTA */}
      <FinalCTA />
    </div>
  );
}
