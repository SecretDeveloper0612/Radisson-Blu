"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X, Phone, Mail, MessageSquare, ArrowRight, ChevronDown } from "lucide-react";
import { headerNavLinks } from "@/data/navigation";
import { venuesData, sapphireCeremonies, concordOccasions, executiveRoomEvents, nh87Events, k2barEvents } from "@/data/venues";
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
  const [sapphireExpanded, setSapphireExpanded] = useState(false);
  const [concordExpanded, setConcordExpanded] = useState(false);
  const [executiveExpanded, setExecutiveExpanded] = useState(false);
  const [nh87Expanded, setNh87Expanded] = useState(false);
  const [k2barExpanded, setK2barExpanded] = useState(false);

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
        <div className="flex flex-col items-center text-center">
          <span className="font-serif text-lg tracking-widest text-[#0E0D35] font-semibold pl-1">
            VYAH
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#AA8B54]">
            By Radisson Blu Rudrapur
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
                      {venuesData.map((venue) => {
                        if (venue.slug === "sapphire") {
                          return (
                            <div key={venue.id} className="space-y-1.5 py-1">
                              <div className="flex items-center justify-between">
                                <Link
                                  href={`/venues/${venue.slug}`}
                                  onClick={onClose}
                                  className="flex items-center gap-2 text-sm text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                >
                                  <span className="font-serif text-base text-[#0E0D35]">{venue.name}</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setSapphireExpanded(!sapphireExpanded);
                                  }}
                                  className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold"
                                >
                                  <span>9 Events</span>
                                  <ChevronDown
                                    className={`w-3 h-3 transition-transform duration-200 ${
                                      sapphireExpanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>

                              {sapphireExpanded && (
                                <div className="ml-3 pl-3 space-y-2 border-l-2 border-[#C6A568]/40 py-1.5 text-xs animate-in fade-in bg-[#FAF8F5]/60 rounded-r-lg">
                                  {sapphireCeremonies.map((ceremony) => (
                                    <Link
                                      key={ceremony.id}
                                      href={ceremony.href}
                                      onClick={onClose}
                                      className="flex items-center justify-between py-1 px-1.5 text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                    >
                                      <div>
                                        <span className="font-medium text-[#0E0D35] block leading-tight">
                                          {ceremony.name}
                                        </span>
                                        <span className="text-[9px] text-[#77766D] uppercase tracking-wider">
                                          {ceremony.category}
                                        </span>
                                      </div>
                                      <span className="text-xs text-[#AA8B54]">&rarr;</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        if (venue.slug === "nh-87") {
                          return (
                            <div key={venue.id} className="space-y-1.5 py-1">
                              <div className="flex items-center justify-between">
                                <Link
                                  href={`/venues/${venue.slug}`}
                                  onClick={onClose}
                                  className="flex items-center gap-2 text-sm text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                >
                                  <span className="font-serif text-base text-[#0E0D35]">{venue.name}</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setNh87Expanded(!nh87Expanded);
                                  }}
                                  className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold"
                                >
                                  <span>6 Events</span>
                                  <ChevronDown
                                    className={`w-3 h-3 transition-transform duration-200 ${
                                      nh87Expanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>

                              {nh87Expanded && (
                                <div className="ml-3 pl-3 space-y-2 border-l-2 border-[#C6A568]/40 py-1.5 text-xs animate-in fade-in bg-[#FAF8F5]/60 rounded-r-lg">
                                  {nh87Events.map((item) => (
                                    <Link
                                      key={item.id}
                                      href={item.href}
                                      onClick={onClose}
                                      className="flex items-center justify-between py-1 px-1.5 text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                    >
                                      <div>
                                        <span className="font-medium text-[#0E0D35] block leading-tight">
                                          {item.name}
                                        </span>
                                        <span className="text-[9px] text-[#77766D] uppercase tracking-wider">
                                          {item.category}
                                        </span>
                                      </div>
                                      <span className="text-xs text-[#AA8B54]">&rarr;</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        if (venue.slug === "concord") {
                          return (
                            <div key={venue.id} className="space-y-1.5 py-1">
                              <div className="flex items-center justify-between">
                                <Link
                                  href={`/venues/${venue.slug}`}
                                  onClick={onClose}
                                  className="flex items-center gap-2 text-sm text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                >
                                  <span className="font-serif text-base text-[#0E0D35]">{venue.name}</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setConcordExpanded(!concordExpanded);
                                  }}
                                  className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold"
                                >
                                  <span>3 Events</span>
                                  <ChevronDown
                                    className={`w-3 h-3 transition-transform duration-200 ${
                                      concordExpanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>

                              {concordExpanded && (
                                <div className="ml-3 pl-3 space-y-2 border-l-2 border-[#C6A568]/40 py-1.5 text-xs animate-in fade-in bg-[#FAF8F5]/60 rounded-r-lg">
                                  {concordOccasions.map((occasion) => (
                                    <Link
                                      key={occasion.id}
                                      href={occasion.href}
                                      onClick={onClose}
                                      className="flex items-center justify-between py-1 px-1.5 text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                    >
                                      <div>
                                        <span className="font-medium text-[#0E0D35] block leading-tight">
                                          {occasion.name}
                                        </span>
                                        <span className="text-[9px] text-[#77766D] uppercase tracking-wider">
                                          {occasion.category}
                                        </span>
                                      </div>
                                      <span className="text-xs text-[#AA8B54]">&rarr;</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        if (venue.slug === "executive-room") {
                          return (
                            <div key={venue.id} className="space-y-1.5 py-1">
                              <div className="flex items-center justify-between">
                                <Link
                                  href={`/venues/${venue.slug}`}
                                  onClick={onClose}
                                  className="flex items-center gap-2 text-sm text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                >
                                  <span className="font-serif text-base text-[#0E0D35]">{venue.name}</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setExecutiveExpanded(!executiveExpanded);
                                  }}
                                  className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold"
                                >
                                  <span>3 Events</span>
                                  <ChevronDown
                                    className={`w-3 h-3 transition-transform duration-200 ${
                                      executiveExpanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>

                              {executiveExpanded && (
                                <div className="ml-3 pl-3 space-y-2 border-l-2 border-[#C6A568]/40 py-1.5 text-xs animate-in fade-in bg-[#FAF8F5]/60 rounded-r-lg">
                                  {executiveRoomEvents.map((item) => (
                                    <Link
                                      key={item.id}
                                      href={item.href}
                                      onClick={onClose}
                                      className="flex items-center justify-between py-1 px-1.5 text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                    >
                                      <div>
                                        <span className="font-medium text-[#0E0D35] block leading-tight">
                                          {item.name}
                                        </span>
                                        <span className="text-[9px] text-[#77766D] uppercase tracking-wider">
                                          {item.category}
                                        </span>
                                      </div>
                                      <span className="text-xs text-[#AA8B54]">&rarr;</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        if (venue.slug === "k2-bar") {
                          return (
                            <div key={venue.id} className="space-y-1.5 py-1">
                              <div className="flex items-center justify-between">
                                <Link
                                  href={`/venues/${venue.slug}`}
                                  onClick={onClose}
                                  className="flex items-center gap-2 text-sm text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                >
                                  <span className="font-serif text-base text-[#0E0D35]">{venue.name}</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setK2barExpanded(!k2barExpanded);
                                  }}
                                  className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E8E8F0] text-[#AA8B54] flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold"
                                >
                                  <span>2 Events</span>
                                  <ChevronDown
                                    className={`w-3 h-3 transition-transform duration-200 ${
                                      k2barExpanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>

                              {k2barExpanded && (
                                <div className="ml-3 pl-3 space-y-2 border-l-2 border-[#C6A568]/40 py-1.5 text-xs animate-in fade-in bg-[#FAF8F5]/60 rounded-r-lg">
                                  {k2barEvents.map((item) => (
                                    <Link
                                      key={item.id}
                                      href={item.href}
                                      onClick={onClose}
                                      className="flex items-center justify-between py-1 px-1.5 text-[#5A5A68] hover:text-[#AA8B54] transition-colors"
                                    >
                                      <div>
                                        <span className="font-medium text-[#0E0D35] block leading-tight">
                                          {item.name}
                                        </span>
                                        <span className="text-[9px] text-[#77766D] uppercase tracking-wider">
                                          {item.category}
                                        </span>
                                      </div>
                                      <span className="text-xs text-[#AA8B54]">&rarr;</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        return (
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
                        );
                      })}
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
