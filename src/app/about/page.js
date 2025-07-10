import React from "react";
import CommonBanner from "../component/CommonBanner";
import About from "../component/About";
import Welcome from "../component/Welcome";
import Testimonials from "../component/Testimonails";

export const metadata = {
  title:
    "About CureGreen – Sustainable Energy Solutions in Victoria, Australia",
  description:
    "Discover CureGreen's mission to enhance residential and business efficiency through innovative eco-friendly energy solutions in Victoria, Australia. Learn how we reduce consumption, lower utility costs, and foster a sustainable future.",
};

export default function page() {
  return (
    <div>
      <CommonBanner name="about" />
      <About />
      <Welcome />
      <Testimonials />
    </div>
  );
}
