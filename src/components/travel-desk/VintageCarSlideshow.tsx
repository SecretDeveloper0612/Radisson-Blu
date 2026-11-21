"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VintageCarSlideshowProps {
  images: string[];
  alt?: string;
  intervalMs?: number;
}

export function VintageCarSlideshow({
  images,
  alt = "Rolls Royce Vintage Car Radisson Blu Rudrapur",
  intervalMs = 4000,
}: VintageCarSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = images.filter(Boolean);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

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
      className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 group/slideshow select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images with smooth crossfade */}
      {slides.map((src, idx) => (
        <div
          key={src + idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={src}
            alt={`${alt} perspective ${idx + 1}`}
            fill
            priority={idx === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover/slideshow:scale-105"
          />
        </div>
      ))}

      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-15 pointer-events-none" />

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C6A568]/50 text-[#C6A568] text-[11px] font-semibold uppercase tracking-[0.2em]">
          ROYAL CEREMONIAL FLEET
        </span>
      </div>

      {/* Bottom Subtitle & Slide counter */}
      <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-white pointer-events-none">
        <span className="text-xs font-mono uppercase tracking-wider text-white/90 drop-shadow">
          Grand Wedding Entry &amp; Photoshoot
        </span>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xs text-white/80 border border-white/20">
          {currentIndex + 1} / {slides.length}
        </span>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <div className="absolute inset-y-0 left-0 right-0 z-25 flex items-center justify-between px-3 pointer-events-none opacity-0 group-hover/slideshow:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous image"
            className="pointer-events-auto w-9 h-9 rounded-full bg-black/50 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next image"
            className="pointer-events-auto w-9 h-9 rounded-full bg-black/50 hover:bg-[#C6A568] hover:text-[#0E0D35] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Pagination dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 inset-x-0 z-20 flex justify-center gap-1.5 pointer-events-none">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-5 bg-[#C6A568]" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default VintageCarSlideshow;
