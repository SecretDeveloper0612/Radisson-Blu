"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/types";

interface LightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex?: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}: LightboxProps) {
  const thumbStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  // Keep active thumbnail in view
  useEffect(() => {
    if (!isOpen || !thumbStripRef.current) return;
    const activeThumb = thumbStripRef.current.children[currentIndex] as HTMLElement | undefined;
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex, isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300"
    >
      {/* Top Header Bar */}
      <div className="w-full px-6 py-5 flex items-center justify-between text-white z-20 bg-gradient-to-b from-black/90 via-black/60 to-transparent border-b border-white/10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6A568]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C6A568] font-semibold">
              {currentImage.category}
            </span>
          </div>
          <h2 className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
            {currentImage.title}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs tracking-widest text-[#E4DED2]/80 font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="p-2.5 text-white/80 hover:text-[#0E0D35] transition-colors rounded-full bg-white/10 hover:bg-[#C6A568] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto px-6 sm:px-16 flex items-center justify-center my-2">
        <div className="relative w-full h-full max-h-[68vh]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="90vw"
            className="object-contain select-none"
            priority
          />
        </div>

        {/* Prev / Next Navigation Controls */}
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#0E0D35] bg-black/60 hover:bg-[#C6A568] border border-white/20 hover:border-[#C6A568] rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#C6A568] cursor-pointer shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#0E0D35] bg-black/60 hover:bg-[#C6A568] border border-white/20 hover:border-[#C6A568] rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#C6A568] cursor-pointer shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Tray: Caption + Thumbnail Scroller */}
      <div className="w-full bg-gradient-to-t from-black via-black/90 to-transparent pt-3 pb-5 px-6 z-20 border-t border-white/10">
        <p className="text-xs text-[#E4DED2]/80 font-light max-w-3xl mx-auto text-center line-clamp-1 mb-3">
          {currentImage.alt}
        </p>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div
            ref={thumbStripRef}
            className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto max-w-4xl mx-auto py-1 px-2 no-scrollbar"
          >
            {images.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => onSelectIndex ? onSelectIndex(idx) : null}
                className={`relative shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "border-[#C6A568] scale-105 shadow-md shadow-[#C6A568]/20 ring-2 ring-[#C6A568]/50"
                    : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/60"
                }`}
                aria-label={`Jump to image ${idx + 1}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
