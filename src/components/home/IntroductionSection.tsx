import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export function IntroductionSection() {
  return (
    <section id="radisson-experience-intro" className="py-20 sm:py-28 bg-white text-[#0A0835] scroll-mt-10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photographic Composition with Smooth Reveal */}
          <div className="lg:col-span-6 relative">
            <Reveal direction="right">
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl border border-[#E4DED2] group">
                <Image
                  src="/hotel-photos/facade-morning.jpg"
                  alt="Radisson Hotel Rudrapur hospitality and grand facade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Subtle decorative gold badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-[#0A0835] text-[#F7F4EC] p-6 rounded-lg border border-[#C6A568]/40 shadow-xl flex-col max-w-[220px]">
                <span className="text-xs uppercase tracking-widest text-[#C6A568] font-semibold">
                  Uttarakhand
                </span>
                <span className="font-serif text-lg mt-1 text-[#F7F4EC]">
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
                  THE RADISSON EXPERIENCE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#080097] leading-[1.18] font-normal">
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

            {/* Understated Link */}
            <Reveal direction="up" delayMs={400}>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#080097] hover:text-[#C6A568] transition-colors group"
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
