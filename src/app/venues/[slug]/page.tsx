import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Users,
  Maximize2,
  Utensils,
  Tv,
  Phone,
  Mail,
  Layers,
  ShieldCheck,
  Compass,
  FileText,
} from "lucide-react";
import { venuesData } from "@/data/venues";
import { siteConfig } from "@/config/site";
import VenueGallerySection from "@/components/venues/VenueGallerySection";
import VenueHeroSlideshow from "@/components/venues/VenueHeroSlideshow";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface VenuePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return venuesData.map((venue) => ({
    slug: venue.slug,
  }));
}

export default async function VenueDetailPage({ params }: VenuePageProps) {
  const { slug } = await params;
  const venue = venuesData.find((v) => v.slug === slug);

  if (!venue) {
    notFound();
  }

  const relatedVenues = venuesData
    .filter((v) => v.id !== venue.id)
    .slice(0, 3);

  // Group features into organized pillars
  const avFeatures = venue.features.filter((f) =>
    /projection|audio|wi-fi|wifi|screen|camera|sound|acoustic|display/i.test(f)
  );
  const culinaryFeatures = venue.features.filter((f) =>
    /culinary|kitchen|catering|menu|dining|food|chef|patisserie|wine|bar|breakfast|coffee/i.test(
      f
    )
  );
  const guestFeatures = venue.features.filter(
    (f) => !avFeatures.includes(f) && !culinaryFeatures.includes(f)
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Venue Detail Hero with Slideshow */}
      <section className="relative h-[72vh] min-h-[580px] max-h-[780px] flex items-end overflow-hidden bg-neutral-950">
        <VenueHeroSlideshow
          images={[venue.featuredImage, ...venue.galleryImages]}
          venueName={venue.name}
        />

        <Container className="relative z-20 pb-16 sm:pb-20 pt-32 sm:pt-40 w-full">
          {/* Breadcrumb Navigation Pill */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Link
              href="/venues"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 hover:bg-[#C6A568] hover:text-[#0A0835] text-[#C6A568] border border-white/20 backdrop-blur-md transition-all text-xs uppercase tracking-widest font-medium shadow-md cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>All Venues</span>
            </Link>
            <span className="text-white/40 text-xs">/</span>
            <span className="text-white/80 text-xs tracking-wider font-light uppercase hidden sm:inline">
              {venue.name}
            </span>
          </div>

          {/* Category Badge & Headline */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#C6A568]/20 border border-[#C6A568]/40 text-[#C6A568] text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
              {venue.category}
            </span>
            {venue.isUpcoming && (
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#C6A568] text-[#0A0835] px-3 py-1 rounded-full shadow-lg">
                {venue.statusBadge || "Coming Soon"}
              </span>
            )}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight drop-shadow-sm">
            {venue.name}
          </h1>

          <p className="mt-3 text-base sm:text-xl text-[#E4DED2]/95 font-light max-w-2xl leading-relaxed drop-shadow">
            {venue.tagline}
          </p>
        </Container>
      </section>

      {/* Floating Quick Reference Bar (Connecting Hero & Content) */}
      <section className="relative z-30 -mt-10 sm:-mt-12 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="bg-white text-[#0A0835] rounded-2xl border border-[#E8E8F0] shadow-xl p-5 sm:p-7 backdrop-blur-xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E8E8F0] relative z-10">
              {/* Metric 1: Capacity */}
              <div className="flex items-start gap-3.5 pt-0">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Guest Capacity
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    {venue.specs.capacity || "Flexible Planning"}
                  </span>
                </div>
              </div>

              {/* Metric 2: Floor Area */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Floor Space
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    {venue.specs.area || "Spacious Layout"}
                  </span>
                </div>
              </div>

              {/* Metric 3: Catering */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Culinary Catering
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5 line-clamp-1">
                    {venue.specs.catering || "In-House Multi-Cuisine"}
                  </span>
                </div>
              </div>

              {/* Metric 4: Formats */}
              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Configuration
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0835] block mt-0.5">
                    {venue.specs.setupStyles
                      ? venue.specs.setupStyles.slice(0, 2).join(" • ")
                      : venue.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Details Section */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Content (8 Cols): Narrative, Gallery, Seating & Highlights */}
            <div className="lg:col-span-8 space-y-12">
              {/* Architectural Narrative / Overview */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#AA8B54]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AA8B54]">
                    VENUE OVERVIEW
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0835] font-normal tracking-tight">
                  About {venue.name}
                </h2>
                <p className="text-base sm:text-lg text-[#4B4B59] leading-relaxed font-light pt-1">
                  {venue.fullDescription}
                </p>

                {/* Signature Space Attributes */}
                <div className="pt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-[#E8E8F0] text-xs font-medium text-[#0A0835] shadow-xs">
                    <span>Radisson Signature Venue</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E8F0] text-xs font-medium text-[#0A0835] shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#AA8B54]" />
                    <span>Dedicated Event Management</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E8F0] text-xs font-medium text-[#0A0835] shadow-xs">
                    <Compass className="w-3.5 h-3.5 text-[#AA8B54]" />
                    <span>Custom Floor Layouts</span>
                  </span>
                </div>
              </div>

              {/* Spaces & Ambiance Gallery */}
              <VenueGallerySection
                venueName={venue.name}
                venueSlug={venue.slug}
                galleryImages={venue.galleryImages}
              />

              {/* Seating Configurations & Capacities */}
              {venue.specs.setupStyles && venue.specs.setupStyles.length > 0 && (
                <div className="space-y-5">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                      CAPACITY & LAYOUTS
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                      Seating Configurations
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A5A68] font-light mt-1">
                      Our flexible architecture allows tailored arrangements to suit your exact guest flow and ceremony style.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {venue.specs.setupStyles.map((style, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-xs hover:shadow-sm text-center space-y-2 group"
                      >
                        <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF8F5] group-hover:bg-[#C6A568]/15 border border-[#E8E8F0] group-hover:border-[#C6A568]/30 flex items-center justify-center text-[#AA8B54] transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-medium text-xs sm:text-sm text-[#0A0835] block">
                            {style}
                          </span>
                          <span className="text-[10px] text-[#5A5A68] uppercase tracking-wider block mt-0.5">
                            Available Format
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Distinctive Highlights */}
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                    KEY DISTINCTIONS
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                    What Sets {venue.name} Apart
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {venue.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-white border border-[#E8E8F0] hover:border-[#C6A568]/70 hover:shadow-sm transition-all group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#AA8B54] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm text-[#242436] font-light leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Categorized */}
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                    FACILITIES & EQUIPMENT
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                    Technical & Event Services
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Category 1: Audiovisual & Lighting */}
                  <div className="p-5 rounded-xl bg-white border border-[#E8E8F0] space-y-3 shadow-xs">
                    <div className="flex items-center gap-2 text-[#AA8B54] font-medium text-xs uppercase tracking-wider">
                      <Tv className="w-4 h-4" />
                      <span>Audio & Visual</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[#5A5A68] font-light">
                      {(avFeatures.length > 0 ? avFeatures : venue.features.slice(0, 2)).map(
                        (feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54] shrink-0 mt-1.5" />
                            <span>{feat}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Category 2: Culinary & Banqueting */}
                  <div className="p-5 rounded-xl bg-white border border-[#E8E8F0] space-y-3 shadow-xs">
                    <div className="flex items-center gap-2 text-[#AA8B54] font-medium text-xs uppercase tracking-wider">
                      <Utensils className="w-4 h-4" />
                      <span>Banqueting & Dining</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[#5A5A68] font-light">
                      {(culinaryFeatures.length > 0
                        ? culinaryFeatures
                        : venue.features.slice(2, 4)
                      ).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54] shrink-0 mt-1.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 3: Guest Comfort & Logistics */}
                  <div className="p-5 rounded-xl bg-white border border-[#E8E8F0] space-y-3 shadow-xs">
                    <div className="flex items-center gap-2 text-[#AA8B54] font-medium text-xs uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Guest Services</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[#5A5A68] font-light">
                      {(guestFeatures.length > 0 ? guestFeatures : venue.features.slice(4)).map(
                        (feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54] shrink-0 mt-1.5" />
                            <span>{feat}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bespoke Floor Plan Blueprint Card */}
              <div className="rounded-2xl p-6 sm:p-8 bg-white text-[#0A0835] border border-[#E8E8F0] relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2 max-w-xl relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Custom Blueprint & Schematics</span>
                  </span>
                  <h4 className="font-serif text-2xl text-[#0A0835] font-normal">
                    Need a personalized floor plan?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A5A68] font-light leading-relaxed">
                    Our event engineers craft bespoke 2D/3D seating layouts tailored to your exact stage specifications, guest counts, and floral themes.
                  </p>
                </div>
                <Button
                  variant="primary-gold"
                  size="sm"
                  href={`/contact?venue=${encodeURIComponent(
                    venue.name + " (Floor Plan Request)"
                  )}`}
                  className="shrink-0 text-xs uppercase tracking-widest font-semibold px-6 py-3 shadow-md hover:scale-105 transition-all relative z-10"
                >
                  Request Layout
                </Button>
              </div>
            </div>

            {/* Right Sidebar (4 Cols): Luxury Event Concierge & Specifications */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-white text-[#0A0835] rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xl space-y-6 relative overflow-hidden">
                {/* Header */}
                <div className="relative z-10">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] text-[10px] font-bold uppercase tracking-widest mb-2">
                    <span>EVENT CONCIERGE</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                    Venue Specifications
                  </h3>
                  <p className="text-[11px] text-[#5A5A68] font-light mt-1">
                    Direct Planning & Instant Quotation
                  </p>
                </div>

                {/* Specification Table */}
                <div className="space-y-3.5 text-xs font-light divide-y divide-[#E8E8F0] relative z-10">
                  <div className="pt-2 flex justify-between items-start gap-4">
                    <span className="text-[#5A5A68] font-medium shrink-0">
                      Category:
                    </span>
                    <span className="text-right font-semibold text-[#0A0835]">
                      {venue.category}
                    </span>
                  </div>

                  <div className="pt-3 flex justify-between items-start gap-4">
                    <span className="text-[#5A5A68] flex items-center gap-1.5 shrink-0 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#AA8B54]" />
                      <span>Capacity:</span>
                    </span>
                    <span className="text-right font-semibold text-[#0A0835]">
                      {venue.specs.capacity || "Upon request"}
                    </span>
                  </div>

                  <div className="pt-3 flex justify-between items-start gap-4">
                    <span className="text-[#5A5A68] flex items-center gap-1.5 shrink-0 font-medium">
                      <Maximize2 className="w-3.5 h-3.5 text-[#AA8B54]" />
                      <span>Floor Space:</span>
                    </span>
                    <span className="text-right font-semibold text-[#0A0835]">
                      {venue.specs.area || "Upon request"}
                    </span>
                  </div>

                  <div className="pt-3 flex justify-between items-start gap-4">
                    <span className="text-[#5A5A68] flex items-center gap-1.5 shrink-0 font-medium">
                      <Utensils className="w-3.5 h-3.5 text-[#AA8B54]" />
                      <span>Catering:</span>
                    </span>
                    <span className="text-right font-semibold text-[#0A0835]">
                      {venue.specs.catering || "In-house culinary banquet"}
                    </span>
                  </div>

                  {venue.specs.setupStyles && (
                    <div className="pt-3 space-y-2">
                      <span className="text-[#5A5A68] flex items-center gap-1.5 font-medium">
                        <Layers className="w-3.5 h-3.5 text-[#AA8B54]" />
                        <span>Setup Formats:</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {venue.specs.setupStyles.map((style, i) => (
                          <span
                            key={i}
                            className="bg-[#FAF8F5] text-[#0A0835] text-[10px] px-2.5 py-1 rounded-md border border-[#E8E8F0] font-medium"
                          >
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Actions */}
                {venue.isUpcoming ? (
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E8F0] text-center space-y-2.5 relative z-10">
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#AA8B54] font-bold uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4" />
                      <span>Currently in Development</span>
                    </div>
                    <p className="text-[11px] text-[#5A5A68] font-light leading-relaxed">
                      This venue is not yet open for general bookings. Expressions of interest for future dates are welcome.
                    </p>
                    <Button
                      variant="primary-gold"
                      size="sm"
                      href={`/contact?venue=${encodeURIComponent(venue.name + " (Upcoming)")}`}
                      className="w-full text-xs uppercase tracking-widest mt-2"
                    >
                      Pre-Register Interest
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3 pt-2 relative z-10">
                    <Button
                      variant="primary-gold"
                      size="lg"
                      href={`/contact?venue=${encodeURIComponent(venue.name)}`}
                      className="w-full text-xs uppercase tracking-widest font-semibold shadow-md hover:shadow-xl transition-all"
                    >
                      Enquire for this Venue
                    </Button>
                    <p className="text-[11px] text-[#77766D] text-center font-light">
                      Personalized quote & capacity options within 4 hours
                    </p>
                  </div>
                )}

                {/* Direct Contact Desk */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-2.5 text-xs relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#AA8B54] font-semibold block">
                    Direct Banquet Desk
                  </span>
                  <div className="flex items-center justify-between text-[#0A0835]">
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center gap-2 hover:text-[#AA8B54] transition-colors font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#AA8B54]" />
                      <span>{siteConfig.contact.phoneDisplay}</span>
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-2 hover:text-[#AA8B54] transition-colors font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#AA8B54]" />
                      <span>Email Desk</span>
                    </a>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="pt-3 border-t border-[#E8E8F0] space-y-1.5 text-[11px] text-[#5A5A68] font-light relative z-10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A568] shrink-0" />
                    <span>Dedicated Banquet Coordinator assigned</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A568] shrink-0" />
                    <span>Master Chef custom tasting session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A568] shrink-0" />
                    <span>Full AV engineering & power backup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Venues Section */}
          {relatedVenues.length > 0 && (
            <div className="mt-20 pt-16 border-t border-[#E8E8F0]">
              <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                    EXPLORE OTHER SPACES
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#0A0835] font-normal">
                    More Venues at Radisson Rudrapur
                  </h3>
                </div>
                <Link
                  href="/venues"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0A0835] hover:text-[#AA8B54] transition-colors"
                >
                  <span>View All Venues</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedVenues.map((item) => (
                  <Link
                    key={item.id}
                    href={`/venues/${item.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E8E8F0] hover:border-[#C6A568] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
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
                          {item.specs.capacity ? item.specs.capacity.split("/")[0].trim() : "Flexible Capacity"}
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
                      <span className="pt-3">Explore Venue</span>
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
