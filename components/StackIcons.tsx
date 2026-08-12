"use client";

import type { StackItem } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37L9.4 8.1v8.4h1.7V9.86l7.08 11.01A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M1.5 1.5h21v21h-21v-21zm12.3 10.2h2.1c.1 1.2.6 1.8 1.6 1.8 1 0 1.6-.7 1.6-2.1V9.8h2v5.1c0 2.8-1.6 4.4-4 4.4-2.3 0-3.8-1.5-2.8-4.2H9.8v1.8H7.8V9.8h4.2v1.9h1.8v0z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M12 1.7 21.5 7v10L12 22.3 2.5 17V7L12 1.7zm0 1.8L4.2 8v8L12 20.5 19.8 16V8L12 3.5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M12 6C9.3 6 7.7 7.3 7 10c1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3C13.5 11 14.7 12.2 17 12.2c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.5 7.2 14.3 6 12 6zM7 11.8C4.3 11.8 2.7 13.1 2 15.8c1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1.1 1.2 2.3 2.4 4.6 2.4 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1.1-1.2-2.3-2.4-4.6-2.4z" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M16.5 8.2c.2-1.8-.3-3.2-1.4-4.1C13.7 3.1 12 3 12 3s-1.7.1-3.1 1.1C7.8 5 7.3 6.4 7.5 8.2c-2 .7-3.2 2-3.2 4 0 1.3.7 2.4 1.8 3.1-.1.4-.2.8-.2 1.2 0 1.7 1.1 2.7 2.7 2.7.5 0 1-.1 1.5-.3.6.5 1.4.8 2.4.8s1.8-.3 2.4-.8c.5.2 1 .3 1.5.3 1.6 0 2.7-1 2.7-2.7 0-.4-.1-.8-.2-1.2 1.1-.7 1.8-1.8 1.8-3.1 0-2-1.2-3.3-3.2-4zm-2.2 9.3c-.4.2-.9.3-1.3.3-.7 0-1.3-.2-1.7-.5.5-.1 1-.4 1.3-.7h1c.4 0 .8.1 1.1.3-.1.2-.3.4-.4.6zm-4.1-.2c-.4-.1-.8-.2-1.1-.4.1-.2.3-.4.5-.6h1c.4.3.8.5 1.3.6-.4.2-.9.4-1.7.4zm8.1-5.1c-.4.8-1.3 1.3-2.5 1.5l-.5-1.2c1.4-.2 2-.7 2.2-1.4.1-.4 0-.8-.3-1.1-.4-.4-1.1-.5-2-.4l-.4-1.2c1.4-.2 2.6 0 3.3.8.6.6.7 1.5.2 2.9z" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M13.1 2.2c-.4-.7-1-.7-1.4 0-2.2 3.3-2.4 7.6-.8 11.1.4.9 1 1.7 1.7 2.4.2.2.5.2.7 0 .7-.7 1.3-1.5 1.7-2.4 1.6-3.5 1.4-7.8-.8-11.1zM12 22s3.4-1.8 3.4-6.2c0-1.9-.8-3.4-1.7-4.4-.2-.2-.6-.1-.7.2-.3 1-.6 2.4-.6 3.4 0 3-1.1 4.7-1.1 4.7S10 17 10 14c0-1.1-.2-2.5-.5-3.5-.1-.3-.5-.4-.7-.2C7.8 11.3 7 12.9 7 14.8 7 19.2 12 22 12 22z" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M22.5 10.7 13.3 1.5a2.1 2.1 0 0 0-3 0L8.1 3.7l2.5 2.5a2 2 0 0 1 2.5 2.5l2.4 2.4a2 2 0 1 1-1.2 1.1l-2.4-2.4v5.7a2 2 0 1 1-1.5 0V9.7a2 2 0 0 1-1.1-2.6L6.6 4.6 1.5 9.7a2.1 2.1 0 0 0 0 3l9.2 9.2a2.1 2.1 0 0 0 3 0l9.2-9.2c.8-.8.8-2.2-.4-2z" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8zm4-12H8a4 4 0 0 1 0-8h4v8zm0 0h4a4 4 0 1 1 0 8h-4v-8zm4-4a4 4 0 1 0 0-8h-4v8h4zM8 0a4 4 0 0 0 0 8h4V4a4 4 0 0 0-4-4z" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
      <path d="M12 3 2 20h20L12 3z" />
    </svg>
  ),
};

export function StackIcons({ items }: { items: StackItem[] }) {
  return (
    <ul className="flex flex-wrap gap-3 sm:gap-4">
      {items.map((item) => {
        const isMono = item.color === "#000000";
        return (
        <li key={item.name} className="group relative">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-card transition-colors hover:border-foreground/25 sm:h-14 sm:w-14"
            style={{ color: isMono ? "var(--foreground)" : item.color }}
            tabIndex={0}
            aria-label={item.name}
          >
            <span className="grayscale transition duration-300 group-hover:grayscale-0 group-focus-within:grayscale-0">
              {icons[item.name]}
            </span>
          </span>
          <span className="pointer-events-none absolute -bottom-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2.5 py-1 text-xs text-foreground opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-within:opacity-100 sm:text-sm">
            {item.name}
          </span>
        </li>
      );
      })}
    </ul>
  );
}
