"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import {
  FaBolt,
  FaSolarPanel,
  FaLeaf,
  FaGlobe,
  FaMoneyBillWave,
  FaHome,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";
import { FaThermometerHalf, FaSnowflake, FaRecycle } from "react-icons/fa";

import HeroSection from "./HeroSection";
import { freeProducts } from "../freePoructData";
import { FaClipboardCheck, FaPiggyBank } from "react-icons/fa6";
import Testimonials from "./Testimonails";
import VideoGalleryShow from "./VideoGalleryShow";
import ContactNewForm from "./ContactNewForm";
export default function ReverseCycleAirConditioner() {
  const [activeTab, setActiveTab] = useState("split");

  const slides = [
    {
      id: 1,
      img: "/images/posters/Air Conditioner/Ducted Reverse AC - Midea _ Carrier _ Hisense Landscape (1200 x 628 px).webp",
    },

    {
      id: 2,
      img: "/images/posters/Air Conditioner/Ducted Reverse AC - Mitsubishi _ Panasonic _ Fujitsu _ Daikin Landscape (1200 x 628 px).webp",
    },
    {
      id: 3,
      img: "/images/posters/Air Conditioner/Split AC - Midea _ Carrier Landscape (1200 x 628 px).webp",
    },
    {
      id: 4,
      img: "/images/posters/Air Conditioner/Split AC - Mitsubishi _ Panasonic _ Fujitsu Landscape (1200 x 628 px).webp",
    },
    {
      id: 5,
      img: "/images/posters/Air Conditioner/Split and Ducted AC Landscape (1200 x 628 px).webp",
    },
  ];

  const benefits = [
    {
      img: "/images/posters/Air Conditioner/Ducted Reverse AC - Midea _ Carrier _ Hisense Square Poster (1200 x 1200 px).webp",
      title: "Year-Round Comfort",
      description:
        "Reverse cycle systems provide both heating and cooling, making them ideal for all seasons.",
      eligibility:
        "Available to eligible Victorian households and businesses replacing old systems.",
      installation:
        "Professionally installed by accredited providers under the VEU program.",
      energySavings:
        "Ensures consistent indoor temperatures with efficient performance throughout the year.",
      features: [
        "Works as both a heater and air conditioner.",
        "Perfect for summer and winter climates.",
        "Eliminates the need for separate systems.",
        "Convenient temperature control in one unit.",
        "Stable indoor comfort all year long.",
      ],
    },
    {
      img: "/images/posters/Air Conditioner/Ducted Reverse AC - Mitsubishi _ Panasonic _ Fujitsu _ Daikin Square Poster (1200 x 1200 px).webp",
      title: "High Energy Efficiency",
      description:
        "Reverse cycle systems consume less electricity by transferring heat instead of generating it.",
      eligibility:
        "Available to homes and businesses upgrading from outdated heating or cooling systems.",
      installation:
        "Installation by certified professionals under VEU guidelines.",
      energySavings: "Can use up to 50% less energy than conventional systems.",
      features: [
        "Energy-saving inverter technology.",
        "Reduces electricity consumption.",
        "Optimized for maximum efficiency.",
        "Lower running costs over time.",
        "Minimizes power waste during operation.",
      ],
    },
    {
      img: "/images/posters/Air Conditioner/Split AC - Midea _ Carrier Square Poster (1200 x 1200 px).webp",
      title: "Cost-Effective Solution",
      description:
        "Enjoy long-term savings on electricity bills with efficient performance and government incentives.",
      eligibility:
        "Applicable to eligible VEU participants replacing inefficient units.",
      installation: "Affordable installation with potential rebates.",
      energySavings: "Significant savings on monthly energy costs.",
      features: [
        "Lowers long-term electricity bills.",
        "Reduces energy usage and costs.",
        "Financial support through VEU rebates.",
        "Affordable operation year-round.",
        "Low maintenance expenses.",
      ],
    },
    {
      img: "/images/posters/Air Conditioner/Split AC - Mitsubishi _ Panasonic _ Fujitsu Square Poster (1200 x 1200 px).webp",
      title: "Government Rebates",
      description:
        "Reverse cycle systems qualify for rebates and incentives under the Victorian Energy Upgrades program.",
      eligibility:
        "Rebate eligibility is based on existing system and household/business criteria.",
      installation: "Installed by approved VEU program providers.",
      energySavings:
        "Financial incentives promote lower upfront and operating costs.",
      features: [
        "VEU program discounts available.",
        "Reduces initial setup cost.",
        "Encourages energy-efficient choices.",
        "Support for residential and commercial users.",
        "Simple rebate process with approved providers.",
      ],
    },
    {
      img: "/images/posters/Air Conditioner/Split and Ducted AC Square Poster (1200 x 1200 px).webp",
      title: "Environmentally Friendly",
      description:
        "These systems reduce greenhouse gas emissions, helping you lower your carbon footprint.",
      eligibility:
        "Ideal for eco-conscious Victorian households and businesses.",
      installation: "Set up by licensed installers focused on sustainability.",
      energySavings: "Cuts down emissions while maintaining efficiency.",
      features: [
        "Reduces environmental impact.",
        "Lowers carbon emissions.",
        "Supports sustainable energy practices.",
        "Eco-friendly refrigerants used.",
        "Promotes greener homes and buildings.",
      ],
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

  const benefitsData = [
    {
      title: "Energy Efficiency & VEU Program",
      description:
        "Reverse cycle systems use less electricity and are eligible for rebates under the VEU program.",
      icon: FaBolt,
    },
    {
      title: "Positive Environmental Impact",
      description:
        "Lower greenhouse gas emissions and promote eco-friendly living.",
      icon: FaLeaf,
    },
    {
      title: "Lower Electricity Bills",
      description:
        "Efficient operation significantly reduces energy consumption and costs.",
      icon: FaMoneyBillWave,
    },
    {
      title: "Year-Round Comfort",
      description:
        "Provides both heating and cooling to keep your home comfortable in all seasons.",
      icon: FaThermometerHalf,
    },
    {
      title: "Reliable Performance",
      description:
        "Stable indoor climate control with efficient heating and cooling in one unit.",
      icon: FaSnowflake,
    },
    {
      title: "Sustainable Choice",
      description:
        "Reduces dependency on separate systems and supports energy conservation.",
      icon: FaRecycle,
    },
  ];

  const Blogs = [
    //    {
    //   img: "/images/all/airConInsta.mp4",
    //   date: "March 18, 2025",
    //   title: "Top Features to Look for in an Air Conditioner",
    //   desc: "Discover the key features you should consider when buying an air conditioner, from energy efficiency to smart controls.",
    //       isEmbed: false,

    // },
    // {
    //   img: "/images/all/vv1.mp4",
    //   date: "March 15, 2025",
    //   title: "Air Conditioner Buying Guide: Expert Tips",
    //   desc: "Make an informed decision with our expert tips on selecting the best air conditioner for your home or office.",
    //       isEmbed: false,

    // }
    // ,
    //     {
    //       img: "/images/all/vv3.mp4",
    //       date: "March 20, 2025",
    //       title: "Top Maintenance Tips for Your AC Unit",
    //       desc: "Regular maintenance ensures your AC runs efficiently. Discover essential maintenance tips for long-lasting performance.",
    //           isEmbed: false,

    //     },
    //     {
    //       img: "/images/all/vv4.mp4",
    //       date: "March 25, 2025",
    //       title: "Signs It's Time to Replace Your Air Conditioner",
    //       desc: "Learn how to spot the signs that indicate it's time to replace your old air conditioner with a new, energy-efficient model.",
    //           isEmbed: false,

    //     },
    //     {
    //       img: "/images/all/vv5.mp4",
    //       date: "April 2, 2025",
    //       title: "Energy-Saving Tips for Using Your Air Conditioner",
    //       desc: "Save money and energy this summer by following these simple and effective air conditioning usage tips.",
    //           isEmbed: false,

    //     },
    //  {
    //   img: "/images/all/vv6.mp4",
    //   date: "April 10, 2025",
    //   title: "Boost Your Home's Air Quality with Smart AC Solutions",
    //   desc: "Explore how intelligent air conditioning systems can reduce allergens, control humidity, and provide cleaner air indoors.",
    //       isEmbed: false,

    // },
    // {
    //   img: "/images/all/vv7.mp4",
    //   date: "April 12, 2025",
    //   title: "Understanding the Role of AC in a Healthier Living Environment",
    //   desc: "Learn how regular AC maintenance and modern filtration technologies contribute to a healthier, more comfortable home.",
    //       isEmbed: false,

    // },
    // {
    //   img: "/images/all/vv8.mp4",
    //   date: "April 12, 2025",
    //   title: "Understanding the Role of AC in a Healthier Living Environment",
    //   desc: "Learn how regular AC maintenance and modern filtration technologies contribute to a healthier, more comfortable home.",
    //       isEmbed: false,

    // },
    // {
    //   img: "/images/all/vv9.mp4",
    //   date: "April 12, 2025",
    //   title: "Understanding the Role of AC in a Healthier Living Environment",
    //   desc: "Learn how regular AC maintenance and modern filtration technologies contribute to a healthier, more comfortable home.",
    //       isEmbed: false,

    // },
    // {
    //   img: "/images/all/vv10.mp4",
    //   date: "April 12, 2025",
    //   title: "Understanding the Role of AC in a Healthier Living Environment",
    //   desc: "Learn how regular AC maintenance and modern filtration technologies contribute to a healthier, more comfortable home.",    isEmbed: false,

    // },
    // {
    //   img: "/images/all/vv11.mp4",
    //   date: "April 12, 2025",
    //   title: "Understanding the Role of AC in a Healthier Living Environment",
    //   desc: "Learn how regular AC maintenance and modern filtration technologies contribute to a healthier, more comfortable home.",
    //       isEmbed: false,

    // },

    {
      embedUrl: "https://www.youtube.com/embed/2e3NCg0OH5Y",
      date: "April 2, 2025",
      title: "Energy-Saving Tips for Using Your Air Conditioner",
      desc: "Save money and energy this summer by following these simple and effective air conditioning usage tips.",
      isEmbed: true,
    },
      {
  "embedUrl": "https://www.youtube.com/embed/BjarNwBHIh8",
 "date": "July 1, 2025",
  "title": "Midea 23kw Ducted with zones",
  "desc": "A quick overview of the Midea 23kw ducted air conditioning system with zoned control. Ideal for efficient and customizable cooling in large homes or commercial spaces.",
  "isEmbed": true
},
    {
  "embedUrl": "https://www.youtube.com/embed/NVFUz0e23Dw",
  "date": "July 1, 2025",
  "title": "Ducted Reverse Cycle Aircon",
  "desc": "Discover how ducted reverse cycle air conditioning provides year-round comfort by delivering both heating and cooling through a central system. Perfect for maintaining consistent indoor climate across multiple rooms.",
  "isEmbed": true
},
    {
      embedUrl: "https://www.youtube.com/embed/ki9AEra3cCQ",
      date: "April 10, 2025",
      title: "Boost Your Home's Air Quality with Smart AC Solutions",
      desc: "Explore how intelligent air conditioning systems can reduce allergens, control humidity, and provide cleaner air indoors.",
      isEmbed: true,
    },

    {
      embedUrl: "https://www.youtube.com/embed/b2IDcSYRQC4",
      date: "April 2, 2025",
      title: "How to Maximize Air Conditioner Efficiency at Home",
      desc: "Learn how to get the most out of your AC unit with simple tricks to improve performance and lower your utility bills.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/tMpcfVwk8hA",
      date: "May 20, 2025",
      title: "Top Maintenance Tips for Your AC Unit",
      desc: "Regular maintenance ensures your AC runs efficiently. Discover essential maintenance tips for long-lasting performance.",
      isEmbed: true,
    },
    {
  "embedUrl": "https://www.youtube.com/embed/FLQ25HX_ySI",
  "date": "July 1, 2025",
  "title": "Midea Aircon Compressor 23KW",
  "desc": "A close-up look at the Midea 23KW air conditioning compressor in action, designed for powerful and reliable cooling performance in ducted systems.",
  "isEmbed": true
}
,
 {
      embedUrl: "https://www.youtube.com/embed/ugWHrcJ3jqQ",
      date: "July 1, 2025",
      title: "AC System Performance Check",
      desc: "This video walks through the performance check process of an installed air conditioning system, highlighting cooling efficiency and proper airflow.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/0dEdTx7XNGE",
      date: "July 1, 2025",
      title: "Ducted AC Grille Installation",
      desc: "A quick demonstration of installing return and supply grilles for a ducted AC system, ensuring efficient air circulation and sleek interior finish.",
      isEmbed: true,
    },
  ];

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

      <div className="text-[#4A4A4A] px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-0 text-base leading-relaxed">
        <h2 className="text-[#0F2C49] text-center text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
          Reverse Cycle Air Conditioners
        </h2>
        <p className="mb-4">
          The Victorian Energy Upgrades (VEU) program offers incentives for
          households to upgrade to reverse cycle air conditioners that can heat
          and cool. A split and ducted reverse cycle system works by providing
          both heating and cooling for homes, making it an efficient and
          effective way to control indoor temperature.
        </p>
        <p className="mb-6">
          Under the VEU program, these systems are promoted for their energy
          efficiency and environmental benefits, helping residents save on
          energy bills while reducing greenhouse gas emissions.
        </p>

        {/* --- SPLIT AIR SYSTEM SECTION --- */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full sm:w-[48%] lg:w-[32%]">
              <img
                src="/images/Split new poster.webp"
                alt="Split Air System"
                className="w-full h-56 object-fill"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F2C49] mb-2">
                  Split Air conditioning
                </h3>

                <p className="text-[#4A4A4A] mb-4">
                  For Residential houses—one outdoor unit connected to multiple
                  indoor units, suitable for multiple rooms or whole-of-home.
                </p>
                <a
                  href="#form"
                  className="bg-green-400 group rounded px-6 sm:px-8 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center"
                >
                  <span className="w-8 bg-green-500 group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
                  <span className="relative z-10">Get form</span>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full sm:w-[48%] lg:w-[32%]">
              <img
                src="/images/Ducted new poster.webp"
                alt="Split Air System"
                className="w-full h-56 object-fill"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F2C49] capitalize mb-2">
                  {/* Split Air System - Multi */}
                  Ducted reverse cycle
                </h3>
                <p className="text-[#4A4A4A] mb-4">
                  one outdoor unit connected to a network of indoor ducts,
                  providing whole-home heating and cooling through discreet
                  ceiling/floor vents
                </p>
                <a
                  href="#form"
                  className="bg-green-400 group rounded px-6 sm:px-8 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center"
                >
                  <span className="w-8 bg-green-500 group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
                  <span className="relative z-10">Get form</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#F9FAFB]   px-5 md:px-12 xl:px-32  py-8 md:py-12 xl:pt-16 xl:py-0">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl  text-center md:text-4xl font-extrabold text-[#0F2C49]">
              {/* Ducted Heating / Cooling And Split Air Conditioner */}
              Split and Ducted heating / Cooling Air Conditioner
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

      <section className="px-5 md:px-12 xl:px-32 py-10 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C49] mb-12 text-center">
            Benefits of Reverse Cycle Systems & the VEU Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsData.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6 flex gap-4 items-start border border-gray-100"
              >
                <div className="text-[#3F83C0] flex-shrink-0 mt-1">
                  {item.icon && React.createElement(item.icon, { size: 26 })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
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
                  <ContactNewForm   service="Reverse Cycle Air Conditioner"/>
      
      </div>
    </>
  );
}
