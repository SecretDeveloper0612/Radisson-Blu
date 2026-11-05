"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Car,
  ChevronLeft,
  ChevronRight,
  Plane,
  Building2,
  Mountain,
  Trees,
  Landmark,
  Waves,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface ExcursionItem {
  id: string;
  name: string;
  category: string;
  distance: string;
  driveTime: string;
  description: string;
  image: string;
  typeIcon: "airport" | "business" | "mountain" | "nature" | "spiritual" | "lake";
}

const destinations: ExcursionItem[] = [
  {
    id: "nainital",
    name: "Nainital Lake & Hill Station",
    category: "Iconic Hill Getaway",
    distance: "68 km",
    driveTime: "approx. 1 hr 45 min",
    description:
      "Emerald crescent-shaped lake surrounded by seven verdant peaks, scenic viewpoints, Tibetan bazaars, and colonial-era heritage walking paths.",
    image: "/attractions/nainital.webp",
    typeIcon: "mountain",
  },
  {
    id: "kainchi",
    name: "Kainchi Dham (Neem Karoli Baba Ashram)",
    category: "Spiritual Hill Sanctuary",
    distance: "75 km",
    driveTime: "approx. 2 hr 15 min",
    description:
      "World-revered Himalayan ashram of Neem Karoli Baba nestled in a serene pine valley, attracting spiritual seekers, world leaders, and pilgrims worldwide.",
    image: "/hotel-photos/kainchi-dham.jpg",
    typeIcon: "spiritual",
  },
  {
    id: "bhimtal",
    name: "Bhimtal Lake & Island Sanctuary",
    category: "Scenic Lake & Water Retreat",
    distance: "62 km",
    driveTime: "approx. 1 hr 40 min",
    description:
      "Picturesque mountain lake featuring an iconic central island aquarium, Victorian masonry dam, tranquil boating waters, and peaceful forested trails.",
    image: "/hotel-photos/bhimtal-lake.jpg",
    typeIcon: "lake",
  },
  {
    id: "corbett",
    name: "Jim Corbett National Park",
    category: "Wildlife & Safari Sanctuary",
    distance: "74 km",
    driveTime: "approx. 2 hr",
    description:
      "India's oldest national park, home to the majestic Bengal tiger, wild Asian elephants, and hundreds of bird species amidst dense sal forests.",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
    typeIcon: "nature",
  },
  {
    id: "sidcul",
    name: "Integrated Industrial Estate SIDCUL",
    category: "Corporate & Manufacturing Hub",
    distance: "6.5 km",
    driveTime: "approx. 12 min",
    description:
      "Uttarakhand's foremost industrial corridor housing leading multinational automotive, FMCG, and technology headquarters.",
    image: "/attractions/sidcul.jpg",
    typeIcon: "business",
  },
  {
    id: "airport",
    name: "Pantnagar Airport (PGH)",
    category: "Regional Aviation Gateway",
    distance: "14 km",
    driveTime: "approx. 20 min",
    description:
      "Direct commercial flights connecting Uttarakhand with New Delhi, Dehradun, and Northern regional capitals with private chauffeur transfers.",
    image: "/attractions/pantnagar-airport.jpg",
    typeIcon: "airport",
  },
];

