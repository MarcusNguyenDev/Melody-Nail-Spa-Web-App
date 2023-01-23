import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api.json";
import ReactDatePicker from "react-datepicker";
import QrReader from "react-qr-scanner";
import moment from "moment";
import Pagination from "react-paginate";

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const date = dd + "/" + mm + "/" + yyyy;

export default function TodayBookingIndex() {
  const navigate = useNavigate();
  const [BookedList, setBookedList] = useState([]);
  const [queryByName, setQueryByName] = useState("");
  const [queryByPhone, setQueryByPhone] = useState("");
  const [SelectedDate, setSelectedDate] = useState(new Date());
  const [QRScanning, setQRScanning] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(10);

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

      <div className="bg-white m-4 p-4  border-2 shadow-xl">
        <div className="font-bold text-2xl">Bookings</div>

        <div className="flex-col">
          <div className="grid grid-cols-2 m-2 w-[300px]">
            <label className="flex ">Search by Name:</label>
            <div className="w-full">
              <input
                className="border shadow-lg"
                value={queryByName}
                onChange={(e) => {
                  setQueryByName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 m-2 w-[300px]">
            <label className="flex ">Search by phone:</label>
            <div className="w-full">
              <input
                className="border shadow-lg"
                value={queryByPhone}
                onChange={(e) => {
                  setQueryByPhone(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 m-2 w-[300px]">
            <label className="flex w-[100px]">Pick a date:</label>
            <div>
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
        </div>

        <div className="flex">
          <button
            className="p-2 w-[200px] mr-2 bg-emerald-600 rounded-xl py-1 mb-2 text-white font-bold hover:bg-emerald-400"
            onClick={() => {
              const message = {
                method: "GET",
                headers: {
                  accept: "application/json",
                  "Content-Type": "application/json",
                  authorization: "Bearer " + sessionStorage.getItem("jwt"),
                },
              };
              fetch(
                api.api +
                  `/todayBooking/BookingList/Search?name=${queryByName}&phone=${queryByPhone}`,
                message
              )
                .then((res) => res.json())
                .then((data) => {
                  if (!data.error) {
                    if (data.length > 0) {
                      setBookedList(data);
                    } else {
                      alert("Not Found in the database");
                    }
                  } else {
                    alert(data.message);
                  }
                });
            }}
          >
            All Data Search
          </button>

          <button
            className="p-2 w-[200px] mr-2 bg-emerald-600 rounded-xl py-1 mb-2 text-white font-bold hover:bg-emerald-400"
            onClick={() => {
              setSelectedDate(new Date());
              setQueryByName("");
              setQueryByPhone("");
              setCurrentPage(0);
            }}
          >
            Reset Search
          </button>
          <button
            className="p-2 w-[200px] mx-2 bg-emerald-600 rounded-xl py-1 mb-2 text-white font-bold hover:bg-emerald-400"
            onClick={() => setQRScanning(!QRScanning)}
          >
            QR Scanner
          </button>
        </div>

        <p className="font-bold text-pink-700">
          The <label className="text-emerald-600">All Data search</label> button
          will show all recorded data regardless date. Press Reset to return to
          normal mode.
        </p>

        {QRScanning ? (
          <div>
            <QrReader
              className="w-[400px] h-[400px]"
              onError={() => alert("Scan error")}
              onScan={(data) => {
                if (data) {
                  setQRScanning(false);
                  const recordedArray = data.text.split("|");
                  if (
                    recordedArray[0] === undefined ||
                    recordedArray[1] === undefined ||
                    recordedArray[2] === undefined
                  ) {
                    alert(
                      "Invalid QR code, need to scan again or the QR code is broken"
                    );
                  } else {
                    setQueryByName(recordedArray[0]);
                    setQueryByPhone(recordedArray[1]);
                    setSelectedDate(new Date(recordedArray[2]));
                  }
                }
              }}
              delay={1000}
            />
          </div>
        ) : null}

        <div className="grid grid-cols-7 border-black bg-blue-400 text-white font-bold">
          <div className="border">Booking ID</div>
          <div className="border">Customer</div>
          <div className="border">Phone</div>
          <div className="border">Date</div>
          <div className="border">Date from NOW</div>
          <div className="border">Checked In</div>
          <div className="border">Options</div>
        </div>
        {queryByName === "" && queryByPhone === ""
          ? BookedList.slice(
              currentPage * perPage,
              currentPage * perPage + perPage
            ).map((row, i) => {
              return (
                <div className="grid grid-cols-7 border-black" key={i}>
                  <div className="border">{i + 1}</div>
                  <div className="border">{row.Customer}</div>
                  <div className="border">{row.PhoneNumber}</div>
                  <div className="border">
                    {new moment(row.BookingDate).format("DD/MM/YY")}
                  </div>
                  <div className="border">
                    {new moment(row.BookingDate).fromNow()}
                  </div>
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
          : BookedList.filter((e) => {
              let result;
              if (queryByName !== "" && queryByPhone === "") {
                result =
                  e.Customer.toLocaleLowerCase().slice(
                    0,
                    queryByName.length
                  ) === queryByName.toLocaleLowerCase();
              } else if (queryByName === "" && queryByPhone !== "") {
                result =
                  e.PhoneNumber.toLocaleLowerCase().slice(
                    0,
                    queryByPhone.length
                  ) === queryByPhone.toLocaleLowerCase();
              } else if (queryByName !== "" && queryByPhone !== "") {
                result =
                  e.PhoneNumber.toLocaleLowerCase().slice(
                    0,
                    queryByPhone.length
                  ) === queryByPhone.toLocaleLowerCase() &&
                  e.Customer.toLocaleLowerCase().slice(
                    0,
                    queryByName.length
                  ) === queryByName.toLocaleLowerCase();
              }
              return result;
            })
              .slice(currentPage * perPage, currentPage * perPage + perPage)
              .map((row, i) => {
                return (
                  <div className="grid grid-cols-7 border-black" key={i}>
                    <div className="border">{i + 1}</div>
                    <div className="border">{row.Customer}</div>
                    <div className="border">{row.PhoneNumber}</div>
                    <div className="border">
                      {new moment(row.BookingDate).format("DD/MM/YY")}
                    </div>
                    <div className="border">
                      {new moment(row.BookingDate).fromNow()}
                    </div>
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
        <div className="flex justify-center">
          <Pagination
            className="flex justify-center mt-6"
            pageCount={BookedList.length / perPage}
            breakLabel=". . ."
            nextClassName="font-bold text-pink-700 my-2 mx-4"
            previousClassName="font-bold text-pink-700 my-2 mx-4"
            pageClassName="my-2 mx-2"
            pageRangeDisplayed={5}
            activeClassName="my-2 mx-2 text-pink-700 font-bold"
            onPageChange={(data) => {
              let selected = data.selected;
              setCurrentPage(selected);
            }}
            forcePage={currentPage}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}
