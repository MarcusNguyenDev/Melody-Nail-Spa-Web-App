import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../../api.json";

export default function ServiceTypeCreate() {
  const navigate = useNavigate();
  const [ServiceTypeName, setServiceTypeName] = useState("");
  const [ServiceTypeDescription, setServiceTypeDescription] = useState("");
  const [ServiceTypeImage, setServiceTypeImage] = useState();

  return (
    <div className="m-3 w-[600px] rounded">
      <div className="m-3 bg-white shadow-xl rounded-xl p-4">
        <div className="grid grid-cols-5">
          <div className="ml-4 justify-start col-span-1">
            <label className="flex justify-end">Name:</label>
            <hr className="m-2 mt-7" />
            <label className="flex justify-end">Description:</label>
            <hr className="m-2 mt-[200px]" />
            <label className="flex justify-end">Image:</label>
          </div>
          <form
            className="justify-start col-span-4"
            encType="multipart/form-data"
          >
            <input
              type="text"
              value={ServiceTypeName}
              className="ml-2 p-2 w-full flex border-black border-[1px] rounded-md"
              onChange={(e) => {
                setServiceTypeName(e.target.value);
              }}
            />
            <hr className="m-2" />
            <div>
              <textarea
                className="ml-2 p-1 resize-none flex w-full h-[200px] border-black border-[1px] rounded-md"
                onChange={(e) => {
                  setServiceTypeDescription(e.target.value);
                }}
              />
            </div>
            <hr className="m-6 mb-2" />
            <input
              formEncType="multipart/form-data"
              accept="image/*"
              type="file"
              multiple={false}
              className="ml-2 p-2 w-full flex border-black border-[1px] rounded-md"
              onChange={(e) => {
                setServiceTypeImage(e.target.files[0]);
              }}
            />
            {ServiceTypeImage === undefined ? (
              "No img selected"
            ) : (
              <img src={URL.createObjectURL(ServiceTypeImage)} />
            )}
          </form>
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

          <button
            className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
            onClick={() => {
              const formData = new FormData();
              formData.append("image", ServiceTypeImage);
              formData.append("ServiceTypeName", ServiceTypeName);
              formData.append("ServiceTypeDescription", ServiceTypeDescription);

              const message = {
                method: "POST",
                headers: {
                  authorization: "Bearer " + sessionStorage.getItem("jwt"),
                },
                body: formData,
              };
              fetch(api.api + "/servicetypes/post", message)
                .then((res) => res.json())
                .then((res) => window.alert(res.message));
                navigate("../servicetype");
            }}
            
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
