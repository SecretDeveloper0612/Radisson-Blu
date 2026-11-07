import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, Utensils, Sparkles, PartyPopper } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export function IntroductionSection() {
  const highlights = [
    {
      icon: Bed,
      title: "124 ROOMS & SUITES",
      desc: "Elegant rooms with premium amenities",
    },
    {
      icon: Utensils,
      title: "WORLD-CLASS DINING",
      desc: "Curated cuisines from around the world",
    },
    {
      icon: Sparkles,
      title: "SPA & WELLNESS",
      desc: "Rejuvenate your mind, body & soul",
    },
    {
      icon: PartyPopper,
      title: "EVENTS & CELEBRATIONS",
      desc: "Luxurious spaces for memorable moments",
    },
  ];

  return (
    <section id="radisson-experience-intro" className="py-20 sm:py-28 bg-white text-[#0E0D35] scroll-mt-10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photographic Composition with Smooth Reveal */}
          <div className="lg:col-span-6 relative">
            <Reveal direction="right">
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl border border-[#E4DED2] group">
                <Image
                  src="/hotel-photos/facade-morning.jpg"
                  alt="Radisson Blu Hotel Rudrapur hospitality and grand facade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Subtle decorative badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-white text-[#0E0D35] p-6 rounded-lg border border-[#E8E8F0] shadow-2xl flex-col max-w-[220px]">
                <span className="text-xs uppercase tracking-widest text-[#AA8B54] font-semibold">
                  Uttarakhand
                </span>
                <span className="font-serif text-lg mt-1 text-[#0E0D35]">
                  Gateway to Kumaon & SIDCUL Hub
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Text with Staggered Smooth Reveal */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="up" delayMs={100}>
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AA8B54]">
                  JOURNEY BEGINS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0E0D35] leading-[1.18] font-normal">
                  A distinguished five-star destination in Rudrapur.
                </h2>
              </div>
            </Reveal>

            <Reveal direction="up" delayMs={200}>
              <p className="text-base sm:text-lg text-[#5A5A68] leading-relaxed font-light">
                Nestled in the heart of Uttarakhand&apos;s industrial hub, Radisson Blu Hotel Rudrapur is a distinguished five-star destination renowned for its elegant hospitality, contemporary comforts, and exceptional event experiences.
              </p>
            </Reveal>

            <Reveal direction="up" delayMs={300}>
              <p className="text-sm sm:text-base text-[#5A5A68] leading-relaxed font-light">
                The hotel features 124 well-appointed rooms and suites, thoughtfully designed to cater to business and leisure travellers alike. Guests can enjoy premium amenities, world-class dining at Kumaon Café, Pastry Shop, and K2 Bar, and personalized service synonymous with the Radisson Blu brand.
              </p>
            </Reveal>

            {/* Understated Link */}
            <Reveal direction="up" delayMs={400}>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0E0D35] hover:text-[#C6A568] transition-colors group"
                >
                  <span>Explore the Hotel</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#AA8B54]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Factsheet 4-Pillars Quick Highlight Strip */}
        <Reveal direction="up" delayMs={500}>
          <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E8E8F0]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h, i) => {
                const IconComponent = h.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E8F0] space-y-2 hover:border-[#C6A568] transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] group-hover:scale-110 transition-transform shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E0D35] pt-1">
                      {h.title}
                    </h4>
                    <p className="text-xs text-[#5A5A68] font-light leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default IntroductionSection;
