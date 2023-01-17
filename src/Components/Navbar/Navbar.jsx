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
  contact: "/contact",
  booking: "/booking",
  bookingv2: "/bookingv2",
  staffPortal: "/StaffPortal/booking",
  gallery: "/gallery",
  about: "/about",
};

export default function Navbar() {
  const [sm_Toggle, set_Toggle] = useState(false);

  const closeCallback = () => set_Toggle(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      set_Toggle(false);
    });
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex-col bg-pink-500 items-center">
        <span className="grid grid-cols-4 rounded-2xl">
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

          <div className="sm:flex hidden justify-end">
            <div className="m-7 mb-3">
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
        </span>
        <div className="sm:flex hidden justify-center items-center bg-pink-500 text-white">
          98 Pine Mountain Rd Brassall QLD 4305 || 07 3201 5914 || 0490 545 260
          (Katie)
        </div>
        <div className="sm:flex hidden justify-center items-center bg-pink-200">
          <NavButton to={linkDestination.home} text="HOME" />
          <NavButton to={linkDestination.about} text="ABOUT US" />
          <NavButton to={linkDestination.services} text="SERVICES" />
          <NavButton to={linkDestination.gallery} text="GALLERY" />
          <NavButton to={linkDestination.contact} text="CONTACT" />
          <NavButton to={linkDestination.staffPortal} text="STAFF PORTAL" />
        </div>
      </div>

      <div
        className={`${
          sm_Toggle ? "flex-wrap" : "hidden"
        } bg-pink-50 items-center justify-center`}
      >
        <SMNavButton
          closeCallback={closeCallback}
          to={linkDestination.home}
          text="HOME"
        />
        <SMNavButton
          closeCallback={closeCallback}
          to={linkDestination.about}
          text="ABOUT US"
        />
        <SMNavButton
          closeCallback={closeCallback}
          to={linkDestination.services}
          text="SERVICES"
        />
        <SMNavButton
          closeCallback={closeCallback}
          to={linkDestination.gallery}
          text="GALLERY"
        />
        <SMNavButton
          closeCallback={closeCallback}
          to={linkDestination.contact}
          text="CONTACT"
        />

        <div className="flex justify-center">
          <Link
            to={linkDestination.booking}
            className="flex w-[100%] justify-center p-3 bg-pink-600 hover:bg-pink-400 text-white duration-300 font-bold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
