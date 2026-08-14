import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";

const system = [
  {
    num: "01",
    title: "Strength",
    note: "Structured loading. Controlled progression.",
  },
  {
    num: "02",
    title: "Conditioning",
    note: "Work capacity built with intent.",
  },
  {
    num: "03",
    title: "Personal Training",
    note: "Coached sessions. Clear standards.",
  },
  {
    num: "04",
    title: "Nutrition",
    note: "Guidance that supports the work.",
  },
  {
    num: "05",
    title: "General Fitness",
    note: "Foundations for lasting consistency.",
  },
  {
    num: "06",
    title: "Transformation",
    note: "Change measured through process — not slogans.",
  },
] as const;

export function FitnessArena() {
  return (
    <section
      id="fitness"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-ink)]"
      aria-labelledby="fitness-heading"
    >
      <div className="bf-grain opacity-[0.04]" aria-hidden />

      <div className="bf-shell bf-section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="bf-index mb-4">
                <span className="bf-index__num">04</span>
                <span className="mx-2 text-[var(--bf-faint)]">/</span>
                Arena A · Fitness
              </p>
              <h2
                id="fitness-heading"
                className="bf-display-lg text-[var(--bf-bone)]"
              >
                Power.
                <br />
                Structure.
              </h2>
              <p className="bf-lede mt-6">
                The fitness arena is built for strength, conditioning, and
                coached progression — control under load.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 hidden lg:block">
              <PhotoFrame
                label="FITNESS — STRENGTH FLOOR / BAR PATH"
                tone="fitness"
                aspect="aspect-[4/5]"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="mb-8 lg:hidden">
              <PhotoFrame
                label="FITNESS — STRENGTH FLOOR / BAR PATH"
                tone="fitness"
                aspect="aspect-[16/10]"
              />
            </Reveal>

            {/* Training system list — editorial, not cards */}
            <ol className="border-t border-[var(--bf-line)]">
              {system.map((item, i) => (
                <Reveal key={item.title} delay={0.03 * i}>
                  <li className="group grid grid-cols-[auto_1fr] gap-x-5 border-b border-[var(--bf-line)] py-6 md:grid-cols-[4rem_1fr_1.2fr] md:items-end md:gap-x-8 md:py-7">
                    <span className="bf-num bf-meta pt-1 text-[var(--bf-accent)] md:pt-0">
                      {item.num}
                    </span>
                    <div className="col-start-2 md:col-start-auto">
                      <h3 className="bf-display text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--bf-bone)] transition-colors duration-300 group-hover:text-[var(--bf-bone)]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="col-span-2 mt-2 max-w-[32ch] text-[0.95rem] leading-relaxed text-[var(--bf-mute)] md:col-span-1 md:mt-0 md:justify-self-end md:text-right">
                      {item.note}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.1} className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              <PhotoFrame
                label="FITNESS — CONDITIONING DETAIL"
                tone="detail"
                aspect="aspect-square"
              />
              <PhotoFrame
                label="FITNESS — COACHED SESSION"
                tone="fitness"
                aspect="aspect-square"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
