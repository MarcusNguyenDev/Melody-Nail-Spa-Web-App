import React from "react";
import api from "../../api.json";

export default function GalleryCard(props) {
  return (
    <div className="m-2">
      <div className="flex justify-center">
        <div className="w-[300px] h-[400px] hover:scale-[1.25] ease-in-out duration-300">
          <img
            className="object-cover w-full h-full"
            src={api.api + `/images/${props.data.ImageName}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
