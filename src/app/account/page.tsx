import Image from "next/image";

export default function Account() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black w-full
    "
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Account page
        </h1>
      </main>
    </div>
  );
}
