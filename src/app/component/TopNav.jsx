import React from "react";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

export default function TopNav() {
  return (
    <div className="topNav hidden lg:flex px-5 md:px-12 xl:px-32 bg-[#0F2C49]   items-center justify-between ">
      <div className="flex items-center gap-x-4 text-gray-400 ">
        <a
          href="mailto:infocuregreen@gmail.com"
          className="flex items-center gap-x-2 text-sm"
        >
          <span>
            <IoMail className="text-[#3F83C0]" />
          </span>
          <span className="">infocuregreen@gmail.com</span>
        </a>
        <div className="flex items-center gap-x-2 text-sm">
          <span>
            <IoLocationSharp className="text-[#3F83C0]" />
          </span>
          <span className="">
            {/* Point Cook VIC 3030,Truganina, Australia */}
            Truganina VIC 3029,Australia
          </span>
        </div>
      </div>
      <div className="bg-[#58b64500] flex items-center gap-x-4 text-lg text-white py-4 px-12 h-full">
        <a
      href="https://www.facebook.com/share/12MGDAseS6K/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook />
        </a>

        <a
          href="https://www.instagram.com/curegreen.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a href="https://youtube.com/@curegreen?si=rkSXvdvPhyZb-gPe" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
