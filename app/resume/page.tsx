import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { resumeData, site } from "@/lib/data";

export const metadata = {
  title: "Resume · Daniel Kombou",
  description: "Resume of Daniel Kombou - Software Engineer & Frontend Developer",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-2xl space-y-12 px-5 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-block text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Home
            </Link>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Resume</h1>
          </div>
          <div>
            <button
              onClick="window.print()"
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80 print:hidden"
            >
              Print / Save PDF 🖨️
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="space-y-8 rounded-xl border border-border bg-card p-6 sm:p-8">
          {/* Header */}
          <div className="border-b border-border pb-6 space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">{site.name}</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span>📧 {site.email}</span>
              <span>📞 +237 650503544</span>
              <span>📍 Cameroon - Yaoundé</span>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                🔗 GitHub
              </a>
              <a
                href="https://linkedin.com/in/kombou-daniel-b394b92a5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
              {resumeData.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Work Experience
            </h3>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                  <h4 className="font-semibold text-foreground">{exp.role}</h4>
                  <span className="text-sm text-muted">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-muted">
                  {exp.company} · {exp.location}
                </p>
                <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/85">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Education
            </h3>
            <div className="space-y-3">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                  <div>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted">{edu.institution} · {edu.location}</p>
                  </div>
                  <span className="text-sm text-muted">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-lg border border-border/60 bg-muted/10 p-3.5 space-y-1.5">
                <span className="font-semibold text-foreground">Technical Stack</span>
                <p className="text-muted leading-relaxed">{resumeData.skills.technical.join(", ")}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/10 p-3.5 space-y-1.5">
                <span className="font-semibold text-foreground">Tools & Software</span>
                <p className="text-muted leading-relaxed">{resumeData.skills.tools.join(", ")}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/10 p-3.5 space-y-1.5">
                <span className="font-semibold text-foreground">Soft Skills</span>
                <p className="text-muted leading-relaxed">{resumeData.skills.soft.join(", ")}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/10 p-3.5 space-y-1.5">
                <span className="font-semibold text-foreground">Languages</span>
                <p className="text-muted leading-relaxed">{resumeData.skills.languages.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
