"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/data";

export function ProjectList({ items }: { items: Project[] }) {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = ["All", ...Array.from(new Set(items.flatMap((p) => p.tags || [])))];

  const filteredItems =
    selectedTag === "All"
      ? items
      : items.filter((p) => p.tags?.includes(selectedTag));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
              selectedTag === tag
                ? "bg-foreground text-background"
                : "border border-border bg-card text-muted hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
        {filteredItems.map((p, i) => (
          <ProjectCard key={p.slug} project={p} delay={Math.min(i * 0.06, 0.24)} />
        ))}
      </div>
    </div>
  );
}
