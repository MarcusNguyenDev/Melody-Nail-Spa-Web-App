import React from "react";

export default function Hero() {
  return (
    <section className="text-gray-600">
      <div className={`w-full backdrop-blur-sm`}>
        <img
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:[60vh]"
          src="https://dummyimage.com/1900x1900"
        />
      </div>
    </section>
  );
}
