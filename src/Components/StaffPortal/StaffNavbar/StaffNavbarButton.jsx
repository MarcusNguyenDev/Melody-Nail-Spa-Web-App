import React from "react";
import { Link } from "react-router-dom";

export default function StaffNavbarButton(props) {
  return (
    <div className="w-[100%]">
      <Link
        className="flex justify-center py-1 w-[100%] hover:bg-pink-500 font-sans font-bold text-white"
        to={props.to}
      >
        {props.text}
      </Link>
    </div>
  );
}
