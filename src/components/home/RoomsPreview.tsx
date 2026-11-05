"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Maximize2, Users, Bed, ChevronLeft, ChevronRight } from "lucide-react";
import { roomsData } from "@/data/rooms";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export function RoomsPreview() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const activeRoom = roomsData[activeRoomIndex];

  const nextRoom = useCallback(() => {
    setActiveRoomIndex((prev) => (prev + 1) % roomsData.length);
  }, []);

  const prevRoom = useCallback(() => {
    setActiveRoomIndex((prev) => (prev - 1 + roomsData.length) % roomsData.length);
  }, []);

  // Automatic slideshow timer with hover pause
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextRoom();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextRoom]);

  return (
    <section className="py-14 sm:py-18 bg-white text-[#0E0D35] overflow-hidden">
      <Container>
        {/* Header with Title and View All CTA - Compact Spacing */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
            <SectionHeading
              eyebrow="ROOMS & SUITES"
              title="Stay your way."
              description="Thoughtful comfort. Details that matter."
              className="mb-0 max-w-xl"
            />
            <div className="mt-4 md:mt-0">
              <Button
                variant="secondary-outline"
                size="sm"
                href="/rooms"
                className="text-xs uppercase tracking-widest hover:border-[#AA8B54]"
              >
                View All Accommodations
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Category Tab Bar (Quick Select) - Tighter margins */}
        <Reveal direction="up" delayMs={100}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 sm:mb-8 no-scrollbar">
            {roomsData.map((room, idx) => {
              const isSelected = activeRoomIndex === idx;
              return (
                <button
                  key={room.id}
                  onClick={() => setActiveRoomIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#0E0D35] text-[#F7F4EC] shadow-sm border border-[#C6A568]/40"
                      : "bg-white text-[#77766D] border border-[#E4DED2] hover:border-[#AA8B54] hover:text-[#0E0D35]"
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isSelected ? "text-[#C6A568]" : "text-[#AA8B54]"}`}>
                    0{idx + 1}
                  </span>
                  <span>{room.name}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Master Showcase Layout: Compact Proportion Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Column (7 Cols): Sleek Photo with specs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal direction="right" delayMs={150} className="h-full flex flex-col">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:flex-1 w-full rounded-xl overflow-hidden shadow-xl border border-[#E4DED2] bg-neutral-900 group min-h-[300px] sm:min-h-[360px]">
                {/* Crossfading Room Images */}
                {roomsData.map((room, idx) => (
                  <div
                    key={room.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === activeRoomIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={room.featuredImage}
                      alt={room.name}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className={`object-cover transition-transform duration-[6000ms] ease-out ${
                        idx === activeRoomIndex ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/10 to-black/15 pointer-events-none" />

                {/* Animated Slide Progress Bar at very top of image */}
                <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10 overflow-hidden">
                  <div
                    key={activeRoomIndex}
                    className="h-full bg-gradient-to-r from-[#AA8B54] to-[#C6A568] transition-all"
                    style={{
                      width: "100%",
                      animation: isHovered ? "none" : "roomsProgress 5000ms linear forwards",
                    }}
                  />
                </div>

                {/* Floating Top Badge with smooth transition */}
                <div
                  key={`badge-${activeRoom.id}`}
                  className="absolute top-4 left-4 z-20 bg-black/75 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A568]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#C6A568] font-semibold">
                    0{activeRoomIndex + 1} &bull; {activeRoom.category}
                  </span>
                </div>

                {/* Slide Navigation Chevrons */}
                <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevRoom();
                    }}
                    aria-label="Previous room"
                    className="pointer-events-auto w-9 h-9 rounded-full bg-black/50 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center backdrop-blur-md border border-white/15 opacity-70 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextRoom();
                    }}
                    aria-label="Next room"
                    className="pointer-events-auto w-9 h-9 rounded-full bg-black/50 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center backdrop-blur-md border border-white/15 opacity-70 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 shadow-md"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Overlay with Room Title and Quick Actions - Smooth Animated Key */}
                <div
                  key={`overlay-${activeRoom.id}`}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#C6A568] font-medium block">
                      {activeRoom.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-0.5">
                      {activeRoom.name}
                    </h3>
                  </div>

                  <Link
                    href={`/rooms/${activeRoom.slug}`}
                    className="bg-[#C6A568] hover:bg-[#b59457] text-[#0E0D35] text-[11px] font-semibold uppercase tracking-widest px-4 py-2 rounded transition-all duration-300 shadow-md inline-flex items-center gap-1.5 self-start sm:self-auto hover:scale-105"
                  >
                    <span>Explore Room</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Connected Specs Strip beneath image with smooth text fade */}
              <div
                key={`specs-${activeRoom.id}`}
                className="mt-3 grid grid-cols-3 gap-2 bg-white p-3 sm:p-3.5 rounded-xl border border-[#E4DED2] shadow-sm text-xs animate-in fade-in duration-500"
              >
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
                  <div className="truncate">
                    <span className="text-[#AA8B54] uppercase tracking-wider block text-[9px] font-medium">
                      Dimensions
                    </span>
                    <span className="font-medium text-[#0E0D35] text-xs truncate block">
                      {activeRoom.specs.size || "Spacious"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-l border-[#E4DED2] pl-2 sm:pl-3">
                  <Bed className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
                  <div className="truncate">
                    <span className="text-[#AA8B54] uppercase tracking-wider block text-[9px] font-medium">
                      Bedding
                    </span>
                    <span className="font-medium text-[#0E0D35] text-xs truncate block">
                      {activeRoom.specs.bedType || "King / Twin"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-l border-[#E4DED2] pl-2 sm:pl-3">
                  <Users className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
                  <div className="truncate">
                    <span className="text-[#AA8B54] uppercase tracking-wider block text-[9px] font-medium">
                      Max Guests
                    </span>
                    <span className="font-medium text-[#0E0D35] text-xs truncate block">
                      {activeRoom.specs.maxOccupancy || "Up to 2"}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 Cols): Compact Selection Items */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
            {roomsData.map((room, index) => {
              const isSelected = activeRoomIndex === index;
              return (
                <Reveal key={room.id} direction="left" delayMs={index * 60}>
                  <div
                    onClick={() => setActiveRoomIndex(index)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                      isSelected
                        ? "bg-[#0E0D35] text-[#F7F4EC] border-[#C6A568] shadow-md"
                        : "bg-white text-[#0E0D35] border-[#E4DED2] hover:border-[#AA8B54]/60 hover:bg-[#FAF8F3]"
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C6A568]" />
                    )}

                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-widest ${
                          isSelected ? "text-[#C6A568]" : "text-[#AA8B54]"
                        }`}
                      >
                        0{index + 1} &bull; {room.category}
                      </span>
                      <span
                        className={`text-[10px] font-light ${
                          isSelected ? "text-[#E4DED2]/70" : "text-[#77766D]"
                        }`}
                      >
                        {room.tagline}
                      </span>
                    </div>

                    <h4
                      className={`font-serif text-lg sm:text-xl font-normal transition-colors leading-snug ${
                        isSelected ? "text-[#F7F4EC]" : "text-[#0E0D35] group-hover:text-[#AA8B54]"
                      }`}
                    >
                      {room.name}
                    </h4>

                    <p
                      className={`text-xs mt-1 font-light leading-relaxed line-clamp-2 ${
                        isSelected ? "text-[#E4DED2]/85" : "text-[#77766D]"
                      }`}
                    >
                      {room.description}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-current/10">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className={`text-[11px] uppercase tracking-wider font-medium flex items-center gap-1 ${
                          isSelected
                            ? "text-[#C6A568] hover:underline"
                            : "text-[#0E0D35] hover:text-[#AA8B54]"
                        }`}
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <Link
                        href={`/contact?enquiryType=Room+Booking&room=${encodeURIComponent(room.name)}`}
                        className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded transition-colors ${
                          isSelected
                            ? "bg-[#C6A568] text-[#0E0D35] hover:bg-[#b59457]"
                            : "text-[#AA8B54] hover:underline"
                        }`}
                      >
                        Reserve
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RoomsPreview;
