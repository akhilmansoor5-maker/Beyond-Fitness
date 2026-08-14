import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { astra, brand, contact, images } from "@/content/site";

export function AstraView() {
  const hasExternal = Boolean(astra.externalUrl);
  const exploreHref = astra.externalUrl ?? "/start-training";

  return (
    <main className="pt-[var(--bf-nav-h)]">
      <section className="relative min-h-[85vh] overflow-hidden bf-theme-dark bg-[var(--bf-void)] text-[var(--bf-bone)]">
        <div className="absolute inset-0">
          <PhotoFrame
            label={images.astraHero.label}
            src={images.astraHero.src}
            tone="combat"
            aspect="absolute inset-0 h-full !aspect-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.95)] via-[rgba(5,5,5,0.55)] to-[rgba(5,5,5,0.35)]" />
        </div>

        <div className="bf-shell relative flex min-h-[85vh] flex-col justify-end bf-section">
          <Reveal>
            <p className="bf-meta text-[var(--bf-accent)]">
              Connected to {brand.name}
            </p>
            <h1 className="bf-display mt-4 text-[clamp(4rem,16vw,10rem)] tracking-[-0.04em]">
              {astra.name}
            </h1>
            <p className="mt-4 max-w-[34ch] text-[1.1rem] leading-relaxed text-[var(--bf-mute)]">
              {astra.blurb}
            </p>
            <div className="bf-on-void mt-10 flex flex-wrap gap-3">
              {hasExternal ? (
                <Button href={exploreHref} external>
                  Explore Astra
                </Button>
              ) : (
                <Button href="/start-training">Start with Astra</Button>
              )}
              <Button href="/combat" variant="ghost">
                View combat disciplines
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]">
        <div className="bf-shell bf-section grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="bf-index mb-4">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Destination
            </p>
            <h2 className="bf-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--bf-text)]">
              There&apos;s another world beyond this arena.
            </h2>
            <p className="bf-lede mt-5">{astra.note}</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <div className="border border-[var(--bf-line)] bg-[var(--bf-page-alt)] p-8 md:p-12">
              <p className="bf-meta text-[var(--bf-accent)]">Enter Astra</p>
              <p className="bf-display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--bf-text)]">
                Ready to train?
              </p>
              <p className="mt-4 max-w-[36ch] text-[0.95rem] text-[var(--bf-text-mute)]">
                Message Beyond Fitness to begin Astra programmes, or call{" "}
                {contact.phoneDisplay}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {hasExternal ? (
                  <Button href={exploreHref} external>
                    Explore Astra
                  </Button>
                ) : (
                  <Button href={contact.whatsappUrl} external>
                    WhatsApp enquire
                  </Button>
                )}
                <Button href="/start-training" variant="ghost">
                  Start via Beyond
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
