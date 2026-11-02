"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, ArrowRight } from "lucide-react";
import { galleryData } from "@/data/gallery";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Lightbox from "@/components/gallery/Lightbox";

const CATEGORIES = [
  "All",
  "Rooms",
  "Dining",
  "Venues",
  "Exterior",
  "Events",
  "Guest Experiences",
] as const;

export function GalleryPreview() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter images based on selected category tab
  const filteredImages =
    selectedCategory === "All"
      ? galleryData.slice(0, 8)
      : galleryData.filter((img) => img.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A0835]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <SectionHeading
            eyebrow="GALLERY"
            title="Every detail tells a story."
            description="Explore the architecture, welcoming suites, live culinary theatre, and vibrant event memories at Radisson Hotel Rudrapur."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <Button
              variant="secondary-outline"
              href="/gallery"
              className="text-xs uppercase tracking-widest"
            >
              View Full Gallery
            </Button>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#080097] text-[#F7F4EC] shadow-sm"
                  : "bg-white text-[#77766D] border border-[#E4DED2] hover:border-[#AA8B54] hover:text-[#0A0835]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E4DED2] bg-[#04005E] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#C6A568] font-semibold">
                  {image.category}
                </span>
                <h4 className="font-serif text-lg font-normal text-white mt-0.5">
                  {image.title}
                </h4>
                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={activeImageIndex}
        images={filteredImages}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}

export default GalleryPreview;
