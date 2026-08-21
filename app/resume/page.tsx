import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { resumeData, site } from "@/lib/data";

export const metadata = {
  title: "Resume",
  description: "Resume and experience for Daniel Kombou.",
};

export default function ResumePage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-2xl space-y-12 px-5 py-10 sm:px-6 sm:py-14"
    >
      <Reveal>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Resume
              </h1>
              <p className="mt-2 text-base text-muted">{site.name}</p>
            </div>
            <a
              href="/resume.pdf"
              download="Daniel_Kombou_Resume.pdf"
              className="inline-flex items-center rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
            >
              Download PDF
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Summary</h2>
          <p className="text-base leading-relaxed text-foreground/85">
            {resumeData.summary}
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
          {resumeData.experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="space-y-2">
              <div>
                <h3 className="text-base font-semibold">{job.role}</h3>
                <p className="text-sm text-muted">
                  {job.company} · {job.location}
                </p>
                <p className="text-sm text-muted">{job.period}</p>
              </div>
              <ul className="list-disc space-y-1.5 pl-5 text-base leading-relaxed text-foreground/85">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Education</h2>
          {resumeData.education.map((ed) => (
            <div key={`${ed.degree}-${ed.period}`}>
              <h3 className="text-base font-semibold">{ed.degree}</h3>
              <p className="text-sm text-muted">
                {ed.institution} · {ed.location}
              </p>
              <p className="text-sm text-muted">{ed.period}</p>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
          <div className="space-y-3 text-base leading-relaxed text-foreground/85">
            <p>
              <span className="font-medium text-foreground">Technical: </span>
              {resumeData.skills.technical.join(", ")}
            </p>
            <p>
              <span className="font-medium text-foreground">Tools: </span>
              {resumeData.skills.tools.join(", ")}
            </p>
            <p>
              <span className="font-medium text-foreground">Soft skills: </span>
              {resumeData.skills.soft.join(", ")}
            </p>
            <p>
              <span className="font-medium text-foreground">Languages: </span>
              {resumeData.skills.languages.join(", ")}
            </p>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
