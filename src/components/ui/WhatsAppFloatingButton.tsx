"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function WhatsAppFloatingButton() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Interactive Tooltip pill */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#0E0D35] text-xs font-medium border border-[#E8E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 pointer-events-none select-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Chat with Concierge</span>
      </div>

      {/* Floating WhatsApp Action Button */}
      <Link
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Radisson Blu Rudrapur concierge on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_14px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        {/* Soft ripple pulse behind button */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 pointer-events-none" />

        {/* Official WhatsApp Brand SVG */}
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.32 13.86 15.12 13.28 14.9 13.2C14.67 13.12 14.5 13.08 14.34 13.33C14.18 13.58 13.71 14.11 13.57 14.27C13.43 14.44 13.29 14.46 13.05 14.34C12.81 14.21 11.99 13.95 11.04 13.1C10.3 12.44 9.8 11.62 9.66 11.38C9.52 11.14 9.64 11 9.77 10.89C9.88 10.78 10.02 10.6 10.14 10.45C10.26 10.31 10.3 10.2 10.38 10.04C10.46 9.88 10.42 9.73 10.36 9.61C10.3 9.49 9.84 8.36 9.65 7.9C9.46 7.46 9.27 7.52 9.13 7.51C9 7.5 8.84 7.5 8.68 7.5C8.53 7.5 8.37 7.33 8.53 7.33Z" />
        </svg>
      </Link>
    </aside>
  );
}

export default WhatsAppFloatingButton;

