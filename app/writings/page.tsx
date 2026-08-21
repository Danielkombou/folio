import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { writings } from "@/lib/data";

export const metadata = {
  title: "Writings",
  description: "Notes on engineering, mentoring, and clarity.",
};

export default function WritingsPage() {
  return (
    <main id="main-content" className="mx-auto max-w-2xl space-y-12 px-5 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Writings</h1>
          <p className="text-base leading-relaxed text-muted">{writings.description}</p>
        </div>
      </Reveal>

      <ul className="space-y-6">
        {writings.items.map((w, i) => (
          <Reveal key={w.slug} delay={i * 0.06}>
            <li>
              <Link
                href={`/writings/${w.slug}`}
                className="group block rounded-md border border-border bg-card p-5 transition-colors hover:border-foreground/25"
              >
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                  <h2 className="min-w-0 text-lg font-semibold break-words group-hover:underline group-hover:underline-offset-2">
                    {w.title}
                  </h2>
                  <span className="shrink-0 text-sm text-muted">
                    {w.date} · {w.readTime}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted sm:text-base">{w.excerpt}</p>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>

      <SiteFooter />
    </main>
  );
}
