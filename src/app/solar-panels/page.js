import React from "react";
import SolarPanelInner from "../component/SolarPanelInner";

export const metadata = {
  title: "Solar Panels in Victoria – Save Energy with CureGreen",
  description:
    "Discover high-quality solar panel installations by CureGreen in Victoria, Australia. Reduce electricity bills, generate clean energy, and contribute to a sustainable future with our expert solutions.",
};

export default function page() {
  return (
    <div>
      <SolarPanelInner />
    </div>
  );
}
