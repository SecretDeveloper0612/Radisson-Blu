"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Maximize2,
  Camera,
  Building2,
  Bed,
  UtensilsCrossed,
  PartyPopper,
  Eye,
  ArrowRight,
  Phone,
} from "lucide-react";
import { galleryData } from "@/data/gallery";
import Container from "@/components/ui/Container";
import Lightbox from "@/components/gallery/Lightbox";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const CATEGORIES = [
  "All",
  "Rooms",
  "Dining",
  "Venues",
  "Exterior",
  "Events",
  "Guest Experiences",
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: galleryData.length };
    galleryData.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredImages = useMemo(() => {
    return selectedCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleSelectIndex = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* 1. Cinematic Gallery Hero */}
      <section className="relative h-[65vh] min-h-[520px] max-h-[720px] flex items-center justify-center overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel-photos/facade-morning.jpg"
            alt="Radisson Hotel Rudrapur visual portfolio and architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
          />
          {/* Light black overlay for natural photograph colors with high text legibility */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
        </div>

        <Container className="relative z-10 pt-28 pb-16 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#C6A568]/50 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A568]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A568]">
              VISUAL PORTFOLIO & ARCHITECTURE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A568]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Hotel Gallery
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#F7F4EC] font-light leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Immerse yourself in the architectural grandeur, peaceful guest suites, culinary theatre, and celebratory spaces of Radisson Hotel Rudrapur.
          </p>
        </Container>
      </section>

      {/* 2. Floating Highlights Ribbon (Connecting Hero & Content) */}
      <section className="relative z-20 -mt-10 sm:-mt-12 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="bg-white text-[#0E0D35] rounded-2xl border border-[#E8E8F0] shadow-xl p-5 sm:p-7 backdrop-blur-xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E8E8F0] relative z-10">
              {/* Highlight 1: Architecture */}
              <button
                onClick={() => setSelectedCategory("Exterior")}
                className={`flex items-start gap-3.5 pt-0 text-left group cursor-pointer transition-all rounded-xl p-2 -m-2 ${
                  selectedCategory === "Exterior"
                    ? "bg-[#FAF8F5] ring-1 ring-[#AA8B54]"
                    : "hover:bg-[#FAF8F5]/60"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedCategory === "Exterior"
                      ? "bg-[#C6A568] text-white"
                      : "bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] group-hover:bg-[#C6A568] group-hover:text-white"
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Architecture & Grounds
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0E0D35] block mt-0.5">
                    Facade & Garden Lawns
                  </span>
                </div>
              </button>

              {/* Highlight 2: Accommodations */}
              <button
                onClick={() => setSelectedCategory("Rooms")}
                className={`flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8 text-left group cursor-pointer transition-all rounded-xl p-2 -m-2 md:ml-4 ${
                  selectedCategory === "Rooms"
                    ? "bg-[#FAF8F5] ring-1 ring-[#AA8B54]"
                    : "hover:bg-[#FAF8F5]/60"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedCategory === "Rooms"
                      ? "bg-[#C6A568] text-white"
                      : "bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] group-hover:bg-[#C6A568] group-hover:text-white"
                  }`}
                >
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Tailored Sanctuaries
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0E0D35] block mt-0.5">
                    Suites & Deluxe Rooms
                  </span>
                </div>
              </button>

              {/* Highlight 3: Dining */}
              <button
                onClick={() => setSelectedCategory("Dining")}
                className={`flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8 text-left group cursor-pointer transition-all rounded-xl p-2 -m-2 md:ml-4 ${
                  selectedCategory === "Dining"
                    ? "bg-[#FAF8F5] ring-1 ring-[#AA8B54]"
                    : "hover:bg-[#FAF8F5]/60"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedCategory === "Dining"
                      ? "bg-[#C6A568] text-white"
                      : "bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] group-hover:bg-[#C6A568] group-hover:text-white"
                  }`}
                >
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Culinary Theatre
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0E0D35] block mt-0.5">
                    NH 87 & K2 Artisanal Bar
                  </span>
                </div>
              </button>

              {/* Highlight 4: Celebrations */}
              <button
                onClick={() => setSelectedCategory("Venues")}
                className={`flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8 text-left group cursor-pointer transition-all rounded-xl p-2 -m-2 md:ml-4 ${
                  selectedCategory === "Venues"
                    ? "bg-[#FAF8F5] ring-1 ring-[#AA8B54]"
                    : "hover:bg-[#FAF8F5]/60"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedCategory === "Venues"
                      ? "bg-[#C6A568] text-white"
                      : "bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] group-hover:bg-[#C6A568] group-hover:text-white"
                  }`}
                >
                  <PartyPopper className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Grand Celebrations
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0E0D35] block mt-0.5">
                    Sapphire Ballroom & Lawns
                  </span>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Main Gallery Section */}
      <section className="py-14 sm:py-20">
        <Container>
          {/* Header Row & Category Filters */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#E8E8F0]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                CURATED VISUAL SPACES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0E0D35] font-normal">
                Explore The Collection
              </h2>
            </div>

            {/* Filter Pills with Counts */}
            <div className="flex flex-wrap items-center gap-2 max-w-full">
              {CATEGORIES.map((cat) => {
                const count = categoryCounts[cat] || 0;
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#0E0D35] text-white shadow-md border border-[#0E0D35] font-semibold"
                        : "bg-white text-[#5A5A68] border border-[#E0DEE8] hover:border-[#C6A568] hover:text-[#0E0D35] shadow-2xs"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium transition-colors ${
                        isActive
                          ? "bg-[#C6A568] text-[#0E0D35] font-bold"
                          : "bg-[#FAF8F5] text-[#7A7A8A] group-hover:bg-[#0E0D35]/10 group-hover:text-[#0E0D35]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Status Bar */}
          <div className="flex items-center justify-between text-xs text-[#7A7A8A] mb-8 font-light">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#AA8B54]" />
              <span>
                Displaying{" "}
                <strong className="font-semibold text-[#0E0D35]">
                  {filteredImages.length}
                </strong>{" "}
                photographs in{" "}
                <span className="font-medium text-[#0E0D35]">
                  {selectedCategory === "All" ? "all categories" : selectedCategory}
                </span>
              </span>
            </div>
            <span className="hidden sm:inline-block text-[11px] text-[#AA8B54]">
              Click any image to view in full resolution
            </span>
          </div>

          {/* 4. Editorial CSS Masonry Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, idx) => {
              const aspectClass =
                image.aspect === "wide"
                  ? "aspect-[16/10]"
                  : image.aspect === "portrait"
                  ? "aspect-[3/4]"
                  : "aspect-[4/3]";

              return (
                <div
                  key={image.id}
                  onClick={() => handleOpenLightbox(idx)}
                  className={`break-inside-avoid group relative rounded-2xl overflow-hidden border border-[#E8E8F0] bg-[#FAF8F5] cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-500 hover:border-[#C6A568]/80 ${aspectClass}`}
                >
                  {/* Photo with zoom on hover */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Top Badges (Category Pill & Expand Button) */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E0D35]/90 backdrop-blur-md border border-[#C6A568]/50 text-[#C6A568] text-[10px] uppercase font-semibold tracking-wider shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A568]" />
                      {image.category}
                    </span>

                    <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#C6A568] group-hover:text-[#0E0D35] transition-all duration-300 shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Gradient Scrim & Bottom Information */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white transition-opacity duration-300">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-white drop-shadow-sm group-hover:text-[#F7F4EC] transition-colors leading-snug">
                      {image.title}
                    </h3>
                    <p className="text-xs text-[#E4DED2]/85 font-light mt-1 line-clamp-2 leading-relaxed">
                      {image.alt}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#C6A568] font-medium tracking-wide mt-2.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View full size photograph</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5. Radisson Hospitality Highlights */}
          <div className="mt-20 pt-16 border-t border-[#E8E8F0]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                RADISSON IDENTITY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0D35] font-normal">
                Crafted for Discerning Guests
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5A68] font-light mt-2 leading-relaxed">
                Every space at Radisson Hotel Rudrapur is sculpted to deliver seamless business connectivity, refined gastronomic experiences, and tranquil rest.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Highlight 1 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-xs hover:shadow-md space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54]">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#0E0D35] font-normal">
                  Architectural Elegance
                </h4>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed">
                  Soaring lobby ceilings, natural light atriums, and manicured green exterior lawns compose an inspiring haven along Nainital Road.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-xs hover:shadow-md space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54]">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#0E0D35] font-normal">
                  Gastronomic Excellence
                </h4>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed">
                  From multi-cuisine live interactive counters at NH 87 to bespoke mixology in K2 Lounge, culinary craft is front and center.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-xs hover:shadow-md space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54]">
                  <PartyPopper className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#0E0D35] font-normal">
                  Banqueting & Venues
                </h4>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed">
                  Pillarless ballrooms, flexible breakout meeting halls, and outdoor lawns designed to host high-profile events and destination weddings.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Experience Invitation / Call to Action Banner */}
          <div className="mt-16 bg-white text-[#0E0D35] rounded-3xl border border-[#E8E8F0] shadow-xl p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-[#AA8B54]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#AA8B54]">
                  VISIT IN PERSON
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0D35] font-normal leading-tight">
                Experience Radisson Hotel Rudrapur Firsthand
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#5A5A68] font-light leading-relaxed max-w-2xl">
                Whether you are arranging a celebratory gala, executive corporate conference, or an indulgent weekend staycation, our concierge team is prepared to welcome you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href={siteConfig.booking.engineUrl}
                  variant="primary-gold"
                  className="px-6 py-3 text-xs tracking-wider uppercase font-semibold"
                >
                  Reserve Your Stay
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>

                <Button
                  href="/venues"
                  variant="secondary-outline"
                  className="px-6 py-3 text-xs tracking-wider uppercase font-semibold transition-all"
                >
                  Explore Event Venues
                </Button>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0E0D35] hover:text-[#AA8B54] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C6A568]" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Accessible & Refined Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={activeImageIndex}
        images={filteredImages}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectIndex={handleSelectIndex}
      />
    </div>
  );
}
