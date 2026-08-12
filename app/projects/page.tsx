import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects · Daniel Kombou",
  description: "Selected work by Daniel Kombou",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-xl space-y-12 px-6 py-16 sm:py-24">
      <Reveal>
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-block text-xs text-muted transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
          <p className="text-xs leading-relaxed text-muted">{projects.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.items.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 0.08} />
        ))}
      </div>

      <SiteFooter />
    </main>
  );
}
