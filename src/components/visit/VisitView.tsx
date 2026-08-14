import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { contact, images } from "@/content/site";

export function VisitView() {
  return (
    <main className="pt-[var(--bf-nav-h)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <PhotoFrame
            label={images.visitHero.label}
            src={images.visitHero.src}
            tone="community"
            aspect="absolute inset-0 h-full !aspect-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bf-page)] via-[rgba(243,241,236,0.88)] to-[rgba(243,241,236,0.4)]" />
        </div>
        <FloatingMarks tone="light" density="section" />
        <div className="bf-shell relative z-[2] bf-section min-h-[60vh] flex flex-col justify-end">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              The place
            </p>
            <h1 className="bf-display-lg text-[var(--bf-text)]">
              Manjeri.
              <br />
              Kerala.
            </h1>
            <p className="bf-lede mt-6">
              Location → arrival → space → train.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <div className="bf-shell bf-section grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="bf-index mb-6">
                <span className="bf-index__num">02</span>
                <span className="mx-2 opacity-40">/</span>
                Exact location
              </p>
              <address className="not-italic">
                {contact.addressLines.map((line) => (
                  <p
                    key={line}
                    className="bf-display text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.15] text-[var(--bf-text)]"
                  >
                    {line}
                  </p>
                ))}
              </address>
            </Reveal>

            <dl className="mt-10 border-t border-[var(--bf-line)]">
              <Reveal delay={0.05}>
                <div className="grid gap-1 border-b border-[var(--bf-line)] py-5 sm:grid-cols-[7rem_1fr]">
                  <dt className="bf-meta text-[var(--bf-accent)]">Phone</dt>
                  <dd>
                    <a
                      href={contact.phoneHref}
                      className="text-[1.15rem] text-[var(--bf-text)] underline-offset-4 hover:underline"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="grid gap-1 border-b border-[var(--bf-line)] py-5 sm:grid-cols-[7rem_1fr]">
                  <dt className="bf-meta text-[var(--bf-accent)]">WhatsApp</dt>
                  <dd>
                    <a
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[1.15rem] text-[var(--bf-text)] underline-offset-4 hover:underline"
                    >
                      {contact.whatsappDisplay}
                    </a>
                  </dd>
                </div>
              </Reveal>
              <Reveal delay={0.09}>
                <div className="grid gap-1 border-b border-[var(--bf-line)] py-5 sm:grid-cols-[7rem_1fr]">
                  <dt className="bf-meta text-[var(--bf-accent)]">Instagram</dt>
                  <dd>
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[1.15rem] text-[var(--bf-text)] underline-offset-4 hover:underline"
                    >
                      {contact.instagramHandle}
                    </a>
                  </dd>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="grid gap-1 border-b border-[var(--bf-line)] py-5 sm:grid-cols-[7rem_1fr]">
                  <dt className="bf-meta text-[var(--bf-accent)]">Rating</dt>
                  <dd className="text-[1.05rem] text-[var(--bf-text)]">
                    {contact.rating} · {contact.reviewCount} Google reviews
                  </dd>
                </div>
              </Reveal>
            </dl>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={contact.mapsUrl} external>
                  Get directions
                </Button>
                <Button href={contact.whatsappUrl} variant="ghost" external>
                  WhatsApp
                </Button>
                <Button href={contact.phoneHref} variant="ghost">
                  Call
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="overflow-hidden border border-[var(--bf-line)] bg-[var(--bf-page)]">
              <iframe
                title="Beyond Fitness Manjeri on Google Maps"
                src={contact.mapsEmbed}
                className="aspect-[4/3] w-full border-0 lg:aspect-[16/11]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">03</span>
            <span className="mx-2 opacity-40">/</span>
            Hours
          </p>
          <h2 className="bf-display text-[clamp(2rem,5vw,3.25rem)] text-[var(--bf-text)]">
            When to train.
          </h2>
        </Reveal>
        <ul className="mt-8 border-t border-[var(--bf-line)]">
          {contact.hours.map((row, i) => (
            <Reveal key={row.day} delay={0.03 * i}>
              <li className="flex items-baseline justify-between gap-4 border-b border-[var(--bf-line)] py-4">
                <span className="bf-meta text-[var(--bf-text-soft)]">
                  {row.day}
                </span>
                <span className="bf-num text-[0.95rem] text-[var(--bf-text)]">
                  {row.time}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-[var(--bf-line)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">04</span>
              <span className="mx-2 opacity-40">/</span>
              Space
            </p>
            <h2 className="bf-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--bf-text)]">
              The floor is the destination.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <PhotoFrame
              label={images.visitSpace.label}
              src={images.visitSpace.src}
              tone="fitness"
              aspect="aspect-[16/9]"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10">
              <Button href="/start-training">Start training</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
