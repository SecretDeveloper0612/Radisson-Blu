import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Home, Phone, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF8F5] text-[#0E0D35] relative overflow-hidden py-24 sm:py-32">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C6A568]/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 rounded-full bg-[#0E0D35]/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E8F0] shadow-xs mb-6">
          <Compass className="w-3.5 h-3.5 text-[#AA8B54]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#AA8B54]">
            404 &bull; PAGE NOT FOUND
          </span>
        </div>

        {/* Big Serif 404 Headline */}
        <h1 className="font-serif text-7xl sm:text-8xl lg:text-9xl font-normal text-[#0E0D35] tracking-tight leading-none">
          404
        </h1>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#0E0D35] font-normal mt-4">
          A tranquil detour from your journey.
        </h2>

        <p className="text-sm sm:text-base text-[#5A5A68] font-light leading-relaxed max-w-md mx-auto mt-3">
          The sanctuary or destination you are seeking might have been moved, renamed, or is temporarily out of reach.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button
            variant="primary-gold"
            size="lg"
            href="/"
            className="w-full sm:w-auto text-xs uppercase tracking-widest font-semibold py-3.5 px-7 shadow-md"
          >
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Home</span>
          </Button>

          <Button
            variant="gold-outline"
            size="lg"
            href="/venues"
            className="w-full sm:w-auto text-xs uppercase tracking-widest font-semibold py-3.5 px-7"
          >
            <span>Explore Venues &rarr;</span>
          </Button>
        </div>

        {/* Quick Nav Links */}
        <div className="mt-12 pt-8 border-t border-[#E8E8F0] flex flex-wrap items-center justify-center gap-6 text-xs text-[#5A5A68]">
          <Link
            href="/rooms"
            className="hover:text-[#AA8B54] transition-colors font-medium"
          >
            Rooms & Suites
          </Link>
          <span className="text-neutral-300">&bull;</span>
          <Link
            href="/gallery"
            className="hover:text-[#AA8B54] transition-colors font-medium"
          >
            Visual Gallery
          </Link>
          <span className="text-neutral-300">&bull;</span>
          <Link
            href="/contact"
            className="hover:text-[#AA8B54] transition-colors font-medium"
          >
            Contact Concierge
          </Link>
        </div>
      </Container>
    </div>
  );
}