export function GatewayDestination() {
  const [activeItem, setActiveItem] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Estimate active item based on scroll position
      const cardWidth = 360; // approximate average card + gap
      const newActive = Math.round(scrollLeft / cardWidth);
      setActiveItem(Math.min(Math.max(newActive, 0), destinations.length - 1));
    }
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      checkScroll();
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getIcon = (type: ExcursionItem["typeIcon"]) => {
    switch (type) {
      case "mountain":
        return <Mountain className="w-4 h-4 text-[#AA8B54]" />;
      case "spiritual":
        return <Landmark className="w-4 h-4 text-[#AA8B54]" />;
      case "lake":
        return <Waves className="w-4 h-4 text-[#AA8B54]" />;
      case "nature":
        return <Trees className="w-4 h-4 text-[#AA8B54]" />;
      case "business":
        return <Building2 className="w-4 h-4 text-[#AA8B54]" />;
      case "airport":
        return <Plane className="w-4 h-4 text-[#AA8B54]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0E0D35] relative overflow-hidden border-t border-[#E8E8F0]">
      <Container className="relative z-10">
        {/* Section Header with Left/Right Navigation Buttons */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AA8B54] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#AA8B54]" />
                PRIME LOCATION & GATEWAY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#0E0D35]">
                The vantage point between commerce & calm.
              </h2>
              <p className="text-sm sm:text-base text-[#5A5A68] font-light leading-relaxed">
                Ideally positioned on Nainital Road in Rudrapur, providing effortless connectivity for corporate executives and serving as the scenic threshold to Himalayan retreats.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous destination"
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm ${
                  canScrollLeft
                    ? "border-[#E8E8F0] bg-white text-[#0E0D35] hover:bg-[#C6A568] hover:text-[#0E0D35] hover:border-[#C6A568] hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                    : "border-[#E8E8F0]/60 bg-white/60 text-[#5A5A68]/30 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next destination"
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm ${
                  canScrollRight
                    ? "border-[#E8E8F0] bg-white text-[#0E0D35] hover:bg-[#C6A568] hover:text-[#0E0D35] hover:border-[#C6A568] hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                    : "border-[#E8E8F0]/60 bg-white/60 text-[#5A5A68]/30 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Carousel Slider with Floating Arrow Controls & Responsive Track */}
        <div className="relative group/slider">
          {/* Floating Left Arrow (Visible on desktop hover) */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md text-[#0E0D35] border border-[#E8E8F0] shadow-xl items-center justify-center hover:bg-[#C6A568] hover:text-[#0E0D35] hover:border-[#C6A568] transition-all duration-300 hover:scale-110 active:scale-95 hidden lg:flex cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Floating Right Arrow (Visible on desktop hover) */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md text-[#0E0D35] border border-[#E8E8F0] shadow-xl items-center justify-center hover:bg-[#C6A568] hover:text-[#0E0D35] hover:border-[#C6A568] transition-all duration-300 hover:scale-110 active:scale-95 hidden lg:flex cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {destinations.map((dest, idx) => (
              <div
                key={dest.id}
                onMouseEnter={() => setActiveItem(idx)}
                className={`group relative w-[85vw] max-w-[320px] sm:w-[320px] md:w-[340px] lg:w-[360px] shrink-0 snap-start rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer bg-white ${
                  activeItem === idx
                    ? "border-[#0E0D35] shadow-xl"
                    : "border-[#E8E8F0] hover:border-[#0E0D35]/40"
                }`}
              >
                {/* Dedicated Top Photo Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 85vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top floating badges */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-[#E8E8F0] flex items-center justify-center shadow-md">
                    {getIcon(dest.typeIcon)}
                  </div>
                  <div className="absolute top-3 right-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0E0D35] bg-white/95 backdrop-blur-md border border-[#E8E8F0] px-2.5 py-1 rounded-full shadow-md">
                    {dest.distance}
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3 bg-white">
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                      {dest.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#0E0D35] leading-snug group-hover:text-[#AA8B54] transition-colors line-clamp-2 min-h-[52px] sm:min-h-[56px]">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-[#5A5A68] font-light line-clamp-3 leading-relaxed min-h-[48px]">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E8F0] flex items-center justify-between text-[11px] text-[#5A5A68]">
                    <span className="flex items-center gap-1.5 font-light">
                      <Car className="w-3.5 h-3.5 text-[#AA8B54]" />
                      {dest.driveTime}
                    </span>
                    <Link
                      href={`/contact?enquiryType=Excursions&destination=${encodeURIComponent(dest.name)}`}
                      className="text-[#0E0D35] group-hover:text-[#AA8B54] text-xs font-semibold flex items-center gap-0.5 transition-colors group-hover:underline"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots / Carousel Progress Indicator */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {destinations.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (sliderRef.current) {
                    const card = sliderRef.current.children[i] as HTMLElement;
                    if (card) {
                      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
                    }
                  }
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeItem === i
                    ? "w-8 bg-[#C6A568]"
                    : "w-2 bg-[#E8E8F0] hover:bg-[#AA8B54]/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Airport Transfer & Concierge Strip */}
        <Reveal direction="up" delayMs={300}>
          <div className="mt-14 bg-[#FAF8F5] rounded-2xl border border-[#E8E8F0] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#AA8B54] block">
                COMPLIMENTARY CHAUFFEUR SERVICES
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#0E0D35] font-normal">
                Need luxury airport or corporate transit?
              </h4>
              <p className="text-xs sm:text-sm text-[#5A5A68] font-light">
                Our 24-hour concierge coordinates seamless executive airport pickups from Pantnagar Airport and bespoke day-trips to Nainital, Kainchi Dham, Bhimtal, and Corbett.
              </p>
            </div>

            <Link
              href="/contact?enquiryType=Airport+Transfer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-[#C6A568] hover:bg-[#b59457] text-[#0E0D35] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shrink-0 shadow-md"
            >
              <span>Arrange Concierge Ride</span>
              <Car className="w-4 h-4 text-[#0E0D35]" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default GatewayDestination;
