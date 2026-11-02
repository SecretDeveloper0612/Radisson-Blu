import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export function AboutPreview() {
  const pillars = [
    {
      title: "Our Story",
      description:
        "Rooted in Uttarakhand's bustling industrial hub, created to deliver an uncompromised international hospitality benchmark for travelers.",
    },
    {
      title: "The Experience",
      description:
        "A harmonious synthesis of modern luxury aesthetics, acoustic peacefulness, gourmet dining, and genuine heartfelt hospitality.",
    },
    {
      title: "Strategic Location",
      description:
        "Positioned effortlessly on Nainital Road with rapid access to SIDCUL Rudrapur, Pantnagar Airport, and scenic Kumaon hill journeys.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A0835] overflow-hidden border-t border-[#E8E8F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & 3 Pillars with Reveal */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal direction="up">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AA8B54]">
                  ABOUT THE PROPERTY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#080097] font-normal leading-[1.18]">
                  A place to arrive. A place to belong.
                </h2>
                <p className="text-[#5A5A68] text-base sm:text-lg font-light leading-relaxed pt-2">
                  At Radisson Hotel Rudrapur, every touchpoint is intentionally curated to make your stay effortless, productive, and memorable.
                </p>
              </div>
            </Reveal>

            {/* Content Blocks with Staggered Reveal */}
            <div className="space-y-6 pt-2 border-t border-[#E8E8F0]">
              {pillars.map((item, idx) => (
                <Reveal key={idx} direction="up" delayMs={idx * 120}>
                  <div className="flex gap-4">
                    <span className="font-serif text-xl text-[#080097] font-semibold shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-[#0A0835] font-normal">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A5A68] font-light mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal direction="up" delayMs={360}>
              <div className="pt-2">
                <Button
                  variant="primary-gold"
                  size="md"
                  href="/about"
                  className="text-xs uppercase tracking-widest flex items-center gap-2 group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Refined Architectural Image with Smooth Scale Reveal */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delayMs={150}>
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#E8E8F0] shadow-xl bg-slate-900 group">
                <Image
                  src="/hotel-photos/portico.jpg"
                  alt="Radisson Hotel Rudrapur architectural grounds and hospitality entrance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;
