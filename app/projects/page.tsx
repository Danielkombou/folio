import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectList } from "@/components/ProjectList";
import { projects, site } from "@/lib/data";

export const metadata = {
  title: "Projects · Daniel Kombou",
  description: "Selected work by Daniel Kombou",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-2xl space-y-12 px-5 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
          <p className="text-base leading-relaxed text-muted">{projects.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <ProjectList items={projects.items} />
      </Reveal>

      <Reveal>
        <div className="flex justify-center">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-foreground hover:text-background"
          >
            See more on GitHub
            <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
