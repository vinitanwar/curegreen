"use client";
import React from "react";


import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

export default function ServiceAndProducts() {
  const slides = [
    { id: 1, img: "/images/hero/1.webp" },
    { id: 2, img: "/images/hero/2.webp" },
    { id: 3, img: "/images/hero/3.webp" },
    { id: 4, img: "/images/hero/4.webp" },
  ];
  const serViceProducts = [
    {
      title: "Reverse Cycle Air Conditioner",
      desc: "Reverse cycle air conditioners offer both cooling and heating, delivering year-round comfort while maintaining energy efficiency in homes and offices.",
      // img: "/images/ServiceAndProducts/1n.webp",
      img: "/images/ServiceAndProducts/DUCTED.webp",
      link: "/reverse-cycle-air-conditioner",
    },
    {
      title: "Hot Water Heat Pump",
      desc: "Hot water heat pumps efficiently use ambient air to heat water, providing an energy-saving and eco-friendly solution for residential and commercial needs.",
      // img: "/images/ServiceAndProducts/2.webp",
            img: "/images/posters/Hot Water/Hot Water Pump - All in 1 Portrait (960x1200).webp",
      link: "/hot-water-heat-pump",
    },
    {
      title: "Solar Panels",
      desc: "Solar panels harness sunlight to generate clean, renewable electricity for homes and businesses, helping reduce energy bills and carbon footprint.",
      // img: "/images/ServiceAndProducts/solar3.webp",
      // img: "/images/hero/4.webp",
            img: "/images/posters/Solar System/Solar System Portrait (960x1200).webp",

      link: "/solar-panels",
    },

    {
      title: "Free Products",
      desc: "Access a range of energy-efficient products at no cost through government-supported programs, helping you save energy and reduce utility expenses.",
      // img: "/images/ServiceAndProducts/4.webp",
      img: "/images/posters/Free Products/Free Products Portrait (960x1200).webp",
      link: "/free-product",
    },
  ];

  return (
    <div className="container relative mx-auto px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
      <div className="text-center flex flex-col  items-center gap-y-2 ">
        <h6 className="uppercase  relative text-[#3F83C0] font-semibold  text-base ">
          Services and Products
        </h6>

        <h5 className="text-[#0F2C49] text-base   lg:text-lg md:font-bold leading-relaxed md:leading-tight">
         
          CureGreen provides eco-friendly solutions like solar panels, hot water
          systems, and air conditioners to promote sustainable living at home.
        </h5>
      </div>

      <div className="mt-8 lg:mt-16  gap-y-8 gap-x-10 lg:gap-x-32">

            

        <div className="hidden md:block lg:hidden">
          <Swiper
            loop={true}
            className="mySwiper"
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {serViceProducts.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white h-full flex flex-col border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-72 "
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-[#0F2C49] text-lg font-bold mb-2 text-center">
                      {item.title}
                    </h3>
                    <div className="mt-auto flex justify-center">
                      <Link
                        href={item.link}
                        className="bg-[#3F83C0] hover:bg-[#2c5c8e] text-white text-sm font-medium py-2 px-5 rounded-full transition"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2  md:hidden lg:grid lg:grid-cols-4  gap-y-10 lg:gap-6">
          {serViceProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white  rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 md:h-[350px]"
              />
              <div className="p-4 flex flex-col flex-grow mt-4">
                <h3 className="text-[#0F2C49] text-lg font-bold mb-2 text-center">
                  {item.title}
                </h3>

                <div className="mt-auto flex justify-center">
                  <Link
                    href={item.link}
                    className="bg-[#3F83C0] hover:bg-[#2c5c8e] text-white text-sm font-medium py-2 px-5 rounded-full transition"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
