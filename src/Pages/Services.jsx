import { React, useState, useEffect } from "react";
import api from "../api.json";
import ServiceTab from "../Components/Services/ServiceTab";

export default function Services() {
  const [serviceTypes, setServiceType] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });

    Promise.all([
      fetch(api.api + "/servicetypes").then((res) => res.json()),
      fetch(api.api + "/services").then((res) => res.json()),
    ]).then(([servicetypes, services]) => {
      setServiceType(servicetypes);
      setServices(services);
    });
  }, []);

  return (
    <div className="p-6 bg-white">
      <div className="lg:mx-64">
        <div className="flex text-[24px] text-pink-700 mb-[12px] font-bold">
          OUR SERVICES
        </div>

        <hr className="border w-[180px] mb-[12px] border-pink-700" />

        <div className="flex-col">
          {serviceTypes.map((row) => (
            <ServiceTab
              key={row.Id}
              serviceType={row}
              services={services.filter((e) => e.ServiceTypeId === row.Id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
