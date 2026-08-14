import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { astra, images } from "@/content/site";

/** Homepage gateway — two arenas only: Fitness + Astra */
export function HomeGateway() {
  const astraHref = astra.externalUrl ?? astra.href;
  const astraExternal = Boolean(astra.externalUrl);

  return (
    <section
      id="enter"
      className="relative overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-page)]"
      aria-labelledby="enter-heading"
    >
      <FloatingMarks tone="light" density="section" />
      <div className="bf-shell relative z-[2] bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">02</span>
            <span className="mx-2 opacity-40">/</span>
            Enter the world
          </p>
          <h2
            id="enter-heading"
            className="bf-display-lg max-w-[12ch] text-[var(--bf-text)]"
          >
            Two arenas.
            <br />
            One standard.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-[var(--bf-line)] md:grid-cols-2">
          <Reveal>
            <Link
              href="/fitness"
              className="group flex h-full flex-col justify-between bg-[var(--bf-page)] p-6 transition-colors hover:bg-[var(--bf-page-alt)] md:min-h-[22rem] md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="bf-meta text-[var(--bf-accent)]">Arena A</span>
                <span className="bf-meta opacity-60 group-hover:text-[var(--bf-accent)]">
                  Train fitness →
                </span>
              </div>
              <div className="mt-8">
                <p className="bf-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--bf-text)]">
                  Fitness
                </p>
                <p className="bf-meta mt-3">
                  Strength · PT · Conditioning
                </p>
              </div>
              <div className="mt-8">
                <PhotoFrame
                  label={images.homeFitness.label}
                  src={images.homeFitness.src}
                  tone="fitness"
                  aspect="aspect-[16/10]"
                />
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <Link
              href={astraHref}
              {...(astraExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex h-full flex-col justify-between bg-[var(--bf-void)] p-6 text-[var(--bf-bone)] transition-colors hover:bg-[#0c0a0b] md:min-h-[22rem] md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="bf-meta text-[var(--bf-accent)]">Arena B</span>
                <span className="bf-meta text-[var(--bf-mute)] group-hover:text-[var(--bf-accent)]">
                  Explore Astra →
                </span>
              </div>
              <div className="mt-8">
                <p className="bf-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--bf-bone)]">
                  {astra.name}
                </p>
                <p className="bf-meta mt-3 text-[var(--bf-mute)]">
                  Combat sport · Skill · Discipline
                </p>
              </div>
              <div className="mt-8">
                <PhotoFrame
                  label={images.homeCombat.label}
                  src={images.homeCombat.src}
                  tone="combat"
                  aspect="aspect-[16/10]"
                />
              </div>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button href="/arenas" className="w-full justify-center sm:w-auto">
              Explore the arenas
            </Button>
            <Button
              href="/start-training"
              variant="ghost"
              className="w-full justify-center sm:w-auto"
            >
              Start training
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
