import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Monthly = () => {
  const [users, setUser] = useState([]);
  // const [isExpired,setIsExpired]=useState("false");

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/monthly");
    setUser(result.data);
  };

  const [isActive, setIsActive] = useState(true);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>
            <h3 className="title-bar">Monthly Drop Requests</h3>
          </div>
          <div className="expand-sym">
            {!isActive ? <i class="arrow down"></i> : <i class="arrow up"></i>}
          </div>
        </div>
        <div className="accordion-content">
          {isActive && (
            <div className="container">
              <div className="py-4">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead className="thead-dark">
                      <tr className="heading-text">
                        <th scope="col">#</th>
                        <th scope="col">Month</th>

                        <th scope="col">Pickup Location</th>
                        <th scope="col">Pickup Time</th>
                        <th scope="col">Drop Location</th>
                        <th scope="col">Manager Approval</th>
                        <th scope="col">Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{user.month}</td>

                          <td>{user.pickupLocation}</td>
                          <td>{user.pickupTime}</td>
                          <td>{user.dropLocation}</td>
                          <td>{user.managerApproval}</td>
                          <td>{user.status}</td>
                          <td>
                            <Link
                              class="btn btn-primary mr-2"
                              to={`/dashboard/monthly/edit/${user.id}`}
                            >
                              <div style={{ color: "white" }}>Edit</div>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="add">
                <Link
                  class="btn btn-primary mr-2"
                  to={"/dashboard/monthly/addmonthly"}
                >
                  <div style={{ color: "white" }}>Add Monthly Request</div>
                </Link>
              </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Monthly;
