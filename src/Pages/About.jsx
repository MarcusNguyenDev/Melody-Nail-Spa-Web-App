import React from "react";
import image1 from "../images/IMG-0038.jpg";
import image2 from "../images/IMG-0042.jpg";
import image3 from "../images/IMG-0039.jpg";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="lg:mx-96">
      <div className="flex m-4 text-2xl font-bold text-pink-700">
        <div className="border-b-2 border-pink-700">ABOUT US</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="m-4">
          <img src={image1} className="my-1" alt="About us Image1" />
          <img src={image2} className="my-1" alt="About us Image2" />
          <img src={image3} className="my-1" alt="About us Image3" />
        </div>
        <div>
          <div className="flex-col m-4 text-xl text-pink-700">
            <div className="flex border-b-2 border-pink-700">
              Melody Nails & Spa
            </div>
            <p className="text-justify text-[16px] text-black">
              Located conveniently in Brassall, QLD Melody Nails & Spa is one of
              the best salons in this area. Melody Nails & Spa offers premier
              nails care and spa treatment services to satisfy your needs of
              enhancing natural beauty and refreshing your day. We’re pleased to
              offer many services to anyone in or near Brassall Ipswich that is
              looking to enhance their nails.
            </p>

            <p className="text-justify text-[16px] text-black my-3">
              Our entire range of services guarantees that we have the skills
              and experience necessary for your nail and spa needs.
            </p>

            <p className="text-justify text-[16px] text-black my-3">
              Sanitation is always on top of our priorities. We strictly
              implement the sanitation guidelines for beauty spa to ensure
              clients’ safety. Along with the standard hygiene procedures, all
              the products we use in the salon are from the most famous
              manufacturers. That would bring the highest quality services for
              clients.
            </p>

            <p className="text-justify text-[16px] text-black my-3">
              Enjoy our wide range of services in a cozy and luxurious
              environment. We look forward to serving you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
