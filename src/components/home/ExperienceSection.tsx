import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export function ExperienceSection() {
  const experiences = [
    {
      category: "ACCOMMODATIONS",
      title: "Rooms & Suites",
      description:
        "Calm, thoughtfully appointed sanctuaries tailored for restorative rest and corporate focus.",
      image: "/hotel-photos/room-suite.jpg",
      href: "/rooms",
      span: "lg:col-span-4",
    },
    {
      category: "GASTRONOMY",
      title: "Signature Dining",
      description:
        "Theatrical live kitchens and regional delicacies at NH 87, complemented by artisanal cocktails.",
      image: "/RBLU PHOTOS/NH-87/1 (1).JPG",
      href: "/venues/nh-87",
      span: "lg:col-span-4",
    },
    {
      category: "EVENTS & CELEBRATIONS",
      title: "Celebrations & Events",
      description:
        "Regal ballrooms, lush manicured lawns, and executive meeting rooms for gatherings of all scales.",
      image: "/RBLU PHOTOS/Sapphire/Banquet Cluster.jpg",
      href: "/venues",
      span: "lg:col-span-4",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A0835] overflow-hidden border-t border-[#E8E8F0]">
      <Container>
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AA8B54]">
              DISCOVER THE PROPERTY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#080097]">
              Curated spaces designed to inspire.
            </h2>
          </div>
        </Reveal>

        {/* Feature Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {experiences.map((item, idx) => (
            <div key={idx} className={`${item.span}`}>
              <Reveal direction="up" delayMs={idx * 150} className="h-full">
                <div className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-[#E8E8F0] bg-slate-900 transition-all duration-500 hover:border-[#080097]/50 hover:shadow-2xl hover:-translate-y-1 min-h-[460px] lg:min-h-[500px] p-8 shadow-lg">
                  {/* Image Background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative z-10 space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C6A568]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C6A568] hover:text-white transition-colors"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
