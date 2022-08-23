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

  function submitHandler(e) {
    e.preventDefault();
    if (isDisabled) {
      axios.put(" http://localhost:3000/users/1", user).then(
        (resp) => {
          console.log(resp);
        },
        (e) => {
          console.log(e);
        }
      );
    }
  }
  function handleEdit() {
    setIsEditing(!isEditing);
    setIsDisabled(!isDisabled);
  }
  const [isEditing, setIsEditing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inline">
        <div class="form-cell">
          <label>Employee ID</label>
          <input
            required
            type="number"
            name="empId"
            value={user.empId}
            placeholder="Employee Id"
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
            placeholder="Office"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>
      </div>
      {/* <button className="form-btn" style={{ align: "center" }}>
        Save
      </button> */}
      <button onClick={() => handleEdit()} className="form-btn">
        {isEditing ? "Save" : "Edit"}
      </button>
    </form>
  );
}
