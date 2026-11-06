import { Button } from "@/components/ui/Button";
import { OfferBanner } from "@/components/ui/OfferBanner";
import { Reveal } from "@/components/ui/Reveal";
import { contact, offer, trustPoints } from "@/content/site";

export function HomeProof() {
  return (
    <section
      className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]"
      aria-labelledby="home-proof"
    >
      <div className="bf-shell bf-section">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="bf-index mb-4">
              <span className="bf-index__num">05</span>
              <span className="mx-2 opacity-40">/</span>
              Manjeri
            </p>
            <h2
              id="home-proof"
              className="bf-display-lg max-w-[12ch] text-[var(--bf-text)]"
            >
              Real place.
              <br />
              Real standard.
            </h2>
            <p className="bf-lede mt-5">
              Looking for a serious gym in Manjeri? Start with verified
              location, hours, and a clear next step.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {trustPoints.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <div className="bf-hover-card h-full border border-[var(--bf-line)] bg-[var(--bf-page)] p-4 md:p-5">
                  <p className="bf-meta text-[var(--bf-accent)]">{item.num}</p>
                  <p className="bf-display mt-2 text-[clamp(1.2rem,2.8vw,1.65rem)] text-[var(--bf-text)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--bf-text-mute)]">
                    {item.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {offer.active && (
          <Reveal delay={0.08}>
            <div className="mt-8 md:mt-10">
              <OfferBanner compact />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
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
