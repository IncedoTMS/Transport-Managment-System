import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import emailjs, { init } from "@emailjs/browser";
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
import { MenuItem } from "@mui/material";

const AddAdhoc = () => {
  let history = useHistory();
  const { userId } = useParams();
  const [cabrequirement, setCabrequirement] = useState({
    userId: userId,
    timeSlotId: "",
    requestDate: "",
    isApproved: 3,
    pickUpLocation: "Gurugram",
    dropLocation: "",
    isAdhoc: true,
  });

  const {
    timeSlotId,
    requestDate,
    isApproved,
    pickUpLocation,
    dropLocation,
    isAdhoc,
  } = cabrequirement;

  const onInputChange = (e) => {
    setCabrequirement({ ...cabrequirement, [e.target.name]: e.target.value });
  };

  const form = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://tms-incedo-demo.azurewebsites.net/api/v1/cabrequirment",
        cabrequirement
      )
      .then((res) => {
        // console.log(res);
        emailjs
          .sendForm(
            "service_aw7irj8",
            "template_l8ouh1c",
            form.current,
            "9xBu-OIGFCW5eVISf"
          )

          .then(
            (result) => {
              alert("Message sent successfully");

              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      })
      .catch((e) => {
        console.log(e);
      });

    history.push("/dashboard");
  };
  const timeSlots = [
    {
      value: 1,
      label: "22:00",
    },
    {
      value: 2,
      label: "03:00",
    },
  ];
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
          Add Adhoc Drop Request
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }} ref={form}>
          <TextField
            type="date"
            margin="normal"
            required
            fullWidth
            name="requestDate"
            label="Enter pickup date"
            value={requestDate}
            onChange={(e) => onInputChange(e)}
            autoFocus
          />

          <TextField
            margin="normal"
            select
            label="Select pickup time"
            value={timeSlotId}
            onChange={(e) => onInputChange(e)}
            name="timeSlotId"
            required
            fullWidth
          >
            {timeSlots.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

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
            multiline
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
