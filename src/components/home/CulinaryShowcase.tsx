"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Wine, Clock, Award, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface CulinaryHighlight {
  id: string;
  name: string;
  tagline: string;
  category: string;
  hours: string;
  highlight: string;
  description: string;
  image: string;
  features: string[];
  signatureDish: string;
  href: string;
}

const culinarySpots: CulinaryHighlight[] = [
  {
    id: "nh-87",
    name: "NH 87 Signature Restaurant",
    category: "All-Day Gourmet Dining",
    tagline: "Theatrical Live Kitchens & Regional Delights",
    hours: "06:30 AM – 11:30 PM",
    highlight: "Gourmet Global Buffet & Kumaoni Specials",
    description:
      "An upscale dining destination celebrating Uttarakhand culinary traditions alongside authentic Mediterranean, Pan-Asian, and continental classics prepared by master chefs.",
    image: "/RBLU PHOTOS/NH-87/1 (1).JPG",
    features: ["Interactive Live Grills", "Private Dining Salon", "Sunday Champagne Brunch"],
    signatureDish: "Clay Oven Roasted Kumaoni Lamb Shank & Dum Pukht Biryani",
    href: "/venues/nh-87",
  },
  {
    id: "lounge-bar",
    name: "The Polo Lounge & Bar",
    category: "Artisanal Libations & Tapas",
    tagline: "Craft Cocktails & Aged Single Malts",
    hours: "04:00 PM – Midnight",
    highlight: "Curated Global Spirits & Mixology",
    description:
      "An intimate mahogany-and-leather sanctuary for unwinding after corporate summits. Sip bespoke smoky infusions, botanical concoctions, and rare reserve single malts.",
    image: "/hotel-photos/k2-bar.jpg",
    features: ["Barrel-Aged Smoked Cocktails", "Acoustic Lounge Evenings", "Cigar & Single Malt Pairing"],
    signatureDish: "Smoked Rosemary Old Fashioned & Truffle-Glazed Sliders",
    href: "/contact?enquiryType=Dining+Reservation",
  },
  {
    id: "patisserie",
    name: "Cacao & Crust Pastry Studio",
    category: "Boulangerie & Specialty Brews",
    tagline: "Freshly Baked Viennoiserie & Single-Origin Coffees",
    hours: "07:00 AM – 10:00 PM",
    highlight: "French Pastries & Artisanal Roasts",
    description:
      "Start your morning with buttery croissants, handmade artisan chocolates, or a delicate afternoon high tea accompanied by single-estate Himalayan leaves.",
    image: "/hotel-photos/bakery-shop.jpg",
    features: ["Fresh Morning Bakes", "Estate-Grown Teas & Brews", "Gift Hampers & Confections"],
    signatureDish: "Madagascan Dark Chocolate Truffle Cake & Saffron Latte",
    href: "/contact?enquiryType=Dining+Reservation",
  },
];

export function CulinaryShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSpot = culinarySpots[activeTab];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0E0D35] relative overflow-hidden border-t border-[#E8E8F0]">
      <Container className="relative z-10">
        {/* Section Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#E8E8F0]">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AA8B54] flex items-center gap-2">
                <Utensils className="w-3.5 h-3.5 text-[#AA8B54]" />
                CULINARY EXCELLENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E0D35]">
                Epicurean journeys crafted with passion.
              </h2>
              <p className="text-[#5A5A68] text-sm sm:text-base font-light leading-relaxed">
                From vibrant sunrise breakfast feasts to twilight cocktail soirées, discover culinary artistry celebrating authentic local spices and international refinement.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <Link
                href="/contact?enquiryType=Dining+Reservation"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-[#C6A568] hover:bg-[#b59457] text-[#0E0D35] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-4 h-4 text-[#0E0D35]" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Tab Selection Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {culinarySpots.map((spot, idx) => {
            const isCurrent = activeTab === idx;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2.5 whitespace-nowrap ${
                  isCurrent
                    ? "bg-[#0E0D35] text-white shadow-md scale-102"
                    : "bg-[#F7F7FA] text-[#5A5A68] border border-[#E8E8F0] hover:border-[#0E0D35]/40 hover:text-[#0E0D35]"
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isCurrent ? "bg-white/20 text-[#C6A568]" : "bg-white text-[#AA8B54]"}`}>
                  0{idx + 1}
                </span>
                <span>{spot.name.split(" ")[0]} {spot.name.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Card with Smooth Interactive Cross-Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Big Atmospheric Image Showcase (7 Cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delayMs={100} className="h-full">
              <div className="relative aspect-[16/11] lg:aspect-auto lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-[#E8E8F0] shadow-xl bg-slate-900 group">
                {culinarySpots.map((spot, idx) => (
                  <div
                    key={spot.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      idx === activeTab ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                ))}

                {/* Gradient & Vignette Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Category Badge */}
                <div
                  key={`cat-${activeSpot.id}`}
                  className="absolute top-5 left-5 z-20 bg-black/75 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-500"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C6A568] animate-ping" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C6A568]">
                    {activeSpot.category}
                  </span>
                </div>

                {/* Bottom Card Inside Image */}
                <div
                  key={`dish-${activeSpot.id}`}
                  className="absolute bottom-5 left-5 right-5 z-20 bg-black/75 backdrop-blur-md border border-white/15 p-4 rounded-xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#C6A568] font-medium block">
                      CHEF&apos;S SIGNATURE RECOMMENDATION
                    </span>
                    <p className="font-serif text-sm sm:text-base text-white">
                      {activeSpot.signatureDish}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#E4DED2]/80 bg-white/5 px-3 py-1.5 rounded-full shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#C6A568]" />
                    <span>{activeSpot.hours}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Detailed Culinary Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Reveal direction="left" delayMs={150} className="h-full">
              <div
                key={`info-${activeSpot.id}`}
                className="h-full bg-[#FAF8F5] rounded-2xl border border-[#E8E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-lg animate-in fade-in duration-500"
              >
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#AA8B54] font-semibold block">
                      {activeSpot.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D35] font-normal mt-1 leading-tight">
                      {activeSpot.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#5A5A68] font-light leading-relaxed">
                    {activeSpot.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0E0D35] block">
                      EXPERIENCE HIGHLIGHTS
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeSpot.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-[#E8E8F0] text-xs text-[#0E0D35] shadow-xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A568] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-[#E8E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wine className="w-4 h-4 text-[#AA8B54]" />
                    <span className="text-xs text-[#5A5A68] font-light">{activeSpot.highlight}</span>
                  </div>

                  <Link
                    href={activeSpot.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0E0D35] hover:underline transition-colors group"
                  >
                    <span>View Venue</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CulinaryShowcase;
