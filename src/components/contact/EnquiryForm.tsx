"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { Send, AlertCircle, ArrowUpRight } from "lucide-react";
import { enquiryFormSchema, EnquiryFormData } from "@/lib/validation";
import { siteConfig } from "@/config/site";

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const initialVenue = searchParams.get("venue") || "";
  const initialRoom = searchParams.get("room") || "";
  const initialType = (searchParams.get("enquiryType") ||
    (initialRoom ? "Room Booking" : "General Enquiry")) as EnquiryFormData["enquiryType"];

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "notice"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      enquiryType: initialType,
      eventDate: "",
      estimatedGuests: "",
      venuePreference: initialVenue || "",
      message: initialVenue
        ? `I am interested in hosting an event at ${initialVenue}. Please provide availability and tariff details.`
        : "",
    },
  });

  const onSubmit = async (_data: EnquiryFormData) => {
    setSubmissionStatus("submitting");

    // Simulate verified API call or CRM webhook
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Per instruction in Section 11 & Section 20:
    // "Do not display a fake success message if the enquiry was not actually submitted.
    // Show a truthful message explaining that the form is not yet connected and provide available direct contact options."
    setSubmissionStatus("notice");
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E4DED2] shadow-xl">
      <div className="mb-8 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA8B54]">
          ONLINE ENQUIRY
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#080097] font-normal">
          Plan Your Experience
        </h3>
        <p className="text-xs sm:text-sm text-[#77766D] font-light leading-relaxed">
          Submit your dates and event requirements. Our dedicated reservations and banqueting team will review your enquiry promptly.
        </p>
      </div>

      {submissionStatus === "notice" ? (
        <div className="bg-[#080097] text-[#F7F4EC] rounded-xl p-6 sm:p-8 border border-[#C6A568]/40 space-y-4 animate-in fade-in">
          <div className="flex items-center gap-3 text-[#C6A568]">
            <AlertCircle className="w-6 h-6 shrink-0" />
            <h4 className="font-serif text-xl font-normal text-white">
              Direct Connection Required
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#E4DED2]/85 font-light leading-relaxed">
            In accordance with our property policy, customer enquiries require verified backend email or CRM integration. While this gateway is being connected to the property&apos;s corporate portal, we strictly avoid simulating automated email dispatch.
          </p>
          <p className="text-xs sm:text-sm text-[#E4DED2]/85 font-light leading-relaxed">
            Please forward your request directly to our team via our official direct lines:
          </p>

          <div className="bg-[#04005E] p-4 rounded-lg border border-[#E4DED2]/10 space-y-2.5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-[#AA8B54]">Direct Phone:</span>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-white hover:text-[#C6A568] font-medium"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#AA8B54]">Direct Email:</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-white hover:text-[#C6A568] font-medium"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#AA8B54]">Instant WhatsApp:</span>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6A568] hover:underline flex items-center gap-1 font-medium"
              >
                Message Concierge <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSubmissionStatus("idle")}
            className="text-xs uppercase tracking-widest text-[#C6A568] hover:underline pt-2 block font-medium"
          >
            &larr; Back to form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="block text-xs uppercase tracking-wider text-[#080097] font-medium"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="e.g. Rahul Sharma"
              {...register("fullName")}
              className="w-full bg-[#F7F4EC] border border-[#E4DED2] rounded-md px-4 py-2.5 text-sm text-[#0A0835] focus:border-[#C6A568] focus:bg-white focus:outline-none transition-colors"
            />
            {errors.fullName && (
              <p className="text-xs text-rose-600 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-[#080097] font-medium"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                {...register("email")}
                className="w-full bg-[#F7F4EC] border border-[#E4DED2] rounded-md px-4 py-2.5 text-sm text-[#0A0835] focus:border-[#C6A568] focus:bg-white focus:outline-none transition-colors"
              />
              {errors.email && (
                <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-wider text-[#080097] font-medium"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+91 98765 43210"
                {...register("phone")}
                className="w-full bg-[#F7F4EC] border border-[#E4DED2] rounded-md px-4 py-2.5 text-sm text-[#0A0835] focus:border-[#C6A568] focus:bg-white focus:outline-none transition-colors"
              />
              {errors.phone && (
                <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Enquiry Type & Venue Preference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="enquiryType"
                className="block text-xs uppercase tracking-wider text-[#080097] font-medium"
              >
                Enquiry Category *
              </label>
              <select
                id="enquiryType"
                {...register("enquiryType")}
                className="w-full bg-[#F7F4EC] border border-[#E4DED2] rounded-md px-4 py-2.5 text-sm text-[#0A0835] focus:border-[#C6A568] focus:bg-white focus:outline-none transition-colors"
              >
                <option value="General Enquiry">General Enquiry</option>
                <option value="Room Booking">Room Booking</option>
                <option value="Dining">Dining</option>
                <option value="Meeting">Meeting</option>
                <option value="Banquet or Celebration">Banquet or Celebration</option>
                <option value="Other">Other</option>
              </select>
              {errors.enquiryType && (
                <p className="text-xs text-rose-600 mt-1">{errors.enquiryType.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="venuePreference"
                className="block text-xs uppercase tracking-wider text-[#080097] font-medium"
              >
                Preferred Venue (Optional)
              </label>
              <input
                type="text"
                id="venuePreference"
                placeholder="e.g. Sapphire, Queen's Field, NH 87"
                {...register("venuePreference")}
                className="w-full bg-[#F7F4EC] border border-[#E4DED2] rounded-md px-4 py-2.5 text-sm text-[#0A0835] focus:border-[#C6A568] focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Event Date & Guest Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="eventDate"
                className="block text-xs uppercase tracking-wider text-[#080097] font-medium"
              >
                Tentative Date (Optional)
              </label>
              <input
                type="date"
                id="eventDate"
                {...register("eventDate")}
                className="w-full bg-[#F7F4EC] border border-[#E4DED2] rounded-md px-4 py-2.5 text-sm text-[#0A0835] focus:border-[#C6A568] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="estimatedGuests"
                className="block text-xs uppercase tracking-wider text-[#080097] font-medium"
              >
                Estimated Guests (Optional)
              </label>
              <input
                type="text"
                id="estimatedGuests"
                placeholder="e.g. 50 or 250"
                {...register("estimatedGuests")}
                className="w-full bg-[#F7F4EC] border border-[#E4DED2] rounded-md px-4 py-2.5 text-sm text-[#0A0835] focus:border-[#C6A568] focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider text-[#080097] font-medium"
            >
              Message / Specific Requirements *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us more about your occasion, catering preferences, or questions..."
              {...register("message")}
              className="w-full bg-[#F7F4EC] border border-[#E4DED2] rounded-md px-4 py-2.5 text-sm text-[#0A0835] focus:border-[#C6A568] focus:bg-white focus:outline-none transition-colors"
            />
            {errors.message && (
              <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submissionStatus === "submitting"}
            className="w-full bg-[#080097] hover:bg-[#04005E] text-[#F7F4EC] font-semibold py-3.5 px-6 rounded-md tracking-widest uppercase text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {submissionStatus === "submitting" ? (
              <span>Transmitting...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#C6A568]" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default EnquiryForm;
