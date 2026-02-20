import Image from "next/image";
import { ReactNode } from "react";

interface SideImageLayoutProps {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  bgColor?: string;
  height?: string;
  hideImageOnMobile?: boolean;
}

export default function SideImageLayout({
  imageSrc,
  imageAlt,
  children,
  bgColor = "bg-amber-100",
  height = "h-[1024px]",
  hideImageOnMobile = false,
}: SideImageLayoutProps) {
  return (
    <main className={`flex flex-row w-full ${height}`}>
      <div
        className={`w-full relative ${hideImageOnMobile ? "hidden md:block" : ""}`}
      >
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-[#FF7A18]/70 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Chuks Kitchen
          </h1>
          <p className="text-lg md:text-xl text-center max-w-md">
            Your journey to delicious, authentic Nigerian meals starts here.
            Sign up or log in to order your favorites today
          </p>
        </div>
      </div>

      <div
        className={`w-full ${bgColor}  flex items-center  justify-center ${hideImageOnMobile ? "md:w-full" : ""}`}
      >
        {children}
      </div>
    </main>
  );
}
