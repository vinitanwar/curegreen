import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiFireLine } from "react-icons/ri";
import { SiAffinity } from "react-icons/si";
import Link from "next/link";
export default function Choose() {
  return (
    <div className="relative xl:max-h-[150vh] overflow-hidden pt-10">
      <div className="px-5 md:px-12 xl:px-32   relative z-40 -mb-40">
        <div className="bg-[url('/images/why/bg.webp')] bg-cover bg-center bg-[#3f83c0] rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 items-center px-6 md:px-10 py-8  md:h-[230px] text-white gap-6">
          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-2xl md:text-3xl  font-bold leading-tight">
              Need An Air Conditioner Technician
            </h3>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact-us"
              className="h-20 w-20 lg:h-24 lg:w-24 bg-white hover:bg-black rounded-full transition-all duration-500 flex items-center justify-center cursor-pointer hover:rotate-y-180"
            >
              <FiPhoneCall className="text-red-500 text-3xl lg:text-4xl" />
            </Link>
          </div>

          <div className="flex flex-col text-center md:text-right">
            <span className="text-gray-200 text-sm md:text-base">
              Get Professional Help
            </span>
            <a
              href="tel:0426722199 "
              className="text-2xl md:text-3xl xl:text-4xl font-bold mt-1"
            >
              0426722199
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#0F2C49]">
            <img
              src="/images/why/bg1.webp"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-black  hidden md:flex items-center justify-center">
            <video
              src="/images/all/v1.mp4"
              // src="/images/why/vd.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
            ></video>
          </div>
        </div>

        <div className="relative z-20 text-white px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16  pt-48 md:pt-52 lg:pt-64 xl:pt-48  grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-3">
              <h6 className="uppercase sub-title relative text-gray-400 font-semibold text-sm sm:text-base">
                why choose us
              </h6>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Sustainable <br /> Energy Solutions
              </h2>
            </div>
            <p className="text-gray-400 max-w-lg">
              CureGreen is an energy saving company dedicated to enhancing the
              efficiency of residential and business spaces through innovative
              eco-friendly solutions cillum dolore eu fugiat nulla pariatur. Get
              the best service from professionals.
            </p>

            <div className="space-y-6">
              <div className="flex group flex-col md:flex-row items-start md:items-center gap-4">
                <div className="h-16 w-16 lg:h-20 lg:w-20 bg-white group-hover:bg-black rounded-full transition-all duration-500 flex items-center justify-center cursor-pointer group-hover:rotate-y-180">
                  <SiAffinity className="text-red-500 text-2xl lg:text-3xl " />
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-semibold">
                    Affordable Service Prices
                  </h5>
                  <p className="text-gray-400 text-sm">
                    There are many variations of passages of lorem but the
                    majority.
                  </p>
                </div>
              </div>

              <div className="flex  group flex-col md:flex-row items-start md:items-center gap-4">
                <div className="h-16 w-16 lg:h-20 lg:w-20 bg-white group-hover:bg-black rounded-full transition-all duration-500 flex items-center justify-center cursor-pointer group-hover:rotate-y-180">
                  <RiFireLine className="text-red-500 text-2xl lg:text-3xl" />
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-semibold">
                    Quick & Reliable Services
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Experienced technicians providing solutions with top-notch
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
