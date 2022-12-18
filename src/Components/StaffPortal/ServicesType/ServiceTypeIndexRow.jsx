import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api.json"

export default function ServiceTypeIndexRow(props) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-7">
      <div className="border ">{props.ServiceType.Id}</div>
      <div className="border col-span-4">
        {props.ServiceType.ServiceTypeName}
      </div>
      <div className="border col-span-2">
        <button
          className="font-semibold mx-1 text-emerald-600"
          onClick={() => {
            navigate(`./view?id=${props.ServiceType.Id}`);
          }}
        >
          View
        </button>
        <button className="font-semibold mx-1 text-red-600"
        onClick={()=>{
          const req = {
            method: "PUT",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              authorization: "Bearer " + sessionStorage.getItem("jwt"),
            },
          };
          const confirmation = window.confirm("confirmation for deleting");
          if (confirmation){
            
            fetch(api.api+"/servicetypes/delete/"+props.ServiceType.Id,req).then(res=>res.json())
            .then(data=>{
              window.alert(data.message)
              props.loadingCallBack();
            });
          }
        }}>Delete</button>
      </div>
    </div>
  );
}
