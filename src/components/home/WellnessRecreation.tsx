"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Waves,
  HeartPulse,
  Flower2,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface WellnessAmenity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  perks: string[];
}

const wellnessFeatures: WellnessAmenity[] = [
  {
    id: "pool",
    title: "Azure Temperature-Controlled Pool",
    subtitle: "Sun-Drenched Lap Pool & Private Cabanas",
    description:
      "Submerge yourself in crystalline heated waters surrounded by landscaped palm groves. Enjoy poolside hydration, bespoke mocktails, and secluded loungers designed for afternoon decompression.",
    image: "/hotel-photos/swimming-pool.jpg",
    specs: [
      { label: "Water Temp", value: "28°C Heated" },
      { label: "Depth", value: "1.2m - 1.8m" },
      { label: "Hours", value: "06:00 AM – 09:00 PM" },
    ],
    perks: ["Complimentary Fresh Towel Service", "Poolside Vitality Juice Bar", "Dedicated Shallow Children Area"],
  },
  {
    id: "spa",
    title: "Svaastha Ayurvedic Spa & Wellness",
    subtitle: "Ancient Vedic Therapies & Contemporary Massages",
    description:
      "Step into a sanctuary scented with lemongrass and cedarwood. Our therapists employ warm herbal compresses, deep tissue kneading, and botanical oils to dissolve fatigue and rejuvenate your senses.",
    image: "/hotel-photos/spa.jpg",
    specs: [
      { label: "Treatment Rooms", value: "4 Private Suites" },
      { label: "Therapies", value: "Ayurvedic & Swedish" },
      { label: "Steam & Sauna", value: "Included with Session" },
    ],
    perks: ["Custom Essential Oil Blends", "Pre-treatment Herbal Foot Ritual", "Private Couple Therapy Pavilions"],
  },
  {
    id: "fitness",
    title: "Equinox State-of-the-Art Fitness Center",
    subtitle: "24/7 Technogym Cardio & Strength Studio",
    description:
      "Maintain your personal wellness regime away from home. Equipped with top-tier treadmills, free weights, resistance cable stations, and yoga zones overlooking the hotel gardens.",
    image: "/hotel-photos/gym.jpg",
    specs: [
      { label: "Access", value: "24 Hours (Keycard)" },
      { label: "Equipment", value: "Technogym & Free Weights" },
      { label: "Instructor", value: "Personal Trainer On Request" },
    ],
    perks: ["Chilled Mineral Waters & Apples", "Personal Audio-Visual Monitors", "Yoga Mats & Foam Rollers"],
  },
];

export function WellnessRecreation() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeFeature = wellnessFeatures[selectedIdx];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A0835] relative overflow-hidden">
      {/* Decorative ambient subtle circle */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#C6A568]/10 blur-3xl pointer-events-none -translate-y-1/2" />

      <Container className="relative z-10">
        {/* Header */}
        <Reveal direction="up">
          <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AA8B54] flex items-center justify-center gap-2">
              <Flower2 className="w-4 h-4 text-[#AA8B54]" />
              WELLNESS & RECREATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#080097]">
              Restorative harmony for body & soul.
            </h2>
            <p className="text-[#77766D] text-sm sm:text-base font-light leading-relaxed">
              Unwind effortlessly between corporate summit sessions and celebratory gatherings with our curated wellness offerings.
            </p>
          </div>
        </Reveal>

        {/* Feature Navigation Cards - 3 Column Grid with Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {wellnessFeatures.map((item, idx) => {
            const isActive = selectedIdx === idx;
            return (
              <Reveal key={item.id} direction="up" delayMs={idx * 100}>
                <div
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${
                    isActive
                      ? "bg-[#080097] text-white border-[#C6A568] shadow-xl scale-[1.02]"
                      : "bg-white text-[#0A0835] border-[#E4DED2] hover:border-[#AA8B54] hover:shadow-md hover:-translate-y-1"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-widest ${
                        isActive ? "text-[#C6A568]" : "text-[#AA8B54]"
                      }`}
                    >
                      0{idx + 1} &bull; WELLNESS
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        isActive ? "bg-[#C6A568]/20 text-[#C6A568]" : "bg-[#F7F4EC] text-[#77766D]"
                      }`}
                    >
                      {item.specs[0].value}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-2xl font-normal leading-snug ${
                      isActive ? "text-white" : "text-[#080097] group-hover:text-[#AA8B54]"
                    }`}
                  >
                    {item.title.split(" ")[0]} {item.title.split(" ")[1]}
                  </h3>
                  <p
                    className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                      isActive ? "text-[#E4DED2]/80" : "text-[#77766D]"
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider">
                      {isActive ? "Viewing Sanctuary" : "Explore Facility"}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive ? "text-[#C6A568] translate-x-1" : "text-[#77766D] group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Dynamic Detail Card with Smooth Animation */}
        <Reveal direction="up" delayMs={200}>
          <div
            key={`detail-${activeFeature.id}`}
            className="bg-white rounded-2xl border border-[#E4DED2] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-in fade-in duration-500"
          >
            {/* Image Preview (7 Cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[340px] group overflow-hidden">
              <Image
                src={activeFeature.image}
                alt={activeFeature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                <span className="text-xs uppercase tracking-widest text-[#C6A568] font-semibold">
                  FEATURED SANCTUARY
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {activeFeature.title}
                </h4>
              </div>
            </div>

            {/* Specifications & Highlights (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F3]">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#AA8B54] font-semibold block">
                    {activeFeature.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#77766D] font-light leading-relaxed mt-2">
                    {activeFeature.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E4DED2]">
                  {activeFeature.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <span className="text-[9px] uppercase tracking-wider text-[#AA8B54] font-medium block">
                        {spec.label}
                      </span>
                      <span className="text-xs font-semibold text-[#080097] block truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Perks Checklist */}
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#080097] block">
                    SANCTUARY AMENITIES
                  </span>
                  {activeFeature.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-[#0A0835]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-[#E4DED2]">
                <Link
                  href="/contact?enquiryType=Spa+%26+Wellness"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest bg-[#C6A568] hover:bg-[#b59457] text-[#0A0835] py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <span>Inquire / Book Appointment</span>
                  <ArrowRight className="w-4 h-4 text-[#0A0835]" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default WellnessRecreation;
