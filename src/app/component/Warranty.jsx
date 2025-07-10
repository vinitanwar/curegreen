import React from "react";

export default function Warranty() {
  const slides = [
    {
      name: "Technology",
      percent: "100",
    },
    {
      name: "Quality",
      percent: "95",
    },
    {
      name: "Time",
      percent: "98",
    },
  ];
  return (
    <div className="container mx-auto px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
      <h5 className="warranty  text-center text-4xl lg:text-5xl xl:text-9xl font-extrabold">
        CureGreen
      </h5>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 mt-4 lg:mt-8">
        <div>
          <h5 className="text-2xl lg:text-4xl xl:text-5xl text-[#0F2C49]  font-semibold">
            Save energy, save money, live sustainably
          </h5>
        </div>
        <div className="flex flex-col gap-y-8 mt-4 text-justify">
          <p>
            At CureGreen we are committed to delivering sustainable energy
            solutions that create a positive impact on homes, businesses and the
            environment.
          </p>
          <p>
            Empowering you to save energy and cut costs with the Victoria Energy
            Upgrades (VEU) program! We offer expert advice,
          </p>
        </div>
        <div className="space-y-4">
          {slides.map((elm, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-black">{elm.name}</span>
                <span>{elm.percent} %</span>
              </div>
              <div className="w-full h-4 rounded-full bg-gray-100 overflow-hidden">
                <div
                  style={{ width: `${elm.percent}%` }}
                  className="  bg-[#3F83C0] h-full"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
