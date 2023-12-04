import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-blue-900 pt-6 text-white">
      <section className="sm:flex max-w-fit mx-auto items-center gap-6 md:gap-8 mb-5">
        <div className="mx-auto mb-4 w-fit">
          <img src="/logoPutih.png" className="sm:w-[150px]" width={120} alt="logo" />
        </div>
        <div className="mx-auto flex w-fit flex-col gap-2 text-xs sm:text-base font-bold">
          <div>
            <span className="mr-1">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span>Jl. Medan Merdeka Barat no. 9, Jakarta 10110</span>
          </div>
          <div>
            <span className="mr-1">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span>(021) 3452841</span>
          </div>
          <div>
            <span className="mr-1">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span>humas@mail.kominfo.go.id</span>
          </div>
        </div>
      </section>
      <section className="border-t-2 border-slate-500 py-4  bg-blue-900 h-full">
        <div className="w-fit mx-auto text-sm">
            <p>&copy; 2023 Muhammad Eagel Triutama</p>
        </div>
      </section>
    </footer>
  );
}
