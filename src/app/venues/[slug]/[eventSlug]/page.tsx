import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  Sparkles,
  Phone,
  Mail,
  Calendar,
  MessageCircle,
  Maximize2,
} from "lucide-react";
import {
  venuesData,
  sapphireCeremonies,
  concordOccasions,
  nh87Events,
  executiveRoomEvents,
  k2barEvents,
  fernEvents,
  kumaonCafeEvents,
  nh87PoolLawnEvents,
  poolLawnEvents,
} from "@/data/venues";
import { siteConfig } from "@/config/site";
import AirbnbGalleryHero from "@/components/venues/AirbnbGalleryHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
    eventSlug: string;
  }>;
}

const venueEventsMap: Record<string, typeof sapphireCeremonies> = {
  sapphire: sapphireCeremonies,
  "nh-87": nh87Events,
  concord: concordOccasions,
  "executive-room": executiveRoomEvents,
  "k2-bar": k2barEvents,
  fern: fernEvents,
  "kumaon-cafe": kumaonCafeEvents,
  "nh87-pool-lawn": nh87PoolLawnEvents,
  "pool-lawn": poolLawnEvents,
};

export async function generateStaticParams() {
  const paramsList: { slug: string; eventSlug: string }[] = [];

  for (const [venueSlug, events] of Object.entries(venueEventsMap)) {
    for (const event of events) {
      paramsList.push({
        slug: venueSlug,
        eventSlug: event.slug,
      });
    }
  }

  return paramsList;
}

