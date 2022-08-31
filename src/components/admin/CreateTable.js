import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Admin.css";

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';



export default function Table({ tableData, searchData }) {


  const Row = ({ tableData }) => {
    function handleEdit(rowID) {
      setIsEditing(!isEditing);
      setIsDisabled(!isDisabled);
    }
    const [isEditing, setIsEditing] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isConfirm,setIsconfirm]=useState(false);
    const [dropDown, setDropdown] = useState("Hold");
    const [tempState, setTempState]= useState(tableData.managerApproval);

    const [userData, setUserData] = useState({

      empid: "",
      name: "",
      role: "",
      reqdate: "",
      status: ""
    }
    )

    useEffect(() => {
      loadUser();
    }, [dropDown])

    const loadUser = async () => {

      const result = await axios.get(`http://localhost:3000/monthly/${tableData.id}`);
      setUserData({ ...result.data, managerApproval: dropDown })

    }

    const sendData = (e) => {

      console.log(userData);
      axios.put(`http://localhost:3000/monthly/${tableData.id}`, userData);
      setIsconfirm(true);
      setIsDisabled(true);


    }

  


    return (
      <tr>
        <td class="emp-id">{tableData.empId}</td>
        <td class="emp-name">{tableData.empName}</td>
        <td class="role">{tableData.dropLocation}</td>
        <td class="req-date">{tableData.month}
        </td>
        <td class="status">

          <div class="btn-group">
            <button type="button"  class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {tempState}
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" onClick={() => { setDropdown("Hold"); setTempState("Hold") }}>Hold</a></li>
              <li><a class="dropdown-item" onClick={() => { setDropdown("Approved"); setTempState("Approved")  }}>Approved</a></li>
              <li><a class="dropdown-item" onClick={() => { setDropdown("Rejected"); setTempState("Rejected")  }}>Rejected</a></li>
            </ul>
          </div>

            {/* <select name="" id="" disabled={isDisabled}>

                  <option value={tableData.status} onClick={() => { setDropdown("Hold") }} >Hold</option>

                  <option value="Approved" onClick={() => { setDropdown("Approved") }}>Approved</option>

                  <option value="Rejected" onClick={() => { setDropdown("Rejected") }}>Rejected</option>

            </select> */}


        </td>
        <td class="confirm-button">
          <button

            name="status"
            onClick={sendData}
            disabled={(tableData.month.toLowerCase().includes("aug"))?true: false}
            // disabled={
            //   tableData.status == "Active"
            //     ? true
            //     : tableData.status == "Inactive"
            //       ? true
            //       : false
            // }
            class="btn btn-success"
          >
            Confirm
          </button>
        </td>
        {/* <td class='edit'><button onClick={() => handleEdit(tableData.id)} class='btn btn-info'>Edit</button></td> */}
    
      </tr>
    );
  };

  return (
    <table className="table table-striped table-bordered">
      <thead class="custom-header">
        <tr>
          <th scope="col">Emp ID</th>
          <th scope="col">Name</th>
          <th scope="col">Drop Location</th>
          <th scope="col">Request Month</th>
          <th scope="col">Manager Approval</th>
          <th scope="col">Confirm</th>
        </tr>
      </thead>
      <tbody>

        {searchData.length > 0 ? searchData.map((t) => <Row tableData={t} key={t.id} />) :
          tableData.map((t) => <Row tableData={t} key={t.id} />)}
      </tbody>
    </table>
  );
}
