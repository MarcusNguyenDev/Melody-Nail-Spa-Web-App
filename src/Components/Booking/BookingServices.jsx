import React from "react";
import { useState } from "react";

export default function BookingServices(props) {
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
      <div className="mb-0">
        <button
          className="flex w-full border-t-pink-800 border-b-pink-800 border p-2 hover:bg-pink-300"
          onClick={() => {
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
          {props.ServicesList.map((data) => {
            return (
              <div key={data.Id} className="grid grid-cols-3 py-2 border mx-4">
                <label>{data.ServiceName}</label>
                <label className="">{"$" + data.ServicePrice}</label>

                <div className="flex justify-center">
                  <button
                    className="sm:ml-10 inline-block align-middle text-emerald-500 font-bold p-2 px-8 hover:bg-emerald-500 hover:text-white rounded-xl"
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
