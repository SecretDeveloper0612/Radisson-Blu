import React, { Suspense } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageSquare,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import EnquiryForm from "@/components/contact/EnquiryForm";
import Reveal from "@/components/ui/Reveal";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0A0835]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel-photos/portico.jpg"
            alt="Radisson Hotel Rudrapur contact and arrival"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0835]/80 via-[#0A0835]/40 to-black/30" />
        </div>

        <Container className="relative z-10 pt-28 pb-16 text-center max-w-3xl">
          <Reveal direction="down" delayMs={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A568]/20 border border-[#C6A568]/40 text-[#C6A568] text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm mb-4">
              <span>RESERVATIONS & EVENT ENQUIRIES</span>
            </div>
          </Reveal>
          <Reveal direction="up" delayMs={200}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight drop-shadow-sm">
              Contact & Location
            </h1>
          </Reveal>
          <Reveal direction="up" delayMs={300}>
            <p className="mt-4 text-base sm:text-lg text-[#E4DED2]/90 font-light leading-relaxed">
              Connect with our reservations desk, event specialists, or concierge for customized accommodation, dining reservations, and venue bookings.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Main Split Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (5 Cols): Property Contact Info & Direct Map */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              {/* Direct Channels / Property Coordinates Card (Styled like Venue Details Sidebar) */}
              <Reveal direction="right" delayMs={100}>
                <div className="bg-white text-[#0A0835] rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xl space-y-6 relative overflow-hidden">
                  {/* Header */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] text-[10px] font-bold uppercase tracking-widest mb-2">
                      <span>DIRECT CHANNELS</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0835] font-normal">
                      Property Coordinates
                    </h3>
                    <p className="text-[11px] text-[#5A5A68] font-light mt-1">
                      Direct Reservations & Location Concierge
                    </p>
                  </div>

                  {/* Channel Rows */}
                  <div className="space-y-3.5 text-xs font-light divide-y divide-[#E8E8F0] relative z-10">
                    {/* Physical Address */}
                    <div className="pt-2 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#AA8B54] font-semibold block text-[10px] uppercase tracking-wider mb-0.5">
                          Physical Address
                        </span>
                        <span className="text-[#0A0835] leading-relaxed block text-xs sm:text-sm">
                          {siteConfig.contact.address.full}
                        </span>
                      </div>
                    </div>

                    {/* Telephone */}
                    <div className="pt-3.5 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#AA8B54] font-semibold block text-[10px] uppercase tracking-wider mb-0.5">
                          Telephone
                        </span>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          className="text-[#0A0835] hover:text-[#AA8B54] font-medium transition-colors text-xs sm:text-sm block"
                        >
                          {siteConfig.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    {/* Reservations & Enquiries */}
                    <div className="pt-3.5 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#AA8B54] font-semibold block text-[10px] uppercase tracking-wider mb-0.5">
                          Reservations & Enquiries
                        </span>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-[#0A0835] hover:text-[#AA8B54] font-medium transition-colors break-all text-xs sm:text-sm block"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="pt-3.5 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0 mt-0.5">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#AA8B54] font-semibold block text-[10px] uppercase tracking-wider mb-0.5">
                          Direct WhatsApp Desk
                        </span>
                        <a
                          href={siteConfig.contact.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#AA8B54] hover:underline inline-flex items-center gap-1 font-medium text-xs sm:text-sm"
                        >
                          <span>Start WhatsApp Conversation</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="pt-3.5 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E8F0] flex items-center justify-center text-[#AA8B54] shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#AA8B54] font-semibold block text-[10px] uppercase tracking-wider mb-0.5">
                          Timings
                        </span>
                        <span className="text-[#0A0835] text-xs sm:text-sm block">
                          Check-in: {siteConfig.checkInTime} &bull; Check-out: {siteConfig.checkOutTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Gold Action Button */}
                  <div className="pt-2 relative z-10">
                    <a
                      href={siteConfig.contact.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#C6A568] hover:bg-[#b59457] text-[#0A0835] py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.01] cursor-pointer"
                    >
                      <Compass className="w-4 h-4 text-[#0A0835]" />
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-4 h-4 text-[#0A0835]" />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Map Embed Panel */}
              <Reveal direction="up" delayMs={200}>
                <div className="rounded-2xl overflow-hidden border border-[#E8E8F0] shadow-md bg-white">
                  <div className="p-4 border-b border-[#E8E8F0] bg-[#FAF8F5] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#0A0835]">
                      Rudrapur Location Map
                    </span>
                    <a
                      href={siteConfig.contact.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#AA8B54] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="relative aspect-[16/10] w-full bg-[#FAF8F5]">
                    <iframe
                      src={siteConfig.contact.googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Radisson Hotel Rudrapur Map"
                      className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column (7 Cols): Enquiry Form wrapped in Suspense for static prerendering */}
            <div className="lg:col-span-7">
              <Reveal direction="left" delayMs={150}>
                <Suspense
                  fallback={
                    <div className="bg-white rounded-2xl p-8 border border-[#E8E8F0] animate-pulse h-96 flex items-center justify-center text-xs text-[#5A5A68]">
                      Loading Enquiry Desk...
                    </div>
                  }
                >
                  <EnquiryForm />
                </Suspense>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
