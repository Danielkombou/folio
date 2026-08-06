import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start relative overflow-hidden">
        <div className="cross-lines" />
        <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Image
            className="rounded-full object-cover"
            src="/profile.jpg"
            alt="Daniel Kombou"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Daniel Kombou
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Full Stack Developer
          </p>
        </div>
      </main>
    </div>
  );
}
