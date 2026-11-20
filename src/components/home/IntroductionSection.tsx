import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export function IntroductionSection() {
  return (
    <section id="radisson-experience-intro" className="py-20 sm:py-28 bg-white text-[#0E0D35] scroll-mt-10 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photographic Composition with Smooth Reveal */}
          <div className="lg:col-span-6 space-y-4">
            <Reveal direction="right">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E4DED2] group">
                <Image
                  src="/hotel-photos/facade-morning.jpg"
                  alt="Radisson Hotel Rudrapur hospitality and grand facade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Text with Staggered Smooth Reveal */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="up" delayMs={100}>
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AA8B54]">
                  THE RADISSON EXPERIENCE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0E0D35] leading-[1.18] font-normal">
                  More than a stay. An experience to remember.
                </h2>
              </div>
            </Reveal>

            <Reveal direction="up" delayMs={200}>
              <p className="text-base sm:text-lg text-[#77766D] leading-relaxed font-light">
                Situated in the vibrant industrial center of Rudrapur, Radisson Hotel Rudrapur combines contemporary international hospitality with genuine warmth. Every space—from our acoustically balanced rooms to our grand celebratory ballrooms—is crafted with purpose and distinction.
              </p>
            </Reveal>

            <Reveal direction="up" delayMs={300}>
              <p className="text-sm sm:text-base text-[#77766D] leading-relaxed font-light">
                Whether visiting for business summits in the SIDCUL industrial belt, hosting a majestic wedding ceremony at Sapphire or Queen&apos;s Field, or relishing artisanal recipes at NH 87, our dedicated team ensures your moments are effortless and memorable.
              </p>
            </Reveal>

            {/* Quick Highlights / Stats Grid to elevate blank space */}
            <Reveal direction="up" delayMs={350}>
              <div className="grid grid-cols-3 gap-4 pt-4 pb-2 border-y border-[#E8E8F0]">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#0E0D35] block font-light">12+</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#77766D]">Venues & Spaces</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#0E0D35] block font-light">1,200+</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#77766D]">Max Capacity</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#0E0D35] block font-light">5-Star</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#77766D]">Luxury Hospitality</span>
                </div>
              </div>
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
      </Container>
    </section>
  );
}

export default IntroductionSection;
