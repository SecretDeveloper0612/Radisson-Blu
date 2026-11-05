"use client";

import React, { useEffect, useState, useMemo, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Grid3X3,
  Share2,
  Check,
} from "lucide-react";
import { venuesData } from "@/data/venues";

export interface VenuePhoto {
  id: string;
  venueName: string;
  venueCategory: string;
  venueSlug: string;
  src: string;
  alt: string;
  isCover?: boolean;
}

interface VenueGalleryWindowProps {
  isOpen: boolean;
  onClose: () => void;
  initialVenueSlug?: string;
}

const emptySubscribe = () => () => {};

export function VenueGalleryWindow({
  isOpen,
  onClose,
  initialVenueSlug,
}: VenueGalleryWindowProps) {
  // Aggregate all venue photos
  const allPhotos: VenuePhoto[] = useMemo(() => {
    const list: VenuePhoto[] = [];
    venuesData.forEach((venue) => {
      // Add featured image
      list.push({
        id: `${venue.id}-cover`,
        venueName: venue.name,
        venueCategory: venue.category,
        venueSlug: venue.slug,
        src: venue.featuredImage,
        alt: `${venue.name} signature architectural view`,
        isCover: true,
      });

      // Add additional gallery photos
      venue.galleryImages.forEach((src, idx) => {
        if (src !== venue.featuredImage) {
          list.push({
            id: `${venue.id}-img-${idx}`,
            venueName: venue.name,
            venueCategory: venue.category,
            venueSlug: venue.slug,
            src,
            alt: `${venue.name} interior & ambiance view ${idx + 1}`,
          });
        }
      });
    });
    return list;
  }, []);

  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const targetVenue = useMemo(() => {
    if (!initialVenueSlug) return null;
    return venuesData.find((v) => v.slug === initialVenueSlug) || null;
  }, [initialVenueSlug]);

  const [filterOverride, setFilterOverride] = useState<string | null>(null);
  const activeVenueFilter = filterOverride ?? (targetVenue ? targetVenue.name : "All");

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredPhotos = useMemo(() => {
    if (targetVenue) {
      return allPhotos.filter((p) => p.venueSlug === targetVenue.slug);
    }
    if (activeVenueFilter === "All") return allPhotos;
    return allPhotos.filter((p) => p.venueName === activeVenueFilter);
  }, [allPhotos, activeVenueFilter, targetVenue]);

  const handleNextPhoto = useCallback(() => {
    setSelectedPhotoIndex((prev) =>
      prev === null ? 0 : (prev + 1) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  const handlePrevPhoto = useCallback(() => {
    setSelectedPhotoIndex((prev) =>
      prev === null || prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  }, [filteredPhotos.length]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedPhotoIndex !== null) {
          setSelectedPhotoIndex(null);
        } else {
          onClose();
        }
      }
      if (selectedPhotoIndex !== null) {
        if (e.key === "ArrowRight") handleNextPhoto();
        if (e.key === "ArrowLeft") handlePrevPhoto();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedPhotoIndex, onClose, handleNextPhoto, handlePrevPhoto]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Venue showcase gallery window"
      className="fixed inset-0 z-[9999] flex flex-col bg-white text-[#0E0D35] select-none animate-in fade-in zoom-in-95 duration-200"
    >
      {/* Window Titlebar / Navigation Header */}
      <header className="h-18 px-4 sm:px-8 border-b border-[#E8E8F0] bg-white/95 backdrop-blur-md flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54]">
            <Grid3X3 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-normal text-[#0E0D35] flex items-center gap-2">
              <span>
                {targetVenue ? `${targetVenue.name} Visual Showcase` : "Venues Visual Showcase"}
              </span>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#AA8B54] border border-[#E8E8F0] hidden sm:inline-block">
                {filteredPhotos.length} Photos
              </span>
            </h2>
            <p className="text-[11px] text-[#5A5A68] hidden sm:block">
              {targetVenue
                ? `Radisson Hotel Rudrapur • ${targetVenue.category} • Authentic Interior & Event Ambiance`
                : "Radisson Hotel Rudrapur • Ballrooms, Meeting Suites, Lawn & Lounges"}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#0E0D35] hover:bg-[#F7F7FA] transition-colors cursor-pointer border border-[#E8E8F0]"
            title="Copy link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline text-emerald-600 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#AA8B54]" />
                <span className="hidden sm:inline">Share</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            aria-label="Close window"
            className="w-10 h-10 rounded-full bg-[#F7F7FA] hover:bg-[#C6A568] hover:text-[#0E0D35] text-[#0E0D35] border border-[#E8E8F0] flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Sub-Header: Filter Chips Bar (Only shown on global /venues page when not viewing a single venue) */}
      {!targetVenue && (
        <div className="px-4 sm:px-8 py-3 border-b border-[#E8E8F0] bg-white overflow-x-auto no-scrollbar shrink-0 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-[#AA8B54] shrink-0 mr-2">
            Filter Venue:
          </span>
          <button
            onClick={() => {
              setFilterOverride("All");
              setSelectedPhotoIndex(null);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeVenueFilter === "All"
                ? "bg-[#C6A568] text-[#0E0D35] font-semibold shadow-sm"
                : "bg-[#F7F7FA] text-[#5A5A68] hover:bg-[#E8E8F0] hover:text-[#0E0D35] border border-[#E8E8F0]"
            }`}
          >
            All Venues ({allPhotos.length})
          </button>

          {venuesData.map((v) => {
            const count = allPhotos.filter((p) => p.venueName === v.name).length;
            return (
              <button
                key={v.id}
                onClick={() => {
                  setFilterOverride(v.name);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeVenueFilter === v.name
                    ? "bg-[#C6A568] text-[#0E0D35] font-semibold shadow-sm"
                    : "bg-[#F7F7FA] text-[#5A5A68] hover:bg-[#E8E8F0] hover:text-[#0E0D35] border border-[#E8E8F0]"
                }`}
              >
                {v.name} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Main Window Canvas: Grid of all venue photos */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-20 text-[#5A5A68]">
              No photos found for this venue.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-[#E8E8F0] cursor-pointer hover:border-[#C6A568] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-widest text-[#C6A568] font-semibold">
                      {photo.venueCategory}
                    </span>
                    <h3 className="font-serif text-base text-white font-normal mt-0.5">
                      {photo.venueName}
                    </h3>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {photo.isCover && (
                    <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wider font-bold bg-white/95 backdrop-blur-sm text-[#0E0D35] border border-[#E8E8F0] px-2 py-0.5 rounded shadow-sm">
                      Signature View
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer Status Bar */}
      <footer className="h-10 px-4 sm:px-8 border-t border-[#E8E8F0] bg-[#FAF8F5] text-[11px] text-[#5A5A68] flex items-center justify-between shrink-0">
        <span>Click any photo to inspect in full resolution</span>
        <span>Press ESC to exit showcase window</span>
      </footer>

      {/* Full-Screen Inspector Mode (when user clicks an individual photo) */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between text-white z-20">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C6A568]">
                {filteredPhotos[selectedPhotoIndex].venueCategory}
              </span>
              <h3 className="font-serif text-xl text-white">
                {filteredPhotos[selectedPhotoIndex].venueName}
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-[#E4DED2]/70 font-mono">
                {selectedPhotoIndex + 1} / {filteredPhotos.length}
              </span>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                aria-label="Back to showcase grid"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Stage Image with Navigation */}
          <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={handlePrevPhoto}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full">
              <Image
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPhoto}
              aria-label="Next photo"
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Thumbnails Bar */}
          <div className="w-full max-w-4xl text-center space-y-3 z-20">
            <p className="text-xs sm:text-sm text-[#E4DED2]/80 font-light line-clamp-1">
              {filteredPhotos[selectedPhotoIndex].alt}
            </p>
            {/* Thumbnail Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-full pb-2 no-scrollbar">
              {filteredPhotos.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative w-12 h-9 rounded overflow-hidden shrink-0 transition-all border ${
                    selectedPhotoIndex === idx
                      ? "border-[#C6A568] scale-105 opacity-100"
                      : "border-transparent opacity-40 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={p.src}
                    alt={p.venueName}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default VenueGalleryWindow;
