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

export default function Post({ userData }) {
  console.log("Loaded Data: ");
  console.log(userData);
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    // const res = await axios.get("http://localhost:3000/users");
    const res = await axios
      .get("https://localhost:44371/api/v1/user/(empcode,name,email)", {
        params: {
          EmpCode: userData.empCode,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    setUser(res.data);
    console.log("Fetched data: ");
    console.log(res.data);
  };

  const headCells = [
    {
      id: "empCode",
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
      id: "phone",
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
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "95%",
          margin: "45px 15px",
        }}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, fontSize: "1.1rem" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  // backgroundColor: "#78146a",
                  backgroundColor: "#1976d2",

                  borderBottom: "2px solid white",
                  "& th": {
                    fontSize: "1.25rem",
                    color: "white",
                  },
                }}
              >
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id} align="center" padding="normal">
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.empCode}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    fontSize: "1.16rem",
                  }}
                >
                  <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                    {user.empCode}
                    {/* {userData.empCode} */}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                    {user.firstName + " " + user.lastName}
                    {/* {userData.firstName + " " + userData.lastName} */}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "1.16rem" }}>
                    {user.phone}
                    {/* {userData.phone} */}
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
    </>
  );
}
