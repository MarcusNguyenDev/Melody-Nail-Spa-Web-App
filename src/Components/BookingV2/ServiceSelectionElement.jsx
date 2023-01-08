import React from "react";
import { useState } from "react";

const time = [
  { timeId: 0, time: "9:00am - 9:30am" },
  { timeId: 1, time: "9:30am - 10:00am" },
  { timeId: 2, time: "10:00am - 10:30am" },
  { timeId: 3, time: "10:30am - 11:00am" },
  { timeId: 4, time: "11:00am - 11:30am" },
  { timeId: 5, time: "11:30am - 12:00pm" },
  { timeId: 6, time: "12:00pm - 12:30pm" },
  { timeId: 7, time: "12:30pm - 1:00pm" },
  { timeId: 8, time: "1:00pm - 1:30pm" },
  { timeId: 9, time: "1:30pm - 2:00pm" },
  { timeId: 10, time: "2:00pm - 2:30pm" },
  { timeId: 11, time: "2:30pm - 3:00pm" },
  { timeId: 12, time: "3:00pm - 3:30pm" },
  { timeId: 13, time: "3:30pm - 4:00pm" },
  { timeId: 14, time: "4:00pm - 4:30pm" },
  { timeId: 15, time: "4:30pm - 5:00pm" },
  { timeId: 16, time: "5:00pm - 5:30pm" },
  { timeId: 17, time: "5:30pm - 6:00pm" },
  { timeId: 18, time: "6:00pm - 6:30pm" },
  { timeId: 19, time: "6:30pm - 7:00pm" },
];

export default function ServiceSelectionElement(props) {
  const [selectingTime, setSelectingTime] = useState(false);
  return (
    <div
      className={
        props.Err &&
        (props.selectedService.ServiceId === "" ||
          props.selectedService.TimeId === "")
          ? "w-full border-2 shadow-xl mb-3 relative border-red-600"
          : "w-full border-2 shadow-xl mb-3 relative"
      }
    >
      <button
        className="absolute right-3 top-0 font-mono font-bold text-red-600 text-3xl"
        onClick={() => props.removeService(props.id)}
      >
        X
      </button>
      <div className="flex mx-2 font-bold text-pink-700 mb-3">
        Service No.{props.index + 1}
      </div>
      <div className="grid grid-cols-3 mb-2">
        <div className="flex  m-2 text-lg">Select a service:</div>
        <div className="col-span-2 pr-2">
          <select
            className="p-2 w-full mt-2 flex flex-wrap"
            value={props.selectedService.ServiceId}
            onChange={(e) => props.setService(props.id, e.target.value)}
          >
            <option value={""}>Please select a service</option>
            {props.serviceTypes.map((e) => (
              <optgroup key={e.Id} label={e.ServiceTypeName}>
                {props.services
                  .filter((service) => service.ServiceTypeId === e.Id)
                  .map((e) => (
                    <option key={e.Id} value={e.Id}>
                      {e.ServiceName}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-2">
        <div className="flex m-2 text-lg">Price:</div>
        <div className="flex m-2">
          {props.selectedService.ServiceId !== ""
            ? "$" +
              props.services.filter(
                (e) => e.Id === parseInt(props.selectedService.ServiceId)
              )[0].ServicePrice
            : null}
        </div>
      </div>

      <div className="grid grid-cols-3 mb-2">
        <div className="flex m-2 text-lg">Select a time:</div>
        <div className="col-span-2 sm:col-span-1">
          <button
            className="flex justify-center border p-2 sm:pt-2 text-lg"
            onClick={() => {
              setSelectingTime(!selectingTime);
            }}
          >
            {props.selectedService.TimeId === ""
              ? "Please select a time"
              : time.filter((e) => e.timeId === props.selectedService.TimeId)[0]
                  .time}
          </button>
        </div>
      </div>

      {selectingTime ? (
        <div>
          <p className="flex text-lg mx-2">Our available Time:</p>
          <div className="flex flex-wrap mx-2">
            {props.availableTime.map((available) => (
              <button
                key={available}
                className="border-2 mr-2 mb-1 p-1 hover:bg-gray-200"
                onClick={() => {
                  setSelectingTime(!selectingTime);
                  props.setTime(props.id, available);
                }}
              >
                {time.filter((e) => e.timeId === parseInt(available))[0].time}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
