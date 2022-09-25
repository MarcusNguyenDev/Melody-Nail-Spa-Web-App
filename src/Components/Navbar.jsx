import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import menu from "../misc/menu.svg";
import close from "../misc/close.svg";

const linkDestination = {
  home: "/",
  services: "/",
  about: "/",
  contact: "/contact",
  booking: "",
};

export default function Navbar() {
  const [sm_Toggle, set_Toggle] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      set_Toggle(false);
    });
  }, []);

  return (
    <nav className="w-full">
      <div className="flex bg-pink-300 items-center">
        <div className="flex rounded-2xl">
          <Link to={linkDestination.home}>
            <img
              className="rounded-xl w-[140px] m-5"
              alt="Melody Nail Spa"
              src={logo}
            />
          </Link>
        </div>

        <div className="sm:flex hidden justify-end items-center flex-1">
          <div>
            <Link
              to={linkDestination.home}
              className="mr-2 p-3 rounded-xl w-28 bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
            >
              Home
            </Link>
          </div>

          <div>
            <Link
              to={linkDestination.services}
              className="mr-2 p-3 rounded-xl w-28 bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
            >
              Services
            </Link>
          </div>

          <div>
            <Link
              to={linkDestination.contact}
              className="mr-2 p-3 rounded-xl w-28 bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
            >
              Contact
            </Link>
          </div>

          <div>
            <Link
              to={"/staffportal"}
              className="flex mr-2 p-3 rounded-xl bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
            >
              Staff Portal
            </Link>
          </div>

          <div className="animate-bounce">
            <Link
              to={linkDestination.booking}
              className="flex m-5 p-3 justify-center rounded-xl w-28 bg-pink-700 hover:bg-pink-400 text-white duration-300 font-bold"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="sm:hidden flex justify-end flex-1 items-center">
          <div>
            <img
              className="rounded-2xl mr-5 p-3 bg-pink-200 font-boldtransition ease-in-out delay-150
                hover:bg-pink-400 text-pink-800 duration-300 font-bold object-contain"
              src={sm_Toggle ? close : menu}
              alt="menu"
              onClick={() => {
                set_Toggle((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          sm_Toggle ? "flex-wrap" : "hidden"
        } bg-pink-50 items-center justify-center`}
      >
        <div className="flex justify-center m-3">
          <Link
            to={linkDestination.home}
            className="flex justify-center w-[100%] p-3 rounded-xl bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
          >
            Home
          </Link>
        </div>

        <div className="flex justify-center m-3">
          <Link
            to={linkDestination.services}
            className="flex w-[100%] justify-center p-3 rounded-xl  bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
          >
            Services
          </Link>
        </div>

        <div className="flex justify-center m-3">
          <Link
            to={linkDestination.contact}
            className="flex w-[100%] p-3 justify-center rounded-xl  bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
          >
            Contact
          </Link>
        </div>

        <div className="flex justify-center animate-bounce m-3">
          <Link
            to={linkDestination.booking}
            className="flex w-[100%] p-3 justify-center rounded-xl  bg-pink-700 hover:bg-pink-400 text-white duration-300 font-bold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
