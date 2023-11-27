import React, { useState } from "react";

export default function Service() {
  const [services, setServices] = useState([
    {
      id: 1,
      img: "/icons/suitcase.png",
      text: "Professional",
    },
    {
      id: 2,
      img: "/icons/pen.png",
      text: "Akuntabel",
    },
    {
      id: 3,
      img: "/icons/puzzle.png",
      text: "Integritas",
    },
    {
      id: 4,
      img: "/icons/light-bulb.png",
      text: "Inovatif",
    },
  ]);
  return (
    <section className="mt-16 font-bold md:mt-32">
      <h2 className="text-center text-blue-500 sm:text-2xl">PROAKTIF</h2>
      <p className="text-center text-sm font-thin tracking-wider sm:text-base">
        PELAYANAN
      </p>
      <div className="mx-auto mt-4 grid w-fit grid-cols-2 gap-8 sm:grid-cols-4 md:gap-10">
        {services.map((service) => {
          return (
            <div className="w-fit" key={service.id}>
              <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-blue-300 md:h-[130px] md:w-[130px]">
                <img
                  src={service.img}
                  alt=""
                  className="w-[50px] md:w-[60px]"
                />
              </div>
              <h3 className="mt-2 text-center md:text-lg">{service.text}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
