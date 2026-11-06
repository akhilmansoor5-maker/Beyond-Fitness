"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { brand, contact, nav } from "@/content/site";
import { dur, easeOut } from "@/lib/motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = nav.filter((item) => !("cta" in item && item.cta));
  const cta = nav.find((item) => "cta" in item && item.cta);

  const headerBg =
    scrolled || open
      ? "border-[rgba(244,244,241,0.1)] bg-[rgba(5,5,5,0.96)] backdrop-blur-md"
      : "border-transparent bg-[rgba(5,5,5,0.55)]";

  return (
    <header
      className={`bf-on-void fixed inset-x-0 top-0 z-50 border-b text-[var(--bf-bone)] transition-[background,border-color] duration-300 ${headerBg}`}
      data-nav-chrome="dark"
    >
      <div
        className="bf-shell flex items-center justify-between gap-3"
        style={{ height: "var(--bf-nav-h)" }}
      >
        <Link
          href="/"
          className="relative z-10 shrink-0"
          aria-label="Beyond Fitness Manjeri home"
          onClick={() => setOpen(false)}
        >
          <BrandLogo surface="dark" size="nav" priority />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Primary"
        >
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`bf-link tracking-[0.14em] ${
                  active
                    ? "text-[var(--bf-accent)]"
                    : "text-[var(--bf-bone-dim)] hover:text-[var(--bf-bone)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          {cta && (
            <Link
              href={cta.href}
              className="bf-btn bf-btn--primary !min-h-9 !px-3.5 !text-[0.62rem]"
            >
              <span className="bf-btn__mark" aria-hidden />
              {cta.label}
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-1.5 lg:hidden">
          {cta && (
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="bf-meta border border-[rgba(244,244,241,0.28)] px-2.5 py-1.5 text-[var(--bf-bone)]"
            >
              Start
            </Link>
          )}
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center text-[var(--bf-bone)]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: dur.base, ease: easeOut }}
            className="max-h-[calc(100dvh-var(--bf-nav-h))] overflow-y-auto border-t border-[rgba(244,244,241,0.1)] bg-[rgba(5,5,5,0.98)] pb-[env(safe-area-inset-bottom)] lg:hidden"
          >
            <nav className="bf-shell flex flex-col py-4" aria-label="Mobile">
              <p className="bf-meta mb-4 text-[var(--bf-mute)]">
                {brand.location}
              </p>
              {links.map((link, i) => {
                const active =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.04 * i,
                      duration: dur.base,
                      ease: easeOut,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline justify-between gap-3 border-b border-[rgba(244,244,241,0.1)] py-3 ${
                        active
                          ? "text-[var(--bf-accent)]"
                          : "text-[var(--bf-bone)]"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="bf-display text-[1.35rem] tracking-[-0.03em]">
                        {link.label}
                      </span>
                      <span className="bf-num bf-meta text-[var(--bf-mute)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              {cta && (
                <Link
                  href={cta.href}
                  onClick={() => setOpen(false)}
                  className="bf-btn bf-btn--primary mt-5 w-full !min-h-10"
                >
                  <span className="bf-btn__mark" aria-hidden />
                  {cta.label}
                </Link>
              )}
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[rgba(244,244,241,0.1)] pt-4">
                <a
                  href={contact.phoneHref}
                  className="bf-meta text-[var(--bf-bone-dim)]"
                >
                  {contact.phoneDisplay}
                </a>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bf-meta text-[var(--bf-accent)]"
                >
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
