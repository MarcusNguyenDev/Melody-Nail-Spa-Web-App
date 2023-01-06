import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../images/Hero1.jpg";
import img2 from "../../images/Hero2.jpg";
import img3 from "../../images/Hero3.jpg";
import img4 from "../../images/Hero4.jpg";

export default function Hero() {
  return (
    <section className="text-gray-600">
      <div className="w-full">
        <Fade>
          <img
            src={img1}
            className=" w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] object-cover"
            alt="Hero1"
          />

          <img
            src={img2}
            className=" w-full h-[40vh] sm-[50vh] md:h-[60vh] lg:h-[75vh] object-cover"
            alt="Hero2"
          />
          <img
            src={img3}
            className=" w-full h-[40vh] sm-[50vh] md:h-[60vh] lg:h-[75vh] object-cover"
            alt="Hero3"
          />
          <img
            src={img4}
            className=" w-full h-[40vh] sm-[50vh] md:h-[60vh] lg:h-[75vh] object-cover"
            alt="Hero4"
          />
        </Fade>
      </div>
    </section>
  );
}
