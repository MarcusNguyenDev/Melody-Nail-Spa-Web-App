import React from "react";
import { Outlet } from "react-router-dom";

export default function ServiceType() {
  return (
    <div className="flex-col justify-center">
      <div className="text-pink-800 flex justify-center font-bold text-[20px] m-4">
        Service Type
      </div>
      <div className="flex w-[100%] rounded-xl">
        <Outlet />
      </div>
    </div>
  );
}
