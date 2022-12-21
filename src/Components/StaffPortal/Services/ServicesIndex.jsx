import React from "react";
import { useEffect, useState } from "react";
import api from "../../../api.json";

export default function ServicesIndex() {
  const [services, setServices] = useState([]);
  const [servicetypes, setServiceTypes] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(api.api + `/services`).then((res) => res.json()),
      fetch(api.api + `/servicetypes`).then((res) => res.json()),
    ])
      .then(([services, servicestypes]) => {
        setServiceTypes(servicestypes);
        return services.map((service) => ({
          Id: service.Id,
          ServiceType: servicestypes.filter(
            (e) => e.Id === service.ServiceTypeId
          )[0].ServiceTypeName,
          ServiceName: service.ServiceName,
          ServicePrice: service.ServicePrice,
          ServiceDescription: service.ServiceDescription,
        }));
      })
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>test</div>
    </div>
  );
}
