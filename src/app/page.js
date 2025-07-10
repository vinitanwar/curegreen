import React from "react";
import HeroSlider from "./component/Hero";
import About from "./component/About";
import Choose from "./component/Choose";
import LatestInstallations from "./component/Blog";
import TestimonialSection from "./component/Testimonails";
import HeroSection from "./component/HeroSection";
import Service from "./component/Gallery";
import Warranty from "./component/Warranty";
import Blog from "./component/Blog";
import Gallery from "./component/Gallery";
import ServiceAndProducts from "./component/ServiceAndProducts";
import Welcome from "./component/Welcome";
import OverViewProduct from "./component/OverViewProduct";
import ContactNewForm from "./component/ContactNewForm";

const page = () => {
  const slides = [
    {
      id: 1,
      img: "/images/posters/Air Conditioner/Split and Ducted AC Landscape (1200 x 628 px).webp",
    },

    {
      id: 2,
      img: "/images/posters/Hot Water/Hot Water Pump - 70 percent savings Landscape (1200 x 628 px).webp",
    },
    {
      id: 3,
      img: "/images/posters/Free Products/Free Products Landscape (1200 x 628 px).webp",
    },
    {
      id: 4,
      img: "/images/posters/Solar System/Solar System Landscape (1200 x 628 px).webp",
    },
  ];
  return (
    <>
      <HeroSection slides={slides} />
      <Welcome />
      <TestimonialSection />

      <ServiceAndProducts />

      <Gallery />


      <ContactNewForm />

    </>
  );
};

export default page;
