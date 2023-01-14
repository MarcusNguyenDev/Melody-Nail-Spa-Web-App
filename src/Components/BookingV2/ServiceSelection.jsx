import React from "react";
import ServiceSelectionElement from "./ServiceSelectionElement";

export default function ServiceSelection(props) {
  return (
    <div className="mb-4">
      <h2 className="flex font-bold text-pink-700 underline text-xl mb-2">
        Service selection
      </h2>
      {props.selectedService.map((e, index) => (
        <ServiceSelectionElement
          id={e.id}
          Err={props.Err}
          key={index}
          index={index}
          serviceTypes={props.serviceTypes}
          availableTime={props.availableTime}
          services={props.services}
          selectedService={e}
          selectedServiceList={props.selectedService}
          setService={(id, serviceId) => props.setService(id, serviceId)}
          setTime={(id, timeId) => props.setTime(id, timeId)}
          removeService={(id) => props.removeService(id)}
        />
      ))}
      <button
        className="flex underline text-emerald-700"
        onClick={() => props.addNewService()}
      >
        Add another service
      </button>
    </div>
  );
}
