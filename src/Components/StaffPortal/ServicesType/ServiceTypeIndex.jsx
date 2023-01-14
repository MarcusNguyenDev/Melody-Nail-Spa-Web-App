import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../api.json";

import ServiceTypeIndexRow from "./ServiceTypeIndexRow";

export default function ServiceTypeIndex() {
  const navigate = useNavigate();
  const [serviceTypeList, setServiceTypeList] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadingCallback = () => {
    setLoading(true);
  };
  useEffect(() => {
    fetch(api.api + "/servicetypes")
      .then((res) => res.json())
      .then((data) => setServiceTypeList(data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [loading]);

  return (
    <div className="m-2 rounded">
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

      <div className="m-3 bg-white shadow-xl border-2 p-3">
        <div className="grid grid-cols-7 bg-blue-400">
          <div className="border font-bold text-white">Id</div>
          <div className="border font-bold text-white col-span-4">
            Service Type
          </div>
          <div className="border font-bold col-span-2 text-white"></div>
        </div>

        {serviceTypeList.map((data) => (
          <ServiceTypeIndexRow
            key={data.Id}
            ServiceType={data}
            loadingCallBack={loadingCallback}
          />
        ))}
      </div>
    </div>
  );
}
