"use client";

import { useState } from "react";
import Image from "next/image";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full">
      <div className="flex flex-col  w-full items-center justify-center gap-1">
        <Image
          src="/Chuks-Kitchen.svg"
          alt="ChuksKitchenLogo"
          width={150}
          height={34}
          className="w-auto h-auto"
        />
        <h2 className="text-[24px] font-semibold">Login your Account</h2>
        <div className="text-left ">
          <label className="text-[14px]  font-medium text-gray-600">
            Email or phone number
          </label>
          <div className="relative">
            <span className="absolute left-3 inset-y-0 flex items-center">
              <img
                src="/mail.svg"
                alt="mail icon"
                className="w-5 h-5 text-gray-400"
              />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="border border-[#BDBDBD] mb-2 w-[350px] sm:w-[450px] h-[54px] rounded-[8px] pl-10 sm:pl-12 pr-3"
            />
          </div>
          <label className="text-[14px] font-medium text-gray-600">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 inset-y-0 flex items-center">
              <img
                src="/padlock.svg"
                alt="lock icon"
                className="w-5 h-5 text-gray-400"
              />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-[#BDBDBD] mb-2 w-[350px] sm:w-[450px] h-[54px] rounded-[8px] pl-10 sm:pl-12 pr-10 sm:pr-12"
            />

            <span className="absolute right-3 inset-y-0 flex items-center">
              <button
                type="button"
                onClick={() => setShowPassword((show) => !show)}
                className="text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 5c-7 0-11 6-11 7s4 7 11 7 11-6 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                    <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                ) : (
                  <img
                    src="/close-eye.svg"
                    alt="mail icon"
                    className="w-5 h-5 text-gray-400"
                  />
                )}
              </button>
            </span>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <span className="text-[12px]  text-[#1E88E5] cursor-pointer">
            Forgot password?
          </span>
        </div>
        <button className="bg-[#FF7A18] text-white py-2 rounded w-[350px] sm:w-[450px] h-[60px] mt-4">
          Continue
        </button>
        <span className="text-[12px] text-center text-[#1F2937] my-2">
          Or continue with
        </span>
      </div>
      <div className="grid gap-4 justify-center">
        <button className="border cursor-pointer bg-white border-[#BDBDBD] text-[14px] text-[#3B4758] p-2 w-[350px] sm:w-[450px] h-[50px] rounded-[8px] flex items-center justify-center gap-2">
          <img src="/Google.svg" alt="Google Icon" className="w-10 h-10" />
          Continue with Google
        </button>
        <button className="border cursor-pointer bg-white border-[#BDBDBD] text-[14px] text-[#3B4758] p-2 w-[350px] sm:w-[450px] h-[50px] rounded-[8px] flex items-center justify-center gap-2">
          <img src="/Facebook.svg" alt="Facebook Icon" className="w-10 h-10" />
          Continue with Facebook
        </button>
      </div>
    </form>
  );
}
