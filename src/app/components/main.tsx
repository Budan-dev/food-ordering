import Image from "next/image";
import Link from "next/link";
export default function Main() {
  return (
    <div className="w-full h-full bg-[#FFFFFF] flex flex-col justify-between items-center">
      <div className="w-[90%] flex justify-between items-center h-[54px]  p-5 mt-5">
        <Image
          src="/Chuks-Kitchen.svg"
          alt="ChuksKitchenLogo"
          width={182}
          height={41}
        />
        <Link href="/auth?mode=signin">
          <button className="text-[#1E88E5] cursor-pointer w-[160px] border-solid border-2 border-[#1E88E5] text-[16px] font-semibold px-4 py-2 rounded-[10px]">
            Sign In
          </button>
        </Link>
      </div>

      <div className="w-[557px] h-[475px] text-[#1F2937] flex flex-col  items-center justify-center rounded">
        <h3 className=" text-[32px] font-bold">
          Your Authentic Taste of Nigeria
        </h3>
        <p className="text-[16px] font-medium mt-2">
          Experience homemade flavors delivered fresh to your desk or home. We
          bring the rich culinary heritage of Nigeria right to your doorstep.
        </p>
        <div className="flex flex-wrap mt-3.5 gap-6">
          <div className="flex gap-4 w-full md:w-[45%] items-center">
            <Image src="/order.svg" alt="Image 1" width={44} height={44} />
            <p>Freshly Prepared</p>
          </div>

          <div className="flex gap-4 w-full md:w-[45%] items-center">
            <Image src="/order.svg" alt="Image 2" width={44} height={44} />
            <p>Support Local Business</p>
          </div>

          <div className="flex gap-4 w-full md:w-[45%] items-center">
            <Image src="/order-2.svg" alt="Image 3" width={44} height={44} />
            <p>Fast & Reliable Delivery</p>
          </div>
        </div>
        <button className="text-[#FFFFFF] w-full h-[60px] cursor-pointer w-[160px] bg-[#FF7A18] text-[16px] font-semibold px-4 py-2 rounded-[10px] mt-6">
          Start Your Order
        </button>
        <button className="text-[#1E88E5] w-full h-[60px] cursor-pointer w-[160px] border-solid border-2 border-[#1E88E5] text-[16px] font-semibold px-4 py-2 rounded-[10px] mt-6">
          Learn More About Us
        </button>
      </div>
      <div className="flex gap-3.5">
        <span>© 2024 Chuks Kitchen.</span>
        <span className="text-[#64B5F6]">Privacy Policy</span>
        <span className="text-[#64B5F6]">Terms of Service</span>
      </div>
    </div>
  );
}
