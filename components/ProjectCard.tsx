"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { Reveal } from "./Reveal";

export function ProjectCard({
  project,
  delay = 0,
  priority = false,
}: {
  project: Project;
  delay?: number;
  priority?: boolean;
}) {
  const detailHref = `/projects/${project.slug}`;
  const titleHref = project.liveUrl || project.href;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/25">
        <Link
          href={detailHref}
          className="relative aspect-[16/10] shrink-0 overflow-hidden bg-muted/20"
          aria-label={`${project.title} details`}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover object-top grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
          />
        </Link>
        <div className="flex min-h-[8.5rem] flex-1 flex-col justify-between border-t border-border p-4 sm:min-h-[9rem] sm:p-5">
          <div>
            <a
              href={titleHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-1.5 inline-block text-base font-semibold break-words transition-colors hover:text-foreground/70"
            >
              {project.title}
            </a>
            <Link href={detailHref} className="block">
              <p className="text-sm leading-relaxed text-muted break-words">{project.description}</p>
            </Link>
          </div>
          {project.tags && project.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-muted/10 px-2 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
