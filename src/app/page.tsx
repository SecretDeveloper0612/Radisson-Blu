import React from "react";
import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import CulinaryShowcase from "@/components/home/CulinaryShowcase";
import VenuesPreview from "@/components/home/VenuesPreview";
import WellnessRecreation from "@/components/home/WellnessRecreation";
import GatewayDestination from "@/components/home/GatewayDestination";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AboutPreview from "@/components/home/AboutPreview";
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

      {/* Section D: Epicurean Journeys & Culinary Showcase with Interactive Tabs & Reveals */}
      <CulinaryShowcase />

      {/* Section E: Our Venues Preview (All 7 Venues) */}
      <VenuesPreview />

      {/* Section F: Restorative Wellness & Recreation (Pool, Spa, Fitness) */}
      <WellnessRecreation />

      {/* Section G: Regional Connectivity & Himalayan Gateway Destinations */}
      <GatewayDestination />

      {/* Section H: Infinite Testimonials Carousels */}
      <TestimonialsSection />

      {/* Section I: About the Property */}
      <AboutPreview />

      {/* Section J: Final Conversion CTA */}
      <FinalCTA />
    </div>
  );
}
