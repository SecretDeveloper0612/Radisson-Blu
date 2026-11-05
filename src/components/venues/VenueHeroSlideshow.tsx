"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

interface VenueHeroSlideshowProps {
  images: string[];
  venueName: string;
  intervalMs?: number;
  onOpenGallery?: () => void;
}

export function VenueHeroSlideshow({
  images,
  venueName,
  intervalMs = 5500,
  onOpenGallery,
}: VenueHeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Filter unique valid images
  const slides = Array.from(new Set(images.filter(Boolean)));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay slideshow with pause on hover
  useEffect(() => {
    if (slides.length <= 1 || isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, isHovered, intervalMs, nextSlide]);

  if (slides.length === 0) return null;

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={`${venueName} photo slideshow`}
    >
      {/* Slides with smooth crossfade and gentle cinematic zoom */}
      {slides.map((src, idx) => (
        <div
          key={src + idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={src}
            alt={`${venueName} perspective ${idx + 1}`}
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
              idx === currentIndex ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Cinematic Overlays: Top scrim for header navbar contrast, bottom scrim for hero typography legibility */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {/* Top Scrim (Protects Navbar text contrast against bright chandeliers & ceilings) */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/45 to-transparent" />

        {/* Ambient Subtle Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/35" />

        {/* Bottom Scrim (Light black overlay for title legibility without blue tint) */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      </div>

      {/* Navigation Controls only shown if more than 1 image */}
      {slides.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Indicator Dots & Photo Showcase trigger at Bottom-Right */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-30 flex items-center gap-2.5">
            {onOpenGallery && (
              <button
                onClick={onOpenGallery}
                className="hidden sm:inline-flex items-center gap-2 bg-black/45 hover:bg-[#C6A568] text-white hover:text-[#0E0D35] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg hover:scale-105"
              >
                <Images className="w-3.5 h-3.5" />
                <span>All Photos ({slides.length})</span>
              </button>
            )}

            <div className="flex items-center gap-2 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
              {slides.length <= 7 ? (
                slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentIndex === idx
                        ? "w-6 h-1.5 bg-[#C6A568]"
                        : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))
              ) : null}
              <span
                className={`text-[11px] text-white/90 font-mono ${
                  slides.length <= 7 ? "ml-1.5 pl-2 border-l border-white/25" : ""
                }`}
              >
                {currentIndex + 1} / {slides.length}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default VenueHeroSlideshow;
