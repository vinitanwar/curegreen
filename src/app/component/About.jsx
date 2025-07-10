import React from "react";
import Link from "next/link";
import { GiSteamLocomotive, GiExpense } from "react-icons/gi";
import { SiHomeassistant } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { RiHomeSmile2Line } from "react-icons/ri";

export default function About() {
  return (
    <div className="relative bg-[url('/images/about/bg.webp')] bg-cover bg-no-repeat">
      <div className="relative px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16  xl:pb-8">
        <div className="container mx-auto flex flex-col gap-6 text-gray-800">
          <h5 className="text-2xl md:text-3xl text-center md:text-start lg:text-4xl font-bold leading-tight">
            Discover How <span className="text-[#57B148]">CureGreen</span> Saves
            Energy
          </h5>

          <div className="text-sm sm:text-base space-y-5 leading-relaxed text-justify">
            <p>
              CureGreen is a leading energy-saving company dedicated to
              enhancing the efficiency of residential spaces through innovative,
              eco-friendly solutions. Based in Australia, our core mission is to
              help homeowners reduce their energy consumption and lower utility
              costs while contributing to a sustainable future. CureGreen offers
              a range of high-quality products, including Residential Solar
              Panels, Hot Water Systems with Heat Pumps, and Split Air
              Conditioners (Reverse Cycle) designed to optimize energy use in
              homes.
            </p>

            <p>
              In addition to our premium products, we provide a selection of
              free energy-saving tools such as Cooling Vent Covers, Shower
              Heads, Door Seals (bottom and frame), Exhaust Fan Seals, and
              In-Home Display Devices. These complimentary offerings empower our
              customers to maximize energy efficiency and reduce their carbon
              footprint. At CureGreen, we are committed to delivering
              sustainable energy solutions that positively impact both your home
              and the environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
