"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Check,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerQuickLinks } from "@/data/navigation";
import { roomsData } from "@/data/rooms";
import { venuesData } from "@/data/venues";
import Container from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative bg-white text-[#0E0D35] pt-20 pb-12 border-t border-[#E8E8F0] overflow-hidden">
      {/* Animated Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Subtle Ambient Orb 1 (Gold) */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#C6A568]/10 rounded-full blur-[110px] animate-aurora-1" />

        {/* Floating Subtle Ambient Orb 2 */}
        <div className="absolute top-1/3 -right-24 w-[550px] h-[550px] bg-[#FAF8F5] rounded-full blur-[130px] animate-aurora-2" />

        {/* Floating Subtle Ambient Orb 3 */}
        <div className="absolute -bottom-24 left-10 w-[420px] h-[420px] bg-[#AA8B54]/10 rounded-full blur-[100px] animate-aurora-3" />
      </div>

      <Container className="relative z-10">
        {/* Main Multi-Column Links Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#E8E8F0]">
          {/* Column 1 (4 Cols): Grand Brand Identity & Hospitality Summary */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group focus:outline-none">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-medium text-[#0E0D35] group-hover:text-[#AA8B54] transition-colors leading-none">
                VYAH
              </span>
              <span className="block text-[11px] uppercase tracking-[0.38em] text-[#AA8B54] mt-1.5 font-medium">
                By Radisson
              </span>
            </Link>

            <p className="text-[#5A5A68] text-xs sm:text-sm leading-relaxed font-light max-w-sm">
              Discover refined international hospitality in Uttarakhand&apos;s primary commercial engine. Featuring pillarless banquet ballrooms, state-of-the-art boardroom suites, artisanal gastronomy at NH 87, and restorative guest accommodations.
            </p>

            {/* Accolades & Safety Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] text-[#AA8B54]">
              <div className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#E8E8F0]">
                <Award className="w-3.5 h-3.5 text-[#AA8B54]" />
                <span className="text-[#0E0D35] font-medium">Premium Hospitality</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#E8E8F0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#AA8B54]" />
                <span className="text-[#0E0D35] font-medium">Radisson Safety Verified</span>
              </div>
            </div>

            {/* Operating Times */}
            <div className="flex items-center gap-2.5 text-xs text-[#5A5A68] font-light pt-1">
              <Clock className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
              <span>Check-in: {siteConfig.checkInTime} &bull; Check-out: {siteConfig.checkOutTime}</span>
            </div>
          </div>

          {/* Column 2 (2 Cols): Accommodations */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#AA8B54]" />
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0E0D35]">
                Accommodations
              </h4>
            </div>
            <ul className="space-y-3 text-xs text-[#5A5A68] font-light">
              {roomsData.map((room) => (
                <li key={room.id}>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="hover:text-[#AA8B54] transition-colors flex items-center justify-between group"
                  >
                    <span>{room.name}</span>
                    <span className="text-[10px] text-[#AA8B54] opacity-0 group-hover:opacity-100 transition-opacity">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-1.5 text-xs text-[#AA8B54] font-medium hover:underline tracking-wider uppercase text-[11px]"
                >
                  <span>All Rooms & Suites</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (3 Cols): Venues & Celebrations */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#AA8B54]" />
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0E0D35]">
                Venues & Spaces
              </h4>
            </div>
            <ul className="space-y-3 text-xs text-[#5A5A68] font-light">
              {venuesData.slice(0, 5).map((venue) => (
                <li key={venue.id}>
                  <Link
                    href={`/venues/${venue.slug}`}
                    className="hover:text-[#AA8B54] transition-colors flex items-center justify-between group"
                  >
                    <span>{venue.name}</span>
                    {venue.isUpcoming ? (
                      <span className="text-[9px] bg-[#C6A568]/20 text-[#AA8B54] px-1.5 py-0.5 rounded font-mono">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#AA8B54] opacity-0 group-hover:opacity-100 transition-opacity">
                        &rarr;
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/venues"
                  className="inline-flex items-center gap-1.5 text-xs text-[#AA8B54] font-medium hover:underline tracking-wider uppercase text-[11px]"
                >
                  <span>Explore All 7 Venues</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 Cols): Concierge & Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#AA8B54]" />
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0E0D35]">
                Direct Coordinates
              </h4>
            </div>
            <div className="space-y-3.5 text-xs text-[#5A5A68] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#AA8B54] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#0E0D35]">{siteConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#AA8B54] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-[#AA8B54] text-[#0E0D35] transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#AA8B54] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#AA8B54] text-[#0E0D35] transition-colors truncate"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#0E0D35] border border-[#E8E8F0] hover:bg-[#C6A568] hover:text-[#0E0D35] text-[11px] font-medium transition-all shadow-xs"
                >
                  <span>Get Driving Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Navigation & Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#5A5A68] gap-4">
          <p className="text-center md:text-left">
            &copy; 2026 {siteConfig.propertyName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px]">
            <Link
              href="/privacy-policy"
              className="hover:text-[#AA8B54] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#E8E8F0]">&bull;</span>
            <Link
              href="/terms"
              className="hover:text-[#AA8B54] transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-[#E8E8F0]">&bull;</span>
            <Link
              href="/gallery"
              className="hover:text-[#AA8B54] transition-colors"
            >
              Visual Gallery
            </Link>
            <span className="text-[#E8E8F0]">&bull;</span>
            <Link
              href="/contact"
              className="hover:text-[#AA8B54] transition-colors"
            >
              Enquiries & Reservations
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

