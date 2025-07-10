import React from "react";
import Link from "next/link";

export default function CommonBanner({ name }) {
  return (
    <>
      <div className="relative text-white">
        <div
          className="bg-cover  bg-[position:34%_center] md:bg-[position:0%_center] 
 lg:bg-center bg-no-repeat relative bg-[url('/images/curGreenCommonBanner.webp')] h-[200PX] md:h-[40vh] xl:h-[400px] flex flex-col justify-center items-center"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-3xl md:text-5xl lg:text-6xl capitalize font-bold">
              {name}
            </h1>
            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium">{name}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
