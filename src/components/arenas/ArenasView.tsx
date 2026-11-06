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
      <section className="bf-theme-dark bg-[var(--bf-void)] text-[var(--bf-bone)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-3">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Arenas
            </p>
            <h1 className="bf-display-lg max-w-[14ch]">
              Two arenas.
              <br />
              One standard.
            </h1>
            <p className="bf-lede mt-4 !text-[var(--bf-mute)] md:mt-5">
              Fitness for the body. Astra for the skill. One training culture.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8 md:mt-10">
            <PhotoFrame
              label={images.arenasHero.label}
              src={images.arenasHero.src}
              tone="default"
              aspect="aspect-[21/9] max-md:aspect-[16/10]"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)]">
        <div className="grid md:grid-cols-2">
          <Link
            href="/fitness"
            className="group relative min-h-[68vw] overflow-hidden border-b border-[var(--bf-line)] md:min-h-[32rem] md:border-b-0 md:border-r"
          >
            <div className="absolute inset-0">
              <PhotoFrame
                label={images.fitnessHero.label}
                src={images.fitnessHero.src}
                tone="fitness"
                aspect="absolute inset-0 h-full !aspect-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(244,244,241,0.96)] via-[rgba(244,244,241,0.35)] to-transparent" />
            <div className="relative z-10 flex h-full min-h-[68vw] flex-col justify-end p-5 md:min-h-[32rem] md:p-10">
              <p className="bf-meta text-[var(--bf-accent)]">Arena A</p>
              <h2 className="bf-display mt-2 text-[clamp(2.5rem,7vw,5rem)] text-[var(--bf-text)]">
                Fitness
              </h2>
              <p className="mt-3 max-w-[28ch] text-[var(--bf-text-mute)]">
                Strength · Cardio · Personal training · Nutrition
              </p>
              <p className="bf-meta mt-5 text-[var(--bf-accent)]">
                Enter fitness →
              </p>
            </div>
          </Link>

          <Link
            href={astraHref}
            {...(astraExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group relative min-h-[68vw] overflow-hidden md:min-h-[32rem]"
          >
            <div className="absolute inset-0">
              <PhotoFrame
                label={images.astraHero.label}
                src={images.astraHero.src}
                tone="combat"
                aspect="absolute inset-0 h-full !aspect-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.92)] via-[rgba(5,5,5,0.35)] to-transparent" />
            <div className="relative z-10 flex h-full min-h-[68vw] flex-col justify-end p-5 md:min-h-[32rem] md:p-10">
              <p className="bf-meta text-[var(--bf-accent)]">Arena B</p>
              <h2 className="bf-display mt-2 text-[clamp(2.5rem,7vw,5rem)] text-[var(--bf-bone)]">
                {astra.name}
              </h2>
              <p className="mt-3 max-w-[28ch] text-[var(--bf-mute)]">
                {astra.blurb}
              </p>
              <p className="bf-meta mt-5 text-[var(--bf-accent)]">
                Enter Astra →
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]">
        <div className="bf-shell bf-section flex flex-col gap-2.5 sm:flex-row">
          <Button href="/start-training" className="justify-center">
            Start training
          </Button>
          <Button href="/combat" variant="ghost" className="justify-center">
            View combat disciplines
          </Button>
        </div>
      </section>
    </main>
  );
}
