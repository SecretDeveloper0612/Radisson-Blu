"use client";

import React, { useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Waves,
  Flower2,
  Sparkles,
  Dumbbell,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Maximize2,
  Scissors,
  Droplets,
  CalendarCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

interface SanctuaryPillar {
  id: string;
  name: string;
  shortLabel: string;
  categoryTag: string;
  subtitle: string;
  narrative: string;
  hours: string;
  images: {
    src: string;
    label: string;
    alt: string;
  }[];
  specs: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  inclusions: string[];
  ctaLabel: string;
  ctaType: string;
}

const sanctuaries: SanctuaryPillar[] = [
  {
    id: "pool",
    name: "Azure Open-Air Swimming Pool",
    shortLabel: "Lap Pool & Deck",
    categoryTag: "AQUATIC REJUVENATION",
    subtitle: "Temperature-Controlled Heated Waters & Sunken Cabanas",
    narrative:
      "Submerge yourself into crystal-clear heated waters embraced by landscaped palm groves and northern skies. Whether completing morning laps in the temperature-controlled pool or sipping bespoke mocktails under shaded loungers, the pool deck delivers pure serenity.",
    hours: "06:00 AM – 09:00 PM Daily",
    images: [
      {
        src: "/hotel-photos/swimming-pool.jpg",
        label: "Azure Pool & Palm Courtyard",
        alt: "Radisson Blu Rudrapur azure open-air heated swimming pool and sun loungers",
      },
    ],
    specs: [
      { label: "Water Temperature", value: "28°C Heated", sublabel: "Year-Round Comfort" },
      { label: "Pool Dimensions", value: "1.2m – 1.8m", sublabel: "Lap & Leisure Depth" },
      { label: "Deck Experience", value: "Sunken Cabanas", sublabel: "Complimentary Towels" },
    ],
    inclusions: [
      "Plush organic cotton towel service & cushioned sun deck loungers",
      "Poolside vitality hydration bar serving chilled juices & fresh coconuts",
      "Safe, dedicated shallow splash enclave designed for young families",
      "Sunscreen, cooling mist & afternoon light refreshment service",
    ],
    ctaLabel: "Reserve Poolside Cabana",
    ctaType: "Pool+Cabana",
  },
  {
    id: "spa",
    name: "Svaastha Ayurvedic Spa & Wellness",
    shortLabel: "Ayurvedic Spa",
    categoryTag: "HOLISTIC HEALING",
    subtitle: "Ancient Vedic Therapies, Botanical Oils & Couple Suites",
    narrative:
      "Step into a sanctuary scented with Himalayan cedarwood, wild lemongrass, and warm sesame oil. Our master therapists employ authentic Abhyanga strokes, warm herbal compresses, and classical steam therapy to release fatigue, calm the mind, and restore vital energy.",
    hours: "08:00 AM – 08:00 PM Daily",
    images: [
      {
        src: "/RBLU PHOTOS/Spa and Saloon/Spa.jpg",
        label: "Private Couple Therapy Suite",
        alt: "Svaastha Ayurvedic Spa couple therapy massage suite with warm cove lighting and floral decor",
      },
      {
        src: "/RBLU PHOTOS/Spa and Saloon/Salon.jpg",
        label: "Luxury Grooming Salon",
        alt: "Radisson Blu Rudrapur luxury salon and styling studio",
      },
    ],
    specs: [
      { label: "Sanctuary Suites", value: "Private Pavilions", sublabel: "Single & Couple Suites" },
      { label: "Therapeutic Lineage", value: "Classical Vedic", sublabel: "Herbal Oil Therapies" },
      { label: "Thermal Amenities", value: "Steam & Sauna", sublabel: "Complimentary with Session" },
    ],
    inclusions: [
      "Classical Abhyanga & Ayurvedic warm herbal compress treatments",
      "Signature pre-treatment Himalayan foot soak & floral cleansing ritual",
      "Private couple treatment suite featuring en-suite rainfall showers",
      "Post-therapy restorative organic herbal tea infusion & eucalyptus steam",
    ],
    ctaLabel: "Book Ayurvedic Therapy",
    ctaType: "Spa+%26+Wellness",
  },
  {
    id: "jacuzzi",
    name: "Whirlpool Hydrotherapy Jacuzzi",
    shortLabel: "Hydro Jacuzzi",
    categoryTag: "HYDROTHERAPY SANCTUARY",
    subtitle: "Contoured Warm Hydro-Jets & Natural Slate Decompression",
    narrative:
      "A private hydrotherapy oasis lined with rich natural slate and polished travertine. Ergonomically positioned hydro-massage jets soothe deep tissue knots, stimulate blood circulation, and deliver profound physical renewal following high-stakes meetings or gala ceremonies.",
    hours: "07:00 AM – 09:00 PM Daily",
    images: [
      {
        src: "/RBLU PHOTOS/jakuzi/Jacuzzi.jpg",
        label: "Slate-Stone Hydro Whirlpool",
        alt: "Radisson Blu Rudrapur private warm hydrotherapy jacuzzi with contoured jets and natural slate stone",
      },
    ],
    specs: [
      { label: "Hydro Jet System", value: "Ergonomic Multi-Jet", sublabel: "Targeted Muscle Relief" },
      { label: "Surround Architecture", value: "Natural Slate Stone", sublabel: "Acoustic Seclusion" },
      { label: "Experience Style", value: "Private Booking", sublabel: "Post-Travel Recovery" },
    ],
    inclusions: [
      "Multi-directional high-pressure water jets targeting lumbar and calves",
      "Continuous thermal circulation maintaining optimal therapeutic warmth",
      "Stepped travertine rim with comfortable headrests for quiet meditation",
      "Dedicated changing suite with rainfall shower and plush terry robes",
    ],
    ctaLabel: "Schedule Hydrotherapy Session",
    ctaType: "Hydrotherapy",
  },
  {
    id: "fitness",
    name: "Equinox Fitness Center & Salon",
    shortLabel: "Fitness & Salon",
    categoryTag: "VITALITY & GROOMING",
    subtitle: "24/7 Technogym Cardio, Strength Studio & Professional Styling",
    narrative:
      "Empower your daily wellness regime in our light-filled fitness center equipped with Technogym treadmills, elliptical trainers, and multi-tier free weights. Adjacent, our full-service salon offers bespoke hair styling, bridal grooming, and beauty rituals to keep you radiant.",
    hours: "Gym: 24 Hours (Keycard) • Salon: 09:00 AM – 08:00 PM",
    images: [
      {
        src: "/RBLU PHOTOS/Health Club/Gym.jpg",
        label: "Technogym Fitness Studio",
        alt: "Radisson Blu Rudrapur state-of-the-art gym with treadmills, bikes and weights",
      },
      {
        src: "/RBLU PHOTOS/Spa and Saloon/Salon.jpg",
        label: "Haute Styling Salon",
        alt: "Professional beauty salon and bridal grooming studio at Radisson Blu Rudrapur",
      },
    ],
    specs: [
      { label: "Fitness Equipment", value: "Technogym Systems", sublabel: "Cardio & Free Weights" },
      { label: "Guest Access", value: "24/7 Keycard", sublabel: "Complimentary for Residents" },
      { label: "Salon Services", value: "Hair & Grooming", sublabel: "Bridal & Executive Styling" },
    ],
    inclusions: [
      "Top-tier Technogym treadmills, cross-trainers & recumbent stationary bikes",
      "Comprehensive dumbbell racks, cable crossovers & core conditioning mats",
      "Dedicated beauty salon for hair styling, manicures, and event grooming",
      "Chilled infused mineral water, fresh green apples & clean workout towels",
    ],
    ctaLabel: "Inquire / Book Salon Service",
    ctaType: "Fitness+%26+Salon",
  },
];

export function WellnessRecreation() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeSubImageIdx, setActiveSubImageIdx] = useState(0);
  const baseId = useId();

  const currentSanctuary = sanctuaries[activeTabIdx];
  const activeImage =
    currentSanctuary.images[activeSubImageIdx] || currentSanctuary.images[0];

  const handleTabChange = (idx: number) => {
    setActiveTabIdx(idx);
    setActiveSubImageIdx(0);
  };

  const getPillarIcon = (id: string, className = "w-4 h-4") => {
    switch (id) {
      case "pool":
        return <Waves className={className} />;
      case "spa":
        return <Flower2 className={className} />;
      case "jacuzzi":
        return <Droplets className={className} />;
      case "fitness":
        return <Dumbbell className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section
      className="py-20 sm:py-28 bg-[#FAF8F5] text-[#0E0D35] relative overflow-hidden border-t border-[#E8E8F0]"
      aria-label="Wellness and Recreation Sanctuaries"
    >
      {/* Ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#C6A568]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#0E0D35]/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Editorial Section Header */}
        <Reveal direction="up">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E8E8F0] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#AA8B54]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#AA8B54]">
                VYAH WELLNESS & SANCTUARY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-normal text-[#0E0D35] leading-[1.18] tracking-tight">
              Restorative harmony for body & soul.
            </h2>

            <p className="text-[#5A5A68] text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto pt-1">
              Unwind effortlessly between landmark celebrations and executive summits. Experience authentic Ayurvedic healing, tranquil heated waters, contoured hydrotherapy, and advanced Technogym conditioning.
            </p>
          </div>
        </Reveal>

        {/* Interactive Sanctuary Selector Bar (role="tablist") */}
        <Reveal direction="up" delayMs={100}>
          <div
            role="tablist"
            aria-label="Wellness facilities selection"
            className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl mx-auto mb-10"
          >
            {sanctuaries.map((item, idx) => {
              const isActive = activeTabIdx === idx;
              const tabId = `${baseId}-tab-${item.id}`;
              const panelId = `${baseId}-panel-${item.id}`;

              return (
                <button
                  key={item.id}
                  id={tabId}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabChange(idx)}
                  className={`group relative p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#0E0D35] text-white border-[#C6A568] shadow-lg -translate-y-0.5"
                      : "bg-white text-[#0E0D35] border-[#E8E8F0] hover:border-[#C6A568]/60 hover:bg-[#FAF8F5] hover:shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#C6A568] text-[#0E0D35]"
                          : "bg-[#FAF8F5] text-[#AA8B54] border border-[#E8E8F0] group-hover:bg-[#C6A568]/15"
                      }`}
                    >
                      {getPillarIcon(item.id, "w-4 h-4")}
                    </div>
                    <span
                      className={`text-[10px] font-mono font-semibold tracking-wider px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/15 text-[#C6A568]"
                          : "bg-[#FAF8F5] text-[#77766D] border border-[#E8E8F0]"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`font-serif text-sm sm:text-base font-normal leading-snug ${
                        isActive ? "text-white" : "text-[#0E0D35] group-hover:text-[#AA8B54]"
                      }`}
                    >
                      {item.shortLabel}
                    </h3>
                    <span
                      className={`text-[10px] uppercase tracking-wider block mt-0.5 truncate ${
                        isActive ? "text-[#C6A568]" : "text-[#77766D]"
                      }`}
                    >
                      {item.categoryTag}
                    </span>
                  </div>

                  {/* Active bottom accent bar */}
                  {isActive && (
                    <div className="absolute -bottom-[1px] left-6 right-6 h-[2px] bg-[#C6A568] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Master Sanctuary Detail Showcase (role="tabpanel") */}
        <Reveal direction="up" delayMs={200}>
          <div
            id={`${baseId}-panel-${currentSanctuary.id}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${currentSanctuary.id}`}
            className="bg-white rounded-3xl border border-[#E8E8F0] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300"
          >
            {/* Visual Canvas (7 Cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] bg-slate-900 overflow-hidden group">
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 pointer-events-none" />

              {/* Floating Header Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#C6A568] text-[10px] font-semibold uppercase tracking-widest shadow-md">
                  {getPillarIcon(currentSanctuary.id, "w-3 h-3")}
                  <span>{currentSanctuary.categoryTag}</span>
                </span>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0E0D35] text-[11px] font-medium shadow-md">
                  <Clock className="w-3.5 h-3.5 text-[#AA8B54]" />
                  <span>{currentSanctuary.hours.split("•")[0]}</span>
                </div>
              </div>

              {/* Multi-view Thumbnails Toggle (if sanctuary has multiple photos) */}
              {currentSanctuary.images.length > 1 && (
                <div className="absolute bottom-20 sm:bottom-24 left-5 right-5 flex items-center gap-2 z-20">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    Switch View:
                  </span>
                  {currentSanctuary.images.map((img, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveSubImageIdx(sIdx)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-md transition-all cursor-pointer ${
                        activeSubImageIdx === sIdx
                          ? "bg-[#C6A568] text-[#0E0D35] font-semibold shadow-md"
                          : "bg-black/55 text-white/90 hover:bg-black/80 border border-white/20"
                      }`}
                    >
                      {img.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C6A568] block mb-1">
                  AUTHENTIC RADISSON BLU FACILITY
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                  {currentSanctuary.name}
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-light mt-1 line-clamp-1">
                  {activeImage.label}
                </p>
              </div>
            </div>

            {/* Content, Specifications & Concierge Inclusions (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-9 lg:p-10 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-[#E8E8F0]">
              <div className="space-y-6 sm:space-y-7">
                {/* Title & Narrative */}
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#AA8B54] block mb-1">
                    {currentSanctuary.subtitle}
                  </span>
                  <p className="text-sm text-[#4B4B59] font-light leading-relaxed pt-1">
                    {currentSanctuary.narrative}
                  </p>
                </div>

                {/* 3-Column Specifications Micro-Grid */}
                <div className="grid grid-cols-3 gap-2.5 py-4 px-3 sm:px-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E8F0]">
                  {currentSanctuary.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <span className="text-[9px] uppercase tracking-wider text-[#AA8B54] font-semibold block">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#0E0D35] block truncate">
                        {spec.value}
                      </span>
                      <span className="text-[10px] text-[#77766D] font-light block truncate">
                        {spec.sublabel}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Sanctuary Signature Inclusions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0E0D35] block">
                      SIGNATURE INCLUSIONS & AMENITIES
                    </span>
                    <span className="text-[10px] text-[#AA8B54] font-medium">
                      Five-Star Standards
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {currentSanctuary.inclusions.map((perk, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs text-[#2D2D3A] leading-snug"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#FAF8F5] border border-[#C6A568]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#AA8B54]">
                          <CheckCircle2 className="w-3 h-3 text-[#AA8B54]" />
                        </div>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons & Direct Concierge */}
              <div className="pt-6 mt-6 border-t border-[#E8E8F0] space-y-3">
                <Link
                  href={`/contact?enquiryType=${currentSanctuary.ctaType}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#C6A568] hover:bg-[#b59457] text-[#0E0D35] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.01] group cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-[#0E0D35] transition-transform group-hover:scale-110" />
                  <span>{currentSanctuary.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#0E0D35] transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-[#5A5A68]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#AA8B54]" />
                    <span>In-House Resident Privileges</span>
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-1 text-[#0E0D35] hover:text-[#AA8B54] font-medium transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Desk: {siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3-Pillar Luxury Assurance Ribbon */}
        <Reveal direction="up" delayMs={300}>
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white border border-[#E8E8F0] flex items-start gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                <Flower2 className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-serif text-sm font-semibold text-[#0E0D35]">
                  Certified Ayurvedic Practitioners
                </h5>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed mt-0.5">
                  Trained specialists in classical Kerala Abhyanga, herbal steam, and tension release.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E8F0] flex items-start gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                <Droplets className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-serif text-sm font-semibold text-[#0E0D35]">
                  Thermal Hydro & Steam Suites
                </h5>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed mt-0.5">
                  Complimentary eucalyptus steam, private lockers, and bathrobes for all therapy appointments.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E8F0] flex items-start gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-serif text-sm font-semibold text-[#0E0D35]">
                  Complimentary Resident Access
                </h5>
                <p className="text-xs text-[#5A5A68] font-light leading-relaxed mt-0.5">
                  Heated outdoor pool, fresh towel service, and 24/7 fitness center included for all room guests.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default WellnessRecreation;
