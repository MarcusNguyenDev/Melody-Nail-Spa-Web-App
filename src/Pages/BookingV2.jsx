import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api.json";

import BookingInfo from "../Components/BookingV2/BookingInfo";
import DateSelection from "../Components/BookingV2/DateSelection";
import ServiceSelection from "../Components/BookingV2/ServiceSelection";
import BookingConfirmation from "../Components/BookingV2/BookingConfirmation";
import ThankYouSection from "../Components/BookingV2/ThankYouSection";

// To Marcus or who ever working on this in the future:
//This is a callback hell. Should've used Redux instead ~~

export default function BookingV2() {
  const [Err, setErr] = useState(false);
  const navigate = useNavigate();
  const [ErrMessage, setErrMessage] = useState("");

  const [selecting, setSelecting] = useState(true);
  const [confirmation, setConfirmation] = useState(false);

  // Information section
  const [customerName, setCustomerName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");

  // Date selection section
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Services selection
  const [serviceTypes, setServiceTypes] = useState([]);
  const [services, setServices] = useState([]);
  const [availableTime, setAvailableTime] = useState([]);
  const [selectedService, setSelectedService] = useState([
    { id: 1, ServiceId: "", TimeId: "" },
  ]);

  // Thank you section
  const [thankYou, setThankYou] = useState(false);
  const [qrURL, setqrURL] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    Promise.all([
      fetch(api.api + "/servicetypes").then((res) => res.json()),
      fetch(api.api + "/services").then((res) => res.json()),
      fetch(
        api.api +
          `/booking/available?date=${
            selectedDate.getFullYear() +
            "-" +
            (selectedDate.getMonth() + 1) +
            "-" +
            selectedDate.getDate()
          }`
      ).then((res) => res.json()),
    ]).then(([serviceTypes, services, available]) => {
      setServiceTypes(serviceTypes);
      setServices(services);
      setAvailableTime(available);
    });
  }, [selectedDate]);

  return (
    <div className="flex flex-col mx-2 justify-center md:mx-32 lg:mx-64 xl:mx-80">
      <div className="flex">
        <div className="justify-center flex-col py-6 mb-3 pb-0">
          <h1 className="p-2 border-b-2 border-pink-700 font-bold text-2xl mb-2 sm:mb-0 text-pink-700">
            BOOKING FORM
          </h1>
        </div>
      </div>

      {selecting ? (
        <div>
          <div className={"w-full"}>
            <BookingInfo
              Err={Err}
              customerName={customerName}
              customerPhoneNumber={customerPhoneNumber}
              setNameCallback={(name) => setCustomerName(name)}
              setPhoneNumberCallBack={(phone) => setCustomerPhoneNumber(phone)}
            />

            <DateSelection
              Err={Err}
              selectedDate={selectedDate}
              setSelectedDateCallBack={(date) => {
                setSelectedDate(date);
                setSelectedService(
                  selectedService.map((e) => ({
                    id: e.id,
                    ServiceId: e.ServiceId,
                    TimeId: "",
                  }))
                );
              }}
              setAvailableTime={(time) => setAvailableTime(time)}
            />

            <ServiceSelection
              Err={Err}
              serviceTypes={serviceTypes}
              services={services}
              selectedService={selectedService}
              availableTime={availableTime}
              setService={(id, serviceId) => {
                setSelectedService(
                  selectedService.map((e) => {
                    if (e.id === id) {
                      return {
                        id: e.id,
                        ServiceId: serviceId,
                        TimeId: e.TimeId,
                      };
                    } else {
                      return e;
                    }
                  })
                );
              }}
              setTime={(id, timeId) => {
                setSelectedService(
                  selectedService.map((e) => {
                    if (e.TimeId === timeId) {
                      return { id: e.id, ServiceId: e.ServiceId, TimeId: "" };
                    } else if (e.id === id) {
                      return {
                        id: e.id,
                        ServiceId: e.ServiceId,
                        TimeId: timeId,
                      };
                    } else {
                      return e;
                    }
                  })
                );
              }}
              addNewService={() => {
                const newId =
                  selectedService[selectedService.length - 1].id + 1;
                setSelectedService([
                  ...selectedService,
                  { id: newId, ServiceId: "", TimeId: "" },
                ]);
              }}
              removeService={(id) => {
                if (selectedService.length > 1) {
                  setSelectedService(
                    selectedService.filter((e) => e.id !== id)
                  );
                }
              }}
            />
          </div>

          {Err ? (
            <label className="font-bold text-red-600">{ErrMessage}</label>
          ) : null}

          <div className={"flex justify-center"}>
            <button
              className="border p-2 w-[100px] m-4 font-bold bg-pink-500 hover:bg-pink-400 text-white"
              onClick={() => navigate("../")}
            >
              Cancel
            </button>
            <button
              className="border p-2 w-[100px] m-4 font-bold bg-pink-500 hover:bg-pink-400 text-white"
              onClick={() => {
                let errors = false;
                if (customerName === "") {
                  setErrMessage("Your Name is required");
                  errors = true;
                }
                if (customerPhoneNumber === "" || isNaN(customerPhoneNumber)) {
                  errors = true;
                  setErrMessage("Invalid phone number");
                }
                selectedService.map((e) => {
                  if (e.ServiceId === "" || e.TimeId === "") {
                    errors = true;
                    setErrMessage("Missing options for selected services");
                  }
                  return null;
                });

                if (errors) {
                  setErr(true);
                } else {
                  setErr(false);
                  window.scrollTo(0, 0);
                  setSelecting(false);
                  setConfirmation(true);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}

      {confirmation ? (
        <div>
          <div className={""}>
            <BookingConfirmation
              customerName={customerName}
              customerPhoneNumber={customerPhoneNumber}
              selectedDate={selectedDate}
              selectedService={selectedService}
              services={services}
            />
          </div>

          <div className={"flex justify-center"}>
            <button
              className="border p-2 w-[100px] m-4 font-bold bg-pink-500 hover:bg-pink-400 text-white"
              onClick={() => {
                window.scrollTo(0, 0);
                setConfirmation(false);
                setSelecting(true);
              }}
            >
              Back
            </button>
            <button
              className="border p-2 w-[100px] m-4 font-bold bg-pink-500 hover:bg-pink-400 text-white"
              onClick={() => {
                const message = {
                  method: "POST",
                  headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    selectedService: selectedService,
                    selectedDate:
                      selectedDate.getFullYear() +
                      "-" +
                      (selectedDate.getMonth() + 1) +
                      "-" +
                      selectedDate.getDate(),
                    customerName: customerName,
                    customerPhoneNumber: customerPhoneNumber,
                  }),
                };
                fetch(api.api + `/booking/bookv2`, message)
                  .then((res) => res.json())
                  .then((res) => {
                    if (res.error) {
                      alert("Something went wrong, please try again later");
                      navigate("../");
                    } else {
                      setqrURL(res.url);
                      setThankYou(true);
                      setConfirmation(false);
                    }
                  });
              }}
            >
              Book
            </button>
          </div>
        </div>
      ) : null}

      {thankYou ? (
        <div>
          <ThankYouSection url={qrURL} />
          <button
            className="border p-2 w-[100px] m-4 font-bold bg-pink-500 hover:bg-pink-400 text-white"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("../");
            }}
          >
            Home
          </button>
        </div>
      ) : null}
    </div>
  );
}
