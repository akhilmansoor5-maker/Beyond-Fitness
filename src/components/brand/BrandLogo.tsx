import Image from "next/image";
import { brand } from "@/content/site";

type BrandLogoProps = {
  surface?: "dark" | "light";
  className?: string;
  priority?: boolean;
  size?: "nav" | "hero" | "footer";
};

/**
 * Primary brand mark — cropped transparent LOGO PNG (no empty padding).
 * No animation. Preserve proportions. Prefer dark chrome behind silver mark.
 */
export function BrandLogo({
  surface = "dark",
  className = "",
  priority = false,
  size = "nav",
}: BrandLogoProps) {
  const onLightSrc = brand.logo.onLight;
  const useOnLight = surface === "light" && onLightSrc;
  const src = useOnLight ? onLightSrc : brand.logo.primary;

  return (
    <span
      className={`bf-logo bf-logo--${surface} bf-logo--${size} ${className}`.trim()}
      data-logo-surface={surface}
    >
      <Image
        src={src}
        alt={`${brand.name} — ${brand.philosophy}`}
        width={803}
        height={154}
        priority={priority}
        className="bf-logo__img"
      />
    </span>
  );
}
