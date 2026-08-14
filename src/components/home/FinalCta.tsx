import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section
      id="start"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-void)]"
      aria-labelledby="start-heading"
    >
      <div className="bf-grain opacity-[0.06]" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(143,31,46,0.35), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="bf-shell relative bf-section text-center">
        <Reveal>
          <p className="bf-index mb-6">
            <span className="bf-index__num">11</span>
            <span className="mx-2 text-[var(--bf-faint)]">/</span>
            Begin
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <p
            className="bf-display-hero mx-auto text-[var(--bf-bone)]"
            style={{ fontSize: "clamp(4rem, 16vw, 12rem)" }}
          >
            Beyond
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="start-heading"
            className="bf-display mt-4 text-[clamp(1.5rem,3.5vw,2.5rem)] tracking-[-0.02em] text-[var(--bf-bone-dim)]"
          >
            Two arenas. One standard.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-[36ch] text-[1.05rem] leading-relaxed text-[var(--bf-mute)]">
            Start your journey — contact details and WhatsApp will connect here
            once confirmed.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {/* WhatsApp / contact URL replaces this placeholder later */}
            <Button href="#start">Start your journey</Button>
            <Button href="#visit" variant="ghost">
              Get directions
            </Button>
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-[var(--bf-line)]">
        <div className="bf-shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="bf-display text-[1.25rem] text-[var(--bf-bone)]">
            Beyond Fitness
          </p>
          <p className="bf-meta">Manjeri · Kerala · India</p>
          <p className="bf-meta text-[var(--bf-mute)]">
            © {new Date().getFullYear()} · Placement only
          </p>
        </div>
      </footer>
    </section>
  );
}
