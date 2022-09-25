import React from "react";
import StaffNavbar from "../Components/StaffPortal/StaffNavbar";
import { Outlet } from "react-router-dom";

export default function StaffPortal() {
  return (
    <div className="flex">
      <div>
        <StaffNavbar />
      </div>
      <div className="w-[100%] bg-gray-200">
        <Outlet />
      </div>
    </div>
  );
}
