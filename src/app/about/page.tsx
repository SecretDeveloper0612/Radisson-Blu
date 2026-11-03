import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Building,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel-photos/facade-morning.jpg"
            alt="Radisson Hotel Rudrapur architectural grounds"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
          />
          {/* Light black overlay for natural photograph colors & text contrast */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />
        </div>

        <Container className="relative z-10 pt-28 pb-16 text-center max-w-3xl">
          <Reveal direction="down" delayMs={100}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A568] block mb-3">
              HOSPITALITY WITH DISTINCTION
            </span>
          </Reveal>
          <Reveal direction="up" delayMs={200}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F7F4EC] font-normal leading-tight">
              About Radisson Rudrapur
            </h1>
          </Reveal>
          <Reveal direction="up" delayMs={300}>
            <p className="mt-4 text-base sm:text-lg text-[#E4DED2]/85 font-light leading-relaxed">
              Elevating the standard of international business and leisure hospitality in Uttarakhand.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Chapter 1: Our Story & Heritage */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="right" delayMs={100}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA8B54]">
                  OUR STORY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#080097] font-normal leading-tight mt-2">
                  Crafted for modern corporate travelers and milestone family celebrations.
                </h2>
              </Reveal>
              <Reveal direction="up" delayMs={200}>
                <p className="text-base text-[#77766D] font-light leading-relaxed">
                  Rudrapur represents one of North India&apos;s most vital industrial hubs, acting as the primary economic engine of Uttarakhand and the scenic gateway to the Kumaon Himalayas.
                </p>
              </Reveal>
              <Reveal direction="up" delayMs={300}>
                <p className="text-base text-[#77766D] font-light leading-relaxed">
                  Radisson Hotel Rudrapur was envisioned to provide executives, visiting dignitaries, and celebratory guests with a sanctuary of quiet luxury, cutting-edge corporate conference facilities, and majestic wedding venues.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal direction="left" delayMs={200}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E4DED2] shadow-xl bg-neutral-900 group">
                  <Image
                    src="/hotel-photos/portico.jpg"
                    alt="Hotel facade and welcoming entrance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Chapter 2: The Experience Pillars */}
      <section className="py-20 sm:py-28 bg-[#ffffff] text-[#000000] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C6A568]/5 blur-3xl pointer-events-none animate-subtle-glow" />
        <Container className="relative z-10">
          <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A568]">
              THE RADISSON ETHOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal">
              Every detail considered.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delayMs={100}>
              <div className="bg-[#0A0835] p-8 rounded-xl border border-[#C6A568]/20 space-y-4 hover:border-[#C6A568]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] group">
                <span className="text-2xl font-serif text-[#C6A568] group-hover:scale-110 inline-block transition-transform duration-300">01</span>
                <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#C6A568] transition-colors">
                  Restorative Spaces
                </h3>
                <p className="text-xs sm:text-sm text-[#E4DED2]/80 font-light leading-relaxed">
                  Acoustically engineered guest rooms, high-thread-count linens, and ergonomic workspaces that allow you to recharge in complete tranquility.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delayMs={200}>
              <div className="bg-[#0A0835] p-8 rounded-xl border border-[#C6A568]/20 space-y-4 hover:border-[#C6A568]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] group">
                <span className="text-2xl font-serif text-[#C6A568] group-hover:scale-110 inline-block transition-transform duration-300">02</span>
                <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#C6A568] transition-colors">
                  Gastronomic Craft
                </h3>
                <p className="text-xs sm:text-sm text-[#E4DED2]/80 font-light leading-relaxed">
                  From live open tandoors at NH 87 to bespoke banqueting menus, our chefs celebrate both authentic Kumaoni nuances and global culinary classics.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delayMs={300}>
              <div className="bg-[#0A0835] p-8 rounded-xl border border-[#C6A568]/20 space-y-4 hover:border-[#C6A568]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] group">
                <span className="text-2xl font-serif text-[#C6A568] group-hover:scale-110 inline-block transition-transform duration-300">03</span>
                <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#C6A568] transition-colors">
                  Seamless Events
                </h3>
                <p className="text-xs sm:text-sm text-[#E4DED2]/80 font-light leading-relaxed">
                  State-of-the-art audiovisual systems, high-bandwidth conference streaming, and majestic pillarless banquet halls managed with hospitality precision.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Chapter 3: Strategic Location & Surroundings */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal direction="right" delayMs={150}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E4DED2] shadow-xl bg-[#ffffff] group">
                  <Image
                    src="/hotel-photos/facade-pool.jpg"
                    alt="Scenic landscaping and pool grounds"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <Reveal direction="left" delayMs={100}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA8B54]">
                  CONNECTIVITY & LOCATION
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#080097] font-normal leading-tight mt-2">
                  Strategically positioned for business and exploration.
                </h2>
              </Reveal>
              <Reveal direction="up" delayMs={200}>
                <div className="space-y-3 text-sm text-[#77766D] font-light leading-relaxed">
                  <p>
                    Conveniently situated along the Nainital Road corridor, the hotel ensures effortless commutes to major automotive and manufacturing conglomerates in SIDCUL Industrial Area.
                  </p>
                  <p>
                    For leisure travelers, the property serves as a convenient gateway for onward scenic drives into Nainital, Bhimtal, Jim Corbett National Park, and the serene lakes of Kumaon.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delayMs={300}>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    variant="primary-gold"
                    size="md"
                    href="/rooms"
                    className="text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
                  >
                    Explore Accommodations
                  </Button>
                  <Button
                    variant="secondary-outline"
                    size="md"
                    href="/venues"
                    className="text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                  >
                    View Venues
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
