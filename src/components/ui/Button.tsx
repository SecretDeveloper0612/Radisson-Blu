import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-gold" | "secondary-outline" | "gold-outline" | "forest-solid" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary-gold",
  size = "md",
  href,
  isExternal,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-[6px] select-none text-center";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 uppercase tracking-widest",
    md: "text-sm px-6 py-3 tracking-wider",
    lg: "text-base px-8 py-4 tracking-wider",
  };

  const variantStyles = {
    "primary-gold":
      "bg-[#C6A568] hover:bg-[#b59457] text-[#0A0835] font-semibold shadow-sm hover:shadow-md focus-visible:ring-[#C6A568]",
    "secondary-outline":
      "border-2 border-[#C6A568] text-[#0A0835] hover:bg-[#C6A568] hover:text-[#0A0835] focus-visible:ring-[#C6A568]",
    "gold-outline":
      "border-2 border-[#C6A568] text-[#C6A568] hover:bg-[#C6A568] hover:text-[#0A0835] focus-visible:ring-[#C6A568]",
    "forest-solid":
      "bg-[#C6A568] hover:bg-[#b59457] text-[#0A0835] font-semibold shadow-sm hover:shadow-md focus-visible:ring-[#C6A568]",
    ghost:
      "text-[#0A0835] hover:text-[#C6A568] hover:bg-transparent underline-offset-4 hover:underline p-0",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
