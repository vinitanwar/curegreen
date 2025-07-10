"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

import { Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems(visibleItems + 6);
  };

  const Gallery = [
    {
      img: "/images/all/1n.webp",
      title: "Commercial Ventilation Upgrade",
      description:
        "Improved airflow solutions for enhanced indoor air quality in offices.",
    },
    {
      img: "/images/all/2n.webp",
      title: "Thermostat Upgrade Program",
      description: "Enabled remote temperature control with smart devices.",
    },
    {
      img: "/images/all/3n.webp",
      title: "Thermostat Upgrade Program",
      description: "Enabled remote temperature control with smart devices.",
    },
    {
      img: "/images/all/4n.webp",
      title: "Urgent AC Repair",
      description:
        "Quick restoration of cooling functionality during summer breakdowns.",
    },
    {
      img: "/images/all/5n.webp",
      title: "Seasonal AC Maintenance",
      description:
        "Inspections and servicing to keep ACs running smoothly year-round.",
    },
    {
      img: "/images/all/6n.webp",
      title: "Professional Duct Cleaning",
      description:
        "Removed dust buildup and improved airflow across ventilation systems.",
    },
    {
      img: "/images/all/7n.webp",
      title: "Indoor Air Purification",
      description:
        "Setup of filtration units to ensure healthy indoor environments.",
    },
    {
      img: "/images/all/8n.webp",
      title: "Home Efficiency Boost",
      description:
        "Implemented energy-saving techniques for a greener household.",
    },
    {
      img: "/images/all/9n.webp",
      title: "Apartment Energy Audit",
      description:
        "Analyzed energy patterns and optimized electrical appliance usage.",
    },
    {
      img: "/images/all/10n.webp",
      title: "Complete HVAC Setup",
      description:
        "End-to-end installation of HVAC systems in residential buildings.",
    },
    {
      img: "/images/all/11n.webp",
      title: "LED Lighting Upgrade",
      description: "Replaced outdated bulbs with efficient LED alternatives.",
    },
    {
      img: "/images/all/12n.webp",
      title: "Smart Climate Control",
      description:
        "Installed intelligent thermostats for customized room temperatures.",
    },
    {
      img: "/images/all/13n.webp",
      title: "Smart Climate Control",
      description:
        "Installed intelligent thermostats for customized room temperatures.",
    },
    {
      img: "/images/all/14n.webp",
      title: "Smart Thermostat Integration",
      description:
        "Enhanced energy efficiency by integrating smart thermostats for room-by-room temperature control.",
    },
    {
      img: "/images/all/15n.webp",
      title: "Advanced Climate Automation",
      description:
        "Implemented automated climate systems to adapt indoor temperatures based on usage and time of day.",
    },
    {
      img: "/images/all/16n.webp",
      title: "Heat Pump",
      description:
        "Efficiently regulate your home's heating and cooling with our advanced heat pump technology.",
    },
    {
      img: "/images/all/17n.webp",
      title: "Heat Pump",
      description:
        "Maximize energy savings year-round with a smart heat pump designed for modern living.",
    },
    {
      img: "/images/all/18n.webp",
      title: "Heat Pump",
      description:
        "Experience consistent comfort in every season with our high-performance heat pump system.",
    },
    {
      img: "/images/all/19n.webp",
      title: "AirCon",
      description:
        "Stay cool and comfortable with our powerful and energy-efficient air conditioning units.",
    },
    {
      img: "/images/all/20n.webp",
      title: "AirCom",
      description:
        "Smart air management made simple — AirCom offers precise climate control for every room.",
    },
  ];

  const pathName = usePathname();

  return (
    <div className="container relative mx-auto px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
      <div className="absolute inset-0 h-[50%] bg-[#EBF1F5] -z-10"></div>
      <div className="text-center flex flex-col  items-center gap-y-2 ">
        <h6 className="uppercase sub-title w-fit relative text-[#3F83C0] font-semibold text-sm sm:text-base">
          Our Gallery
        </h6>

        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mt-2">
          Gallery of Our Installations
        </h2>
      </div>

      <div className="block lg:hidden mt-4 lg:mt-16  gap-y-8 gap-x-10 lg:gap-x-32">
        <Swiper
          loop={true}
          className="mySwiper h-full"
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
              spaceBetween: 40,
            },
          }}
        >
          {Gallery.map((item, index) => (
            <SwiperSlide className="py-8">
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:block mt-8 lg:mt-16  gap-y-8 gap-x-10 lg:gap-x-32">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Gallery.slice(0, visibleItems).map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[350px] object-fill transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {pathName=="/gallery/" && visibleItems < Gallery.length && (
            <div className="text-center flex justify-center mt-4">
              <button
                onClick={loadMore}
                className="text-gray-800 flex items-center gap-x-4 cursor-pointer py-2 px-6 rounded-lg font-semibold"
              >
                Load More <FaArrowDownLong className="animate-bounce" />
              </button>
            </div>
          )}

          {pathName !== "/gallery/" && (
            <div className="flex justify-center mt-4">
              <Link
                href="/gallery"
              
              >
                 <span className="relative z-10">View More</span>
               
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
