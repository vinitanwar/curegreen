"use client";
import React, { useState, useEffect } from "react";
import { slugify } from "../slugify";
import Link from "next/link";
import { freeProducts } from "../freePoructData";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactNewForm from "./ContactNewForm";

export default function FreeProductDetail({ singleProduct }) {
  const {
    title,
    description,
    eligibility,
    installation,
    energySavings,
    features,
    img,
    innerDesc,
    innerFeature,
    imgList,
  } = singleProduct;

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % imgList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imgList.length]);

  return (
    <div>
      <div className="relative text-white">
        <div
          className="bg-cover  bg-[position:34%_center] md:bg-[position:0%_center] 
 lg:bg-center bg-no-repeat relative bg-[url('/images/curGreenCommonBanner.webp')] h-[200PX] md:h-[40vh] xl:h-[400px] flex flex-col justify-center items-center"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-3xl md:text-5xl lg:text-6xl capitalize font-bold">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium">{slugify(title)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-8 bg-white  md:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-full relative  h-80 lg:h-96 ">
              {imgList.map((imgCur, index) => (
                <img
                  src={imgCur}
                  alt={`slide ${index + 1}`}
                  className={`h-full w-full object-fill rounded-xl    absolute top-0 left-0 transition-opacity duration-1000 ease-in-out
              ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                />
              ))}
            </div>

            <div className="w-full space-y-5 p-4 md:p-0 text-justify md:text-start text-gray-800">
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              <p className="text-base leading-relaxed text-gray-700">
                {description}
              </p>

              {/* Eligibility and Details */}
              <div className="text-sm space-y-1">
                <p>
                  <span className="font-semibold text-gray-900">
                    Eligibility:
                  </span>{" "}
                  {eligibility}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Installation:
                  </span>{" "}
                  {installation}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Energy Savings:
                  </span>{" "}
                  {energySavings}
                </p>
              </div>

              {/* Key Features */}
              {features?.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-[#0F2C49] mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                    {features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Inner Description */}
              {innerDesc && (
                <div>
                  <h4 className="text-lg font-semibold text-[#0F2C49] mb-2">
                    More About This Product
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {innerDesc}
                  </p>
                </div>
              )}

              {/* Additional Features */}
              {innerFeature?.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-[#0F2C49] mb-2">
                    Additional Features
                  </h4>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm">
                    {innerFeature.map((feature, idx) => (
                      <li key={idx}>
                        <span className="font-semibold text-gray-800">
                          {feature.title}:
                        </span>{" "}
                        {feature.content}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Call-to-Action Button */}
              <div className="pt-4">
                <a
                  href="#form"
                  className="inline-block bg-yellow-400 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300"
                >
                  Enquiry Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-6 sticky top-0">
            <div className="border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm transition-all duration-300 hover:bg-gray-100">
              <h5 className="text-xl lg:text-2xl capitalize font-semibold text-gray-800">
                Free Products
              </h5>
              <hr className="border-gray-200" />
              <div className="space-y-3">
                {freeProducts.map((elm, index) => (
                  <Link
                    href={`/free-product/${slugify(elm.title)}`}
                    key={index}
                    className="flex items-center justify-between text-gray-500 hover:bg-gray-200 p-2 rounded-lg transition-all duration-300 group"
                  >
                    <span className="text-sm lg:text-base transition-colors duration-300 group-hover:text-green-600">
                      {elm.title}
                    </span>
                    <FaArrowRightLong className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-in-out" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/service/help.webp"
                alt="help"
                className="w-full h-auto object-cover"
              />
              <div className="bg-white p-4 lg:p-6 space-y-4">
                <h5 className="text-lg lg:text-xl capitalize font-semibold text-gray-800">
                  How can we help
                </h5>
                <p className="text-sm text-gray-600">
                  If you need any help, please feel free to contact us.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-[#eaf0ec] group-hover:bg-[#F6DD0B] transition-all duration-300 flex justify-center items-center h-14 w-14 rounded-full shrink-0">
                      <img
                        src="/images/service/icon-phone.svg"
                        alt="call"
                        className="h-6 w-6 object-contain group-hover:invert transition duration-300"
                      />
                    </div>
                    <a
                      href="tel:0475237850"
                      className="text-sm text-gray-700 group-hover:text-black transition duration-300"
                    >
                      0475237850
                    </a>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="bg-[#eaf0ec] group-hover:bg-[#F6DD0B] transition-all duration-300 flex justify-center items-center h-14 w-14 rounded-full shrink-0">
                      <img
                        src="/images/service/icon-mail.svg"
                        alt="mail"
                        className="h-6 w-6 object-contain group-hover:invert transition duration-300"
                      />
                    </div>
                    <a
                      href="mailto:InfoCureGreen@gmail.com"
                      className="text-sm text-gray-700 group-hover:text-black transition duration-300"
                    >
                      infocuregreen@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="form">
        <ContactNewForm />
      </div>
    </div>
  );
}
