import React from "react";
import BlogInner from "../component/BlogInner";
import CommonBanner from "../component/CommonBanner";

export const metadata = {
  title: "CureGreen Blog – Eco-Friendly Energy Tips and Solutions",
  description:
    "Stay updated with the latest insights, tips, and trends on eco-friendly energy solutions. Explore CureGreen's blog for articles on energy-saving strategies, sustainable living, and more.",
};

export default function page() {
  return (
    <div>
      <CommonBanner name="blogs" />
      <BlogInner />
    </div>
  );
}
