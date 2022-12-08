import React from "react";
import Feature from "../Components/Home/Feature";
import Hero from "../Components/Home/Hero";
import Services from "../Components/Home/Services";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <div>
      <Hero />
      <Feature />
      <Services />
    </div>
  );
}
