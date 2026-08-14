import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function HomeClose() {
  return (
    <section
      className="relative overflow-hidden border-t border-[var(--bf-line)] bf-theme-dark bg-[var(--bf-void)] text-[var(--bf-bone)]"
      aria-labelledby="home-close"
    >
      <div className="bf-grain opacity-[0.05]" aria-hidden />
      <div className="bf-shell bf-section text-center">
        <Reveal>
          <p className="bf-meta mb-6 text-[var(--bf-accent)]">Begin</p>
          <p
            className="bf-display-hero text-[var(--bf-bone)]"
            style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)" }}
          >
            Beyond
          </p>
          <h2
            id="home-close"
            className="bf-display mt-4 text-[clamp(1.35rem,3vw,2.25rem)] text-[var(--bf-bone-dim)]"
          >
            Two arenas. One standard.
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[var(--bf-mute)]">
            Enter the training culture. Choose your arena — or start a
            conversation.
          </p>
          <div className="bf-on-void mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/start-training">Start your journey</Button>
            <Button href="/visit" variant="ghost">
              Visit
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
