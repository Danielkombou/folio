import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { PrintButton } from "@/components/PrintButton";
import { site } from "@/lib/data";

export const metadata = {
  title: "Resume · Daniel Kombou",
  description: "Resume of Daniel Kombou - Software Engineer & Frontend Developer",
};

export default function ResumePage() {
  const resumeUrl = "https://app--resume-glass-5b32d5a8.base44.app/";

  return (
    <main className="mx-auto max-w-2xl space-y-10 px-5 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Resume</h1>
              <p className="mt-2 text-base text-muted">
                Frontend Developer & Program Manager at Tic Foundation.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30"
              >
                Open Full Resume ↗
              </a>
              <PrintButton />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-muted/20 px-4 py-3 flex items-center justify-between">
            <span className="text-xs font-mono text-muted">Daniel_Kombou_Resume.pdf</span>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground hover:underline"
            >
              View in new tab
            </a>
          </div>
          <div className="relative aspect-[1/1.3] w-full bg-background">
            <iframe
              src={resumeUrl}
              title="Daniel Kombou Resume"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
