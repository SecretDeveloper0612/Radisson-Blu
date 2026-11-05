"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Images, Maximize2 } from "lucide-react";
import VenueGalleryWindow from "@/components/venues/VenueGalleryWindow";

interface VenueGallerySectionProps {
  venueName: string;
  venueSlug: string;
  galleryImages: string[];
}

export function VenueGallerySection({
  venueName,
  venueSlug,
  galleryImages,
}: VenueGallerySectionProps) {
  const [windowOpen, setWindowOpen] = useState(false);

  if (!galleryImages || galleryImages.length === 0) return null;

  const validImages = Array.from(new Set(galleryImages.filter(Boolean)));
  const primaryImage = validImages[0];
  const secondaryImages = validImages.slice(1, 3);
  const totalCount = validImages.length;

  return (
    <div className="space-y-5">
      {/* Gallery Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-[#E8E8F0]">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
            SPACES & AMBIANCE
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D35] font-normal">
            Visual Tour
          </h3>
        </div>

        <button
          onClick={() => setWindowOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0E0D35] border border-[#C6A568]/50 hover:bg-[#C6A568] hover:text-[#0E0D35] text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-105 shrink-0 self-start sm:self-auto"
        >
          <Images className="w-3.5 h-3.5 text-[#AA8B54]" />
          <span>Show Full Gallery ({totalCount})</span>
        </button>
      </div>

      {/* Editorial Curated Gallery Grid */}
      {validImages.length === 1 ? (
        <div
          onClick={() => setWindowOpen(true)}
          className="group relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E8E8F0] bg-[#FAF8F5] cursor-pointer shadow-md hover:shadow-xl transition-all"
        >
          <Image
            src={primaryImage}
            alt={`${venueName} main hall`}
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Click to Expand</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Primary View (7 Cols) */}
          <div
            onClick={() => setWindowOpen(true)}
            className="group relative md:col-span-7 aspect-[16/11] md:aspect-auto md:min-h-[340px] rounded-2xl overflow-hidden border border-[#E8E8F0] bg-[#FAF8F5] cursor-pointer shadow-md hover:shadow-xl transition-all"
          >
            <Image
              src={primaryImage}
              alt={`${venueName} signature visual`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Tag Pill */}
            <div className="absolute top-4 left-4 z-10 flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#C6A568] text-[10px] font-semibold uppercase tracking-wider">
              <span>Signature Layout</span>
            </div>

            {/* Hover Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
              <span className="text-xs text-white/90 font-light">
                {venueName} Grand Perspective
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-md text-white text-xs font-medium">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Enlarge</span>
              </div>
            </div>
          </div>

          {/* Secondary Views (5 Cols) */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4">
            {secondaryImages.map((imgSrc, idx) => {
              const isLast = idx === secondaryImages.length - 1;
              const hasMorePhotos = totalCount > 3;

              return (
                <div
                  key={idx}
                  onClick={() => setWindowOpen(true)}
                  className="group relative aspect-[16/10] md:h-[162px] rounded-2xl overflow-hidden border border-[#E8E8F0] bg-[#FAF8F5] cursor-pointer shadow-sm hover:shadow-lg transition-all"
                >
                  <Image
                    src={imgSrc}
                    alt={`${venueName} perspective ${idx + 2}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* If last photo and there are more photos, show view all overlay */}
                  {isLast && hasMorePhotos ? (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] hover:bg-black/70 transition-colors flex flex-col items-center justify-center text-center p-3">
                      <Images className="w-5 h-5 text-[#C6A568] mb-1" />
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">
                        +{totalCount - 2} More Views
                      </span>
                      <span className="text-[10px] text-[#E4DED2]/80 mt-0.5">
                        Open Showcase
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex items-center gap-1.5 text-white text-xs font-medium">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C6A568]" />
                        <span>View</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Full Window Visual Showcase Lightbox */}
      <VenueGalleryWindow
        isOpen={windowOpen}
        onClose={() => setWindowOpen(false)}
        initialVenueSlug={venueSlug}
      />
    </div>
  );
}

export default VenueGallerySection;
