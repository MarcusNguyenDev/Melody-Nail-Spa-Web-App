import React from "react";
import { useEffect, useState } from "react";
import api from "../../api.json";
import { Link } from "react-router-dom";

export default function Services() {
  const [serviceTypes, setServiceType] = useState([]);
  useEffect(() => {
    fetch(api.api + "/servicetypes")
      .then((res) => res.json())
      .then((data) => setServiceType(data));
  }, []);
  return (
    <section className="text-gray-600 bg-gray-100 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row justify-center flex-col pb-0 py-6 mb-12">
            <h1 className="sm:w-2/5 p-4 border-b-2 border-pink-700 font-bold title-font text-2xl mb-2 sm:mb-0 text-pink-700">
              OUR SERVICES
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:mx-64 auto-cols-max gap-5">
          {serviceTypes.map((servicetype) => (
            <div key={servicetype.Id}>
              <div className="flex justify-center">
                <img
                  src={api.api + `/images/${servicetype.ServiceTypeImage}`}
                  alt={servicetype.ServiceTypeName}
                  className="w-[200px] h-[200px] rounded-full border-pink-700 border mt-2 sm:mt-0"
                />
              </div>
              <div className="flex justify-center text-pink-700 text-[22px]">
                {servicetype.ServiceTypeName}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link
            className="font-bold text-[18px] px-10 py-3 bg-pink-600 text-white hover:bg-pink-500"
            to={"./services"}
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
