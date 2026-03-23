import Footer from "./components/footer";
import Main from "./components/main";
import SideImageLayout from "./components/side-image-layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="md:hidden">
        <div className="flex justify-center">
          <div className="relative w-[95%] h-[160px]">
            <Image
              src="/mobile-frame.svg"
              alt="Welcome Image Screen"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-end p-4">
          <Link href="/auth?mode=signin">
            <button className="text-[#1E88E5] cursor-pointer w-[160px] sm:w-[118px] md:w-[118px] border-solid border-2 border-[#1E88E5] text-[16px] font-semibold px-4 py-2 rounded-[10px]">
              Sign In
            </button>
          </Link>
        </div>
        <div className="flex justify-center p-4 mb-8">
          <Image
            src="/Chuks-Kitchen.svg"
            alt="ChuksKitchenLogo"
            width={182}
            height={41}
          />
        </div>
      </div>
      <div className="md:hidden">
        <Main />
      </div>
      <div className="hidden md:flex w-full h-[1024px]">
        <div className="w-full relative">
          <Image
            src="/welcomeImage.svg"
            alt="Welcome Image Screen"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full  flex items-center justify-center">
          <Main />
        </div>
      </div>

      <Footer />
    </div>
  );
}