export default async function VenueEventDetailPage({
  params,
}: EventDetailPageProps) {
  const { slug, eventSlug } = await params;

  const venue = venuesData.find((v) => v.slug === slug);
  const events = venueEventsMap[slug];

  if (!venue || !events) {
    notFound();
  }

  const currentEvent = events.find((e) => e.slug === eventSlug);

  if (!currentEvent) {
    notFound();
  }

  const otherEvents = events.filter((e) => e.slug !== eventSlug);
  const heroImage = currentEvent.image || venue.featuredImage;

  // Build event-focused gallery
  // If dedicated ceremony images exist, use exclusively those (e.g. for Birthday Party); otherwise fall back to venue images
  const eventGalleryImages = Array.from(
    new Set(
      currentEvent.galleryImages && currentEvent.galleryImages.length > 0
        ? currentEvent.galleryImages
        : [
            ...(currentEvent.image ? [currentEvent.image] : []),
            venue.featuredImage,
            ...venue.galleryImages,
          ]
    )
  ).filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Full-Width Cinematic Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] max-h-[680px] w-full flex items-end overflow-hidden bg-neutral-950">
        <Image
          src={heroImage}
          alt={currentEvent.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Cinematic gradient overlays for crystal clear contrast & elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40" />

        <Container className="relative z-20 pb-12 sm:pb-16 pt-32 w-full">
          {/* Breadcrumb Navigation Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link
              href="/venues"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-[#AA8B54] text-[#C6A568] hover:text-white border border-white/20 backdrop-blur-md transition-all text-xs uppercase tracking-wider font-medium group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#AA8B54] group-hover:text-white" />
              <span>All Venues</span>
            </Link>
            <span className="text-white/40 text-xs">/</span>
            <Link
              href={`/venues/${venue.slug}`}
              className="text-white/80 hover:text-[#C6A568] text-xs uppercase tracking-wider transition-colors font-medium"
            >
              {venue.name}
            </Link>
            <span className="text-white/40 text-xs">/</span>
            <span className="text-[#C6A568] text-xs uppercase tracking-wider font-semibold">
              {currentEvent.name}
            </span>
          </div>

          {/* Badges & Headline */}
          <div className="space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-[#C6A568]/20 border border-[#C6A568]/40 text-[#C6A568] text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                {currentEvent.category}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/20 text-[11px] tracking-wider font-light backdrop-blur-sm">
                Hosted at {venue.name}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight drop-shadow-md">
              {venue.name}&apos;s {currentEvent.name}
            </h1>

            <p className="text-[#E4DED2]/95 text-base sm:text-xl font-light max-w-2xl leading-relaxed drop-shadow">
              {currentEvent.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Details & Event Information Section */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Event Details & Inclusions */}
            <div className="lg:col-span-8 space-y-10">
              {/* Event Overview Card */}
              <div className="bg-white p-7 sm:p-10 rounded-2xl border border-[#E8E8F0] shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block mb-2">
                    Event Overview
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#0E0D35] font-normal leading-snug">
                    Unforgettable {currentEvent.name} at {venue.name}
                  </h2>
                </div>

                <p className="text-base text-[#4B4B59] leading-relaxed font-light">
                  {currentEvent.description}
                </p>

                {/* Key Event & Venue Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E8F0]">
                  {/* Floor Space from Venue */}
                  <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0]">
                    <div className="w-10 h-10 rounded-lg bg-[#C6A568]/15 text-[#AA8B54] flex items-center justify-center shrink-0">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#77766D] block">
                        Floor Space
                      </span>
                      <span className="font-serif text-sm sm:text-base text-[#0E0D35] font-medium">
                        {venue.specs.area || "Spacious Layout"}
                      </span>
                    </div>
                  </div>

                  {currentEvent.guestCapacity && (
                    <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0]">
                      <div className="w-10 h-10 rounded-lg bg-[#C6A568]/15 text-[#AA8B54] flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#77766D] block">
                          Guest Capacity
                        </span>
                        <span className="font-serif text-sm sm:text-base text-[#0E0D35] font-medium">
                          {currentEvent.guestCapacity}
                        </span>
                      </div>
                    </div>
                  )}

                  {currentEvent.recommendedTime && (
                    <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0]">
                      <div className="w-10 h-10 rounded-lg bg-[#C6A568]/15 text-[#AA8B54] flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#77766D] block">
                          Recommended Schedule
                        </span>
                        <span className="font-serif text-sm sm:text-base text-[#0E0D35] font-medium">
                          {currentEvent.recommendedTime}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Venue Features & Included Services */}
              <div className="bg-white p-7 sm:p-10 rounded-2xl border border-[#E8E8F0] shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block mb-2">
                    Venue Inclusions & Capabilities
                  </span>
                  <h3 className="font-serif text-2xl text-[#0E0D35] font-normal">
                    What Makes {venue.name} Exceptional
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {venue.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-[#4B4B59]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#AA8B54] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry & Booking Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-7 rounded-2xl border border-[#E8E8F0] shadow-sm space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block mb-1">
                      Event Consultation
                    </span>
                    <h3 className="font-serif text-xl text-[#0E0D35]">
                      Plan Your {currentEvent.name}
                    </h3>
                    <p className="text-xs text-[#77766D] font-light mt-1.5">
                      Connect directly with our dedicated banquet planning team to customize catering, decor, and spatial layout.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-2">
                    <Link
                      href={`/contact?venue=${venue.slug}&event=${currentEvent.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0E0D35] hover:bg-[#AA8B54] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                    >
                      <Calendar className="w-4 h-4 text-[#C6A568] group-hover:text-white transition-colors" />
                      <span>Enquire Now</span>
                    </Link>

                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Specialist</span>
                    </a>
                  </div>

                  {/* Direct Contact Info */}
                  <div className="pt-4 border-t border-[#E8E8F0] space-y-3 text-xs text-[#5A5A68]">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#AA8B54]" />
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="hover:text-[#AA8B54] transition-colors font-medium"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#AA8B54]" />
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="hover:text-[#AA8B54] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Back Link */}
                <Link
                  href={`/venues/${venue.slug}`}
                  className="block text-center text-xs uppercase tracking-wider text-[#77766D] hover:text-[#AA8B54] py-2 transition-colors font-medium"
                >
                  &larr; Back to {venue.name} Overview
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section with Airbnb 5-Photo Collage & Modal */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#E8E8F0]">
        <Container>
          <div className="mb-6 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
              Visual Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0D35] font-normal">
              {currentEvent.name} Gallery & Ambiance
            </h2>
            <p className="text-sm text-[#77766D] font-light max-w-2xl">
              Immerse yourself in photographs of {currentEvent.name} hosted within {venue.name}.
            </p>
          </div>

          <AirbnbGalleryHero
            title={currentEvent.name}
            category={currentEvent.category}
            venueName={venue.name}
            tagline={currentEvent.tagline}
            images={eventGalleryImages}
            venueSlug={venue.slug}
          />
        </Container>
      </section>
    </div>
  );
}
