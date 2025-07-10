"use client";

import React, { useRef } from "react";
import Link from "next/link";

import { FaPercentage, FaLink } from "react-icons/fa";
import { GiSolarPower, GiBatteryPackAlt, GiWaterDrop } from "react-icons/gi";
import { FaBolt, FaFireAlt, FaLeaf } from "react-icons/fa";
import HeroSection from "./HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaClipboardCheck, FaPiggyBank } from "react-icons/fa6";

import {
  FaSolarPanel,
  FaGlobe,
  FaMoneyBillWave,
  FaHome,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";

import Testimonials from "./Testimonails";

import "swiper/css";

import "swiper/css/pagination";
import VideoGalleryShow from "./VideoGalleryShow";
import ContactNewForm from "./ContactNewForm";

export default function HowWaterInner() {
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
      img: "/images/posters/Hot Water/Hot Water Pump - 70 percent savings Landscape (1200 x 628 px).webp",
    },
    {
      id: 2,
      img: "/images/posters/Hot Water/Hot Water Pump - All in 1 Landscape (1200 x 628 px).webp",
    },
    {
      id: 3,
      img: "/images/posters/Hot Water/Hot Water Pump - Built In Landscape (1200 x 628 px).webp",
    },
    {
      id: 4,
      img: "/images/posters/Hot Water/Hot Water Pump - WiFi Landscape (1200 x 628 px).webp",
    },
  ];
  const benefits = [
    {
      img: "/images/posters/Hot Water/Hot Water Pump - 70 percent savings Square Poster (1200 x 1200 px).webp",
      title: "Modern & Stylish",
      description:
        "A stylish slim line single piece unit incorporates a top-mounted compressor with compact footprint.",
      eligibility:
        "Suitable for households and businesses seeking a compact, modern hot water solution.",
      installation:
        "Professionally installed by licensed providers under the VEU program.",
      energySavings:
        "Compact design paired with smart engineering delivers efficient performance without taking up space.",
      features: [
        "Slim line, space-saving design.",
        "Integrated top-mounted compressor.",
        "Elegant and modern look.",
        "Compact footprint fits tight areas.",
        "Ideal for contemporary homes.",
      ],
    },
    {
      img: "/images/posters/Hot Water/Hot Water Pump - All in 1 Square Poster (1200 x 1200 px).webp",
      title: "Highly Efficient",
      description:
        "Produces significantly more heat energy than the power input; saving on purchased energy.",
      eligibility:
        "Available to VEU-eligible households replacing traditional electric water heaters.",
      installation:
        "Installed by certified technicians adhering to energy efficiency standards.",
      energySavings:
        "Delivers up to 70% energy savings compared to conventional systems.",
      features: [
        "High coefficient of performance (COP).",
        "Uses ambient air for heating.",
        "Minimizes power usage.",
        "Significantly reduces energy bills.",
        "Efficient all-year-round operation.",
      ],
    },
    {
      img: "/images/posters/Hot Water/Hot Water Pump - Built In Square Poster (1200 x 1200 px).webp",
      title: "Handy Controller",
      description:
        "Providing intuitive operation & helpful functions such as temp setting, timer & safety lock.",
      eligibility:
        "Ideal for users looking for advanced control and safety in hot water systems.",
      installation:
        "Comes with a pre-integrated controller for user-friendly configuration.",
      energySavings:
        "Smart control optimizes energy usage and avoids unnecessary heating cycles.",
      features: [
        "Digital temperature control.",
        "24-hour timer for scheduled heating.",
        "Child safety lock feature.",
        "Easy-to-read interface.",
        "User-friendly configuration.",
      ],
    },
    {
      img: "/images/posters/Hot Water/Hot Water Pump - WiFi Square Poster (1200 x 1200 px).webp",
      title: "Built-in Frost Protection",
      description:
        "Protecting the condenser from icing for complete peace of mind.",
      eligibility:
        "Designed for all weather conditions, including frosty environments.",
      installation:
        "Professionally set up with built-in safety and anti-icing components.",
      energySavings:
        "Ensures consistent heating performance even in cold temperatures.",
      features: [
        "Prevents condenser freezing.",
        "Ideal for cold climates.",
        "Maintains efficiency in winter.",
        "Protects system longevity.",
        "Peace of mind in frosty conditions.",
      ],
    },
  ];

  const Blogs = [
    //   {
    //     img: "/images/all/gasPump.mp4",
    //     date: "March 18, 2025",
    //     title: "Why Every Home Needs a Hot Water Heat Pump",
    //     desc: "Learn how a hot water heat pump can significantly reduce your energy bills while providing consistent and eco-friendly hot water for your household.",
    //   },
    //   {
    //     img: "/images/all/Heatpump.mp4",
    //     date: "March 18, 2025",
    //     title: "Hot Water Heat Pumps: The Future of Energy-Efficient Living",
    //     desc: "Explore the technology behind hot water heat pumps and understand why they’re a smart and sustainable solution for modern homes.",
    //   }
    // ,

    {
      embedUrl: "https://www.youtube.com/embed/-SXuFgXC6M4",
      date: "March 18, 2025",
      title: "Hot Water Heat Pumps: The Future of Energy-Efficient Living",
      desc: "Explore the technology behind hot water heat pumps and understand why they’re a smart and sustainable solution for modern homes.",
      isEmbed: true,
    },
    ,
    {
      embedUrl: "https://www.youtube.com/embed/itiPUyLy9Zo",
      date: "July 1, 2025",
      title: "Neopower Heatpump",
      desc: "An overview of the Neopower Heatpump system, highlighting its energy-efficient performance for residential hot water solutions using advanced heat exchange technology.",
      isEmbed: true,
    },
  ];

  const swiperRef = useRef(null);

  return (
    <>
      <HeroSection slides={slides} />

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C49]">
            Claim Rebate Under the VEU Program
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Take advantage of the Victorian Energy Upgrade (VEU) Program and
            upgrade to energy-efficient products—completely free with Rebate
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
            <h2 className="text-3xl text-center md:text-4xl font-extrabold text-[#0F2C49]">
              Hot Water Heater Pump System – Energy Efficient & Reliable
              Solution
            </h2>
          </div>

          <Swiper
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper lg:py-8"
          >
            {benefits.map((product, index) => (
              <SwiperSlide className="" key={index}>
                <div
                  className={`flex flex-col  ${
                    index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center justify-between bg-white p-4 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300`}
                >
                  <div className="w-full flex justify-center lg:w-1/2 mb-6 lg:mb-0">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-auto h-auto  md:w-[90%] object-cover rounded shadow-md transform  transition-transform duration-300"
                    />
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
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-[#F9FAFB]   px-5 md:px-12 xl:px-32  py-8 md:py-12 xl:py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0F2C49] mb-12">
            Benefits Over Gas Hot Water Systems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Heat Pump Column */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md border-t-4 border-green-400">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Hot Water Heat Pumps
              </h3>
              <ul className="space-y-4 text-green-900 text-sm sm:text-base">
                <li>
                  <span className="font-bold">Energy Efficiency:</span> Uses
                  electricity to transfer heat instead of generating it, making
                  it up to four times more efficient than traditional systems.
                </li>
                <li>
                  <span className="font-bold">Lower Operating Costs:</span>{" "}
                  Consumes less electricity, especially when combined with solar
                  energy, resulting in significant savings on energy bills.
                </li>
                <li>
                  <span className="font-bold">Environmental Impact:</span> Low
                  carbon emissions and environmentally friendly, especially when
                  powered by renewables.
                </li>
                <li>
                  <span className="font-bold">Eligibility for Rebates:</span>{" "}
                  Qualifies for incentives under the Victorian Energy Upgrades
                  (VEU) program, helping reduce upfront installation costs.
                </li>
                <li>
                  <span className="font-bold">Durability & Maintenance:</span>{" "}
                  Longer lifespan with fewer maintenance requirements compared
                  to gas systems.
                </li>
              </ul>
            </div>

            {/* Gas Systems Column */}
            <div className="bg-yellow-50 p-6 rounded-2xl shadow-md border-t-4 border-yellow-400">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">
                Gas Hot Water Systems
              </h3>
              <ul className="space-y-4 text-yellow-900 text-sm sm:text-base">
                <li>
                  <span className="font-bold">Energy Efficiency:</span> Burns
                  fossil fuels which is inherently less efficient and
                  contributes to greenhouse gas emissions.
                </li>
                <li>
                  <span className="font-bold">Higher Operating Costs:</span>{" "}
                  Typically more expensive to run due to fluctuating gas prices.
                </li>
                <li>
                  <span className="font-bold">Environmental Impact:</span>{" "}
                  Relies on combustion, emitting greenhouse gases and
                  contributing to climate change.
                </li>
                <li>
                  <span className="font-bold">No Rebates:</span> Usually not
                  covered under VEU rebates, making them a less cost-effective
                  choice.
                </li>
                <li>
                  <span className="font-bold">Maintenance & Durability:</span>{" "}
                  Requires more frequent servicing and may have a shorter
                  lifespan.
                </li>
              </ul>
            </div>
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
        <ContactNewForm service="Hot Water Heater Pump" />
      </div>
    </>
  );
}
