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

const timeSlots = {
  1: "22:00",
  2: "22:30",
  3: "23:00",
  4: "23:30",
  5: "00:00",
  6: "1:00",
  7: "2:00",
  8: "3:00",
};

export default function Edit2() {
  let history = useHistory();
  const { id } = useParams();
  // console.log(id);
  const [cabRecord, setCabRecord] = useState({
    userId: "",
    timeSlotId: "",
    requestDate: "",
    isApproved: "",
    pickUpLocation: "",
    dropLocation: "",
    isAdhoc: "",
  });

  const {
    userId,
    timeSlotId,
    requestDate,
    isApproved,
    pickUpLocation,
    dropLocation,
    isAdhoc,
  } = cabRecord;

  const onInputChange = (e) => {
    setCabRecord({ ...cabRecord, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCabs();
  }, []);

  const loadCabs = async () => {
    try {
      const res = await axios.get(
        "https://tms-incedo-demo.azurewebsites.net/api/v1/cabrequirment/(id,userid,roleid,managerid)",
        {
          params: {
            Id: id,
          },
        }
      );
      res.data.map((onecab) => {
        if (onecab.isAdhoc) setCabRecord(onecab);
      });
      // setCabRecord(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    cabRecord.isApproved = 3;
    await axios.put(
      `https://tms-incedo-demo.azurewebsites.net/api/v1/cabrequirment/${id}`,
      cabRecord
    );
    history.push("/dashboard");
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
