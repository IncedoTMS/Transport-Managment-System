import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Monthly = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/monthly");
    setUser(result.data);
  };

//   const deleteUser = async id => {
//     await axios.delete(`http://localhost:3000/monthly/${id}`);
//     loadUsers();
//   };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Monthly Drop Requests</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Month</th>
              <th scope="col">Employee Id</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Department</th>
              <th scope="col">Project Id</th>
              <th scope="col">Project Name</th>
              <th scope="col">Manager</th>
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
                <td>{user.empId}</td>
                <td>{user.empName}</td>
                <td>{user.mobNo}</td>
                <td>{user.department}</td>
                <td>{user.projectId}</td>
                <td>{user.projectName}</td>
                <td>{user.manager}</td>
                <td>{user.pickupLocation}</td>
                <td>{user.pickupTime}</td>
                <td>{user.dropLocation}</td>
                <td>{user.managerApproval}</td>
                <td>{user.status}</td>
                <td>
                  {/* <Link class="btn btn-primary mr-4" to={`/users/${user.id}`}>
                    View
                  </Link> */}
                  <Link
                    class="btn btn-primary mr-2"
                    // to={`/monthly/edit/${user.id}`}
                    to="/monthly/edit"
                    
                  >
                    <div style={{color:"white"}}>Edit</div>
                  </Link>
                  {/* <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Monthly;