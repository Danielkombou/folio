"use client";

import type { StackItem } from "@/lib/data";

const mono = new Set([
  "Next.js",
  "Vercel",
  "Express.js",
  "GitHub",
  "Cursor AI",
  "Railway",
  "Zustand",
]);

const icons: Record<string, React.ReactNode> = {
  HTML5: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.2 5.5H8.1l.2 2.2h8.7l-.6 6.6L12 18l-4.4-1.2-.3-3h2.1l.1 1.5 2.5.7 2.5-.7.3-2.8H7.5L6.8 5.2h10.7l-.3 2.3z" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm13.4 5.6H8l.2 2.3h7.9l-.5 5.5L12 16.8l-3.6-1-.2-2.3h2.1l.1 1.1 1.6.4 1.6-.4.2-2H7.6L6.9 5.3h9.8l-.3 2.3z" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M3 3h18v18H3V3zm9.7 13.7c.8 1.3 1.9 2.1 3.8 2.1 1.9 0 3.2-1 3.2-2.8 0-1.8-1-2.5-2.9-3.3l-1-.4c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.6.5 3.4 1.8l-1.9 1.2c-.4-.7-.8-1-1.5-1-.7 0-1.2.5-1.2 1.1 0 .8.5 1.1 1.7 1.6l1 .4c2 .9 3.1 1.9 3.1 4.1 0 2.3-1.8 3.6-4.3 3.6-2.4 0-4-1.1-4.8-2.6l2.1-1.2zM8.2 18.7c.6 1.1 1.2 1.9 2.6 1.9 1.3 0 2.1-.6 2.1-2.9V8.5H10v9c0 .8-.3 1-1 1-.5 0-.9-.2-1.3-.6l-1.5 1.8z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M1.5 1.5h21v21h-21v-21zm12.3 10.2h2.1c.1 1.2.6 1.8 1.6 1.8 1 0 1.6-.7 1.6-2.1V9.8h2v5.1c0 2.8-1.6 4.4-4 4.4-2.3 0-3.8-1.5-2.8-4.2H9.8v1.8H7.8V9.8h4.2v1.9h1.8v0z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37L9.4 8.1v8.4h1.7V9.86l7.08 11.01A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 6C9.3 6 7.7 7.3 7 10c1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3C13.5 11 14.7 12.2 17 12.2c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.5 7.2 14.3 6 12 6zM7 11.8C4.3 11.8 2.7 13.1 2 15.8c1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1.1 1.2 2.3 2.4 4.6 2.4 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1.1-1.2-2.3-2.4-4.6-2.4z" />
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3zm4.2 5.2c1.4 0 2.4.7 2.4 1.9 0 .9-.5 1.5-1.3 1.8 1.1.3 1.8 1 1.8 2.2 0 1.5-1.2 2.3-3 2.3H8.2V8.2h2zm0 3.1h.7c.6 0 1-.3 1-.8s-.4-.8-1-.8h-.7v1.6zm0 3.5h.9c.7 0 1.1-.4 1.1-1s-.4-1-1.1-1h-.9v2z" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M13.1 2.2c-.4-.7-1-.7-1.4 0-2.2 3.3-2.4 7.6-.8 11.1.4.9 1 1.7 1.7 2.4.2.2.5.2.7 0 .7-.7 1.3-1.5 1.7-2.4 1.6-3.5 1.4-7.8-.8-11.1zM12 22s3.4-1.8 3.4-6.2c0-1.9-.8-3.4-1.7-4.4-.2-.2-.6-.1-.7.2-.3 1-.6 2.4-.6 3.4 0 3-1.1 4.7-1.1 4.7S10 17 10 14c0-1.1-.2-2.5-.5-3.5-.1-.3-.5-.4-.7-.2C7.8 11.3 7 12.9 7 14.8 7 19.2 12 22 12 22z" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M16.5 8.2c.2-1.8-.3-3.2-1.4-4.1C13.7 3.1 12 3 12 3s-1.7.1-3.1 1.1C7.8 5 7.3 6.4 7.5 8.2c-2 .7-3.2 2-3.2 4 0 1.3.7 2.4 1.8 3.1-.1.4-.2.8-.2 1.2 0 1.7 1.1 2.7 2.7 2.7.5 0 1-.1 1.5-.3.6.5 1.4.8 2.4.8s1.8-.3 2.4-.8c.5.2 1 .3 1.5.3 1.6 0 2.7-1 2.7-2.7 0-.4-.1-.8-.2-1.2 1.1-.7 1.8-1.8 1.8-3.1 0-2-1.2-3.3-3.2-4z" />
    </svg>
  ),
  Neon: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M4 4h10l6 8v8H14l-4-5.5V20H4V4zm2.5 2.5v11h2.5V11L15 18.5h2.2L12 10.5V6.5H6.5z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 1.7 21.5 7v10L12 22.3 2.5 17V7L12 1.7zm0 1.8L4.2 8v8L12 20.5 19.8 16V8L12 3.5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M2 12h6v2H2v-2zm8-4h12v2H10V8zm0 4h12v2H10v-2zm0 4h8v2h-8v-2z" />
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.7 10.5l6.6-3M8.7 13.5l6.6 3" />
    </svg>
  ),
  BetterAuth: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M14.3 2.2 3.6 12.9l3.3 3.3 14-14H14.3zM14.3 12.2l-4.4 4.4 4.4 4.4H20.9l-4.4-4.4 4.4-4.4h-6.6z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 2c-3 0-3.2.7-3.2 3.2v1.6h6.4v.8H8c-2.7 0-4.8 1.5-4.8 4.4s1.4 4.4 4.1 4.4h1.5v-1.8c0-2 1.7-3.6 3.8-3.6h4.4c2.4 0 2.8-1 2.8-3.2C20 3.4 18.3 2 12 2zm-1.6 1.8a1 1 0 110 2 1 1 0 010-2zM12.4 12.8c-2.4 0-2.8 1-2.8 3.2 0 2.4 1.7 3.2 4.8 3.2 3 0 3.2-.7 3.2-3.2v-1.6H11.2v-.8h6.8c2.7 0 4.8-1.4 4.8-4.4 0-2.9-1.4-4.4-4.1-4.4h-1.5v1.8c0 2-1.7 3.6-3.8 3.6h-1zm1.6 5.4a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M9.2 17.6c0 .8 2.6 1.4 5.8 1.4s5.8-.6 5.8-1.4-2.6-1.4-5.8-1.4-5.8.6-5.8 1.4zm5.8-9.2c-1.6 0-2.2.7-2.2 1.5 0 1.4 2.2 1.1 2.2 3.2 0 1.3-1.1 2.1-2.9 2.1-1.5 0-2.6-.5-3.5-1.1l.8-1.6c.7.5 1.6.9 2.6.9.7 0 1.1-.3 1.1-.7 0-1.4-2.2-1.2-2.2-3.3 0-1.5 1.2-2.5 3-2.5 1.3 0 2.4.4 3.2.9l-.8 1.6c-.7-.4-1.5-.6-2.3-.6zM8 20.8h11.2v1.6H8v-1.6zM7.2 4.4l1.4 1C7.4 7 6.5 8.6 6.5 10.5c0 2.5 1.5 4.1 4.1 5l-.7 1.6C6.6 16 4.5 13.7 4.5 10.5c0-2.6 1.1-4.8 2.7-6.1z" />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M22.5 10.7 13.3 1.5a2.1 2.1 0 0 0-3 0L8.1 3.7l2.5 2.5a2 2 0 0 1 2.5 2.5l2.4 2.4a2 2 0 1 1-1.2 1.1l-2.4-2.4v5.7a2 2 0 1 1-1.5 0V9.7a2 2 0 0 1-1.1-2.6L6.6 4.6 1.5 9.7a2.1 2.1 0 0 0 0 3l9.2 9.2a2.1 2.1 0 0 0 3 0l9.2-9.2c.8-.8.8-2.2-.4-2z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  "VS Code": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M17.5 2.5 8.8 9.7 3.8 6.2 2 7.3v9.4l1.8 1.1 5-3.5 8.7 7.2L22 19.4V4.6L17.5 2.5zm0 4.2v10.6l-6.2-5.1 6.2-5.5z" />
    </svg>
  ),
  "Cursor AI": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M4 3l14 8.5-5.2 1.4L16 21l-3.2-1.2L9.5 14 4 16.5V3z" />
    </svg>
  ),
  OpenCode: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M8 7l-4 5 4 5M16 7l4 5-4 5M13 5l-2 14" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8zm4-12H8a4 4 0 0 1 0-8h4v8zm0 0h4a4 4 0 1 1 0 8h-4v-8zm4-4a4 4 0 1 0 0-8h-4v8h4zM8 0a4 4 0 0 0 0 8h4V4a4 4 0 0 0-4-4z" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 3 2 20h20L12 3z" />
    </svg>
  ),
  Netlify: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.2 6.8 3.8v.8L12.8 6v3.3l6 3.3v1.5l-6-3.3v6.5l-1.6.9v-7.4l-6 3.3V12l6-3.3V5.3L5.2 8.4v-.8L12 4.2z" />
    </svg>
  ),
  Railway: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M4 4h7.5L20 20h-7.5L4 4zm2.8 2.5 5.4 10.5h2.4L9.2 6.5H6.8z" />
    </svg>
  ),
  Render: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M5 4h8.5a5.5 5.5 0 010 11H9v5H5V4zm4 4v3h4.5a1.5 1.5 0 000-3H9z" />
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M12 8v8" fill="none" stroke="#fff" strokeWidth="2" />
    </svg>
  ),
  Zustand: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M6 7h12v3H9v2h8v3H9v2h9v3H6V7z" />
    </svg>
  ),
  "React Query": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  "Context API": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M4.5 7.5l2.5 1.5M17 15l2.5 1.5M4.5 16.5 7 15M17 9l2.5-1.5" />
    </svg>
  ),
  Axios: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 2l8 20h-3.2L12 9.5 7.2 22H4L12 2z" />
    </svg>
  ),
  "Framer Motion": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M5 3h14v6H11v4h8v8l-8-8H5V3z" />
    </svg>
  ),
  Lucide: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
};

