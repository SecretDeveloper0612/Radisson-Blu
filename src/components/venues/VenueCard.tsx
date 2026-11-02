import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Maximize2 } from "lucide-react";
import { VenueItem } from "@/types";

interface VenueCardProps {
  venue: VenueItem;
  priority?: boolean;
}

export function VenueCard({ venue, priority = false }: VenueCardProps) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8E8F0] bg-white hover:border-[#C6A568] transition-all duration-300 shadow-sm hover:shadow-xl">
      {/* Venue Media Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        <Image
          src={venue.featuredImage}
          alt={venue.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {venue.isUpcoming ? (
          <div className="absolute top-4 right-4 bg-[#C6A568] text-[#0A0835] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
            {venue.statusBadge || "Coming Soon"}
          </div>
        ) : (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[#C6A568] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/15">
            {venue.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#AA8B54]">
            {venue.tagline}
          </span>
          <h3 className="font-serif text-2xl font-normal text-[#0A0835] group-hover:text-[#AA8B54] transition-colors">
            {venue.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#5A5A68] font-light leading-relaxed line-clamp-3">
            {venue.description}
          </p>
        </div>

        {/* Specs Pill Summary */}
        <div className="pt-3 border-t border-[#E8E8F0] grid grid-cols-2 gap-2 text-xs">
          <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#E8E8F0]/70 flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-[#5A5A68] block">
                Capacity
              </span>
              <span className="font-medium text-[#0A0835] truncate block text-[11px]">
                {venue.specs.capacity ? venue.specs.capacity.split("/")[0].trim() : "Flexible"}
              </span>
            </div>
          </div>
          <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#E8E8F0]/70 flex items-center gap-2">
            <Maximize2 className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-[#5A5A68] block">
                Floor Area
              </span>
              <span className="font-medium text-[#0A0835] truncate block text-[11px]">
                {venue.specs.area || "Spacious"}
              </span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-3 border-t border-[#E8E8F0] flex items-center justify-between">
          <Link
            href={`/venues/${venue.slug}`}
            className="text-xs uppercase tracking-widest font-semibold text-[#0A0835] group-hover:text-[#AA8B54] flex items-center gap-1.5 transition-colors"
          >
            <span>{venue.isUpcoming ? "Preview Details" : "Explore Venue"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {!venue.isUpcoming && (
            <Link
              href={`/contact?venue=${encodeURIComponent(venue.name)}`}
              className="text-xs uppercase tracking-wider text-[#AA8B54] hover:text-[#0A0835] font-medium"
            >
              Enquire &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default VenueCard;
