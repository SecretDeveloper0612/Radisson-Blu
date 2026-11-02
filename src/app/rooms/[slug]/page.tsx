import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  Bed,
  Users,
  Compass,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface RoomPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return roomsData.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const relatedRooms = roomsData.filter((r) => r.id !== room.id);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative h-[72vh] min-h-[580px] max-h-[780px] flex items-end overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src={room.featuredImage}
            alt={room.name}
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-[8000ms] ease-out"
          />
          {/* Light black overlay for natural photo colors & text legibility */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/15 to-black/35 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
        </div>

        <Container className="relative z-20 pb-16 sm:pb-20 pt-32 sm:pt-40 w-full">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 hover:bg-[#C6A568] hover:text-[#0A0835] text-[#C6A568] border border-white/20 backdrop-blur-md transition-all text-xs uppercase tracking-widest font-medium shadow-md cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>All Rooms</span>
            </Link>
            <span className="text-white/40 text-xs">/</span>
            <span className="text-white/80 text-xs tracking-wider font-light uppercase hidden sm:inline">
              {room.name}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#C6A568]/20 border border-[#C6A568]/40 text-[#C6A568] text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
              {room.category}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#E4DED2]/85 font-medium">
              &bull; {room.tagline}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight drop-shadow-sm">
            {room.name}
          </h1>

          <p className="mt-3 text-base sm:text-xl text-[#E4DED2]/95 font-light max-w-2xl leading-relaxed drop-shadow">
            {room.description}
          </p>
        </Container>
      </section>

      {/* Floating Key Specs Bar (Connecting Hero & Content) */}
      <section className="relative z-30 -mt-10 sm:-mt-12 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="bg-white text-[#0A0835] rounded-2xl border border-[#E8E8F0] shadow-xl p-5 sm:p-7 backdrop-blur-xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E8E8F0] relative z-10">
              {/* Metric 1: Size */}
              <div className="flex items-start gap-3.5 pt-0">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Room Dimensions
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    {room.specs.size || "Spacious Layout"}
                  </span>
                </div>
              </div>

              {/* Metric 2: Bed */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Bedding Configuration
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    {room.specs.bedType || "King / Twin"}
                  </span>
                </div>
              </div>

              {/* Metric 3: Occupancy */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Max Occupancy
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    {room.specs.maxOccupancy || "Up to 2 Adults"}
                  </span>
                </div>
              </div>

              {/* Metric 4: View */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Orientation & View
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    {room.specs.view || "City & Mountain Vista"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Details */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (8 Cols): Narrative, Gallery, Amenities */}
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#AA8B54]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AA8B54]">
                    OVERVIEW & SPACE
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0835] font-normal tracking-tight">
                  The {room.name} Experience
                </h2>
                <p className="text-base sm:text-lg text-[#4B4B59] leading-relaxed font-light pt-1">
                  {room.fullDescription}
                </p>

                {/* Badges */}
                <div className="pt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-[#E8E8F0] text-xs font-medium text-[#0A0835] shadow-xs">
                    <span>Radisson Restorative Standard</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E8F0] text-xs font-medium text-[#0A0835] shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#AA8B54]" />
                    <span>Dedicated Daily Housekeeping</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E8F0] text-xs font-medium text-[#0A0835] shadow-xs">
                    <Compass className="w-3.5 h-3.5 text-[#AA8B54]" />
                    <span>Soundproof Acoustic Glazing</span>
                  </span>
                </div>
              </div>

              {/* Gallery Photos */}
              {room.galleryImages.length > 0 && (
                <div className="space-y-5">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                      ROOM PERSPECTIVES
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                      Interior Visual Tour
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {room.galleryImages.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E8F0] bg-[#FAF8F5] group shadow-sm hover:shadow-md transition-all"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${room.name} detail view ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Room Highlights */}
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                    KEY SIGNATURES
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                    Room Highlights & Finishes
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {room.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-white border border-[#E8E8F0] hover:border-[#C6A568]/70 hover:shadow-sm transition-all group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#AA8B54] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm text-[#242436] font-light leading-relaxed">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Amenities */}
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                    IN-ROOM COMFORTS
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                    Comprehensive Amenities
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E8E8F0] text-xs sm:text-sm text-[#4B4B59] font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 Cols): Room Specifications & Reservation Box */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-white text-[#0A0835] rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xl space-y-6 relative overflow-hidden">
                {/* Header */}
                <div className="relative z-10">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] text-[10px] font-semibold uppercase tracking-widest mb-2">
                    <span>RESERVATIONS DESK</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                    Room Specifications
                  </h3>
                  <p className="text-[11px] text-[#5A5A68] font-light mt-1">
                    Guaranteed Best Rate & Direct Booking Privileges
                  </p>
                </div>

                {/* Specification Table */}
                <div className="space-y-3.5 text-xs font-light divide-y divide-[#E8E8F0] relative z-10">
                  <div className="pt-2 flex justify-between items-center">
                    <span className="text-[#5A5A68] font-medium">Category:</span>
                    <span className="font-semibold text-[#0A0835]">{room.category}</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-[#5A5A68] font-medium">Room Size:</span>
                    <span className="font-semibold text-[#0A0835]">{room.specs.size || "Spacious Layout"}</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-[#5A5A68] font-medium">Bedding:</span>
                    <span className="font-semibold text-[#0A0835]">{room.specs.bedType || "King or Twin"}</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-[#5A5A68] font-medium">Max Occupancy:</span>
                    <span className="font-semibold text-[#0A0835]">{room.specs.maxOccupancy || "Up to 2 Adults"}</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-[#5A5A68] font-medium">View:</span>
                    <span className="font-semibold text-[#0A0835]">{room.specs.view || "City / Garden"}</span>
                  </div>
                </div>

                {/* Booking Action */}
                <div className="pt-3 space-y-3 relative z-10">
                  <Button
                    variant="primary-gold"
                    size="lg"
                    href={`/contact?enquiryType=Room+Booking&room=${encodeURIComponent(room.name)}`}
                    className="w-full text-xs uppercase tracking-widest font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    Reserve this Room
                  </Button>

                  <div className="pt-2 border-t border-[#E8E8F0] space-y-2 text-xs">
                    <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                      Direct Front Desk
                    </span>
                    <div className="flex items-center justify-between text-[#0A0835]">
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="flex items-center gap-2 hover:text-[#AA8B54] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C6A568]" />
                        <span>{siteConfig.contact.phoneDisplay}</span>
                      </a>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-2 hover:text-[#AA8B54] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#C6A568]" />
                        <span>Email Desk</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Assurances */}
                <div className="pt-3 border-t border-[#E8E8F0] space-y-1.5 text-[11px] text-[#5A5A68] font-light relative z-10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
                    <span>Instant booking confirmation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
                    <span>Free high-speed Wi-Fi & fitness access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Accommodations */}
          {relatedRooms.length > 0 && (
            <div className="mt-20 pt-16 border-t border-[#E8E8F0]">
              <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                    OTHER ACCOMMODATIONS
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#0A0835] font-normal">
                    Discover More Rooms & Suites
                  </h3>
                </div>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0A0835] hover:text-[#AA8B54] transition-colors"
                >
                  <span>View All Accommodations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedRooms.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    href={`/rooms/${item.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] bg-[#FAF8F5] overflow-hidden">
                        <Image
                          src={item.featuredImage}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-[#C6A568] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/15">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#AA8B54] block mb-1">
                          {item.specs.size || "Spacious Layout"}
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl text-[#0A0835] group-hover:text-[#AA8B54] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#5A5A68] font-light mt-2 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-[#0A0835] group-hover:text-[#AA8B54] transition-colors border-t border-[#E8E8F0]/70 mt-4">
                      <span className="pt-3">Explore Room</span>
                      <ArrowRight className="w-4 h-4 pt-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
