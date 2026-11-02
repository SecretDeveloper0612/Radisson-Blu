import React from "react";
import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import RoomsPreview from "@/components/home/RoomsPreview";
import CulinaryShowcase from "@/components/home/CulinaryShowcase";
import VenuesPreview from "@/components/home/VenuesPreview";
import WellnessRecreation from "@/components/home/WellnessRecreation";
import GalleryPreview from "@/components/home/GalleryPreview";
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

      {/* Section D: Rooms & Suites Preview with Auto-Slide & Smooth Transitions */}
      <RoomsPreview />

      {/* Section E: Epicurean Journeys & Culinary Showcase with Interactive Tabs & Reveals */}
      <CulinaryShowcase />

      {/* Section F: Our Venues Preview (All 7 Venues) */}
      <VenuesPreview />

      {/* Section G: Restorative Wellness & Recreation (Pool, Spa, Fitness) */}
      <WellnessRecreation />

      {/* Section H: Gallery Preview with Lightbox ("Every detail tells a story.") */}
      <GalleryPreview />

      {/* Section I: Regional Connectivity & Himalayan Gateway Destinations */}
      <GatewayDestination />

      {/* Section J: Infinite Testimonials Carousels */}
      <TestimonialsSection />

      {/* Section K: About the Property */}
      <AboutPreview />

      {/* Section L: Final Conversion CTA */}
      <FinalCTA />
    </div>
  );
}
