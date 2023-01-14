import React from "react";
import DashboardCard from "./DashboardCard";

export default function DashBoard() {
  return (
    <div className="w-[100%]">
      <h1 className="text-[40px] font-bold font-Dancing-Script text-pink-700">
        Good Morning
      </h1>
      <div>
        <DashboardCard />
      </div>
    </div>
  );
}
