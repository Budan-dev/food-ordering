import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full font-poppins min-h-[500px] border-t text-white bg-[#8f5e38] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-16 px-6 md:px-16 py-20 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2 w-[230px]">
          <Image
            src="/Chuks-Kitchen.svg"
            alt="ChuksKitchenLogo"
            width={150}
            height={34}
            className="w-auto h-auto"
          />
          <h2 className="text-[24px] md:text-[23px] leading-relaxed">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </h2>
        </div>

        <div className="flex flex-col items-center md:items-start w-[230px]">
          <h2 className="text-[24px] font-semibold mb-3">Quick Links</h2>
          <div className="flex flex-col gap-3">
            <p className="text-[12px]">Home</p>
            <p className="text-[12px]">Explore</p>
            <p className="text-[12px]">My Order</p>
            <p className="text-[12px]">Account</p>
            <p className="text-[12px]">Contact</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-[230px]">
          <h2 className="text-[24px] font-semibold mb-3">Contact Us</h2>
          <div className="flex flex-col gap-3">
            <p className="text-[12px]">+234 801 234 5678</p>
            <p className="text-[12px]">hello@chukskitchen.com</p>
            <p className="text-[12px]">123 Taste Blvd, Lagos, Nigeria</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-[230px]">
          <div className="flex flex-col gap-3">
            <p className="text-[12px]">Facebook</p>
            <p className="text-[12px]">Twitter</p>
            <p className="text-[12px]">LinkedIn</p>
            <p className="text-[12px]">Instagram</p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 pb-8 text-[12px]">
        © 2020 Lift Media. All rights reserved.
      </div>
    </footer>
  );
}
