import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { astra, images } from "@/content/site";

/** Homepage gateway — two equal arenas, same layout and tone */
export function HomeGateway() {
  const astraHref = astra.externalUrl ?? astra.href;
  const astraExternal = Boolean(astra.externalUrl);

  const arenas = [
    {
      key: "fitness",
      href: "/fitness",
      external: false,
      index: "Arena A",
      cta: "Train fitness →",
      title: "Fitness",
      meta: "Strength · PT · Conditioning",
      image: images.homeFitness,
      tone: "fitness" as const,
    },
    {
      key: "astra",
      href: astraHref,
      external: astraExternal,
      index: "Arena B",
      cta: "Explore Astra →",
      title: astra.name,
      meta: "Combat sport · Skill · Discipline",
      image: images.homeCombat,
      tone: "combat" as const,
    },
  ];

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

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
          {arenas.map((arena, i) => (
            <Reveal key={arena.key} delay={0.06 * i}>
              <Link
                href={arena.href}
                {...(arena.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col border border-[var(--bf-line)] bg-[var(--bf-page-alt)] p-6 transition-colors hover:border-[var(--bf-accent)] hover:bg-[var(--bf-bone-soft)] md:min-h-[22rem] md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="bf-meta text-[var(--bf-accent)]">
                    {arena.index}
                  </span>
                  <span className="bf-meta text-[var(--bf-text-mute)] group-hover:text-[var(--bf-accent)]">
                    {arena.cta}
                  </span>
                </div>
                <div className="mt-8">
                  <p className="bf-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--bf-text)]">
                    {arena.title}
                  </p>
                  <p className="bf-meta mt-3 text-[var(--bf-text-mute)]">
                    {arena.meta}
                  </p>
                </div>
                <div className="mt-8 grow">
                  <PhotoFrame
                    label={arena.image.label}
                    src={arena.image.src}
                    tone={arena.tone}
                    aspect="aspect-[16/10]"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
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
