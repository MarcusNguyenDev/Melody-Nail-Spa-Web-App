import React from "react";
import { useEffect, useState } from "react";
import api from "../../api.json";

export default function ServiceTab(props) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  if (width >= 640) {
    return (
      <div>
        <div className="sm:flex justify-center mb-4">
          {props.serviceType.Id % 2 === 0 ? (
            <div className="sm:grid grid-cols-3 w-full flex-col">
              <div className="col-span-1 flex justify-center">
                <img
                  src="https://dummyimage.com/1900x1900"
                  alt={props.serviceType.ServiceTypeName + " Image"}
                  className="w-[200px] h-[200px] rounded-full border-pink-700 border mt-2 sm:mt-0"
                />
              </div>
              <div className="col-span-2">
                <div className="flex text-[42px] font-Dancing-Script font-bold text-pink-700">
                  {props.serviceType.ServiceTypeName}
                </div>
                {props.services.map((service) => (
                  <div key={service.Id}>
                    <div className="grid grid-cols-5 ">
                      <div className="col-span-4 flex text-lg">
                        {service.ServiceName}
                      </div>
                      <div className="col-span-1 flex text-lg font-bold">
                        ${service.ServicePrice}
                      </div>
                    </div>
                    <hr className="border border-pink-700" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="sm:grid grid-cols-3 w-full">
              <div className="col-span-2">
                <div className="flex text-[42px] font-Dancing-Script font-bold text-pink-700">
                  {props.serviceType.ServiceTypeName}
                </div>
                {props.services.map((service) => (
                  <div className="" key={service.Id}>
                    <div className="grid grid-cols-5 ">
                      <div className="col-span-4 flex text-lg">
                        {service.ServiceName}
                      </div>
                      <div className="col-span-1 flex text-lg font-bold">
                        ${service.ServicePrice}
                      </div>
                    </div>
                    <hr className="border border-pink-700" />
                  </div>
                ))}
              </div>{" "}
              <div className="col-span-1 flex justify-center">
                <img
                  src="https://dummyimage.com/1900x1900"
                  alt={props.serviceType.ServiceTypeName + " Image"}
                  className="w-[200px] h-[200px] rounded-full border-pink-700 border mt-2 sm:mt-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sm:grid grid-cols-3 w-full flex-col">
        <div className="col-span-1 flex justify-center">
          <img
            src="https://dummyimage.com/1900x1900"
            alt={props.serviceType.ServiceTypeName + " Image"}
            className="w-[200px] h-[200px] rounded-full border-pink-700 border mt-2 sm:mt-0"
          />
        </div>
        <div className="col-span-2">
          <div className="flex text-[42px] font-Dancing-Script font-bold text-pink-700">
            {props.serviceType.ServiceTypeName}
          </div>
          {props.services.map((service) => (
            <div key={service.Id}>
              <div className="grid grid-cols-5 ">
                <div className="col-span-4 flex text-lg">
                  {service.ServiceName}
                </div>
                <div className="col-span-1 flex text-lg font-bold">
                  ${service.ServicePrice}
                </div>
              </div>
              <hr className="border border-pink-700" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
