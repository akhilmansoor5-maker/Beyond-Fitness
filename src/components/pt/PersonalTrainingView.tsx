import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { OfferBanner } from "@/components/ui/OfferBanner";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { contact, images, offer, personalTraining } from "@/content/site";

export function PersonalTrainingView() {
  const waText = encodeURIComponent(
    `Beyond Fitness — Personal Training consult\nI'd like to book a PT consult.${
      offer.active ? `\nOffer code: ${offer.code}` : ""
    }`,
  );

  return (
    <main className="pt-[var(--bf-nav-h)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <PhotoFrame
            label={images.ptHero.label}
            src={images.ptHero.src}
            tone="fitness"
            aspect="absolute inset-0 h-full !aspect-auto"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bf-page)] via-[rgba(243,241,236,0.94)] to-[rgba(243,241,236,0.5)]" />
        <FloatingMarks tone="light" density="section" />
        <div className="bf-shell relative z-[2] bf-section">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Personal training
            </p>
            <h1 className="bf-display-lg text-[var(--bf-text)]">
              {personalTraining.headline.split(". ")[0]}.
              <br />
              {personalTraining.headline.split(". ").slice(1).join(". ")}
            </h1>
            <p className="bf-lede mt-6">{personalTraining.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`${contact.whatsappUrl}?text=${waText}`} external>
                Book PT consult
              </Button>
              <Button href="/start-training" variant="ghost">
                Start training form
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {offer.active && (
        <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
          <div className="bf-shell py-8">
            <OfferBanner />
          </div>
        </section>
      )}

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">02</span>
              <span className="mx-2 opacity-40">/</span>
              The standard
            </p>
            <h2 className="bf-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--bf-text)]">
              What PT looks like here.
            </h2>
          </Reveal>

          <ol className="mt-12 border-t border-[var(--bf-line)]">
            {personalTraining.points.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <li className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-[var(--bf-line)] py-6 md:grid-cols-[4rem_1fr_1.4fr] md:items-end md:gap-x-8">
                  <span className="bf-num bf-meta text-[var(--bf-accent)]">
                    {item.num}
                  </span>
                  <h3 className="bf-display text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--bf-text)]">
                    {item.title}
                  </h3>
                  <p className="col-span-2 mt-2 max-w-[36ch] text-[0.95rem] text-[var(--bf-text-mute)] md:col-span-1 md:mt-0 md:justify-self-end md:text-right">
                    {item.note}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <FloatingMarks tone="light" density="section" />
        <div className="bf-shell relative z-[2] bf-section grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <PhotoFrame
              label={images.fitnessCommunity.label}
              src={images.fitnessCommunity.src}
              tone="fitness"
              aspect="aspect-[16/10]"
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="bf-meta text-[var(--bf-accent)]">First session</p>
            <h2 className="bf-display mt-3 text-[clamp(2rem,5vw,3.25rem)] text-[var(--bf-text)]">
              Start with a consult.
            </h2>
            <p className="bf-lede mt-5">{personalTraining.firstSession}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`${contact.whatsappUrl}?text=${waText}`} external>
                WhatsApp PT
              </Button>
              <Button href={contact.phoneHref} variant="ghost">
                Call {contact.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
