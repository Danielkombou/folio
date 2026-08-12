"use client";

import type { StackItem } from "@/lib/data";

export function StackIcons({ items }: { items: StackItem[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li key={item.name} className="group relative">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-card transition-colors hover:border-foreground/25"
            style={{ color: item.color }}
            tabIndex={0}
            aria-label={item.name}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden
              className="grayscale transition duration-300 group-hover:grayscale-0 group-focus-within:grayscale-0"
            >
              <path d={item.icon} />
            </svg>
          </span>
          <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs text-foreground opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-within:opacity-100">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
