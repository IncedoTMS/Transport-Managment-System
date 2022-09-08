// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory, useParams } from "react-router-dom";
// import "./Edit.css";

// const Edit = () => {
//   let history = useHistory();
//   const { id } = useParams();
//   const [user, setUser] = useState({
//     month: "",
//     empId: "",
//     empName: "",
//     mobNo: "",
//     department: "",
//     projectId: "",
//     projectName: "",
//     manager: "",
//     pickupLocation: "",
//     pickupTime: "",
//     dropLocation: "",
//     managerApproval: "",
//     status: "",
//   });

//   const {
//     month,
//     empId,
//     empName,
//     mobNo,
//     department,
//     projectId,
//     projectName,
//     manager,
//     pickupLocation,
//     pickupTime,
//     dropLocation,
//     managerApproval,
//     status,
//   } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     user.managerApproval="Pending";
//     await axios.put(`http://localhost:3000/monthly/${id}`, user);
//     history.push("/dashboard");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:3000/monthly/${id}`);
//     setUser(result.data);
//   };
//   return (
//     <div className=" mx-auto shadow p-5 edit-box">
//       <form onSubmit={(e) => onSubmit(e)}>
//         <h2 className="text-center mb-4">Edit Drop Location</h2>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="Enter your drop location"
//             name="dropLocation"
//             value={dropLocation}
//             onChange={(e) => onInputChange(e)}
//           />
//         </div>

//         <button className="btn btn-warning btn-block">Update User</button>
//       </form>
//     </div>
//   );
// };

// export default Edit;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "./Edit.css";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function Edit() {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    date: "",
    empId: "",
    empName: "",
    mobNo: "",
    department: "",
    projectId: "",
    projectName: "",
    manager: "",
    pickupLocation: "",
    pickupTime: "",
    dropLocation: "",
    managerApproval: "",
    status: "",
  });

  const {
    date,
    empId,
    empName,
    mobNo,
    department,
    projectId,
    projectName,
    manager,
    pickupLocation,
    pickupTime,
    dropLocation,
    managerApproval,
    status,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    user.managerApproval = "Pending";
    await axios.put(`http://localhost:3000/monthly/${id}`, user);
    history.push("/dashboard");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/monthly/${id}`);
    setUser(result.data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ margin: "-6px", padding: "14px", marginTop: "4px" }}
        >
          Edit Drop Location
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter drop location"
            name="dropLocation"
            autoComplete="email"
            value={dropLocation}
            onChange={(e) => onInputChange(e)}
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update drop location
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

