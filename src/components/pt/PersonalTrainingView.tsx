import { Button } from "@/components/ui/Button";
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
      <section className="bf-theme-dark relative overflow-hidden bg-[var(--bf-void)] text-[var(--bf-bone)]">
        <div className="absolute inset-0 opacity-40">
          <PhotoFrame
            label={images.ptHero.label}
            src={images.ptHero.src}
            tone="fitness"
            aspect="absolute inset-0 h-full !aspect-auto"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.94)] via-[rgba(5,5,5,0.75)] to-[rgba(5,5,5,0.35)]" />
        <div className="bf-shell relative z-[2] bf-section">
          <Reveal>
            <p className="bf-index mb-3">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Personal training
            </p>
            <h1 className="bf-display-lg">
              {personalTraining.headline.split(". ")[0]}.
              <br />
              {personalTraining.headline.split(". ").slice(1).join(". ")}
            </h1>
            <p className="bf-lede mt-4 !text-[var(--bf-mute)] md:mt-5">
              {personalTraining.lede}
            </p>
            <div className="bf-on-void mt-6 flex flex-col gap-2.5 sm:flex-row md:mt-8">
              <Button
                href={`${contact.whatsappUrl}?text=${waText}`}
                external
                className="justify-center"
              >
                Book PT consult
              </Button>
              <Button
                href="/membership"
                variant="ghost"
                className="justify-center"
              >
                View plans
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-3">
              <span className="bf-index__num">02</span>
              <span className="mx-2 opacity-40">/</span>
              Packages
            </p>
            <h2 className="bf-display text-[clamp(1.75rem,5vw,3rem)] text-[var(--bf-text)]">
              PT pricing
            </h2>
          </Reveal>

          <ol className="mt-6 border-t border-[var(--bf-line)]">
            {personalTraining.packages.map((pkg, i) => (
              <Reveal key={pkg.title} delay={0.03 * i}>
                <li className="bf-price-row">
                  <span className="bf-num bf-meta text-[var(--bf-accent)]">
                    {pkg.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="bf-display text-[clamp(1.25rem,4vw,2rem)] text-[var(--bf-text)]">
                      {pkg.title}
                    </h3>
                    <p className="mt-1 text-[0.85rem] text-[var(--bf-text-mute)]">
                      {pkg.note}
                    </p>
                  </div>
                  <p className="bf-display text-[clamp(1.25rem,4vw,2rem)] text-[var(--bf-text)]">
                    {pkg.priceDisplay}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          {offer.active && (
            <div className="mt-6 md:mt-8">
              <OfferBanner compact />
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-3">
              <span className="bf-index__num">03</span>
              <span className="mx-2 opacity-40">/</span>
              The standard
            </p>
            <h2 className="bf-display text-[clamp(1.75rem,5vw,3.25rem)] text-[var(--bf-text)]">
              What PT looks like here.
            </h2>
          </Reveal>

          <ol className="mt-6 border-t border-[var(--bf-line)] md:mt-8">
            {personalTraining.points.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <li className="grid grid-cols-[auto_1fr] gap-x-3 border-b border-[var(--bf-line)] py-4 md:grid-cols-[4rem_1fr_1.4fr] md:items-end md:gap-x-8 md:py-5">
                  <span className="bf-num bf-meta text-[var(--bf-accent)]">
                    {item.num}
                  </span>
                  <h3 className="bf-display text-[clamp(1.25rem,4vw,2.25rem)] text-[var(--bf-text)]">
                    {item.title}
                  </h3>
                  <p className="col-span-2 mt-1.5 max-w-[36ch] text-[0.875rem] text-[var(--bf-text-mute)] md:col-span-1 md:mt-0 md:justify-self-end md:text-right">
                    {item.note}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <div className="bf-shell bf-section grid gap-8 lg:grid-cols-12 lg:items-center">
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
            <h2 className="bf-display mt-2 text-[clamp(1.75rem,5vw,3rem)] text-[var(--bf-text)]">
              Start with a consult.
            </h2>
            <p className="bf-lede mt-4">{personalTraining.firstSession}</p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <Button
                href={`${contact.whatsappUrl}?text=${waText}`}
                external
                className="justify-center"
              >
                WhatsApp PT
              </Button>
              <Button
                href={contact.phoneHref}
                variant="ghost"
                className="justify-center"
              >
                Call {contact.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
