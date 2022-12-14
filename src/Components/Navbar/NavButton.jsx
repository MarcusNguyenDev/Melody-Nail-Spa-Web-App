import React from "react";
import { Link } from "react-router-dom";

export default function NavButton(props) {
  return (
    <div className="flex rounded-2xl">
      <Link
        className="p-3 py-2 bg-pink-200 hover:bg-pink-400 text-pink-800 duration-300 font-bold"
        to={props.to}
      >
        {props.text}
      </Link>
    </div>
  );
}
