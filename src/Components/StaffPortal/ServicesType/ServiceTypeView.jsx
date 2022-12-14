import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../api.json";

export default function ServiceTypeView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [serviceType, setServiceType] = useState([]);
  const [selectedId] = useState(searchParams.get("id"));

  const [ServiceTypeName, setServiceTypeName] = useState("");
  const [ServiceTypeDescription, setServiceTypeDescription] = useState("");
  const [ServiceTypeImage, setServiceTypeImage] = useState();

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    fetch(api.api + "/servicetypes" + `/${selectedId}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceType(data);
        setServiceTypeName(data.ServiceTypeName);
        setServiceTypeDescription(data.ServiceTypeDescription);
        setServiceTypeImage(data.ServiceTypeImage);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="m-3 rounded">
      <div className="flex">
        <button
          className="justify-start t-4 ml-4 p-2 bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
          onClick={() => {
            setEditable(!editable);
          }}
        >
          Edit Mode: {editable ? "ON" : "OFF"}
        </button>
      </div>

      <div className="m-3 bg-white shadow-xl rounded-xl p-4">
        <div className="flex justify-start">
          <div className="ml-4 justify-start">
            <label className="flex justify-end">Id:</label>
            <hr className="m-2 mt-7" />
            <label className="flex justify-end">Name:</label>
            <hr className="m-2 mt-7" />
            <label className="flex justify-end">Description:</label>
            <hr className="m-2 mt-[200px]" />
            <label className="flex justify-end">Image:</label>
          </div>
          <div className="justify-start">
            <input
              ee={true}
              type="text"
              value={serviceType.Id}
              className="ml-2 p-2 w-[300px] border-black border-[1px] rounded-md"
            />

            <hr className="m-2" />

            <input
              type="text"
              readOnly={!editable}
              value={ServiceTypeName}
              className="ml-2 p-2 w-[300px] border-black border-[1px] rounded-md"
              onChange={(e) => {
                setServiceTypeName(e.target.value);
              }}
            />
            <hr className="m-2" />
            <div>
              <textarea
                readOnly={!editable}
                className="ml-2 p-1 resize-none w-[300px] h-[200px] border-black border-[1px] rounded-md"
                value={ServiceTypeDescription}
                onChange={(e) => {
                  setServiceTypeDescription(e.target.value);
                }}
              />
            </div>
            <hr className="m-6 mb-2" />
            <input
              type="file"
              readOnly={!editable}
              className="ml-2 p-2 w-[300px] border-black border-[1px] rounded-md"
              onChange={(e) => {
                setServiceTypeImage(e.target.files);
              }}
            />
          </div>
        </div>

        <div className="flex">
          <button
            className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
            onClick={() => {
              navigate("../servicetype");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
