"use client";

import { BrandLogo } from "@/components/brand/BrandLogo";

/** Footer/header logos sit on black chrome — always dark surface. */
export function BrandLogoAuto({
  className = "",
  priority = false,
  size = "footer",
}: {
  className?: string;
  priority?: boolean;
  size?: "nav" | "hero" | "footer";
}) {
  return (
    <BrandLogo
      surface="dark"
      className={className}
      priority={priority}
      size={size}
    />
  );
}
