import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "right" && "text-right ml-auto",
        align === "left" && "text-left max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.22em] mb-3",
            isDark ? "text-[#C6A568]" : "text-[#AA8B54]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] leading-[1.18] font-normal tracking-tight",
          isDark ? "text-[#F7F4EC]" : "text-[#0E0D35]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-light",
            isDark ? "text-[#E4DED2]/80" : "text-[#77766D]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
