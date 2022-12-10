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
      <div
        className={
          Selecting
            ? "grid grid-cols-2 border-2 border-pink-700 bg-pink-100 rounded-b-lg pt-1 pb-1"
            : selected
            ? "grid grid-cols-2 border-2 border-emerald-600 pt-1 pb-1"
            : "grid grid-cols-2 border pt-1 pb-1"
        }
      >
        <label className="text-xl font-semibold">{props.time}</label>
        {available ? (
          <div className="flex justify-center">
            {selected ? (
              <div>
                <div className="text-lg font-semibold text-emerald-700">
                  {"Selected: " + selectedService.ServiceName}
                </div>
                <div>
                  <button
                    className=" text-red-700 font-bold w-[30px] h-[30px] border-2 text-[15px] border-red-700 hover:bg-red-700 hover:text-white "
                    onClick={() => {
                      setSelected(!selected);
                      props.unSelectCallback({
                        time: props.time,
                        TimeId: props.id,
                        service: selectedService,
                      });
                    }}
                  >
                    X
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
        <div className="mb-4 mx-4 border-b-2 border-x-2 shadow-lg px-2 rounded-b-xl border-pink-700 pb-2">
          {ServiceTypes.map((data) => {
            return (
              <div key={data.Id}>
                <BookingServices
                  Id={data.Id}
                  ServiceType={data.ServiceTypeName}
                  SelectionCallback={ServiceSelectionCallback}
                  ServicesList={props.ServicesList.filter((e) => {
                    return e.ServiceTypeId === data.Id;
                  })}
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
