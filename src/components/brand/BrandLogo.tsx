import { brand } from "@/content/site";
import { asset } from "@/lib/asset";

type BrandLogoProps = {
  surface?: "dark" | "light";
  className?: string;
  priority?: boolean;
  size?: "nav" | "hero" | "footer";
};

/**
 * Primary brand mark — cropped transparent LOGO PNG.
 * Uses native <img> so GitHub Pages basePath is not double-prefixed by next/image.
 */
export function BrandLogo({
  surface = "dark",
  className = "",
  priority = false,
  size = "nav",
}: BrandLogoProps) {
  const onLightSrc = brand.logo.onLight;
  const useOnLight = surface === "light" && onLightSrc;
  const src = asset(useOnLight ? onLightSrc : brand.logo.primary);

  return (
    <span
      className={`bf-logo bf-logo--${surface} bf-logo--${size} ${className}`.trim()}
      data-logo-surface={surface}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${brand.name} — ${brand.philosophy}`}
        width={803}
        height={154}
        className="bf-logo__img"
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </span>
  );
}
