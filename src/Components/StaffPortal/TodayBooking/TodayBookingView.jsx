import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../../api.json";

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

export default function TodayBookingView() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedId] = useState(searchParams.get("id"));
  const [bookedServices, setBookedServices] = useState([]);
  const [Customer, setCustomer] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
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
      fetch(api.api + `/todaybooking/BookingList/${selectedId}`, message).then(
        (res) => res.json()
      ),
    ])
      .then(([servicesList, bookedServices, BookingList]) =>
        bookedServices.map((services) => ({
          Id: services.Id,
          BookedServiceId: services.Id,
          BookingId: services.BookingId,
          Time: time.find((e) => e.timeId === services.Time).time,
          BookingDate: BookingList.find((e) => e.Id === services.BookingId)
            .BookingDate,
          Customer: BookingList.find((e) => e.Id === services.BookingId)
            .Customer,
          PhoneNumber: BookingList.find((e) => e.Id === services.BookingId)
            .PhoneNumber,
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
        setPhoneNumber(data[0].PhoneNumber);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  }, [selectedId, isUpdating]);

  return (
    <div>
      <div className="flex-col shadow-md border-2 m-4">
        <div className="bg-white m-4 p-4 rounded-lg">
          <div className="flex text-xl font-bold">Booking ID: {selectedId}</div>
          <div className="flex text-xl font-bold">Customer: {Customer}</div>
          <div className="flex text-xl font-bold">
            Phone number: {PhoneNumber}
          </div>
          <div className="flex text-xl font-bold">
            Total: $
            {bookedServices.reduce(
              (accumulator, obj) => accumulator + parseInt(obj.Price),
              0
            )}
          </div>
          <div className="flex text-xl font-bold">
            Finished Total: $
            {bookedServices
              .filter((e) => {
                return e.Done === "YES";
              })
              .reduce(
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
            navigate("../Booking");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
