import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Maximize2, Bed, Users } from "lucide-react";
import { RoomItem } from "@/types";

interface RoomCardProps {
  room: RoomItem;
  priority?: boolean;
}

export function RoomCard({ room, priority = false }: RoomCardProps) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8E8F0] bg-white hover:border-[#C6A568] transition-all duration-300 shadow-sm hover:shadow-xl">
      {/* Room Image Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
        <Image
          src={room.featuredImage}
          alt={room.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-[#C6A568] text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/15 shadow-sm">
          {room.category}
        </div>

        {/* Guest Occupancy Pill */}
        {room.specs.maxOccupancy && (
          <div className="absolute bottom-3 right-4 bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/15 flex items-center gap-1.5 shadow-sm">
            <Users className="w-3 h-3 text-[#C6A568]" />
            <span>{room.specs.maxOccupancy.split(",")[0]}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block">
            {room.tagline}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A0835] group-hover:text-[#AA8B54] transition-colors">
            {room.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#5A5A68] font-light leading-relaxed line-clamp-2">
            {room.description}
          </p>
        </div>

        {/* Key Room Specifications Strip */}
        <div className="pt-3 border-t border-[#E8E8F0] grid grid-cols-2 gap-2.5 text-xs">
          <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E8F0]/80 flex items-center gap-2.5">
            <Maximize2 className="w-4 h-4 text-[#AA8B54] shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-[#5A5A68] block">
                Dimensions
              </span>
              <span className="font-medium text-[#0A0835] truncate block text-[11px] sm:text-xs">
                {room.specs.size || "Spacious Layout"}
              </span>
            </div>
          </div>
          <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E8F0]/80 flex items-center gap-2.5">
            <Bed className="w-4 h-4 text-[#AA8B54] shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-[#5A5A68] block">
                Bedding
              </span>
              <span className="font-medium text-[#0A0835] truncate block text-[11px] sm:text-xs">
                {room.specs.bedType || "King / Twin Beds"}
              </span>
            </div>
          </div>
        </div>

        {/* Highlights List */}
        <div className="space-y-2 pt-1">
          {room.highlights.slice(0, 2).map((hl, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[#4B4B59] font-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#AA8B54] shrink-0 mt-0.5" />
              <span className="truncate">{hl}</span>
            </div>
          ))}
        </div>

        {/* Actions Row */}
        <div className="pt-4 border-t border-[#E8E8F0] flex items-center justify-between gap-3">
          <Link
            href={`/rooms/${room.slug}`}
            className="text-xs uppercase tracking-widest font-semibold text-[#0A0835] group-hover:text-[#AA8B54] flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Room</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href={`/contact?enquiryType=Room+Booking&room=${encodeURIComponent(room.name)}`}
            className="text-xs uppercase tracking-wider font-semibold bg-[#C6A568] hover:bg-[#b59457] text-[#0A0D1F] px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md hover:scale-105"
          >
            Book Room
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
