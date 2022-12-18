import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from "../api.json";

import TimeSelection from "../Components/Booking/TimeSelection";

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
  { timeId: 12, time: "3:00pm - 3:30pm"},
  { timeId: 13, time: "3:30pm - 4:00pm"},
  { timeId: 14, time: "4:00pm - 4:30pm"},
  { timeId: 15, time: "4:30pm - 5:00pm"},
  { timeId: 16, time: "5:00pm - 5:30pm"},
  { timeId: 17, time: "5:30pm - 6:00pm"},
  { timeId: 18, time: "6:00pm - 6:30pm"},
  { timeId: 19, time: "6:30pm - 7:00pm"},
];
//Constant unchange for reference only
const today = new Date();

export default function Booking() {
  const navigate = useNavigate();

  const [SelectedDate, setSelectedDate] = useState(new Date());
  const [DateError, setDateError] = useState(false);
  const [SelectedServices, setSelectedService] = useState([]);
  const [AvailableTime, setAvailableTime] = useState([]);
  const [ServiceTypes, setServiceType] = useState([]);
  const [BookingError, setBookingError] = useState(false);
  const [RaiseError, setRaiseError] = useState("");
  const [ServicesList, setServicesList] = useState([]);
  const [Sumary, setSumary] = useState(false);

  const emailRef = useRef();

  const SelectionCallback = function (props) {
    const arr = [...SelectedServices, props];
    setSelectedService(arr);
  };
  const UnSelectionCallback = function (props) {
    const prevArr = SelectedServices;
    const arr = prevArr.filter(function (item) {
      return item.TimeId !== props.TimeId;
    });
    setSelectedService(arr);
  };
  useEffect(() => {
    fetch(api.api + "/servicetypes")
      .then((res) => res.json())
      .then((res) => {
        setServiceType(res);
      });
    fetch(api.api + "/services")
      .then((res) => res.json())
      .then((data) => {
        setServicesList(data);
      });
    fetch(
      api.api +
        `/booking/available?date=${
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
        }`
    )
      .then((res) => res.json())
      .then((res) => setAvailableTime(res));
  }, []);

  return (
    <div className="flex bg-pink-300 justify-center">
      <div className="flex-col shadow-2xl justify-center bg-white sm:m-20 sm:mt-10 sm:mb-10 sm:rounded-[40px]">
        <div className={Sumary ? "hidden" : ""}>
          <label className="flex justify-center text-[24px] font-bold text-pink-800 m-4">
            Booking Form
          </label>

          <label className="flex justify-center text-[20px] font-bold text-pink-800 m-4 mb-0">
            Email
          </label>

          <div className="grid grid-cols-2">
            <div className="mt-1">
              <label className="p-1 text-pink-800">Email:</label>
            </div>
            <div className="mr-2">
              <input
                ref={emailRef}
                className="w-[100%] border p-1 border-pink-800 rounded-lg"
              ></input>
            </div>
          </div>
          <label className="flex justify-center text-[16px] text-pink-800 mx-8">
            We do not store your email, we just use it once per booking for
            sending confirmation email and cancelation link
          </label>

          <hr className="m-6 border-pink-600 mx-20" />

          <label className="flex justify-center text-[20px] font-bold text-pink-800 m-4 mb-0 mt-4">
            Date
          </label>
          <div className="grid grid-cols-2">
            <div className="mt-2">
              <label className="p-1 text-pink-800">Pick a date:</label>
            </div>
            <div className="mr-2 mt-1 mb-8">
              <ReactDatePicker
                className="w-full border p-1 border-pink-800 rounded-lg"
                selected={SelectedDate}
                onChange={(date) => {
                  const currentDate = new Date();
                  currentDate.setHours(0);
                  currentDate.setMinutes(0);
                  currentDate.setSeconds(1);

                  setSelectedDate(date);
                  if (date < currentDate) {
                    setDateError(true);
                    setAvailableTime([]);
                  } else {
                    setDateError(false);
                    fetch(
                      api.api +
                        `/booking/available?date=${
                          date.getFullYear() +
                          "-" +
                          (date.getMonth() + 1) +
                          "-" +
                          date.getDate()
                        }`
                    )
                      .then((res) => res.json())
                      .then((res) => setAvailableTime(res));
                  }
                }}
                dateFormat="dd/M/yyyy"
              />
            </div>
          </div>

          {DateError ? (
            <div className="m-[10px]">
              <label className="text-red-600">
                Invalid date: selected date must be in the future
              </label>
            </div>
          ) : (
            <></>
          )}

          <hr className="m-6 border-pink-600 mx-20" />

          <label className="flex justify-center text-[20px] font-bold text-pink-800 m-4 mb-0">
            Time
          </label>

          <label className="flex justify-center text-[16px] text-pink-800 mx-8">
            If the time you want is unavailable, please select other date. Thank
            you!
          </label>
          {time.map((time) => (
            <TimeSelection
              key={time.timeId}
              time={time.time}
              id={time.timeId}
              available={AvailableTime.includes(time.timeId)}
              selectCallback={SelectionCallback}
              unSelectCallback={UnSelectionCallback}
              ServiceTypes={ServiceTypes}
              ServicesList={ServicesList}
            />
          ))}

          <div className="p-4 text-red-600 font-bold">
            {BookingError ? RaiseError : null}
          </div>
          <div className="m-4">
            <button
              className="m-4 p-3 w-[120px] rounded-xl font-bold bg-pink-300 text-pink-800 hover:bg-pink-400"
              onClick={() => {
                setSumary(false);
              }}
            >
              Back
            </button>
            <button
              className="m-4 p-3 w-[120px] rounded-xl font-bold bg-pink-300 text-pink-800 hover:bg-pink-400"
              onClick={() => {
                setSumary(true);
                window.scroll(0,0);
              }}
            >
              Next
            </button>
          </div>
        </div>

        <div className={Sumary ? "" : "hidden"}>
          <label className="flex justify-center text-[24px] font-bold text-pink-800 m-4">
            Sumary
          </label>
          <div className="grid grid-cols-3 ">
            <div className="text-lg font-semibold">Service Name</div>
            <div className="text-lg font-semibold">Time</div>
            <div className="text-lg font-semibold">Price</div>
          </div>
          <hr className="my-1 border-black mx-5" />
          {SelectedServices.map((services) => {
            return (
              <div key={services.ServiceName} className="grid grid-cols-3">
                <div>{services.service.ServiceName}</div>
                <div>{services.time}</div>
                <div>${services.service.ServicePrice}</div>
              </div>
            );
          })}
          <hr className="my-1 border-black mx-5" />
          <div className="grid grid-cols-3 ">
            <div className="text-lg font-semibold"></div>
            <div className="flex justify-end text-lg font-semibold">Total:</div>
            <div className="text-lg font-semibold">
              {"$" +
                SelectedServices.reduce(
                  (accumulator, obj) =>
                    accumulator + parseInt(obj.service.ServicePrice),
                  0
                )}
            </div>
          </div>
          <label className="flex justify-center text-[16px] text-pink-800 mx-8">
            All payment will be made inside our shop. Thank you for using our
            services!
          </label>
          <div>
            <button
              className="m-4 p-3 w-[120px] rounded-xl font-bold bg-pink-300 text-pink-800 hover:bg-pink-400"
              onClick={() => {
                setSumary(false);
              }}
            >
              Back
            </button>
            <button
              className="mt-20 m-4 p-3 w-[120px] rounded-xl font-bold bg-pink-300 text-pink-800 hover:bg-pink-400"
              onClick={() => {
                const date =
                  SelectedDate.getFullYear() +
                  "-" +
                  (SelectedDate.getMonth() + 1) +
                  "-" +
                  SelectedDate.getDate();

                const data = {
                  email: emailRef.current.value,
                  bookedServices: SelectedServices,
                  date: date,
                };
                postBooking(data).then((res) => {
                  if (res.error) {
                    setBookingError(res.error);
                    setRaiseError(res.message);
                  } else {
                    navigate("../");
                  }
                });
              }}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function postBooking(prop) {
  const message = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(prop),
  };
  const response = fetch(api.api + `/booking/book`, message).then((res) =>
    res.json()
  );
  return response;
}
