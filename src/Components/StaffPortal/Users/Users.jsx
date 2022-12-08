import React from "react";
import { Outlet } from "react-router-dom";

export default function Users() {
  return (
    <div className="flex-col">
      <div className="flex m-4 font-bold text-xl">Staffs</div>
      <div className="flex ml-4">
        <button className="">Create</button>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
