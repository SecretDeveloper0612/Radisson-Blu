import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { venuesData } from "@/data/venues";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export function VenuesPreview() {
  const featuredVenue = venuesData[0]; // Sapphire
  const supportingVenues = venuesData.slice(1);

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A0835] overflow-hidden border-t border-[#E8E8F0]">
      <Container>
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16">
            <SectionHeading
              theme="light"
              eyebrow="OUR VENUES"
              title="Find the right space for every occasion."
              description="From intimate executive summits to milestone wedding receptions, explore our distinctive venue portfolio in Rudrapur."
              className="mb-0 max-w-2xl"
            />
            <div className="mt-6 md:mt-0">
              <Button
                variant="primary-gold"
                href="/venues"
                className="text-xs uppercase tracking-widest"
              >
                View All 7 Venues
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Featured Hero Venue: Sapphire Grand Banquet with Reveal */}
        <Reveal direction="up" delayMs={100}>
          <div className="relative rounded-2xl overflow-hidden border border-[#E8E8F0] bg-[#FAF8F5] mb-12 shadow-xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full">
                <Image
                  src={featuredVenue.featuredImage}
                  alt={featuredVenue.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#FAF8F5]/60" />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 bg-[#FAF8F5]">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-4 h-[1.5px] bg-[#AA8B54]" />
                    <span className="text-xs uppercase tracking-[0.22em] text-[#AA8B54] font-semibold">
                      FEATURED BALLROOM &bull; {featuredVenue.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#080097] font-normal">
                    {featuredVenue.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A5A68] font-light leading-relaxed">
                    {featuredVenue.description}
                  </p>
                  <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 rounded-lg border border-[#E8E8F0] shadow-xs">
                      <span className="text-[#AA8B54] block font-medium">Capacity</span>
                      <span className="text-[#0A0835] font-medium mt-0.5 block">{featuredVenue.specs.capacity}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#E8E8F0] shadow-xs">
                      <span className="text-[#AA8B54] block font-medium">Space</span>
                      <span className="text-[#0A0835] font-medium mt-0.5 block">{featuredVenue.specs.area}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[#E8E8F0]">
                  <Button
                    variant="primary-gold"
                    size="sm"
                    href={`/venues/${featuredVenue.slug}`}
                    className="text-xs uppercase tracking-widest font-semibold"
                  >
                    Explore Sapphire
                  </Button>
                  <Link
                    href="/contact"
                    className="text-xs uppercase tracking-widest text-[#080097] hover:underline font-semibold transition-colors"
                  >
                    Enquire for Events &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Supporting Venues Grid with Staggered Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {supportingVenues.map((venue, idx) => (
            <Reveal key={venue.id} direction="up" delayMs={idx * 100}>
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8E8F0] bg-white hover:border-[#080097]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-md h-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={venue.featuredImage}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Coming soon or status badge */}
                  {venue.isUpcoming ? (
                    <div className="absolute top-4 right-4 bg-[#C6A568] text-[#0A0835] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      {venue.statusBadge || "Coming Soon"}
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 bg-[#080097] text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      {venue.category}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-serif text-2xl font-normal text-[#080097] group-hover:text-[#0E05B5] transition-colors">
                      {venue.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A5A68] font-light mt-2 line-clamp-2 leading-relaxed">
                      {venue.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E8F0] flex items-center justify-between">
                    <Link
                      href={`/venues/${venue.slug}`}
                      className="text-xs uppercase tracking-widest font-semibold text-[#080097] hover:underline flex items-center gap-1.5 transition-colors"
                    >
                      <span>{venue.isUpcoming ? "Preview Details" : "Explore Venue"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/contact"
                      className="text-[11px] uppercase tracking-wider text-[#5A5A68] hover:text-[#080097]"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default VenuesPreview;
