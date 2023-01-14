import React from "react";
import { useState, useEffect } from "react";

export default function TimeFrame(props) {
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    setServicesList(props.services);
  }, [props.services]);

  return (
    <div className="border-2 border-pink-700 my-4 p-2">
      {servicesList.length > 0 ? (
        <div>
          <div className="flex m-3 mb-0 font-bold text-emerald-600 text-2xl">
            Time: {props.time}
          </div>
          <div className="flex m-3 mt-0 font-bold">
            {4 - servicesList.length} left available
          </div>
          <div className="grid grid-cols-6 border bg-blue-400">
            <div className="border">Booking ID</div>
            <div className="border">Customer</div>
            <div className="border">Service Name</div>
            <div className="border">Price</div>
            <div className="border">Finished?</div>
            <div className="border"></div>
          </div>
          {servicesList.map((data) => {
            return (
              <div className="grid grid-cols-6 border" key={data.Id}>
                <div className="border">{data.BookingId}</div>
                <div className="border">{data.Customer}</div>
                <div className="border">{data.ServiceName}</div>
                <div className="border">{data.Price}</div>
                <div className="border">{data.Done}</div>
                <div className="border">
                  {data.Done === "NO" ? (
                    <button
                      className="px-2 text-green-600 font-bold"
                      onClick={() => {
                        props.setFinished(data.Id);
                      }}
                    >
                      set FINISHED
                    </button>
                  ) : (
                    <button
                      className="px-2 text-yellow-600 font-bold"
                      onClick={() => {
                        props.setUnFinished(data.Id);
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
      ) : (
        <div>
          <div className="flex m-3 font-bold text-emerald-600 text-2xl">
            Time: {props.time}
          </div>
          <div className="flex m-3 font-bold">
            {4 - servicesList.length} left available
          </div>
          <div className="flex m-3 font-bold">No Services booked</div>
        </div>
      )}
    </div>
  );
}
