import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

export default function DateSelection(props) {
  const [dateError, setDateError] = useState(false);

  return (
    <div className="mb-4">
      <h2 className="flex font-bold text-pink-700 underline text-xl mb-2">
        Date selection
      </h2>

      <div className="grid grid-cols-3">
        <label className="col-span-1 text-lg flex justify-end">
          Select a date:
        </label>
        <div className="col-span-2 mx-2">
          <ReactDatePicker
            className=" w-full text-lg  border-2"
            selected={props.selectedDate}
            onChange={(date) => {
              const currentDate = new Date();
              currentDate.setHours(0);
              currentDate.setMinutes(0);
              currentDate.setSeconds(1);
              if (date < currentDate) {
                setDateError(true);
                props.setSelectedDateCallBack(date);
                props.setAvailableTime([]);
              } else {
                setDateError(false);
                props.setSelectedDateCallBack(date);
              }
            }}
            dateFormat="dd/M/yyyy"
          />
        </div>
      </div>
      <p className="text-pink-700">
        * Upon selecting new date, time selection below will be reset
      </p>
      {dateError ? (
        <div className="m-[10px]">
          <label className="text-pink-700 font-bold">
            Invalid date: selected date must be in the future
          </label>
        </div>
      ) : null}
    </div>
  );
}
