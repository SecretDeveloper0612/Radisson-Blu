"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X, Phone, Mail, MessageSquare, ArrowRight, ChevronDown } from "lucide-react";
import { headerNavLinks } from "@/data/navigation";
import { venuesData } from "@/data/venues";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNowClick: () => void;
}

export function MobileNavigation({
  isOpen,
  onClose,
  onBookNowClick,
}: MobileNavigationProps) {
  const [venuesExpanded, setVenuesExpanded] = useState(false);

  // Prevent background scroll and support Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-white text-[#0E0D35] animate-in fade-in duration-300"
    >
      {/* Top Bar with Branding and Close Button */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E8F0]">
        <div className="flex flex-col">
          <span className="font-serif text-lg tracking-widest text-[#0E0D35] font-semibold">
            VYAH
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#AA8B54]">
            By Radisson
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[#0E0D35] hover:text-[#AA8B54] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A568] rounded-md"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-3">
          {headerNavLinks.map((link) => {
            const isVenues = link.href === "/venues";

            if (isVenues) {
              return (
                <div key={link.href} className="border-b border-[#E8E8F0] py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="py-1 text-xl font-serif tracking-wide text-[#0E0D35] hover:text-[#AA8B54] transition-colors"
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setVenuesExpanded(!venuesExpanded)}
                      aria-label="Toggle venues submenu"
                      className="p-2 text-[#AA8B54] hover:text-[#0E0D35]"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          venuesExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable Venues Submenu */}
                  {venuesExpanded && (
                    <div className="mt-2 pl-4 space-y-2 border-l border-[#C6A568]/30 py-2 animate-in fade-in">
                      {venuesData.map((venue) => (
                        <Link
                          key={venue.id}
                          href={`/venues/${venue.slug}`}
                          onClick={onClose}
                          className="flex items-center justify-between py-1.5 text-sm text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                        >
                          <span className="font-serif text-base text-[#0E0D35]">{venue.name}</span>
                          {venue.isUpcoming && (
                            <span className="text-[9px] bg-[#C6A568]/20 text-[#AA8B54] px-1.5 py-0.5 rounded font-mono">
                              Soon
                            </span>
                          )}
                        </Link>
                      ))}
                      <Link
                        href="/venues"
                        onClick={onClose}
                        className="block text-xs uppercase tracking-widest text-[#AA8B54] pt-2 font-medium"
                      >
                        View All Venues Overview &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-3 border-b border-[#E8E8F0] text-xl font-serif tracking-wide text-[#0E0D35] hover:text-[#AA8B54] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#AA8B54]" />
              </Link>
            );
          })}
        </nav>

        {/* Quick Contact & Book Action */}
        <div className="mt-8 pt-6 border-t border-[#E8E8F0] space-y-5">
          <Button
            variant="primary-gold"
            size="lg"
            className="w-full text-center py-4 font-semibold text-sm shadow-sm"
            onClick={() => {
              onClose();
              onBookNowClick();
            }}
          >
            Book Now
          </Button>

          <div className="space-y-2.5 text-xs text-[#5A5A68]">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2.5 hover:text-[#AA8B54] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#AA8B54]" />
              <span className="text-[#0E0D35] font-medium">{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2.5 hover:text-[#AA8B54] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#AA8B54]" />
              <span className="truncate text-[#0E0D35]">{siteConfig.contact.email}</span>
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#AA8B54] hover:underline font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
