import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
export default function MobileNav({ IsShowMobileNav, setIsShowMobileNav }) {
  function hideMobileNav() {
    setIsShowMobileNav(false);
  }

  return (
    <div
      className={`fixed h-full right-0 top-0 bg-white px-8 shadow-xl transition-all ${
        IsShowMobileNav ? "translate-x-0" : "translate-x-full"
      } ease-in-out duration-150`}
    >
      <div
        className="mb-4 mt-6 cursor-pointer text-blue-500"
        onClick={hideMobileNav}
      >
        <FontAwesomeIcon icon={faXmarkCircle} />
      </div>
      <div className="flex flex-col gap-4 text-slate-400">
        <NavLink className={({isActive}) => isActive ? "isActive": null} to="/">Beranda</NavLink>
        <NavLink className={({isActive}) => isActive ? "isActive": null} to="/profile">Profil</NavLink>
        <NavLink className={({isActive}) => isActive ? "isActive": null} to="/login">Login</NavLink>
      </div>
    </div>
  );
}
