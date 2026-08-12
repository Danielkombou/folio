import Link from "next/link";
import {
  site,
  hero,
  projects,
  experiments,
  writings,
} from "@/lib/data";

function SectionHeader({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="flex items-center gap-2 text-sm font-medium">
        {title}
        {icon}
      </h2>
      {href && (
        <Link href={href} className="text-xs text-muted hover:text-foreground transition-colors">
          View all →
        </Link>
      )}
    </div>
  );
}

function ProjectCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border overflow-hidden bg-card hover:border-foreground/20 transition-colors"
    >
      <div className="card-grid h-36 flex items-center justify-center">
        <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-sm font-bold shadow-sm">
          {icon}
        </div>
      </div>
      <div className="p-4 border-t border-border">
        <p className="text-sm font-semibold mb-1">{title}</p>
        <p className="text-xs text-muted leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16 sm:py-24 space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          I&apos;m Daniel.
        </h1>
        <p className="text-sm leading-relaxed text-foreground/80">{hero.intro}</p>
        <p className="text-sm leading-relaxed text-foreground/80">{hero.previous}</p>
        <p className="text-sm leading-relaxed text-foreground/80">
          If you value polish, speed, and attention to detail, we&apos;ll get along great.{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold underline underline-offset-2 hover:text-foreground/60 transition-colors"
          >
            {hero.cta}
          </a>
        </p>
      </section>

      {/* Projects */}
      <section>
        <SectionHeader
          title="Recent Project"
          href="/projects"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 17v5M5 17h14v-5H5zM12 2v5M5 7h14" />
              <path d="M7 7l5-5 5 5" />
            </svg>
          }
        />
        <p className="text-xs text-muted mb-5 leading-relaxed">{projects.description}</p>
        <div className="grid grid-cols-2 gap-3">
          {projects.items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Experiments */}
      <section>
        <SectionHeader
          title="Recent experiments"
          href="/experiments"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 14.8 5.8 19.3l2.4-7.4L2 7.4h7.6z" />
            </svg>
          }
        />
        <p className="text-xs text-muted mb-5 leading-relaxed">{experiments.description}</p>
        <div className="grid grid-cols-2 gap-3">
          {experiments.items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Writings */}
      <section>
        <SectionHeader
          title="Latest writings"
          href="/writings"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          }
        />
        <p className="text-xs text-muted mb-5 leading-relaxed">{writings.description}</p>
        <ul className="space-y-4">
          {writings.items.map((w) => (
            <li key={w.title} className="flex items-center text-sm">
              <span className="shrink-0">{w.title}</span>
              <span className="dotted-leader" />
              <span className="shrink-0 text-right text-xs text-muted leading-tight">
                {w.date}
                <br />
                {w.readTime}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Newsletter */}
      <section>
        <h2 className="text-sm font-medium mb-2">Newsletter</h2>
        <p className="text-xs text-muted mb-4 leading-relaxed">
          Get new writings and occasional project updates in your inbox.
        </p>
        <form className="relative">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-full border border-border bg-card px-5 py-3 pr-28 text-xs outline-none focus:border-foreground/30 transition-colors"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-foreground/80 text-background px-4 py-2 text-xs hover:bg-foreground transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-8 border-t border-border">
        <span className="text-xs text-muted">© {new Date().getFullYear()}</span>
        <div className="flex items-center gap-4">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {s.label === "GitHub" && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              )}
              {s.label === "LinkedIn" && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 010-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
