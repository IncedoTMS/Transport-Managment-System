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


  var localData=JSON.parse(localStorage.getItem("loadedData"));

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

    console.log(localData);

    e.preventDefault();
    await axios
      .post(
        "https://tms-incedo-demo.azurewebsites.net/api/v1/cabrequirment",
        cabrequirement
      )
      .then((res) => {
        
        var timing = cabrequirement.timeSlotId == 1 ? "22:00" : "03:00";
        var data = {
          service_id: "service_qlr0527",
          template_id: "template_1v91x1n",
          user_id: "sCNQRic4STP4B_tW_",
          template_params: {
            email: localData.userName,
            status: "Pending",
            timing: timing,
            Date: getDateString(cabrequirement.requestDate),
            request_type: "Adhoc",

            receiversEmail: "himanshi.sharma1@incedoinc.com",
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
