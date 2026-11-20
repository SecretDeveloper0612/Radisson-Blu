"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Grid3X3, Maximize2 } from "lucide-react";
import VenueGalleryWindow from "@/components/venues/VenueGalleryWindow";

interface AirbnbGalleryHeroProps {
  title: string;
  category: string;
  venueName: string;
  tagline?: string;
  images: string[];
  venueSlug: string;
}

export default function AirbnbGalleryHero({
  title,
  category,
  venueName,
  tagline,
  images,
  venueSlug,
}: AirbnbGalleryHeroProps) {
  const [windowOpen, setWindowOpen] = useState(false);

  const validImages = Array.from(new Set(images.filter(Boolean)));
  // Ensure we have at least 5 slots, fallback to repeating or empty
  const img1 = validImages[0] || "/hotel-photos/facade-morning.jpg";
  const img2 = validImages[1] || validImages[0] || "/hotel-photos/sapphire-banquet.jpg";
  const img3 = validImages[2] || validImages[0] || "/hotel-photos/concord-hall.jpg";
  const img4 = validImages[3] || validImages[1] || "/hotel-photos/nh87-dining.jpg";
  const img5 = validImages[4] || validImages[2] || "/hotel-photos/meeting-room.jpg";

  const totalCount = validImages.length;

  return (
    <>
      <div className="relative w-full">
        {/* Airbnb-style 5-grid collage */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden shadow-xl bg-neutral-900 border border-[#E8E8F0]">
          {/* Main Large Image (Left 2 Columns) */}
          <div
            onClick={() => setWindowOpen(true)}
            className="relative md:col-span-2 h-[280px] md:h-full cursor-pointer group overflow-hidden"
          >
            <Image
              src={img1}
              alt={`${title} main view`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* Middle 2 Stacked Images */}
          <div className="hidden md:grid grid-rows-2 gap-2 h-full">
            <div
              onClick={() => setWindowOpen(true)}
              className="relative h-full cursor-pointer group overflow-hidden"
            >
              <Image
                src={img2}
                alt={`${title} space photo 2`}
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
            <div
              onClick={() => setWindowOpen(true)}
              className="relative h-full cursor-pointer group overflow-hidden"
            >
              <Image
                src={img3}
                alt={`${title} space photo 3`}
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
          </div>

          {/* Right 2 Stacked Images (Bottom one has Airbnb "Show all photos" button) */}
          <div className="hidden md:grid grid-rows-2 gap-2 h-full">
            <div
              onClick={() => setWindowOpen(true)}
              className="relative h-full cursor-pointer group overflow-hidden"
            >
              <Image
                src={img4}
                alt={`${title} space photo 4`}
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
            <div
              onClick={() => setWindowOpen(true)}
              className="relative h-full cursor-pointer group overflow-hidden"
            >
              <Image
                src={img5}
                alt={`${title} space photo 5`}
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

              {/* Airbnb Style "Show all photos" Pill Button on Bottom Right */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setWindowOpen(true);
                }}
                className="absolute right-4 bottom-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/95 hover:bg-white text-[#0E0D35] border border-black/10 shadow-lg text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer z-10"
              >
                <Grid3X3 className="w-3.5 h-3.5 text-[#AA8B54]" />
                <span>Show all {totalCount} photos</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile "Show all photos" Floating Button */}
        <div className="md:hidden mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => setWindowOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-[#0E0D35] border border-[#E8E8F0] shadow-sm text-xs font-medium"
          >
            <Grid3X3 className="w-3.5 h-3.5 text-[#AA8B54]" />
            <span>Show all {totalCount} photos</span>
          </button>
        </div>
      </div>

      {/* Full-Screen Gallery Window Modal */}
      <VenueGalleryWindow
        isOpen={windowOpen}
        onClose={() => setWindowOpen(false)}
        initialVenueSlug={venueSlug}
      />
    </>
  );
}
