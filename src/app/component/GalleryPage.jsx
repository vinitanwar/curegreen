"use client";
import React from "react";
import CommonBanner from "./CommonBanner";
import Gallery from "./Gallery";
import Testimonials from "./Testimonails";
import { FaArrowDownLong } from "react-icons/fa6";

import { useState } from "react";

export default function GalleryPage() {
  const Blogs = [
    // {
    //   img: "/images/all/gasPump.mp4",
    //   date: "March 15, 2025",
    //   title: "Essential Tips for Choosing the Right Gas Pump",
    //   desc: "Learn how to select the ideal gas pump for your needs by understanding key factors like flow rate, fuel type compatibility, and safety features.",
    // },
    // {
    //   img: "/images/all/vv1.mp4",
    //   date: "March 15, 2025",
    //   title: "How to Choose the Right Air Conditioner",
    //   desc: "Choosing the right air conditioner can be a daunting task. Here are some tips to help you make the right choice.",
    // },
    // {
    //   img: "/images/all/vv3.mp4",
    //   date: "March 20, 2025",
    //   title: "Top Maintenance Tips for Your AC Unit",
    //   desc: "Regular maintenance ensures your AC runs efficiently. Discover essential maintenance tips for long-lasting performance.",
    // },
    // {
    //   img: "/images/all/vv4.mp4",
    //   date: "March 25, 2025",
    //   title: "Signs It's Time to Replace Your Air Conditioner",
    //   desc: "Learn how to spot the signs that indicate it's time to replace your old air conditioner with a new, energy-efficient model.",
    // },
    // {
    //   img: "/images/all/vv5.mp4",
    //   date: "April 2, 2025",
    //   title: "Energy-Saving Tips for Using Your Air Conditioner",
    //   desc: "Save money and energy this summer by following these simple and effective air conditioning usage tips.",
    // },
    // {
    //   img: "/images/all/vv6.mp4",
    //   date: "April 10, 2025",
    //   title: "How to Improve Indoor Air Quality with AC Systems",
    //   desc: "Discover how modern air conditioning systems can help improve the indoor air quality of your home or office.",
    // },
    // {
    //   img: "/images/all/shower.mp4",
    //   date: "April 10, 2025",
    //   title: "Claim Your Free Shower",
    //   desc: "Experience a refreshing shower like never before with our premium shower set, now available for free. Upgrade your bathroom effortlessly – just pay shipping!",
    // },
    // {
    //   img: "/images/all/Heatpump.mp4",
    //   date: "March 18, 2025",
    //   title: "Hot Water Heat Pumps: The Future of Energy-Efficient Living",
    //   desc: "Explore the technology behind hot water heat pumps and understand why they’re a smart and sustainable solution for modern homes.",
    // },

    {
      embedUrl: "https://www.youtube.com/embed/ki9AEra3cCQ",
      date: "March 15, 2025",
      title: "Essential Tips for Choosing the Right Gas Pump",
      desc: "Learn how to select the ideal gas pump for your needs by understanding key factors like flow rate, fuel type compatibility, and safety features.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/2e3NCg0OH5Y",
      date: "June 28, 2025",
      title: "How to Choose the Right Air Conditioner",
      desc: "Choosing the right air conditioner can be a daunting task. Here are some tips to help you make the right",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/b2IDcSYRQC4",
      date: "June 28, 2025",
      title: "Top Maintenance Tips for Your AC Unit",
      desc: "Regular maintenance ensures your AC runs efficiently. Discover essential maintenance tips for long-lasting performance.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/tMpcfVwk8hA",
      date: "June 28, 2025",
      title: "Energy-Saving Tips for Using Your Air Conditioner",
      desc: "Save money and energy this summer by following these simple and effective air conditioning usage tips.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/xd3FNocWt6Q",
      date: "June 28, 2025",
      title: "Shower upgrade under VEU Program",
      desc: "YouTube Shorts showing a shower upgrade completed under the VEU program.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/-SXuFgXC6M4",
      date: "March 18, 2025",
      title: "Hot Water Heat Pumps: The Future of Energy-Efficient Living",
      desc: "Explore the technology behind hot water heat pumps and understand why they’re a smart and sustainable solution for modern homes.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/EUjs-BUkUaU",
      date: "June 27, 2025",
      title: "Claim Your Free Shower",
      desc: "Experience a refreshing shower like never before with our premium shower set, now available for free. Upgrade your bathroom effortlessly – just pay shipping!",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/lkt_rgW065g",
      date: "June 28, 2025",
      title: "Chimney Seal Under VEU Program",
      desc: "A quick demo showing how homeowners install chimney sealing under the Victorian Energy Upgrade (VEU) program to improve energy efficiency and prevent heat loss.",
      isEmbed: true,
    },

    // new 1-7-2025
    {
      embedUrl: "https://www.youtube.com/embed/BjarNwBHIh8",
      date: "July 1, 2025",
      title: "Midea 23kw Ducted with zones",
      desc: "A quick overview of the Midea 23kw ducted air conditioning system with zoned control. Ideal for efficient and customizable cooling in large homes or commercial spaces.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/NVFUz0e23Dw",
      date: "July 1, 2025",
      title: "Ducted Reverse Cycle Aircon",
      desc: "Discover how ducted reverse cycle air conditioning provides year-round comfort by delivering both heating and cooling through a central system. Perfect for maintaining consistent indoor climate across multiple rooms.",
      isEmbed: true,
    },
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
    {
      embedUrl: "https://www.youtube.com/embed/itiPUyLy9Zo",
      date: "July 1, 2025",
      title: "Neopower Heatpump",
      desc: "An overview of the Neopower Heatpump system, highlighting its energy-efficient performance for residential hot water solutions using advanced heat exchange technology.",
      isEmbed: true,
    },
    {
      embedUrl: "https://www.youtube.com/embed/FLQ25HX_ySI",
      date: "July 1, 2025",
      title: "Midea Aircon Compressor 23KW",
      desc: "A close-up look at the Midea 23KW air conditioning compressor in action, designed for powerful and reliable cooling performance in ducted systems.",
      isEmbed: true,
    },
  ];

  const videos = [
    {
      title: "Energy Solutions Overview",
      url: "https://www.youtube.com/embed/0dEdTx7XNGE?si=BOMEwT6J0ta65OcC",
    },
    {
      title: "How CureGreen Helps You Save Energy",
      url: "https://www.youtube.com/embed/ugWHrcJ3jqQ?si=ZinGYhxDOC1QSbXP",
    },
  ];

  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems(visibleItems + 6);
  };

  return (
    <div>
      <CommonBanner name="Gallery" />
      <Gallery />
      <section className="px-5 md:px-12 xl:px-32 bg-gray-50 py-8 md:py-12 xl:py-16">
        <div className="text-center flex flex-col items-center gap-y-2">
          <h6 className="uppercase sub-title w-fit relative text-[#3F83C0] font-semibold text-sm sm:text-base">
            Video Gallery
          </h6>

          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mt-2">
            Explore Our Installations in Action
          </h2>
        </div>

        <div className="mt-4 lg:mt-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Blogs.slice(0, visibleItems).map((blog, index) => (
            <div className="bg-white rounded-xl shadow-md p-4 h-full">
              {blog.isEmbed ? (
                <iframe
                  className="rounded-xl w-full h-48 lg:h-56 mb-4"
                  src={blog.embedUrl}
                  title={blog.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="rounded-xl w-full h-48 lg:h-56 object-cover mb-4"
                  controls
                  muted
                  src={blog.img}
                  onPlay={() => swiperRef.current?.autoplay?.stop()}
                  onPause={() => swiperRef.current?.autoplay?.start()}
                />
              )}
              <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-700">{blog.desc}</p>
            </div>
          ))}
        </div>

        {visibleItems < Blogs.length && (
          <div className="text-center flex justify-center mt-4">
            <button
              onClick={loadMore}
              className=" text-gray-800 flex items-center gap-x-4 cursor-pointer py-2 px-6 rounded-lg font-semibold"
            >
              Load More <FaArrowDownLong className="animate-bounce" />
            </button>
          </div>
        )}
      </section>

      <div className="px-5 md:px-12 xl:px-32 container mx-auto py-8 md:py-12 xl:py-16">
        <div className="grid grid-cols-1 text-center lg:text-start text-gray-700 md:grid-cols-2 gap-6 ">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-[#0F2C49] mb-3">
                {video.title}
              </h3>
              <div className="aspect-w-16  h-[200px] lg:h-[400px] rounded overflow-hidden">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
}
