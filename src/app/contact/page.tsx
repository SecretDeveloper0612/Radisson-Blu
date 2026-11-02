import React, { Suspense } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import EnquiryForm from "@/components/contact/EnquiryForm";
import Reveal from "@/components/ui/Reveal";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4EC]">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#04005E]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel-photos/portico.jpg"
            alt="Radisson Hotel Rudrapur contact and arrival"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04005E]/60 via-[#04005E]/30 to-black/30" />
        </div>

        <Container className="relative z-10 pt-28 pb-16 text-center max-w-3xl">
          <Reveal direction="down" delayMs={100}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A568] block mb-3">
              RESERVATIONS & EVENT ENQUIRIES
            </span>
          </Reveal>
          <Reveal direction="up" delayMs={200}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F7F4EC] font-normal leading-tight">
              Contact & Location
            </h1>
          </Reveal>
          <Reveal direction="up" delayMs={300}>
            <p className="mt-4 text-base sm:text-lg text-[#E4DED2]/85 font-light leading-relaxed">
              Connect with our reservations desk, event specialists, or concierge for customized accommodation, dining reservations, and venue bookings.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Main Split Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (5 Cols): Property Contact Info & Direct Map */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal direction="right" delayMs={100}>
                <div className="bg-[#080097] text-[#F7F4EC] rounded-2xl p-6 sm:p-8 border border-[#C6A568]/30 shadow-xl space-y-6 hover:border-[#C6A568]/60 transition-colors">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A568]">
                      DIRECT CHANNELS
                    </span>
                    <h3 className="font-serif text-2xl text-white mt-1">
                      Property Coordinates
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm font-light text-[#E4DED2]/85 divide-y divide-[#E4DED2]/10">
                    {/* Address */}
                    <div className="pt-2 flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#C6A568] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#C6A568] font-medium block text-xs uppercase tracking-wider mb-0.5">
                          Physical Address
                        </span>
                        <span>{siteConfig.contact.address.full}</span>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="pt-4 flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#C6A568] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#C6A568] font-medium block text-xs uppercase tracking-wider mb-0.5">
                          Telephone
                        </span>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          className="hover:text-[#C6A568] transition-colors"
                        >
                          {siteConfig.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="pt-4 flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#C6A568] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#C6A568] font-medium block text-xs uppercase tracking-wider mb-0.5">
                          Reservations & Enquiries
                        </span>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="hover:text-[#C6A568] transition-colors break-all"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="pt-4 flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-[#C6A568] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#C6A568] font-medium block text-xs uppercase tracking-wider mb-0.5">
                          Direct WhatsApp Desk
                        </span>
                        <a
                          href={siteConfig.contact.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#C6A568] hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          Start WhatsApp Conversation <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Checkin / Checkout */}
                    <div className="pt-4 flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#C6A568] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#C6A568] font-medium block text-xs uppercase tracking-wider mb-0.5">
                          Timings
                        </span>
                        <span>Check-in: {siteConfig.checkInTime} &bull; Check-out: {siteConfig.checkOutTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={siteConfig.contact.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#04005E] hover:bg-[#04005E]/80 text-[#C6A568] border border-[#C6A568]/40 py-3 px-4 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors hover:border-[#C6A568]"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Map Embed Panel */}
              <Reveal direction="up" delayMs={200}>
                <div className="rounded-2xl overflow-hidden border border-[#E4DED2] shadow-md bg-white">
                  <div className="p-4 border-b border-[#E4DED2] bg-[#F7F4EC] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#080097]">
                      Rudrapur Location Map
                    </span>
                    <a
                      href={siteConfig.contact.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#AA8B54] hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                  <div className="relative aspect-[16/10] w-full bg-[#E4DED2]/30">
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
                    <div className="bg-white rounded-2xl p-8 border border-[#E4DED2] animate-pulse h-96 flex items-center justify-center text-xs text-[#77766D]">
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
