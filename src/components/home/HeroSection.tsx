"use client";

import React from "react";
import { ArrowRight, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("radisson-experience-intro");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
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
            src="/Neha%20%26%20Karan%20_%20Indian%20Wedding%20Teaser%202025_1080p.mp4"
            type="video/mp4"
          />
          <source
            src="/hero-wedding-teaser.mp4"
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
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#C6A568]">
              VYAH BY RADISSON BLU RUDRAPUR
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
          <div className="pt-4 flex flex-col items-start gap-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
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

            {/* Location & WhatsApp Direct Quick Buttons directly below Book Your Stay */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View hotel location on Google Maps"
                title="View Hotel Location"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/45 hover:bg-[#AA8B54] text-[#C6A568] hover:text-white border border-white/20 hover:border-[#AA8B54] backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 group text-xs uppercase tracking-wider font-medium"
              >
                <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Location</span>
              </a>

              <a
                href="https://wa.me/918171000114?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Vyah%20Radisson%20Blu%20Rudrapur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp at +91 8171000114"
                title="Chat on WhatsApp (+91 8171000114)"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/85 hover:bg-[#25D366] text-white border border-white/20 backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 group text-xs uppercase tracking-wider font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
                <span>WhatsApp</span>
              </a>
            </div>
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
