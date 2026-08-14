import Image from "next/image";
import { asset } from "@/lib/asset";

type PhotoTone = "default" | "fitness" | "combat" | "detail" | "community";

type PhotoFrameProps = {
  label: string;
  aspect?: string;
  tone?: PhotoTone;
  className?: string;
  src?: string | null;
  alt?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

const toneClass: Record<PhotoTone, string> = {
  default: "bf-photo--default",
  fitness: "bf-photo--fitness",
  combat: "bf-photo--combat",
  detail: "bf-photo--detail",
  community: "bf-photo--community",
};

/**
 * Photography slot — pass `src` when a real asset exists.
 * Labelled placeholder preserves crop until then.
 */
export function PhotoFrame({
  label,
  aspect = "aspect-[4/5]",
  tone = "default",
  className = "",
  src = null,
  alt,
  priority = false,
  children,
}: PhotoFrameProps) {
  const resolved = src ? asset(src) : null;

  return (
    <figure
      className={`bf-photo ${toneClass[tone]} ${aspect} ${className}`.trim()}
      data-photo-slot={label}
    >
      {resolved ? (
        <Image
          src={resolved}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
          unoptimized
        />
      ) : (
        <div className="bf-photo__placeholder" aria-hidden />
      )}
      {children}
      {!resolved && (
        <figcaption className="bf-photo__label">[ {label} ]</figcaption>
      )}
    </figure>
  );
}
