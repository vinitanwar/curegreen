import { ArrowRight } from "lucide-react";
import React from "react";

import Link from "next/link";
import Testimonials from "./Testimonails";
import { blogData } from "../blogData";
import { slugify } from "../slugify";
export default function BlogInner() {
  return (
    <>
      <div className="px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 bg-gray-50">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl transform transition-transform hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] sm:text-xs text-[#4FBB44] font-semibold uppercase tracking-widest">
                    {blog.cate}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F2C49] mt-1 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {blog.desc}
                  </p>
                </div>

                <Link
                  href={`/blogs/${slugify(blog.title)}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#4FBB44] hover:bg-[#3da937] px-4 py-2 group rounded-full transition-all duration-300 w-max"
                >
                  Read More
                  <ArrowRight className="w-4 h-4  group-hover:translate-x-1 duration-200 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
    </>
  );
}
