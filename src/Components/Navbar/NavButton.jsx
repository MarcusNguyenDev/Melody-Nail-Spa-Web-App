import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavButton(props) {
  const location = useLocation();
  return (
    <div className="flex rounded-2xl">
      <Link
        className={
          location.pathname === props.to
            ? "p-3 py-2 bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold border-b-[3px] border-pink-700"
            : "p-3 py-2 bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold border-b-[3px] border-pink-200 hover:border-pink-400"
        }
        to={props.to}
      >
        {props.text}
      </Link>
    </div>
  );
}
