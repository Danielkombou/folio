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
    <div className="mb-3 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-sm font-medium">
        {title}
        {icon}
      </h2>
      {href && (
        <Link
          href={href}
          className="text-xs text-muted transition-colors hover:text-foreground"
        >
          View all →
        </Link>
      )}
    </div>
  );
}
