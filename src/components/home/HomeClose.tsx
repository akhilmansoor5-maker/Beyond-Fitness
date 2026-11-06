import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/content/site";

export function HomeClose() {
  return (
    <section
      className="bf-theme-dark relative overflow-hidden border-t border-[rgba(244,244,241,0.1)] bg-[var(--bf-void)] text-[var(--bf-bone)]"
      aria-labelledby="home-close"
    >
      <div className="bf-grain opacity-[0.08]" aria-hidden />
      <div className="bf-shell relative z-[2] bf-section text-center">
        <Reveal>
          <p className="bf-meta mb-4 text-[var(--bf-accent)]">Begin</p>
          <p className="bf-display-hero text-[var(--bf-bone)]">Beyond</p>
          <h2
            id="home-close"
            className="bf-display mx-auto mt-3 max-w-[18ch] text-[clamp(1.05rem,3vw,1.75rem)] text-[var(--bf-bone-dim)]"
          >
            {brand.tagline}
          </h2>
          <div className="bf-on-void mt-8 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
            <Button href="/start-training" className="justify-center">
              Start your journey
            </Button>
            <Button href="/membership" variant="ghost" className="justify-center">
              View plans
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
