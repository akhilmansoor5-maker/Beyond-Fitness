import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";

const disciplines = [
  { num: "01", title: "Fencing", cue: "Precision" },
  { num: "02", title: "Kickboxing", cue: "Impact" },
  { num: "03", title: "Combat Training", cue: "Reaction" },
  { num: "04", title: "Martial Arts", cue: "Control" },
  { num: "05", title: "Sports Training", cue: "Speed" },
] as const;

export function CombatArena() {
  return (
    <section
      id="combat"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-void)]"
      aria-labelledby="combat-heading"
    >
      <div className="bf-grain opacity-[0.05]" aria-hidden />

      {/* Diagonal force field — combat rhythm, not decoration overload */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.07] lg:block"
        style={{
          background:
            "repeating-linear-gradient(-18deg, transparent, transparent 48px, rgba(243,241,236,0.35) 48px, rgba(243,241,236,0.35) 49px)",
        }}
        aria-hidden
      />

      <div className="bf-shell bf-section">
        {/* Threshold bridge from Fitness */}
        <Reveal>
          <div className="mb-12 flex flex-wrap items-center gap-3 border-b border-[var(--bf-line)] pb-6 md:mb-16">
            <span className="bf-meta text-[var(--bf-mute)]">From fitness</span>
            <span className="bf-meta text-[var(--bf-accent)]" aria-hidden>
              →
            </span>
            <span className="bf-meta text-[var(--bf-bone-dim)]">
              Into combat & sport
            </span>
            <span className="ml-auto bf-meta hidden sm:inline">
              Same standard
            </span>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <div className="relative">
                <PhotoFrame
                  label="COMBAT — FENCING / ACTION CROP"
                  tone="combat"
                  aspect="aspect-[16/10]"
                  className="lg:-ml-[8%] lg:w-[108%] lg:aspect-[16/9]"
                />
                {/* Offset detail — speed / precision crop */}
                <div className="absolute -bottom-8 right-0 w-[42%] border border-[var(--bf-line)] shadow-none md:-bottom-12 md:right-8 md:w-[36%]">
                  <PhotoFrame
                    label="COMBAT — DETAIL / GLOVE OR BLADE"
                    tone="detail"
                    aspect="aspect-square"
                  />
                </div>
              </div>
            </Reveal>

            <div className="mt-16 border-t border-[var(--bf-line)] md:mt-24">
              {disciplines.map((item, i) => (
                <Reveal key={item.title} delay={0.04 * i}>
                  <div
                    className={`flex items-baseline justify-between gap-4 border-b border-[var(--bf-line)] py-5 ${
                      i % 2 === 0 ? "md:pr-[12%]" : "md:pl-[12%]"
                    }`}
                  >
                    <div className="flex min-w-0 items-baseline gap-4 md:gap-6">
                      <span className="bf-num bf-meta text-[var(--bf-accent)]">
                        {item.num}
                      </span>
                      <h3 className="bf-display text-[clamp(1.85rem,5vw,3.25rem)] text-[var(--bf-bone)]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="bf-meta shrink-0 text-[var(--bf-mute)]">
                      {item.cue}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 lg:pl-6">
            <Reveal>
              <p className="bf-index mb-4">
                <span className="bf-index__num">05</span>
                <span className="mx-2 text-[var(--bf-faint)]">/</span>
                Arena B · Combat
              </p>
              <h2
                id="combat-heading"
                className="bf-display-lg text-[var(--bf-bone)]"
              >
                Speed.
                <br />
                Precision.
              </h2>
              <p className="bf-lede mt-6">
                The combat arena trains reaction, timing, and skill — movement
                with purpose, not noise.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-10 hidden border-l border-[var(--bf-accent)] pl-5 lg:block">
              <p className="bf-meta mb-3 text-[var(--bf-bone-dim)]">
                Visual rhythm
              </p>
              <p className="max-w-[28ch] text-[0.95rem] leading-relaxed text-[var(--bf-mute)]">
                Diagonal energy. Tighter crops. More air between strikes —
                same type, colour, and standard as the fitness floor.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
