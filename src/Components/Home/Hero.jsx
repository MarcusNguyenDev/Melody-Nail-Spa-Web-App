import React from "react";
import img1 from "../../images/img1.jpg";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-pink-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold">
            We are professional
            <br className="hidden lg:inline-block" /> nail stylist
          </h1>
          <p className="mb-8 leading-relaxed">
            We will help you design your favorite nail design. We priotize
            quality of our services over profit. Each design is unique.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white justify-center bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
              Learn more
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-3xl"
            alt="hero"
            src={img1}
          />
        </div>
      </div>
    </section>
  );
}
