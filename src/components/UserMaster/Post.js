import React, { useState, useEffect } from "react";
import "./Post.css";
import axios from "axios";
// const axios = require("axios");

export default function Post() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUser(res.data);
  };

  const [isActive, setIsActive] = useState(true);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>
            <h3 className="title-bar">User Master</h3>
          </div>
          <div className="expand-sym">{isActive ? "-" : "+"}</div>
        </div>
        <div>
          {" "}
          {isActive && (
            <div className="accordion-content">
              <div className="container">
                <div className="py-4">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Emp ID</th>
                          <th scope="col">Emp Name</th>
                          <th scope="col">Mobile No.</th>
                          <th scope="col">Department</th>
                          <th scope="col">Project ID</th>
                          <th scope="col">Project Name</th>
                          <th scope="col">Manager</th>
                          <th scope="col">Residence Address</th>
                          <th scope="col">Office</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr>
                            <td>{user.empId}</td>
                            <td>{user.empName}</td>
                            <td>{user.mobileNo}</td>
                            <td>{user.department}</td>
                            <td>{user.projectId}</td>
                            <td>{user.projectName}</td>
                            <td>{user.manager}</td>
                            <td>{user.resAddress}</td>
                            <td>{user.office}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
