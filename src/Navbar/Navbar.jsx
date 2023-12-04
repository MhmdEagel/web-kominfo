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
    <nav className="fixed left-0 right-0 top-0 z-30 flex bg-blue-200 p-5 font-bold sm:text-lg">
      <div className="mr-auto">
        <span className="mr-1 text-blue-500">
          <FontAwesomeIcon icon={faComputer} />
        </span>
        <span className="text-blue-500">KOM</span>
        <span>INFO</span>
      </div>
      <div className="hidden gap-6 sm:flex mr-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-item is-active" : "navbar-item"
          }
          to="/"
        >
          Beranda
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-item is-active" : "navbar-item"
          }
          to="/profile"
        >
          Profil
        </NavLink>
      </div>
      <NavLink
        to="login"
        className="rounded-lg border bg-blue-600 px-3 py-1 text-white ml-4 hidden sm:block"
      >
        Login
      </NavLink>
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
