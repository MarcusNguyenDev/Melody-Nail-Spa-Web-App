import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../api.json";

import ServiceTypeIndexRow from "./ServiceTypeIndexRow";

export default function ServiceTypeView() {
  const navigate = useNavigate();
  const [serviceTypeList, setServiceTypeList] = useState([]);

  useEffect(() => {
    fetch(api.api + "/servicetypes")
      .then((res) => res.json())
      .then((data) => setServiceTypeList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="m-3 rounded">
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

      <div className="m-3 bg-white shadow-xl rounded-xl p-3"></div>
    </div>
  );
}
