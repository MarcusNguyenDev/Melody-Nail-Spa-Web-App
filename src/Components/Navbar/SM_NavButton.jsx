import React from "react";
import { Link } from "react-router-dom";

export default function SM_NavButton(props) {
  return (
    <div className="flex justify-center">
      <Link
        to={props.to}
        className="flex w-[100%] justify-center p-3 bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
      >
        {props.text}
      </Link>
    </div>
  );
}
