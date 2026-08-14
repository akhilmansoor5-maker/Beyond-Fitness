import Link from "next/link";
import { offer } from "@/content/site";

type OfferBannerProps = {
  compact?: boolean;
  className?: string;
};

/** New-member website booking offer */
export function OfferBanner({ compact = false, className = "" }: OfferBannerProps) {
  if (!offer.active) return null;

  return (
    <div
      className={`border border-[var(--bf-accent)] bg-[rgba(143,31,46,0.06)] ${
        compact ? "p-4" : "p-5 md:p-6"
      } ${className}`.trim()}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="bf-meta text-[var(--bf-accent)]">
            {offer.eyebrow} · Code {offer.code}
          </p>
          <p
            className={`bf-display mt-2 text-[var(--bf-text)] ${
              compact
                ? "text-[clamp(1.35rem,3vw,1.85rem)]"
                : "text-[clamp(1.5rem,3.5vw,2.25rem)]"
            }`}
          >
            {offer.title}
          </p>
          {!compact && (
            <p className="mt-3 max-w-[52ch] text-[0.92rem] text-[var(--bf-text-mute)]">
              {offer.detail}
            </p>
          )}
        </div>
        <Link
          href="/start-training"
          className="bf-btn bf-btn--primary shrink-0 !min-h-11 !px-4 !text-[0.7rem]"
        >
          <span className="bf-btn__mark" aria-hidden />
          Claim {offer.percent}% off
        </Link>
      </div>
      {!compact && (
        <p className="bf-meta mt-4 text-[var(--bf-mute)]">{offer.finePrint}</p>
      )}
    </div>
  );
}
