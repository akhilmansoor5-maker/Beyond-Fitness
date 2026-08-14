import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { OfferBanner } from "@/components/ui/OfferBanner";
import { Reveal } from "@/components/ui/Reveal";
import { contact, offer, trustPoints } from "@/content/site";

/** Local proof for “best gym in Manjeri” searchers */
export function HomeProof() {
  const mobilePoints = trustPoints.slice(0, 2);

  return (
    <section
      className="relative overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-page)]"
      aria-labelledby="home-proof"
    >
      <FloatingMarks tone="light" density="section" />
      <div className="bf-shell relative z-[2] bf-section">
        <Reveal>
          <p className="bf-index mb-3 md:mb-4">
            <span className="bf-index__num">04</span>
            <span className="mx-2 opacity-40">/</span>
            Manjeri
          </p>
          <h2
            id="home-proof"
            className="bf-display-lg max-w-[14ch] text-[var(--bf-text)]"
          >
            Real place.
            <br />
            Real standard.
          </h2>
          <p className="bf-lede mt-4 hidden md:mt-6 md:block">
            Looking for a serious gym in Manjeri? Start with verified location,
            hours, and a clear next step — visit, PT consult, or WhatsApp.
          </p>
        </Reveal>

        {/* Mobile: 2 key proofs only */}
        <div className="mt-8 grid gap-4 md:hidden">
          {mobilePoints.map((item) => (
            <div
              key={item.title}
              className="border border-[var(--bf-line)] bg-[var(--bf-page-alt)] p-5"
            >
              <p className="bf-meta text-[var(--bf-accent)]">{item.num}</p>
              <p className="bf-display mt-2 text-[1.65rem] text-[var(--bf-text)]">
                {item.title}
              </p>
              <p className="mt-2 text-[0.9rem] text-[var(--bf-text-mute)]">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 hidden gap-px bg-[var(--bf-line)] sm:grid-cols-2 md:grid">
          {trustPoints.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <div className="bg-[var(--bf-page)] p-6 md:p-8">
                <p className="bf-meta text-[var(--bf-accent)]">{item.num}</p>
                <p className="bf-display mt-3 text-[clamp(1.5rem,3vw,2.1rem)] text-[var(--bf-text)]">
                  {item.title}
                </p>
                <p className="mt-3 max-w-[32ch] text-[0.95rem] text-[var(--bf-text-mute)]">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {offer.active && (
          <Reveal delay={0.1}>
            <div className="mt-8 md:mt-10">
              <OfferBanner compact className="md:[&_.bf-offer-detail]:block" />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:flex-wrap">
            <Button href="/start-training" className="w-full justify-center md:w-auto">
              Start training
            </Button>
            <Button
              href="/visit"
              variant="ghost"
              className="w-full justify-center md:w-auto"
            >
              Visit
            </Button>
            <Button
              href={contact.mapsUrl}
              external
              variant="ghost"
              className="hidden md:inline-flex"
            >
              Open Maps
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
