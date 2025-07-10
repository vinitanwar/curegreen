import React from "react";
import CommonBanner from "../component/CommonBanner";

export const metadata = {
  title:
    "Products – CureGreen Sustainable Energy Solutions in Victoria, Australia",
  description:
    "Explore CureGreen’s range of eco-friendly energy-saving products for homes and businesses in Victoria, Australia. Discover innovative solutions to enhance efficiency, reduce consumption, and lower utility costs.",
};

export default function page() {
  return (
    <div>
      <CommonBanner name="products" />
    </div>
  );
}
