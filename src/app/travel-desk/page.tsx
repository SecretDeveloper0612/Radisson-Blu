import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Compass,
  Plane,
  Clock,
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Mountain,
  Trees,
  Landmark,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import VintageCarSlideshow from "@/components/travel-desk/VintageCarSlideshow";

export const metadata = {
  title: "Travel Desk & Concierge | Radisson Blu Hotel Rudrapur",
  description:
    "Explore Nainital, Kainchi Dham, Corbett National Park, and seamless Pantnagar airport transfers with the dedicated 24/7 Travel Desk at Radisson Blu Hotel Rudrapur.",
};

const travelServices = [
  {
    title: "Airport & Railway Transfers",
    description:
      "Chauffeured pickup and drop-off services for Pantnagar Airport (14 km), Delhi IGI Airport, and Rudrapur City Railway Station with luxury sedans and SUVs.",
    icon: Plane,
    badge: "24/7 Available",
  },
  {
    title: "Himalayan Hill Tours",
    description:
      "Full-day and multi-day guided excursions to Nainital, Bhimtal, Ranikhet, Mukteshwar, and Almora with experienced local mountain chauffeurs.",
    icon: Mountain,
    badge: "Custom Itineraries",
  },
  {
    title: "Spiritual Pilgrimage Circuits",
    description:
      "Curated darshan circuits to revered shrines including Kainchi Dham (Neem Karoli Baba Ashram), Gurudwara Nanakmatta Sahib, and Atariya Mandir.",
    icon: Landmark,
    badge: "Guided Pilgrimage",
  },
  {
    title: "Wildlife & Safari Expeditions",
    description:
      "Hassle-free safari bookings, private transport, and nature naturalist guides to Jim Corbett National Park and surrounding tiger reserve zones.",
    icon: Trees,
    badge: "Corbett Safaris",
  },
];

const popularDestinations = [
  {
    name: "Kainchi Dham (Neem Karoli Baba)",
    category: "Spiritual Pilgrimage",
    distance: "83 km",
    duration: "Approx. 2 hr 45 min",
    image: "/hotel-photos/kainchi-dham.jpg",
    description:
      "World-revered Himalayan ashram nestled in a serene pine valley, visited by devotees, spiritual seekers, and international luminaries.",
  },
  {
    name: "Nainital Lake & Town",
    category: "Iconic Hill Getaway",
    distance: "74 km",
    duration: "Approx. 2 hr 10 min",
    image: "/attractions/nainital.webp",
    description:
      "Emerald crescent-shaped lake surrounded by seven verdant peaks, scenic ropeways, colonial viewpoints, and vibrant bazaars.",
  },
  {
    name: "Gurudwara Nanakmatta Sahib",
    category: "Historic Spiritual Shrine",
    distance: "46 km",
    duration: "Approx. 1 hr 10 min",
    image: "/attractions/nanakmatta.jpg",
    description:
      "Sacred historic Sikh shrine associated with Guru Nanak Dev Ji, featuring the revered Baoli Sahib and adjoining serene reservoir.",
  },
  {
    name: "Bhimtal Lake & Island Cafe",
    category: "Tranquil Lake Retreat",
    distance: "70 km",
    duration: "Approx. 2 hr",
    image: "/hotel-photos/bhimtal-lake.jpg",
    description:
      "Sprawling freshwater lake with an iconic central island, water sports, and scenic hillside nature walking promenades.",
  },
  {
    name: "Pantnagar Airport (PGH)",
    category: "Regional Aviation Hub",
    distance: "14 km",
    duration: "Approx. 20 min",
    image: "/attractions/pantnagar-airport.jpg",
    description:
      "The primary air gateway to Kumaon with scheduled direct flights to Delhi, Dehradun, and regional business centers.",
  },
  {
    name: "SIDCUL Industrial Belt",
    category: "Corporate Hub",
    distance: "2 km",
    duration: "Approx. 5 min",
    image: "/attractions/sidcul.jpg",
    description:
      "Located directly opposite the hotel, home to over 300+ Fortune 500 manufacturing, automotive, and FMCG headquarters.",
  },
];

