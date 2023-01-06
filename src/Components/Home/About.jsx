import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <section>
      <div className="bg-pink-100">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row justify-center flex-col py-6 mb-12 pb-0">
            <h1 className="sm:w-2/5 p-4 border-b-2 border-pink-700 font-bold title-font text-2xl mb-2 sm:mb-0 text-pink-700">
              ABOUT US
            </h1>
          </div>
        </div>
        <div className="mx-auto flex px-5 lg:py-[100px] lg:px-[300px] py-10 flex-col items-center max-w-[1500px] pt-0 lg:pt-0">
          <div className="bg-hero2 bg-center bg-cover rounded-xl p-1 border-pink-600 border-4 flex justify-center">
            <div className="w-[98%] h-[98%] border-pink-600 border p-8">
              <h1 className="title-font sm:text-[36px] text-2xl text-white font-bold font-Lobster p-2 rounded-xl bg-pink-500">
                We are professional nails stylist
              </h1>
              <p className="mb-8 backdrop-blur-sm leading-relaxed text-lg sm:text-2xl  rounded-lg text-pink-900 md:mx-[100px] sm:mx-[100px]">
                Located in Brassall Ipswich, Melody Nail & Spa is one of the
                best salon in the area. We pride ourselves on our services. At
                Melody Nails & Spa, you can enjoy our vast variety professional
                services at affordable prices while keeping the best quality.
                Our staffs at Melody Nails & Spa is fully qualified to ensure
                your best experience at our shop
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Link
              className="font-bold text-[18px] px-10 py-3 bg-pink-600 text-white hover:bg-pink-500"
              to={"./about"}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
