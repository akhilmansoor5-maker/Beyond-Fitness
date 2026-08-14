"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { dur, easeOut } from "@/lib/motion";

type ArenaId = "fitness" | "combat";

const arenas: Record<
  ArenaId,
  {
    index: string;
    title: string;
    kicker: string;
    body: string;
    signals: string[];
  }
> = {
  fitness: {
    index: "02A",
    title: "Fitness",
    kicker: "Body · Conditioning · Progression",
    body: "Strength training, personal coaching, and guided fitness — built for people who want measurable progress, not noise.",
    signals: ["Strength", "Conditioning", "Personal training", "Nutrition guidance"],
  },
  combat: {
    index: "02B",
    title: "Combat & Sport",
    kicker: "Skill · Speed · Discipline",
    body: "Fencing, kickboxing, and martial arts training — where precision and control matter as much as power.",
    signals: ["Fencing", "Kickboxing", "Martial arts", "Performance skill"],
  },
};

const ecosystem = [
  "Fitness",
  "Strength",
  "Combat",
  "Sport",
  "Performance",
  "Community",
] as const;

export function ArenaThreshold() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<ArenaId>("fitness");
  const current = arenas[active];

  return (
    <section
      id="arenas"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-ink)]"
      aria-labelledby="arenas-heading"
    >
      <div className="bf-grain opacity-[0.05]" aria-hidden />

      <div className="bf-shell bf-section">
        {/* Section header — editorial, not card grid */}
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="bf-meta mb-4">
              <span className="bf-num text-[var(--bf-accent)]">02</span>
              <span className="mx-2 text-[var(--bf-faint)]">/</span>
              The threshold
            </p>
            <h2
              id="arenas-heading"
              className="bf-display-lg max-w-[12ch] text-[var(--bf-bone)]"
            >
              More than a gym
            </h2>
          </div>
          <p className="bf-lede md:col-span-5 md:justify-self-end">
            Beyond Fitness holds two arenas under one roof — and one philosophy
            across both: train beyond your limits.
          </p>
        </div>

        {/* Dual arena interactive field */}
        <div className="grid border border-[var(--bf-line)] lg:grid-cols-[1fr_auto_1fr]">
          {(Object.keys(arenas) as ArenaId[]).map((id) => {
            const arena = arenas[id];
            const isActive = active === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                onMouseEnter={() => setActive(id)}
                onFocus={() => setActive(id)}
                className={`group relative min-h-[16rem] overflow-hidden p-6 text-left transition-colors duration-300 md:min-h-[20rem] md:p-8 ${
                  isActive
                    ? "bg-[var(--bf-surface)]"
                    : "bg-transparent hover:bg-[rgba(243,241,236,0.02)]"
                }`}
                aria-pressed={isActive}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="bf-meta">
                      <span className="text-[var(--bf-accent)]">{arena.index}</span>
                    </span>
                    <span
                      className={`bf-meta transition-colors ${
                        isActive ? "text-[var(--bf-bone)]" : "text-[var(--bf-mute)]"
                      }`}
                    >
                      {isActive ? "Active arena" : "Enter"}
                    </span>
                  </div>

                  <div>
                    <p
                      className={`bf-display transition-colors duration-300 ${
                        isActive
                          ? "text-[var(--bf-bone)]"
                          : "text-[var(--bf-mute)] group-hover:text-[var(--bf-bone-dim)]"
                      }`}
                      style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                      }}
                    >
                      {arena.title}
                    </p>
                    <p className="bf-meta mt-3 text-[var(--bf-mute)]">
                      {arena.kicker}
                    </p>
                  </div>
                </div>

                {/* Impact accent bar */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-[var(--bf-accent)] transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-1/3"
                  }`}
                  aria-hidden
                />
              </button>
            );
          })}

          {/* Center spine — desktop only */}
          <div
            className="relative hidden items-center justify-center border-x border-[var(--bf-line)] px-3 lg:flex"
            aria-hidden
          >
            <div className="flex h-full flex-col items-center justify-between py-10">
              <span className="bf-meta bf-vert">One</span>
              <span className="bf-display text-[1.25rem] tracking-[0.2em] text-[var(--bf-accent)]">
                ||
              </span>
              <span className="bf-meta bf-vert">Standard</span>
            </div>
          </div>
        </div>

        {/* Detail panel — expands with active arena */}
        <div className="mt-0 border border-t-0 border-[var(--bf-line)] bg-[var(--bf-void)]">
          <div className="grid gap-0 md:grid-cols-12">
            <div className="border-b border-[var(--bf-line)] p-6 md:col-span-7 md:border-b-0 md:border-r md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: dur.base, ease: easeOut }}
                >
                  <p className="bf-meta mb-3 text-[var(--bf-accent)]">
                    Arena reading
                  </p>
                  <p className="max-w-[42ch] text-[1.05rem] leading-relaxed text-[var(--bf-bone-dim)] md:text-[1.125rem]">
                    {current.body}
                  </p>
                  <p className="bf-meta mt-6 text-[var(--bf-mute)]">
                    Exact programmes confirmed with client — placeholders only.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-6 md:col-span-5 md:p-8">
              <p className="bf-meta mb-4">Signals</p>
              <ul className="space-y-0">
                {current.signals.map((signal, i) => (
                  <motion.li
                    key={`${active}-${signal}`}
                    initial={reduce ? false : { opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.04 * i,
                      duration: dur.base,
                      ease: easeOut,
                    }}
                    className="flex items-center justify-between border-b border-[var(--bf-line)] py-3"
                  >
                    <span className="text-[0.95rem] font-medium tracking-wide text-[var(--bf-bone)]">
                      {signal}
                    </span>
                    <span className="bf-num bf-meta text-[var(--bf-mute)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ecosystem strip — typographic, not cards */}
        <div className="mt-10 overflow-hidden border-y border-[var(--bf-line)] md:mt-14">
          <p className="bf-meta px-0 py-4 text-[var(--bf-mute)]">
            The ecosystem
          </p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 pb-6 md:gap-x-5">
            {ecosystem.map((word, i) => (
              <span key={word} className="inline-flex items-baseline gap-3 md:gap-5">
                <span className="bf-display text-[clamp(1.75rem,4.5vw,3rem)] text-[var(--bf-bone)]">
                  {word}
                </span>
                {i < ecosystem.length - 1 && (
                  <span className="bf-meta text-[var(--bf-accent)]" aria-hidden>
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
