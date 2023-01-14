import React from "react";

export default function Rating() {
  return (
    <section className="">
      <div className="bg-pink-100 py-10">
        <div className="flex justify-center text-[30px] text-pink-700 mb-[12px] font-bold">
          4.9 STARS RATED ON FACEBOOK
        </div>
        <div className="flex justify-center">
          <SVG />
          <SVG />
          <SVG />
          <SVG />
          <SVG />
        </div>
      </div>
    </section>
  );
}

function SVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80px"
      height="80px"
      viewBox="0 0 1024 1024"
      version="1.1"
    >
      <path
        d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z"
        fill="#FAD97F"
      />
      <path
        d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z"
        fill=""
      />
    </svg>
  );
}
