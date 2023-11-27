import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-blue-200 pb-10 pt-16">
      <div
        className="mx-auto w-fit
    sm:flex sm:items-center sm:justify-center sm:gap-4"
      >
        <div className="mx-auto w-[250px] sm:w-[350px]">
          <img src="/logo-Kominfo.png" alt="logo kominfo" className="w-full" />
        </div>
        <div className="mx-auto w-fit text-center text-xl font-bold sm:text-left sm:text-2xl md:text-3xl">
          <h2 className="mb-1">MAKIN DIGITAL</h2>
          <h2 className="mb-1">MAKIN MAJU</h2>
          <h2 className="text-blue-500">BERSAMA KOMINFO</h2>
        </div>
      </div>
    </section>
  );
}
