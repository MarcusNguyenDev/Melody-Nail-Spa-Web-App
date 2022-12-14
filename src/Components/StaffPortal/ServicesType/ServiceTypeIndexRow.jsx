import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceTypeIndexRow(props) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-7">
      <div className="border ">{props.ServiceType.Id}</div>
      <div className="border col-span-4">
        {props.ServiceType.ServiceTypeName}
      </div>
      <div className="border col-span-2">
        <button
          className="font-semibold mx-1 text-emerald-600"
          onClick={() => {
            navigate(`./view?id=${props.ServiceType.Id}`);
          }}
        >
          View
        </button>
        <button className="font-semibold mx-1 text-yellow-700">Edit</button>
        <button className="font-semibold mx-1 text-red-600">Delete</button>
      </div>
    </div>
  );
}
