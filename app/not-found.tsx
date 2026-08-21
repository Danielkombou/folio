import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center space-y-6 px-5 py-10 text-center sm:px-6">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <h2 className="text-xl font-medium">Page not found</h2>
      <p className="text-base text-muted">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
      >
        Return home
      </Link>
    </main>
  );
}
