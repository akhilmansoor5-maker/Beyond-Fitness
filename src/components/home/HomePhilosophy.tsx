import { Reveal } from "@/components/ui/Reveal";

const pillars = ["Discipline", "Strength", "Skill", "Progression"] as const;

export function HomePhilosophy() {
  return (
    <section
      className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]"
      aria-labelledby="home-philosophy"
    >
      <div className="bf-shell bf-section">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="bf-index mb-3">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Standard
            </p>
            <h2
              id="home-philosophy"
              className="bf-display-lg text-[var(--bf-text)]"
            >
              Beyond appearance.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7 lg:pt-10">
            <p className="bf-lede !max-w-[42ch]">
              Training is discipline, strength, skill, and consistency — a
              culture that holds both fitness and combat under one standard.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[var(--bf-line)] pt-6 md:grid-cols-4 md:gap-6">
              {pillars.map((item, i) => (
                <li key={item}>
                  <p className="bf-num bf-meta text-[var(--bf-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="bf-display mt-2 text-[clamp(1.15rem,2.8vw,1.65rem)] text-[var(--bf-text)]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
