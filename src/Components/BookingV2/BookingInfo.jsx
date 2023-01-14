import React from "react";
import { useState } from "react";

export default function BookingInfo(props) {
  const [phoneError, setPhoneError] = useState(false);

  return (
    <div className="mb-4">
      <h2 className="flex font-bold text-pink-700 underline text-xl mb-2">
        Information
      </h2>
      <div className="grid grid-cols-3">
        <label className="col-span-1 text-lg flex justify-end">Name: </label>
        <input
          value={props.customerName}
          className={
            props.Err && props.customerName === ""
              ? "col-span-2 text-lg mx-2 border-2 border-red-600"
              : "col-span-2 text-lg mx-2 border-2"
          }
          placeholder="Your Name"
          type={"text"}
          onChange={(e) => props.setNameCallback(e.target.value)}
        />
      </div>

      <div>
        <div className="grid grid-cols-3 mt-3">
          <label className="col-span-1 text-lg flex justify-end">Phone:</label>
          <input
            value={props.customerPhoneNumber}
            className={
              props.Err &&
              (props.customerPhoneNumber === "" ||
                isNaN(props.customerPhoneNumber))
                ? "col-span-2 text-lg mx-2 border-2 border-red-600"
                : "col-span-2 text-lg mx-2 border-2"
            }
            type="tel"
            placeholder="Your phone number"
            inputMode="numeric"
            maxLength={10}
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                props.setPhoneNumberCallBack(e.target.value);
                setPhoneError(false);
              } else {
                props.setPhoneNumberCallBack(e.target.value);
                setPhoneError(true);
              }
            }}
          />
        </div>
        {phoneError ? (
          <p className="text-red-600 font-bold">Invalid phone number</p>
        ) : null}
        <p className="text-pink-700">
          * Please type the phone number only without spacing. Example:
          0401123123
        </p>
      </div>
    </div>
  );
}
