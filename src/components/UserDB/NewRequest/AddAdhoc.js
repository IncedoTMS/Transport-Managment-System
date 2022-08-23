import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddAdhoc = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    date: "",
    empId: "",
    empName: "",
    mobNo: "",
    department: "",
    projectId: "",
    projectName: "",
    manager: "",
    pickupLocation: "Gurgaon",
    pickupTime: "",
    dropLocation: "",
    managerApproval: "Pending",
    status: "Active",
  });

  const {
    date,
    empId,
    empName,
    mobNo,
    department,
    projectId,
    projectName,
    manager,
    pickupLocation,
    pickupTime,
    dropLocation,
    managerApproval,
    status,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/adhoc", user);
    history.push("/dashboard");
  };
  return (
    <div className=" mx-auto shadow p-5 edit-box">
      <form onSubmit={(e) => onSubmit(e)}>
        <h2 className="text-center mb-4">Add Adhoc Drop Request</h2>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter date"
            name="date"
            value={date}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter pickup time"
            name="pickupTime"
            value={pickupTime}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter drop location"
            name="dropLocation"
            value={dropLocation}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <button className="btn btn-warning btn-block">Confirm</button>
      </form>
    </div>
  );
};

export default AddAdhoc;
