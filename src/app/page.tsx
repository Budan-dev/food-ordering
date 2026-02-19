import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col md:flex-row w-full h-screen">
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <Image
            src="/welcomeImage.svg"
            alt="Welcome Image Screen"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center"></div>
      </main>

      <Footer />
    </div>
  );
}
