import React, { useState } from "react";
import "./Admin.css";

export default function Table({ tableData }) {
  const Row = ({ tableData }) => {
    function handleEdit(rowID) {
      setIsEditing(!isEditing);
      setIsDisabled(!isDisabled);
    }
    const [isEditing, setIsEditing] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    return (
      <tr>
        <td class="emp-id">{tableData.empid}</td>
        <td class="emp-name">{tableData.name}</td>
        <td class="role">{tableData.role}</td>
        <td class="req-date">{tableData.reqdate}
        </td>
        <td class="status">
          <input
            type="text"
            placeholder={tableData.status}
            disabled={isDisabled}
          ></input>
        </td>
        <td class="confirm-button">
          <button
            disabled={
              tableData.status == "Active"
                ? true
                : tableData.status == "Inactive"
                ? true
                : false
            }
            class="btn btn-success"
          >
            Confirm
          </button>
        </td>
        {/* <td class='edit'><button onClick={() => handleEdit(tableData.id)} class='btn btn-info'>Edit</button></td> */}
        <td class="edit">
          <button onClick={() => handleEdit(tableData.id)} class="btn btn-info">
            {isEditing ? "Save" : "Edit"}
          </button>
        </td>
      </tr>
    );
  };

  return (
    <table className="table table-striped table-bordered">
      <thead class="custom-header">
        <tr>
          <th scope="col">Emp ID</th>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Request Date</th>
          <th scope="col">Status</th>
          <th scope="col">Confirm</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {tableData && tableData.map((t) => <Row tableData={t} key={t.id} />)}
      </tbody>
    </table>
  );
}
