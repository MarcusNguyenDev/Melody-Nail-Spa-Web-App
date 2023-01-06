import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import api from "../api.json";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-pink-200 flex justify-center">
      <div className="bg-pink-300 m-[40px] p-[40px] pt-5 pb-5 rounded-3xl flex-col">
        <div className="text-pink-800 font-bold">Staff Login</div>
        <div className="flex m-2">
          <div className="flex justify-start">
            <label
              className="flex justify-center text-pink-800"
              htmlFor="username"
            >
              UserName:
            </label>
          </div>
          <div className="flex justify-end">
            <input
              className="ml-2"
              name="username"
              type="username"
              autoComplete="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex m-2">
          <label
            className="flex justify-center text-pink-800"
            htmlFor="password"
          >
            Password:{" "}
          </label>
          <input
            className="ml-4"
            name="password"
            type="password"
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
        </div>

        <div className="flex">
          <button
            className="flex w-[80px] justify-center text-pink-800 font-bold p-2 mr-2 bg-pink-200 rounded-xl hover:bg-pink-400"
            type="submit"
            onClick={() => {
              const loginInfo = { username: userName, password: password };
              postLogin(loginInfo).then((res) => {
                if (!res.error) {
                  const successNotification = () => {
                    NotificationManager.success(res.message, "Success", 10000);
                  };
                  successNotification("success");
                  sessionStorage.setItem("jwt", res.token);
                  sessionStorage.setItem("loggedIn", "true");
                  navigate("/staffportal");
                } else {
                  const errorNotification = () => {
                    NotificationManager.error(res.message, "Error", 10000);
                  };
                  errorNotification("error");
                }
              });
            }}
          >
            Login
          </button>
          <button
            className="flex w-[80px] justify-center text-pink-800 font-bold p-2 ml-2 bg-pink-200 rounded-xl hover:bg-pink-400"
            type="submit"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function postLogin(prop) {
  const message = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(prop),
  };
  const response = fetch(api.api + "/users/login", message).then((res) =>
    res.json()
  );
  return response;
}
