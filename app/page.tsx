import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { hero, projects, site, stack, writings } from "@/lib/data";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl space-y-16 px-6 py-16 sm:py-24">
      <Reveal>
        <section className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            I&apos;m Daniel.
          </h1>
          <p className="text-sm leading-relaxed text-foreground/80">{hero.intro}</p>
          <p className="text-sm leading-relaxed text-foreground/80">{hero.previous}</p>
          <p className="text-sm leading-relaxed text-foreground/80">
            If you value polish, speed, and attention to detail, we&apos;ll get along great.{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold underline underline-offset-2 transition-colors hover:text-foreground/60"
            >
              {hero.cta}
            </a>
          </p>
        </section>
      </Reveal>

      <section>
        <Reveal>
          <SectionHeader
            title="Recent Project"
            href="/projects"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 17v5M5 17h14v-5H5zM12 2v5M5 7h14" />
                <path d="M7 7l5-5 5 5" />
              </svg>
            }
          />
          <p className="mb-5 text-xs leading-relaxed text-muted">{projects.description}</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          {projects.items.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <Reveal>
        <section>
          <SectionHeader
            title="Tech stack"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 0l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 14.8 5.8 19.3l2.4-7.4L2 7.4h7.6z" />
              </svg>
            }
          />
          <p className="mb-5 text-xs leading-relaxed text-muted">{stack.description}</p>
          <ul className="flex flex-wrap gap-2">
            {stack.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <SectionHeader
            title="Latest writings"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            }
          />
          <p className="mb-5 text-xs leading-relaxed text-muted">{writings.description}</p>
          <ul className="space-y-4">
            {writings.items.map((w) => (
              <li key={w.title} className="flex items-center text-sm">
                <span className="shrink-0">{w.title}</span>
                <span className="dotted-leader" />
                <span className="shrink-0 text-right text-xs leading-tight text-muted">
                  {w.date}
                  <br />
                  {w.readTime}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="mb-2 text-sm font-medium">Newsletter</h2>
          <p className="mb-4 text-xs leading-relaxed text-muted">
            Get new writings and occasional project updates in your inbox.
          </p>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-border bg-card px-4 py-3 pr-28 text-xs outline-none transition-colors focus:border-foreground/30"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md bg-foreground/80 px-4 py-2 text-xs text-background transition-colors hover:bg-foreground"
            >
              Subscribe
            </button>
          </form>
        </section>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
