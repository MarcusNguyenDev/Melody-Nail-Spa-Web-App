import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api.json";
import ReactDatePicker from "react-datepicker";

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const date = dd + "/" + mm + "/" + yyyy;

export default function TodayBookingIndex() {
  const navigate = useNavigate();
  const [BookedList, setBookedList] = useState([]);
  const [query, setQuery] = useState("");
  const [SelectedDate, setSelectedDate] = useState(new Date());

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
      fetch(
        api.api +
          `/todaybooking/BookingList?date=${
            SelectedDate.getFullYear() +
            "-" +
            (SelectedDate.getMonth() + 1) +
            "-" +
            SelectedDate.getDate()
          }`,
        message
      ).then((res) => res.json()),
    ])
      .then(([data]) => setBookedList(data))
      .catch((err) => console.log(err));
  }, [SelectedDate]);
  return (
    <div>
      <div className="flex m-4">
        <div className="flex bg-emerald-600 p-3 rounded-2xl shadow-xl">
          <div className="font-bold text-white">Date:</div>
          <div className="font-bold text-xl pl-5 text-white">{date}</div>
        </div>
        <div className="flex bg-emerald-600 p-3 rounded-2xl mx-1 shadow-xl">
          <div className="font-bold text-white">Total Booking:</div>
          <div className="font-bold text-xl pl-5 text-white">
            {BookedList.length}
          </div>
        </div>
      </div>

      <div className="bg-white m-4 p-4 rounded-xl shadow-2xl">
        <div className="font-bold text-2xl">Today Bookings</div>

        <div className="flex-col">
          <div className="flex m-2">
            <label className="w-[100px]">Search:</label>
            <input
              className="border shadow-lg"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>

          <div className="flex m-2">
            <label className="flex w-[100px]">Pick a date:</label>
            <ReactDatePicker
              className="border shadow-lg flex"
              selected={SelectedDate}
              dateFormat="dd/M/yyyy"
              onChange={(date) => {
                setSelectedDate(date);
              }}
            />
          </div>
        </div>

        <div className="flex">
          <button
            className="p-2 w-[200px] bg-emerald-600 rounded-xl py-1 mb-2 text-white font-bold hover:bg-emerald-400"
            onClick={() => {
              setSelectedDate(new Date());
              setQuery("");
            }}
          >
            Reset Search
          </button>
        </div>

        <div className="grid grid-cols-4 border-black bg-blue-400">
          <div className="border">Booking ID</div>
          <div className="border">Customer</div>
          <div className="border">Checked In</div>
          <div className="border">Options</div>
        </div>
        {query === ""
          ? BookedList.map((row) => {
              return (
                <div className="grid grid-cols-4 border-black" key={row.Id}>
                  <div className="border">{row.Id}</div>
                  <div className="border">{row.Customer}</div>
                  <div className="border">{row.CheckedIn}</div>
                  <div className="border">
                    <button
                      className="text-emerald-500 font-semibold"
                      onClick={() => {
                        navigate(`./view?id=${row.Id}`);
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })
          : BookedList.filter(
              (e) => e.Customer.slice(0, query.length) === query
            ).map((row) => {
              return (
                <div className="grid grid-cols-4 border-black" key={row.Id}>
                  <div className="border">{row.Id}</div>
                  <div className="border">{row.Customer}</div>
                  <div className="border">{row.CheckedIn}</div>
                  <div className="border">
                    <button
                      className="text-emerald-500 font-semibold"
                      onClick={() => {
                        navigate(`./view?id=${row.Id}`);
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
