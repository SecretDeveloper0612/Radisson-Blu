"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function FinalCTA() {
  const [showBookingNotice, setShowBookingNotice] = useState(false);

  return (
    <section className="relative py-24 sm:py-32 bg-white text-[#0A0835] overflow-hidden border-t border-[#E8E8F0]">
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AA8B54]">
            RESERVATIONS & CELEBRATIONS
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.14] text-[#080097]">
            Make your next stay memorable.
          </h2>

          <p className="text-base sm:text-lg text-[#5A5A68] font-light leading-relaxed max-w-2xl mx-auto">
            Plan a relaxing stay, discover our dining experiences, or find a space for your next gathering in Rudrapur.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary-gold"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-semibold"
              onClick={() => {
                if (siteConfig.booking.isConfigured && siteConfig.booking.engineUrl) {
                  window.open(siteConfig.booking.engineUrl, "_blank", "noopener,noreferrer");
                } else {
                  setShowBookingNotice(true);
                }
              }}
            >
              Book Your Stay
            </Button>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-semibold rounded border-2 border-[#C6A568] text-[#0A0835] hover:bg-[#C6A568] hover:text-[#0A0835] transition-all shadow-xs"
            >
              Enquire About an Event
            </Link>
          </div>

          <div className="pt-6 flex items-center justify-center gap-6 text-xs text-[#5A5A68]">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-[#080097] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#080097]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <span className="text-[#080097]/30">&bull;</span>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#080097] transition-colors text-[#080097] font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Booking Notice Fallback Dialog */}
      {showBookingNotice && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in"
        >
          <div className="bg-[#0A0835] border border-[#C6A568]/40 text-[#F7F4EC] rounded-xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative">
            <h3 className="font-serif text-2xl text-[#F7F4EC] mb-2">
              Book Your Stay
            </h3>
            <p className="text-[#E4DED2]/80 text-xs sm:text-sm leading-relaxed mb-5 font-light">
              Online reservations for Radisson Hotel Rudrapur are being finalized with central reservation systems.
              <br /><br />
              Please contact the front desk team for immediate reservation confirmations:
            </p>
            <div className="space-y-2.5 bg-black/40 p-4 rounded-lg border border-white/10 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#AA8B54]">Telephone:</span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-white hover:text-[#C6A568] font-medium"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#AA8B54]">WhatsApp:</span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A568] hover:underline flex items-center gap-1"
                >
                  Message Directly &rarr;
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                onClick={() => setShowBookingNotice(false)}
                className="flex-1 bg-[#C6A568] hover:bg-[#b59457] text-[#0A0835] font-semibold py-2.5 px-4 rounded text-xs uppercase tracking-wider text-center"
              >
                Go to Enquiry
              </Link>
              <button
                type="button"
                onClick={() => setShowBookingNotice(false)}
                className="px-4 py-2.5 border border-[#E4DED2]/30 text-[#E4DED2] rounded text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FinalCTA;
