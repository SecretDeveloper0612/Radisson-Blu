"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Clock,
  Car,
  ChevronRight,
  Plane,
  Building2,
  Mountain,
  Trees,
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
  typeIcon: "airport" | "business" | "mountain" | "nature";
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
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    typeIcon: "mountain",
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
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80",
    typeIcon: "airport",
  },
];

export function GatewayDestination() {
  const [activeItem, setActiveItem] = useState(0);

  const getIcon = (type: ExcursionItem["typeIcon"]) => {
    switch (type) {
      case "mountain":
        return <Mountain className="w-4 h-4 text-[#C6A568]" />;
      case "nature":
        return <Trees className="w-4 h-4 text-[#C6A568]" />;
      case "business":
        return <Building2 className="w-4 h-4 text-[#C6A568]" />;
      case "airport":
        return <Plane className="w-4 h-4 text-[#C6A568]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A0835] relative overflow-hidden border-t border-[#E8E8F0]">
      <Container className="relative z-10">
        <Reveal direction="up">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AA8B54] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#AA8B54]" />
              PRIME LOCATION & GATEWAY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#080097]">
              The vantage point between commerce & calm.
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A68] font-light leading-relaxed">
              Ideally positioned on Nainital Road in Rudrapur, providing effortless connectivity for corporate executives and serving as the scenic threshold to Himalayan retreats.
            </p>
          </div>
        </Reveal>

        {/* 4 Cards Grid with Dedicated Vivid Photos & Smooth Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <Reveal key={dest.id} direction="up" delayMs={idx * 100}>
              <div
                onMouseEnter={() => setActiveItem(idx)}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between shadow-lg cursor-pointer bg-white ${
                  activeItem === idx
                    ? "border-[#080097] -translate-y-2 shadow-2xl"
                    : "border-[#E8E8F0] hover:border-[#080097]/40 hover:-translate-y-1"
                }`}
              >
                {/* Dedicated Top Photo Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Top floating badges */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E8F0] flex items-center justify-center shadow">
                    {getIcon(dest.typeIcon)}
                  </div>
                  <div className="absolute top-3 right-3 text-[10px] font-mono font-semibold uppercase tracking-wider text-white bg-[#0A0835] px-2.5 py-1 rounded-full shadow">
                    {dest.distance}
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3 bg-white">
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                      {dest.category}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-[#080097] leading-snug group-hover:text-[#0E05B5] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-[#5A5A68] font-light line-clamp-3 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E8F0] flex items-center justify-between text-[11px] text-[#5A5A68]">
                    <span className="flex items-center gap-1.5 font-light">
                      <Car className="w-3.5 h-3.5 text-[#080097]" />
                      {dest.driveTime}
                    </span>
                    <span className="text-[#080097] text-xs font-semibold flex items-center gap-0.5 group-hover:underline">
                      Explore <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Airport Transfer & Concierge Strip */}
        <Reveal direction="up" delayMs={300}>
          <div className="mt-12 bg-[#FAF8F5] rounded-2xl border border-[#E8E8F0] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#AA8B54] block">
                COMPLIMENTARY CHAUFFEUR SERVICES
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#080097] font-normal">
                Need luxury airport or corporate transit?
              </h4>
              <p className="text-xs sm:text-sm text-[#5A5A68] font-light">
                Our 24-hour concierge coordinates seamless executive airport pickups from Pantnagar Airport and private day-trips to Nainital and Corbett.
              </p>
            </div>

            <Link
              href="/contact?enquiryType=Airport+Transfer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-[#C6A568] hover:bg-[#b59457] text-[#0A0835] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shrink-0 shadow-md"
            >
              <span>Arrange Concierge Ride</span>
              <Car className="w-4 h-4 text-[#0A0835]" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default GatewayDestination;
