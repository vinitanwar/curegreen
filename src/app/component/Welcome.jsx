"use client";

import React from "react";
import {
  FaSolarPanel,
  FaBatteryFull,
  FaSnowflake,
  FaWater,
  FaLeaf,
  FaGift,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";

export default function Welcome() {
  const welcome = [
    {
      title: "Energy-Efficient Split Systems",
      desc: "Replace gas systems with electric split ACs and claim your energy rebate.",
      icon: <FaSnowflake className="text-3xl text-[#3F83C0]" />,
    },
    {
      title: "Hot Water Heat Pumps",
      desc: "Save up to $2500 with VIC rebates by switching to efficient heat pumps.",
      icon: <FaWater className="text-3xl text-[#3F83C0]" />,
    },
   
    {
      title: "Ducted Heating & Cooling Air Conditioner",
      desc: "Enjoy precise, all-season comfort with ducted reverse cycle systems.",
      icon: <FaLeaf className="text-3xl text-[#3F83C0]" />,
    },
    {
      title: "Solar Power Solutions",
      desc: "Take control with clean, reliable solar energy for your home.",
      icon: <FaSolarPanel className="text-3xl text-[#3F83C0]" />,
    },
    // {
    //   title: "Home Battery Storage",
    //   desc: "Stay powered with custom battery systems—grid-connected or off-grid.",
    //   icon: <FaBatteryFull className="text-3xl text-[#3F83C0]" />,
    // },
    {
      title: "VEU Program Free Products",
      desc: "Get free energy-saving products via the Victorian Energy Upgrades.",
      icon: <FaGift className="text-3xl text-[#3F83C0]" />,
    },
  ];

  return (
    <div className="container relative mx-auto px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
      {/* <div className="absolute inset-0 h-[50%] bg-[#EBF1F5] -z-10"></div> */}

      <div className="text-center flex flex-col items-center gap-y-2">
        <h6 className="uppercase  relative text-[#3F83C0] font-semibold text-base">
          Welcome to CureGreen
        </h6>

        <h5 className="text-[#0F2C49] text-base  lg:text-lg md:font-bold leading-relaxed md:leading-tight">
          At CureGreen, we help clients cut energy costs with smart, sustainable
          solutions—shaping a cleaner, greener future."
        </h5>
      </div>

      <div className="mt-8 lg:mt-16">
        {/* <div className="hidden">
          <Swiper
            loop={true}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {welcome.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-xl transition duration-300 text-center flex flex-col items-center gap-4">
                  <div className="bg-[#EBF1F5] p-4 rounded-full">
                    {item.icon}
                  </div>
                  <h5 className="text-[#0F2C49] text-lg font-semibold">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <div className="flex flex-wrap justify-center  gap-6">
          {welcome.map((item, index) => (
            <div
              key={index}
              className="bg-white w-full md:w-[300px] lg:w-[400px] p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center flex flex-col items-center gap-4"
            >
              <div className="bg-[#EBF1F5] p-4 rounded-full">{item.icon}</div>
              <h5 className="text-[#0F2C49] text-lg font-semibold">
                {item.title}
              </h5>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
