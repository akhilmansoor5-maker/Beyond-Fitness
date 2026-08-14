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
      cta: "Train →",
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
      cta: "Explore →",
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
          <p className="bf-index mb-3 md:mb-4">
            <span className="bf-index__num">02</span>
            <span className="mx-2 opacity-40">/</span>
            Enter
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

        <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {arenas.map((arena, i) => (
            <Reveal key={arena.key} delay={0.06 * i}>
              <Link
                href={arena.href}
                {...(arena.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col overflow-hidden border border-[var(--bf-line)] bg-[var(--bf-page-alt)] transition-colors hover:border-[var(--bf-accent)]"
              >
                {/* Image-first on mobile for visual pull */}
                <div className="order-1 md:order-2 md:mt-0">
                  <PhotoFrame
                    label={arena.image.label}
                    src={arena.image.src}
                    tone={arena.tone}
                    aspect="aspect-[16/10] max-md:aspect-[5/4]"
                  />
                </div>
                <div className="order-2 flex flex-col p-5 md:order-1 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="bf-meta text-[var(--bf-accent)]">
                      {arena.index}
                    </span>
                    <span className="bf-meta text-[var(--bf-text-mute)] group-hover:text-[var(--bf-accent)]">
                      {arena.cta}
                    </span>
                  </div>
                  <p className="bf-display mt-4 text-[clamp(2.25rem,8vw,4.5rem)] text-[var(--bf-text)] md:mt-6">
                    {arena.title}
                  </p>
                  <p className="bf-meta mt-2 text-[var(--bf-text-mute)] md:mt-3">
                    {arena.meta}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 md:mt-10">
            <Button href="/start-training" className="w-full justify-center sm:w-auto">
              Start training
            </Button>
            <Button
              href="/arenas"
              variant="ghost"
              className="mt-3 hidden w-full justify-center sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto"
            >
              Explore the arenas
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
