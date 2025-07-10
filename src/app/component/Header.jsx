"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
import { products } from "../productData";
import QuotePopup from "./QuotePopup";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSidebarServiceOpen, setIsSidebarServiceOpen] = useState(false);

  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Blogs", link: "/blogs" },
    { title: "Products", link: "/products" },
    { title: "Gallery", link: "/gallery" },
    { title: "Contact us", link: "/contact-us" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          fixed ? "fixed top-0 z-[9999]" : "static"
        } px-5 w-full md:px-12 xl:px-32 py-4 flex items-center justify-between bg-white shadow-md`}
      >
        <div className="flex items-center gap-x-5">
          <Link href="/">
            <img src="/images/logo.webp" alt="logo" className="w-36 lg:w-56" />
          </Link>
        </div>
        <ul className="hidden lg:flex gap-6">
          {links.map(({ title, link }) => (
            <li key={title} className="relative group">
              {title === "Products" ? (
                <>
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServiceOpen(true)}
                    onMouseLeave={() => setIsServiceOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-[#4FBB44] focus:outline-none">
                      <span>Products</span>
                      <LuChevronDown
                        className={`w-4 h-4 transition-transform duration-300 font-extrabold ${
                          isServiceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isServiceOpen && (
                      <ul className="absolute left-0 top-full bg-white shadow-2xl rounded-xl z-50 w-[350px] border border-gray-200">
                        {products.map((elm, index) => (
                          <li
                            key={index}
                            className="border-b last:border-none border-gray-100 "
                          >
                            <Link
                              href={elm.link}
                              className="flex items-center gap-4 px-5 py-4 hover:bg-gray-100 transition-all duration-200"
                            >
                              <img
                                src={elm.img}
                                alt={elm.title}
                                className="w-14 h-14 object-cover rounded-full border border-gray-200"
                              />
                              <div className="flex flex-col">
                                <span className="text-base font-semibold text-gray-800">
                                  {elm.title}
                                </span>
                                <span className="text-sm text-gray-600">
                                  {elm.headerDesc}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  href={link}
                  className={`${
                    link === "/"
                      ? pathname === "/"
                        ? "text-[#4FBB44]"
                        : "text-gray-700"
                      : pathname.startsWith(link)
                      ? "text-[#4FBB44]"
                      : "text-gray-700"
                  } font-semibold hover:text-[#4FBB44]`}
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-[#3F83C0] cursor-pointer group  px-6 sm:px-8 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center "
          >
            <span className="w-8 bg-[#0f2c49] group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
            <span className="relative z-10">
              {pathname === "/" ? "Enquire Now" : " Enquire Now"}{" "}
            </span>
          </button>

          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden">
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed  lg:hidden top-0 left-0 w-full md:w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-400">
          <Link href="/">
            <img src="/images/logo.webp" alt="logo" className="w-36 " />
          </Link>
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        <ul className="p-4 space-y-4">
          {links.map(({ title, link }) => (
            <li key={title} className="relative">
              {title === "Products" ? (
                <>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsSidebarServiceOpen(!isSidebarServiceOpen)
                      }
                      className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-[#4FBB44] focus:outline-none w-full text-left"
                    >
                      <span>Products</span>
                      <LuChevronDown
                        className={`w-4 h-4 transition-transform duration-300 font-extrabold ${
                          isSidebarServiceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isSidebarServiceOpen && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {products.map((elm, index) => (
                          <li
                            key={index}
                            className="border-b last:border-none border-gray-200 "
                          >
                            <Link
                              href={elm.link}
                              onClick={() => isSidebarOpen(!isOpen)}
                              className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
                            >
                              <img
                                src={elm.img}
                                alt={elm.title}
                                className="w-12 h-12 hidden object-cover rounded-full border border-gray-300"
                              />
                              <div className="flex flex-col">
                                <span className="text-base font-semibold text-gray-800">
                                  {elm.title}
                                </span>
                                <span className="text-sm text-gray-600">
                                  {elm.headerDesc}
                                </span>
                              </div>{" "}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  href={link}
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-700 font-semibold hover:text-[#4FBB44]"
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed lg:hidden inset-0 bg-black/40 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <QuotePopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        service={pathname.split("-").join(" ").replace("/", "")}
      />
    </>
  );
}
