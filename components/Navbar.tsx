"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
];

const COLLAPSED_WIDTH = 72;
const EXPANDED_MAX_WIDTH = 672;
const SCROLL_THRESHOLD = 32;
const SCROLL_DELTA = 8;

/** Pixel-block KD mark; script “l” appears only when expanded. */
function KDMark({ showScript }: { showScript: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-end text-foreground" style={{ height: 28 }}>
      <svg
        width="48"
        height="28"
        viewBox="0 0 34 20"
        aria-hidden
        className="block shrink-0"
        style={{ width: 48, height: 28, flexShrink: 0 }}
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
      <motion.span
        initial={false}
        animate={{
          opacity: showScript ? 1 : 0,
          maxWidth: showScript ? 18 : 0,
          marginLeft: showScript ? -6 : 0,
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="kd-script-l inline-block overflow-hidden whitespace-nowrap pb-0.5 text-[18px] leading-none text-foreground"
        aria-hidden={!showScript}
      >
        l
      </motion.span>
    </span>
  );
}

export function Navbar() {
  const [pastThreshold, setPastThreshold] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [navHover, setNavHover] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(EXPANDED_MAX_WIDTH);
  const [layoutReady, setLayoutReady] = useState(false);
  const lastY = useRef(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    const delta = y - lastY.current;
    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const atBottom = y >= maxScroll - 4;

    setPastThreshold(y > SCROLL_THRESHOLD);

    if (y <= SCROLL_THRESHOLD) {
      setScrollingUp(false);
    } else if (delta < -SCROLL_DELTA) {
      setScrollingUp(true);
    } else if (delta > SCROLL_DELTA && !atBottom) {
      setScrollingUp(false);
    }

    lastY.current = y;
  }, []);

  useLayoutEffect(() => {
    setViewportWidth(window.innerWidth);
    setLayoutReady(true);
  }, []);

  useEffect(() => {
    const syncViewport = () => setViewportWidth(window.innerWidth);
    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncViewport, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncViewport);
    };
  }, [onScroll]);

  const handleNavEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
    setNavHover(true);
  };

  const handleNavLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setNavHover(false), 140);
  };

  const handleNavBlur = (e: React.FocusEvent<HTMLElement>) => {
    const next = e.relatedTarget as Node | null;
    if (!next || !e.currentTarget.contains(next)) {
      handleNavLeave();
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  const expanded = !pastThreshold || scrollingUp || navHover;
  const collapsed = !expanded;
  const expandedWidth = Math.min(EXPANDED_MAX_WIDTH, viewportWidth - 24);

  const shellTransition =
    !layoutReady || reduce
      ? { duration: 0 }
      : { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const };

  const linksTransition =
    !layoutReady || reduce
      ? { duration: 0 }
      : { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const, delay: collapsed ? 0 : 0.04 };

  return (
    <header className="sticky top-0 z-50 flex justify-center px-3 pt-3 sm:px-6">
      <motion.nav
        initial={false}
        animate={{
          width: collapsed ? COLLAPSED_WIDTH : expandedWidth,
        }}
        transition={shellTransition}
        onMouseEnter={handleNavEnter}
        onMouseLeave={handleNavLeave}
        onFocusCapture={handleNavEnter}
        onBlurCapture={handleNavBlur}
        className={`nav-shell flex items-center overflow-hidden rounded-md border border-border/80 bg-background/90 backdrop-blur-md ${
          collapsed
            ? "nav-shell--glow justify-center px-2.5 py-2"
            : "justify-between gap-1 px-3 py-2.5 sm:gap-2 sm:px-4"
        }`}
      >
        <Link
          href="/"
          aria-label="Daniel Kombou home"
          className="nav-hotspot relative z-10 shrink-0 rounded-md px-1.5 py-1 text-foreground"
        >
          <KDMark showScript={expanded} />
          <span className="sr-only">KD</span>
        </Link>

        <motion.div
          initial={false}
          animate={{
            maxWidth: expanded ? 220 : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={linksTransition}
          className="min-w-0 overflow-hidden"
          style={{ pointerEvents: expanded ? "auto" : "none" }}
          aria-hidden={!expanded}
        >
          <ul className="flex items-center justify-end gap-0.5 whitespace-nowrap text-sm text-muted sm:gap-1 sm:text-base">
            {links.map((l) => (
              <li key={l.href} className="shrink-0">
                <Link href={l.href} className="nav-hotspot block rounded-md px-2 py-1.5 sm:px-3">
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
