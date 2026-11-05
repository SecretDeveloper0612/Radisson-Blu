import React from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4EC] pt-32 pb-24">
      <Container size="narrow">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E4DED2] shadow-sm space-y-6 text-[#0E0D35]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA8B54]">
            LEGAL INFORMATION
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0E0D35] font-normal">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#77766D]">
            Last updated: October 2026
          </p>

          <div className="space-y-4 text-sm text-[#77766D] font-light leading-relaxed">
            <p>
              At {siteConfig.propertyName}, we value the trust you place in our hospitality and are committed to safeguarding your personal information.
            </p>

            <h2 className="font-serif text-xl text-[#0E0D35] font-medium pt-2">
              1. Information We Collect
            </h2>
            <p>
              When you submit a reservation enquiry, banquet query, or reach out to our concierge, we collect your contact information (such as name, email address, phone number) and details about your event or stay preferences.
            </p>

            <h2 className="font-serif text-xl text-[#0E0D35] font-medium pt-2">
              2. Use of Information
            </h2>
            <p>
              The collected information is used solely to respond to your queries, process your room or event bookings, improve our hotel services, and communicate important property notices.
            </p>

            <h2 className="font-serif text-xl text-[#0E0D35] font-medium pt-2">
              3. Data Security & Disclosures
            </h2>
            <p>
              We implement industry-standard security measures to protect your personal data against unauthorized access. We do not sell or rent guest information to third-party advertisers.
            </p>

            <h2 className="font-serif text-xl text-[#0E0D35] font-medium pt-2">
              4. Contact Us
            </h2>
            <p>
              If you have any questions regarding our privacy practices, please contact our administrative desk at {siteConfig.contact.email} or by post at {siteConfig.contact.address.full}.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
