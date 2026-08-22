"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const links = [
  { href: "/projects", label: "Projects", short: "Projects" },
  { href: "/writings", label: "Writings", short: "Writings" },
  { href: "/resume.pdf", label: "Download CV", short: "CV", download: true },
];

const COLLAPSED_WIDTH = 76;
const EXPANDED_MAX_WIDTH = 672;
const SCROLL_THRESHOLD = 32;
const SCROLL_DELTA = 8;

function subscribeViewport(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange, { passive: true });
  return () => window.removeEventListener("resize", onStoreChange);
}

function getViewportWidth() {
  return window.innerWidth;
}

function getServerViewportWidth() {
  return EXPANDED_MAX_WIDTH;
}

/** Pixel-block KD mark with script “l” after D. */
function KDMark() {
  return (
    <span className="relative mx-auto block h-7 w-[50px] shrink-0 text-foreground">
      <svg
        width="48"
        height="28"
        viewBox="0 0 34 20"
        aria-hidden
        className="absolute left-0 top-0 block"
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
      <span
        className="kd-script-l absolute bottom-0 left-[33px] text-[22px] leading-none text-foreground"
        aria-hidden
      >
        l
      </span>
    </span>
  );
}

export function Navbar() {
  const [pastThreshold, setPastThreshold] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > SCROLL_THRESHOLD : false,
  );
  const [scrollingUp, setScrollingUp] = useState(false);
  const [navHover, setNavHover] = useState(false);
  const viewportWidth = useSyncExternalStore(
    subscribeViewport,
    getViewportWidth,
    getServerViewportWidth,
  );
  const lastY = useRef(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();
  const isMobile = viewportWidth < 640;

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
    } else if (delta > SCROLL_DELTA || atBottom) {
      setScrollingUp(false);
    }

    lastY.current = y;
  }, []);

  useEffect(() => {
    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  // Keep expanded nav inside the padded header (px-3 = 24px total on mobile).
  const horizontalPad = isMobile ? 24 : 48;
  const expandedWidth = Math.min(EXPANDED_MAX_WIDTH, Math.max(280, viewportWidth - horizontalPad));

  const shellTransition = reduce
    ? { duration: 0 }
    : { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const };

  const linksTransition = reduce
    ? { duration: 0 }
    : {
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: collapsed ? 0 : 0.04,
      };

  return (
    <header className="sticky top-0 z-50 w-full max-w-[100vw] px-3 pt-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl justify-center">
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
          aria-label="Primary"
          className={`nav-shell relative overflow-hidden rounded-md border border-border/80 bg-background/90 backdrop-blur-md ${
            collapsed
              ? "nav-shell--glow grid place-items-center py-2"
              : "flex w-full items-center justify-between gap-1 px-2 py-2 sm:gap-2 sm:px-4 sm:py-2.5"
          }`}
        >
          <Link
            href="/"
            aria-label="Daniel Kombou home"
            className={`nav-hotspot z-10 shrink-0 overflow-visible rounded-md text-foreground ${
              collapsed ? "relative col-start-1 row-start-1 px-0 py-1" : "relative px-1 py-1"
            }`}
          >
            <KDMark />
            <span className="sr-only">Home</span>
          </Link>

          <motion.div
            id="primary-nav-links"
            initial={false}
            animate={{
              opacity: expanded ? 1 : 0,
            }}
            transition={linksTransition}
            className={`min-w-0 ${collapsed ? "hidden" : "flex flex-1 justify-end"}`}
            style={{ pointerEvents: expanded ? "auto" : "none" }}
            aria-hidden={!expanded}
          >
            <ul className="flex max-w-full flex-nowrap items-center justify-end gap-0.5 whitespace-nowrap text-xs text-muted sm:gap-1 sm:text-base">
              {links.map((l) => (
                <li key={l.href} className="shrink-0">
                  {l.download ? (
                    <a
                      href={l.href}
                      download="Daniel_Kombou_Resume.pdf"
                      className="inline-block rounded-md bg-foreground px-2 py-1.5 text-[11px] font-medium text-background transition-colors hover:opacity-90 sm:px-3 sm:text-sm"
                    >
                      <span className="sm:hidden">{l.short}</span>
                      <span className="hidden sm:inline">{l.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="nav-hotspot block rounded-md px-1.5 py-1.5 sm:px-3"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
}
