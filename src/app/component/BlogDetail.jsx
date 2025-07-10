"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { blogData } from "../blogData";
import { slugify } from "../slugify";

export default function BlogDetail({ singleBlog }) {
  const {
    img,
    cate,
    title,
    desc,
    full,
    benefitsTitle,
    benefitsSub,
    benefits,
    chooseTitle,
    chooseSub,
    chooseList,
    whyTitle,
    whySub,
    whyList,
    installTitle,
    installSub,
    installSteps,
    faqTitle,
    faqSub,
    faqList,
    nextTitle,
    nextSub,
    contactTitle,
    contactSub,
  } = singleBlog;

  return (
    <>
      <div className="relative text-white">
        <div
          className="bg-cover  bg-[position:34%_center] md:bg-[position:0%_center] 
 lg:bg-center bg-no-repeat relative bg-[url('/images/curGreenCommonBanner.webp')] h-[200PX] md:h-[40vh] xl:h-[400px] flex flex-col justify-center items-center"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-3xl md:text-4xl lg:text-5xl capitalize font-bold">
              {title}
            </h1>
            <div className="hidden md:flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium">blogs / {title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col lg:grid  lg:grid-cols-3 gap-x-16 gap-y-8">
          <div className="lg:col-span-2">
            <div className="space-y-6 lg:space-y-8 text-justify">
              <img
                src={img}
                alt={title}
                className="rounded-lg shadow-xl mb-6"
              />

              <div className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition duration-300">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {benefitsTitle}
                </h5>
                <h6 className="text-sm lg:text-base  text-gray-500 mb-4">
                  {benefitsSub}
                </h6>
                <div className="space-y-4">
                  {benefits.map((elm, index) => (
                    <div key={index} className="space-y-2">
                      <h6 className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                        {elm.title}
                      </h6>
                      <p className="text-sm lg:text-base  text-gray-600">
                        {elm.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Choose Section */}
              <div className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition duration-300">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {chooseTitle}
                </h5>
                <h6 className="text-sm lg:text-base  text-gray-500 mb-4">
                  {chooseSub}
                </h6>
                <div className="space-y-4">
                  {chooseList.map((elm, index) => (
                    <div key={index} className="space-y-2">
                      <h6 className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                        {elm.title}
                      </h6>
                      <p className="text-sm lg:text-base  text-gray-600">
                        {elm.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Section */}
              <div className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition duration-300">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {whyTitle}
                </h5>
                <h6 className="text-sm lg:text-base  text-gray-500 mb-4">
                  {whySub}
                </h6>
                <div className="space-y-4">
                  {whyList.map((elm, index) => (
                    <div key={index} className="space-y-2">
                      <h6 className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                        {elm.title}
                      </h6>
                      <p className="text-sm lg:text-base  text-gray-600">
                        {elm.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Install Section */}
              <div className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition duration-300">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {installTitle}
                </h5>
                <h6 className="text-sm lg:text-base  text-gray-500 mb-4">
                  {installSub}
                </h6>
                <div className="space-y-4">
                  {installSteps.map((elm, index) => (
                    <div key={index} className="space-y-2">
                      <h6 className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                        {elm.title}
                      </h6>
                      <p className="text-sm lg:text-base  text-gray-600">
                        {elm.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition duration-300">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {faqTitle}
                </h5>
                {!faqSub && (
                  <h6 className="text-sm lg:text-base  text-gray-500 mb-4">
                    {faqSub}
                  </h6>
                )}
                <div className="space-y-4">
                  {faqList.map((elm, index) => (
                    <div key={index} className="space-y-2">
                      <h6 className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                        {elm.title}
                      </h6>
                      <p className="text-sm lg:text-base  text-gray-600">
                        {elm.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Section */}
              <div className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition duration-300">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {nextTitle}
                </h5>
                <h6 className="text-sm lg:text-base  text-gray-500 mb-4">
                  {nextSub}
                </h6>
              </div>

              {/* Contact Section */}
              <div className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition duration-300">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {contactTitle}
                </h5>
                <h6 className="text-sm lg:text-base  text-gray-500 mb-4">
                  {contactSub}
                </h6>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-0">
              <div className="border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm transition-all duration-300 hover:bg-gray-100">
                <h5 className="text-xl lg:text-2xl capitalize font-semibold text-gray-800">
                  Latest Blogs
                </h5>
                <hr className="border-gray-200" />
                <div className="space-y-3">
                  {blogData.map((blog, index) => (
                    <Link
                      href={`/blogs/${slugify(blog.title)}`}
                      key={index}
                      className="flex items-center justify-between text-gray-500 hover:bg-gray-200 p-2 rounded-lg transition-all duration-300 group"
                    >
                      <span className="text-sm lg:text-base transition-colors duration-300 group-hover:text-green-600">
                        {blog.title}
                      </span>
                      <FaArrowRightLong className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-in-out" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/service/help.webp"
                  alt="help"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-white p-4 lg:p-6 space-y-4">
                  <h5 className="text-lg lg:text-xl capitalize font-semibold text-gray-800">
                    How can we help
                  </h5>
                  <p className="text-sm text-gray-600">
                    If you need any help, please feel free to contact us.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 group">
                      <div className="bg-[#eaf0ec] group-hover:bg-[#F6DD0B] transition-all duration-300 flex justify-center items-center h-14 w-14 rounded-full shrink-0">
                        <img
                          src="/images/service/icon-phone.svg"
                          alt="call"
                          className="h-6 w-6 object-contain group-hover:invert transition duration-300"
                        />
                      </div>
                      <a
                        href="tel:0475237850"
                        className="text-sm text-gray-700 group-hover:text-black transition duration-300"
                      >
                        0475237850
                      </a>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="bg-[#eaf0ec] group-hover:bg-[#F6DD0B] transition-all duration-300 flex justify-center items-center h-14 w-14 rounded-full shrink-0">
                        <img
                          src="/images/service/icon-mail.svg"
                          alt="mail"
                          className="h-6 w-6 object-contain group-hover:invert transition duration-300"
                        />
                      </div>
                      <a
                        href="mailto:InfoCureGreen@gmail.com"
                        className="text-sm text-gray-700 group-hover:text-black transition duration-300"
                      >
                        infocuregreen@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
