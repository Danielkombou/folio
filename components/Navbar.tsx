"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
];

function KDMark({ compact }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Daniel Kombou home"
      className={`relative grid place-items-center border border-foreground/20 bg-card font-semibold tracking-tight transition-colors hover:border-foreground/40 ${
        compact ? "h-9 w-9 text-xs" : "h-11 w-11 text-sm"
      }`}
    >
      <span className="absolute left-1 top-0.5 leading-none">K</span>
      <span className="absolute bottom-0.5 right-1 leading-none">D</span>
    </Link>
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
    <header className="sticky top-0 z-50">
      <motion.nav
        layout
        className={`mx-auto flex max-w-2xl items-center justify-between border-b border-border bg-background/85 px-5 backdrop-blur-md sm:px-6 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
        transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <KDMark compact={scrolled} />

        <AnimatePresence initial={false} mode="popLayout">
          {!scrolled && (
            <motion.ul
              key="nav-links"
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="flex items-center gap-5 text-sm text-muted sm:gap-6 sm:text-base"
            >
              {links.map((l) => (
                <li key={l.href}>
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

        {scrolled && <span className="sr-only">Menu collapsed</span>}
      </motion.nav>
    </header>
  );
}
