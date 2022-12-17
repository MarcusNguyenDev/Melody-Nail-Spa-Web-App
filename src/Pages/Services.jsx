import { React, useState, useEffect } from "react";
import api from "../api.json";
import ServiceTab from "../Components/Services/ServiceTab";

export default function Services() {
  const [serviceTypes, setServiceType] = useState([]);

  useEffect(() => {
    fetch(api.api + "/servicetypes")
      .then((res) => res.json())
      .then((data) => setServiceType(data));
  }, []);

  return (
    <div className="p-6 bg-pink-100">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {serviceTypes.map((row) => (
          <ServiceTab data={row} />
        ))}
      </div>
    </div>
  );
}
