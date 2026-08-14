import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { OfferBanner } from "@/components/ui/OfferBanner";
import { Reveal } from "@/components/ui/Reveal";
import { contact, offer, trustPoints } from "@/content/site";

/** Local proof for “best gym in Manjeri” searchers */
export function HomeProof() {
  return (
    <section
      className="relative overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-page)]"
      aria-labelledby="home-proof"
    >
      <FloatingMarks tone="light" density="section" />
      <div className="bf-shell relative z-[2] bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">04</span>
            <span className="mx-2 opacity-40">/</span>
            Why Manjeri trains here
          </p>
          <h2
            id="home-proof"
            className="bf-display-lg max-w-[14ch] text-[var(--bf-text)]"
          >
            Real place.
            <br />
            Real standard.
          </h2>
          <p className="bf-lede mt-6">
            Looking for a serious gym in Manjeri? Start with verified location,
            hours, and a clear next step — visit, PT consult, or WhatsApp.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px bg-[var(--bf-line)] sm:grid-cols-2">
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
            <div className="mt-10">
              <OfferBanner />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/start-training">Start training</Button>
            <Button href="/personal-training" variant="ghost">
              Personal training
            </Button>
            <Button href="/gallery" variant="ghost">
              View gallery
            </Button>
            <Button href={contact.mapsUrl} external variant="ghost">
              Open Maps
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
