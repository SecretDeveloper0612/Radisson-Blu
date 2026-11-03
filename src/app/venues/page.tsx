"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Images } from "lucide-react";
import { venuesData } from "@/data/venues";
import VenueCard from "@/components/venues/VenueCard";
import VenueGalleryWindow from "@/components/venues/VenueGalleryWindow";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const VENUE_FILTERS = [
  "All",
  "Banquet & Ballroom",
  "Dining & Lounge",
  "Meeting & Conference",
  "Outdoor Lawn",
  "Entertainment",
] as const;

export default function VenuesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [galleryWindowOpen, setGalleryWindowOpen] = useState(false);

  const filteredVenues =
    activeFilter === "All"
      ? venuesData
      : venuesData.filter((v) => v.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Venues Hero */}
      <section className="relative min-h-[58vh] flex items-center justify-center overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/RBLU PHOTOS/Sapphire/Banquet Cluster.jpg"
            alt="Radisson Hotel Rudrapur banquet and event spaces"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/75 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40 pointer-events-none" />
        </div>

        <Container className="relative z-10 pt-32 pb-20 text-center max-w-3xl">
          <Reveal direction="down" delayMs={100}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A568] block mb-3">
              GATHERINGS & CELEBRATIONS
            </span>
          </Reveal>
          <Reveal direction="up" delayMs={200}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              Our Venues Collection
            </h1>
          </Reveal>
          <Reveal direction="up" delayMs={300}>
            <p className="mt-4 text-base sm:text-lg text-[#E4DED2]/90 font-light leading-relaxed">
              Discover a versatile array of grand ballrooms, starlit lawns, executive boardrooms, and gastronomic spaces tailored to every occasion in Rudrapur.
            </p>
          </Reveal>

          {/* Show Gallery Button in Hero */}
          <Reveal direction="up" delayMs={400}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => setGalleryWindowOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C6A568] text-[#0A0835] hover:bg-[#AA8B54] text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105"
              >
                <Images className="w-4 h-4" />
                <span>Explore Visual Gallery</span>
              </button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24">
        <Container>
          {/* Header Row: Filter Bar & Show Gallery Action */}
          <Reveal direction="up" delayMs={100}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-2">
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0 no-scrollbar">
                {VENUE_FILTERS.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      activeFilter === cat
                        ? "bg-[#0A0835] text-white shadow-md border border-[#0A0835] font-semibold"
                        : "bg-white text-[#5A5A68] border border-[#E8E8F0] hover:border-[#C6A568] hover:text-[#0A0835]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setGalleryWindowOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0A0835] border border-[#E8E8F0] hover:border-[#AA8B54] text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm cursor-pointer shrink-0 hover:scale-105"
              >
                <Images className="w-3.5 h-3.5 text-[#AA8B54]" />
                <span>Show Gallery</span>
              </button>
            </div>
          </Reveal>

          {/* Venues Grid with Staggered Fade Up */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue, idx) => (
              <Reveal key={venue.id} direction="up" delayMs={(idx % 6) * 100}>
                <VenueCard venue={venue} priority={idx < 3} />
              </Reveal>
            ))}
          </div>

          {/* Bottom Event Planning Banner */}
          <Reveal direction="up" delayMs={200}>
            <div className="mt-20 bg-white text-[#0A0835] rounded-2xl p-8 sm:p-12 border border-[#E8E8F0] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#AA8B54] transition-colors relative overflow-hidden">
              <div className="space-y-2 max-w-xl text-center md:text-left relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#AA8B54] font-semibold">
                  PLANNING AN EVENT OR WEDDING?
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                  Let our banquet specialists bring your vision to life.
                </h2>
                <p className="text-xs sm:text-sm text-[#5A5A68] font-light leading-relaxed">
                  Receive personalized capacity arrangements, custom multi-cuisine tasting menus, and technical stage setups.
                </p>
              </div>
              <Button
                variant="primary-gold"
                size="lg"
                href="/contact"
                className="text-xs uppercase tracking-widest font-semibold shrink-0 hover:scale-105 transition-transform relative z-10"
              >
                Submit Event Enquiry
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Full-Window Venue Visual Showcase */}
      <VenueGalleryWindow
        isOpen={galleryWindowOpen}
        onClose={() => setGalleryWindowOpen(false)}
      />
    </div>
  );
}
