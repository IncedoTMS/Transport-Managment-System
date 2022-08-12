import React, { useState } from "react";
import "./Post.css";
const axios = require("axios");

export default function Post() {
  const [user, setUser] = useState({
    empId: "",
    empName: "",
    mobileNo: "",
    department: "",
    projectId: "",
    projectName: "",
    manager: "",
    resAddress: "",
    office: "",
  });

  function submitHandler() {
    axios.post(" http://localhost:3000/users", user).then(
      (resp) => {
        console.log(resp);
      },
      (e) => {
        console.log(e);
      }
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inline">
        <div class="form-cell">
          <label>Employee ID</label>
          <input
            type="number"
            name="empId"
            value={user.empId}
            placeholder="Employee Id"
            onChange={(e) => {
              // console.log(e.target.value);
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div class="form-cell">
          <label>Employee Name</label>
          <input
            type="text"
            name="empName"
            value={user.empName}
            placeholder="Employee Name"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div class="form-cell">
          <label>Mobile No.</label>
          <input
            type="number"
            name="mobileNo"
            value={user.mobileNo}
            placeholder="Phone (10)"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div class="form-cell">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={user.department}
            placeholder="Department"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div class="form-cell">
          <label>Project ID</label>
          <input
            type="text"
            name="projectId"
            value={user.projectId}
            placeholder="Project ID"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div class="form-cell">
          <label>Project Name</label>
          <input
            type="text"
            name="projectName"
            value={user.projectName}
            placeholder="Project Name"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div class="form-cell">
          <label>Manager</label>
          <input
            type="text"
            name="manager"
            value={user.manager}
            placeholder="Manager"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div class="form-cell">
          <label>Residence Address</label>
          <input
            type="text"
            name="resAddress"
            value={user.resAddress}
            placeholder="Residence Address"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div class="form-cell">
          <label>Office</label>
          <input
            type="text"
            name="office"
            value={user.office}
            placeholder="Office"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
      </div>
      <button className="form-btn" style={{ align: "center" }}>
        Save
      </button>
    </form>
  );
}
