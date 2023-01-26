import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../../api.json";

export default function Users() {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassWord] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex-col">
      <label className="flex m-4 font-bold text-xl underline text-pink-700">
        Change Password
      </label>
      <div className="flex-col ml-4 border-2 p-2 w-[500px] shadow-xl">
        <div>
          <label className="flex m-4 font-bold underline text-pink-700">
            Current UserName and Password
          </label>
          <div className="grid grid-cols-3 w-full  my-1">
            <label className="text-lg p-1">Username:</label>
            <div className="col-span-2">
              <input
                type={"text"}
                className="w-full border-2 p-1"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 w-full my-1">
            <label className="text-lg p-1 ">Password</label>
            <div className="col-span-2">
              <input
                type={"password"}
                className="w-full border-2 p-1"
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col ml-4 border-2 p-2 w-[500px] shadow-xl my-10">
        <div>
          <label className="flex m-4 font-bold underline text-pink-700">
            New UserName and Password
          </label>

          <div className="grid grid-cols-3 w-full  my-1">
            <label className="text-lg p-1">New Username:</label>
            <div className="col-span-2">
              <input
                type={"text"}
                value={newUserName}
                className="w-full border-2 p-1"
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 w-full my-1">
            <label className="text-lg p-1 ">New Password</label>
            <div className="col-span-2">
              <input
                type={"password"}
                value={newPassword}
                className="w-full border-2 p-1"
                onChange={(e) => setNewPassWord(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[500px] flex justify-center">
        <button
          className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
          onClick={() => {
            navigate("../booking");
          }}
        >
          Back
        </button>

        <button
          className="justify-start t-4 m-4 p-2 w-[100px] bg-pink-300 rounded-2xl font-bold text-pink-800 hover:bg-pink-600"
          onClick={() => {
            const message = {
              method: "PUT",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                authorization: "Bearer " + sessionStorage.getItem("jwt"),
              },
              body: JSON.stringify({
                userName: userName,
                password: password,
                newUserName: newUserName,
                newPassword: newPassword,
              }),
            };
            fetch(api.api + "/users/put", message)
              .then((res) => res.json())
              .then((data) => {
                if (!data.error) {
                  setUserName("");
                  setPassWord("");
                  setNewPassWord("");
                  setNewUserName("");
                  alert(data.message);
                } else {
                  alert(data.message);
                }
              });
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}
