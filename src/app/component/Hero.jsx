"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

const slides = [
  {
    id: 1,
    backgroundImage:
      "/images/headerfour.webp",
  },
 
  {
    id: 2,
    backgroundImage:
      "/images/headerimg.webp",
  },
   
  {
    id: 3,
    backgroundImage:
      "/images/headerimg2.webp",
  },
  {
    id: 44,
    backgroundImage:
      "/images/headerimgthree.webp",
  },

 




  // Add more slides if needed
];

export default function HeroSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    created(slider) {
      let timeout; // ✅ Removed TypeScript type annotation

      const clearNextTimeout = () => {
        clearTimeout(timeout);
      };

      const nextTimeout = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          slider.next();
        }, 3000);
      };

      slider.on("created", nextTimeout);
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  });

  return (
    <section className="slider-hero relative">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide) => (
          <div key={slide.id} className="keen-slider__slide">
            <div
              className="item hero-section bg-cover bg-center min-h-[100vh] flex items-center"
              style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={() => instanceRef.current?.next()}
          className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}
