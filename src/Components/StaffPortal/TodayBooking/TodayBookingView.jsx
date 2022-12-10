import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../../api.json";

const time = [
  { timeId: 0, time: "9:00am - 9:45am" },
  { timeId: 1, time: "9:45am - 10:30am" },
  { timeId: 2, time: "10:30am - 11:15am" },
  { timeId: 3, time: "11:15am - 12:00pm" },
  { timeId: 4, time: "12:00pm - 12:45pm" },
  { timeId: 5, time: "12:45pm - 1:30pm" },
  { timeId: 6, time: "1:30pm - 2:15pm" },
  { timeId: 7, time: "2:15pm - 3:00pm" },
  { timeId: 8, time: "3:00pm - 3:45pm" },
  { timeId: 9, time: "3:45pm - 4:30pm" },
  { timeId: 10, time: "4:30pm - 5:15pm" },
  { timeId: 11, time: "5:15pm - 6:00pm" },
  { timeId: 12, time: "6:00pm - 6:45pm" },
];

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const date = dd + "/" + mm + "/" + yyyy;

export default function TodayBookingView() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedId] = useState(searchParams.get("id"));
  const [bookedServices, setBookedServices] = useState([]);
  const [Customer, setCustomer] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

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
      fetch(
        api.api + `/todaybooking/BookedServices/${selectedId}`,
        message
      ).then((res) => res.json()),
      fetch(api.api + "/todaybooking/BookingList", message).then((res) =>
        res.json()
      ),
    ])
      .then(([servicesList, bookedServices, BookingList]) =>
        bookedServices.map((services) => ({
          Id: services.Id,
          BookedServiceId: services.Id,
          BookingId: services.BookingId,
          Time: time.find((e) => e.timeId === services.Time).time,
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
        setBookedServices(data);
        setCustomer(data[0].Customer);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  }, [selectedId, isUpdating]);

  return (
    <div>
      <div className="flex m-4">
        <div className="flex bg-emerald-600 p-3 rounded-2xl">
          <div className="font-bold text-white">Date:</div>
          <div className="font-bold text-xl pl-5 text-white">{date}</div>
        </div>
      </div>

      <div className="flex-col">
        <div className="bg-white m-4 p-4 rounded-lg">
          <div className="flex text-xl font-bold">Booking ID: {selectedId}</div>
          <div className="flex text-xl font-bold">Customer: {Customer}</div>
          <div className="flex text-xl font-bold">
            Price: $
            {bookedServices.reduce(
              (accumulator, obj) => accumulator + parseInt(obj.Price),
              0
            )}
          </div>
          <div className="grid grid-cols-5 border bg-blue-400">
            <div className="border">Time</div>
            <div className="border">Service Name</div>
            <div className="border">Price</div>
            <div className="border">Finished?</div>
            <div className="border"></div>
          </div>
          {bookedServices.map((data) => {
            return (
              <div className="grid grid-cols-5 border" key={data.Id}>
                <div className="border">{data.Time}</div>
                <div className="border">{data.ServiceName}</div>
                <div className="border">{data.Price}</div>
                <div className="border">{data.Done}</div>
                <div className="border">
                  {data.Done === "NO" ? (
                    <button
                      className="px-2 text-green-600 font-bold"
                      onClick={() => {
                        const message = {
                          method: "PUT",
                          headers: {
                            accept: "application/json",
                            "Content-Type": "application/json",
                            authorization:
                              "Bearer " + sessionStorage.getItem("jwt"),
                          },
                        };
                        fetch(
                          api.api +
                            `/todaybooking/BookedServices/setDone/${data.Id}`,
                          message
                        ).then(() => setIsUpdating(true));
                      }}
                    >
                      set FINISHED
                    </button>
                  ) : (
                    <button
                      className="px-2 text-yellow-600 font-bold"
                      onClick={() => {
                        const message = {
                          method: "PUT",
                          headers: {
                            accept: "application/json",
                            "Content-Type": "application/json",
                            authorization:
                              "Bearer " + sessionStorage.getItem("jwt"),
                          },
                        };
                        fetch(
                          api.api +
                            `/todaybooking/BookedServices/setUnDone/${data.Id}`,
                          message
                        ).then(() => setIsUpdating(true));
                      }}
                    >
                      set UnFINISHED
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="flex m-5 p-2 bg w-[80px] bg-pink-300 justify-center rounded-2xl text-pink-800 font-bold hover:bg-pink-500"
          onClick={() => {
            navigate("../TodayBooking");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
