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
      fetch(api.api + "/todaybooking/BookingList", message).then((res) =>
        res.json()
      ),
    ])
      .then(([data]) => setBookedList(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="flex m-4">
        <div className="flex bg-emerald-600 p-3 rounded-2xl shadow-xl">
          <div className="font-bold text-white">Date:</div>
          <div className="font-bold text-xl pl-5 text-white">{date}</div>
        </div>
      </div>

      <div className="bg-white m-4 p-4 rounded-xl shadow-2xl">
        <div className="font-bold text-2xl">Today Bookings</div>

        <div className="flex m-2">
          <div className="mr-2">Search:</div>
          <input
            className="border shadow-lg"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
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
                <div className="grid grid-cols-4 border-black">
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
                <div className="grid grid-cols-4 border-black">
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
