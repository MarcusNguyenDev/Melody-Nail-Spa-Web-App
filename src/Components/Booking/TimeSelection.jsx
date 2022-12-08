import React from "react";
import { useState, useEffect } from "react";
import BookingServices from "./BookingServices";

export default function TimeSelection(props) {
  const [available, setAvailable] = useState(false);
  const [selected, setSelected] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [ServiceTypes, setServiceType] = useState([]);
  const [Selecting, setSelecting] = useState(false);

  useEffect(() => {
    setAvailable(props.available);
    setServiceType(props.ServiceTypes);
  }, [props.available, props.ServiceTypes]);

  const ServiceSelectionCallback = (data) => {
    setSelected(!selected);
    setSelectedService(data);
    setSelecting(!Selecting);

    props.selectCallback({
      time: props.time,
      TimeId: props.id,
      service: data,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 border pt-1 pb-1">
        <label className="text-lg]">{props.time}</label>
        {available ? (
          <div className="flex justify-center">
            {selected ? (
              <div>
                <div className="text-lg font-semibold text-black">
                  {"Selected: " + selectedService.ServiceName}
                </div>
                <div>
                  <button
                    className=" text-red-700 font-bold hover:bg-red-700 hover:text-white p-2 rounded-xl"
                    onClick={() => {
                      setSelected(!selected);
                      props.unSelectCallback({
                        time: props.time,
                        TimeId: props.id,
                        service: selectedService,
                      });
                    }}
                  >
                    Remove Selection
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="bg-pink-300 text-pink-800 font-bold hover:bg-pink-500 p-2 rounded-xl"
                onClick={() => {
                  setSelecting(!Selecting);
                }}
              >
                Available
              </button>
            )}
          </div>
        ) : (
          <div className="flex justify-center">
            <button className="bg-gray-300 p-2 rounded-xl" disabled>
              Unavailable
            </button>
          </div>
        )}
      </div>
      {Selecting ? (
        <div>
          <div className="relative pl-7 pr-7 flex-auto">
            {ServiceTypes.map((data) => {
              return (
                <div key={data.Id}>
                  <BookingServices
                    Id={data.Id}
                    ServiceType={data.ServiceTypeName}
                    SelectionCallback={ServiceSelectionCallback}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
