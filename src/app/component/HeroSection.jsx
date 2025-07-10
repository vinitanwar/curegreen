"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

export default function HeroSection({ slides }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="px-5 py-4">
      <div className="h-[25vh] md:h-[50vh] lg:h-[60vh] xl:h-[75vh] relative rounded-3xl overflow-hidden">
        {slides.map((elm, index) => (
          <img
            key={elm.id}
            src={elm.img}
            onClick={handleNext}
            alt={`slide-${elm.id}`}
            className={`
              absolute top-0 left-0 w-full h-full  transition-opacity duration-1000 ease-in-out
              ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          />
        ))}

        {/* Navigation Buttons */}
        {/* <button
          onClick={handlePrev}
          className="absolute group left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#58bf3b] bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-[#5FB448]"
        >
          <IoArrowBack className="group-hover:-translate-x-1 duration-200 transition-all" />

        </button>
        <button
          onClick={handleNext}
          className="absolute group right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#58bf3b] bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-[#5FB448]"
        >
          <IoArrowBack className="rotate-180 group-hover:translate-x-1 duration-200 transition-all" />

        </button> */}
      </div>
    </div>
  );
}
