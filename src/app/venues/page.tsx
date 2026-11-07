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
            alt="Radisson Blu Hotel Rudrapur banquet and event spaces"
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
              TIMELESS CELEBRATIONS
            </span>
          </Reveal>
          <Reveal direction="up" delayMs={200}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              Our Venues Collection
            </h1>
          </Reveal>
          <Reveal direction="up" delayMs={300}>
            <p className="mt-4 text-base sm:text-lg text-[#E4DED2]/90 font-light leading-relaxed">
              61,295 sq.ft. of distinguished event spaces—including the 4,614 sq.ft. Sapphire Ballroom, Cypress &amp; Pine Boardrooms, and the 16,640 sq.ft. Queen&apos;s Field lawn.
            </p>
          </Reveal>

          {/* Show Gallery Button in Hero */}
          <Reveal direction="up" delayMs={400}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => setGalleryWindowOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C6A568] text-[#0E0D35] hover:bg-[#AA8B54] text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105"
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
                        ? "bg-white text-[#0E0D35] shadow-md border-2 border-[#C6A568] font-semibold"
                        : "bg-white text-[#5A5A68] border border-[#E8E8F0] hover:border-[#C6A568] hover:text-[#0E0D35]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setGalleryWindowOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0E0D35] border border-[#E8E8F0] hover:border-[#AA8B54] text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm cursor-pointer shrink-0 hover:scale-105"
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

          {/* Official Capacity & Dimension Factsheet Table */}
          <Reveal direction="up" delayMs={200}>
            <div className="mt-20 bg-white rounded-2xl border border-[#E8E8F0] shadow-xl p-6 sm:p-10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AA8B54] block">
                  TIMELESS CELEBRATIONS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0E0D35] font-normal">
                  Venue Dimensions & Seating Capacities
                </h2>
                <p className="text-xs sm:text-sm text-[#5A5A68] font-light leading-relaxed max-w-3xl">
                  Comprehensive layout metrics and maximum seating configurations across Radisson Blu Hotel Rudrapur&apos;s 61,295 sq.ft. total banqueting expanse.
                </p>
              </div>

              {/* Main Halls Table */}
              <div className="overflow-x-auto rounded-xl border border-[#E8E8F0]">
                <table className="w-full text-left text-xs border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-[#0E0D35] text-white uppercase text-[10px] tracking-wider">
                      <th className="py-3.5 px-4 font-semibold">Hall</th>
                      <th className="py-3.5 px-3 font-semibold text-right">Area (sq.ft.)</th>
                      <th className="py-3.5 px-3 font-semibold text-center">Length</th>
                      <th className="py-3.5 px-3 font-semibold text-center">Width</th>
                      <th className="py-3.5 px-3 font-semibold text-center">Height</th>
                      <th className="py-3.5 px-3 font-semibold text-center">Theatre</th>
                      <th className="py-3.5 px-3 font-semibold text-center">Classroom</th>
                      <th className="py-3.5 px-3 font-semibold text-center">Cluster</th>
                      <th className="py-3.5 px-3 font-semibold text-center">U-Shape</th>
                      <th className="py-3.5 px-3 font-semibold text-center">Hollow Block</th>
                      <th className="py-3.5 px-3 font-semibold text-center">Sit Down</th>
                      <th className="py-3.5 px-4 font-semibold text-center text-[#C6A568]">Social</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E8F0] text-[#0E0D35]">
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3 px-4 font-medium">Sapphire I</td>
                      <td className="py-3 px-3 text-right font-mono">1,513</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">57&apos;1&quot;</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">26&apos;5&quot;</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">13&apos;5&quot;</td>
                      <td className="py-3 px-3 text-center">90</td>
                      <td className="py-3 px-3 text-center">60</td>
                      <td className="py-3 px-3 text-center">75</td>
                      <td className="py-3 px-3 text-center">55</td>
                      <td className="py-3 px-3 text-center">65</td>
                      <td className="py-3 px-3 text-center">72</td>
                      <td className="py-3 px-4 text-center font-semibold text-[#AA8B54]">70</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3 px-4 font-medium">Sapphire II</td>
                      <td className="py-3 px-3 text-right font-mono">1,568</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">57&apos;1&quot;</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">27&apos;4&quot;</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">13&apos;5&quot;</td>
                      <td className="py-3 px-3 text-center">90</td>
                      <td className="py-3 px-3 text-center">60</td>
                      <td className="py-3 px-3 text-center">75</td>
                      <td className="py-3 px-3 text-center">55</td>
                      <td className="py-3 px-3 text-center">65</td>
                      <td className="py-3 px-3 text-center">72</td>
                      <td className="py-3 px-4 text-center font-semibold text-[#AA8B54]">70</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3 px-4 font-medium">Sapphire III</td>
                      <td className="py-3 px-3 text-right font-mono">1,536</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">57&apos;1&quot;</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">26&apos;9&quot;</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">13&apos;5&quot;</td>
                      <td className="py-3 px-3 text-center">90</td>
                      <td className="py-3 px-3 text-center">60</td>
                      <td className="py-3 px-3 text-center">75</td>
                      <td className="py-3 px-3 text-center">55</td>
                      <td className="py-3 px-3 text-center">65</td>
                      <td className="py-3 px-3 text-center">72</td>
                      <td className="py-3 px-4 text-center font-semibold text-[#AA8B54]">70</td>
                    </tr>
                    <tr className="bg-[#FAF8F5] font-semibold hover:bg-[#F2EEE9] transition-colors">
                      <td className="py-3 px-4 text-[#0E0D35]">Sapphire (Combined Ballroom)</td>
                      <td className="py-3 px-3 text-right font-mono text-[#AA8B54]">4,614</td>
                      <td className="py-3 px-3 text-center font-mono">57&apos;1&quot;</td>
                      <td className="py-3 px-3 text-center font-mono">80&apos;8&quot;</td>
                      <td className="py-3 px-3 text-center font-mono">13&apos;5&quot;</td>
                      <td className="py-3 px-3 text-center">90</td>
                      <td className="py-3 px-3 text-center">180</td>
                      <td className="py-3 px-3 text-center">200</td>
                      <td className="py-3 px-3 text-center">90</td>
                      <td className="py-3 px-3 text-center">120</td>
                      <td className="py-3 px-3 text-center">180</td>
                      <td className="py-3 px-4 text-center text-[#AA8B54] font-bold">500</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors text-[#5A5A68]">
                      <td className="py-3 px-4 font-medium text-[#0E0D35]">PFA Lobby Sapphire</td>
                      <td className="py-3 px-3 text-right font-mono">1,342</td>
                      <td className="py-3 px-3 text-center font-mono">61&apos;3&quot;</td>
                      <td className="py-3 px-3 text-center font-mono">21&apos;9&quot;</td>
                      <td className="py-3 px-3 text-center font-mono">—</td>
                      <td colSpan={7} className="py-3 px-4 text-center italic text-xs">
                        Pre-Function Area / Registration & Cocktail Foyer
                      </td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3 px-4 font-medium">Queen&apos;s Field (Open Lawn)</td>
                      <td className="py-3 px-3 text-right font-mono">16,640</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">130&apos;</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">128&apos;</td>
                      <td className="py-3 px-3 text-center font-mono text-[#5A5A68]">—</td>
                      <td className="py-3 px-3 text-center text-[#5A5A68]">—</td>
                      <td className="py-3 px-3 text-center text-[#5A5A68]">—</td>
                      <td className="py-3 px-3 text-center text-[#5A5A68]">—</td>
                      <td className="py-3 px-3 text-center text-[#5A5A68]">—</td>
                      <td className="py-3 px-3 text-center text-[#5A5A68]">—</td>
                      <td className="py-3 px-3 text-center font-semibold">300</td>
                      <td className="py-3 px-4 text-center font-bold text-[#AA8B54]">500</td>
                    </tr>
                    <tr className="bg-[#0E0D35]/5 font-bold text-[#0E0D35]">
                      <td className="py-3.5 px-4 uppercase tracking-wider text-[11px]">Total Event Expanse</td>
                      <td className="py-3.5 px-3 text-right font-mono text-[#AA8B54] text-sm">61,295</td>
                      <td colSpan={9} className="py-3.5 px-3 text-center text-xs text-[#5A5A68] font-normal">
                        Combined Indoor Ballrooms, Foyer & Outdoor Lawns
                      </td>
                      <td className="py-3.5 px-4 text-center text-[#AA8B54] text-sm">900</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Board Rooms Table */}
              <div className="pt-4">
                <h3 className="font-serif text-lg text-[#0E0D35] font-normal mb-3">
                  Board Rooms
                </h3>
                <div className="overflow-x-auto rounded-xl border border-[#E8E8F0] max-w-md">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#0E0D35] text-white uppercase text-[10px] tracking-wider">
                        <th className="py-3 px-4 font-semibold">Board Room</th>
                        <th className="py-3 px-4 font-semibold text-right">Area (sq.ft.)</th>
                        <th className="py-3 px-4 font-semibold text-center text-[#C6A568]">Capacity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0] text-[#0E0D35]">
                      <tr className="hover:bg-[#FAF8F5] transition-colors">
                        <td className="py-3 px-4 font-medium">Cypress</td>
                        <td className="py-3 px-4 text-right font-mono">125</td>
                        <td className="py-3 px-4 text-center font-semibold text-[#AA8B54]">10</td>
                      </tr>
                      <tr className="hover:bg-[#FAF8F5] transition-colors">
                        <td className="py-3 px-4 font-medium">Pine</td>
                        <td className="py-3 px-4 text-right font-mono">360</td>
                        <td className="py-3 px-4 text-center font-semibold text-[#AA8B54]">25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bottom Event Planning Banner */}
          <Reveal direction="up" delayMs={200}>
            <div className="mt-20 bg-white text-[#0E0D35] rounded-2xl p-8 sm:p-12 border border-[#E8E8F0] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#AA8B54] transition-colors relative overflow-hidden">
              <div className="space-y-2 max-w-xl text-center md:text-left relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#AA8B54] font-semibold">
                  PLANNING AN EVENT OR WEDDING?
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0E0D35] font-normal">
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
