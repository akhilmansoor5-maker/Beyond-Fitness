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
      className={`border border-[var(--bf-accent)] bg-[rgba(143,31,46,0.06)] p-4 md:p-6 ${className}`.trim()}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="bf-meta text-[var(--bf-accent)]">
            {offer.eyebrow} · {offer.code}
          </p>
          <p
            className={`bf-display mt-2 text-[var(--bf-text)] ${
              compact
                ? "text-[clamp(1.25rem,5vw,1.85rem)]"
                : "text-[clamp(1.35rem,5vw,2.25rem)]"
            }`}
          >
            {compact
              ? `${offer.percent}% off — book on this website`
              : offer.title}
          </p>
          {!compact && (
            <p className="bf-offer-detail mt-3 hidden max-w-[52ch] text-[0.92rem] text-[var(--bf-text-mute)] md:block">
              {offer.detail}
            </p>
          )}
        </div>
        <Link
          href="/start-training"
          className="bf-btn bf-btn--primary w-full shrink-0 justify-center !min-h-11 !px-4 !text-[0.7rem] sm:w-auto"
        >
          <span className="bf-btn__mark" aria-hidden />
          Claim {offer.percent}% off
        </Link>
      </div>
      {!compact && (
        <p className="bf-meta mt-4 hidden text-[var(--bf-mute)] md:block">
          {offer.finePrint}
        </p>
      )}
    </div>
  );
}
