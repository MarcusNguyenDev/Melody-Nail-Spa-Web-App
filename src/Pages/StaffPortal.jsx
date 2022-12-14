import React from "react";
import StaffNavbar from "../Components/StaffPortal/StaffNavbar/StaffNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api.json";

export default function StaffPortal() {
  const navigate = useNavigate();

  const [authorize, setAuthorize] = useState(false);

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
        } else {
          setAuthorize(true);
        }
      })
      .catch((err) => navigate("/login"));
  });
  if (!authorize) {
    return (
      <div className="text-lg m-4 font-bold">
        The system is checking for authorization. If unauthorized, you will be
        navigate to Staff login page to check your identity
      </div>
    );
  } else {
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
}
