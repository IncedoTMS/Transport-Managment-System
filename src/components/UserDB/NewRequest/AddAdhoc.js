import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

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

const AddAdhoc = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    date: "",
    empId: "",
    empName: "",
    mobNo: "",
    department: "",
    projectId: "",
    projectName: "",
    manager: "",
    pickupLocation: "Gurgaon",
    pickupTime: "",
    dropLocation: "",
    managerApproval: "Pending",
    status: "Active",
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

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/adhoc", user);
    history.push("/dashboard");
  };
  return (
    // <div className=" mx-auto shadow p-5 adhoc-box">
    //   <form onSubmit={(e) => onSubmit(e)}>
    //     <h2 className="text-center mb-4">Add Adhoc Drop Request</h2>

    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control form-control-lg"
    //         placeholder="Enter date"
    //         name="date"
    //         value={date}
    //         onChange={(e) => onInputChange(e)}
    //       />
    //     </div>

    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control form-control-lg"
    //         placeholder="Enter pickup time"
    //         name="pickupTime"
    //         value={pickupTime}
    //         onChange={(e) => onInputChange(e)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control form-control-lg"
    //         placeholder="Enter drop location"
    //         name="dropLocation"
    //         value={dropLocation}
    //         onChange={(e) => onInputChange(e)}
    //       />
    //     </div>

    //     <button className="btn btn-warning btn-block">Confirm</button>
    //   </form>

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
          Add Adhoc Drop Request
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField type="date"
            margin="normal"
            required
            fullWidth
            pickupTime
            name="date"
            label="Enter pickup date"
            autoComplete="date"
            value={date}
            onChange={(e) => onInputChange(e)}
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Enter pickup time"
            name="pickupTime"
            autoComplete="pickupTime"
            value={pickupTime}
            onChange={(e) => onInputChange(e)}
            
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter drop location"
            name="dropLocation"
            autoComplete="dropLocation"
            value={dropLocation}
            onChange={(e) => onInputChange(e)}
            
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddAdhoc;
