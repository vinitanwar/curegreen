"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { FcGoogle } from "react-icons/fc"; // Google icon

export default function Testimonials() {
  const testimonials = [
    {
      bg: ["#004d40"],
      name: "Mat",
      position: "CEO of Mart",
      desc: "Very good Installation,The installation process was very smooth and quick,They explained me everything about the rebate and after the installation all the compliance certificates were provided,Highly recommend !!!!!",
    },
    {
      bg: ["#ec407a"],
      name: "Ridhima Chawla",
      position: "Managing Director",
      desc: "I recently had a Mitsubishi ducted reverse cycle system installed in my home through CureGreen, under the Victorian Energy Upgrades (VEU) program, and I honestly couldn’t be more satisfied with the whole experience.Right from the first call, the CureGreen team was friendly, professional, and super knowledgeable. They took the time to explain how the rebate worked, what I was eligible for, and helped me choose the right system for my home — no pushy sales talk, just solid advice. Thanks to the VEU rebate, I only had to pay for the installation, which made the whole thing super affordable. The installation team arrived on time, worked efficiently, and were really respectful of my home. Everything was set up smoothly, and they took the time to walk me through how to use the system before they left. The system itself has been working perfectly — it's quiet, powerful, and keeps the whole house comfortable in minutes. Another big plus: CureGreen provided all the necessary compliance certificates — including the Victorian building certificate, electrical safety certificate, and plumbing compliance certificate. It gave me peace of mind knowing everything was done properly and to standard. Honestly, if you’re looking to upgrade your heating and cooling, I’d definitely recommend CureGreen. Professional service, top-quality installation, and serious savings with the rebate — it was a great decision! Like",
    },
    {
      img: "/images/testmonails/Kaur.webp",
      name: "Kaur Sandhu",
      position: "Business Owner",
      desc: "We recently had the Midea 23kW ducted system installed through the VEU program and it’s been a fantastic experience. The installation team was friendly, efficient, and left everything spotless. The system itself is powerful and keeps the whole house comfortable within minutes. It’s super quiet and easy to control. Really glad we took advantage of the VEU rebate—it made a premium setup much more affordable.",
    },
    {
      bg: ["#0097A7"],
      name: "Frances Wang",
      position: "Interior Designer",
      desc: "Very happy with the installation and service from cure green. Nish was very helpful and thorough. I would have no hesitation recommending this company and their installers.",
    },
    {
      bg: ["#00897B"],
      name: "Isabel Carbines",
      position: "Homeowner",
      desc: "Excellent service ,Quick installation, Highy recommended!!!!",
    },
    {
      bg: ["#BF360C"],
      name: "Suzanne",
      position: "Facility Manager",
      desc: "Polite punctual informative and helpful",
    },
    {
      bg: ["#7E57C2"],
      name: "Louise Munro",
      position: "Event Planner",
      desc: "Extremely wonderful service. Wonderful kind people.😻😄😃🧡",
    },
    {
      bg: ["#512DA8"],
      name: "Baneet kaur",
      position: "Restaurant Owner",
      desc: "Amazing service and swift service. Nishtha did a great job, very professional and easy to deal with. Would highly recommend going ahead with them.",
    },
    {
      img: "/images/testmonails/anton.webp",
      name: "Anton Rozario",
      position: "Architect",
      desc: "Quick and painless process from sending the request, updating on an ETA for when they were going to arrive and getting the job done. Good work done with the install of door seals, energy meter and evap ducting covers. Less things to worry about during the winter months.",
    },
    {
      bg: ["#EC407A"],
      name: "Barbara Freebody",
      position: "Architect",
      desc: "Very good work done at my house in Ingenia Fe federation, Werribee. Highly recommended! Very patience and calm with Aged people.",
    },
    {
      img: "/images/testmonails/david.webp",
      name: "David Townend",
      position: "Architect",
      desc: "Both people were very helpful and explained everything really well They are very nice people and very efficient in there work and left the house clean and tidy I would not have any problem recommending them to anyone",
    },
  ];

  return (
    <div className="container  relative mx-auto px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 xl:pb-8">
      <div className="text-center flex flex-col  items-center gap-y-2 ">
        <h6 className="uppercase  relative text-[#3F83C0] font-semibold  text-base ">
          Our Happy Customers
        </h6>

        <h5 className="text-[#0F2C49] text-base   lg:text-lg md:font-bold leading-relaxed md:leading-tight">
          Our customers value CureGreen for delivering efficient, reliable, and
          innovative solutions that bring lasting comfort and peace of mind.
        </h5>
      </div>

      <div className="mt-10 lg:mt-16">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Autoplay]}
          className="mySwiper h-full min-h-[400px]"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 relative overflow-hidden flex flex-col justify-between h-full min-h-[360px] group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-4 left-4 flex items-center bg-[#EA4335]/10 text-[#EA4335] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  <FcGoogle className="mr-1 text-lg" /> Google Verified
                </div>

                <div className="flex flex-col items-center mt-6 mb-4">
                  <div
                    className="w-16 h-16 rounded-full border-4 border-blue-200 shadow-md mb-2"
                    style={
                      testi.img
                        ? {
                            backgroundImage: `url(${testi.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : { backgroundColor: testi.bg }
                    }
                  >
                    {!testi.img && (
                      <div className="h-full flex items-center justify-center text-white text-xl font-bold">
                        {testi.name[0]}
                      </div>
                    )}
                  </div>
                  <h4 className="text-[#0F2C49] font-bold text-lg">
                    {testi.name}
                  </h4>
                </div>

                {/* Review Text */}
                <div className="relative z-10 text-gray-600 text-sm md:text-base text-center mb-4 px-2 flex-grow">
                  <ImQuotesLeft className="text-blue-200 text-3xl absolute top-0 left-2 opacity-20" />
                  <p className="line-clamp-5">{testi.desc}</p>
                  <ImQuotesLeft className="rotate-180 text-blue-200 text-3xl absolute bottom-0 right-2 opacity-20" />
                </div>

                {/* Stars */}
                <div className="flex justify-center items-center gap-x-1 mt-auto pt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </div>
  );
}
