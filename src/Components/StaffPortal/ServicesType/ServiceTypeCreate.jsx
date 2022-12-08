import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useState } from "react";

export default function ServiceTypeCreate() {
  const navigate = useNavigate();
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex-col w-[100%] justify-center">
      <div className="flex justify-start">
        <div className="ml-4 justify-start">
          <label>Service Type:</label>
          <hr className="m-2" />
          <label>Description:</label>
        </div>
        <div className="justify-start">
          <input
            type="text"
            className="ml-2 p-2 w-[300px] border-black border-[1px] rounded-md"
            onChange={(e) => {
              setServiceType(e.target.value);
            }}
          />
          <hr className="m-2" />
          <textarea
            className="ml-2 p-1 resize-none w-[300px] h-[200px] border-black border-[1px] rounded-md"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex">
        <button
          className="m-4 p-1 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
          onClick={() => {
            navigate("../");
          }}
        >
          Save
        </button>

        <button
          className="m-4 p-1 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
          onClick={() => {
            navigate("../");
          }}
        >
          Back
        </button>
      </div>
      <NotificationContainer />
    </div>
  );
}
