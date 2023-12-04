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
      <div className="flex flex-col gap-4 text-slate-400 justify-start items-start">
        <NavLink className={({isActive}) => isActive ? "navbar-item is-active": "navbar-item"} to="/">Beranda</NavLink>
        <NavLink className={({isActive}) => isActive ? "navbar-item is-active": "navbar-item"} to="/profile">Profil</NavLink>
        <NavLink
        to="login"
        className="rounded-lg border bg-blue-600 px-3 py-1 text-white"
      >
        Login
      </NavLink>
      </div>
      
    </div>
  );
}
