"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ArrowUpRight, ArrowRight, ChevronRight } from "lucide-react";
import { headerNavLinks } from "@/data/navigation";
import { venuesData, sapphireCeremonies, concordOccasions, executiveRoomEvents, nh87Events, k2barEvents, fernEvents, kumaonCafeEvents, nh87PoolLawnEvents, poolLawnEvents } from "@/data/venues";
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
  const [nh87SubmenuOpen, setNh87SubmenuOpen] = useState(false);
  const [k2barSubmenuOpen, setK2barSubmenuOpen] = useState(false);
  const [fernSubmenuOpen, setFernSubmenuOpen] = useState(false);
  const [kumaonSubmenuOpen, setKumaonSubmenuOpen] = useState(false);
  const [nh87PoolSubmenuOpen, setNh87PoolSubmenuOpen] = useState(false);
  const [poolLawnSubmenuOpen, setPoolLawnSubmenuOpen] = useState(false);
  const sapphireTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const concordTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const executiveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nh87TimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const k2barTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fernTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const kumaonTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nh87PoolTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const poolLawnTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearAllSubmenuTimeouts = () => {
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
    if (nh87TimeoutRef.current) {
      clearTimeout(nh87TimeoutRef.current);
      nh87TimeoutRef.current = null;
    }
    if (k2barTimeoutRef.current) {
      clearTimeout(k2barTimeoutRef.current);
      k2barTimeoutRef.current = null;
    }
    if (fernTimeoutRef.current) {
      clearTimeout(fernTimeoutRef.current);
      fernTimeoutRef.current = null;
    }
    if (kumaonTimeoutRef.current) {
      clearTimeout(kumaonTimeoutRef.current);
      kumaonTimeoutRef.current = null;
    }
    if (nh87PoolTimeoutRef.current) {
      clearTimeout(nh87PoolTimeoutRef.current);
      nh87PoolTimeoutRef.current = null;
    }
    if (poolLawnTimeoutRef.current) {
      clearTimeout(poolLawnTimeoutRef.current);
      poolLawnTimeoutRef.current = null;
    }
  };

  const closeAllSubmenus = () => {
    setSapphireSubmenuOpen(false);
    setConcordSubmenuOpen(false);
    setExecutiveSubmenuOpen(false);
    setNh87SubmenuOpen(false);
    setK2barSubmenuOpen(false);
    setFernSubmenuOpen(false);
    setKumaonSubmenuOpen(false);
    setNh87PoolSubmenuOpen(false);
    setPoolLawnSubmenuOpen(false);
  };

  const handleSapphireMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setSapphireSubmenuOpen(true);
  };

  const handleSapphireMouseLeave = () => {
    sapphireTimeoutRef.current = setTimeout(() => {
      setSapphireSubmenuOpen(false);
    }, 140);
  };

  const handleConcordMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setConcordSubmenuOpen(true);
  };

  const handleConcordMouseLeave = () => {
    concordTimeoutRef.current = setTimeout(() => {
      setConcordSubmenuOpen(false);
    }, 140);
  };

  const handleExecutiveMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setExecutiveSubmenuOpen(true);
  };

  const handleExecutiveMouseLeave = () => {
    executiveTimeoutRef.current = setTimeout(() => {
      setExecutiveSubmenuOpen(false);
    }, 140);
  };

  const handleNh87MouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setNh87SubmenuOpen(true);
  };

  const handleNh87MouseLeave = () => {
    nh87TimeoutRef.current = setTimeout(() => {
      setNh87SubmenuOpen(false);
    }, 140);
  };

  const handleK2barMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setK2barSubmenuOpen(true);
  };

  const handleK2barMouseLeave = () => {
    k2barTimeoutRef.current = setTimeout(() => {
      setK2barSubmenuOpen(false);
    }, 140);
  };

  const handleFernMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setFernSubmenuOpen(true);
  };

  const handleFernMouseLeave = () => {
    fernTimeoutRef.current = setTimeout(() => {
      setFernSubmenuOpen(false);
    }, 140);
  };

  const handleKumaonMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setKumaonSubmenuOpen(true);
  };

  const handleKumaonMouseLeave = () => {
    kumaonTimeoutRef.current = setTimeout(() => {
      setKumaonSubmenuOpen(false);
    }, 140);
  };

  const handleNh87PoolMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setNh87PoolSubmenuOpen(true);
  };

  const handleNh87PoolMouseLeave = () => {
    nh87PoolTimeoutRef.current = setTimeout(() => {
      setNh87PoolSubmenuOpen(false);
    }, 140);
  };

  const handlePoolLawnMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
    setPoolLawnSubmenuOpen(true);
  };

  const handlePoolLawnMouseLeave = () => {
    poolLawnTimeoutRef.current = setTimeout(() => {
      setPoolLawnSubmenuOpen(false);
    }, 140);
  };

  const handleOtherVenueMouseEnter = () => {
    clearAllSubmenuTimeouts();
    closeAllSubmenus();
  };

  useEffect(() => {
    return () => {
      clearAllSubmenuTimeouts();
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
            className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A568] rounded"
          >
            <span
              className={cn(
                "font-serif text-lg sm:text-xl lg:text-2xl tracking-[0.24em] font-medium transition-colors leading-none text-center pl-1",
                isScrolled ? "text-[#0E0D35] group-hover:text-[#AA8B54]" : "text-[#F7F4EC] group-hover:text-[#C6A568]"
              )}
            >
              VYAH
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#C6A568] mt-1 font-sans font-light text-center">
              By Radisson Blu Rudrapur
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {headerNavLinks.map((link) => {
              const isHome = link.href === "/";
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
                            All Venues & Spaces (12)
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
                        <div className="space-y-0.5">
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
                                        9 Events
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
                                    <div className="w-[340px] max-h-[82vh] flex flex-col bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0] shrink-0">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            Sapphire Celebrations (9)
                                          </span>
                                          <span className="text-[10px] text-[#77766D] font-light">
                                            Pillarless ballroom &amp; pre-function lawn
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

                                      {/* 9 Ceremonies list with sleek scrollbar */}
                                      <div className="space-y-1 overflow-y-auto max-h-[58vh] pr-1 select-none">
                                        {sapphireCeremonies.map((ceremony) => (
                                          <Link
                                            key={ceremony.id}
                                            href={ceremony.href}
                                            onClick={() => {
                                              setVenuesDropdownOpen(false);
                                              setSapphireSubmenuOpen(false);
                                            }}
                                            className="group/ceremony flex items-center justify-between p-2 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                          >
                                            <div>
                                              <span className="font-serif text-[13px] font-medium text-[#0E0D35] group-hover/ceremony:text-[#AA8B54] transition-colors block leading-tight">
                                                {ceremony.name}
                                              </span>
                                              <span className="text-[9.5px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {ceremony.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/ceremony:text-[#AA8B54] group-hover/ceremony:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
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

                            if (venue.slug === "nh-87") {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative"
                                  onMouseEnter={handleNh87MouseEnter}
                                  onMouseLeave={handleNh87MouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      closeAllSubmenus();
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      nh87SubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            nh87SubmenuOpen
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
                                          nh87SubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        6 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          nh87SubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* NH 87 Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full top-0 pl-3.5 transition-all duration-200 z-50",
                                      nh87SubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] max-h-[82vh] flex flex-col bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0] shrink-0">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            NH 87 Celebrations (6)
                                          </span>
                                          <span className="text-[10px] text-[#77766D] font-light">
                                            Dining, lounge &amp; celebratory functions
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/nh-87"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
                                          }}
                                          className="text-[10px] text-[#5A5A68] hover:text-[#C6A568] uppercase tracking-wider flex items-center gap-1 transition-colors font-medium"
                                        >
                                          <span>Details</span>
                                          <ArrowRight className="w-3 h-3 text-[#C6A568]" />
                                        </Link>
                                      </div>

                                      {/* 6 NH 87 items */}
                                      <div className="space-y-1 overflow-y-auto max-h-[58vh] pr-1 select-none">
                                        {nh87Events.map((item) => (
                                          <Link
                                            key={item.id}
                                            href={item.href}
                                            onClick={() => {
                                              setVenuesDropdownOpen(false);
                                              closeAllSubmenus();
                                            }}
                                            className="group/nh87 flex items-center justify-between p-2 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                          >
                                            <div>
                                              <span className="font-serif text-[13px] font-medium text-[#0E0D35] group-hover/nh87:text-[#AA8B54] transition-colors block leading-tight">
                                                {item.name}
                                              </span>
                                              <span className="text-[9.5px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {item.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/nh87:text-[#AA8B54] group-hover/nh87:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs shrink-0">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 120 guests
                                        </span>
                                        <Link
                                          href="/contact?venue=nh-87"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
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
                                      <div className="space-y-1">
                                        {concordOccasions.map((occasion) => (
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
                                            <div>
                                              <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/occasion:text-[#AA8B54] transition-colors block leading-tight">
                                                {occasion.name}
                                              </span>
                                              <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {occasion.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/occasion:text-[#AA8B54] group-hover/occasion:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
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
                                      <div className="space-y-1">
                                        {executiveRoomEvents.map((item) => (
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
                                            <div>
                                              <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/exec:text-[#AA8B54] transition-colors block leading-tight">
                                                {item.name}
                                              </span>
                                              <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {item.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/exec:text-[#AA8B54] group-hover/exec:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
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

                            if (venue.slug === "k2-bar") {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative"
                                  onMouseEnter={handleK2barMouseEnter}
                                  onMouseLeave={handleK2barMouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      closeAllSubmenus();
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      k2barSubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            k2barSubmenuOpen
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
                                          k2barSubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        2 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          k2barSubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* K2BAR Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full bottom-0 pl-3.5 transition-all duration-200 z-50",
                                      k2barSubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0]">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            K2BAR Parties (2)
                                          </span>
                                          <span className="text-[10px] text-[#77766D] font-light">
                                            Night Party &amp; Kitty Party Lounge
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/k2-bar"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
                                          }}
                                          className="text-[10px] text-[#5A5A68] hover:text-[#C6A568] uppercase tracking-wider flex items-center gap-1 transition-colors font-medium"
                                        >
                                          <span>Details</span>
                                          <ArrowRight className="w-3 h-3 text-[#C6A568]" />
                                        </Link>
                                      </div>

                                      {/* 2 K2BAR items */}
                                      <div className="space-y-1">
                                        {k2barEvents.map((item) => (
                                          <Link
                                            key={item.id}
                                            href={item.href}
                                            onClick={() => {
                                              setVenuesDropdownOpen(false);
                                              closeAllSubmenus();
                                            }}
                                            className="group/k2 flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                          >
                                            <div>
                                              <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/k2:text-[#AA8B54] transition-colors block leading-tight">
                                                {item.name}
                                              </span>
                                              <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {item.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/k2:text-[#AA8B54] group-hover/k2:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 80 guests
                                        </span>
                                        <Link
                                          href="/contact?venue=k2-bar"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
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

                            if (venue.slug === "fern") {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative group/venue"
                                  onMouseEnter={handleFernMouseEnter}
                                  onMouseLeave={handleFernMouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      closeAllSubmenus();
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      fernSubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            fernSubmenuOpen
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
                                          fernSubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        2 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          fernSubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* Fern Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full bottom-0 pl-3.5 transition-all duration-200 z-50",
                                      fernSubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0]">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            Fern Meetings (2)
                                          </span>
                                          <span className="font-serif text-sm text-[#0E0D35] block">
                                            Business Summits & Boards
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/fern"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
                                          }}
                                          className="text-[11px] uppercase tracking-wider text-[#AA8B54] hover:underline font-medium"
                                        >
                                          View All &rarr;
                                        </Link>
                                      </div>

                                      {/* 2 Fern items */}
                                      <div className="space-y-1">
                                        {fernEvents.map((item) => (
                                          <Link
                                            key={item.id}
                                            href={item.href}
                                            onClick={() => {
                                              setVenuesDropdownOpen(false);
                                              closeAllSubmenus();
                                            }}
                                            className="group/fern flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                          >
                                            <div>
                                              <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/fern:text-[#AA8B54] transition-colors block leading-tight">
                                                {item.name}
                                              </span>
                                              <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {item.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/fern:text-[#AA8B54] group-hover/fern:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 40 delegates
                                        </span>
                                        <Link
                                          href="/contact?venue=fern"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
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

                            if (venue.slug === "kumaon-cafe") {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative group/venue"
                                  onMouseEnter={handleKumaonMouseEnter}
                                  onMouseLeave={handleKumaonMouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      closeAllSubmenus();
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      kumaonSubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            kumaonSubmenuOpen
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
                                          kumaonSubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        4 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          kumaonSubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* Kumaon Cafe Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full bottom-0 pl-3.5 transition-all duration-200 z-50",
                                      kumaonSubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0]">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            Kumaon Cafe Events (4)
                                          </span>
                                          <span className="font-serif text-sm text-[#0E0D35] block">
                                            Socials & Dining Gatherings
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/kumaon-cafe"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
                                          }}
                                          className="text-[11px] uppercase tracking-wider text-[#AA8B54] hover:underline font-medium"
                                        >
                                          View All &rarr;
                                        </Link>
                                      </div>

                                      {/* 4 Kumaon Cafe items */}
                                      <div className="space-y-1">
                                        {kumaonCafeEvents.map((item) => (
                                          <Link
                                            key={item.id}
                                            href={item.href}
                                            onClick={() => {
                                              setVenuesDropdownOpen(false);
                                              closeAllSubmenus();
                                            }}
                                            className="group/kumaon flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                          >
                                            <div>
                                              <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/kumaon:text-[#AA8B54] transition-colors block leading-tight">
                                                {item.name}
                                              </span>
                                              <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {item.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/kumaon:text-[#AA8B54] group-hover/kumaon:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 50 guests
                                        </span>
                                        <Link
                                          href="/contact?venue=kumaon-cafe"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
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

                            if (venue.slug === "nh87-pool-lawn") {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative group/venue"
                                  onMouseEnter={handleNh87PoolMouseEnter}
                                  onMouseLeave={handleNh87PoolMouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      closeAllSubmenus();
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      nh87PoolSubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            nh87PoolSubmenuOpen
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
                                          nh87PoolSubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        8 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          nh87PoolSubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* NH87+Pool lawn Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full bottom-0 pl-3.5 transition-all duration-200 z-50",
                                      nh87PoolSubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35] max-h-[500px] overflow-y-auto">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0]">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            NH87+Pool Celebrations (8)
                                          </span>
                                          <span className="font-serif text-sm text-[#0E0D35] block">
                                            Weddings, Roka & Galas
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/nh87-pool-lawn"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
                                          }}
                                          className="text-[11px] uppercase tracking-wider text-[#AA8B54] hover:underline font-medium"
                                        >
                                          View All &rarr;
                                        </Link>
                                      </div>

                                      {/* 8 NH87+Pool Lawn items */}
                                      <div className="space-y-1">
                                        {nh87PoolLawnEvents.map((item) => (
                                          <Link
                                            key={item.id}
                                            href={item.href}
                                            onClick={() => {
                                              setVenuesDropdownOpen(false);
                                              closeAllSubmenus();
                                            }}
                                            className="group/pool flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                          >
                                            <div>
                                              <span className="font-serif text-sm font-medium text-[#0E0D35] group-hover/pool:text-[#AA8B54] transition-colors block leading-tight">
                                                {item.name}
                                              </span>
                                              <span className="text-[10px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {item.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/pool:text-[#AA8B54] group-hover/pool:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 600 guests
                                        </span>
                                        <Link
                                          href="/contact?venue=nh87-pool-lawn"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
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

                            if (venue.slug === "pool-lawn") {
                              return (
                                <div
                                  key={venue.id}
                                  className="relative group/venue"
                                  onMouseEnter={handlePoolLawnMouseEnter}
                                  onMouseLeave={handlePoolLawnMouseLeave}
                                >
                                  <Link
                                    href={`/venues/${venue.slug}`}
                                    onClick={() => {
                                      setVenuesDropdownOpen(false);
                                      closeAllSubmenus();
                                    }}
                                    className={cn(
                                      "group/item flex items-center justify-between p-2.5 rounded-lg transition-all",
                                      poolLawnSubmenuOpen
                                        ? "bg-[#FAF8F5] ring-1 ring-[#C6A568]/40"
                                        : "hover:bg-[#FAF8F5]"
                                    )}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={cn(
                                            "font-serif text-base transition-colors",
                                            poolLawnSubmenuOpen
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
                                          poolLawnSubmenuOpen
                                            ? "bg-[#C6A568]/20 text-[#AA8B54]"
                                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover/item:bg-[#C6A568]/15 group-hover/item:text-[#AA8B54]"
                                        )}
                                      >
                                        8 Events
                                      </span>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 transition-all duration-200",
                                          poolLawnSubmenuOpen
                                            ? "text-[#AA8B54] translate-x-1"
                                            : "text-[#77766D] group-hover/item:text-[#AA8B54] group-hover/item:translate-x-0.5"
                                        )}
                                      />
                                    </div>
                                  </Link>

                                  {/* Pool Lawn Flyout Submenu to the right */}
                                  <div
                                    className={cn(
                                      "absolute left-full top-0 pl-3.5 transition-all duration-200 z-50",
                                      poolLawnSubmenuOpen
                                        ? "opacity-100 visible translate-x-0 pointer-events-auto"
                                        : "opacity-0 invisible -translate-x-2 pointer-events-none"
                                    )}
                                  >
                                    <div className="w-[340px] max-h-[82vh] flex flex-col bg-white/98 backdrop-blur-xl border border-[#E8E8F0] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 text-[#0E0D35]">
                                      {/* Submenu Header */}
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E8E8F0] shrink-0">
                                        <div>
                                          <span className="text-[10px] uppercase tracking-[0.22em] text-[#AA8B54] font-semibold block">
                                            Pool Lawn Celebrations (8)
                                          </span>
                                          <span className="text-[10px] text-[#77766D] font-light">
                                            Outdoor Weddings &amp; Galas
                                          </span>
                                        </div>
                                        <Link
                                          href="/venues/pool-lawn"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
                                          }}
                                          className="text-[10px] text-[#5A5A68] hover:text-[#C6A568] uppercase tracking-wider flex items-center gap-1 transition-colors font-medium"
                                        >
                                          <span>Details</span>
                                          <ArrowRight className="w-3 h-3 text-[#C6A568]" />
                                        </Link>
                                      </div>

                                      {/* 8 Pool Lawn items */}
                                      <div className="space-y-1 overflow-y-auto max-h-[58vh] pr-1 select-none">
                                        {poolLawnEvents.map((item) => (
                                          <Link
                                            key={item.id}
                                            href={item.href}
                                            onClick={() => {
                                              setVenuesDropdownOpen(false);
                                              closeAllSubmenus();
                                            }}
                                            className="group/poollawnev flex items-center justify-between p-2 rounded-lg border border-transparent hover:border-[#E8E8F0] hover:bg-[#FAF8F5] transition-all"
                                          >
                                            <div>
                                              <span className="font-serif text-[13px] font-medium text-[#0E0D35] group-hover/poollawnev:text-[#AA8B54] transition-colors block leading-tight">
                                                {item.name}
                                              </span>
                                              <span className="text-[9.5px] text-[#77766D] uppercase tracking-wider block mt-0.5">
                                                {item.category}
                                              </span>
                                            </div>
                                            <span className="text-xs text-[#77766D] group-hover/poollawnev:text-[#AA8B54] group-hover/poollawnev:translate-x-1 transition-all">
                                              &rarr;
                                            </span>
                                          </Link>
                                        ))}
                                      </div>

                                      {/* Submenu Footer */}
                                      <div className="mt-3 pt-2.5 border-t border-[#E8E8F0] flex items-center justify-between text-xs shrink-0">
                                        <span className="text-[#77766D] text-[10px] font-light">
                                          Capacity up to 500 guests
                                        </span>
                                        <Link
                                          href="/contact?venue=pool-lawn"
                                          onClick={() => {
                                            setVenuesDropdownOpen(false);
                                            closeAllSubmenus();
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
                                  closeAllSubmenus();
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
                    isHome && "ml-4 xl:ml-8",
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
