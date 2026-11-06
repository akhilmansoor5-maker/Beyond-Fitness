import { Button } from "@/components/ui/Button";
import { OfferBanner } from "@/components/ui/OfferBanner";
import { Reveal } from "@/components/ui/Reveal";
import { contact, offer, trustPoints } from "@/content/site";

export function HomeProof() {
  const points = trustPoints.slice(0, 4);

  return (
    <section
      className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]"
      aria-labelledby="home-proof"
    >
      <div className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-3">
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
          <p className="bf-lede mt-4 hidden md:block">
            Looking for a serious gym in Manjeri? Start with verified location,
            hours, and a clear next step.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-px bg-[var(--bf-line)] sm:grid-cols-2">
          {points.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <div className="bg-[var(--bf-page)] p-4 md:p-6">
                <p className="bf-meta text-[var(--bf-accent)]">{item.num}</p>
                <p className="bf-display mt-2 text-[clamp(1.25rem,3vw,1.85rem)] text-[var(--bf-text)]">
                  {item.title}
                </p>
                <p className="mt-2 max-w-[34ch] text-[0.9rem] text-[var(--bf-text-mute)]">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {offer.active && (
          <Reveal delay={0.08}>
            <div className="mt-6 md:mt-8">
              <OfferBanner compact />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row md:mt-8">
            <Button
              href={contact.whatsappUrl}
              external
              className="justify-center"
            >
              WhatsApp
            </Button>
            <Button href="/visit" variant="ghost" className="justify-center">
              Visit details
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
