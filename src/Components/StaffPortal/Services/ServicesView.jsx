import React from "react";
import { useEffect, useState } from "react";
import api from "../../../api.json";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ServicesView() {
  const navigate = useNavigate();
  const [servicetypes, setServiceTypes] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [selectedServiceType, setSelectServiceType] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [editable, setEditable] = useState(false);
  const [searchParams] = useSearchParams();
  const [selectedId] = useState(searchParams.get("id"));

  useEffect(() => {
    Promise.all([
      fetch(api.api + `/services/${selectedId}`).then((res) => res.json()),
      fetch(api.api + `/servicetypes`).then((res) => res.json()),
    ]).then(([service, servicestypes]) => {
      setServiceTypes(servicestypes);
      setSelectServiceType(service.ServiceTypeId);
      setServiceName(service.ServiceName);
      setServicePrice(service.ServicePrice);
      setServiceDescription(service.ServiceDescription);
    });
  }, [selectedId]);
  return (
    <div>
      <div className="flex mt-2">
        <button
          className="justify-start t-4 ml-4 p-2 bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
          onClick={() => {
            setEditable(!editable);
          }}
        >
          Edit Mode: {editable ? "ON" : "OFF"}
        </button>
      </div>

      <div className="bg-white m-3 shadow-md border-2 w-[600px] p-3">
        <div className=" grid grid-cols-3 my-1">
          <label className="col-span-1 flex">ID:</label>
          <label className="col-span-2 flex">{selectedId}</label>
        </div>
        <div className=" grid grid-cols-3">
          <label className="col-span-1 flex">Service Name:</label>
          <input
            value={serviceName}
            className="col-span-2 border-2"
            disabled={!editable}
            onChange={(e) => setServiceName(e.target.value)}
          />
        </div>

        <div className=" grid grid-cols-3 my-1">
          <label className="col-span-1 flex">Service Type:</label>
          <select
            disabled={!editable}
            value={selectedServiceType}
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
            disabled={!editable}
            value={servicePrice}
            className="col-span-1 border-2"
            type={"text"}
            onChange={(e) => setServicePrice(e.target.value)}
          />
        </div>
        <div className=" grid grid-cols-3 my-1">
          <label className="col-span-1 flex">Description:</label>
          <textarea
            disabled={!editable}
            value={serviceDescription}
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
          {editable ? (
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
              Update
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
