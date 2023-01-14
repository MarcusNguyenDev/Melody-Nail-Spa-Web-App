import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api.json";

export default function GalleryCreate() {
  const navigate = useNavigate();
  const [ServiceType, setServiceType] = useState([]);
  const [GalleryImage, setGalleryImage] = useState();
  const [selectedServiceType, setSelectedServiceType] = useState("");

  useEffect(() => {
    fetch(api.api + "/servicetypes")
      .then((res) => res.json())
      .then((data) => setServiceType(data));
  }, []);
  return (
    <div className="m-3 w-[600px] rounded">
      <div className="m-3 bg-white shadow-xl border-2 rounded-xl p-4">
        <div className="grid grid-cols-5 mb-5">
          <div className="ml-4 justify-start col-span-1">
            <label className="flex justify-end">Service type:</label>
          </div>
          <select
            value={selectedServiceType}
            className="col-span-4 border border-black rounded ml-2 p-2"
            onChange={(event) => setSelectedServiceType(event.target.value)}
          >
            <option value="">Please select a service type</option>
            {ServiceType.map((e) => (
              <option value={e.Id}>{e.ServiceTypeName}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-5">
          <div className="ml-4 justify-start col-span-1">
            <label className="flex justify-end">Image:</label>
          </div>
          <form
            className="justify-start col-span-4"
            encType="multipart/form-data"
          >
            <input
              formEncType="multipart/form-data"
              accept="image/*"
              type="file"
              multiple={false}
              className="ml-2 p-2 w-full flex border-black border-[1px] rounded-md"
              onChange={(e) => {
                setGalleryImage(e.target.files[0]);
              }}
            />
            {GalleryImage === undefined ? (
              "No img selected"
            ) : (
              <img
                className="mt-4"
                src={URL.createObjectURL(GalleryImage)}
                alt="img"
              />
            )}
          </form>
        </div>

        <div className="flex">
          <button
            className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
            onClick={() => {
              navigate("../gallery");
            }}
          >
            Back
          </button>

          <button
            className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
            onClick={() => {
              const formData = new FormData();
              formData.append("image", GalleryImage);
              formData.append("ServiceTypeId", selectedServiceType);

              const message = {
                method: "POST",
                headers: {
                  authorization: "Bearer " + sessionStorage.getItem("jwt"),
                },
                body: formData,
              };
              fetch(api.api + "/gallery/post", message)
                .then((res) => res.json())
                .then((res) => {
                  window.alert(res.message);
                  if (!res.error) {
                    navigate("../gallery");
                  }
                });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
