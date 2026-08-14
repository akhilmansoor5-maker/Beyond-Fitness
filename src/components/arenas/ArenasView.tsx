import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { astra, images } from "@/content/site";

export function ArenasView() {
  const astraHref = astra.externalUrl ?? astra.href;
  const astraExternal = Boolean(astra.externalUrl);

  return (
    <main className="pt-[var(--bf-nav-h)]">
      <section className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">01</span>
            <span className="mx-2 opacity-40">/</span>
            Arenas
          </p>
          <h1 className="bf-display-lg max-w-[14ch] text-[var(--bf-text)]">
            Two arenas.
            <br />
            One standard.
          </h1>
          <p className="bf-lede mt-6">
            Fitness for the body. Astra for the skill. One training culture.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <PhotoFrame
            label={images.arenasHero.label}
            src={images.arenasHero.src}
            tone="default"
            aspect="aspect-[21/9] max-md:aspect-[16/10]"
            priority
          />
        </Reveal>
      </section>

      <section className="border-t border-[var(--bf-line)]">
        <div className="grid md:grid-cols-2">
          <Link
            href="/fitness"
            className="group relative min-h-[70vw] overflow-hidden border-b border-[var(--bf-line)] md:min-h-[32rem] md:border-b-0 md:border-r"
          >
            <div className="absolute inset-0">
              <PhotoFrame
                label={images.fitnessHero.label}
                src={images.fitnessHero.src}
                tone="fitness"
                aspect="absolute inset-0 h-full !aspect-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(243,241,236,0.95)] via-[rgba(243,241,236,0.35)] to-transparent" />
            <div className="relative z-10 flex h-full min-h-[70vw] flex-col justify-end p-6 md:min-h-[32rem] md:p-10">
              <p className="bf-meta text-[var(--bf-accent)]">Arena A</p>
              <h2 className="bf-display mt-2 text-[clamp(3rem,8vw,5.5rem)] text-[var(--bf-text)]">
                Fitness
              </h2>
              <p className="mt-3 max-w-[28ch] text-[var(--bf-text-mute)]">
                Strength · Cardio · Personal training · Nutrition
              </p>
              <p className="bf-meta mt-6 text-[var(--bf-accent)]">
                Enter fitness →
              </p>
            </div>
          </Link>

          <Link
            href={astraHref}
            {...(astraExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group relative min-h-[70vw] overflow-hidden bg-[var(--bf-void)] md:min-h-[32rem]"
          >
            <div className="absolute inset-0">
              <PhotoFrame
                label={images.astraHero.label}
                src={images.astraHero.src}
                tone="combat"
                aspect="absolute inset-0 h-full !aspect-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,7,7,0.95)] via-[rgba(7,7,7,0.4)] to-transparent" />
            <div className="relative z-10 flex h-full min-h-[70vw] flex-col justify-end p-6 md:min-h-[32rem] md:p-10">
              <p className="bf-meta text-[var(--bf-accent)]">Arena B</p>
              <h2 className="bf-display mt-2 text-[clamp(3rem,8vw,5.5rem)] text-[var(--bf-bone)]">
                {astra.name}
              </h2>
              <p className="mt-3 max-w-[28ch] text-[var(--bf-mute)]">
                Combat sport · Fencing · Kickboxing · Martial arts
              </p>
              <p className="bf-meta mt-6 text-[var(--bf-accent)]">
                Explore Astra →
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="bf-shell bf-section">
        <Reveal>
          <p className="bf-display text-[clamp(1.75rem,4vw,3rem)] text-[var(--bf-text)]">
            Not two businesses.
            <br />
            One training culture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/start-training">Start training</Button>
            <Button href="/combat" variant="ghost">
              View combat disciplines
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
