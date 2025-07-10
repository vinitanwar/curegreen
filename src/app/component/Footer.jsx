import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaGlassCheers } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { slugify } from "../slugify";
import { freeProducts } from "../freePoructData";
import { products } from "../productData";
export default function Footer() {
  const info = [
    { title: "Shipping Times" },
    { title: "See all products" },
    { title: "Payment methods" },
    { title: "Returns and refunds" },
    { title: "Terms and conditions" },
  ];
  const contact = [
    { title: "Molly Mc Drive" },
    { title: "info@email.com" },
    { title: "Emily Burton" },
    { title: "quote@email.com" },
    { title: "U.S. of America" },
  ];

  const service = [
    {
      title: "Solar Panels",
    },
    {
      title: "Hot Water Heat pump",
    },
    {
      title: "Reverse Cycle Air Conditioners",
    },
  ];

  return (
    <div className="footer relative lg:mt-8  pt-8">
      <div
        className="h-[60vh] md:h-[70vh] lg:h-[110vh] relative bg-top-right md:bg-center bg-cover"
        style={{
          backgroundImage: "url(/images/footer-bg.webp)",
        }}
      >
        <div className="absolute inset-0 bg-[#0D3654] opacity-20 md:opacity-20 blur-sm z-10" />

        <div className="relative z-20 flex flex-col items-center justify-start pt-48 sm:pt-0 lg:justify-center h-full w-full text-white text-center gap-1 sm:gap-6 px-4">
          <img
            src="/images/footer-icon.webp"
            alt="Icon"
            className="w-8 hidden sm:block  md:w-20"
          />

          <h4 className="text-2xl md:text-4xl xl:text-5xl font-bold max-w-3xl">
            Reach out to us now and let's start a conversation about how we can
            serve you better.
          </h4>

          <a
            href="tel:0475237850
"
            className="font-extrabold text-3xl md:text-5xl xl:text-6xl hover:text-[#3F83C0] transition-colors duration-300"
          >
            0475237850
          </a>

          <a
            href="tel:0475237850 "
            type="button"
            className="bg-[#3F83C0] hidden md:inline-flex group uppercase px-6 sm:px-8 lg:px-12 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden  items-center min-h-[56px]"
          >
            <span className="w-8 bg-[#0f2c49] group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
            <span className="relative z-10">Contact us</span>
          </a>
        </div>

        <div className="absolute z-40 bottom-0 left-0 w-full leading-[0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-[140px]"
          >
            <path
              fill="#0C3553"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9
c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4
c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6
C72,58.2,0,25.8,0,25.8V100h1000V65.3
c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="footer-info bg-[#0C3553] text-white relative">
        <div className="container mx-auto px-5 md:px-12 xl:px-32 pt-8">
          <div className="flex relative z-20 flex-col gap-y-10 lg:flex-row lg:gap-x-5 justify-between  mb-8">
            <div className="footer-logo w-full lg:w-[30%]  space-y-4">
              <Link href="/">
                <img
                  src="/images/footerLogo.webp"
                  alt="Logo"
                  className="w-36 lg:w-56 "
                />
              </Link>

              <p className="text-base lg:mt-4">
                CureGreen’s mission is to deliver innovative, reliable, and
                affordable energy solutions that respect the environment and
                uplift the communities we serve.
              </p>
              <div className="flex text-white items-center text-xl gap-x-2">
                <a
                  href="https://www.instagram.com/curegreen.au/"
                  target="_blank"
                  className="w-10 h-10 bg-[#3F83C0] rounded-full flex justify-center items-center"
                >
                  <RiInstagramFill className="text-2xl shadow-2xl " />
                </a>
                <a
                  href="https://www.facebook.com/share/12MGDAseS6K/"
                  target="_blank"
                  className="w-10 h-10 bg-[#3F83C0] rounded-full flex justify-center items-center"
                >
                  <FaFacebook className="text-2xl" />
                </a>

                <a
                  href="https://youtube.com/@curegreen?si=rkSXvdvPhyZb-gPe"
                  target="_blank"
                  className="w-10 h-10 bg-[#3F83C0] rounded-full flex justify-center items-center"
                >
                  <FaYoutube className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="footer-links  block space-y-4">
              <h5 className="text-xl  font-bold">Service :</h5>
              <ul className="space-y-2 text-sm">
                {products.map((elm, index) => (
                  <li
                    key={index}
                    className="hover:text-[#3F83C0] text-base cursor-pointer transition-colors duration-300"
                  >
                    <Link href={elm.link} className="flex items-center gap-x-2">
                      <span className="text-[#3F83C0] font-bold">
                        <MdOutlineDoubleArrow className="font-extrabold" />
                      </span>{" "}
                      {elm.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-links block  space-y-4">
              <h5 className="text-xl  font-bold">Products :</h5>
              <ul className="space-y-2 text-sm">
                {freeProducts.map((elm, index) => (
                  <li
                    key={index}
                    className="hover:text-[#3F83C0] text-base cursor-pointer transition-colors duration-300"
                  >
                    <Link
                      href={`/free-product/${slugify(elm.title)}`}
                      className="flex items-center gap-x-2"
                    >
                      <span className="text-[#3F83C0] font-bold">
                        <MdOutlineDoubleArrow className="font-extrabold" />
                      </span>{" "}
                      {elm.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 lg:w-[35%] xl:w-[30%] flex flex-col items-start ">
              <h5 className="text-xl  font-bold">Our Address :</h5>

              <div className="flex items-start gap-x-2 text-lg text-salte-700 hover:text-[#3F83C0] transition-colors duration-200">
                <IoLocationSharp className="mt-1 text-lg text-[#3F83C0]" />
                <p className="text-base">
                  {/* Point Cook VIC 3030,Truganina, Australia */}
                  Truganina VIC 3029, Australia
                </p>
              </div>

              <div className="flex flex-col gap-y-2 text-lg text-salte-700  transition-colors duration-200 ">
                <a
                  href="tel:29679858578"
                  className="flex items-center gap-x-2 hover:text-[#3F83C0] text-base"
                >
                  <BiSolidPhoneCall className="text-lg text-[#3F83C0]" />
                  Australian Business Number(ABN): 29679858578
                </a>

                <div className="flex items-center gap-x-4">
                  <a
                    href="tel:0475237850"
                    className="flex items-center gap-x-2 hover:text-[#3F83C0] text-base"
                  >
                    <BiSolidPhoneCall className="text-lg text-[#3F83C0]" />
                    0475237850
                  </a>{" "}
                  <span>/</span>{" "}
                  <a
                    href="tel:0426722199"
                    className="flex items-center gap-x-2 hover:text-[#3F83C0] text-base"
                  >
                    <BiSolidPhoneCall className="text-lg text-[#3F83C0]" />
                    0426722199
                  </a>
                </div>
                <a
                  href="mailto:InfoCureGreen@gmail.com"
                  className="flex items-center gap-x-2 hover:text-[#3F83C0] text-base"
                >
                  <MdEmail className="text-[#3F83C0]" />
                  infocuregreen@gmail.com
                </a>
              </div>
            </div>
          </div>

          <hr className=" relative z-10 " />
          <div className="py-5 container mx-auto  relative z-10 ">
            <div className="md:flex flex-wrap lg:justify-center gap-x-2 items-center text-sm text-white justify-center md">
              <p className="text-center  text-white hover:text-gray-100 transition-colors duration-200">
                © 2024 CureGreen . All rights reserved.  <i> Designed by Future IT Touch Pvt Ltd  </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
