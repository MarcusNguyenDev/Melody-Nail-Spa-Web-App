import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../api.json";

export default function ServiceTypeView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedId] = useState(searchParams.get("id"));

  const [ServiceTypeName, setServiceTypeName] = useState("");
  const [ServiceTypeDescription, setServiceTypeDescription] = useState("");
  const [ServiceTypeImage, setServiceTypeImage] = useState();

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    fetch(api.api + `/servicetypes/ ${selectedId}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceTypeName(data.ServiceTypeName);
        setServiceTypeDescription(data.ServiceTypeDescription);
        if (
          data.ServiceTypeImage === "" ||
          data.ServiceTypeImage === null ||
          data.ServiceTypeImage === undefined
        ) {
          setServiceTypeImage(undefined);
        } else {
          setServiceTypeImage(api.api + "/images/" + data.ServiceTypeImage);
        }
      })
      .catch((err) => console.log(err));
  }, [selectedId]);

  return (
    <div className="m-3 w-[600px] rounded">
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
        <div className="grid grid-cols-5">
          <div className="ml-4 justify-start col-span-1">
            <label className="flex justify-end">ID</label>
            <hr className="m-2 mt-7" />
            <label className="flex justify-end">Name:</label>
            <hr className="m-2 mt-7" />
            <label className="flex justify-end">Description:</label>
            <hr className="m-2 mt-[200px]" />
            <label className="flex justify-end">Image:</label>
          </div>
          <div className="justify-start col-span-4">
            <div className="flex">{":  " + selectedId}</div>

            <hr className="m-2 mt-7" />

            <input
              type="text"
              readOnly={!editable}
              value={ServiceTypeName}
              className="ml-2 p-2 w-full flex border-black border-[1px] rounded-md"
              onChange={(e) => {
                setServiceTypeName(e.target.value);
              }}
            />
            <hr className="m-2" />
            <div>
              <textarea
                readOnly={!editable}
                className="ml-2 p-1 resize-none flex w-full h-[200px] border-black border-[1px] rounded-md"
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
              accept={"image/*"}
              multiple={false}
              className="ml-2 p-2 w-full flex border-black border-[1px] rounded-md"
              onChange={(e) => {
                setServiceTypeImage(e.target.files[0]);
              }}
            />
            {ServiceTypeImage === undefined ? (
              "No img selected"
            ) : (
              <img
                src={
                  typeof ServiceTypeImage === "string"
                    ? ServiceTypeImage
                    : URL.createObjectURL(ServiceTypeImage)
                }
              />
            )}
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
          {editable ? (
            <button
              className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
              onClick={() => {
                const formData = new FormData();
                formData.append("image", ServiceTypeImage);
                formData.append("ServiceTypeName", ServiceTypeName);
                formData.append(
                  "ServiceTypeDescription",
                  ServiceTypeDescription
                );

                const message = {
                  method: "PUT",
                  headers: {
                    authorization: "Bearer " + sessionStorage.getItem("jwt"),
                  },
                  body: formData,
                };
                fetch(api.api + `/servicetypes/put/${selectedId}`, message)
                  .then((res) => res.json())
                  .then((res) => window.alert(res.message));
                navigate("../servicetype");
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
