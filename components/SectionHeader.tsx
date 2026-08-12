import Link from "next/link";

export function SectionHeader({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h2 className="flex items-center gap-2 text-base font-medium sm:text-lg">
        {title}
        {icon}
      </h2>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-sm text-muted transition-colors hover:text-foreground"
        >
          View all →
        </Link>
      )}
    </div>
  );
}
