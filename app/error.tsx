"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center space-y-6 px-5 py-10 text-center sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Something went wrong</h1>
      <p className="text-base text-muted">
        An unexpected error occurred. We have been notified and are looking into it.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          type="button"
          className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
