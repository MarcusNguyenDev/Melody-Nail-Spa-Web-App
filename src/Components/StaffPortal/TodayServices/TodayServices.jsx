import React from "react";
import { useEffect, useState } from "react";
import api from "../../../api.json";
import TimeFrame from "./TimeFrame";

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const date = dd + "/" + mm + "/" + yyyy;

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

export default function TodayBooking() {
  const [todayServices, setTodayServices] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const setFinishedCallBack = (id) => {
    const message = {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    };
    fetch(api.api + `/todaybooking/BookedServices/setDone/${id}`, message).then(
      () => setIsUpdating(true)
    );
  };

  const setUnFinishedCallBack = (id) => {
    const message = {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    };
    fetch(
      api.api + `/todaybooking/BookedServices/setUnDone/${id}`,
      message
    ).then(() => setIsUpdating(true));
  };

  useEffect(() => {
    const message = {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    };
    Promise.all([
      fetch(api.api + "/services").then((res) => res.json()),
      fetch(api.api + "/todaybooking/BookedServices", message).then((res) =>
        res.json()
      ),
      fetch(api.api + "/todaybooking/BookingList", message).then((res) =>
        res.json()
      ),
    ])
      .then(([servicesList, todayBooking, BookingList]) =>
        todayBooking.map((services) => ({
          Id: services.Id,
          BookedServiceId: services.Id,
          BookingId: services.BookingId,
          Time: services.Time,
          Customer: BookingList.find((e) => e.Id === services.BookingId)
            .Customer,
          ServiceName: servicesList.find((e) => e.Id === services.ServiceId)
            .ServiceName,
          Price: servicesList.find((e) => e.Id === services.ServiceId)
            .ServicePrice,
          Done: services.Done,
        }))
      )
      .then((data) => {
        setTodayServices(data);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  }, [isUpdating]);

  return (
    <div className="w-full">
      <div className="flex m-4">
        <div className="flex bg-emerald-600 p-3 mr-2 rounded-2xl">
          <div className="font-bold text-white">Date:</div>
          <div className="font-bold text-xl pl-1 text-white">{date}</div>
        </div>
        <div className="flex bg-emerald-600 p-3 mx-2 rounded-2xl">
          <div className="font-bold text-white">Total services:</div>
          <div className="font-bold text-xl pl-1 text-white">
            {todayServices.length}
          </div>
        </div>
        <div className="flex bg-emerald-600 p-3 mx-2 rounded-2xl">
          <div className="font-bold text-white">Potential revenue:</div>
          <div className="font-bold text-xl pl-1 text-white">
            {"$" +
              todayServices.reduce(
                (accumulator, obj) => accumulator + parseInt(obj.Price),
                0
              )}
          </div>
        </div>
        <div className="flex bg-emerald-600 p-3 mx-2 rounded-2xl">
          <div className="font-bold text-white">Real revenue:</div>
          <div className="font-bold text-xl pl-1 text-white">
            {"$" +
              todayServices
                .filter((e) => {
                  return e.Done === "YES";
                })
                .reduce(
                  (accumulator, obj) => accumulator + parseInt(obj.Price),
                  0
                )}
          </div>
        </div>
      </div>
      <div className=" bg-white m-4 rounded-lg">
        <div>
          {time.map((time) => {
            return (
              <div key={time.timeId}>
                <TimeFrame
                  time={time.time}
                  services={todayServices.filter((e) => {
                    return e.Time === time.timeId;
                  })}
                  setFinished={setFinishedCallBack}
                  setUnFinished={setUnFinishedCallBack}
                />
                <hr className=" border-pink-600 border-[2px] m-6" />
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          console.log(todayServices);
        }}
      >
        Test
      </button>
    </div>
  );
}
