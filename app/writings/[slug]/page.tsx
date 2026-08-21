import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { getWriting, writings, formatDate } from "@/lib/data";

export function generateStaticParams() {
  return writings.items.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWriting(slug);
  if (!writing) return { title: "Writing" };
  return {
    title: writing.title,
    description: writing.excerpt,
    openGraph: {
      title: `${writing.title} · Daniel Kombou`,
      description: writing.excerpt,
    },
    twitter: {
      card: "summary",
      title: `${writing.title} · Daniel Kombou`,
      description: writing.excerpt,
    },
  };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWriting(slug);
  if (!writing) notFound();

  return (
    <main id="main-content" className="mx-auto max-w-2xl space-y-10 px-5 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <div className="space-y-4">
          <Link
            href="/writings"
            className="inline-block text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Writings
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {writing.title}
          </h1>
          <p className="text-sm text-muted sm:text-base">
            {writing.date} · {writing.readTime}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <article className="space-y-5 text-base leading-relaxed text-foreground/90 sm:text-lg">
          {writing.content.map((paragraph, index) => (
            <p key={`${writing.slug}-${index}`}>{paragraph}</p>
          ))}
        </article>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
