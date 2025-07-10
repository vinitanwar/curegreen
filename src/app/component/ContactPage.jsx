"use client";
import Link from "next/link";
import React from "react";
import CommonBanner from "../component/CommonBanner";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactNewForm from "./ContactNewForm";

export default function ContactPage() {
  const contactInfo = [
    // {
    //   icon: <FaMapMarkedAlt/>,
    //   link: "https://maps.app.goo.gl/sCjJL8bMuy3yD7ZZ8",
    //   title: "Office Address",
    //   text: "Point Cook VIC 3030,Truganina, Australia",
    // },
    {
      icon: <FaPhoneAlt />,
      link: "tel:0426722199 ",
      title: "Call Us",
      text: "0426722199 ",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:infocuregreen@gmail.com",
      title: "Email Us",
      text: "infocuregreen@gmail.com",
    },
  ];

  return (
    <div>
      <CommonBanner name="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 xl:pb-0">
        {contactInfo.map((info, index) => (
          <Link
            href={info.link}
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#57B447] to-[#3F83C0] text-white text-3xl">
              {info.icon}
            </div>

            {/* Title */}
            <h5 className="text-xl font-bold text-[#003F72] mb-2">
              {info.title}
            </h5>

            {/* Accent bar */}
            <div className="w-10 h-1 bg-[#57B447] mb-4 rounded" />

            {/* Link/Text */}
            <Link
              href={info.link}
              className="text-[#003F72] hover:text-[#57B447] transition-colors duration-300"
            >
              <p>{info.text}</p>
            </Link>
          </Link>
        ))}
      </div>

            <ContactNewForm />
      
    </div>
  );
}
