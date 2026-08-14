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
      className="relative isolate overflow-hidden bg-[var(--bf-void)] pt-[var(--bf-nav-h)] max-md:min-h-0 md:min-h-[100svh]"
      aria-label="Beyond Fitness introduction"
    >
      <div className="bf-grain opacity-[0.25] max-md:opacity-[0.15]" aria-hidden />

      <div className="absolute inset-0 z-0">
        <PhotoFrame
          label={images.homeHero.label}
          src={images.homeHero.src}
          tone="default"
          aspect="absolute inset-0 h-full !aspect-auto"
          priority
          className="h-full [&_img]:object-[60%_center] sm:[&_img]:object-[72%_center] md:[&_img]:object-[78%_center]"
        />
        {/* Mobile: shorter hero photo plane with lighter veil so image reads */}
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
              "linear-gradient(180deg, rgba(7,7,7,0.55) 0%, rgba(7,7,7,0.35) 40%, rgba(7,7,7,0.88) 100%)",
          }}
          aria-hidden
        />
      </div>

      <FloatingMarks
        tone="dark"
        density="hero"
        className="max-md:hidden"
      />

      <div className="bf-shell relative z-10 flex flex-col justify-end gap-6 py-8 max-md:min-h-[78svh] md:min-h-[calc(100svh-var(--bf-nav-h))] md:justify-between md:gap-10 md:py-8 lg:pb-10">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:items-start lg:gap-10">
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={stagger}
          >
            <motion.p
              variants={fadeMeta}
              className="bf-meta mb-3 hidden text-[var(--bf-accent)] sm:mb-4 md:block"
            >
              <span className="bf-num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Manjeri · Kerala
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
                  fontSize: "clamp(3.25rem, 14vw, 8.5rem)",
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
              className="mt-2 bf-display md:mt-3"
              style={{
                color: "#c8c4bb",
                fontSize: "clamp(1.05rem, 3.8vw, 1.95rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Two arenas. One standard.
            </motion.p>

            <motion.p
              variants={fadeMeta}
              className="mt-3 hidden max-w-[38ch] text-[1.05rem] leading-relaxed md:block"
              style={{ color: "#c8c4bb" }}
            >
              A training culture for body, skill, and discipline — fitness and
              Astra under one standard.
            </motion.p>

            <motion.div className="bf-hero-ctas mt-6" variants={fadeMeta}>
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
                className="hidden min-h-12 items-center justify-center gap-2.5 border px-5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] transition-colors hover:border-[#f3f1ec] hover:bg-[rgba(243,241,236,0.1)] sm:inline-flex sm:w-auto"
              >
                <span
                  className="h-2 w-2 shrink-0 bg-[var(--bf-accent)]"
                  aria-hidden
                />
                Enter the arenas
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile: simple text links; desktop: panel */}
          <motion.aside
            className="w-full lg:col-span-5 lg:justify-self-end"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: dur.slow, ease: easeOut }}
          >
            <div className="flex gap-6 border-t border-[rgba(243,241,236,0.18)] pt-4 md:hidden">
              <Link href="/fitness" className="group flex-1">
                <p className="bf-meta text-[var(--bf-accent)]">Arena A</p>
                <p className="bf-display mt-1 text-[1.75rem] text-[#f3f1ec] group-hover:text-[var(--bf-accent)]">
                  Fitness
                </p>
              </Link>
              <Link href="/astra" className="group flex-1">
                <p className="bf-meta text-[var(--bf-accent)]">Arena B</p>
                <p className="bf-display mt-1 text-[1.75rem] text-[#f3f1ec] group-hover:text-[var(--bf-accent)]">
                  Astra
                </p>
              </Link>
            </div>

            <div className="hidden w-full border border-[rgba(243,241,236,0.16)] bg-[rgba(7,7,7,0.55)] backdrop-blur-[6px] md:block lg:ml-auto lg:max-w-[22rem]">
              <div className="border-b border-[rgba(243,241,236,0.12)] px-5 py-4">
                <p className="bf-meta text-[var(--bf-accent)]">Two arenas</p>
              </div>
              <Link
                href="/fitness"
                className="group flex items-end justify-between gap-4 border-b border-[rgba(243,241,236,0.12)] px-5 py-5 transition-colors hover:bg-[rgba(243,241,236,0.04)]"
              >
                <div>
                  <p className="bf-meta mb-1" style={{ color: "#7a7770" }}>
                    Arena A
                  </p>
                  <p
                    className="bf-display text-[clamp(2.1rem,4.5vw,3rem)] transition-colors group-hover:text-[var(--bf-accent)]"
                    style={{ color: "#f3f1ec" }}
                  >
                    Fitness
                  </p>
                  <p className="mt-1 text-[0.85rem]" style={{ color: "#7a7770" }}>
                    Body · Strength
                  </p>
                </div>
                <span className="bf-meta text-[var(--bf-accent)]">→</span>
              </Link>
              <Link
                href="/astra"
                className="group flex items-end justify-between gap-4 px-5 py-5 transition-colors hover:bg-[rgba(243,241,236,0.04)]"
              >
                <div>
                  <p className="bf-meta mb-1" style={{ color: "#7a7770" }}>
                    Arena B
                  </p>
                  <p
                    className="bf-display text-[clamp(2.1rem,4.5vw,3rem)] transition-colors group-hover:text-[var(--bf-accent)]"
                    style={{ color: "#f3f1ec" }}
                  >
                    Astra
                  </p>
                  <p className="mt-1 text-[0.85rem]" style={{ color: "#7a7770" }}>
                    Skill · Combat
                  </p>
                </div>
                <span className="bf-meta text-[var(--bf-accent)]">→</span>
              </Link>
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="hidden border-t border-[rgba(243,241,236,0.14)] pt-5 md:block"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: dur.slow, ease: easeOut }}
        >
          <ul className="grid grid-cols-3 gap-6">
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
          <p className="bf-meta mt-5 max-w-[48ch]" style={{ color: "#7a7770" }}>
            UA Mall · Mullampara Road · Manjeri — one roof, one standard.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
