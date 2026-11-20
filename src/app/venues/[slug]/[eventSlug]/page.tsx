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
} from "lucide-react";
import {
  venuesData,
  sapphireCeremonies,
  concordOccasions,
  nh87Events,
  executiveRoomEvents,
  k2barEvents,
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

  // Build event-focused gallery, prioritizing the ceremony's specific image followed by venue images
  const eventGalleryImages = Array.from(
    new Set([
      ...(currentEvent.image ? [currentEvent.image] : []),
      venue.featuredImage,
      ...venue.galleryImages,
    ].filter(Boolean))
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] pt-24 sm:pt-28">
      {/* Top Header & Breadcrumbs Section */}
      <section className="pb-6 pt-4">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link
              href="/venues"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#5A5A68] hover:text-[#0E0D35] border border-[#E8E8F0] shadow-xs transition-all text-xs uppercase tracking-wider font-medium group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#AA8B54]" />
              <span>All Venues</span>
            </Link>
            <span className="text-[#A0A0B0] text-xs">/</span>
            <Link
              href={`/venues/${venue.slug}`}
              className="text-[#5A5A68] hover:text-[#AA8B54] text-xs uppercase tracking-wider transition-colors font-medium"
            >
              {venue.name}
            </Link>
            <span className="text-[#A0A0B0] text-xs">/</span>
            <span className="text-[#AA8B54] text-xs uppercase tracking-wider font-semibold">
              {currentEvent.name}
            </span>
          </div>

          {/* Title & Category Line */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C6A568]/15 border border-[#C6A568]/30 text-[#AA8B54] text-[11px] font-semibold uppercase tracking-[0.2em]">
                  {currentEvent.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#5A5A68] border border-[#E8E8F0] text-[11px] tracking-wider font-light">
                  Hosted at {venue.name}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0E0D35] font-normal tracking-tight">
                {currentEvent.name}
              </h1>
              <p className="text-[#5A5A68] text-base sm:text-lg font-light max-w-3xl">
                {currentEvent.tagline}
              </p>
            </div>
          </div>

          {/* Airbnb-style Collage Gallery at the Top */}
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

      {/* Main Content & Inquiry Grid */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Event Information */}
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

                {/* Key Event Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E8F0]">
                  {currentEvent.guestCapacity && (
                    <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0]">
                      <div className="w-10 h-10 rounded-lg bg-[#C6A568]/15 text-[#AA8B54] flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#77766D] block">
                          Guest Capacity
                        </span>
                        <span className="font-serif text-base text-[#0E0D35] font-medium">
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
                        <span className="font-serif text-base text-[#0E0D35] font-medium">
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

              {/* Other Celebrations at this venue */}
              {otherEvents.length > 0 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                        More Celebrations
                      </span>
                      <h3 className="font-serif text-2xl text-[#0E0D35] font-normal">
                        Other Gatherings at {venue.name}
                      </h3>
                    </div>
                    <Link
                      href={`/venues/${venue.slug}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[#AA8B54] hover:text-[#0E0D35] flex items-center gap-1 transition-colors"
                    >
                      <span>Venue Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {otherEvents.slice(0, 4).map((evt) => (
                      <Link
                        key={evt.id}
                        href={`/venues/${venue.slug}/${evt.slug}`}
                        className="group flex flex-col justify-between p-5 rounded-xl bg-white border border-[#E8E8F0] hover:border-[#AA8B54] hover:shadow-md transition-all"
                      >
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#AA8B54] font-semibold block mb-1">
                            {evt.category}
                          </span>
                          <h4 className="font-serif text-lg text-[#0E0D35] group-hover:text-[#AA8B54] transition-colors">
                            {evt.name}
                          </h4>
                          <p className="text-xs text-[#77766D] line-clamp-2 mt-1.5 font-light">
                            {evt.tagline}
                          </p>
                        </div>
                        <div className="pt-3 mt-3 border-t border-[#F0EFEA] flex items-center justify-between text-xs text-[#AA8B54] font-medium">
                          <span>View Page</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
    </div>
  );
}
