import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { astra, combatDisciplines, combatDivision, images } from "@/content/site";

export function CombatView() {
  return (
    <main className="pt-[var(--bf-nav-h)] text-[var(--bf-text)]">
      <section className="relative min-h-[70vh] overflow-hidden border-b border-[var(--bf-line)]">
        <div className="absolute inset-0">
          <PhotoFrame
            label={images.combatHero.label}
            src={images.combatHero.src}
            tone="combat"
            aspect="absolute inset-0 h-full !aspect-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.92)] via-[rgba(5,5,5,0.7)] to-[rgba(5,5,5,0.35)]" />
        </div>
        <FloatingMarks tone="dark" density="section" />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.1] lg:block"
          style={{
            background:
              "repeating-linear-gradient(-18deg, transparent, transparent 48px, rgba(243,241,236,0.5) 48px, rgba(243,241,236,0.5) 49px)",
          }}
          aria-hidden
        />
        <div className="bf-shell relative z-[2] flex min-h-[70vh] flex-col justify-end bf-section">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Arena B · {combatDivision.label}
            </p>
            <h1 className="bf-display-lg">
              Speed.
              <br />
              Precision.
            </h1>
            <p className="bf-lede mt-6 !text-[var(--bf-mute)]">
              Fencing, kickboxing, boxing, taekwondo, and martial arts — skill
              with purpose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bf-shell bf-section">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="bf-index mb-4">
              <span className="bf-index__num">02</span>
              <span className="mx-2 opacity-40">/</span>
              Disciplines
            </p>
            <h2 className="bf-display text-[clamp(2rem,5vw,3.5rem)]">
              Train the skill.
            </h2>
            <p className="bf-lede mt-5">
              What the combat arena offers. Items marked for confirmation stay
              editable until the client locks the full list.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <PhotoFrame
              label={images.combatDetail.label}
              src={images.combatDetail.src}
              tone="combat"
              aspect="aspect-[16/11]"
            />
          </Reveal>
        </div>

        <div className="mt-12 border-t border-[var(--bf-line)]">
          {combatDisciplines.map((item, i) => (
            <Reveal key={item.title} delay={0.03 * i}>
              <div
                className={`flex items-baseline justify-between gap-4 border-b border-[var(--bf-line)] py-5 ${
                  i % 2 === 0 ? "md:pr-[10%]" : "md:pl-[10%]"
                }`}
              >
                <div className="flex min-w-0 items-baseline gap-4 md:gap-6">
                  <span className="bf-num bf-meta text-[var(--bf-accent)]">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="bf-display text-[clamp(1.85rem,5vw,3.25rem)]">
                      {item.title}
                    </h3>
                    {!item.confirmed && (
                      <p className="bf-meta mt-1 opacity-60">
                        Confirm with client
                      </p>
                    )}
                  </div>
                </div>
                <span className="bf-meta shrink-0">{item.cue}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <div className="bf-shell bf-section grid gap-8 md:grid-cols-4">
          {["Speed", "Precision", "Reaction", "Discipline"].map((word, i) => (
            <Reveal key={word} delay={0.05 * i}>
              <p className="bf-num bf-meta text-[var(--bf-accent)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="bf-display mt-3 text-[clamp(1.75rem,3vw,2.5rem)]">
                {word}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Astra gateway */}
      <section className="relative overflow-hidden border-t border-[var(--bf-line)]">
        <div className="absolute inset-0 opacity-40">
          <PhotoFrame
            label={images.astraHero.label}
            src={images.astraHero.src}
            tone="combat"
            aspect="absolute inset-0 h-full !aspect-auto"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(5,5,5,0.82)]" />
        <div className="bf-shell relative bf-section">
          <Reveal>
            <p className="bf-meta text-[var(--bf-accent)]">Beyond this arena</p>
            <h2 className="bf-display-lg mt-3 text-[var(--bf-bone)]">
              {astra.name}
            </h2>
            <p className="mt-5 max-w-[36ch] text-[1.05rem] text-[var(--bf-mute)]">
              {astra.blurb}
            </p>
            <div className="mt-8">
              <Link
                href={astra.href}
                className="bf-btn bf-btn--primary inline-flex"
              >
                <span className="bf-btn__mark" aria-hidden />
                Explore Astra
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bf-shell bf-section flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="bf-meta text-[var(--bf-accent)]">Next</p>
          <h2 className="bf-display mt-3 text-[clamp(2rem,5vw,3.5rem)]">
            Start training
          </h2>
        </div>
        <Button href="/start-training">Start your journey</Button>
      </section>
    </main>
  );
}
