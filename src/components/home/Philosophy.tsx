import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { num: "01", label: "Discipline" },
  { num: "02", label: "Strength" },
  { num: "03", label: "Skill" },
  { num: "04", label: "Consistency" },
  { num: "05", label: "Progression" },
] as const;

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-void)]"
      aria-labelledby="philosophy-heading"
    >
      <div className="bf-grain opacity-[0.04]" aria-hidden />

      <div className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">03</span>
            <span className="mx-2 text-[var(--bf-faint)]">/</span>
            The standard
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal className="lg:col-span-8" delay={0.05}>
            <h2
              id="philosophy-heading"
              className="bf-display-lg max-w-[14ch] text-[var(--bf-bone)]"
            >
              Beyond appearance.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={0.12}>
            <p className="bf-lede lg:ml-auto">
              Training is not a look. It is discipline, strength, skill,
              consistency, and progression — practised daily.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-14 md:mt-20">
          <p
            className="bf-display select-none text-[clamp(3.5rem,14vw,11rem)] leading-[0.85] tracking-[-0.04em] text-transparent"
            style={{ WebkitTextStroke: "1px rgba(243,241,236,0.18)" }}
            aria-hidden
          >
            Beyond
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 border-t border-[var(--bf-line)] md:mt-14 md:grid-cols-5">
          {pillars.map((item, i) => (
            <Reveal key={item.label} delay={0.04 * i}>
              <li className="flex min-h-[7.5rem] flex-col justify-between border-b border-[var(--bf-line)] py-5 pr-4 max-md:odd:border-r md:border-b-0 md:border-r md:px-5 md:last:border-r-0 md:first:pl-0">
                <span className="bf-num bf-meta text-[var(--bf-accent)]">
                  {item.num}
                </span>
                <span className="bf-display text-[clamp(1.35rem,2.5vw,1.85rem)] text-[var(--bf-bone)]">
                  {item.label}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
