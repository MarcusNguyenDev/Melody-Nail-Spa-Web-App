import React from "react";
import { Link } from "react-router-dom";
import dummyimg from "../../images/img1.jpg";
import api from "../../api.json"
import { data } from "autoprefixer";

export default function ServiceTab(props) {
  return (
    <div className="flex justify-center mb-4">
      <div className=" w-[350px] flex-col h-[600px] bg-white shadow-2xl">
        <img src={api.api+"/images/"+props.data.ServiceTypeImage} alt="" className="w-full h-[200px]" />
        <div className="m-4 h-[320px]">
          <div className="flex font-Bilbo text-[40px] font-extrabold text-pink-700">
            {props.data.ServiceTypeName}
          </div>
          <div className="font-serif text-xl text-justify">
            {props.data.ServiceTypeDescription}
          </div>
        </div>
        <Link
          to=""
          className="text-white text-lg p-2 px-5 bg-pink-700 rounded-full hover:bg-pink-300"
        >
          See detail
        </Link>
      </div>
    </div>
  );
}
