import React from "react";

export default function ThankYouSection(props) {
  return (
    <div className="">
      <div className="text-7xl font-Dancing-Script font-bold text-pink-600">
        Thank You!
      </div>
      <div className="text-5xl font-Dancing-Script font-bold text-pink-700">
        For Using Our Services
      </div>
      <div className="m-4 text-lg">
        When you come to our shop, please quote your{" "}
        <label className="text-pink-700">Name</label> or your{" "}
        <label className="text-pink-700">Phone number</label> or show the{" "}
        <label className="text-pink-700">QR code</label> bellow to our staff
      </div>

      <div className="text-pink-700">
        For easy check in, please screenshot this qr code. Thank you!
      </div>
      <div className="flex justify-center">
        <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px]">
          <img className="w-full h-full" src={props.url} alt="" />
        </div>
      </div>
    </div>
  );
}
