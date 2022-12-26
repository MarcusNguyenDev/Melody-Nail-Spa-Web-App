import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import menu from "../../misc/menu.svg";
import close from "../../misc/close.svg";

import NavButton from "./NavButton";
import SMNavButton from "./SMNavButton";

const linkDestination = {
  home: "/",
  services: "/services",
  about: "/",
  contact: "/contact",
  booking: "/booking",
  staffPortal: "/StaffPortal",
};

export default function Navbar() {
  const [sm_Toggle, set_Toggle] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      set_Toggle(false);
    });
  }, []);

  return (
    <nav className="">
      <div className="flex-col bg-pink-500 items-center">
        <div className="grid grid-cols-4 rounded-2xl">
          <div className="flex col-span-3">
            <div className="w-[170px] h-[80px]">
              <Link to={linkDestination.home} className="col-span-1">
                <img
                  className="rounded-xl w-[120px] m-3 mb-"
                  alt="Melody Nail Spa"
                  src={logo}
                />
              </Link>
            </div>

            <div className="flex ml-5 sm:text-4xl text-2xl col-span-4 font-semibold text-white sm:mt-7 mt-4 font-Dancing-Script">
              Melody Nails & Spa
            </div>
          </div>

          <div className="sm:flex hidden justify-end s">
            <div className="m-7 mb-2 animate-bounce">
              <Link
                to={linkDestination.booking}
                className="flex p-3 border-white  border-[2px] justify-center rounded-xl w-28 bg-pink-700 hover:bg-pink-400 text-white duration-300 font-bold"
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
        <div className="sm:flex hidden justify-start items-center bg-pink-200">
          <NavButton to={linkDestination.home} text="Home" />
          <NavButton to={linkDestination.services} text="Services" />
          <NavButton to={linkDestination.contact} text="Contact" />
          <NavButton to={linkDestination.staffPortal} text="Staff Portal" />
        </div>
      </div>

      <div
        className={`${
          sm_Toggle ? "flex-wrap" : "hidden"
        } bg-pink-50 items-center justify-center`}
      >
        <SMNavButton to={linkDestination.home} text="Home" />
        <SMNavButton to={linkDestination.services} text="Services" />
        <SMNavButton to={linkDestination.contact} text="Contact" />

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
