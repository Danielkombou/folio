"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/data";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    const subject = encodeURIComponent("Portfolio newsletter signup");
    const body = encodeURIComponent(
      `Please add me to your writing updates.\n\nEmail: ${trimmed}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form className="relative" onSubmit={onSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-lg border border-border bg-card px-4 py-3.5 pr-32 text-sm outline-none transition-colors focus:border-foreground/30"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-foreground/80 px-4 py-2.5 text-sm text-background transition-colors hover:bg-foreground"
      >
        Subscribe
      </button>
      {status === "sent" && (
        <p className="mt-2 text-sm text-muted" role="status">
          Opening your email client to finish signing up…
        </p>
      )}
    </form>
  );
}
