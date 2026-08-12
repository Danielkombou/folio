export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 border border-border rounded-lg m-8 sm:items-start">
        <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-foreground">
            Daniel Kombou
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            Full Stack Developer
          </p>
        </div>
      </main>
    </div>
  );
}
