import React from "react";
import { useEffect, useState } from "react";
import api from "../../../api.json";
import ServicesIndexRow from "./ServicesIndexRow";
import { useNavigate } from "react-router-dom";

export default function ServicesIndex() {
  const [services, setServices] = useState([]);
  const [servicetypes, setServiceTypes] = useState([]);
  const [queryByType, setQueryByType] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadingCallBack = () => setLoading(true);

  useEffect(() => {
    Promise.all([
      fetch(api.api + `/services`).then((res) => res.json()),
      fetch(api.api + `/servicetypes`).then((res) => res.json()),
    ])
      .then(([services, servicestypes]) => {
        setServiceTypes(servicestypes);
        return services.map((service) => ({
          Id: service.Id,
          ServiceTypeId: service.ServiceTypeId,
          ServiceType: servicestypes.filter(
            (e) => e.Id === service.ServiceTypeId
          )[0].ServiceTypeName,
          ServiceName: service.ServiceName,
          ServicePrice: service.ServicePrice,
          ServiceDescription: service.ServiceDescription,
        }));
      })
      .then((data) => setServices(data))
      .then(() => setLoading(false));
  }, [loading]);

  return (
    <div>
      <div className="flex mt-2">
        <button
          className="justify-start t-4 ml-4 p-2 bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
          onClick={() => {
            navigate("./create");
          }}
        >
          Create New
        </button>
      </div>

      <div className="m-4 bg-white rounded-xl">
        <div className="p-4">
          <div className="flex my-2">
            <label>Search by Type:</label>
            <div>
              <select
                className="w-[200px] p-1 ml-2"
                onChange={(e) => setQueryByType(e.target.value)}
              >
                <option value="">{"No selection"}</option>
                {servicetypes.map((e) => (
                  <option key={e.Id} value={e.Id}>
                    {e.ServiceTypeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-9 bg-blue-400">
            <div className="font-bold col-span-1 border">ID</div>
            <div className="font-bold col-span-2 border">Name</div>
            <div className="font-bold col-span-2 border">Type</div>
            <div className="font-bold col-span-2 border">Price</div>
            <div className="font-bold col-span-2 border"></div>
          </div>
          {queryByType === ""
            ? services.map((row) => (
                <ServicesIndexRow
                  key={row.Id}
                  service={row}
                  loadingCallBack={loadingCallBack}
                />
              ))
            : services
                .filter((e) => e.ServiceTypeId === parseInt(queryByType))
                .map((row) => (
                  <ServicesIndexRow
                    key={row.Id}
                    service={row}
                    loadingCallBack={loadingCallBack}
                  />
                ))}
        </div>
      </div>
    </div>
  );
}
