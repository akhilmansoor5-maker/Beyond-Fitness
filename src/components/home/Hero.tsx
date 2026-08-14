"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { images } from "@/content/site";
import { clipReveal, dur, easeOut, stagger } from "@/lib/motion";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

const fadeMeta = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.slow, ease: easeOut },
  },
};

const cues = [
  { num: "01", label: "Discipline" },
  { num: "02", label: "Strength" },
  { num: "03", label: "Skill" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--bf-void)] pt-[var(--bf-nav-h)]"
      style={{ minHeight: "100svh" }}
      aria-label="Beyond Fitness introduction"
    >
      <div className="bf-grain opacity-[0.35]" aria-hidden />

      <div className="absolute inset-0 z-0">
        <PhotoFrame
          label={images.homeHero.label}
          src={images.homeHero.src}
          tone="default"
          aspect="absolute inset-0 h-full !aspect-auto"
          priority
          className="h-full [&_img]:object-[68%_center] sm:[&_img]:object-[72%_center] md:[&_img]:object-[78%_center]"
        />
        <div
          className="absolute inset-0 max-md:hidden"
          style={{
            background:
              "linear-gradient(105deg, rgba(7,7,7,0.94) 0%, rgba(7,7,7,0.78) 36%, rgba(7,7,7,0.4) 64%, rgba(7,7,7,0.55) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,7,7,0.78) 0%, rgba(7,7,7,0.55) 32%, rgba(7,7,7,0.72) 68%, rgba(7,7,7,0.9) 100%)",
          }}
          aria-hidden
        />
      </div>

      <FloatingMarks tone="dark" density="hero" />

      {/* Top-weighted composition — no empty upper void */}
      <div className="bf-shell relative z-10 flex min-h-[calc(100svh-var(--bf-nav-h))] flex-col justify-between gap-8 py-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:gap-10 lg:py-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={stagger}
          >
            <motion.div
              variants={fadeMeta}
              className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mb-5 sm:gap-x-4"
            >
              <p className="bf-meta" style={{ color: "#c8c4bb" }}>
                <span className="bf-num text-[var(--bf-accent)]">01</span>
                <span className="mx-2" style={{ color: "#3a3936" }}>
                  /
                </span>
                Training house
              </p>
              <span
                className="hidden h-px w-8 bg-[var(--bf-accent)] sm:block"
                aria-hidden
              />
              <p className="bf-meta" style={{ color: "#7a7770" }}>
                Manjeri · Kerala
              </p>
            </motion.div>

            <motion.p
              variants={fadeMeta}
              className="bf-meta mb-2 text-[var(--bf-accent)] sm:mb-3"
            >
              Beyond Fitness
            </motion.p>

            <h1 className="sr-only">Beyond Fitness Manjeri</h1>

            <motion.div
              className="overflow-hidden"
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={clipReveal}
            >
              <p
                className="bf-display"
                style={{
                  color: "#f3f1ec",
                  fontSize: "clamp(3.75rem, 15vw, 8.5rem)",
                  lineHeight: 0.86,
                  letterSpacing: "-0.04em",
                }}
                aria-hidden
              >
                Beyond
              </p>
            </motion.div>

            <motion.p
              variants={fadeMeta}
              className="mt-2 bf-display sm:mt-3"
              style={{
                color: "#c8c4bb",
                fontSize: "clamp(1.15rem, 4vw, 1.95rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Two arenas. One standard.
            </motion.p>

            <motion.p
              variants={fadeMeta}
              className="mt-3 max-w-[38ch] text-[0.95rem] leading-relaxed sm:mt-4 sm:text-[1.05rem]"
              style={{ color: "#c8c4bb" }}
            >
              A training culture for body, skill, and discipline — fitness and
              Astra under one standard.
            </motion.p>

            <motion.div
              className="bf-hero-ctas mt-6 sm:mt-7"
              variants={fadeMeta}
            >
              <Button
                href="/start-training"
                className="!bg-[#f3f1ec] !text-[#070707] hover:!bg-[var(--bf-accent)] hover:!text-[#f3f1ec] sm:!w-auto"
              >
                Start training
              </Button>
              <Link
                href="/arenas"
                style={{
                  color: "#f3f1ec",
                  borderColor: "rgba(243,241,236,0.65)",
                  background: "transparent",
                }}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 border px-5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] transition-colors hover:border-[#f3f1ec] hover:bg-[rgba(243,241,236,0.1)] sm:w-auto"
              >
                <span
                  className="h-2 w-2 shrink-0 bg-[var(--bf-accent)]"
                  aria-hidden
                />
                Enter the arenas
              </Link>
            </motion.div>
          </motion.div>

          <motion.aside
            className="w-full lg:col-span-5 lg:justify-self-end lg:pt-2"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: dur.slow, ease: easeOut }}
          >
            <div className="w-full border border-[rgba(243,241,236,0.16)] bg-[rgba(7,7,7,0.55)] backdrop-blur-[6px] lg:ml-auto lg:max-w-[22rem]">
              <div className="border-b border-[rgba(243,241,236,0.12)] px-4 py-3 sm:px-5 sm:py-4">
                <p className="bf-meta text-[var(--bf-accent)]">Two arenas</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1">
                <Link
                  href="/fitness"
                  className="group flex flex-col justify-end gap-1 border-r border-[rgba(243,241,236,0.12)] px-4 py-4 transition-colors hover:bg-[rgba(243,241,236,0.04)] sm:px-5 sm:py-5 lg:flex-row lg:items-end lg:justify-between lg:gap-4 lg:border-r-0 lg:border-b"
                >
                  <div>
                    <p className="bf-meta mb-1" style={{ color: "#7a7770" }}>
                      Arena A
                    </p>
                    <p
                      className="bf-display text-[clamp(1.65rem,6vw,3rem)] transition-colors group-hover:text-[var(--bf-accent)]"
                      style={{ color: "#f3f1ec" }}
                    >
                      Fitness
                    </p>
                    <p
                      className="mt-1 text-[0.75rem] sm:text-[0.85rem]"
                      style={{ color: "#7a7770" }}
                    >
                      Body · Strength
                    </p>
                  </div>
                  <span className="bf-meta hidden text-[var(--bf-accent)] lg:block">
                    →
                  </span>
                </Link>

                <Link
                  href="/astra"
                  className="group flex flex-col justify-end gap-1 px-4 py-4 transition-colors hover:bg-[rgba(243,241,236,0.04)] sm:px-5 sm:py-5 lg:flex-row lg:items-end lg:justify-between lg:gap-4"
                >
                  <div>
                    <p className="bf-meta mb-1" style={{ color: "#7a7770" }}>
                      Arena B
                    </p>
                    <p
                      className="bf-display text-[clamp(1.65rem,6vw,3rem)] transition-colors group-hover:text-[var(--bf-accent)]"
                      style={{ color: "#f3f1ec" }}
                    >
                      Astra
                    </p>
                    <p
                      className="mt-1 text-[0.75rem] sm:text-[0.85rem]"
                      style={{ color: "#7a7770" }}
                    >
                      Skill · Combat
                    </p>
                  </div>
                  <span className="bf-meta hidden text-[var(--bf-accent)] lg:block">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Mid band fills the former empty zone */}
        <motion.div
          className="border-t border-[rgba(243,241,236,0.14)] pt-5"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: dur.slow, ease: easeOut }}
        >
          <ul className="grid grid-cols-3 gap-3 sm:gap-6">
            {cues.map((cue) => (
              <li key={cue.label} className="min-w-0">
                <p className="bf-meta mb-2 text-[var(--bf-accent)]">{cue.num}</p>
                <p
                  className="bf-display text-[clamp(1.15rem,3.5vw,1.85rem)]"
                  style={{ color: "#f3f1ec" }}
                >
                  {cue.label}
                </p>
              </li>
            ))}
          </ul>
          <p
            className="bf-meta mt-5 max-w-[48ch]"
            style={{ color: "#7a7770" }}
          >
            UA Mall · Mullampara Road · Manjeri — one roof, one standard.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
