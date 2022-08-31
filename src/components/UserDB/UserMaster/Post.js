import React, { useState, useEffect } from "react";
import "./Post.css";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fontSize } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Post() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUser(res.data);
  };

  const headCells = [
    {
      id: "empId",
      numeric: true,
      disablePadding: false,
      label: "Emp ID",
    },
    {
      id: "empName",
      numeric: false,
      disablePadding: false,
      label: "Emp Name",
    },
    {
      id: "mobileNo",
      numeric: true,
      disablePadding: false,
      label: "Mobile No.",
    },
    {
      id: "department",
      numeric: false,
      disablePadding: false,
      label: "Department",
    },
    {
      id: "projectId",
      numeric: false,
      disablePadding: false,
      label: "Project ID",
    },
    {
      id: "projectName",
      numeric: false,
      disablePadding: false,
      label: "Project Name",
    },
    {
      id: "manager",
      numeric: false,
      disablePadding: false,
      label: "Manager",
    },
    {
      id: "resAddress",
      numeric: false,
      disablePadding: false,
      label: "Residence Address",
    },
    {
      id: "office",
      numeric: false,
      disablePadding: false,
      label: "Office",
    },
  ];

  const [isActive, setIsActive] = useState(true);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>
            <h3 className="title-bar">User Master</h3>
          </div>
        </div>
        <div>
          <div className="accordion-content">
            <Box
              sx={{ bgcolor: "background.paper", width: "95%", margin: "auto" }}
            >
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650, fontSize: "1.1rem" }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor: "#78146a",
                        borderBottom: "2px solid white",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "white",
                        },
                      }}
                    >
                      {headCells.map((headCell) => (
                        <TableCell
                          key={headCell.id}
                          align="center"
                          padding="normal"
                        >
                          {headCell.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => (
                      <TableRow
                        key={user.empId}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          fontSize: "1.16rem",
                        }}
                      >
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.empId}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.empName}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.mobileNo}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.department}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.projectId}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.projectName}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.manager}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.resAddress}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                          {user.office}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
