import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StackIcons } from "@/components/StackIcons";
import { hero, projects, site, stack, writings } from "@/lib/data";

const featured = projects.items.slice(0, 2);

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl space-y-16 px-5 py-10 sm:space-y-20 sm:px-6 sm:py-14">
      <Reveal>
        <section className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            I&apos;m Daniel.
          </h1>
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
            {hero.intro}
          </p>
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
            {hero.previous}
          </p>
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 17v5M5 17h14v-5H5zM12 2v5M5 7h14" />
                <path d="M7 7l5-5 5 5" />
              </svg>
            }
          />
          <p className="mb-6 text-sm leading-relaxed text-muted sm:text-base">
            {projects.description}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.08} priority={i === 0} />
          ))}
        </div>
      </section>

      <Reveal>
        <section>
          <SectionHeader
            title="Tech stack"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 0l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 14.8 5.8 19.3l2.4-7.4L2 7.4h7.6z" />
              </svg>
            }
          />
          <p className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
            {stack.description}
          </p>
          <StackIcons items={stack.items} />
        </section>
      </Reveal>

      <Reveal>
        <section>
          <SectionHeader
            title="Latest writings"
            href="/writings"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            }
          />
          <p className="mb-6 text-sm leading-relaxed text-muted sm:text-base">
            {writings.description}
          </p>
          <ul className="space-y-5">
            {writings.items.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/writings/${w.slug}`}
                  className="flex items-center text-base transition-colors hover:text-foreground/70"
                >
                  <span className="shrink-0">{w.title}</span>
                  <span className="dotted-leader" />
                  <span className="shrink-0 text-right text-sm leading-tight text-muted">
                    {w.date}
                    <br />
                    {w.readTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="mb-2 text-base font-medium sm:text-lg">Newsletter</h2>
          <p className="mb-5 text-sm leading-relaxed text-muted sm:text-base">
            Get new writings and occasional project updates in your inbox.
          </p>
          <NewsletterForm />
        </section>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
