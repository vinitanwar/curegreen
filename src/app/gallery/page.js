import React from "react";
import GalleryPage from "../component/GalleryPage";

export const metadata = {
  title:
    "CureGreen Gallery – Explore Our Sustainable Energy Projects in Victoria, Australia",
  description:
    "Browse the CureGreen gallery showcasing our eco-friendly energy projects and sustainable installations across Victoria, Australia. See how we help homes and businesses lower emissions and save on energy costs through the Victoria Energy Upgrades (VEU) program.",
};

export default function page() {
  return (
    <div>
      <GalleryPage />
    </div>
  );
}
