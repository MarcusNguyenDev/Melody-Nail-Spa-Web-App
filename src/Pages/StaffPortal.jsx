import React from "react";
import StaffNavbar from "../Components/StaffPortal/StaffNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../api.json";

export default function StaffPortal() {
  const navigate = useNavigate();

  useEffect(() => {
    const message = {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    };

    fetch(api.api + "/checkToken", message)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          navigate("/login");
        }
      });
  });
  return (
    <div>
      <div className="flex">
        <div>
          <StaffNavbar />
        </div>
        <div className="w-[100%] bg-pink-100 justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
