"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("radisson-experience-intro");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#04005E]">
      {/* Background Video with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          // poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        >
          <source
            src="/hero-wedding-teaser.mp4"
            type="video/mp4"
          />
          <source
            src="/Cinematic%20Wedding%20Teaser%202025%20_%20Himanshu%20and%20Tannavi%20_%20khanna%20photography%20Karnal%20_1080p50.mp4"
            type="video/mp4"
          />
        </video>
        {/* Lighter subtle gradient masks for crystal clear video visibility with text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/25" />
      </div>

      {/* Hero Content Centered Vertically in Full Screen */}
      <Container className="relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C6A568]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C6A568]">
              VYAH BY RADISSON
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-[#F7F4EC] font-normal leading-[1.06] tracking-tight">
            A stay, beautifully reimagined.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-[#E4DED2]/90 font-light leading-relaxed max-w-2xl">
            Discover thoughtful comfort, memorable dining, and exceptional spaces for every occasion in the heart of Rudrapur.
          </p>

          {/* Category Tagline */}
          <div className="pt-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C6A568]/90 font-medium">
            STAY &bull; DINE &bull; MEET &bull; CELEBRATE
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <Button
              variant="primary-gold"
              size="lg"
              href="/contact?enquiryType=Room+Booking"
              className="px-8 py-4 text-xs uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Book Your Stay
            </Button>

            <Button
              variant="gold-outline"
              size="lg"
              href="/venues"
              className="px-8 py-4 text-xs uppercase tracking-widest flex items-center justify-center gap-2 group backdrop-blur-sm"
            >
              <span>Explore Our Venues</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Subtle Scroll Down Indicator at Bottom */}
        <button
          onClick={scrollToContent}
          aria-label="Scroll down to explore"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#C6A568]/70 hover:text-[#C6A568] transition-colors cursor-pointer group"
        >
          <span className="text-[10px]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C6A568]" />
        </button>
      </Container>
    </div>
  );
}

export default HeroSection;
