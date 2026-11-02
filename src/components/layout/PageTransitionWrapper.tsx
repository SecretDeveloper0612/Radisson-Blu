"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      className="page-enter-animation w-full flex-1 flex flex-col"
    >
      {children}
    </div>
  );
}

export default PageTransitionWrapper;
