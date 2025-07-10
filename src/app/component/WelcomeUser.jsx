"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function WelcomeUser() {
  const router = useRouter();

  return (
    <div className="relative h-full lg:h-screen w-full bg-cover bg-center px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 bg-[url('/images/thanksImg.webp')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-0"></div>

      {/* Content */}
      <div className="relative  z-10 flex flex-col  items-center h-full text-center p-6 rounded-xl">
        <img src="/images/welcome.gif" alt="welcome" />
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-lg">
            🎉 Thank You!
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Your submission has been received successfully.
          </p>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            We appreciate your time and effort. Our team will get back to you
            shortly.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => router.back()}
            type="button"
            className="bg-[#3F83C0] cursor-pointer group  px-6 sm:px-8 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center "
          >
            <span className="w-8 bg-[#0f2c49] group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
            <span className="relative z-10">Go Back</span>
          </button>

          <Link
            href="/"
            className="text-[#3F83C0] border border-[#3F83C0] hover:bg-[#3F83C0] hover:text-white font-medium text-sm md:text-base px-6 py-3 rounded-lg transition duration-300 shadow-md"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeUser;