function FallbackMark({ name }: { name: string }) {
  const letter = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
  return (
    <span className="flex h-5 w-5 items-center justify-center text-[10px] font-bold tracking-tight">
      {letter}
    </span>
  );
}

/** Diagonal constellation stack — no boxes, social-link energy. */
export function StackIcons({ items }: { items: StackItem[] }) {
  return (
    <ul className="relative flex w-full flex-wrap justify-center gap-x-5 gap-y-8 py-2 sm:gap-x-7 sm:gap-y-10">
      {items.map((item, i) => {
        const isMono = mono.has(item.name) || item.color === "#000000";
        const tilt = ((i % 5) - 2) * 5;
        const lift = (i % 3) * 8 - 8;
        return (
          <li
            key={item.name}
            className="group relative"
            style={{ transform: `translateY(${lift}px) rotate(${tilt}deg)` }}
          >
            <span
              className="inline-flex text-foreground/55 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-foreground group-focus-within:-translate-y-1 group-focus-within:scale-110"
              style={{ color: isMono ? undefined : item.color }}
              tabIndex={0}
              aria-label={item.name}
            >
              <span className="grayscale transition duration-300 group-hover:grayscale-0 group-focus-within:grayscale-0">
                {icons[item.name] ?? <FallbackMark name={item.name} />}
              </span>
            </span>
            <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 rotate-[-8deg] whitespace-nowrap rounded-md bg-foreground px-2 py-0.5 text-[11px] text-background opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
              {item.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
