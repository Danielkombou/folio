import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
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

      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
        {projects.items.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={Math.min(i * 0.06, 0.24)} />
        ))}
      </div>

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
