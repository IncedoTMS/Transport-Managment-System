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

const timings = {
  1: "22:00",
  2: "22:30",
  3: "23:00",
  4: "23:30",
  5: "00:00",
  6: "1:00",
  7: "2:00",
  8: "3:00",
};

const AddAdhoc = () => {
  let history = useHistory();
  const { userId } = useParams();
  var localData = JSON.parse(localStorage.getItem("loadedData"));
  const [cabrequirement, setCabrequirement] = useState({
    userId: localData.empCode,
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

  var localData = JSON.parse(localStorage.getItem("loadedData"));

  const onInputChange = (e) => {
    setCabrequirement({ ...cabrequirement, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const getDateString = (date_in_iso) => {
    const date = new Date(date_in_iso);
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let dateStr = day + "-" + months[month] + "-" + year;
    return dateStr;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(localData);
    var receiver = "";

    await axios
      .get(
        `https://tms-incedo-demo.azurewebsites.net/api/v1/user/manager/${localData.managerId}`
      )
      .then((res) => {
        console.log(res);
        receiver = res.data.managerEmail;
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(receiver);
    // e.preventDefault();
    await axios
      .post(
        "https://tms-incedo-demo.azurewebsites.net/api/v1/cabrequirment",
        cabrequirement
      )
      .then((res) => {
        var data = {
          service_id: "service_qlr0527",
          template_id: "template_1v91x1n",
          user_id: "sCNQRic4STP4B_tW_",
          template_params: {
            email: localData.userName,
            status: "Pending",
            timing: timings[cabrequirement.timeSlotId],
            Date: getDateString(cabrequirement.requestDate),
            request_type: "Adhoc",

            receiversEmail: receiver,
          },
        };

        window.$.ajax("https://api.emailjs.com/api/v1.0/email/send", {
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
        })
          .done(function () {
            console.log("Your mail is sent!");
          })
          .fail(function (error) {
            console.log("Oops... " + JSON.stringify(error));
          });
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
      label: "22:30",
    },

    {
      value: 3,
      label: "23:00",
    },
    {
      value: 4,
      label: "23:30",
    },
    {
      value: 5,
      label: "00:00",
    },
    {
      value: 6,
      label: "01:00",
    },
    {
      value: 7,
      label: "02:00",
    },
    {
      value: 8,
      label: "03:00",
    },
  ];

  var today = new Date();
  var x = today.toISOString();
  var todaysDate = x.substring(0, 10);

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
            inputProps={{ min: `${todaysDate}` }}
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
            label="Enter pick up location"
            name="pickUpLocation"
            autoComplete="pickup location"
            value={pickUpLocation}
            onChange={(e) => onInputChange(e)}
            multiline
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
