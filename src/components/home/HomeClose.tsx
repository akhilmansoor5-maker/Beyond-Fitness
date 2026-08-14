import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { Reveal } from "@/components/ui/Reveal";

export function HomeClose() {
  return (
    <section
      className="relative overflow-hidden border-t border-[var(--bf-line)] bf-theme-dark bg-[var(--bf-void)] text-[var(--bf-bone)]"
      aria-labelledby="home-close"
    >
      <div className="bf-grain opacity-[0.05]" aria-hidden />
      <FloatingMarks tone="dark" density="section" />
      <div className="bf-shell relative z-[2] bf-section text-center">
        <Reveal>
          <p className="bf-meta mb-4 text-[var(--bf-accent)] md:mb-6">Begin</p>
          <p
            className="bf-display text-[var(--bf-bone)]"
            style={{ fontSize: "clamp(3rem, 14vw, 10rem)", lineHeight: 0.86 }}
          >
            Beyond
          </p>
          <h2
            id="home-close"
            className="bf-display mt-3 text-[clamp(1.15rem,3.5vw,2.25rem)] text-[var(--bf-bone-dim)] md:mt-4"
          >
            Two arenas. One standard.
          </h2>
          <p className="mx-auto mt-4 hidden max-w-[34ch] text-[var(--bf-mute)] md:mt-5 md:block">
            Enter the training culture. Choose your arena — or start a
            conversation.
          </p>
          <div className="bf-on-void mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:mt-10">
            <Button href="/start-training" className="justify-center">
              Start your journey
            </Button>
            <Button href="/visit" variant="ghost" className="justify-center">
              Visit
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
