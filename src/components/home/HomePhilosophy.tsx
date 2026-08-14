import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { Reveal } from "@/components/ui/Reveal";

const pillars = ["Discipline", "Strength", "Skill", "Progression"] as const;

export function HomePhilosophy() {
  return (
    <section
      className="relative overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]"
      aria-labelledby="home-philosophy"
    >
      <FloatingMarks tone="light" density="section" />
      <div className="bf-shell relative z-[2] bf-section">
        <Reveal>
          <p className="bf-index mb-3 md:mb-4">
            <span className="bf-index__num">03</span>
            <span className="mx-2 opacity-40">/</span>
            The standard
          </p>
          <h2
            id="home-philosophy"
            className="bf-display-lg max-w-[14ch] text-[var(--bf-text)]"
          >
            Beyond appearance.
          </h2>
          <p className="bf-lede mt-4 md:mt-6 md:max-w-[34ch]">
            Training is discipline, strength, skill, and consistency.
          </p>
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-[var(--bf-line)] pt-6 md:mt-12 md:flex md:flex-wrap md:gap-x-6 md:gap-y-3 md:pt-8">
          {pillars.map((item, i) => (
            <Reveal key={item} delay={0.04 * i}>
              <li className="flex items-baseline gap-2 md:gap-3">
                <span className="bf-num bf-meta text-[var(--bf-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="bf-display text-[clamp(1.25rem,4vw,2rem)] text-[var(--bf-text)]">
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
