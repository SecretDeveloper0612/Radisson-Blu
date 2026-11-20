"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Clock,
  ArrowRight,
  Phone,
  Sparkles,
  Camera,
  Crown,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface VintageCardItem {
  id: string;
  tag: string;
  title: string;
  duration: string;
  summary: string;
  bullets: string[];
  image: string;
  ctaText: string;
}

const vintageList: VintageCardItem[] = [
  {
    id: "baraat-entry",
    tag: "Royal Wedding Entry",
    title: "Baraat & Bridal Arrival",
    duration: "Full Event Access",
    summary: "Grand entrance to Sapphire Ballroom or Queen's Field with regal chauffeur & custom floral adornment.",
    bullets: ["Bespoke Floral Bonnet Decor", "Red Carpet Gate-to-Mandap Entry", "Chauffeured in Royal Livery"],
    image: "/vintage/vintage-baraat-arrival.jpg",
    ctaText: "Enquire Wedding Entry",
  },
  {
    id: "pre-wedding-shoot",
    tag: "Photography Package",
    title: "Vintage Couple Shoot",
    duration: "2–4 Hours Session",
    summary: "Cinematic retro portraits across the grand facade, poolside cabana, and manicured private lawns.",
    bullets: ["Facilitated Golden-Hour Lighting", "Private Green Room Suite", "Drone & Video Friendly Staging"],
    image: "/vintage/vintage-photoshoot.jpg",
    ctaText: "Book Shoot Slot",
  },
  {
    id: "anniversary-cruise",
    tag: "Celebration Drive",
    title: "Milestone VIP Cruise",
    duration: "Leisure Itinerary",
    summary: "A private chauffeured boulevard cruise paired with artisanal bakery treats & sparkling beverages.",
    bullets: ["Chilled Sparkling Beverage", "Handcrafted French Pastry Box", "Scenic Boulevard Pathway"],
    image: "/vintage/vintage-wedding-entry.jpg",
    ctaText: "Plan VIP Drive",
  },
];

export function VintageSection() {
  return (
    <section
      id="vintage-experiences"
      className="py-20 sm:py-28 bg-[#FAF8F5] text-[#0E0D35] relative overflow-hidden border-t border-[#E8E8F0]"
      aria-label="Vintage Car Wedding & Photoshoot Packages"
    >
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C6A568]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#C6A568]/5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header: Concise & punchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E8F0] shadow-xs">
                <Car className="w-3.5 h-3.5 text-[#AA8B54]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54]">
                  VINTAGE FLEET PACKAGES
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delayMs={100}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E0D35] leading-tight">
                Arrive with vintage elegance.
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delayMs={150}>
            <p className="text-[#5A5A68] text-sm sm:text-base font-light max-w-md leading-relaxed">
              Curated classic car experiences for royal wedding entries, cinematic couple photoshoots, and VIP milestone cruises.
            </p>
          </Reveal>
        </div>

        {/* 3 Modern Luxury Poster Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {vintageList.map((item, idx) => (
            <Reveal key={item.id} direction="up" delayMs={idx * 120} className="h-full">
              <div className="group relative h-[480px] sm:h-[520px] rounded-2xl overflow-hidden border border-[#E8E8F0] bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-[#AA8B54] flex flex-col justify-between">
                {/* Background Image with Cinematic Zoom */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Lightened gradient vignette: allows the photo to shine through while keeping text legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/35 pointer-events-none" />

                {/* Top Floating Pills */}
                <div className="relative z-10 p-5 flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-semibold tracking-widest px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0E0D35] border border-white/40 shadow-sm">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
                    <Clock className="w-3 h-3 text-[#C6A568]" />
                    {item.duration}
                  </span>
                </div>

                {/* Bottom Content: Clean, concise & high contrast */}
                <div className="relative z-10 p-6 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#C6A568] transition-colors leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/90 font-light leading-relaxed line-clamp-2 drop-shadow-sm">
                      {item.summary}
                    </p>
                  </div>

                  {/* 3 Main Key Points */}
                  <ul className="space-y-1.5 pt-3 border-t border-white/20">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-[11px] text-white/95 font-light drop-shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A568] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* High Conversion CTA Link */}
                  <div className="pt-2">
                    <Link
                      href={`/contact?enquiryType=Event%20Planning&package=${encodeURIComponent(item.title)}`}
                      className="inline-flex w-full items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#C6A568] to-[#AA8B54] text-[#0E0D35] font-semibold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md group/btn"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Venue Booking Direct Lines Strip */}
        <Reveal direction="up" delayMs={200}>
          <div className="mt-12 bg-white rounded-2xl border border-[#E8E8F0] p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                DIRECT VENUE & BANQUET BOOKINGS
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#0E0D35] font-normal">
                Reserve your date with our banquet specialists
              </h4>
              <p className="text-xs sm:text-sm text-[#5A5A68] font-light">
                Direct phone lines for weddings, corporate summits & vintage car entries:
              </p>
            </div>

            {/* Direct Calling Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {[
                { label: "+91 81710 00130", tel: "+918171000130" },
                { label: "+91 81710 00114", tel: "+918171000114" },
                { label: "+91 81710 00116", tel: "+918171000116" },
                { label: "+91 81710 00152", tel: "+918171000152" },
                { label: "+91 84779 99005", tel: "+918477999005" },
                { label: "+91 84779 99004", tel: "+918477999004" },
              ].map((item, nIdx) => (
                <a
                  key={nIdx}
                  href={`tel:${item.tel}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#AA8B54] text-[#0E0D35] hover:text-white border border-[#E8E8F0] hover:border-[#AA8B54] text-xs font-semibold tracking-wide transition-all duration-300 shadow-2xs hover:shadow-sm hover:scale-105 active:scale-95 group/call"
                >
                  <Phone className="w-3.5 h-3.5 text-[#AA8B54] group-hover/call:text-white transition-colors" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default VintageSection;
