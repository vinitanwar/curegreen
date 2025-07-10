"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  FaClipboardCheck,
  FaCalendarAlt,
  FaTools,
  FaPiggyBank,
} from "react-icons/fa";

import { freeProducts } from "../freePoructData";
import { slugify } from "../slugify";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";
import VideoGalleryShow from "./VideoGalleryShow";
import ContactNewForm from "./ContactNewForm";

export default function FreeProductInner() {
  const Blogs = [
    // {
    //   img: "/images/all/shower.mp4",
    //   date: "April 10, 2025",
    //   title: "Claim Your Free Shower",
    //   desc: "Experience a refreshing shower like never before with our premium shower set, now available for free. Upgrade your bathroom effortlessly – just pay shipping!",
    // },
    // {
    //   img: "/images/all/freeProdcut1.mp4",
    //   date: "April 10, 2025",
    //   title: "Free Modern Chimney for Your Kitchen",
    //   desc: "Breathe easier while cooking. Get a stylish, high-performance chimney for free — just pay for delivery and enjoy a cleaner kitchen atmosphere.",
    // },
    // {
    //   img: "/images/all/freeProdcut2.mp4",
    //   date: "April 10, 2025",
    //   title: "Claim Your Free Shower Kit ",
    //   desc: "Revamp your bathroom with our exclusive shower kit offer. Claim yours now for free and experience unmatched comfort — shipping charges apply.",
    // },

  {
      embedUrl: "https://www.youtube.com/embed/xd3FNocWt6Q",
      date: "June 28, 2025",
      title: "Shower upgrade under VEU Program",
      desc: "YouTube Shorts showing a shower upgrade completed under the VEU program.",
      isEmbed: true,
    },

    {
      embedUrl: "https://www.youtube.com/embed/EUjs-BUkUaU",
      date: "April 10, 2025",
      title: "Claim Your Free Shower Kit ",
      desc: "Revamp your bathroom with our exclusive shower kit offer. Claim yours now for free and experience unmatched comfort",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/lkt_rgW065g",
      date: "April 10, 2025",
      title: "Free Modern Chimney for Your Kitchen",
      desc: "Breathe easier while cooking. Get a stylish, high-performance chimney for free — just pay for delivery and enjoy a cleaner kitchen atmosphere.",
      isEmbed: true,
    },
  ];

  const steps = [
    {
      icon: <FaClipboardCheck className="text-green-600 text-5xl mb-6" />,
      title: "Check Eligibility",
      description:
        "Enter your property information to find out if you're eligible for free energy-efficient upgrades under the VEU Program.",
    },
    {
      icon: <FaCalendarAlt className="text-green-600 text-5xl mb-6" />,
      title: "Book a Visit",
      description:
        "Select a convenient time to explore energy-saving products and schedule your installation.",
    },
    {
      icon: <FaTools className="text-green-600 text-5xl mb-6" />,
      title: "Get Installed",
      description:
        "Our certified professionals will install the selected products with care and efficiency.",
    },
    {
      icon: <FaPiggyBank className="text-green-600 text-5xl mb-6" />,
      title: "Start Saving",
      description:
        "Lower your energy bills and enjoy long-term savings with eco-friendly upgrades.",
    },
  ];

  const slides = [
    {
      id: 1,
      img: "/images/posters/Free Products/In-Home Display Landscape Poster (1200 x 628 px).webp",
    },
    {
      id: 2,
      img: "/images/posters/Free Products/Free Products Landscape (1200 x 628 px).webp",
    },
    {
      id: 3,
      img: "/images/posters/Free Products/Shower Head Landscape Poster (1200 x 628 px).webp",
    },
    {
      id: 4,
      img: "/images/posters/Free Products/Weather Sealing Landscape Poster (1200 x 628 px).webp",
    },
  ];

  const [actives, setActives] = useState(() => freeProducts.map(() => 0));

  useEffect(() => {
    const intervals = freeProducts.map((product, productIndex) =>
      setInterval(() => {
        setActives((prevActives) => {
          const newActives = [...prevActives];
          const imgListLength = freeProducts[productIndex].imgList.length;
          newActives[productIndex] =
            (newActives[productIndex] + 1) % imgListLength;
          return newActives;
        });
      }, 5000)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  const swiperRef = useRef(null);

  return (
    <>
      <HeroSection slides={slides} />

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C49]">
            Get 100% Free Products with CureGreen
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Take advantage of the Victorian Energy Upgrade (VEU) Program and
            upgrade to energy-efficient products—completely free!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F9FAFB]   px-5 md:px-12 xl:px-32  py-8 md:py-12 xl:pt-16 xl:py-0">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C49]">
              Free Products
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              There are government approved products for saving energy for free
            </p>
          </div>

          <div className="space-y-12">
            {freeProducts.map((product, productIndex) => (
              <div
                key={productIndex}
                className={`flex flex-col ${
                  productIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center justify-between bg-white p-4 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300`}
              >
                <div className="w-full flex justify-center lg:w-1/2 mb-6 lg:mb-0">
                  <div className="h-80 w-80 relative">
                    {product.imgList.map((imgSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imgSrc}
                        alt={`slide-${imgIndex + 1}`}
                        className={`h-full w-full object-cover rounded-full shadow-md transform hover:scale-110 transition-all duration-1000 absolute top-0 left-0 ease-in-out ${
                          actives[productIndex] === imgIndex
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-1/2 text-left space-y-6">
                  <h3 className="text-2xl font-semibold text-[#0F2C49] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-base text-gray-700">
                    {product.description}
                  </p>

                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      <strong>Eligibility:</strong> {product.eligibility}
                    </p>
                    <p>
                      <strong>Installation:</strong> {product.installation}
                    </p>
                    <p>
                      <strong>Energy Savings:</strong> {product.energySavings}
                    </p>
                  </div>

                  <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                    <h4 className="font-semibold text-xl mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#form"
                      className="bg-yellow-400 group rounded px-6 sm:px-8 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center"
                    >
                      <span className="w-8 bg-yellow-500 group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
                      <span className="relative z-10">Enquiry</span>
                    </a>
                    <Link
                      href={`/free-product/${slugify(product.title)}`}
                      className="text-black border hover:bg-yellow-400 border-yellow-400 group rounded px-6 sm:px-8 py-3 hover:text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center"
                    >
                      <span className="w-8 group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
                      <span className="relative z-10">Know More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-12 xl:px-32 bg-gray-50 py-8 md:py-12 xl:py-16">
        <div className="text-center flex flex-col items-center gap-y-2">
          <h6 className="uppercase sub-title w-fit relative text-[#3F83C0] font-semibold text-sm sm:text-base">
            Video Gallery
          </h6>

          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mt-2">
            Explore Our Installations in Action
          </h2>
        </div>

        <div className="mt-4 lg:mt-16  ">
          <VideoGalleryShow Blogs={Blogs} />
        </div>
      </section>

      <Testimonials />

      <div id="form">
        <ContactNewForm service="Free product" />
      </div>
    </>
  );
}
