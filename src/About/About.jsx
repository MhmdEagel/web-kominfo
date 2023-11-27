import React from "react";

export default function About() {
  return (
    <section className="mx-auto mt-16 text-lg md:mt-32 md:flex md:w-fit md:items-center md:gap-10">
      <div className="mx-auto w-fit text-center">
        <h2 className="font-bold sm:text-2xl">
          Apa itu <span className="text-blue-500">KOMINFO?</span>
        </h2>
        <p className="text-sm font-thin tracking-wider sm:text-base">
          KEMENTRIAN INDONESIA
        </p>
      </div>
      <div className="mx-auto mt-4 max-w-xs text-justify text-base sm:max-w-sm sm:text-lg md:border-l-4 md:border-blue-500 md:text-xl">
        <p className="md:ml-6">
          Kementerian Komunikasi dan Informatika adalah kementerian Indonesia
          yang mengurusi bidang komunikasi dan informatika. Kementerian
          Komunikasi dan Informatika sebelumnya bernama Kementerian Negara
          Komunikasi dan Informasi dan Departemen Komunikasi dan Informatika.
        </p>
      </div>
    </section>
  );
}
