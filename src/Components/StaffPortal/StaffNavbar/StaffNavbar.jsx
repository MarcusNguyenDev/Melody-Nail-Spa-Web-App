import React from "react";
import { Link } from "react-router-dom";

import StaffNavbarButton from "./StaffNavbarButton";

export default function StaffNavbar() {
  return (
    <div className="flex h-[100%]">
      <nav className="h-[100%] w-[150px] z-0 bg-pink-900">
        <div className="w-[100%] h-[100%] flex-col">
          <div>
            <hr className="m-3 mb-1 border-pink-400" />
          </div>

          <StaffNavbarButton to={"./dashboard"} text="Dash Board" />
          <StaffNavbarButton to={"./todayServices"} text="Today Services" />
          <StaffNavbarButton to={"./TodayBooking"} text="Today Booking" />
          <StaffNavbarButton to={"./AllBooking"} text="All Booking" />

          <div className="m-5"></div>
          <StaffNavbarButton to={"./servicetype"} text="Service Types" />
          <StaffNavbarButton to={"./services"} text="Services" />

          <div className="m-5"></div>
          <StaffNavbarButton to={"./users"} text="Users" />
          <div className="m-5"></div>
          <StaffNavbarButton to={"./dashboard"} text="Report" />

          <div className="mt-16"></div>

          <hr className="mx-3 border-pink-400" />

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
      </nav>
    </div>
  );
}
