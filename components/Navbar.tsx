"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
];

/** Slanted ASCII mark inspired by terminal banners (no enclosing box). */
function KDMark({ compact }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Daniel Kombou home"
      className={`inline-flex items-center gap-2.5 rounded-lg px-1 py-0.5 transition-opacity hover:opacity-80 ${
        compact ? "text-[8px] leading-[1.05]" : "text-[9px] leading-[1.05] sm:text-[10px]"
      }`}
    >
      <pre
        aria-hidden
        className="select-none font-mono font-bold tracking-tight text-foreground"
        style={{ transform: "skewX(-12deg)" }}
      >
{` _  __ ____
| |/ // __ \\
|   // / / /
|  |/ /_/ /
|_|/\\____/`}
      </pre>
      <span className="sr-only">KD</span>
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
      <nav
        className={`mx-auto flex max-w-2xl items-center border-b border-border bg-background/85 px-5 backdrop-blur-md sm:px-6 ${
          scrolled ? "justify-center py-2.5" : "justify-between py-3.5"
        }`}
      >
        <motion.div
          layout
          transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          {!scrolled && (
            <Image
              src={site.avatar}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-border"
              priority
            />
          )}
          <KDMark compact={scrolled} />
          {!scrolled && (
            <span className="hidden text-sm font-medium text-foreground/90 sm:inline">
              {site.name}
            </span>
          )}
        </motion.div>

        <AnimatePresence initial={false}>
          {!scrolled && (
            <motion.ul
              key="nav-links"
              initial={reduce ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: 24 }}
              transition={{ duration: 0.25 }}
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
      </nav>
    </header>
  );
}
