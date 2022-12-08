import React from "react";
import api from "../../api.json";
import { useState } from "react";

export default function BookingServices(props) {
  const [services, setServices] = useState([]);
  // const renderAfterCalled = useRef(false);
  const [dropdown, setDropdown] = useState(true);

  // useEffect(() => {
  //   if (!renderAfterCalled.current) {
  //     fetch(api.api + `/services?servicetypeId=${props.Id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setServices(data);
  //       });
  //   }
  //   renderAfterCalled.current = true;
  // });

  return (
    <div>
      <div className="mt-1">
        <button
          className="flex w-full border-t-pink-800 border-b-pink-800 border p-2 hover:bg-pink-300"
          onClick={() => {
            fetch(api.api + `/services?servicetypeId=${props.Id}`)
              .then((res) => res.json())
              .then((data) => {
                setServices(data);
              });
            setDropdown(!dropdown);
          }}
        >
          <div className="flex w-full justify-center">
            <div className="justify-start ml-8 mr-8 text-pink-800">
              {props.ServiceType}
            </div>
          </div>
        </button>
      </div>
      {dropdown ? (
        <></>
      ) : (
        <div>
          {services.map((data) => {
            return (
              <div key={data.Id} className="grid grid-cols-3 pt-2 pb-2 border">
                <label>{data.ServiceName}</label>
                <label className="">{"$" + data.ServicePrice}</label>

                <div className="flex justify-center">
                  <button
                    className="sm:ml-10 inline-block align-middle text-emerald-500 font-bold p-2 hover:bg-emerald-500 hover:text-white rounded-xl"
                    onClick={() => {
                      props.SelectionCallback(data);
                    }}
                  >
                    SELECT
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
