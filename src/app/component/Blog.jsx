"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function Blog() {
  const Blogs = [
    {
      img: "/images/all/vv1.mp4",
      date: "March 15, 2025",
      title: "How to Choose the Right Air Conditioner",
      desc: "Choosing the right air conditioner can be a daunting task. Here are some tips to help you make the right choice.",
    },
    {
      img: "/images/all/vv3.mp4",
      date: "March 20, 2025",
      title: "Top Maintenance Tips for Your AC Unit",
      desc: "Regular maintenance ensures your AC runs efficiently. Discover essential maintenance tips for long-lasting performance.",
    },
    {
      img: "/images/all/vv4.mp4",
      date: "March 25, 2025",
      title: "Signs It's Time to Replace Your Air Conditioner",
      desc: "Learn how to spot the signs that indicate it's time to replace your old air conditioner with a new, energy-efficient model.",
    },
    {
      img: "/images/all/vv5.mp4",
      date: "April 2, 2025",
      title: "Energy-Saving Tips for Using Your Air Conditioner",
      desc: "Save money and energy this summer by following these simple and effective air conditioning usage tips.",
    },
    {
      img: "/images/all/vv6.mp4",
      date: "April 10, 2025",
      title: "How to Improve Indoor Air Quality with AC Systems",
      desc: "Discover how modern air conditioning systems can help improve the indoor air quality of your home or office.",
    },
  ];

  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleToggle = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      // Pause any other playing video
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex].pause();
      }
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <div className="px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 space-y-6 lg:space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-3">
          <h6 className="uppercase sub-title relative text-[#3F83C0] font-semibold text-sm sm:text-base">
            From the Blog
          </h6>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mt-2">
            News & Articles
          </h2>
        </div>
        <Link
          href="/blogs"
          className="bg-[#3F83C0] group uppercase px-6 sm:px-8 lg:px-12 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center min-h-[56px]"
        >
          <span className="w-8 bg-[#0f2c49] group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
          <span className="relative z-10">Discover More</span>
        </Link>
      </div>

      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Blogs.map((elm, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow p-4 relative">
              <div className="relative mb-4">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="rounded-xl w-full h-48 lg:h-56 object-cover"
                  src={elm.img}
                  onEnded={() => setPlayingIndex(null)}
                />
                <button
                  onClick={() => handleToggle(index)}
                  className={`absolute inset-0 flex items-center justify-center ${playingIndex==index?"bg-transparent":" bg-black/40 "}rounded-xl`}
                >
                  {playingIndex === index ? (
                    // Pause icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    // Play icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-1">{elm.date}</p>
              <h3 className="text-lg font-semibold mb-2">{elm.title}</h3>
              <p className="text-sm text-gray-700">{elm.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
