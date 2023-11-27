import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComputer } from "@fortawesome/free-solid-svg-icons";

import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);

  function showMobileNav() {
    setIsShowMobileNav(true);
  }

  

  return (
    <nav className="fixed left-0 right-0 top-0 flex bg-blue-200 p-5 font-bold sm:text-lg z-30">
      <div className="mr-auto">
        <span className="mr-1 text-blue-500">
          <FontAwesomeIcon icon={faComputer} />
        </span>
        <span className="text-blue-500">KOM</span>
        <span>INFO</span>
      </div>
      <div className="hidden gap-4 text-slate-400 sm:flex">
        <NavLink className={({isActive}) => isActive ? "isActive": null} to="/" >Beranda</NavLink>
        <NavLink className={({isActive}) => isActive ? "isActive": null} to="/profile" >Profil</NavLink>
        <NavLink className={({isActive}) => isActive ? "isActive": null} to="/login" >Login</NavLink>
      </div>
      <div
        className="cursor-pointer text-blue-500 sm:hidden"
        onClick={showMobileNav}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <MobileNav
        IsShowMobileNav={isShowMobileNav}
        setIsShowMobileNav={setIsShowMobileNav}
      />
    </nav>
  );
}
