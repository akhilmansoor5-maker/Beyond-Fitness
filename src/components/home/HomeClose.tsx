import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { brand, images } from "@/content/site";

export function HomeClose() {
  return (
    <section
      className="bf-theme-dark relative overflow-hidden border-t border-[rgba(244,244,241,0.1)] bg-[var(--bf-void)] text-[var(--bf-bone)]"
      aria-labelledby="home-close"
    >
      <div className="absolute inset-0 opacity-35">
        <PhotoFrame
          label={images.fitnessCommunity.label}
          src={images.fitnessCommunity.src}
          tone="fitness"
          aspect="absolute inset-0 h-full !aspect-auto"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.96)] via-[rgba(5,5,5,0.82)] to-[rgba(5,5,5,0.7)]" />
      <div className="bf-grain opacity-[0.1]" aria-hidden />

      <div className="bf-shell relative z-[2] bf-section text-center">
        <Reveal>
          <p className="bf-meta mb-5 text-[var(--bf-accent)]">Begin</p>
          <p className="bf-hero-word text-[clamp(3rem,13vw,8rem)] text-[var(--bf-bone)]">
            Beyond
          </p>
          <h2
            id="home-close"
            className="mx-auto mt-3 max-w-[20ch] text-[clamp(1.05rem,2.8vw,1.55rem)] font-medium text-[var(--bf-bone-dim)]"
          >
            {brand.tagline}
          </h2>
          <p className="mx-auto mt-4 max-w-[34ch] text-[0.95rem] text-[var(--bf-mute)]">
            Enter the training culture. Choose your arena — or start a
            conversation today.
          </p>
          <div className="bf-on-void mt-8 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
            <Button href="/start-training" className="justify-center">
              Start your journey
            </Button>
            <Button href="/membership" variant="ghost" className="justify-center">
              View plans
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
