import React from "react";
import Hero from "../Components/Home/Hero";
import Services from "../Components/Home/Services";
import About from "../Components/Home/About";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Services />
    </div>
  );
}
