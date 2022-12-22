import React from "react";
import { useEffect, useState } from "react";
import api from "../../../api.json";
import { useNavigate } from "react-router-dom";

export default function ServicesCreate() {
  const navigate = useNavigate();
  const [servicetypes, setServiceTypes] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [selectedServiceType, setSelectServiceType] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");

  useEffect(() => {
    fetch(api.api + "/servicetypes")
      .then((res) => res.json())
      .then((data) => setServiceTypes(data));
  }, []);
  return (
    <div>
      <div className="bg-white m-3 rounded-xl w-[600px] p-3">
        <div className=" grid grid-cols-3">
          <label className="col-span-1 flex">Service Name:</label>
          <input
            className="col-span-2 border-2"
            onChange={(e) => setServiceName(e.target.value)}
          />
        </div>

        <div className=" grid grid-cols-3 my-1">
          <label className="col-span-1 flex">Service Type:</label>
          <select
            className="col-span-2"
            onChange={(e) => setSelectServiceType(e.target.value)}
          >
            <option value={""}>Select a service type</option>
            {servicetypes.map((row) => (
              <option key={row.Id} value={row.Id}>
                {row.ServiceTypeName}
              </option>
            ))}
          </select>
        </div>

        <div className=" grid grid-cols-3 my-1">
          <label className="col-span-1 flex">Price:</label>
          <input
            className="col-span-1 border-2"
            type={"text"}
            onChange={(e) => setServicePrice(e.target.value)}
          />
        </div>
        <div className=" grid grid-cols-3 my-1">
          <label className="col-span-1 flex">Description:</label>
          <textarea
            className="col-span-2 border-2 resize-none h-[200px]"
            type={"text"}
            onChange={(e) => setServiceDescription(e.target.value)}
          />
        </div>
        <div className="flex">
          <button
            className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
            onClick={() => {
              navigate("../services");
            }}
          >
            Back
          </button>

          <button
            className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
            onClick={() => {
              const message = {
                method: "POST",
                headers: {
                  accept: "application/json",
                  "Content-Type": "application/json",
                  authorization: "Bearer " + sessionStorage.getItem("jwt"),
                },
                body: JSON.stringify({
                  ServiceTypeId: selectedServiceType,
                  ServiceName: serviceName,
                  ServicePrice: servicePrice,
                  ServiceDescription: serviceDescription,
                }),
              };
              console.log(message.body);
              fetch(api.api + "/services/post", message)
                .then((res) => res.json())
                .then((res) => window.alert(res.message));
              navigate("../services");
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
