"use client";

import { motion, useReducedMotion } from "framer-motion";

type FloatingMarksProps = {
  tone?: "dark" | "light";
  density?: "hero" | "section";
  className?: string;
};

function Dumbbell({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="8" y="10" width="10" height="20" rx="1.5" fill="currentColor" />
      <rect x="18" y="6" width="8" height="28" rx="1.5" fill="currentColor" />
      <rect x="28" y="16" width="64" height="8" rx="2" fill="currentColor" />
      <rect x="94" y="6" width="8" height="28" rx="1.5" fill="currentColor" />
      <rect x="102" y="10" width="10" height="20" rx="1.5" fill="currentColor" />
    </svg>
  );
}

function Barbell({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 36"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="4" y="8" width="8" height="20" rx="1" fill="currentColor" />
      <rect x="12" y="4" width="10" height="28" rx="1" fill="currentColor" />
      <rect x="24" y="10" width="8" height="16" rx="1" fill="currentColor" />
      <rect x="34" y="15" width="92" height="6" rx="2" fill="currentColor" />
      <rect x="128" y="10" width="8" height="16" rx="1" fill="currentColor" />
      <rect x="138" y="4" width="10" height="28" rx="1" fill="currentColor" />
      <rect x="148" y="8" width="8" height="20" rx="1" fill="currentColor" />
    </svg>
  );
}

function Kettlebell({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M22 18c0-8 6-14 10-14s10 6 10 14"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="32" cy="46" rx="22" ry="20" fill="currentColor" />
    </svg>
  );
}

function Plate({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="36" cy="36" r="30" stroke="currentColor" strokeWidth="5" />
      <circle cx="36" cy="36" r="18" stroke="currentColor" strokeWidth="4" />
      <circle cx="36" cy="36" r="6" fill="currentColor" />
    </svg>
  );
}

/**
 * Soft floating gym marks — decorative only.
 * Kept low-opacity so photography and type stay primary.
 */
export function FloatingMarks({
  tone = "light",
  density = "section",
  className = "",
}: FloatingMarksProps) {
  const reduce = useReducedMotion();
  const color =
    tone === "dark" ? "text-[rgba(243,241,236,0.08)]" : "text-[rgba(143,31,46,0.09)]";

  const float = (delay: number, y = 10, rotate = 4) =>
    reduce
      ? undefined
      : {
          y: [0, -y, 0],
          rotate: [0, rotate, 0],
          transition: {
            duration: 7 + delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  const heroExtra = density === "hero";

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${color} ${className}`.trim()}
      aria-hidden
    >
      <motion.div
        className="absolute left-[-2%] top-[12%] w-[7.5rem] md:w-[10rem]"
        animate={float(0, 12, -6)}
      >
        <Dumbbell className="h-auto w-full opacity-80" />
      </motion.div>

      <motion.div
        className="absolute right-[4%] top-[18%] w-[9rem] rotate-12 md:w-[12rem]"
        animate={float(0.8, 14, 5)}
      >
        <Barbell className="h-auto w-full opacity-70" />
      </motion.div>

      <motion.div
        className="absolute bottom-[22%] left-[8%] w-[3.5rem] md:w-[4.5rem]"
        animate={float(1.4, 9, -3)}
      >
        <Kettlebell className="h-auto w-full opacity-75" />
      </motion.div>

      <motion.div
        className="absolute bottom-[16%] right-[10%] w-[4rem] md:w-[5.5rem]"
        animate={float(0.4, 11, 8)}
      >
        <Plate className="h-auto w-full opacity-70" />
      </motion.div>

      {heroExtra && (
        <>
          <motion.div
            className="absolute left-[38%] top-[8%] hidden w-[8rem] -rotate-6 lg:block"
            animate={float(1.1, 8, 3)}
          >
            <Barbell className="h-auto w-full opacity-50" />
          </motion.div>
          <motion.div
            className="absolute right-[28%] bottom-[38%] hidden w-[6rem] rotate-[-18deg] md:block"
            animate={float(1.8, 10, -5)}
          >
            <Dumbbell className="h-auto w-full opacity-55" />
          </motion.div>
        </>
      )}
    </div>
  );
}
