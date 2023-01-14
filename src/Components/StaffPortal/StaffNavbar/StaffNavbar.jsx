import React from "react";
import { Link } from "react-router-dom";

import StaffNavbarButton from "./StaffNavbarButton";

export default function StaffNavbar() {
  return (
    <div className="h-full w-[150px] bg-pink-900">
      <div className="w-[100%]  flex-col">
        <div className="my-5">
          <label className="text-white font-Dancing-Script font-bold">
            Melody Nails & Spa
          </label>
        </div>
        <hr className="m-3 mb-1 border-white" />

        <StaffNavbarButton to={"./"} text="Dash Board" />
        <StaffNavbarButton to={"./Booking"} text="Booking" />
        <StaffNavbarButton to={"./todayServices"} text="Today Services" />

        <div className="m-5"></div>
        <StaffNavbarButton to={"./servicetype"} text="Service Types" />
        <StaffNavbarButton to={"./services"} text="Services" />
        <StaffNavbarButton to={"./gallery"} text="Gallery" />
        {/*
        <div className="m-5"></div>
        <StaffNavbarButton to={"./users"} text="Users" />
        <div className="m-5"></div>
        <StaffNavbarButton to={"./dashboard"} text="Report" />*/}

        <div className="mt-16"></div>

        <hr className="mx-3 border-white" />

        <div className="w-[100%]">
          <Link
            className="flex justify-center py-1 w-[100%] hover:bg-pink-500 font-sans text-white"
            to={"/login"}
            onClick={() => {
              sessionStorage.removeItem("loggedIn");
              sessionStorage.removeItem("jwt");
            }}
          >
            Log Out
          </Link>
        </div>
        <div className="mt-20"></div>
      </div>
    </div>
  );
}
