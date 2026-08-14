import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { astra, fitnessSystem, images } from "@/content/site";

export function FitnessView() {
  return (
    <main className="pt-[var(--bf-nav-h)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <PhotoFrame
            label={images.fitnessHero.label}
            src={images.fitnessHero.src}
            tone="fitness"
            aspect="absolute inset-0 h-full !aspect-auto"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bf-page)] via-[rgba(243,241,236,0.92)] to-[rgba(243,241,236,0.55)]" />
        <FloatingMarks tone="light" density="section" />
        <div className="bf-shell relative z-[2] bf-section">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Arena A · Fitness
            </p>
            <h1 className="bf-display-lg text-[var(--bf-text)]">
              Power.
              <br />
              Structure.
            </h1>
            <p className="bf-lede mt-6">
              Strength, cardio, personal training, and guided fitness — a proper
              training floor for people who want a standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <FloatingMarks tone="light" density="section" />
        <div className="bf-shell relative z-[2] bf-section">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-5">
              <p className="bf-index mb-4">
                <span className="bf-index__num">02</span>
                <span className="mx-2 opacity-40">/</span>
                The training
              </p>
              <h2 className="bf-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--bf-text)]">
                What you can train here.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7">
              <PhotoFrame
                label={images.fitnessCommunity.label}
                src={images.fitnessCommunity.src}
                tone="community"
                aspect="aspect-[16/10]"
              />
            </Reveal>
          </div>

          <ol className="mt-12 border-t border-[var(--bf-line)]">
            {fitnessSystem.map((item, i) => (
              <Reveal key={item.title} delay={0.03 * i}>
                <li className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-[var(--bf-line)] py-6 md:grid-cols-[4rem_1fr_1.2fr] md:items-end md:gap-x-8">
                  <span className="bf-num bf-meta text-[var(--bf-accent)]">
                    {item.num}
                  </span>
                  <h3 className="bf-display text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--bf-text)]">
                    {item.title}
                  </h3>
                  <p className="col-span-2 mt-2 max-w-[32ch] text-[0.95rem] text-[var(--bf-text-mute)] md:col-span-1 md:mt-0 md:justify-self-end md:text-right">
                    {item.note}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Personal Training — conversion path */}
      <section
        id="personal-training"
        className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]"
      >
        <div className="bf-shell bf-section grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <PhotoFrame
              label={images.ptHero.label}
              src={images.ptHero.src}
              tone="fitness"
              aspect="aspect-[4/5] max-lg:aspect-[16/11]"
            />
          </Reveal>
          <Reveal delay={0.08} className="order-1 lg:order-2 lg:col-span-6">
            <p className="bf-index mb-4">
              <span className="bf-index__num">03</span>
              <span className="mx-2 opacity-40">/</span>
              Personal training
            </p>
            <h2 className="bf-display-lg text-[var(--bf-text)]">
              One-to-one.
              <br />
              Clear coaching.
            </h2>
            <ul className="mt-8 space-y-4 border-t border-[var(--bf-line)] pt-6">
              {["One-to-one", "Individual approach", "Coaching", "Progression"].map(
                (item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline justify-between gap-4 border-b border-[var(--bf-line)] pb-4"
                  >
                    <span className="bf-display text-[clamp(1.5rem,3vw,2rem)] text-[var(--bf-text)]">
                      {item}
                    </span>
                    <span className="bf-num bf-meta text-[var(--bf-accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ),
              )}
            </ul>
            <p className="bf-lede mt-6">
              Personal training is available at Beyond Fitness. Trainer profiles,
              packages and pricing — confirmed with the client later.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/personal-training">Explore personal training</Button>
              <Button href="/start-training" variant="ghost">
                Book via WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)]">
        <div className="grid md:grid-cols-2">
          <PhotoFrame
            label={images.fitnessDetail.label}
            src={images.fitnessDetail.src}
            tone="detail"
            aspect="aspect-[4/3] md:aspect-[16/11]"
            className="border-b border-[var(--bf-line)] md:border-b-0 md:border-r"
          />
          <div className="bf-theme-dark flex flex-col justify-end bg-[var(--bf-void)] p-8 text-[var(--bf-bone)] md:p-12">
            <p className="bf-meta text-[var(--bf-accent)]">Also explore</p>
            <p className="bf-display mt-3 text-[clamp(2rem,5vw,3.5rem)]">
              {astra.name}
            </p>
            <p className="mt-4 max-w-[28ch] text-[var(--bf-mute)]">{astra.blurb}</p>
            <Link
              href={astra.href}
              className="bf-link mt-8 text-[var(--bf-bone)]"
            >
              Explore Astra →
            </Link>
          </div>
        </div>
      </section>

      <section className="bf-theme-dark border-t border-[var(--bf-line)] bg-[var(--bf-void)] text-[var(--bf-bone)]">
        <div className="bf-shell bf-section flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="bf-meta text-[var(--bf-accent)]">Next</p>
            <h2 className="bf-display mt-3 text-[clamp(2rem,5vw,3.5rem)]">
              Start training
            </h2>
          </div>
          <Button href="/start-training">Start your journey</Button>
        </div>
      </section>
    </main>
  );
}
