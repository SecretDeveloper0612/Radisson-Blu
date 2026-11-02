"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Bed,
  Wifi,
  Clock,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Waves,
  Utensils,
} from "lucide-react";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/config/site";
import RoomCard from "@/components/rooms/RoomCard";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const ROOM_CATEGORIES = [
  "All",
  "Superior",
  "Business Class",
  "Executive Suite",
  "Suite",
] as const;

export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredRooms =
    activeCategory === "All"
      ? roomsData
      : roomsData.filter((r) => r.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Rooms Overview Hero */}
      <section className="relative h-[66vh] min-h-[520px] max-h-[720px] flex items-center justify-center overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel-photos/room-suite.jpg"
            alt="Radisson Hotel Rudrapur luxury accommodations"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
          />
          {/* Light black overlay for natural photo colors & text legibility */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
        </div>

        <Container className="relative z-10 pt-28 pb-16 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C6A568]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A568]">
              RESTORATIVE HOSPITALITY
            </span>
            <span className="w-6 h-[1px] bg-[#C6A568]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-tight drop-shadow-sm">
            Rooms & Suites
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#E4DED2]/95 font-light leading-relaxed max-w-2xl mx-auto drop-shadow">
            Four tailored accommodation tiers thoughtfully engineered for executive productivity, serene comfort, and elevated leisure in Rudrapur.
          </p>
        </Container>
      </section>

      {/* Floating Guest Privileges Ribbon (Connecting Hero & Content) */}
      <section className="relative z-20 -mt-10 sm:-mt-12 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="bg-white text-[#0A0835] rounded-2xl border border-[#E8E8F0] shadow-xl p-5 sm:p-7 backdrop-blur-xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E8E8F0] relative z-10">
              {/* Privilege 1: Sleep */}
              <div className="flex items-start gap-3.5 pt-0">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Restorative Sleep
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    Custom Orthopaedic Beds
                  </span>
                </div>
              </div>

              {/* Privilege 2: Productivity */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Connectivity
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    High-Speed Wi-Fi 6
                  </span>
                </div>
              </div>

              {/* Privilege 3: Bathroom */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Bespoke Baths
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    Marble Rain Showers
                  </span>
                </div>
              </div>

              {/* Privilege 4: Service */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    24-Hour Care
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    Round-the-Clock In-Room Dining
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Accommodations Area */}
      <section className="py-14 sm:py-20">
        <Container>
          {/* Filter Bar & Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-2">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                SELECT ACCOMMODATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                Choose Your Sanctuary
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0 no-scrollbar">
              {ROOM_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#0A0835] text-white shadow-md border border-[#0A0835] font-semibold"
                      : "bg-white text-[#5A5A68] border border-[#E8E8F0] hover:border-[#C6A568] hover:text-[#0A0835]"
                  }`}
                >
                  {cat === "All" ? "All Rooms" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accommodation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredRooms.map((room, idx) => (
              <RoomCard key={room.id} room={room} priority={idx < 2} />
            ))}
          </div>

          {/* The Radisson Stay Experience Features */}
          <div className="mt-20 pt-16 border-t border-[#E8E8F0]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                THE RADISSON STANDARD
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#0A0835] font-normal">
                Exceptional In-Stay Privileges
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5A68] font-light mt-2 leading-relaxed">
                Every reservation at Radisson Hotel Rudrapur includes attentive guest care, contemporary amenities, and curated comforts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-xs hover:shadow-md space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#0A0835] font-normal">
                  Strategic Hub Location
                </h4>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed">
                  Situated conveniently along Nainital Road, moments from SIDCUL Rudrapur and gateway transit points to the Kumaon hills.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-xs hover:shadow-md space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54]">
                  <Waves className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#0A0835] font-normal">
                  Wellness & Pool Access
                </h4>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed">
                  Complimentary access to the sparkling outdoor swimming pool, fully equipped modern fitness centre, and tranquil lounge decks.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-xs hover:shadow-md space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54]">
                  <Utensils className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#0A0835] font-normal">
                  Curated Culinary Craft
                </h4>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed">
                  Savor extensive breakfast spreads, live tandoor and wok stations at NH 87, or enjoy 24-hour private in-room dining.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Room Blocks & Long Stays Banner */}
          <div className="mt-16 rounded-2xl p-8 sm:p-10 bg-white text-[#0A0835] border border-[#E8E8F0] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-2.5 max-w-xl text-center md:text-left relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#AA8B54] font-semibold">
                BUSINESS TRAVEL & WEDDING ACCOMMODATIONS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                Corporate Rates & Group Room Blocks
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5A68] font-light leading-relaxed">
                Visiting SIDCUL Rudrapur on official company business or coordinating wedding guest accommodations? Contact our reservation team for preferential corporate tariffs and customized group block allocations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 relative z-10">
              <Button
                variant="primary-gold"
                size="lg"
                href="/contact?enquiryType=Room+Booking"
                className="text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
              >
                Enquire for Group Block
              </Button>
            </div>
          </div>

          {/* Direct Assistance Desk Bar */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-[#E8E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A5A68]">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#0A0835]">Need reservation assistance?</span>
              <span className="hidden sm:inline text-neutral-300">•</span>
              <span>Our front office reservations desk is available 24/7</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-1.5 font-medium text-[#0A0835] hover:text-[#AA8B54] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A568]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-1.5 font-medium text-[#0A0835] hover:text-[#AA8B54] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C6A568]" />
                <span>Email Reservations</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
