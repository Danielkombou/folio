"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
];

/** Pixel-block KD mark inspired by chunky 8-bit monograms. */
function KDMark({ size = 28 }: { size?: number }) {
  const h = size;
  const w = Math.round(size * 1.7);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 34 20"
      aria-hidden
      className="block"
    >
      {/* K */}
      <rect x="0" y="0" width="3" height="20" fill="currentColor" />
      <rect x="3" y="8" width="4" height="4" fill="currentColor" />
      <rect x="7" y="5" width="3" height="3" fill="currentColor" />
      <rect x="7" y="12" width="3" height="3" fill="currentColor" />
      <rect x="10" y="0" width="3" height="5" fill="currentColor" />
      <rect x="10" y="15" width="3" height="5" fill="currentColor" />
      {/* D */}
      <rect x="18" y="0" width="3" height="20" fill="currentColor" />
      <rect x="21" y="0" width="8" height="3" fill="currentColor" />
      <rect x="21" y="17" width="8" height="3" fill="currentColor" />
      <rect x="28" y="3" width="3" height="3" fill="currentColor" />
      <rect x="28" y="14" width="3" height="3" fill="currentColor" />
      <rect x="31" y="6" width="3" height="8" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-3 sm:px-6">
      <motion.nav
        layout
        transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center border border-border/80 bg-background/90 shadow-sm backdrop-blur-md ${
          scrolled
            ? "justify-center rounded-3xl px-4 py-2.5"
            : "w-full max-w-2xl justify-between rounded-xl px-5 py-3.5 sm:rounded-xl sm:px-6"
        }`}
      >
        <Link
          href="/"
          aria-label="Daniel Kombou home"
          className="text-foreground transition-opacity hover:opacity-75"
        >
          <KDMark size={scrolled ? 22 : 28} />
          <span className="sr-only">KD</span>
        </Link>

        <AnimatePresence initial={false}>
          {!scrolled && (
            <motion.ul
              key="nav-links"
              initial={reduce ? false : { opacity: 0, x: 12, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={reduce ? undefined : { opacity: 0, x: 16 }}
              transition={{ duration: 0.28 }}
              className="flex items-center gap-5 overflow-hidden text-sm text-muted sm:gap-6 sm:text-base"
            >
              {links.map((l) => (
                <li key={l.href} className="shrink-0">
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
