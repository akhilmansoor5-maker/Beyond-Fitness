"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { brand, images } from "@/content/site";
import { clipReveal, dur, easeOut, stagger } from "@/lib/motion";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.slow, ease: easeOut },
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
          className="h-full [&_img]:scale-105 [&_img]:object-[62%_center] md:[&_img]:object-[78%_center]"
        />
        <div
          className="absolute inset-0 max-md:hidden"
          style={{
            background:
              "linear-gradient(105deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.55) 42%, rgba(5,5,5,0.25) 68%, rgba(5,5,5,0.7) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.2) 35%, rgba(5,5,5,0.88) 100%)",
          }}
          aria-hidden
        />
        <div className="bf-grain opacity-[0.22] max-md:opacity-[0.12]" aria-hidden />
      </div>

      <div className="bf-shell relative z-10 flex min-h-[78svh] flex-col justify-end py-8 md:min-h-[calc(100svh-var(--bf-nav-h))] md:justify-between md:py-10 lg:pb-12">
        <motion.div
          className="max-w-4xl"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={stagger}
        >
          <motion.p
            variants={fade}
            className="bf-meta mb-4 text-[var(--bf-accent)] md:mb-6"
          >
            {brand.location}
          </motion.p>

          <h1 className="sr-only">Beyond Fitness Manjeri</h1>

          <motion.div
            className="overflow-hidden"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={clipReveal}
          >
            <p
              className="bf-display-hero text-[var(--bf-bone)]"
              aria-hidden
            >
              Beyond
            </p>
          </motion.div>

          <motion.p
            variants={fade}
            className="bf-display mt-3 max-w-[16ch] text-[clamp(1.15rem,3.5vw,2rem)] text-[var(--bf-bone-dim)] md:mt-4"
          >
            {brand.tagline}
          </motion.p>

          <motion.p
            variants={fade}
            className="mt-4 hidden max-w-[40ch] text-[1.05rem] leading-relaxed text-[var(--bf-mute)] md:block"
          >
            A training culture for body, skill, and discipline — fitness and
            Astra under one standard.
          </motion.p>

          <motion.div className="bf-hero-ctas mt-7 md:mt-9" variants={fade}>
            <Button href="/start-training">Start training</Button>
            <Button href="/membership" variant="ghost">
              View plans
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 flex items-end justify-between gap-6 border-t border-[rgba(244,244,241,0.14)] pt-5 md:mt-0"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: dur.slow, ease: easeOut }}
        >
          <div className="flex gap-8 md:gap-14">
            <Link href="/fitness" className="group">
              <p className="bf-meta text-[var(--bf-accent)]">Arena A</p>
              <p className="bf-display mt-1 text-[1.25rem] text-[var(--bf-bone)] transition-colors group-hover:text-[var(--bf-accent)] md:text-[1.65rem]">
                Fitness
              </p>
            </Link>
            <Link href="/astra" className="group">
              <p className="bf-meta text-[var(--bf-accent)]">Arena B</p>
              <p className="bf-display mt-1 text-[1.25rem] text-[var(--bf-bone)] transition-colors group-hover:text-[var(--bf-accent)] md:text-[1.65rem]">
                Astra
              </p>
            </Link>
          </div>
          <p className="hidden bf-meta text-[var(--bf-mute)] sm:block">
            Scroll
          </p>
        </motion.div>
      </div>
    </section>
  );
}
