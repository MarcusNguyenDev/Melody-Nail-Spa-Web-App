import React from "react";
import { Link } from "react-router-dom";

export default function StaffNavbar() {
  return (
    <div className="flex h-[100%]">
      <nav className="h-[100%] w-[200px] z-0 bg-pink-200">
        <div className="w-[100%] h-[100%] flex-col">
          <div>
            <hr className="m-3 border-pink-400" />
          </div>

          <div className="w-[100%]">
            <Link
              className="flex justify-center border-pink-700 border-t-[2px] border-b-[2px] mt-3 bg-pink-200 p-1 w-[100%] hover:bg-pink-500 font-bold text-pink-800"
              to={"./dashboard"}
            >
              Dash Board
            </Link>
          </div>

          <div className="w-[100%]">
            <Link
              className="flex justify-center border-pink-700 border-t-[2px] border-b-[2px] mt-3 bg-pink-200 p-1 w-[100%] hover:bg-pink-500 font-bold text-pink-800"
              to={"./dashboard"}
            >
              Account
            </Link>
          </div>

          <div className="w-[100%]">
            <Link
              className="flex justify-center border-pink-700 border-t-[2px] border-b-[2px] mt-3 bg-pink-200 p-1 w-[100%] hover:bg-pink-500 font-bold text-pink-800"
              to={"./dashboard"}
            >
              Today Booking
            </Link>
          </div>

          <div className="w-[100%]">
            <Link
              className="flex justify-center border-pink-700 border-t-[2px] border-b-[2px] mt-3 bg-pink-200 p-1 w-[100%] hover:bg-pink-500 font-bold text-pink-800"
              to={"./dashboard"}
            >
              Booking
            </Link>
          </div>

          <div className="w-[100%]">
            <Link
              className="flex justify-center border-pink-700 border-t-[2px] border-b-[2px] mt-3 bg-pink-200 p-1 w-[100%] hover:bg-pink-500 font-bold text-pink-800"
              to={"./dashboard"}
            >
              Service Types
            </Link>
          </div>

          <div className="w-[100%]">
            <Link
              className="flex justify-center border-pink-700 border-t-[2px] border-b-[2px] mt-3 bg-pink-200 p-1 w-[100%] hover:bg-pink-500 font-bold text-pink-800"
              to={"./dashboard"}
            >
              Services
            </Link>
          </div>

          <div className="w-[100%]">
            <Link
              className="flex justify-center border-pink-700 border-t-[2px] border-b-[2px] mt-3 bg-pink-200 p-1 w-[100%] hover:bg-pink-500 font-bold text-pink-800"
              to={"./dashboard"}
            >
              Report
            </Link>
          </div>

          <div className="w-[100%]">
            <Link
              className="flex justify-center border-pink-700 border-t-[2px] border-b-[2px] mt-3 bg-pink-200 p-1 w-[100%] hover:bg-pink-500 font-bold text-pink-800"
              to={"./dashboard"}
            >
              Check for update
            </Link>
          </div>

          <div>
            <hr className="m-3 border-pink-400" />
          </div>
        </div>
      </nav>
    </div>
  );
}
