"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
];

/** Pixel-block KD mark — fixed viewBox, never stretched. */
function KDMark() {
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 34 20"
      aria-hidden
      className="block shrink-0"
      style={{ width: 48, height: 28 }}
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

const SCROLL_THRESHOLD = 32;
const SCROLL_DELTA = 10;

export function Navbar() {
  const [pastThreshold, setPastThreshold] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const lastY = useRef(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    const delta = y - lastY.current;

    setPastThreshold(y > SCROLL_THRESHOLD);

    if (y <= SCROLL_THRESHOLD) {
      setScrollingUp(false);
    } else if (delta < -SCROLL_DELTA) {
      setScrollingUp(true);
    } else if (delta > SCROLL_DELTA) {
      setScrollingUp(false);
    }

    lastY.current = y;
  }, []);

  useEffect(() => {
    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const handleLogoEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setLogoHover(true);
  };

  const handleLogoLeave = () => {
    hoverTimer.current = setTimeout(() => setLogoHover(false), 120);
  };

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  const expanded = !pastThreshold || scrollingUp || logoHover;
  const collapsed = !expanded;
  const transition = reduce
    ? { duration: 0 }
    : { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <header className="sticky top-0 z-50 flex justify-center px-3 pt-3 sm:px-6">
      <motion.nav
        initial={false}
        animate={{
          width: collapsed ? "auto" : "100%",
          maxWidth: collapsed ? 72 : 672,
        }}
        transition={transition}
        className={`nav-shell flex items-center overflow-hidden rounded-md border border-border/80 bg-background/90 backdrop-blur-md ${
          collapsed ? "nav-shell--glow justify-center px-2.5 py-2" : "justify-between gap-2 px-3 py-2.5 sm:px-4"
        }`}
      >
        <Link
          href="/"
          aria-label="Daniel Kombou home"
          className="nav-hotspot relative z-10 shrink-0 rounded-md px-1.5 py-1 text-foreground"
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
          onFocus={handleLogoEnter}
          onBlur={handleLogoLeave}
        >
          <KDMark />
          <span className="sr-only">KD</span>
        </Link>

        <motion.div
          initial={false}
          animate={{
            width: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
            marginLeft: expanded ? 0 : -8,
          }}
          transition={transition}
          className="min-w-0 overflow-hidden"
          aria-hidden={!expanded}
        >
          <ul className="flex items-center gap-0.5 whitespace-nowrap text-sm text-muted sm:gap-1 sm:text-base">
            {links.map((l) => (
              <li key={l.href} className="shrink-0">
                <Link href={l.href} className="nav-hotspot block rounded-md px-2.5 py-1.5 sm:px-3">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>
    </header>
  );
}
