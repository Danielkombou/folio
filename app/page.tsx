import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StackIcons } from "@/components/StackIcons";
import { hero, projects, site, stack, writings, formatDate } from "@/lib/data";

const featured = projects.items.slice(0, 2);

export default function Home() {
  return (
    <main id="main-content" className="mx-auto max-w-2xl space-y-16 px-5 py-10 sm:space-y-20 sm:px-6 sm:py-14">
      <Reveal>
        <section className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            I&apos;m Daniel.
          </h1>
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
            I&apos;m a software engineer building technology that creates opportunities and
            solves real-world problems. Currently building{" "}
            <a
              href="https://certigen-swart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 transition-colors hover:text-foreground/60"
            >
              CertiGen
            </a>
            .
          </p>
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
            Frontend Developer & Program Facilitator at{" "}
            <a
              href="https://www.linkedin.com/company/tic-foundation/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 transition-colors hover:text-foreground/60"
            >
              TiC Foundation
            </a>
            , where I mentor interns and ship tools for education across Africa.
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
            title="Recent projects"
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
            <ProjectCard key={p.slug} project={p} delay={i * 0.08} priority={i === 0} />
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
          <p className="mb-6 text-sm leading-relaxed text-muted sm:text-base">
            {stack.description}
          </p>
          <StackIcons stages={stack.stages} />
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
                  className="group flex flex-col gap-1.5 transition-colors hover:text-foreground/70 md:flex-row md:items-center md:gap-0"
                >
                  <span className="min-w-0 text-base leading-snug break-words md:shrink-0">
                    {w.title}
                  </span>
                  <span className="dotted-leader hidden md:block" />
                  <span className="shrink-0 text-sm text-muted md:text-right md:leading-tight">
                    <span className="md:hidden">{formatDate(w.date)} · {w.readTime}</span>
                    <span className="hidden md:inline">
                      {formatDate(w.date)}
                      <br />
                      {w.readTime}
                    </span>
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
