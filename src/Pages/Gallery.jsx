import React from "react";
import { useState, useEffect } from "react";
import api from "../api.json";
import Pagination from "react-paginate";
import GalleryCard from "../Components/Gallery/GalleryCard";

export default function Gallery() {
  const [galleryList, setGalleryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(6);
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
        {galleryList
          .slice(currentPage * perPage, currentPage * perPage + perPage)
          .map((e) => (
            <GalleryCard key={e.Id} data={e} />
          ))}
      </div>
      <div className="flex justify-center w-full">
        <Pagination
          className="flex justify-center mt-6"
          pageCount={galleryList.length / perPage}
          breakClassName="my-2 mx-1 sm:mx-2"
          breakLabel="..."
          nextClassName="font-bold text-pink-700 my-2 ml-1 sm:mx-2 border-pink-700"
          previousClassName="font-bold text-pink-700 my-2 mr-1 sm:mx-2"
          pageClassName="my-2 mx-1 sm:mx-2"
          pageRangeDisplayed={2}
          activeClassName="my-2 mx-2 text-pink-700 font-bold"
          nextLabel={">>"}
          previousLabel={"<<"}
          onPageChange={(data) => {
            let selected = data.selected;
            setCurrentPage(selected);
            window.scrollTo(0, 0);
          }}
          forcePage={currentPage}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