export default function TravelDeskPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] max-h-[680px] flex items-end overflow-hidden bg-neutral-950">
        <Image
          src="/vintage/travel-desk-vintage-chauffeur.jpg"
          alt="Radisson Blu Hotel Rudrapur Vintage Rolls Royce & Chauffeured Travel Services"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

        <Container className="relative z-20 pb-16 sm:pb-20 pt-32 w-full">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-[#C6A568]/20 border border-[#C6A568]/40 text-[#C6A568] text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
              GUEST CONCIERGE & CHAUFFEURED FLEET
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/15 text-[11px] tracking-wider font-light">
              24/7 Dedicated Assistance
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-wide max-w-4xl leading-[1.12]">
            Radisson Travel Desk
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mt-3 font-light leading-relaxed">
            Your gateway to the Kumaon Himalayas, historic pilgrimage temples, and seamless corporate transit across Uttarakhand.
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/918171000114?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Travel%20Desk%20services%20at%20Radisson%20Blu%20Rudrapur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href="tel:+918171000114"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md text-xs uppercase tracking-wider font-semibold transition-all"
            >
              <Phone className="w-4 h-4 text-[#C6A568]" />
              <span>Call Concierge: +91 8171000114</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 border-b border-[#E8E8F0]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AA8B54]">
              BESPOKE TRANSPORTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0D35] font-normal">
              Tailored Travel & Chauffeur Services
            </h2>
            <p className="text-sm text-[#77766D] font-light">
              Premium air-conditioned sedans, SUVs, and luxury vans inspected daily for absolute comfort, safety, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-[#E8E8F0] shadow-sm hover:border-[#C6A568] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#AA8B54] block mb-1">
                        {service.badge}
                      </span>
                      <h3 className="font-serif text-xl text-[#0E0D35] font-normal">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5A5A68] font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#F0EFEA]">
                    <a
                      href="https://wa.me/918171000114?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Travel%20Desk%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#AA8B54] hover:text-[#0E0D35] transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Vintage Car & Local Rides Section with Interactive Cards */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E8F0]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AA8B54]">
              EXCLUSIVE FLEET & LOCAL TRANSIT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0D35] font-normal">
              Vintage Car & Travel Services
            </h2>
            <p className="text-sm text-[#77766D] font-light">
              Choose from royal ceremonial vintage entries or flexible hourly local transit packages tailored to your schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 items-stretch">
            {/* Card 1: ROLLS ROYCE VINTAGE CAR */}
            <div className="rounded-3xl border border-[#C6A568]/40 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              {/* Card Photo Slideshow Header */}
              <VintageCarSlideshow
                images={[
                  "/vintage/vintage-rr-1.jpg",
                  "/vintage/vintage-rr-2.jpg",
                  "/vintage/vintage-rr-3.jpg",
                  "/vintage/vintage-rr-4.jpg",
                  "/vintage/vintage-rr-5.jpg",
                  "/vintage/vintage-rr-6.jpg",
                ]}
                alt="Rolls Royce Vintage Car Radisson Blu Rudrapur"
              />

              <div className="p-7 sm:p-9 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D35] font-normal leading-tight">
                      ROLLS ROYCE VINTAGE CAR
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A5A68] font-light mt-2 leading-relaxed">
                      Make an unforgettable, majestic entrance for your Baraat, bridal arrival, milestone reception, or luxury photoshoot with our impeccably preserved vintage convertible.
                    </p>
                  </div>

                  {/* Ride Type Options */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#0E0D35] block">
                      Ride Type Packages
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { title: "1 Hour Ride", subtitle: "Grand Baraat Entry / Photoshoot" },
                        { title: "2 Hour Ride", subtitle: "Ceremonial Procession & Guest Toast" },
                        { title: "4 Hour Ride", subtitle: "Extended Reception & VIP Chauffeur" },
                      ].map((plan, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-xl bg-white border border-[#E8E8F0] shadow-2xs group-hover:border-[#C6A568]/50 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0E0D35]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#AA8B54] shrink-0" />
                              <span>{plan.title}</span>
                            </div>
                            <span className="text-[11px] text-[#77766D] font-light block mt-1 leading-snug">
                              {plan.subtitle}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions list */}
                  <div className="p-4 rounded-xl bg-white/70 border border-[#E8E8F0] text-xs text-[#5A5A68] space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54]" />
                      <span>Uniformed royal chauffeur with white gloves</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54]" />
                      <span>Complimentary floral garland or ceremonial ribbon styling on request</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54]" />
                      <span>Full pre-event polishing & dedicated on-site escort</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E8E8F0] flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://wa.me/918171000114?text=Hello%2C%20I%20would%20like%20to%20reserve%20the%20Rolls%20Royce%20Vintage%20Car%20at%20Radisson%20Blu%20Rudrapur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0E0D35] hover:bg-[#AA8B54] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C6A568]" />
                    <span>Reserve Vintage Car</span>
                  </a>
                  <a
                    href="tel:+918171000114"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-[#E8E8F0] text-[#0E0D35] hover:border-[#AA8B54] text-xs font-medium uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#AA8B54]" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: LOCAL RIDES & VEHICLE CATEGORIES */}
            <div className="rounded-3xl border border-[#E8E8F0] bg-white overflow-hidden shadow-lg hover:shadow-xl hover:border-[#C6A568] transition-all duration-300 flex flex-col justify-between group">
              {/* Card Photo Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <Image
                  src="/hotel-photos/portico.jpg"
                  alt="Chauffeured Fleet at Hotel Portico"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-[0.2em]">
                    FLEXIBLE LOCAL CONCIERGE
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/90">
                    City &amp; SIDCUL Industrial Hub Transit
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-9 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D35] font-normal leading-tight">
                      LOCAL RIDES
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A5A68] font-light mt-2 leading-relaxed">
                      Designed for executive corporate meetings, plant visits across the SIDCUL industrial belt, family shopping excursions, and seamless local city commutes.
                    </p>
                  </div>

                  {/* Ride Type Plans */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#0E0D35] block">
                      Ride Type Packages
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { duration: "4 Hrs", distance: "40 km", label: "Half Day Plan" },
                        { duration: "6 Hrs", distance: "60 km", label: "Standard Plan" },
                        { duration: "8 Hrs", distance: "80 km", label: "Full Day Plan" },
                      ].map((ride, rIdx) => (
                        <div
                          key={rIdx}
                          className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] text-center"
                        >
                          <span className="font-serif text-base text-[#0E0D35] font-medium block">
                            {ride.duration} / {ride.distance}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-[#AA8B54] font-medium block mt-0.5">
                            {ride.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Overtime & Excess Kilometers Notes */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-dashed border-[#E8E8F0] text-xs text-[#5A5A68]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54]" />
                        <span><strong>Extra km:</strong> Flat rate billing</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#AA8B54]" />
                        <span><strong>Extra Hour:</strong> Flexible extension</span>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Categories */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#0E0D35] block">
                      Vehicle Categories
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { name: "Sedan", desc: "Dzire / Etios / Honda City", capacity: "Up to 4 Pax" },
                        { name: "MUV", desc: "Ertiga / Carens", capacity: "Up to 6 Pax" },
                        { name: "Prime SUV", desc: "Innova Crysta / Hycross", capacity: "Executive Comfort" },
                      ].map((veh, vIdx) => (
                        <div
                          key={vIdx}
                          className="p-3.5 rounded-xl border border-[#E8E8F0] bg-white hover:border-[#AA8B54] transition-colors"
                        >
                          <span className="text-xs font-semibold text-[#0E0D35] block">
                            {veh.name}
                          </span>
                          <span className="text-[11px] text-[#77766D] font-light block leading-tight mt-0.5">
                            {veh.desc}
                          </span>
                          <span className="text-[10px] text-[#AA8B54] font-medium uppercase tracking-wider block mt-1.5">
                            {veh.capacity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E8E8F0] flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://wa.me/918171000114?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Local%20Ride%20at%20Radisson%20Blu%20Rudrapur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book Local Ride</span>
                  </a>
                  <a
                    href="tel:+918171000114"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-[#E8E8F0] text-[#0E0D35] hover:border-[#AA8B54] text-xs font-medium uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#AA8B54]" />
                    <span>+91 8171000114</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Popular Excursions Showcase */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AA8B54] block mb-1">
                DISCOVER UTTARAKHAND
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0D35] font-normal">
                Curated Excursions & Getaways
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#77766D] font-light max-w-md">
              Step into comfortable chauffeured journeys directly from the hotel lobby to pristine mountain lakes and spiritual shrines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {popularDestinations.map((dest, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white border border-[#E8E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#AA8B54] transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/60 text-white border border-white/20 text-[10px] uppercase tracking-wider backdrop-blur-md font-medium">
                      {dest.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-[#77766D]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#AA8B54]" />
                        {dest.distance}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#AA8B54]" />
                        {dest.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-[#0E0D35] font-normal group-hover:text-[#AA8B54] transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5A5A68] font-light leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between">
                    <a
                      href={`https://wa.me/918171000114?text=Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20${encodeURIComponent(
                        dest.name
                      )}%20via%20Radisson%20Travel%20Desk`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E0D35] hover:text-[#AA8B54] transition-colors"
                    >
                      <Car className="w-3.5 h-3.5 text-[#AA8B54]" />
                      <span>Book Chauffeur</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Booking CTA Banner */}
      <section className="pb-20">
        <Container>
          <div className="p-8 sm:p-12 rounded-3xl bg-radial from-[#151448] via-[#0E0D35] to-[#0A0927] text-white border border-[#C6A568]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.22em] text-[#C6A568] font-semibold">
                SEAMLESS EXPEDITIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal">
                Need a Custom Itinerary or Airport Transfer?
              </h2>
              <p className="text-sm text-white/80 font-light leading-relaxed">
                Our front desk and travel concierge are stationed 24 hours daily to coordinate chauffeured luxury vehicles, professional drivers, and mountain tour plans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/918171000114?text=Hello%2C%20I%20would%20like%20to%20book%20a%20car%20with%20Radisson%20Travel%20Desk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="tel:+918171000114"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0E0D35] border border-white/20 text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-[#C6A568]" />
                <span>+91 8171000114</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
