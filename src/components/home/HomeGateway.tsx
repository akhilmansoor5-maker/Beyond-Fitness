import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { astra, images } from "@/content/site";

export function HomeGateway() {
  const astraHref = astra.externalUrl ?? astra.href;
  const astraExternal = Boolean(astra.externalUrl);

  const arenas = [
    {
      key: "fitness",
      href: "/fitness",
      external: false,
      label: "Arena A",
      title: "Fitness",
      meta: "Strength · PT · Conditioning",
      image: images.homeFitness,
      tone: "fitness" as const,
    },
    {
      key: "astra",
      href: astraHref,
      external: astraExternal,
      label: "Arena B",
      title: astra.name,
      meta: "Combat · Skill · Discipline",
      image: images.homeCombat,
      tone: "combat" as const,
    },
  ];

  return (
    <section
      id="enter"
      className="bf-theme-dark border-t border-[rgba(244,244,241,0.1)] bg-[var(--bf-void)] text-[var(--bf-bone)]"
      aria-labelledby="enter-heading"
    >
      <div className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">03</span>
            <span className="mx-2 opacity-40">/</span>
            Arenas
          </p>
          <h2 id="enter-heading" className="bf-display-lg max-w-[12ch]">
            Two arenas.
            <br />
            One standard.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-4">
          {arenas.map((arena, i) => (
            <Reveal key={arena.key} delay={0.06 * i}>
              <Link
                href={arena.href}
                {...(arena.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative block overflow-hidden"
              >
                <div className="bf-arena-tile overflow-hidden">
                  <PhotoFrame
                    label={arena.image.label}
                    src={arena.image.src}
                    tone={arena.tone}
                    aspect="aspect-[4/5] sm:aspect-[16/11]"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.94)] via-[rgba(5,5,5,0.28)] to-transparent transition-opacity duration-500 group-hover:from-[rgba(5,5,5,0.98)]"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="bf-meta text-[var(--bf-accent)]">
                        {arena.label}
                      </p>
                      <p className="bf-display mt-1 text-[clamp(2rem,6vw,3.5rem)] text-[var(--bf-bone)] transition-transform duration-500 group-hover:translate-x-1">
                        {arena.title}
                      </p>
                      <p className="bf-meta mt-2 text-[var(--bf-mute)]">
                        {arena.meta}
                      </p>
                    </div>
                    <span className="bf-meta text-[var(--bf-bone)] opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      Enter →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="bf-on-void mt-8 flex flex-col gap-2.5 sm:flex-row md:mt-10">
            <Button href="/start-training" className="justify-center">
              Start training
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
  );
}
