import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <main className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-blue-200">
      <div className="relative rounded-lg bg-white sm:flex sm:gap-6 md:gap-10">
        <div className="logo-container">
          <img src="/logoPutih.png" className="block w-[150px] sm:w-[200px]" />
        </div>
        <div className="p-4">
          <h1 className="mb-4 text-sm font-bold sm:text-base">Selamat Datang</h1>
          <div className="relative">
            <input
              type="text"
              name="username"
              id="username"
              className="rounded-lg border bg-slate-200 py-2 pl-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-base"
              placeholder="Username"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-gray-400">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="relative mt-3">
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-lg border bg-slate-200 py-2 pl-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-base"
              placeholder="Password"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm sm:text-base text-gray-400">
              <FontAwesomeIcon icon={faKey} />
            </div>
          </div>
          <p className="mb-4 ml-auto mt-4 w-fit cursor-pointer text-sm font-bold text-blue-500 sm:text-base">
            Lupa password?
          </p>
          <button className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-sm sm:text-base font-bold text-white">
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
