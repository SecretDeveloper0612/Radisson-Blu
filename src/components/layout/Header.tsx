"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ArrowUpRight, ArrowRight, ChevronRight, Gem, Crown, Sun, Briefcase, Cake, Users, Presentation, GlassWater } from "lucide-react";
import { headerNavLinks } from "@/data/navigation";
import { venuesData, sapphireCeremonies, concordOccasions, executiveRoomEvents } from "@/data/venues";
import { siteConfig } from "@/config/site";
import MobileNavigation from "./MobileNavigation";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBookingNotice, setShowBookingNotice] = useState(false);
  const [venuesDropdownOpen, setVenuesDropdownOpen] = useState(false);
  const [sapphireSubmenuOpen, setSapphireSubmenuOpen] = useState(false);
  const [concordSubmenuOpen, setConcordSubmenuOpen] = useState(false);
  const [executiveSubmenuOpen, setExecutiveSubmenuOpen] = useState(false);
  const sapphireTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const concordTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const executiveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSapphireMouseEnter = () => {
    if (sapphireTimeoutRef.current) {
      clearTimeout(sapphireTimeoutRef.current);
      sapphireTimeoutRef.current = null;
    }
    if (concordTimeoutRef.current) {
      clearTimeout(concordTimeoutRef.current);
      concordTimeoutRef.current = null;
    }
    if (executiveTimeoutRef.current) {
      clearTimeout(executiveTimeoutRef.current);
      executiveTimeoutRef.current = null;
    }
    setConcordSubmenuOpen(false);
    setExecutiveSubmenuOpen(false);
    setSapphireSubmenuOpen(true);
  };

  const handleSapphireMouseLeave = () => {
    sapphireTimeoutRef.current = setTimeout(() => {
      setSapphireSubmenuOpen(false);
    }, 140);
  };

  const handleConcordMouseEnter = () => {
    if (concordTimeoutRef.current) {
      clearTimeout(concordTimeoutRef.current);
      concordTimeoutRef.current = null;
    }
    if (sapphireTimeoutRef.current) {
      clearTimeout(sapphireTimeoutRef.current);
      sapphireTimeoutRef.current = null;
    }
    if (executiveTimeoutRef.current) {
      clearTimeout(executiveTimeoutRef.current);
      executiveTimeoutRef.current = null;
    }
    setSapphireSubmenuOpen(false);
    setExecutiveSubmenuOpen(false);
    setConcordSubmenuOpen(true);
  };

  const handleConcordMouseLeave = () => {
    concordTimeoutRef.current = setTimeout(() => {
      setConcordSubmenuOpen(false);
    }, 140);
  };

  const handleExecutiveMouseEnter = () => {
    if (executiveTimeoutRef.current) {
      clearTimeout(executiveTimeoutRef.current);
      executiveTimeoutRef.current = null;
    }
    if (sapphireTimeoutRef.current) {
      clearTimeout(sapphireTimeoutRef.current);
      sapphireTimeoutRef.current = null;
    }
    if (concordTimeoutRef.current) {
      clearTimeout(concordTimeoutRef.current);
      concordTimeoutRef.current = null;
    }
    setSapphireSubmenuOpen(false);
    setConcordSubmenuOpen(false);
    setExecutiveSubmenuOpen(true);
  };

  const handleExecutiveMouseLeave = () => {
    executiveTimeoutRef.current = setTimeout(() => {
      setExecutiveSubmenuOpen(false);
    }, 140);
  };

  const handleOtherVenueMouseEnter = () => {
    if (sapphireTimeoutRef.current) {
      clearTimeout(sapphireTimeoutRef.current);
      sapphireTimeoutRef.current = null;
    }
    if (concordTimeoutRef.current) {
      clearTimeout(concordTimeoutRef.current);
      concordTimeoutRef.current = null;
    }
    if (executiveTimeoutRef.current) {
      clearTimeout(executiveTimeoutRef.current);
      executiveTimeoutRef.current = null;
    }
    setSapphireSubmenuOpen(false);
    setConcordSubmenuOpen(false);
    setExecutiveSubmenuOpen(false);
  };

  useEffect(() => {
    return () => {
      if (sapphireTimeoutRef.current) {
        clearTimeout(sapphireTimeoutRef.current);
      }
      if (concordTimeoutRef.current) {
        clearTimeout(concordTimeoutRef.current);
      }
      if (executiveTimeoutRef.current) {
        clearTimeout(executiveTimeoutRef.current);
      }
    };
  }, []);

  // Scroll detection for header background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = () => {
    if (siteConfig.booking.isConfigured && siteConfig.booking.engineUrl) {
      window.open(siteConfig.booking.engineUrl, "_blank", "noopener,noreferrer");
    } else {
      setShowBookingNotice(true);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E8E8F0] shadow-sm py-3.5"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Hotel Branding */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A568] rounded"
          >
            <span
              className={cn(
                "font-serif text-lg sm:text-xl lg:text-2xl tracking-[0.18em] font-medium transition-colors leading-none",
                isScrolled ? "text-[#0E0D35] group-hover:text-[#AA8B54]" : "text-[#F7F4EC] group-hover:text-[#C6A568]"
              )}
            >
              VYAH
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#C6A568] mt-1 font-sans font-light">
              By Radisson BLU Rudrapur
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {headerNavLinks.map((link) => {
              const isVenues = link.href === "/venues";
              const isActive =
                pathname === link.href || (isVenues && pathname.startsWith("/venues"));

              if (isVenues) {
                return (
                  <div
                    key={link.href}
                    className="relative group py-2"
                    onMouseEnter={() => setVenuesDropdownOpen(true)}
                    onMouseLeave={() => {
                      setVenuesDropdownOpen(false);
                      setSapphireSubmenuOpen(false);
                      setConcordSubmenuOpen(false);
                    }}
                  >
                    <Link
                      href="/venues"
                      className={cn(
                        "text-xs xl:text-[13px] uppercase tracking-[0.16em] font-medium transition-colors relative py-1 hover:text-[#C6A568] inline-flex items-center gap-1",
                        isActive
                          ? "text-[#C6A568] font-semibold"
                          : isScrolled
                          ? "text-[#2B2B38]"
                          : "text-[#F7F4EC]/90"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 text-[#C6A568]/80 group-hover:rotate-180",
                          venuesDropdownOpen && "rotate-180 text-[#C6A568]"
                        )}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A568] rounded-full" />
                      )}
                    </Link>

                    {/* Venues Mega Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 z-50",
                        venuesDropdownOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="w-[420px] bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 text-[#0E0D35]">
                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8E8F0]">
                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold">
                            All Venues & Spaces (7)
                          </span>
                          <Link
                            href="/venues"
                            onClick={() => {
                              setVenuesDropdownOpen(false);
                              setSapphireSubmenuOpen(false);
                              setConcordSubmenuOpen(false);
                            }}
                            className="text-[11px] text-[#5A5A68] hover:text-[#C6A568] uppercase tracking-wider flex items-center gap-1 transition-colors font-medium"
                          >
                            <span>Overview</span>
                            <ArrowRight className="w-3 h-3 text-[#C6A568]" />
                          </Link>
                        </div>

                        {/* List of all venues */}
                        <div className="space-y-1">
                          {venuesData.map((venue) => {
                            const isSapphire = venue.slug === "sapphire";

                            if (isSapphire) {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative"
                                  onMouseEnter={handleSapphireMouseEnter}
                                  onMouseLeave={handleSapphireMouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      setSapphireSubmenuOpen(false);
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      sapphireSubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            sapphireSubmenuOpen
                                              ? "text-[#AA8B54] font-medium"
                                              : "text-[#0E0D35] group-hover/item:text-[#AA8B54]"
                                          )}
                                        >
                                          {venue.name}
                                        </span>
                                      </div>
                                      <span className="text-[10px] text-[#77766D] uppercase tracking-wider block">
                                        {venue.category}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <span
                                        className={cn(
                                          "text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded transition-all",
                                          sapphireSubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        3 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          sapphireSubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full top-0 pl-3.5 transition-all duration-200 z-50",
                                      sapphireSubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0]">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            Sapphire Celebrations (3)
                                          </span>
                                          <span className="text-[10px] text-[#77766D] font-light">
                                            Pillarless ballroom & pre-function lawn
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/sapphire"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            setSapphireSubmenuOpen(false);
                                          }}
                                          className="text-[10px] text-[#5A5A68] hover:text-[#C6A568] uppercase tracking-wider flex items-center gap-1 transition-colors font-medium"
                                        >
                                          <span>Details</span>
                                          <ArrowRight className="w-3 h-3 text-[#C6A568]" />
                                        </Link>
                                      </div>

                                      {/* 3 Ceremonies list */}
                                      <div className="space-y-1.5">
                                        {sapphireCeremonies.map((ceremony) => {
                                          const Icon =
                                            ceremony.slug === "haldi-ceremony"
                                              ? Sun
                                              : ceremony.slug === "ring-ceremony"
                                              ? Gem
                                              : Crown;

                                          const iconStyles =
                                            ceremony.slug === "haldi-ceremony"
                                              ? "bg-[#FEF9E7] text-[#D97706] border-[#FDE68A]"
                                              : ceremony.slug === "ring-ceremony"
                                              ? "bg-[#FDF4F5] text-[#AA8B54] border-[#F8D7DA]"
                                              : "bg-[#FAF5EB] text-[#AA8B54] border-[#E8D7B8]";

                                          return (
                                            <Link
                                              key={ceremony.id}
                                              href={ceremony.href}
                                              onClick={() => {
                                                setVenuesDropdownOpen(false);
                                                setSapphireSubmenuOpen(false);
                                              }}
                                              className="group/ceremony flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                            >
                                              <div className="flex items-center gap-3">
                                                <div
                                                  className={cn(
                                                    "w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-transform group-hover/ceremony:scale-105 shadow-xs",
                                                    iconStyles
                                                  )}
                                                >
                                                  <Icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                  <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/ceremony:text-[#AA8B54] transition-colors block leading-tight">
                                                    {ceremony.name}
                                                  </span>
                                                  <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                    {ceremony.category}
                                                  </span>
                                                </div>
                                              </div>
                                              <span className="text-xs text-[#77766D] group-hover/ceremony:text-[#AA8B54] group-hover/ceremony:translate-x-1 transition-all">
                                                &rarr;
                                              </span>
                                            </Link>
                                          );
                                        })}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 500 guests
                                        </span>
                                        <Link
                                          href="/contact?venue=sapphire"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            setSapphireSubmenuOpen(false);
                                          }}
                                          className="text-[#AA8B54] hover:underline font-medium text-[10px] uppercase tracking-wider"
                                        >
                                          Enquire Now &rarr;
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }

                            if (venue.slug === "concord") {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative"
                                  onMouseEnter={handleConcordMouseEnter}
                                  onMouseLeave={handleConcordMouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      setSapphireSubmenuOpen(false);
                                      setConcordSubmenuOpen(false);
                                      setExecutiveSubmenuOpen(false);
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      concordSubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            concordSubmenuOpen
                                              ? "text-[#AA8B54] font-medium"
                                              : "text-[#0E0D35] group-hover/item:text-[#AA8B54]"
                                          )}
                                        >
                                          {venue.name}
                                        </span>
                                      </div>
                                      <span className="text-[10px] text-[#77766D] uppercase tracking-wider block">
                                        {venue.category}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <span
                                        className={cn(
                                          "text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded transition-all",
                                          concordSubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        3 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          concordSubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* Concord Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full bottom-0 pl-3.5 transition-all duration-200 z-50",
                                      concordSubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0]">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            Concord Occasions (3)
                                          </span>
                                          <span className="text-[10px] text-[#77766D] font-light">
                                            Versatile hall & entertainment space
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/concord"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            setSapphireSubmenuOpen(false);
                                            setConcordSubmenuOpen(false);
                                            setExecutiveSubmenuOpen(false);
                                          }}
                                          className="text-[10px] text-[#5A5A68] hover:text-[#C6A568] uppercase tracking-wider flex items-center gap-1 transition-colors font-medium"
                                        >
                                          <span>Details</span>
                                          <ArrowRight className="w-3 h-3 text-[#C6A568]" />
                                        </Link>
                                      </div>

                                      {/* 3 Concord items */}
                                      <div className="space-y-1.5">
                                        {concordOccasions.map((occasion) => {
                                          const Icon =
                                            occasion.slug === "business-meetings"
                                              ? Briefcase
                                              : occasion.slug === "wedding"
                                              ? Crown
                                              : Cake;

                                          const iconStyles =
                                            occasion.slug === "business-meetings"
                                              ? "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]"
                                              : occasion.slug === "wedding"
                                              ? "bg-[#FAF5EB] text-[#AA8B54] border-[#E8D7B8]"
                                              : "bg-[#FDF2F8] text-[#DB2777] border-[#FBCFE8]";

                                          return (
                                            <Link
                                              key={occasion.id}
                                              href={occasion.href}
                                              onClick={() => {
                                                setVenuesDropdownOpen(false);
                                                setSapphireSubmenuOpen(false);
                                                setConcordSubmenuOpen(false);
                                                setExecutiveSubmenuOpen(false);
                                              }}
                                              className="group/occasion flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                            >
                                              <div className="flex items-center gap-3">
                                                <div
                                                  className={cn(
                                                    "w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-transform group-hover/occasion:scale-105 shadow-xs",
                                                    iconStyles
                                                  )}
                                                >
                                                  <Icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                  <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/occasion:text-[#AA8B54] transition-colors block leading-tight">
                                                    {occasion.name}
                                                  </span>
                                                  <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                    {occasion.category}
                                                  </span>
                                                </div>
                                              </div>
                                              <span className="text-xs text-[#77766D] group-hover/occasion:text-[#AA8B54] group-hover/occasion:translate-x-1 transition-all">
                                                &rarr;
                                              </span>
                                            </Link>
                                          );
                                        })}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 300 guests
                                        </span>
                                        <Link
                                          href="/contact?venue=concord"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            setSapphireSubmenuOpen(false);
                                            setConcordSubmenuOpen(false);
                                            setExecutiveSubmenuOpen(false);
                                          }}
                                          className="text-[#AA8B54] hover:underline font-medium text-[10px] uppercase tracking-wider"
                                        >
                                          Enquire Now &rarr;
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }

                            if (venue.slug === "executive-room") {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative"
                                  onMouseEnter={handleExecutiveMouseEnter}
                                  onMouseLeave={handleExecutiveMouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      setSapphireSubmenuOpen(false);
                                      setConcordSubmenuOpen(false);
                                      setExecutiveSubmenuOpen(false);
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      executiveSubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            executiveSubmenuOpen
                                              ? "text-[#AA8B54] font-medium"
                                              : "text-[#0E0D35] group-hover/item:text-[#AA8B54]"
                                          )}
                                        >
                                          {venue.name}
                                        </span>
                                      </div>
                                      <span className="text-[10px] text-[#77766D] uppercase tracking-wider block">
                                        {venue.category}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <span
                                        className={cn(
                                          "text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded transition-all",
                                          executiveSubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        3 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          executiveSubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* Executive Room Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full bottom-0 pl-3.5 transition-all duration-200 z-50",
                                      executiveSubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0]">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            Executive Occasions (3)
                                          </span>
                                          <span className="text-[10px] text-[#77766D] font-light">
                                            Meeting, Conference & Small Functions
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/executive-room"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            setSapphireSubmenuOpen(false);
                                            setConcordSubmenuOpen(false);
                                            setExecutiveSubmenuOpen(false);
                                          }}
                                          className="text-[10px] text-[#5A5A68] hover:text-[#C6A568] uppercase tracking-wider flex items-center gap-1 transition-colors font-medium"
                                        >
                                          <span>Details</span>
                                          <ArrowRight className="w-3 h-3 text-[#C6A568]" />
                                        </Link>
                                      </div>

                                      {/* 3 Executive Room items */}
                                      <div className="space-y-1.5">
                                        {executiveRoomEvents.map((item) => {
                                          const Icon =
                                            item.slug === "meeting"
                                              ? Users
                                              : item.slug === "conference"
                                              ? Presentation
                                              : GlassWater;

                                          const iconStyles =
                                            item.slug === "meeting"
                                              ? "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]"
                                              : item.slug === "conference"
                                              ? "bg-[#FAF5EB] text-[#AA8B54] border-[#E8D7B8]"
                                              : "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]";

                                          return (
                                            <Link
                                              key={item.id}
                                              href={item.href}
                                              onClick={() => {
                                                setVenuesDropdownOpen(false);
                                                setSapphireSubmenuOpen(false);
                                                setConcordSubmenuOpen(false);
                                                setExecutiveSubmenuOpen(false);
                                              }}
                                              className="group/exec flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                            >
                                              <div className="flex items-center gap-3">
                                                <div
                                                  className={cn(
                                                    "w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-transform group-hover/exec:scale-105 shadow-xs",
                                                    iconStyles
                                                  )}
                                                >
                                                  <Icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                  <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/exec:text-[#AA8B54] transition-colors block leading-tight">
                                                    {item.name}
                                                  </span>
                                                  <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                    {item.category}
                                                  </span>
                                                </div>
                                              </div>
                                              <span className="text-xs text-[#77766D] group-hover/exec:text-[#AA8B54] group-hover/exec:translate-x-1 transition-all">
                                                &rarr;
                                              </span>
                                            </Link>
                                          );
                                        })}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 60 guests
                                        </span>
                                        <Link
                                          href="/contact?venue=executive-room"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            setSapphireSubmenuOpen(false);
                                            setConcordSubmenuOpen(false);
                                            setExecutiveSubmenuOpen(false);
                                          }}
                                          className="text-[#AA8B54] hover:underline font-medium text-[10px] uppercase tracking-wider"
                                        >
                                          Enquire Now &rarr;
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }

                            return (
                              <Link
                                key={venue.id}
                                href={`/venues/${venue.slug}`}
                                onMouseEnter={handleOtherVenueMouseEnter}
                                onClick={() => {
                                  setVenuesDropdownOpen(false);
                                  setSapphireSubmenuOpen(false);
                                  setConcordSubmenuOpen(false);
                                  setExecutiveSubmenuOpen(false);
                                }}
                                className="group/item flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FAF8F5] transition-colors"
                              >
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-serif text-base text-[#0E0D35] group-hover/item:text-[#AA8B54] transition-colors">
                                      {venue.name}
                                    </span>
                                    {venue.isUpcoming && (
                                      <span className="text-[9px] bg-[#C6A568]/20 text-[#AA8B54] px-1.5 py-0.5 rounded font-mono font-medium">
                                        Upcoming
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-[10px] text-[#77766D] uppercase tracking-wider block">
                                    {venue.category}
                                  </span>
                                </div>
                                <span className="text-xs text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-1 transition-all">
                                  &rarr;
                                </span>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Bottom Quick Action */}
                        <div className="mt-4 pt-3 border-t border-[#E8E8F0] flex items-center justify-between text-xs">
                          <span className="text-[#77766D] text-[11px] font-light">
                            Hosting a celebration or summit?
                          </span>
                          <Link
                            href="/contact"
                            onClick={() => setVenuesDropdownOpen(false)}
                            className="text-[#AA8B54] hover:underline font-medium text-[11px] uppercase tracking-wider"
                          >
                            Enquire Now &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs xl:text-[13px] uppercase tracking-[0.16em] font-medium transition-colors relative py-1 hover:text-[#C6A568]",
                    isActive
                      ? "text-[#C6A568] font-semibold"
                      : isScrolled
                      ? "text-[#2B2B38]"
                      : "text-[#F7F4EC]/90"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A568] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="primary-gold"
              size="sm"
              onClick={handleBookNow}
              className="px-5 py-2.5 text-xs font-semibold tracking-widest shadow-sm hover:scale-[1.02]"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={handleBookNow}
              className="bg-[#C6A568] text-[#0E0D35] text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-[#F7F4EC] hover:text-[#C6A568] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A568] rounded-md"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onBookNowClick={handleBookNow}
      />

      {/* Transparent Booking Engine Notice Modal */}
      {showBookingNotice && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in"
        >
          <div className="bg-white border border-[#E8E8F0] text-[#0E0D35] rounded-xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative">
            <h3 className="font-serif text-2xl text-[#0E0D35] mb-2">
              Book Your Stay
            </h3>
            <p className="text-[#5A5A68] text-xs sm:text-sm leading-relaxed mb-5 font-light">
              The direct booking gateway for Radisson Hotel Rudrapur is in the process of finalizing PMS integration.
              <br /><br />
              Please contact the 24/7 reservations desk for instant room confirmations, executive packages, and group tariffs:
            </p>

            <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-lg border border-[#E8E8F0] mb-6 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#AA8B54] font-medium">Call Reservations:</span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-[#0E0D35] hover:text-[#C6A568] font-semibold"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#AA8B54] font-medium">WhatsApp Desk:</span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AA8B54] hover:underline flex items-center gap-1 font-semibold"
                >
                  Message Desk <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                href="/contact"
                onClick={() => setShowBookingNotice(false)}
                className="flex-1 bg-[#C6A568] hover:bg-[#b59457] text-[#0E0D35] font-semibold py-2.5 px-4 rounded-md text-xs uppercase tracking-wider text-center transition-colors shadow-sm"
              >
                Go to Enquiry Form
              </Link>
              <button
                type="button"
                onClick={() => setShowBookingNotice(false)}
                className="px-4 py-2.5 border border-[#E8E8F0] text-[#5A5A68] hover:bg-[#FAF8F5] rounded-md text-xs uppercase tracking-wider transition-colors"
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

export default Header;
