import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceTypeIndex() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex">
        <button
          className="justify-start t-4 ml-4 p-2 bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
          onClick={() => {
            navigate("./create");
          }}
        >
          Create New
        </button>
      </div>
      <div className="m-3 h-[1550px] bg-white"></div>
    </div>
  );
}
