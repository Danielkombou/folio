import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} · Daniel Kombou`,
      description: project.description,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Daniel Kombou`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="mx-auto max-w-2xl space-y-12 px-5 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <div className="space-y-4">
          <Link
            href="/projects"
            className="inline-block text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Projects
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
              >
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30"
              >
                GitHub Repository ↗
              </a>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted/20">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 672px"
            className="object-cover object-top"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="space-y-6">
          {project.longDescription && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
              <p className="text-base leading-relaxed text-foreground/85">
                {project.longDescription}
              </p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">Key Features</h2>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/85">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-card px-3 py-1 text-sm text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
