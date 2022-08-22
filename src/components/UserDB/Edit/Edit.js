import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "./Edit.css";

const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    month: "",
    empId: "",
    empName: "",
    mobNo: "",
    department: "",
    projectId: "",
    projectName: "",
    manager: "",
    pickupLocation: "",
    pickupTime: "",
    dropLocation: "",
    managerApproval: "",
    status: "",
  });

  const {
    month,
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/monthly/${id}`, user);
    history.push("/dashboard");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/monthly/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Drop Location</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your drop location"
              name="dropLocation"
              value={dropLocation}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
