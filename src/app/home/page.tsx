import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-full items-center justify-center font-sans ">
      <main className="flex  w-full h-auto flex-col items-center justify-center  ">
        <Image
          src="/home-img.svg"
          alt="Landing Image"
          width={500}
          height={500}
          className="w-full h-auto max-w-md"
        />
      </main>
    </div>
  );
}
