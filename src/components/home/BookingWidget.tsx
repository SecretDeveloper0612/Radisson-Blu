"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Users, Home, Search, AlertCircle, ArrowUpRight } from "lucide-react";
import { bookingFormSchema, BookingFormData } from "@/lib/validation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface BookingWidgetProps {
  className?: string;
  variant?: "hero-overlay" | "standalone" | "compact";
}

export function BookingWidget({
  className,
  variant = "hero-overlay",
}: BookingWidgetProps) {
  const router = useRouter();
  const [showIntegrateModal, setShowIntegrateModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      checkIn: "2026-10-24",
      checkOut: "2026-10-26",
      guests: 2,
      rooms: 1,
    },
  });

  const onSubmit = (data: BookingFormData) => {
    if (siteConfig.booking.isConfigured && siteConfig.booking.engineUrl) {
      const url = new URL(siteConfig.booking.engineUrl);
      url.searchParams.set("checkIn", data.checkIn);
      url.searchParams.set("checkOut", data.checkOut);
      url.searchParams.set("adults", data.guests.toString());
      url.searchParams.set("rooms", data.rooms.toString());
      window.open(url.toString(), "_blank", "noopener,noreferrer");
    } else {
      setShowIntegrateModal(true);
    }
  };

  return (
    <>
      <div
        className={cn(
          "w-full bg-[#080097]/95 backdrop-blur-md border border-[#C6A568]/30 shadow-2xl rounded-xl p-5 sm:p-6 lg:p-7 text-white transition-all duration-300",
          variant === "hero-overlay" && "lg:-mt-16 relative z-30 shadow-[0_20px_50px_rgba(10,33,31,0.5)]",
          variant === "standalone" && "bg-[#080097] border-[#C6A568]/20",
          className
        )}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-end">
            {/* Check-In Date */}
            <div className="space-y-1.5">
              <label
                htmlFor="checkIn"
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C6A568] font-medium"
              >
                <Calendar className="w-3.5 h-3.5" /> Check-in
              </label>
              <input
                type="date"
                id="checkIn"
                {...register("checkIn")}
                className="w-full bg-[#04005E] border border-[#E4DED2]/20 rounded-md px-3.5 py-2.5 text-sm text-[#F7F4EC] focus:border-[#C6A568] focus:outline-none focus:ring-1 focus:ring-[#C6A568] transition-colors"
              />
              {errors.checkIn && (
                <p className="text-xs text-rose-400 mt-1">{errors.checkIn.message}</p>
              )}
            </div>

            {/* Check-Out Date */}
            <div className="space-y-1.5">
              <label
                htmlFor="checkOut"
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C6A568] font-medium"
              >
                <Calendar className="w-3.5 h-3.5" /> Check-out
              </label>
              <input
                type="date"
                id="checkOut"
                {...register("checkOut")}
                className="w-full bg-[#04005E] border border-[#E4DED2]/20 rounded-md px-3.5 py-2.5 text-sm text-[#F7F4EC] focus:border-[#C6A568] focus:outline-none focus:ring-1 focus:ring-[#C6A568] transition-colors"
              />
              {errors.checkOut && (
                <p className="text-xs text-rose-400 mt-1">{errors.checkOut.message}</p>
              )}
            </div>

            {/* Guests */}
            <div className="space-y-1.5">
              <label
                htmlFor="guests"
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C6A568] font-medium"
              >
                <Users className="w-3.5 h-3.5" /> Guests
              </label>
              <select
                id="guests"
                {...register("guests", { valueAsNumber: true })}
                className="w-full bg-[#04005E] border border-[#E4DED2]/20 rounded-md px-3.5 py-2.5 text-sm text-[#F7F4EC] focus:border-[#C6A568] focus:outline-none focus:ring-1 focus:ring-[#C6A568] transition-colors"
              >
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
                <option value={3}>3 Adults</option>
                <option value={4}>4 Adults</option>
                <option value={5}>5+ Guests</option>
              </select>
              {errors.guests && (
                <p className="text-xs text-rose-400 mt-1">{errors.guests.message}</p>
              )}
            </div>

            {/* Rooms */}
            <div className="space-y-1.5">
              <label
                htmlFor="rooms"
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C6A568] font-medium"
              >
                <Home className="w-3.5 h-3.5" /> Rooms
              </label>
              <select
                id="rooms"
                {...register("rooms", { valueAsNumber: true })}
                className="w-full bg-[#04005E] border border-[#E4DED2]/20 rounded-md px-3.5 py-2.5 text-sm text-[#F7F4EC] focus:border-[#C6A568] focus:outline-none focus:ring-1 focus:ring-[#C6A568] transition-colors"
              >
                <option value={1}>1 Room</option>
                <option value={2}>2 Rooms</option>
                <option value={3}>3 Rooms</option>
                <option value={4}>4+ Rooms</option>
              </select>
              {errors.rooms && (
                <p className="text-xs text-rose-400 mt-1">{errors.rooms.message}</p>
              )}
            </div>

            {/* Action CTA */}
            <div>
              <button
                type="submit"
                id="booking-submit-button"
                className="w-full bg-[#C6A568] hover:bg-[#b59457] text-[#04005E] font-semibold py-2.5 px-4 rounded-md tracking-wider uppercase text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C6A568] focus:ring-offset-2 focus:ring-offset-[#080097] cursor-pointer"
              >
                <Search className="w-4 h-4" />
                Check Availability
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Honest Integration Fallback Modal */}
      {showIntegrateModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in"
        >
          <div className="bg-[#080097] border border-[#C6A568]/40 text-[#F7F4EC] rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="w-12 h-12 rounded-full bg-[#C6A568]/20 flex items-center justify-center text-[#C6A568] mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#F7F4EC] mb-2">
              Direct Reservation Desk
            </h3>
            <p className="text-[#E4DED2]/80 text-sm leading-relaxed mb-6 font-light">
              The real-time property management booking engine link is currently awaiting final verified URL integration. We strictly avoid presenting simulated rates or false booking confirmations.
              <br /><br />
              For guaranteed room reservations, group blocks, or current tariffs, please connect directly with our front desk team:
            </p>

            <div className="space-y-3 bg-[#04005E] p-4 rounded-lg border border-[#E4DED2]/10 mb-6 text-sm">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[#AA8B54]">Direct Reservations Desk:</span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-white hover:text-[#C6A568] font-medium"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[#AA8B54]">Reservations Email:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white hover:text-[#C6A568] font-medium truncate max-w-[200px]"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[#AA8B54]">Instant WhatsApp Concierge:</span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A568] hover:underline flex items-center gap-1 font-medium"
                >
                  Chat with Desk <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowIntegrateModal(false);
                  router.push("/contact");
                }}
                className="flex-1 bg-[#C6A568] hover:bg-[#b59457] text-[#04005E] font-semibold py-2.5 px-4 rounded-md text-xs uppercase tracking-wider transition-colors"
              >
                Submit Stay Enquiry
              </button>
              <button
                type="button"
                onClick={() => setShowIntegrateModal(false)}
                className="px-5 py-2.5 border border-[#E4DED2]/30 text-[#E4DED2] hover:bg-[#04005E] rounded-md text-xs uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingWidget;
