import React from "react";
import { useState, useEffect } from "react";
import api from "../api.json";
import GalleryCard from "../Components/Gallery/GalleryCard";

export default function Gallery() {
  const [galleryList, setGalleryList] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(api.api + "/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryList(data));
  }, []);
  return (
    <div className="lg:mx-72">
      <div className="flex m-4 text-3xl font-bold text-pink-700">
        <div className="border-b-2 border-pink-700">Gallery</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 m-2 lg:grid-cols-4">
        {galleryList.map((e) => (
          <GalleryCard key={e.Id} data={e} />
        ))}
      </div>
    </div>
  );
}
