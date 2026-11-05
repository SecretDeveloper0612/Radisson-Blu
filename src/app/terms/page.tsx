import React from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4EC] pt-32 pb-24">
      <Container size="narrow">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E4DED2] shadow-sm space-y-6 text-[#0E0D35]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA8B54]">
            TERMS OF SERVICE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0E0D35] font-normal">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#77766D]">
            Last updated: October 2026
          </p>

          <div className="space-y-4 text-sm text-[#77766D] font-light leading-relaxed">
            <p>
              Welcome to the website of {siteConfig.propertyName}. By accessing or using this site, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="font-serif text-xl text-[#0E0D35] font-medium pt-2">
              1. Enquiries and Reservations
            </h2>
            <p>
              Submission of an enquiry form does not constitute a confirmed room reservation or event booking. All reservations and banquet agreements require written confirmation and applicable deposit payments as communicated by the hotel desk.
            </p>

            <h2 className="font-serif text-xl text-[#0E0D35] font-medium pt-2">
              2. Check-In & Check-Out Policies
            </h2>
            <p>
              Standard hotel check-in time is {siteConfig.checkInTime} and check-out time is {siteConfig.checkOutTime}. Early arrivals and late departures remain subject to room availability and property tariffs.
            </p>

            <h2 className="font-serif text-xl text-[#0E0D35] font-medium pt-2">
              3. Intellectual Property
            </h2>
            <p>
              All trademarks, photography, logos, and editorial content on this website are the property of {siteConfig.propertyName} or their respective licensors and are protected under copyright and trademark laws.
            </p>

            <h2 className="font-serif text-xl text-[#0E0D35] font-medium pt-2">
              4. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Uttarakhand, India.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
