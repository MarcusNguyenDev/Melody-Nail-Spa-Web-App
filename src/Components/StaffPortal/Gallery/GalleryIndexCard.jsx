import React from "react";
import api from "../../../api.json";

export default function GalleryIndexCard(props) {
  return (
    <div className="w-[210px] border-2 m-2">
      <div className="flex justify-center">
        <div className="w-[200px] h-[300px]">
          <img
            className="object-cover w-full h-full"
            src={api.api + `/images/${props.data.ImageName}`}
            alt=""
          />
        </div>
      </div>
      <div className="">
        <button
          className="p-2 text-red-600 underline"
          onClick={() => {
            const message = {
              method: "PUT",
              header: {
                accept: "application/json",
                "content-type": "application/json",
                authorization: "Bearer " + sessionStorage.getItem("jwt"),
              },
            };
            fetch(api.api + `/gallery/delete/${props.data.Id}`, message)
              .then((res) => res.json())
              .then((data) => {
                alert(data.message);
                if (!data.error) {
                  props.setLoading();
                }
              });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
