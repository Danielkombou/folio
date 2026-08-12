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
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/25"
      >
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-muted/20">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover object-top grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
          />
        </div>
        <div className="flex min-h-[7.5rem] flex-1 flex-col border-t border-border p-4 sm:min-h-[8rem] sm:p-5">
          <p className="mb-1.5 text-base font-semibold">{project.title}</p>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        </div>
      </Link>
    </Reveal>
  );
}
