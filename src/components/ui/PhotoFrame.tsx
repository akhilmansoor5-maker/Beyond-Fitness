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
 * Photography slot — native <img> for reliable GitHub Pages paths.
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
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolved}
          alt={alt ?? label}
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
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
