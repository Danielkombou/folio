"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { Reveal } from "./Reveal";

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-foreground/25"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 50vw, 280px"
            className="object-cover object-top grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
          />
        </div>
        <div className="border-t border-border p-4">
          <p className="mb-1 text-sm font-semibold">{project.title}</p>
          <p className="text-xs leading-relaxed text-muted">{project.description}</p>
        </div>
      </Link>
    </Reveal>
  );
}
