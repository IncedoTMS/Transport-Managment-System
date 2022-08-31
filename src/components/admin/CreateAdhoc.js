// import axios from "axios";
// import React, { useState } from "react";
// import { useEffect } from "react";
// import "./Admin.css";

// export default function AdhocTable({ tableData, searchData }) {


//   const Row = ({ tableData }) => {
//     function handleEdit(rowID) {
//       setIsEditing(!isEditing);
//       setIsDisabled(!isDisabled);
//     }
//     const [isEditing, setIsEditing] = useState(false);
//     const [isDisabled, setIsDisabled] = useState(false);
//     const [isConfirm,setIsconfirm]=useState(false);
//     const [dropDown, setDropdown] = useState("Hold");
//     const [tempState, setTempState]= useState(tableData.managerApproval);

//     const [userData, setUserData] = useState({

//       empid: "",
//       name: "",
//       role: "",
//       reqdate: "",
//       status: ""
//     }
//     )

//     useEffect(() => {
//       loadUser();
//     }, [dropDown])

//     const loadUser = async () => {

//       const result = await axios.get(`http://localhost:3000/adhoc/${tableData.id}`);
//       setUserData({ ...result.data, managerApproval: dropDown })

//     }

//     const sendData = (e) => {


//       console.log(userData);
//       axios.put(`http://localhost:3000/adhoc/${tableData.id}`, userData);
//       setIsconfirm(true);
//       setIsDisabled(true);


//     }


//     return (
//       <tr>
//         <td class="emp-id">{tableData.empId}</td>
//         <td class="emp-name">{tableData.empName}</td>
//         <td class="role">{tableData.dropLocation}</td>
//         <td class="req-date">{tableData.date}
//         </td>
//         <td class="status">

//           <div class="btn-group">
//             <button type="button"  class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//               {tempState}
//             </button>
//             <ul class="dropdown-menu">
//               <li><a class="dropdown-item" onClick={() => { setDropdown("Hold"); setTempState("Hold") }}>Hold</a></li>
//               <li><a class="dropdown-item" onClick={() => { setDropdown("Approved"); setTempState("Approved")  }}>Approved</a></li>
//               <li><a class="dropdown-item" onClick={() => { setDropdown("Rejected"); setTempState("Rejected")  }}>Rejected</a></li>
//             </ul>
//           </div>

//             {/* <select name="" id="" disabled={isDisabled}>

//                   <option value={tableData.status} onClick={() => { setDropdown("Hold") }} >Hold</option>

//                   <option value="Approved" onClick={() => { setDropdown("Approved") }}>Approved</option>

//                   <option value="Rejected" onClick={() => { setDropdown("Rejected") }}>Rejected</option>

//             </select> */}


//         </td>
//         <td class="confirm-button">
//           <button

//             name="status"
//             onClick={sendData}

//             // disabled={(tableData.month.toLowerCase().includes("aug") || tableData.month.toLowerCase().includes("sep"))?true: false}
//             // disabled={
//             //   tableData.status == "Active"
//             //     ? true
//             //     : tableData.status == "Inactive"
//             //       ? true
//             //       : false
//             // }
//             class="btn btn-success"
//           >
//             Confirm
//           </button>
//         </td>
//         {/* <td class='edit'><button onClick={() => handleEdit(tableData.id)} class='btn btn-info'>Edit</button></td> */}
    
//       </tr>
//     );
//   };

//   return (
//     <table className="table table-striped table-bordered">
//       <thead class="custom-header">
//         <tr>
//           <th scope="col">Emp ID</th>
//           <th scope="col">Name</th>
//           <th scope="col">Drop Location</th>
//           <th scope="col">Request Date</th>
//           <th scope="col">Manager Approval</th>
//           <th scope="col">Confirm</th>
//         </tr>
//       </thead>
//       <tbody>

//         {searchData.length > 0 ? searchData.map((t) => <Row tableData={t} key={t.id} />) :
//           tableData.map((t) => <Row tableData={t} key={t.id} />)}
//       </tbody>
//     </table>
//   );
// }


import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
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

function createData(empId, empName, dropLocation,month) {
  return {
    empId, empName, dropLocation,month
  };
}

var rows = [
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'EMP ID',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Employee Name',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Drop Location',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Month',
  },
];

function EnhancedTableHead(props) {
  const { displayData,onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  console.log(displayData);

  return (
    <TableHead style={{fontSize:"24px"}}>
      <TableRow
      
      sx={{
        "& th":{
            backgroundColor: "#FF4500",
            color: "white",
            fontSize: "1.5rem"

        }
        

      }}

      >
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function CreateAdhocTable({tableData}) {

    tableData.map((data,id)=>{
        // console.log(data);
        rows.push(data);
    })
        
console.log(rows);
    



  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                    //   onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}

                      sx={{
                        fontSize: "1.5rem",
                      }

                      }

                    >
                      <TableCell
                      align="center"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{fontSize: "1.25rem"}}
                      >
                        {row.empId}

                      </TableCell>
                      <TableCell  align="center" sx={{fontSize: "1.25rem"}}>{row.empName}</TableCell>
                      <TableCell  align="center" sx={{fontSize: "1.25rem"}}>{row.pickupLocation}</TableCell>
                      <TableCell  align="center" sx={{fontSize: "1.25rem"}}>{row.date}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
