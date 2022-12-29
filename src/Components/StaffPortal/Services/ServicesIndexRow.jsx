import React from "react";
import api from "../../../api.json";
import { useNavigate } from "react-router-dom";

export default function ServicesIndexRow(props) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-9 ">
      <div className="col-span-1 border">{props.service.Id}</div>
      <div className="col-span-2 border">{props.service.ServiceName}</div>
      <div className="col-span-2 border">{props.service.ServiceType}</div>
      <div className="col-span-2 border">${props.service.ServicePrice}</div>
      <div className="col-span-2 border">
        <div>
          <button
            className="font-semibold mx-1 text-emerald-600"
            onClick={() => {
              navigate(`./view?id=${props.service.Id}`);
            }}
          >
            View
          </button>
          <button
            className="font-semibold mx-1 text-red-600"
            onClick={() => {
              const req = {
                method: "PUT",
                headers: {
                  accept: "application/json",
                  "Content-Type": "application/json",
                  authorization: "Bearer " + sessionStorage.getItem("jwt"),
                },
              };
              if (window.confirm("confirmation for deleting")) {
                fetch(api.api + "/services/delete/" + props.service.Id, req)
                  .then((res) => res.json())
                  .then((data) => {
                    window.alert(data.message);
                    props.loadingCallBack();
                  });
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
