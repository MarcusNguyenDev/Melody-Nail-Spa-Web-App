import React from "react";

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
export default function BookingConfirmation(props) {
  return (
    <div>
      <p className="text-pink-700 underline">
        Please confirm all information below
      </p>
      <div>
        <label className="flex mx-5 text-pink-700 font-bold text-xl">
          Information
        </label>
        <div className="grid grid-cols-3">
          <div className="col-span-1 flex justify-end text-pink-700">
            Your Name:
          </div>
          <div className="col-span-2 flex justify-start mx-2">
            {props.customerName}
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-1 flex justify-end text-pink-700">
            Your Phone number:
          </div>
          <div className="col-span-2 flex justify-start mx-2">
            {props.customerPhoneNumber}
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-1 flex justify-end text-pink-700">
            Selected date:
          </div>
          <div className="col-span-2 flex justify-start mx-2">
            {props.selectedDate.getDate() +
              "/" +
              (props.selectedDate.getMonth() + 1) +
              "/" +
              props.selectedDate.getFullYear()}
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-1 flex justify-end text-pink-700">
            Total services:
          </div>
          <div className="col-span-2 flex justify-start mx-2">
            {props.selectedService.length}
          </div>
        </div>
      </div>

      <div>
        <label className="flex mx-5 text-pink-700 font-bold text-xl">
          Selected services list
        </label>

        <div className="grid grid-cols-4">
          <div className="font-bold">No.</div>
          <div className="font-bold">Service Name</div>
          <div className="font-bold">Time</div>
          <div className="font-bold">Price</div>
        </div>
        <hr className="border-1 border-black" />
        {props.selectedService.map((e, i) => (
          <div className="grid grid-cols-4" key={i}>
            <div className="">{i + 1}</div>
            <div className="">
              {props.services
                .filter((service) => service.Id === parseInt(e.ServiceId))
                .map((e) => e.ServiceName)}
            </div>
            <div className="">
              {time
                .filter((time) => time.timeId === parseInt(e.TimeId))
                .map((e) => e.time)}
            </div>
            <div className="">
              {"$" +
                props.services
                  .filter((service) => service.Id === parseInt(e.ServiceId))
                  .map((e) => e.ServicePrice)}
            </div>
          </div>
        ))}
        <hr className="border-1 mt-3 border-black" />
        <div className="grid grid-cols-4">
          <div className="font-bold"></div>
          <div className="font-bold"></div>
          <div className="font-bold flex justify-end">Total:</div>
          <div className="font-bold ">
            {"$" +
              props.selectedService.reduce(
                (accumulator, obj) =>
                  accumulator +
                  parseInt(
                    props.services.find((e) => e.Id === parseInt(obj.ServiceId))
                      .ServicePrice
                  ),
                0
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
