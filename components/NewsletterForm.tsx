"use client";

export function NewsletterForm() {
  return (
    <form
      className="relative"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full rounded-lg border border-border bg-card px-4 py-3.5 pr-32 text-sm outline-none transition-colors focus:border-foreground/30"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-foreground/80 px-4 py-2.5 text-sm text-background transition-colors hover:bg-foreground"
      >
        Subscribe
      </button>
    </form>
  );
}
