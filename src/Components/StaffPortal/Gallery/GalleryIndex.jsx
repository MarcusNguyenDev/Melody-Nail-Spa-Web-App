import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../api.json";
import GalleryIndexCard from "./GalleryIndexCard";

export default function GalleryIndex() {
  const navigate = useNavigate();
  const [GalleryList, setGalleryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(api.api + "/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryList(data))
      .then(() => setLoading(false));
  }, [loading]);
  return (
    <div className="m-2">
      <div>
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
      </div>
      <div className="">
        <div className="m-2 flex flex-wrap align-middle">
          {GalleryList.map((e) => (
            <GalleryIndexCard
              key={e.Id}
              data={e}
              setLoading={() => setLoading(true)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
