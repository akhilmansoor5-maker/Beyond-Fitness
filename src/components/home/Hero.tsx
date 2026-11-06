"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { brand, images } from "@/content/site";
import { dur, easeImpact, easeOut, stagger } from "@/lib/motion";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.slow, ease: easeOut },
  },
};

const wordReveal = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.95, ease: easeImpact },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--bf-void)] pt-[var(--bf-nav-h)]"
      aria-label="Beyond Fitness introduction"
    >
      <div className="absolute inset-0 z-0">
        <PhotoFrame
          label={images.homeHero.label}
          src={images.homeHero.src}
          tone="default"
          aspect="absolute inset-0 h-full !aspect-auto"
          priority
          className="h-full [&_img]:scale-105 [&_img]:object-[58%_center] sm:[&_img]:object-[70%_center] md:[&_img]:object-[78%_center]"
        />
        <div
          className="absolute inset-0 max-md:hidden"
          style={{
            background:
              "linear-gradient(115deg, rgba(5,5,5,0.94) 0%, rgba(5,5,5,0.62) 38%, rgba(5,5,5,0.28) 62%, rgba(5,5,5,0.78) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.22) 38%, rgba(5,5,5,0.9) 100%)",
          }}
          aria-hidden
        />
        <div className="bf-grain opacity-[0.18] max-md:opacity-[0.1]" aria-hidden />
      </div>

      <div className="bf-shell relative z-10 flex min-h-[82svh] flex-col justify-end gap-10 py-9 md:min-h-[calc(100svh-var(--bf-nav-h))] md:justify-between md:gap-12 md:py-12">
        <motion.div
          className="max-w-5xl"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={stagger}
        >
          <motion.p
            variants={fade}
            className="bf-meta mb-5 text-[var(--bf-accent)]"
          >
            Manjeri · Kerala · UA Mall
          </motion.p>

          <h1 className="sr-only">Beyond Fitness Manjeri</h1>

          <div className="overflow-hidden">
            <motion.p
              className="bf-hero-word text-[clamp(3.4rem,15vw,9.5rem)] text-[var(--bf-bone)]"
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={wordReveal}
              aria-hidden
            >
              Beyond
            </motion.p>
          </div>
          <div className="mt-1 overflow-hidden md:mt-2">
            <motion.p
              className="bf-hero-word text-[clamp(2.1rem,9vw,5.5rem)] text-[var(--bf-accent)]"
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={{
                ...wordReveal,
                show: {
                  ...wordReveal.show,
                  transition: { duration: 0.95, delay: 0.12, ease: easeImpact },
                },
              }}
              aria-hidden
            >
              Fitness
            </motion.p>
          </div>

          <motion.p
            variants={fade}
            className="mt-5 max-w-[28ch] text-[clamp(1rem,2.4vw,1.35rem)] font-medium leading-snug tracking-[-0.01em] text-[var(--bf-bone-dim)] md:mt-6"
          >
            {brand.tagline}
          </motion.p>

          <motion.p
            variants={fade}
            className="mt-3 hidden max-w-[42ch] text-[1rem] leading-relaxed text-[var(--bf-mute)] md:block"
          >
            Strength, skill, and discipline — fitness and Astra under one
            training culture in Manjeri.
          </motion.p>

          <motion.div className="bf-hero-ctas bf-on-void mt-8 md:mt-10" variants={fade}>
            <Button href="/start-training">Start training</Button>
            <Button href="/membership" variant="ghost">
              View plans
            </Button>
            <Button href="/personal-training" variant="ghost">
              Personal training
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-5 border-t border-[rgba(244,244,241,0.14)] pt-5 sm:flex-row sm:items-end sm:justify-between"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: dur.slow, ease: easeOut }}
        >
          <div className="flex gap-8 md:gap-12">
            <Link href="/fitness" className="group">
              <p className="bf-meta text-[var(--bf-accent)]">Arena A</p>
              <p className="bf-display mt-1 text-[1.35rem] text-[var(--bf-bone)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--bf-accent)] md:text-[1.75rem]">
                Fitness
              </p>
            </Link>
            <Link href="/astra" className="group">
              <p className="bf-meta text-[var(--bf-accent)]">Arena B</p>
              <p className="bf-display mt-1 text-[1.35rem] text-[var(--bf-bone)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--bf-accent)] md:text-[1.75rem]">
                Astra
              </p>
            </Link>
          </div>
          <p className="bf-meta text-[var(--bf-mute)]">
            Scroll to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
}
