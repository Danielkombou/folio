"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
      <rect x="0" y="0" width="3" height="20" fill="currentColor" />
      <rect x="3" y="8" width="4" height="4" fill="currentColor" />
      <rect x="7" y="5" width="3" height="3" fill="currentColor" />
      <rect x="7" y="12" width="3" height="3" fill="currentColor" />
      <rect x="10" y="0" width="3" height="5" fill="currentColor" />
      <rect x="10" y="15" width="3" height="5" fill="currentColor" />
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
  const [pastThreshold, setPastThreshold] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const lastY = useRef(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingUp = y < lastY.current;
      lastY.current = y;
      setPastThreshold(y > 24);
      setScrollingUp(y > 24 && goingUp);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const expanded = !pastThreshold || scrollingUp || logoHover;
  const collapsed = !expanded;

  return (
    <header className="sticky top-0 z-50 flex justify-center px-3 pt-3 sm:px-6">
      <motion.nav
        layout
        transition={{ duration: reduce ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
        className={`nav-shell flex items-center rounded-md border border-border/80 bg-background/90 backdrop-blur-md ${
          collapsed
            ? "nav-shell--glow justify-center px-3.5 py-2.5"
            : "w-full max-w-2xl justify-between gap-4 px-4 py-3 sm:px-5"
        }`}
      >
        <Link
          href="/"
          aria-label="Daniel Kombou home"
          className="nav-hotspot relative z-10 rounded-md px-2 py-1.5 text-foreground"
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          onFocus={() => setLogoHover(true)}
          onBlur={() => setLogoHover(false)}
        >
          <KDMark size={collapsed ? 20 : 26} />
          <span className="sr-only">KD</span>
        </Link>

        <AnimatePresence initial={false} mode="popLayout">
          {expanded && (
            <motion.ul
              key="nav-links"
              initial={reduce ? false : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: 36, filter: "blur(4px)" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-1 overflow-hidden text-sm text-muted sm:gap-2 sm:text-base"
            >
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  className="shrink-0"
                  initial={reduce ? false : { opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: 14 }}
                  transition={{ duration: 0.28, delay: reduce ? 0 : i * 0.05 }}
                >
                  <Link href={l.href} className="nav-hotspot block rounded-md px-3 py-1.5">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
